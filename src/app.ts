import 'reflect-metadata';
import { Onboarding } from './Onboarding.js';

import dotenv from 'dotenv';
import path from 'path';

// Map NODE_ENV to actual file names
const envMap: Record<string, string> = {
  DEV: 'dev.env',
  PRD: 'prd.env',
};

// Get the current NODE_ENV or default to DEV
const envFileName = envMap[process.env.NODE_ENV ?? 'DEV'];

// Resolve absolute path to project-root/env/<envFileName>
const envPath = path.resolve(process.cwd(), 'env', envFileName);

// Load the env file
dotenv.config({ path: envPath });

console.log('Loaded ENV file:', envPath);
console.log('DB Host:', process.env.DB_HOST);




(async () => {
  const IssueOnboardingJob = new Onboarding('Issuer');
  await IssueOnboardingJob.run();

  const TROnboardingJob = new Onboarding('TR');
  await TROnboardingJob.run();
})();