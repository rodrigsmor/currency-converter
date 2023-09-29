'use client'

import { Language, langList } from '@/utils/constants/lang-list';
import { LangEnum } from '@/utils/enums/lang.enum';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

interface LanguageContextProvider {
  lang: LangEnum;
  currentLanguage: Language | undefined;
  setLang: (lang: LangEnum) => void;
}

export const LanguageContext = createContext<LanguageContextProvider>({
  lang: LangEnum.en,
  setLang: () => {},
  currentLanguage: langList.find((lang) => lang.lang === LangEnum.en),
});

export function LanguageContextProvider({ children }: PropsWithChildren) {
  const [ lang, setLang ] = useState<LangEnum>(() => {
    // let langStorage = null;

    // if (typeof window !== 'undefined') {
    //   langStorage = localStorage.getItem('lang@currency-converter');
    // }

    // return langStorage
    //   ? JSON.parse(langStorage) as LangEnum
    //   : LangEnum.en
    return LangEnum.en
  });

  useEffect(() => {
    localStorage.setItem('lang@currency-converter', JSON.stringify(lang));
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        currentLanguage: langList.find((langItem) => langItem.lang === lang as LangEnum),
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}