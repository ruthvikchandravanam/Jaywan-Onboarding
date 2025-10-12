import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('tokenrequestorsdetails')
export class TokenRequestorDetailsORM {
    @PrimaryColumn({ type: 'varchar', length: 12 })
    tokenRequestorId!: string;

    // @Column({ type: 'longtext', nullable: true })
    @Column({ type: 'text', nullable: true })
    publicKey?: string;

    // @Column({ type: 'mediumtext', nullable: true })
    @Column({ type: 'text', nullable: true })
    presentationModesSupport?: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    keyId?: string;

    @Column({ type: 'varchar', length: 1, nullable: true })
    isIssuerWallet?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    createdBy?: string;

    @Column({ type: 'datetime', nullable: true })
    createdDate?: Date;

    @Column({ type: 'varchar', length: 45, nullable: true })
    updatedBy?: string;

    @Column({ type: 'datetime', nullable: true })
    updatedDate?: Date;

    // @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    // createdAt?: Date;

    // @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    // updatedAt?: Date;

    @Column({ type: 'varchar', length: 256, nullable: true })
    hashKey?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    requestorType?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenServiceDomain?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorName?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorLogoUrl?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorSignatureUrl?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorDsAgreementUrl?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorDsAgreementId?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorDsAgreementVer?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorDsAgreementDt?: string;

    @Column({ type: 'varchar', length: 1, nullable: true })
    issuerSubmittedTokenRequestor?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorContactEmail?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorContactName?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorContactPhone?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorContactTitle?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorContactUrl?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorTokenServiceUrl?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorTokenServiceVer?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorTokenServiceDt?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorLogoPath?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorSignaturePath?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    tokenRequestorDsAgreementPath?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    kekId?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    kekValue?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    dekId?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    dekValue?: string;

    @Column({ type: 'varchar', length: 2048, nullable: true })
    rsaKey?: string;

    @Column({ type: 'varchar', length: 20, default: 'RSA1_5' })
    rsaAlgorithm?: string;
}