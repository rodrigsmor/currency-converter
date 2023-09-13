import { CountryDto, CurrencyDto } from './dto';
import { Language } from '../../utils/decorators';
import { CurrencyService } from './currency.service';
import { Controller, Get, Query } from '@nestjs/common';

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
  async getAllCountries(@Language() lang: string): Promise<CountryDto[]> {
    return await this.currencyService.getAllCountries(lang);
  }
}