import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDiscountCodeRepository<T> extends IGenericRepository<T> {
    public abstract findByCode(code:string): Promise<T>;
};