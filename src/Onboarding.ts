import FolderScannerHelper from './helpers/FolderScanner.js';
import LoggerHelper from './helpers/Logger.js';
import { resolve } from 'path';
import JsonReaderHelper from './helpers/JsonReaderHelper.js';
import { FileMover } from './helpers/FileMover.js';
import { MemberTypeFactory } from './Factory/MemberTypeFactory.js';
import { Database } from './ORM/DB.js';

class Onboarding {
  onboardingPath = resolve('./onboarding');
  job = "Batch";
  private logger: LoggerHelper;
  private inputFiles: string[] = [];

  constructor(private jobName: string) {
    this.job = jobName;

    // Initialize Logger
    this.logger = new LoggerHelper({
      logName: `/logs/${this.job}.log`,
      logDir: this.onboardingPath
    });
  }

  public async initialize(): Promise<void> {
    // Start Logger
    this.logger.logSpacer();
    this.logger.info('Batch job started');

    // Check the Files in IN folder
    const folderScanner = new FolderScannerHelper(`${this.onboardingPath}/in`);
    this.inputFiles = folderScanner.getAllFiles(this.job);
    this.logger.info(`Found ${this.inputFiles.length} files in 'in' folder`);
    for (const inputFile of this.inputFiles) {
      this.logger.info(inputFile);
    }
  }

  public async process(): Promise<void> {
    this.logger.info('Processing started');
    // Main batch logic
    for (const inputFile of this.inputFiles) {
      this.logger.info(inputFile);

      const fileContent = new JsonReaderHelper(inputFile);
      const fileContentObj = fileContent.read();
      this.logger.info(JSON.stringify(fileContentObj, null, 2));

      const handler = MemberTypeFactory.create(this.job);
      await handler.process(fileContentObj);

      const donePath = this.onboardingPath + '/done';
      FileMover.moveFile(inputFile, donePath);
      this.logger.info(`✅ File moved to: ${donePath}`);

    }

  }

  public async close(): Promise<void> {
    this.logger.info('Batch job completed');
    // Cleanup, release resources
  }

  public async run(): Promise<void> {
    const db = Database.getInstance();

    try {
      await db.connect();

      await this.initialize();
      await this.process();

    } catch (error) {
      this.logger.error(`Error: ${String(error)}`);
    } finally {
      await this.close();
      await db.disconnect();
    }
  }
}

export default Onboarding;