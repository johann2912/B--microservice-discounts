import { IDiscountCode } from "./discount-code.interface";

export interface IDiscountCodeCreate extends IDiscountCode {
    id?: string;
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
    code?: string;
    expirationDate?: Date;
};