import { useUserCode } from "@/stores/code.state";
import { useSelectedLanguage } from "@/stores/lang.state";
import { useDebug } from "@/stores/debug.state";
import { useAiResponses } from "@/stores/aiResponses.state";

interface DebugOptions {
  code?: string;
  language?: string;
  errorOutput?: string;
}

export async function handleAiDebug({
  code,
  language,
  errorOutput,
}: DebugOptions = {}) {
  const selectedLanguage =
    (language ?? useSelectedLanguage.getState().selectedLanguageState ?? "javascript").toLowerCase();
  const userCode = code ?? useUserCode.getState().userCode ?? "";
  const { setDebugOutput, appendDebugOutput, setDebugging, setDebugStatus, setTokenEstimate, clearDebug } =
    useDebug.getState();

  if (!userCode.trim()) {
    setDebugOutput("No code to debug. Write some code first.");
    return;
  }

  clearDebug();
  setDebugging(true);
  setDebugStatus("Starting AI analysis...");

  try {
    const response = await fetch("/api/debug", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code: userCode,
        language: selectedLanguage,
        errorOutput,
      }),
    });

    if (!response.ok) {
      throw new Error(`Debug request failed (${response.status})`);
    }

    const reader = response.body?.getReader();
    if (!reader) throw new Error("No response body");

    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      let currentEvent = "";
      for (const line of lines) {
        if (line.startsWith("event: ")) {
          currentEvent = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          const data = line.slice(6);

          switch (currentEvent) {
            case "status":
              try {
                const status = JSON.parse(data);
                setDebugStatus(status.message);
              } catch { /* ignore parse errors */ }
              break;

            case "token":
              appendDebugOutput(data);
              break;

            case "done":
              try {
                const result = JSON.parse(data);
                setTokenEstimate(result.tokens_used);
                useAiResponses.getState().addResponse({
                  code: userCode,
                  language: selectedLanguage,
                  response: useDebug.getState().debugOutput,
                  tokenEstimate: result.tokens_used,
                });
              } catch { /* ignore */ }
              break;

            case "error":
              setDebugOutput(`Error: ${data}`);
              break;
          }
        }
      }
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    setDebugOutput(`Debug request failed: ${message}`);
  } finally {
    setDebugging(false);
  }
}
