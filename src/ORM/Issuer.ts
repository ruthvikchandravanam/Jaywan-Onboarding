import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('issuer')
export class IssuerORM {
    @PrimaryColumn({ type: 'varchar', length: 45 })
    issuerID!: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    iasDomain?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param1?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param2?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param3?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param4?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param5?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param6?: string;

    @Column({ type: 'varchar', length: 24, nullable: true })
    routeID?: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    issuerName?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    createdBy?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    lastUpdatedBy?: string;

    // @Column({ type: 'timestamp', nullable: true })
    // @Column({ type: 'datetime', nullable: true })
    // updatedAt?: Date;

    @Column({ type: 'varchar', length: 2100, nullable: true })
    issuerPublicKey?: string;

    // @Column({ type: 'mediumtext', length: 2400, nullable: true })
    @Column({ type: 'varchar', length: 2400, nullable: true })
    metaData?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    clientCertNumber?: string;

    @Column({ type: 'varchar', length: 2100, nullable: true })
    allowedTr?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    imkKey?: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    isoFlag?: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    issuerInterfaceType?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    cavvKey?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    client_cert_number?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    created_by?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    ias_domain?: string;

    @Column({ type: 'varchar', length: 32, nullable: true })
    imk_key?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    issuer_name?: string;

    @Column({ type: 'varchar', length: 2100, nullable: true })
    issuer_public_key?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    last_updated_by?: string;

    @Column({ type: 'mediumtext', nullable: true })
    @Column({ type: 'varchar', nullable: true })
    meta_data?: string;

    @Column({ type: 'varchar', length: 2400, nullable: true })
    npci_private_key?: string;

    @Column({ type: 'varchar', length: 2100, nullable: true })
    npci_public_key?: string;

    @Column({ type: 'varchar', length: 24, nullable: true })
    route_id?: string;

    @Column({ type: 'datetime', nullable: true })
    updated_at?: Date;

    @Column({ type: 'varchar', length: 32, nullable: true })
    cavv_key?: string;

    @Column({ type: 'varchar', length: 7, nullable: true })
    shortCode?: string;

    // @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    // @Column({ type: 'datetime', default: () => 'CURRENT_`TIMESTAMP`', nullable: true })
    // createdAt?: Date;

    @Column({ type: 'varchar', length: 2, nullable: true, default: () => 1 })
    partitionNo?: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    forwardProxyType?: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    issuerTspId?: string;

    @Column({ type: 'varchar', length: 2, nullable: true, default: () => 1 })
    isOTPOnBehalfToIssuer?: number;

    @Column({ type: 'varchar', length: 2100, nullable: true })
    ntsPublicKey?: string;

    @Column({ type: 'varchar', length: 2400, nullable: true })
    ntsPrivateKey?: string;

    @Column({ type: 'int', nullable: true })
    lucCounterLower?: number;

    @Column({ type: 'int', nullable: true })
    lucCounterUpper?: number;

    @Column({ type: 'double', nullable: true })
    cummulativeAmtLower?: number;

    @Column({ type: 'double', nullable: true })
    cummulativeAmtUpper?: number;

    @Column({ type: 'int', nullable: true })
    lucExpDaysLower?: number;

    @Column({ type: 'int', nullable: true })
    lucExpDaysUpper?: number;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param7?: string;

    @Column({ type: 'varchar', length: 1, nullable: true, default: 'N' })
    issuerManageTokensWriteEnabled?: string;
}

@Entity('issuerbin')
export class IssuerBinORM {
    @PrimaryColumn({ type: 'varchar', length: 128 })
    bin!: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    issuerID?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    oldIssuerBin?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    iasDomain?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param1?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param2?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param3?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param4?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param5?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param6?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param7?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param8?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    param9?: string;

    @Column({ type: 'int', nullable: true })
    panLen?: number;

    @Column({ type: 'int', nullable: true })
    tokenLen?: number;

    @Column({ type: 'int', nullable: false, default: 0 })
    maxAllowedTokens?: number;

    @Column({ type: 'varchar', length: 45, nullable: true })
    mixTokenBinRange?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    mixTokenBinRangeNew?: string;

