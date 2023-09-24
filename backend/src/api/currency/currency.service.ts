import {
  CurrencyType,
  IExchangeRateResponse,
  IGroupedCountry,
} from '../../utils/@types';
import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConversionDto, CountryDto, CurrencyDto } from './dto';
import { CurrencyValidationService } from '../../common/services';
import { CountriesTranslations } from '../../utils/constants/countries';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly httpService: HttpService,
    private readonly currencyValidation: CurrencyValidationService,
  ) {}

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
        `/latest/${currency_code}`,
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
      throw new InternalServerErrorException(
        error?.message || 'An error occurred while fetching data',
      );
    }
  }

  async getAllCountries(
    lang: string,
    isGrouped: boolean,
  ): Promise<CountryDto[] | IGroupedCountry[]> {
    const currencies: CurrencyType[] = Object.values(
      CountriesTranslations[lang],
    );

    if (isGrouped) {
      const groupedCountries: Array<IGroupedCountry> = [];

      const letters: string[] = currencies
        .map(({ country_name }) => {
          return this.normalizeChar(country_name.charAt(0));
        })
        .sort();

      const groupLetters = [...new Set<string>(letters)];

      groupLetters.forEach((letter) => {
        const countries: CurrencyDto[] = currencies
          .filter(
            ({ country_name }) =>
              this.normalizeChar(country_name.charAt(0)) === letter,
          )
          .map((currency) => new CurrencyDto(0, currency));

        const groupedCountry: IGroupedCountry = {
          group_name: letter,
          countries,
        };

        groupedCountries.push(groupedCountry);
      });

      return groupedCountries;
    } else {
      return currencies.map((country) => new CountryDto(country));
    }
  }

  async convertCurrency(
    lang: string,
    base_country: string,
    target_country: string,
    value: number,
  ): Promise<ConversionDto> {
    const areCodesValids =
      await this.currencyValidation.areCurrenciesCodesValids([
        base_country,
        target_country,
      ]);

    if (!areCodesValids)
      throw new BadRequestException('The codes provided are not valids.');

    try {
      const {
        data: { conversion_rate, conversion_result },
      } = await this.httpService.axiosRef.get<IExchangeRateResponse>(
        `/pair/${base_country}/${target_country}/${value}`,
      );

      return new ConversionDto(conversion_result, conversion_rate);
    } catch (error) {
      throw new InternalServerErrorException(
        error?.message || 'An error occurred while converting currencies',
      );
    }
  }

  private normalizeChar(value: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();
  }
}
