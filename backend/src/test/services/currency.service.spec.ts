import { HttpService } from '@nestjs/axios';
import { CurrencyService } from '../../api/currency/currency.service';
import { Test } from '@nestjs/testing';

describe('CurrencyService', () => {
  let httpService: HttpService;
  let currencyService: CurrencyService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [HttpService],
      providers: [CurrencyService],
    }).compile();

    httpService = moduleRef.get<HttpService>(HttpService);
    currencyService = moduleRef.get<CurrencyService>(CurrencyService);
  });
});
