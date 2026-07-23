import { create } from "zustand";

type DebugState = {
  debugOutput: string;
  isDebugging: boolean;
  debugStatus: string;
  tokenEstimate: number;
  setDebugOutput: (output: string) => void;
  appendDebugOutput: (token: string) => void;
  setDebugging: (isDebugging: boolean) => void;
  setDebugStatus: (status: string) => void;
  setTokenEstimate: (estimate: number) => void;
  clearDebug: () => void;
};

export const useDebug = create<DebugState>((set) => ({
  debugOutput: "",
  isDebugging: false,
  debugStatus: "",
  tokenEstimate: 0,
  setDebugOutput: (output) => set({ debugOutput: output }),
  appendDebugOutput: (token) =>
    set((state) => ({ debugOutput: state.debugOutput + token })),
  setDebugging: (isDebugging) => set({ isDebugging }),
  setDebugStatus: (debugStatus) => set({ debugStatus }),
  setTokenEstimate: (tokenEstimate) => set({ tokenEstimate }),
  clearDebug: () => set({ debugOutput: "", debugStatus: "", tokenEstimate: 0 }),
}));
