interface TokenBIN {
  BIN: string;
}

interface IssuerBIN {
  BIN: string;
  cardProductID: string;
  tokenBIN: TokenBIN[];
  routeID: string;
  allowedTR: string;
  issuerInterfaceType: string;
  IssuerDomain: string;
  checkCardEligibilityEndPoint: string;
  ProvisioningEndPoint: string;
  LCMEventNotificationEndPoint: string;
  VerifyOTPEndPoint: string;
  SendSelectedValidationMethodEndPoint: string;
  HealthCheckEndPoint: string;
  IssuerPublicKey: string;
}

export interface IssuerFileInterface {
  issuerID: string;
  issuerName: string;
  issuerBIN: IssuerBIN[];
  issuerInterfaceType: string;
  IssuerDomain: string;
  checkCardEligibilityEndPoint: string;
  ProvisioningEndPoint: string;
  LCMEventNotificationEndPoint: string;
  VerifyOTPEndPoint: string;
  SendSelectedValidationMethodEndPoint: string;
  HealthCheckEndPoint: string;
  IssuerPublicKey: string;
}