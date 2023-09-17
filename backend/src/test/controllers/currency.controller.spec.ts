import { Test } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { CurrencyDto } from '../../api/currency/dto/currency.dto';
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

  const curreciesDto: CurrencyDto[] = [
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
        .mockResolvedValueOnce(curreciesDto);

      const result = await currencyController.getAllCurrencies('en', 'USD');

      expect(result).toStrictEqual(curreciesDto);
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
  });
});
