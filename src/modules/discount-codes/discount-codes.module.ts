import { Module } from "@nestjs/common";
import { ExceptionsModule } from "src/config/exceptions/exceptions.module";
import { PgDatabaseModule } from "src/frameworks/pg/pg-data.module";
import { DiscountCodesController } from "./discount-codes.controller";
import { DiscountCodesService } from "./discount-codes.service";

@Module({
    imports: [PgDatabaseModule, ExceptionsModule],
    controllers: [DiscountCodesController],
    providers: [DiscountCodesService],
})
export class DiscountCodesModule {};