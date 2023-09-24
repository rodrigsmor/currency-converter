import { ConversionDto, CountryDto, CurrencyDto } from './dto';
import { Language } from '../../utils/decorators';
import { CurrencyService } from './currency.service';
import { IGroupedCountry } from '../../utils/@types';
import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('/api/v1/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/all')
  async getAllCurrencies(
    @Language() lang: string,
    @Query('currency_code') currency_code?: string,
  ): Promise<CurrencyDto[]> {
    return await this.currencyService.getAllCurrencies(lang, currency_code);
  }

  @Get('/countries')
  async getAllCountries(
    @Language() lang: string,
    @Query('alphabeticalGrouping') isGrouped: boolean,
  ): Promise<CountryDto[] | IGroupedCountry[]> {
    return await this.currencyService.getAllCountries(lang, isGrouped);
  }

  @Get('/convert/:base_country/:target_country')
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
