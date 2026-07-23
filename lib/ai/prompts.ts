interface Pass1Input {
  code: string;
  language: string;
  errorOutput?: string;
}

interface Pass2Input {
  codeRegion: string;
  language: string;
  errorOutput?: string;
  pass1Summary: string;
}

export function buildPass1Prompt({ code, language, errorOutput }: Pass1Input): string {
  return `You are a code debugging expert. Analyze this ${language} code and identify the most likely buggy region.

${errorOutput ? `Error output:\n\`\`\`\n${errorOutput}\n\`\`\`\n` : ""}

Code:
\`\`\`${language}
${code}
\`\`\`

Respond with ONLY a JSON object (no markdown, no explanation):
{
  "start_line": <1-indexed line number>,
  "end_line": <1-indexed line number>,
  "confidence": "high" | "medium" | "low",
  "summary": "<one sentence describing the likely bug>"
}`;
}

export function buildPass2Prompt({ codeRegion, language, errorOutput, pass1Summary }: Pass2Input): string {
  return `You are a code debugging expert. A first-pass analysis identified this region of ${language} code as likely buggy:

Analysis: ${pass1Summary}

Code region:
\`\`\`${language}
${codeRegion}
\`\`\`

${errorOutput ? `Error output:\n\`\`\`\n${errorOutput}\n\`\`\`\n` : ""}

Provide a detailed debugging analysis:
1. What is the bug?
2. Why does it happen?
3. How to fix it (show corrected code)
4. Any related issues to watch for

Be concise but thorough. Use markdown formatting.`;
}
