import { DataSource } from 'typeorm';
import { TokenRequestorDetailsORM } from './TR.js';
import { IssuerORM, IssuerBinORM, TokenBinRangeORM, TokenBinSubrangeORM } from '../ORM/Issuer.js';


export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'dev.sqlite',
  synchronize: true, // ⚠️ set to false since tables already exist
  entities: [
    TokenRequestorDetailsORM,
    IssuerORM,
    IssuerBinORM,
    TokenBinRangeORM,
    TokenBinSubrangeORM
  ],
});

export default AppDataSource;

