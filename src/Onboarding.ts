import { resolve } from 'path';
import { existsSync, mkdirSync } from 'fs';

import { MemberTypeFactory } from './Factory/MemberTypeFactory.js';
import { Database } from './ORM/DB.js';
import FolderScannerHelper from './helpers/FolderScanner.js';
import LoggerHelper from './helpers/Logger.js';
import { FileMover } from './helpers/FileMover.js';
import JsonReaderHelper from './helpers/JsonReaderHelper.js';

export class Onboarding {
  private readonly onboardingPath: string = resolve('./onboarding');
  private readonly job: string;
  private readonly logger: LoggerHelper;
  private inputFiles: string[] = [];
  private readonly db: Database;

  constructor(jobName: string) {
    this.job = jobName;
    this.db = Database.getInstance();

    // Initialize Logger
    this.logger = new LoggerHelper({
      logName: `/logs/${this.job}.log`,
      logDir: this.onboardingPath,
    });

    // Ensure required folders exist
    this.ensureDirectories(['in', 'done', 'logs', 'exception']);
  }

  private ensureDirectories(subDirs: string[]): void {
    for (const dir of subDirs) {
      const fullPath = `${this.onboardingPath}/${dir}`;
      if (!existsSync(fullPath)) {
        mkdirSync(fullPath, { recursive: true });
        this.logger?.info?.(`📁 Created directory: ${fullPath}`);
      }
    }
  }

  public async initialize(): Promise<void> {
    this.logger.logSpacer();
    this.logger.info(`🚀 Starting onboarding job: ${this.job}`);

    // Connect to DB with retries
    try {
      await this.db.connect();
    } catch (error) {
      this.logger.error(`❌ DB connection failed: ${String(error)}`);
      throw error; // Fatal, stop execution
    }

    // Scan input folder
    const folderScanner = new FolderScannerHelper(`${this.onboardingPath}/in`);
    this.inputFiles = folderScanner.getAllFiles(this.job);
    this.logger.info(`Found ${this.inputFiles.length} file(s) for job '${this.job}'`);
    for (const inputFile of this.inputFiles) {
      this.logger.info(`📄 ${inputFile}`);
    }
  }

  public async process(): Promise<void> {
    if (this.inputFiles.length === 0) {
      this.logger.warn(`⚠️ No input files for job '${this.job}'`);
      return;
    }

    let processedCount = 0;
    let errorCount = 0;

    const donePath = `${this.onboardingPath}/done`;
    const exceptionPath = `${this.onboardingPath}/exception`;

    for (const inputFile of this.inputFiles) {
      this.logger.info(`📄 Processing file: ${inputFile}`);

      try {
        const fileContent = new JsonReaderHelper(inputFile);
        const fileContentObj = fileContent.read();
        // this.logger.info(`Parsed file content:\n${JSON.stringify(fileContentObj, null, 2)}`);
        this.logger.info(`Parsed file content: ${JSON.stringify(fileContentObj)}`);

        const handler = MemberTypeFactory.create(this.job);
        await handler.process(fileContentObj);

        await FileMover.moveFile(inputFile, donePath);
        this.logger.info(`✅ File moved to: ${donePath}`);
        processedCount++;
      } catch (error) {
        errorCount++;
        this.logger.error(`❌ Error processing file '${inputFile}': ${String(error)}`);
        try {
          await FileMover.moveFile(inputFile, exceptionPath);
          this.logger.warn(`⚠️ File moved to exception folder: ${exceptionPath}`);
        } catch (moveErr) {
          this.logger.error(`🚨 Failed to move file to exception folder: ${String(moveErr)}`);
        }
      }
    }

    this.logger.info(`📊 Summary: ${processedCount} processed, ${errorCount} moved to exception.`);
  }

  public async close(): Promise<void> {
    try {
      this.logger.info(`🏁 Job '${this.job}' completed.`);
    } finally {
      await this.db.disconnect();
      this.logger.logSpacer();
    }
  }

  public async run(): Promise<void> {
    try {
      await this.initialize();
      await this.process();
    } catch (error) {
      this.logger.error(`🚨 Fatal error in job '${this.job}': ${String(error)}`);
    } finally {
      await this.close();
    }
  }
}
