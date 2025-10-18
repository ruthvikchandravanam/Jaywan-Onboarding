import winston from 'winston';
import { join, resolve } from 'path';
import { appendFileSync } from 'fs';

interface LoggerConfig {
    logName?: string; // e.g., 'TR.log'
    logDir?: string;  // e.g., './logs'
}

class LoggerHelper {
    private logger: winston.Logger;
    private logFilePath: string;

    constructor({ logName = 'batch.log', logDir = './logs' }: LoggerConfig) {
        this.logFilePath = resolve(join(logDir, logName));

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf(({ level, message, timestamp }) => {
                    return `[${timestamp}] ${typeof level === 'string' ? level.toUpperCase() : String(level)}: ${message}`;
                })
            ),
            transports: [
                // new winston.transports.Console(),
                new winston.transports.File({ filename: this.logFilePath })
            ]
        });
    }

    public info(message: string): void {
        this.logger.info(message);
    }

    public warn(message: string): void {
        this.logger.warn(message);
    }

    public error(message: string): void {
        this.logger.error(message);
    }

    public debug(message: string): void {
        this.logger.debug(message);
    }

    public logSpacer(): void {
        process.stdout.write('\n'); // Console
        appendFileSync(this.logFilePath, '\n'); // File
    }
}

export default LoggerHelper;