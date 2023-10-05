import { ApiProperty } from '@nestjs/swagger';
import { CurrencyType } from '../../../utils/@types';

export class CountryDto implements Partial<CurrencyType> {
  @ApiProperty({
    example: 'United States of America',
    type: String,
    description: 'The name of the country to which the currency belongs.',
  })
  country_name: string;

  @ApiProperty({
    example: 'USD',
    type: String,
    description: 'The code of the currency',
  })
  currency_code?: string;

  @ApiProperty({
    example: '$',
    type: String,
    description: 'The symbol that represents the currency',
  })
  monetary_symbol?: string;

  constructor(currency: CurrencyType) {
    this.country_name = currency.country_name;
    this.currency_code = currency.currency_code;
    this.monetary_symbol = currency.monetary_symbol;
  }
}
