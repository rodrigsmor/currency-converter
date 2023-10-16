'use client'

import { PropsWithChildren, createContext, useEffect, useState } from 'react';

// enums
import { LangEnum } from '@/utils/enums/lang.enum';

// constants
import { Language, langList } from '@/utils/constants/lang-list';

// hooks
import { useParams, usePathname, useRouter } from 'next/navigation';

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
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const [ lang, setLang ] = useState<LangEnum>(() => {
    return params.lang ? params.lang as LangEnum : LangEnum.en
  });

  function navigateToNewLang(lang: string) {
    const newPath = (pathname === '/')
      ? `/${lang}`
      : pathname.replace(/\/[^/]+/, `/${lang}`);
    router.push(newPath, { scroll: false })
  }

  useEffect(() => {
    if (!isLangValid(lang)) {
      navigateToNewLang('en')
    }
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: (lang) => navigateToNewLang(lang),
        currentLanguage: langList.find((langItem) => langItem.lang === lang as LangEnum),
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}