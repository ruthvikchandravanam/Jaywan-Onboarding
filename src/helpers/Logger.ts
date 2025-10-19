import winston from 'winston';
import { join, resolve } from 'path';
import { appendFileSync, existsSync, mkdirSync } from 'fs';

interface LoggerConfig {
    logName?: string;        // e.g., 'TR.log'
    logDir?: string;         // e.g., './logs'
    enableConsole?: boolean; // default true
}

class LoggerHelper {
    private logger: winston.Logger;
    private logFilePath: string;

    constructor({ logName = 'batch.log', logDir = './logs', enableConsole = true }: LoggerConfig) {
        // Ensure log directory exists
        const fullLogDir = resolve(logDir);
        if (!existsSync(fullLogDir)) {
            mkdirSync(fullLogDir, { recursive: true });
        }

        this.logFilePath = resolve(join(fullLogDir, logName));

        const transports: winston.transport[] = [
            new winston.transports.File({ filename: this.logFilePath })
        ];

        if (enableConsole) {
            transports.push(
                new winston.transports.Console({
                    format: winston.format.combine(
                        winston.format.colorize(),
                        winston.format.printf(({ level, message, timestamp }) => {
                            return `[${timestamp}] ${level}: ${message}`;
                        })
                    )
                })
            );
        }

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.printf(({ level, message, timestamp }) => {
                    return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
                })
            ),
            transports
        });
    }

    public info(message: string | object): void {
        this.logger.info(this.formatMessage(message));
    }

    public warn(message: string | object): void {
        this.logger.warn(this.formatMessage(message));
    }

    public error(message: string | object): void {
        this.logger.error(this.formatMessage(message));
    }

    public debug(message: string | object): void {
        this.logger.debug(this.formatMessage(message));
    }

    public logSpacer(): void {
        process.stdout.write('\n');              // console spacer
        appendFileSync(this.logFilePath, '\n');  // file spacer
    }

    /**
     * Convert object to single-line JSON for logging
     */
    private formatMessage(message: string | object): string {
        if (typeof message === 'object') {
            return JSON.stringify(message); // single-line JSON
        }
        return message;
    }
}

export default LoggerHelper;
