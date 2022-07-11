import { ApiProperty } from "@nestjs/swagger";
import { IDiscountCode } from "../../interfaces/discount-code.interface";

export class CreateDiscountCodeDtoEntry implements IDiscountCode {
    @ApiProperty({type: Date, example: '2022-07-11'})
    expirationDate?: Date;
};