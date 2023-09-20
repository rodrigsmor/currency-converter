import { HttpModule, HttpService } from '@nestjs/axios';
import { CurrencyService } from '../../api/currency/currency.service';
import { Test } from '@nestjs/testing';
import { CurrencyValidationService } from '../../common/services/currency-validation.service';

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

  it('should be defined', () => {
    expect(httpService).toBeDefined();
    expect(currencyService).toBeDefined();
    expect(currencyValidationService).toBeDefined();
  });
});
