"use client";

import { useOutput } from "@/stores/output.state";
import { useSelectedLanguage } from "@/stores/lang.state";

const IFRAME_LANGUAGES = new Set(["html", "react"]);

export function OutputViewer() {
  const { output, isRunning } = useOutput();
  const { selectedLanguageState } = useSelectedLanguage();

  const language = (selectedLanguageState || "javascript").toLowerCase();
  const useIframe = IFRAME_LANGUAGES.has(language);

  return (
    <div className="relative w-full h-full p-2 font-mono text-sm">
      {useIframe ? (
        <iframe
          title="Output Preview"
          className="w-full rounded-lg bg-white"
          sandbox="allow-scripts"
          srcDoc={output}
        />
      ) : (
        <pre className="whitespace-pre-wrap warp-break-words">
          {output || "No output yet."}
        </pre>
      )}

      {isRunning && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/80 text-foreground">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground/30 border-t-foreground" />
            <span>Running…</span>
          </div>
        </div>
      )}
    </div>
  );
}
