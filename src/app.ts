import 'reflect-metadata';
import Onboarding from './Onboarding.js';

const TR = new Onboarding('TR');
const Issuer = new Onboarding('Issuer');
const ThreeDSS = new Onboarding('ThreeDSS');
const ACS = new Onboarding('ACS');

TR.run();
Issuer.run();
// ThreeDSS.run();
// ACS.run();