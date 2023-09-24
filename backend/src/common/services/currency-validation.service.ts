import { Injectable } from '@nestjs/common';
import { CurrenciesEnum } from '../../utils/enums';

@Injectable()
export class CurrencyValidationService {
  async isCurrencyCodeValid(currency: string): Promise<boolean> {
    return Object.values(CurrenciesEnum).includes(currency as CurrenciesEnum);
  }

  async areCurrenciesCodesValids(currencies: string[]): Promise<boolean> {
    const validations = currencies.map(
      async (currency) => await this.isCurrencyCodeValid(currency),
    );

    const results = await Promise.all(validations);

    return results.every((isValid) => isValid);
  }
}
