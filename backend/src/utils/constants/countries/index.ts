import { Currencies } from '../../@types';
import { EnCountries } from './en-countries';
import { TranslationEnum } from '../../enums';
import { PtBrCountries } from './pt-BR-countries';

type ICountriesTranslations = {
  [key in TranslationEnum as string]: Currencies;
};

export const CountriesTranslations: ICountriesTranslations = {
  en: EnCountries,
  'pt-BR': PtBrCountries,
};
