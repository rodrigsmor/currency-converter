import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { CurrencyValidationService } from '../../common/services';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
        baseURL: `${process.env.EXCHANGE_RATE_BASE_URL}/${process.env.EXCHANGE_RATE_ACCESS_KEY}`,
      }),
    }),
  ],
  controllers: [CurrencyController],
  providers: [CurrencyService, CurrencyValidationService],
})
export class CurrencyModule {}
