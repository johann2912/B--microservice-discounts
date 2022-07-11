import { Timestamp } from "./timestamp.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('discount_code')
export class discountCode extends Timestamp {
    @PrimaryGeneratedColumn('uuid')
    id?: string;
    @Column({type: String, unique:true, nullable:false})
    code?: string;
    @Column({type: Date, nullable:true})
    expirationDate?: Date;
};