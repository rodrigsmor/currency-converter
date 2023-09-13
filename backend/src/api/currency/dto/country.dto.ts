import { CurrencyType } from '../../../utils/@types/currency';

export class CountryDto implements Partial<CurrencyType> {
  country_name: string;
  currency_code?: string;
  monetary_symbol?: string;

  constructor(currency: CurrencyType) {
    this.country_name = currency.country_name;
    this.currency_code = currency.currency_code;
    this.monetary_symbol = currency.monetary_symbol;
  }
}
