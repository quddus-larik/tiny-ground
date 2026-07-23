const CHARS_PER_TOKEN = 4;
const MAX_PASS1_CHARS = 16000;

export function estimateTokens(text: string): number {
  return Math.ceil(text.length / CHARS_PER_TOKEN);
}

export function smartTruncate(code: string, maxChars = MAX_PASS1_CHARS): string {
  if (code.length <= maxChars) return code;

  const half = Math.floor(maxChars / 2);
  const firstHalf = code.slice(0, half);
  const lastHalf = code.slice(-half);

  return `${firstHalf}\n\n// ... [middle section omitted for brevity] ...\n\n${lastHalf}`;
}

export function extractCodeRegion(
  fullCode: string,
  startLine: number,
  endLine: number,
  padding = 5,
): string {
  const lines = fullCode.split("\n");
  const paddedStart = Math.max(0, startLine - 1 - padding);
  const paddedEnd = Math.min(lines.length, endLine + padding);

  return lines
    .slice(paddedStart, paddedEnd)
    .map((line, i) => `${paddedStart + i + 1}: ${line}`)
    .join("\n");
}
