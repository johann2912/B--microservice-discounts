import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IDiscountCode } from "../../interfaces/discount-code.interface";

export class CreateDiscountCodeDtoResponse implements IDiscountCode {
    @Expose()
    id:string
    @Expose()
    createAt: Date;
    @ApiProperty()
    @Expose()
    code: string;
    @ApiProperty()
    @Expose()
    expirationDate: Date;
};