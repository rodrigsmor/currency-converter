import { CurrencyDto } from '../../api/currency/dto';

export interface IGroupedCountry {
  group_name: string;
  countries: CurrencyDto[];
}
