import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { IGroupedCountry } from '../../utils/@types';
import { CurrencyDto, CountryDto, ConversionDto } from '../../api/currency/dto';
import { CurrencyService } from '../../api/currency/currency.service';
import { CurrencyController } from '../../api/currency/currency.controller';
import { CurrencyValidationService } from '../../common/services/currency-validation.service';

describe('CurrencyController', () => {
  let currencyService: CurrencyService;
  let currencyController: CurrencyController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [CurrencyController],
      providers: [CurrencyService, CurrencyValidationService],
    }).compile();

    currencyService = moduleRef.get<CurrencyService>(CurrencyService);
    currencyController = moduleRef.get<CurrencyController>(CurrencyController);
  });

  const mockCurrenciesDto: CurrencyDto[] = [
    {
      country_name: 'Brazil',
      currency_code: 'BRL',
      currency_name: 'Brazilian real',
      monetary_symbol: 'R$',
      unit_value: 1400,
    },
    {
      country_name: 'United State of America',
      currency_code: 'USD',
      currency_name: 'American Dollar',
      monetary_symbol: '$',
      unit_value: 3260,
    },
  ];

  it('should be defined', () => {
    expect(currencyController).toBeDefined();
    expect(currencyService).toBeDefined();
  });

  describe('getAllCurrencies', () => {
    it('should return an array of currency DTOs with the USD currency exchange rate', async () => {
      jest
        .spyOn(currencyService, 'getAllCurrencies')
        .mockResolvedValueOnce(mockCurrenciesDto);

      const result = await currencyController.getAllCurrencies('en', 'USD');

      expect(result).toStrictEqual(mockCurrenciesDto);
    });

    it('should return an array the currencies with data translated to brazilian portuguese', async () => {
      const curreciesPtBrDto: CurrencyDto[] = [
        {
          country_name: 'Brasil',
          currency_code: 'BRL',
          currency_name: 'Real brasileiro',
          monetary_symbol: 'R$',
          unit_value: 1400,
        },
        {
          country_name: 'Estados Unidos da America',
          currency_code: 'USD',
          currency_name: 'Dólar americano',
          monetary_symbol: '$',
          unit_value: 3260,
        },
      ];

      jest
        .spyOn(currencyService, 'getAllCurrencies')
        .mockResolvedValueOnce(curreciesPtBrDto);

      const result = await currencyController.getAllCurrencies('pt-BR', 'USD');

      expect(result).toStrictEqual(curreciesPtBrDto);
    });

    it('should return BadRequestException if provide a wrong currency code', async () => {
      jest
        .spyOn(currencyService, 'getAllCurrencies')
        .mockRejectedValueOnce(
          new BadRequestException('Provide a valid currency code'),
        );

      try {
        await currencyController.getAllCurrencies('pt-BR', 'WRONG-CODE');
      } catch (error) {
        expect(error?.message).toEqual('Provide a valid currency code');
        expect(error).toBeInstanceOf(BadRequestException);
      }
    });

    it('should return InternalServerException if an error occurs while fetching currencies', async () => {
      jest
        .spyOn(currencyService, 'getAllCurrencies')
        .mockRejectedValueOnce(
          new InternalServerErrorException('Something went wrong'),
        );

      try {
        await currencyController.getAllCurrencies('pt-BR', 'WRONG-CODE');
      } catch (error) {
        expect(error?.message).toEqual('Something went wrong');
        expect(error).toBeInstanceOf(InternalServerErrorException);
      }
    });
  });

  describe('getAllCountries', () => {
    const mockGroupedCountries: IGroupedCountry[] = [
      {
        group_name: 'B',
        countries: [mockCurrenciesDto[0]],
      },
      {
        group_name: 'U',
        countries: [mockCurrenciesDto[1]],
      },
    ];

    const mockCountriesDto: CountryDto[] = [
      new CountryDto(mockCurrenciesDto[0]),
      new CountryDto(mockCurrenciesDto[1]),
    ];

    it('should return all countries', async () => {
      jest
        .spyOn(currencyService, 'getAllCountries')
        .mockResolvedValueOnce(mockCountriesDto);

      const result = await currencyController.getAllCountries('en', false);

      expect(result).toStrictEqual(mockCountriesDto);
    });

    it('should return all countries grouped by first letter', async () => {
      jest
        .spyOn(currencyService, 'getAllCountries')
        .mockResolvedValueOnce(mockGroupedCountries);

      const result = await currencyController.getAllCountries('en', true);

      expect(result).toStrictEqual(mockGroupedCountries);
    });
  });

  describe('convertCurrency', () => {
    const mockConversionDto: ConversionDto = {
      result: 986.98,
      unit_value: 4.98,
    };

    it('should return the value converted', async () => {
      jest
        .spyOn(currencyService, 'convertCurrency')
        .mockResolvedValueOnce(mockConversionDto);

      const result = await currencyController.convertCurrency(
        'en',
        'USD',
        'BRL',
        200,
      );

      expect(result).toStrictEqual(mockConversionDto);
    });

    it('should throw a BadRequest if provides an invalid currency code', async () => {
      jest
        .spyOn(currencyService, 'convertCurrency')
        .mockRejectedValueOnce(
          new BadRequestException('The codes provided are not valids.'),
        );

      try {
        await currencyController.convertCurrency('en', 'INVALID', 'BRL', 200);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toStrictEqual(
          'The codes provided are not valids.',
        );
      }
    });

    it('should throw an InternalServerError if currency conversion fails', async () => {
      jest
        .spyOn(currencyService, 'convertCurrency')
        .mockRejectedValueOnce(
          new InternalServerErrorException(
            'An error occurred while converting currencies',
          ),
        );

      try {
        await currencyController.convertCurrency('en', 'USD', 'BRL', 200);
      } catch (error) {
        expect(error).toBeInstanceOf(InternalServerErrorException);
        expect(error.message).toStrictEqual(
          'An error occurred while converting currencies',
        );
      }
    });
  });
});
