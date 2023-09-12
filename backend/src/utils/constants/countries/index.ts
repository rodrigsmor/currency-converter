import { EnCountries } from './en-countries';
import { TranslationEnum } from '../../enums';
import { PtBrCountries } from './pt-BR-countries';
import { Currencies } from '../../@types/currencies';

type ICountriesTranslations = {
  [key in TranslationEnum]: Currencies;
};

export const CountriesTranslations: ICountriesTranslations = {
  en: EnCountries,
  'pt-BR': PtBrCountries,
};
