import { IDiscountCodeRepository } from "../core/abstract/discount-code-repository.abstract";
import { PgGenericRepository } from "./pg-generic.repository";

export class PgDiscountCodeRepository<T> 
    extends PgGenericRepository<T>
    implements IDiscountCodeRepository<T>
{};