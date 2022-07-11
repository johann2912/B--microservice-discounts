import { IDiscountCodeRepository } from "../core/abstract/discount-code-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgDiscountCodeRepository<T> 
    extends PgGenericRepository<T>
    implements IDiscountCodeRepository<T>
{
    public async findByCode(code: string): Promise<T> {
        return await this._repository.findOne({
            where:{
                code
            }
        });
    };
};