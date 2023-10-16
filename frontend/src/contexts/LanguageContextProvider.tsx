'use client'

import { PropsWithChildren, createContext, useState } from 'react';

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

export function LanguageContextProvider({ children }: PropsWithChildren) {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const [ lang, setLang ] = useState<LangEnum>(() => {
    return params.lang ? params.lang as LangEnum : LangEnum.en
  });

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang: (lang) => {
          const newPath = pathname.replace(/\/[^/]+/, `/${lang}`);
          router.push(newPath, { scroll: false })
        },
        currentLanguage: langList.find((langItem) => langItem.lang === lang as LangEnum),
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}