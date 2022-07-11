import { IDiscountCode } from "src/modules/discount-codes/core/interfaces/discount-code.interface";
import { discountCode } from "../../entities";
import { IDiscountCodeRepository } from "./discount-code-repository.abstract";

export abstract class IDatabaseAbstract {
    public abstract readonly discountCodes: IDiscountCodeRepository<discountCode>;
};