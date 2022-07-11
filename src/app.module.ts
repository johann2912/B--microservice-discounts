import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PgDatabaseModule } from './frameworks/pg/pg-data.module';
import { DiscountCodesModule } from './modules/discount-codes/discount-codes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
  }),
  PgDatabaseModule,
  DiscountCodesModule
  ],
})
export class AppModule {}
