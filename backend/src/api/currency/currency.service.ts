import { CurrencyDto } from './dto';
import { HttpService } from '@nestjs/axios';
import { CurrenciesEnum } from '../../utils/enums';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CurrencyValidationService } from '../../common/services';
import { CountriesTranslations } from '../../utils/constants/countries';

interface IExchangeRateResponse {
  result: string;
  documentation: string;
  terms_of_use: string;
  time_last_update_unix: number;
  time_last_update_utc: Date;
  time_next_update_unix: number;
  time_next_update_utc: Date;
  base_code: string;
  conversion_rates: {
    [key in CurrenciesEnum]?: number;
  };
}

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
  ): Promise<CurrencyDto[]> {
    const isCurrencyCodeValid =
      await this.currencyValidation.isCurrencyCodeValid(currency_code);

    if (!isCurrencyCodeValid)
      throw new BadRequestException('Provide a valid currency code');

    try {
      const {
        data: { conversion_rates },
      } = await this.httpService.axiosRef.get<IExchangeRateResponse>(
        `${this.BASE_URL}/${this.ACCESS_KEY}/latest/${currency_code}`,
      );

      const currenciesDto: CurrencyDto[] = Object.entries(conversion_rates).map(
        ([currency_code, value]) => {
          return new CurrencyDto(
            value,
            CountriesTranslations[lang][currency_code],
          );
        },
      );

      return currenciesDto;
    } catch (error) {
      console.log(error);
    }
  }
}
