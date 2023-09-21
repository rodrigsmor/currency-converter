import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { Test } from '@nestjs/testing';
import { CurrencyService } from '../../api/currency/currency.service';
import { CurrencyValidationService } from '../../common/services/currency-validation.service';
import { of, throwError } from 'rxjs';

describe('CurrencyService', () => {
  let httpService: HttpService;
  let currencyService: CurrencyService;
  let currencyValidationService: CurrencyValidationService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CurrencyService, CurrencyValidationService],
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
    it('should throw BadRequestException if the provided currency code is not valid', async () => {
      jest
        .spyOn(currencyValidationService, 'isCurrencyCodeValid')
        .mockResolvedValueOnce(false);
      jest.spyOn(httpService.axiosRef, 'get').mockResolvedValueOnce(null);

      try {
        await currencyService.getAllCurrencies(lang, currency_code);
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error.message).toEqual('Provide a valid currency code');
        expect(currencyValidationService.isCurrencyCodeValid).toBeCalledWith(
          currency_code,
        );
        expect(httpService.axiosRef.get).not.toBeCalled();
      }
    });

    it('should throw InternalServerErrorException if Axios request fails', async () => {
      jest
        .spyOn(currencyValidationService, 'isCurrencyCodeValid')
        .mockResolvedValueOnce(true);
      jest
        .spyOn(httpService.axiosRef, 'get')
        .mockRejectedValueOnce(new InternalServerErrorException(''));

      try {
        await currencyService.getAllCurrencies(lang, currency_code);
      } catch (error) {
        expect(error.message).toStrictEqual(
          'An error occurred while fetching data',
        );
        expect(error).toBeInstanceOf(InternalServerErrorException);
        expect(currencyValidationService.isCurrencyCodeValid).toBeCalledWith(
          currency_code,
        );
        expect(httpService.axiosRef.get).toBeCalledWith(
          `/latest/${currency_code}`,
        );
      }
    });
  });
});
