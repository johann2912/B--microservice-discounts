import { Injectable } from "@nestjs/common";
import { ExceptionsService } from "src/config/exceptions/exceptions.service";
import { IDatabaseAbstract } from "src/frameworks/pg/core/abstract/database.abstract";
import { IDiscountCodeCreate } from "./core/interfaces/create-discount-code.interface";
import { Generated } from "./functions/generated-code/generated-code";
import * as dayjs from 'dayjs';

@Injectable()
export class DiscountCodesService {
    constructor(
        private databaseService: IDatabaseAbstract, 
        private exceptions: ExceptionsService,
    ) {};

    async all(){
        const codes = await this.databaseService.discountCodes.findAll();
        if(!codes.length || codes.length < 0) this.exceptions.notFoundException({
            message: 'discount codes doest not founds'
        });

        return codes;
    }

    async discountCodeByCode(code:string){
        const discountCode = await this.databaseService.discountCodes.findByCode(code);
        if(!discountCode) this.exceptions.notFoundException({
            message: 'discount code does not found'
        });

        return discountCode;
    };

    async createDiscountCode({expirationDate, ...discountCode}:IDiscountCodeCreate){
        const hashRamdom = await Generated.codeDiscount();
        const discountCodeInstance = {
            code: `${hashRamdom}-${expirationDate}`,
            expirationDate
        }
        const code = await this.databaseService.discountCodes.create(discountCodeInstance);
        return code;
    };

    async codeExpired(code:string){
        const {expirationDate, ...discountCode} = await this.discountCodeByCode(code);
        const actualDay = new Date();
        if(expirationDate.getDate() <= actualDay.getDate()){
            const diference = dayjs(expirationDate).diff(dayjs(actualDay), 'day');
            return {
                expired: true,
                expirationDate,
                actualDate: actualDay,
                diferenceDays: diference
            };
        };
        return {
            expired: false,
            expirationDate,
            actualDate: actualDay,
            diferenceDaysExpired: null
        };
    };

    async deleteCodeByCode(code:string){
        const discountCode = await this.discountCodeByCode(code);
        await this.databaseService.discountCodes.delete(discountCode.id);
        return { message: 'discount count successfully deleted' };
    };
};