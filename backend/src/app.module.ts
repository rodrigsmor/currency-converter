import { Module } from '@nestjs/common';
import { CurrencyModule } from './api/currency/currency.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CurrencyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
