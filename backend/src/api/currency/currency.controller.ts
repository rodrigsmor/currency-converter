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
  ApiParam,
  ApiQuery,
  ApiResponse,
} from '@nestjs/swagger';
import { Language } from '../../utils/decorators';
import { CurrencyService } from './currency.service';
import { IGroupedCountry } from '../../utils/@types';
import { ConversionDto, CountryDto, CurrencyDto } from './dto';
import { CurrenciesEnum, TranslationEnum } from '../../utils/enums';

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
    type: CurrencyDto,
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
    description: `It returns all countries. You can group them alphabetically by the countries' initial letter or simply receive them as an array.`,
  })
  @ApiHeader({
    name: 'accept-language',
    required: false,
    example: 'en',
    enum: TranslationEnum,
    allowEmptyValue: true,
    description: 'The language in which you would like to receive data',
  })
  @ApiResponse({
    status: 200,
    isArray: true,
    type: CountryDto,
    description:
      'By default it will return an array with countries, however it is possible to group them in alphabetical order if "alphabeticalGrouping" is equal to true.',
  })
  @ApiQuery({
    type: Boolean,
    example: true,
    required: true,
    name: 'alphabeticalGrouping',
    description:
      'whether you want to receive the data grouped by the initial letter of the country or receive just an array with the countries.',
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
    description:
      'It will convert the value entered based on the currencies provided and return the values, the converted value and the unit values',
  })
  @ApiHeader({
    name: 'accept-language',
    required: false,
    example: 'en',
    enum: TranslationEnum,
    allowEmptyValue: true,
    description: 'The language in which you would like to receive data',
  })
  @ApiParam({
    type: String,
    required: true,
    enum: CurrenciesEnum,
    name: 'base_country',
    description: 'the base country code that will be converted',
  })
  @ApiParam({
    type: String,
    required: true,
    enum: CurrenciesEnum,
    name: 'target_country',
    description: 'the target country code that will be converted',
  })
  @ApiQuery({
    type: Number,
    example: 12.5,
    required: true,
    name: 'value',
    description: 'The value you would like to convert',
  })
  @ApiResponse({
    status: 200,
    isArray: false,
    type: ConversionDto,
    description:
      'The unit value is the result of the conversion of the provided currencies.',
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
