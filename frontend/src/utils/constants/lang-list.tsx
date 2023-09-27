import { LangEnum } from "../enums/lang.enum"

type LangList = {
  lang: LangEnum;
  label: string;
  langCode: string;
}

export const langList: LangList[] = [
  {
    lang: LangEnum.en,
    label: 'English',
    langCode: 'en',
  },
  {
    lang: LangEnum['pt-BR'],
    label: 'Brazilian Portuguese',
    langCode: 'pt-BR',
  }
]