    @Column({ type: 'varchar', length: 6, nullable: true })
    LastRunningNumber?: string;

    @Column({ type: 'varchar', length: 1, nullable: true })
    Luhn?: string;

    @Column({ type: 'varchar', length: 6, nullable: true })
    validity?: string;

    @Column({ type: 'varchar', length: 5, nullable: true, default: 2 })
    todValidity?: string;

    // @Column({ type: 'char', length: 1, nullable: true })
    @Column({ type: 'varchar', length: 1, nullable: true })
    isReusable?: string;

    @Column({ type: 'varchar', length: 3000, nullable: true })
    CardMetaData?: string;

    @Column({ type: 'varchar', length: 1, nullable: true })
    isOTPOnBehalfOfIssuer?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    idvMethods?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    supportedChannels?: string;

    @Column({ type: 'varchar', length: 8, nullable: true })
    defaultCardMetaDataID?: string;

    @Column({ type: 'tinyint', nullable: true, default: 0 })
    maxOtpRetryCount?: number;

    @Column({ type: 'tinyint', nullable: true, default: 0 })
    configuredOtpExpiryMinutes?: number;

    @Column({ type: 'tinyint', nullable: true, default: 0 })
    maxResentOTPCount?: number;

    @Column({ type: 'varchar', length: 45, nullable: true })
    termsAndConditionsId?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    termsAndConditionsUrl?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    createdBy?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    lastUpdatedBy?: string;

    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    // @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    // createdAt?: Date;

    // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    // @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP', nullable: true })
    // lastUpdatedAt?: Date;

    // @Column({ type: 'char', length: 1, nullable: true, default: 1 })
    @Column({ type: 'varchar', length: 1, nullable: true, default: 1 })
    isActive?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    issuerCertValidity?: string;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    issuerPublicKey?: string;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    issuerPublicKeyCertificate?: string;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    issuerPublicKeyRemainder?: string;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    issuerPublicKeyExponent?: string;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    encIssuerPrivateKey?: string;

    @Column({ type: 'varchar', length: 1000, nullable: true })
    issuerMasterKey?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    acIssuerMasterKey?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    rpIssuerMasterKey?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    lcIssuerMasterKey?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    cardProductId?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    cvvKey?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    rpLcIssuerMasterKey?: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    issuerInterfaceType?: string;

    @Column({ type: 'varchar', length: 20, nullable: true, default: 'RSA1_5' })
    rsaAlgorithmType?: string;

    // If you want to include the extended rsaAlgorithmTypeNew* fields, I can generate those too.
}
@Entity('tokenbinrange')
export class TokenBinRangeORM {
    @PrimaryColumn({ type: 'varchar', length: 16 })
    issuerID!: string;

    @PrimaryColumn({ type: 'varchar', length: 7 })
    bin!: string;

    @Column({ type: 'varchar', length: 7, nullable: true })
    tokenBin?: string;

    @Column({ type: 'varchar', length: 8, nullable: true })
    status?: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    issuerPublicKey?: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    issuerPublicKeyCertificate?: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    issuerPublicKeyRemainder?: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    encIssuerPublicKey?: string;

    @Column({ type: 'varchar', length: 500, nullable: true })
    encIssuerPrivateKey?: string;
}

@Entity('tokenbinsubrange')
export class TokenBinSubrangeORM {
    @PrimaryColumn({ type: 'varchar', length: 16 })
    issuerID!: string;

    @PrimaryColumn({ type: 'varchar', length: 10 })
    bin!: string;

    @PrimaryColumn({ type: 'varchar', length: 10 })
    tokenBin!: string;

    @PrimaryColumn({ type: 'varchar', length: 16 })
    siteID!: string;

    @PrimaryColumn({ type: 'smallint' })
    partitionNo!: number;

    @Column({ type: 'int' })
    minSeqNo!: number;

    @Column({ type: 'int' })
    maxSeqNo!: number;

    @Column({ type: 'int' })
    currSeqNo!: number;

    @Column({ type: 'int', nullable: true })
    availableTokens?: number;
}