import { create } from "zustand";

type OutputState = {
  output: string;
  errorOutput: string;
  isRunning: boolean;
  setOutput: (output: string) => void;
  setErrorOutput: (errorOutput: string) => void;
  setRunning: (isRunning: boolean) => void;
  clearOutput: () => void;
};

export const useOutput = create<OutputState>((set) => ({
  output: "",
  errorOutput: "",
  isRunning: false,
  setOutput: (output) => set({ output }),
  setErrorOutput: (errorOutput) => set({ errorOutput }),
  setRunning: (isRunning) => set({ isRunning }),
  clearOutput: () => set({ output: "", errorOutput: "" }),
}));
