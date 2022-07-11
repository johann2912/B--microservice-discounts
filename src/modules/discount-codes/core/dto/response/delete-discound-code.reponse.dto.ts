import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

export class CreateDiscountCodeDtoResponse {
    @ApiProperty()
    @Expose()
    message:string
};