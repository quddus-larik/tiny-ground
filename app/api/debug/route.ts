import { NextRequest } from "next/server";
import { ChatGroq } from "@langchain/groq";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { buildPass1Prompt, buildPass2Prompt } from "@/lib/ai/prompts";
import { smartTruncate, extractCodeRegion, estimateTokens } from "@/lib/ai/tokenUtils";

interface DebugRequest {
  code: string;
  language: string;
  errorOutput?: string;
}

const fastModel = new ChatGroq({
  modelName: "llama-3.1-8b-versatile",
  temperature: 0.1,
  apiKey: process.env.GROQ_API_KEY,
});

const deepModel = new ChatGroq({
  modelName: "llama-3.3-70b-versatile",
  temperature: 0.2,
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  let body: DebugRequest;

  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
  }

  const { code, language, errorOutput } = body;

  if (!code?.trim()) {
    return new Response(JSON.stringify({ error: "No code provided" }), { status: 400 });
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: string) => {
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${data}\n\n`));
      };

      try {
        send("status", JSON.stringify({ phase: "analyzing", message: "Scanning code for issues..." }));

        const truncatedCode = smartTruncate(code);
        const pass1Prompt = buildPass1Prompt({ code: truncatedCode, language, errorOutput });

        const pass1Response = await fastModel.invoke([
          new SystemMessage("You are a precise code analysis tool. Return only valid JSON."),
          new HumanMessage(pass1Prompt),
        ]);

        const pass1Text = typeof pass1Response.content === "string"
          ? pass1Response.content
          : JSON.stringify(pass1Response.content);

        let region: { start_line: number; end_line: number; summary: string };
        try {
          const jsonMatch = pass1Text.match(/\{[\s\S]*\}/);
          region = JSON.parse(jsonMatch?.[0] ?? pass1Text);
        } catch {
          const lines = code.split("\n");
          region = { start_line: 1, end_line: lines.length, summary: "Full code analysis" };
        }

        send("status", JSON.stringify({
          phase: "focused_analysis",
          message: `Found likely issue at lines ${region.start_line}-${region.end_line}: ${region.summary}`,
        }));

        const codeRegion = extractCodeRegion(code, region.start_line, region.end_line);
        const pass2Prompt = buildPass2Prompt({
          codeRegion, language, errorOutput,
          pass1Summary: region.summary,
        });

        const pass2Stream = await deepModel.stream([
          new SystemMessage("You are an expert code debugger. Provide clear, actionable debugging advice."),
          new HumanMessage(pass2Prompt),
        ]);

        for await (const chunk of pass2Stream) {
          const token = typeof chunk.content === "string" ? chunk.content : "";
          if (token) {
            send("token", token);
          }
        }

        const totalTokens = estimateTokens(truncatedCode) + estimateTokens(codeRegion) + 2000;
        send("done", JSON.stringify({ tokens_used: totalTokens }));

      } catch (error) {
        const message = error instanceof Error ? error.message : "Debug request failed";
        send("error", message);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
