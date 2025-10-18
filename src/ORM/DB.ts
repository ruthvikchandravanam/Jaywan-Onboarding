import { DataSource } from 'typeorm';
import { TokenRequestorDetailsORM } from './TR.js';
import { IssuerORM, IssuerBinORM, TokenBinRangeORM, TokenBinSubrangeORM } from '../ORM/Issuer.js';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',       // MySQL host
  port: 3306,              // default MySQL port
  username: 'nts_user',   // MySQL username
  password: 'nts@12345',   // MySQL password
  database: 'nts_tpse',     // MySQL database name
  synchronize: false,      // ⚠️ set to false if tables already exist
  logging: false,           // optional, useful for debugging
  entities: [
    TokenRequestorDetailsORM,
    IssuerORM,
    IssuerBinORM,
    TokenBinRangeORM,
    TokenBinSubrangeORM
  ],
});


export default AppDataSource;

