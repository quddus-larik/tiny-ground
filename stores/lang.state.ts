import { create } from "zustand"

interface SelectedLanguagePayload {
  selectedLanguageState: string | ''
}

type SelectedLanguageInterface = {
  selectedLanguageState: string | 'javascript',
  setLanguageState: (payload: SelectedLanguagePayload) => void
}

export const useSelectedLanguage = create<SelectedLanguageInterface>((set)=>({
  selectedLanguageState: 'javascript',
  setLanguageState: (payload) => set(payload)
}));
