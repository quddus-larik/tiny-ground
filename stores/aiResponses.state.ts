import { create } from "zustand";

export interface AiResponse {
  id: string;
  code: string;
  language: string;
  response: string;
  tokenEstimate: number;
  timestamp: number;
}

type AiResponsesState = {
  responses: AiResponse[];
  addResponse: (response: Omit<AiResponse, "id" | "timestamp">) => void;
  clearResponses: () => void;
  removeResponse: (id: string) => void;
};

export const useAiResponses = create<AiResponsesState>((set) => ({
  responses: [],
  addResponse: (response) =>
    set((state) => ({
      responses: [
        ...state.responses,
        {
          ...response,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
        },
      ],
    })),
  clearResponses: () => set({ responses: [] }),
  removeResponse: (id) =>
    set((state) => ({
      responses: state.responses.filter((r) => r.id !== id),
    })),
}));
