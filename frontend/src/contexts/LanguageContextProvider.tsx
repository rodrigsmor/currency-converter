'use client'

import { PropsWithChildren, createContext, useEffect } from 'react';

// enums
import { LangEnum } from '@/utils/enums/lang.enum';

// constants
import { Language, langList } from '@/utils/constants/lang-list';

// hooks
import { useChangeLocale, useCurrentLocale } from '@/i18n/locales/client';

interface LanguageContextProvider {
  lang: LangEnum;
  currentLanguage: Language | undefined;
  setLang: (lang: LangEnum) => void;
}

export const LanguageContext = createContext<LanguageContextProvider>({
  lang: LangEnum.en,
  setLang: (lang: LangEnum) => {},
  currentLanguage: langList.find((lang) => lang.lang === LangEnum.en),
});

function isLangValid(lang: string): boolean {
  return lang in LangEnum;
}

export function LanguageContextProvider({ children }: PropsWithChildren) {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();

  useEffect(() => {
    if (!isLangValid(currentLocale)) {
      changeLocale('en')
    }
  }, [changeLocale, currentLocale])

  return (
    <LanguageContext.Provider
      value={{
        lang: currentLocale as LangEnum,
        setLang: (lang) => changeLocale(lang),
        currentLanguage: langList.find((langItem) => langItem.lang === currentLocale as LangEnum),
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}