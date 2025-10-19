import { DataSource } from 'typeorm';
import { TokenRequestorDetailsORM } from './TR.js';
import {
  IssuerORM,
  IssuerBinORM,
  TokenBinRangeORM,
  TokenBinSubrangeORM,
} from '../ORM/Issuer.js';

export class Database {
  private static instance: Database;
  private dataSource: DataSource;

  private constructor() {
    this.dataSource = new DataSource({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nts_user',
      password: 'nts@12345',
      database: 'nts_tpse',
      synchronize: false,
      logging: false,
      entities: [
        TokenRequestorDetailsORM,
        IssuerORM,
        IssuerBinORM,
        TokenBinRangeORM,
        TokenBinSubrangeORM,
      ],

      // ✅ Connection pool configuration
      extra: {
        connectionLimit: 10,  // max number of connections in the pool
        queueLimit: 0,        // unlimited queued connections
        waitForConnections: true,
      },
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(): Promise<void> {
    try {
      if (!this.dataSource.isInitialized) {
        await this.dataSource.initialize();
        console.log('✅ Database pool opened and connected successfully');
      }
    } catch (error) {
      console.error('❌ Error during Data Source initialization:', error);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      if (this.dataSource.isInitialized) {
        await this.dataSource.destroy();
        console.log('🔌 Database pool closed.');
      }
    } catch (error) {
      console.error('❌ Error while closing the Data Source:', error);
    }
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }
}
