import { Body, Controller, Delete, Get, Post, Query } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { CreateDiscountCodeDtoEntry } from "./core/dto/entry/create-discount-code-entry.dto";
import { CreateDiscountCodeDtoResponse } from "./core/dto/response/create-discount-code-response.dto";
import { ExpiredDiscountCodeDtoResponse } from "./core/dto/response/expired-discount-code.response.dto";
import { DiscountCodesService } from "./discount-codes.service";

@ApiTags('Discount Codes')
@Controller('discount-code')
export class DiscountCodesController {
    constructor(private readonly discountCodesService: DiscountCodesService){};

    @Get('all')
    @ApiOkResponse({type: [CreateDiscountCodeDtoResponse]})
    async allCodes(){
        const codes = await this.discountCodesService.all();
        return plainToClass(CreateDiscountCodeDtoResponse, codes, {excludeExtraneousValues:true});
    };

    @Get('by-code/:code')
    @ApiOkResponse({type: CreateDiscountCodeDtoResponse})
    @ApiOperation({ summary: `Search item by code.`})
    async disocuntCodeByCode(
        @Query('code') code:string
    ){
        const codes = await this.discountCodesService.discountCodeByCode(code);
        return plainToClass(CreateDiscountCodeDtoResponse, codes, {excludeExtraneousValues:true});
    };

    @Get('code-expired/:code')
    @ApiOkResponse({type: ExpiredDiscountCodeDtoResponse})
    @ApiOperation({ summary: `Search item by code.`})
    async codeExpired(
        @Query('code') code:string
    ){
        const codes = await this.discountCodesService.codeExpired(code);
        return plainToClass(ExpiredDiscountCodeDtoResponse, codes, {excludeExtraneousValues:true});
    };

    @Post('create')
    @ApiOperation({ summary: `The code will be generated randomly, under a special 
    algorithm, it should be noted that in the future the way to generate the code 
    can be changed and ask for permissions for this.`})
    @ApiOkResponse({type: CreateDiscountCodeDtoResponse})
    async createCode(
        @Body() data: CreateDiscountCodeDtoEntry
    ){
        const code = await this.discountCodesService.createDiscountCode(data);
        return plainToClass(CreateDiscountCodeDtoResponse, code, {excludeExtraneousValues:true});
    };

    @Delete('delete-by-code/:id')
    @ApiOperation({ summary: `delete discount code by ID`})
    @ApiOkResponse({type: CreateDiscountCodeDtoResponse})
    async deleteByCode(
        @Query('code') code:string
    ){
        const discountCode = await this.discountCodesService.deleteCodeByCode(code);
        return plainToClass(CreateDiscountCodeDtoResponse, discountCode, {excludeExtraneousValues:true});
    }

};