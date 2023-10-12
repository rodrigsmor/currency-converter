import { ApiProperty } from '@nestjs/swagger';
import { CurrencyType } from '../../../utils/@types';

export class CurrencyDto implements CurrencyType {
  @ApiProperty({
    example: 24.831,
    type: Number,
    description: 'The unit value of the currency',
  })
  unit_value: number;

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
  currency_code: string;

  @ApiProperty({
    example: 'United States Dollar',
    type: String,
    description: 'The name of the currency',
  })
  currency_name: string;

  @ApiProperty({
    example: '$',
    type: String,
    description: 'The symbol that represents the currency',
  })
  monetary_symbol: string;

  @ApiProperty({
    example: 'USA',
    type: String,
    description: 'The flag code that will be render in UI',
  })
  flag_code: string;

  constructor(value: number, currencyData: CurrencyType) {
    this.unit_value = value;
    this.flag_code = currencyData?.flag_code;
    this.country_name = currencyData.country_name;
    this.currency_code = currencyData.currency_code;
    this.currency_name = currencyData.currency_name;
    this.monetary_symbol = currencyData.monetary_symbol;
  }
}
