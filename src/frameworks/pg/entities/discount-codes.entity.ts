import { Timestamp } from "./timestamp.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IDiscountCode } from "src/modules/discount-codes/core/interfaces/discount-code.interface";

@Entity('discount_code')
export class discountCode extends Timestamp implements IDiscountCode {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String, unique:true, nullable:false})
    code?: string;
    @Column({type: Date, nullable:true})
    expirationDate?: Date;
};