import { LangEnum } from "../enums/lang.enum"

export type Language = {
  lang: LangEnum;
  label: string;
  langCode: string;
  countryCode: string;
}

export const langList: Language[] = [
  {
    lang: LangEnum.en,
    label: 'English',
    langCode: 'EN',
    countryCode: 'us',
  },
  {
    lang: LangEnum['pt-BR'],
    label: 'Brazilian Portuguese',
    langCode: 'PT',
    countryCode: 'br'
  }
]