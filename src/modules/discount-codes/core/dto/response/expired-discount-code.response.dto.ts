import { ApiProperty } from "@nestjs/swagger"
import { Expose } from "class-transformer"

export class ExpiredDiscountCodeDtoResponse {
    @ApiProperty()
    @Expose()
    expired: Boolean;
    @ApiProperty()
    @Expose()
    expirationDate: Date;
    @ApiProperty()
    @Expose()
    actualDate: Date;
    @ApiProperty()
    @Expose()
    diferenceDaysExpired: number;
};