interface TokenRequestorsDetailsInterface {
    tokenRequestorId: string; // varchar(12), NOT NULL, Primary Key

    publicKey?: string; // longtext
    presentationModesSupport?: string; // mediumtext
    keyId?: string; // varchar(64)
    isIssuerWallet?: string; // varchar(1)

    createdBy?: string; // varchar(45)
    createdDate?: Date; // datetime
    updatedBy?: string; // varchar(45)
    updatedDate?: Date; // datetime

    createdAt?: Date; // datetime, DEFAULT CURRENT_TIMESTAMP
    updatedAt?: Date; // datetime, DEFAULT CURRENT_TIMESTAMP

    hashKey?: string; // varchar(256)
    requestorType?: string; // varchar(45)
    tokenServiceDomain?: string; // varchar(45)
    tokenRequestorName?: string; // varchar(256)
    tokenRequestorLogoUrl?: string; // varchar(256)
    tokenRequestorSignatureUrl?: string; // varchar(256)
    tokenRequestorDsAgreementUrl?: string; // varchar(256)
    tokenRequestorDsAgreementId?: string; // varchar(45)
    tokenRequestorDsAgreementVer?: string; // varchar(45)
    tokenRequestorDsAgreementDt?: string; // varchar(45)
    issuerSubmittedTokenRequestor?: string; // varchar(1)

    tokenRequestorContactEmail?: string; // varchar(256)
    tokenRequestorContactName?: string; // varchar(256)
    tokenRequestorContactPhone?: string; // varchar(45)
    tokenRequestorContactTitle?: string; // varchar(45)
    tokenRequestorContactUrl?: string; // varchar(256)

    tokenRequestorTokenServiceUrl?: string; // varchar(256)
    tokenRequestorTokenServiceVer?: string; // varchar(45)
    tokenRequestorTokenServiceDt?: string; // varchar(45)

    tokenRequestorLogoPath?: string; // varchar(256)
    tokenRequestorSignaturePath?: string; // varchar(256)
    tokenRequestorDsAgreementPath?: string; // varchar(256)

    kekId?: string; // varchar(125)
    kekValue?: string; // varchar(125)
    dekId?: string; // varchar(125)
    dekValue?: string; // varchar(125)

    rsaKey?: string; // varchar(2048)
    rsaAlgorithm?: string; // varchar(20), default 'RSA1_5'
}

export default TokenRequestorsDetailsInterface;