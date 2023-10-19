import { LangEnum } from "../enums/lang.enum"

export type Language = {
  lang: LangEnum;
  label: 'langSelect.option.en' | 'langSelect.option.ptBR';
  langCode: string;
  countryCode: string;
}

export const langList: Language[] = [
  {
    lang: LangEnum.en,
    label: 'langSelect.option.en',
    langCode: 'EN',
    countryCode: 'us',
  },
  {
    lang: LangEnum['pt-BR'],
    label: 'langSelect.option.ptBR',
    langCode: 'PT',
    countryCode: 'br'
  }
]