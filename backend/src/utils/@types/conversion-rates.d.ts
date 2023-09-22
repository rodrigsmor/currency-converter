import { CurrenciesEnum } from '../enums';

export interface IConversionRate {
  [key in CurrenciesEnum]?: number;
}
