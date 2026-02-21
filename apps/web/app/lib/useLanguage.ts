'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, getTranslation } from './translations';

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'id',
      setLanguage: (lang: Language) => set({ language: lang }),
      t: (path: string) => getTranslation(path, get().language)
    }),
    {
      name: 'yarehnasa-language'
    }
  )
);
