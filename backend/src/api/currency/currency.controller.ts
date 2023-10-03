import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { Language } from '../../utils/decorators';
import { CurrencyService } from './currency.service';
import { IGroupedCountry } from '../../utils/@types';
import { ConversionDto, CountryDto, CurrencyDto } from './dto';
import { CurrenciesEnum } from '../../utils/enums/currencies.enum';
import { TranslationEnum } from '../../utils/enums/translation.enum';

@Controller('/api/v1/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/all')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    description:
      'This endpoint returns all currencies available and supported by our application with the unit value converted to the currency provided by the user.',
  })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: Array<CurrencyDto>,
    description: 'An array with all available currencies.',
  })
  @ApiHeader({
    name: 'accept-language',
    required: false,
    example: 'en',
    enum: TranslationEnum,
    allowEmptyValue: true,
    description: 'The language in which you would like to receive data',
  })
  @ApiQuery({
    type: String,
    example: 'USD',
    required: false,
    enum: CurrenciesEnum,
    name: 'currency_code',
    description:
      'The currency code you would like to receive the conversion rate for all currencies.',
  })
  async getAllCurrencies(
    @Language() lang: string,
    @Query('currency_code') currency_code?: string,
  ): Promise<CurrencyDto[]> {
    return await this.currencyService.getAllCurrencies(lang, currency_code);
  }

  @Get('/countries')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    description: '',
  })
  async getAllCountries(
    @Language() lang: string,
    @Query('alphabeticalGrouping') isGrouped: boolean,
  ): Promise<CountryDto[] | IGroupedCountry[]> {
    return await this.currencyService.getAllCountries(lang, isGrouped);
  }

  @Get('/convert/:base_country/:target_country')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    description: '',
  })
  async convertCurrency(
    @Language() lang: string,
    @Param('base_country') base_country: string,
    @Param('target_country') target_country: string,
    @Query('value') value: number,
  ): Promise<ConversionDto> {
    return await this.currencyService.convertCurrency(
      lang,
      base_country,
      target_country,
      value,
    );
  }
}
