import { HttpService } from '@nestjs/axios';
import { Currencies } from '../../utils/@types';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrencyValidationService } from '../../common/services';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly httpService: HttpService,
    private readonly currencyValidation: CurrencyValidationService,
  ) {}

  private readonly BASE_URL = process.env.EXCHANGE_RATE_BASE_URL;
  private readonly ACCESS_KEY = process.env.EXCHANGE_RATE_ACCESS_KEY;

  async getAllCurrencies(
    lang: string,
    currency_code = 'USD',
  ): Promise<Currencies> {
    const isCurrencyCodeValid =
      await this.currencyValidation.isCurrencyCodeValid(currency_code);

    if (!isCurrencyCodeValid)
      throw new BadRequestException('Provide a valid currency code');

    try {
      const response = this.httpService.get(
        `${this.BASE_URL}/${this.ACCESS_KEY}/${currency_code}`,
      );
      console.log(`${this.BASE_URL}/${this.ACCESS_KEY}/${currency_code}`);
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}
