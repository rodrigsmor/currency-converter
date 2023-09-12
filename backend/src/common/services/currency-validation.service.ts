import { Injectable } from '@nestjs/common';
import { CurrenciesEnum } from '../../utils/enums';

@Injectable()
export class CurrencyValidationService {
  async isCurrencyCodeValid(currency: string): Promise<boolean> {
    return Object.values(CurrenciesEnum).includes(currency as CurrenciesEnum);
  }
}
