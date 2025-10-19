import 'reflect-metadata';
import { Onboarding } from './Onboarding.js';

(async () => {
  const IssueOnboardingJob = new Onboarding('Issuer');
  await IssueOnboardingJob.run();

  const TROnboardingJob = new Onboarding('TR');
  await TROnboardingJob.run();
})();