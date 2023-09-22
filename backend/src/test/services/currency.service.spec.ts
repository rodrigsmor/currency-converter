import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  IConversionRate,
  IExchangeRateResponse,
  IGroupedCountry,
} from '../../utils/@types';
import { AxiosResponse } from 'axios';
import { Test } from '@nestjs/testing';
import { CountryDto, CurrencyDto } from '../../api/currency/dto';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CurrencyService } from '../../api/currency/currency.service';
import { CountriesTranslations } from '../../utils/constants/countries';
import { CurrencyValidationService } from '../../common/services/currency-validation.service';

describe('CurrencyService', () => {
  let httpService: HttpService;
  let currencyService: CurrencyService;
  let currencyValidationService: CurrencyValidationService;

  const mockHttpService = {
    axiosRef: {
      get: jest.fn(),
    },
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        CurrencyService,
        CurrencyValidationService,
        {
          provide: HttpService,
          useValue: mockHttpService,
        },
      ],
    }).compile();

    httpService = moduleRef.get<HttpService>(HttpService);
    currencyService = moduleRef.get<CurrencyService>(CurrencyService);
    currencyValidationService = moduleRef.get<CurrencyValidationService>(
      CurrencyValidationService,
    );
  });

  const lang = 'en';
  const currency_code = 'USD';

  it('should be defined', () => {
    expect(httpService).toBeDefined();
    expect(currencyService).toBeDefined();
    expect(currencyValidationService).toBeDefined();
  });

  describe('getAllCurrencies', () => {
    const conversion_rates: IConversionRate = {
      BRL: 7.8999,
      USD: 16.288,
    };

    const exchangeRateResponse: IExchangeRateResponse = {
      base_code: currency_code,
      conversion_rates,
      documentation: null,
      result: null,
      terms_of_use: null,
      time_last_update_unix: null,
      time_last_update_utc: null,
      time_next_update_unix: null,
      time_next_update_utc: null,
    };

    const mockCurrenciesDto: CurrencyDto[] = Object.entries(
      conversion_rates,
    ).map(([currency_code, value]) => {
      return new CurrencyDto(value, CountriesTranslations[lang][currency_code]);
    });

    it('should throw BadRequestException if the provided currency code is not valid', async () => {
      jest
        .spyOn(currencyValidationService, 'isCurrencyCodeValid')
        .mockResolvedValueOnce(false);

      try {
        await currencyService.getAllCurrencies(lang, currency_code);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toEqual('Provide a valid currency code');
        expect(currencyValidationService.isCurrencyCodeValid).toBeCalledWith(
          currency_code,
        );
        expect(mockHttpService.axiosRef.get).not.toBeCalled();
      }
    });

    it('should throw InternalServerErrorException if Axios request fails', async () => {
      jest
        .spyOn(currencyValidationService, 'isCurrencyCodeValid')
        .mockResolvedValueOnce(true);

      mockHttpService.axiosRef.get.mockImplementationOnce(async () =>
        Promise.reject({
          message: 'Something went wrong while fetching the currencies',
        }),
      );

      try {
        await currencyService.getAllCurrencies(lang, currency_code);
      } catch (error) {
        expect(error.message).toStrictEqual(
          'Something went wrong while fetching the currencies',
        );
        expect(error).toBeInstanceOf(InternalServerErrorException);
        expect(currencyValidationService.isCurrencyCodeValid).toBeCalledWith(
          currency_code,
        );
        expect(mockHttpService.axiosRef.get).toBeCalledWith(
          `/latest/${currency_code}`,
        );
      }
    });

    it('should return all the currencies available as Dto', async () => {
      const axiosResponse: AxiosResponse<IExchangeRateResponse> = {
        config: null,
        data: exchangeRateResponse,
        headers: null,
        status: 200,
        statusText: 'OK',
        request: null,
      };

      jest
        .spyOn(currencyValidationService, 'isCurrencyCodeValid')
        .mockResolvedValueOnce(true);

      mockHttpService.axiosRef.get.mockImplementationOnce(() => axiosResponse);

      const result = await currencyService.getAllCurrencies(
        lang,
        currency_code,
      );

      expect(result).toStrictEqual(mockCurrenciesDto);
      expect(currencyValidationService.isCurrencyCodeValid).toBeCalledWith(
        currency_code,
      );
      expect(mockHttpService.axiosRef.get).toBeCalledWith(
        `/latest/${currency_code}`,
      );
    });
  });

  describe('getAllCountries', () => {
    it('should return all the countries grouped by their first letters', async () => {
      const expectedGroupedCountries: IGroupedCountry[] = [
        {
          group_name: expect.any(String),
          countries: expect.any(Array<CurrencyDto>),
        },
      ];

      const result = await currencyService.getAllCountries('en', true);

      expect(result).toEqual(expect.arrayContaining(expectedGroupedCountries));
      expect(currencyService.getAllCountries).toBeDefined();
    });

    it('should return all the countries as Dto', async () => {
      const expectedCountries: CountryDto[] = [
        {
          country_name: expect.any(String),
          currency_code: expect.any(String),
          monetary_symbol: expect.any(String),
        },
      ];

      const result = await currencyService.getAllCountries('en', false);

      expect(result).toEqual(expect.arrayContaining(expectedCountries));
      expect(currencyService.getAllCountries).toBeDefined();
    });
  });
});
