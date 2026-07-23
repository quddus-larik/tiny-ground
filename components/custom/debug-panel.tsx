"use client";
import { useDebug } from "@/stores/debug.state";

export function DebugPanel() {
  const { debugOutput, isDebugging, debugStatus, tokenEstimate } = useDebug();

  return (
    <div className="relative w-full h-full p-4 font-mono text-sm overflow-auto">
      {debugStatus && (
        <div className="text-xs text-muted mb-2">{debugStatus}</div>
      )}
      <pre className="whitespace-pre-wrap break-words">
        {debugOutput || "Click 'Debug with AI' to analyze your code."}
      </pre>
      {tokenEstimate > 0 && (
        <div className="text-xs text-muted mt-4">
          ~{tokenEstimate.toLocaleString()} tokens used
        </div>
      )}
      {isDebugging && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black/50 text-white">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            <span>Analyzing code...</span>
          </div>
        </div>
      )}
    </div>
  );
}
