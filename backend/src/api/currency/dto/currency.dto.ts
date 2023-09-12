import { CurrencyType } from '../../../utils/@types/currency';

export class CurrencyDto implements CurrencyType {
  unit_value: number;
  country_name: string;
  currency_code: string;
  currency_name: string;
  monetary_symbol: string;

  constructor(value: number, currencyData: CurrencyType) {
    this.unit_value = value;
    this.country_name = currencyData.country_name;
    this.currency_code = currencyData.currency_code;
    this.currency_name = currencyData.currency_name;
    this.monetary_symbol = currencyData.monetary_symbol;
  }
}
