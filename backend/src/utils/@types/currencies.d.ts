import { CurrencyType } from '.';
import { CurrenciesEnum } from '../enums';

export type Currencies = {
  [key in CurrenciesEnum]?: CurrencyType;
};
