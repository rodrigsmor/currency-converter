import { Test } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { CurrencyService } from '../../api/currency/currency.service';
import { CurrencyController } from '../../api/currency/currency.controller';

describe('CurrencyController', () => {
  let httpService: HttpService;
  let currencyService: CurrencyService;
  let currencyController: CurrencyController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpService],
      controllers: [CurrencyController],
      providers: [CurrencyService],
    }).compile();

    currencyService = moduleRef.get<CurrencyService>(CurrencyService);
    currencyController = moduleRef.get<CurrencyController>(CurrencyController);
  });

  it('should be defined', () => {
    expect(currencyController).toBeDefined();
  });
});
