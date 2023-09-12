import { Controller, Get, Query } from '@nestjs/common';
import { Language } from '../../utils/decorators';
import { CurrencyService } from './currency.service';
import { Currencies } from '../../utils/@types/currencies';

@Controller('/api/v1/currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/all')
  async getAllCurrencies(
    @Language() lang: string,
    @Query('currency_code') currency_code?: string,
  ): Promise<Currencies> {
    return await this.currencyService.getAllCurrencies(lang, currency_code);
  }
}
