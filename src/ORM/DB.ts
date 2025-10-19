import { DataSource } from 'typeorm';
import { TokenRequestorDetailsORM } from './TR.js';
import { IssuerORM, IssuerBinORM, TokenBinRangeORM, TokenBinSubrangeORM } from '../ORM/Issuer.js';

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
      synchronize: true,
      logging: false,
      entities: [
        TokenRequestorDetailsORM,
        IssuerORM,
        IssuerBinORM,
        TokenBinRangeORM,
        TokenBinSubrangeORM,
      ],
      extra: {
        connectionLimit: 10,
        waitForConnections: true,
        queueLimit: 0,
      },
    });
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public getDataSource(): DataSource {
    return this.dataSource;
  }

  public async connect(retries = 3, delayMs = 2000): Promise<void> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        if (!this.dataSource.isInitialized) {
          await this.dataSource.initialize();
          console.log('✅ Database connected successfully');
        }
        return;
      } catch (error: any) {
        console.error(`❌ DB connection attempt ${attempt} failed: ${error.message}`);
        if (attempt === retries) throw new Error(`Database connection failed after ${retries} attempts: ${error.message}`);
        await new Promise((res) => setTimeout(res, delayMs));
      }
    }
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource.isInitialized) {
      try {
        await this.dataSource.destroy();
        console.log('🔌 Database disconnected successfully');
      } catch (error) {
        console.error('❌ Error during DB disconnect:', error);
      }
    }
  }
}
