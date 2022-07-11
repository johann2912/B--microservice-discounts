import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { IDatabaseAbstract } from "./core/abstract/database.abstract";
import { IDiscountCodeRepository } from "./core/abstract/discount-code-repository.abstract";
import { discountCode } from "./entities";
import { PgDiscountCodeRepository } from "./repositories/pg-discount-code-repository";

@Injectable()
export class PgDatabaseService
  implements IDatabaseAbstract, OnApplicationBootstrap
{
  public discountCodes: IDiscountCodeRepository<discountCode>;

  constructor(
    @InjectRepository(discountCode)
    private readonly discountCodesRepository: Repository<discountCode>,
  ) {};

  public onApplicationBootstrap() {
    this.discountCodes = new PgDiscountCodeRepository<discountCode>(this.discountCodesRepository);
  };
};