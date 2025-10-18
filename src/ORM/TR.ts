import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tokenrequestorsdetails')
export class TokenRequestorDetailsORM {
    @PrimaryColumn({ type: 'varchar', length: 12 })
    tokenRequestorId!: string;

    @Column({ type: 'longtext', nullable: true })
    publicKey?: string;

    @Column({ type: 'mediumtext', nullable: false })
    presentationModesSupport!: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    keyId?: string;

    @Column({ type: "enum", enum: ['true','false'], nullable: false })
    isIssuerWallet!: 'true' | 'false';

    @Column({ type: 'varchar', length: 48, nullable: false })
    name!: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    createdBy?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    updatedBy?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    lastUpdatedBy?: string;

    @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
    createdAt?: Date;

    @UpdateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
    updatedAt?: Date;

    @Column({ type: 'longtext', nullable: true })
    tokenRequestorGtwyIds?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    hashSecretKey?: string;

    @Column({ type: 'varchar', length: 11, nullable: false, default: 'TR' })
    requestorType!: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenRequestorDomain?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    tokenStateChangeURL?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    txnNotifiacationURL?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    cardMetadataUpdateURL?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    cbuaeSendMessageUrl?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    cbuaeUpdateCardUrl?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    cbuaeSubmitTokenDataUrl?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    cbuaeSubmitNewTokenDataUrl?: string;

    @Column({ type: 'varchar', length: 6, nullable: false, default: 'N' })
    allowedForOnfile!: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    siExpiryNotifyUrl?: string;

    @Column({ type: 'varchar', length: 3, nullable: true })
    maxTokensAllowed?: string;

    @Column({ type: 'varchar', length: 1, nullable: true })
    isTokenizeEnable?: string;

    @Column({ type: 'varchar', length: 210, nullable: true })
    tokenReplinishUrl?: string;

    @Column({ type: 'varchar', length: 210, nullable: true })
    disallowedMerchants?: string;

    @Column({ type: 'varchar', length: 210, nullable: true })
    allowedMerchants?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    tokenOnFileOrDevice?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    yellowOrGreenPath?: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    sEorHCE?: string;

    @Column({ type: 'varchar', length: 2, nullable: true })
    isActivePublicKeyPresent?: string;

    @Column({ type: 'varchar', length: 1, nullable: true, default: 'N' })
    isNotificationEnable?: string;

    @Column({ type: 'varchar', length: 125, nullable: true })
    userAccountVerificationUrl?: string;

    @Column({ type: 'varchar', length: 128, nullable: true })
    walletProviderId?: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    kekLabel?: string;

    @Column({ type: 'varchar', length: 6, nullable: true })
    kekKCV?: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    dekLabel?: string;

    @Column({ type: 'varchar', length: 6, nullable: true })
    dekKCV?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    kek?: string;

    @Column({ type: 'varchar', length: 256, nullable: true })
    dek?: string;

    @Column({ type: 'varchar', length: 64, nullable: true })
    ivParam?: string;

    @Column({ type: 'varchar', length: 20, nullable: true, default: 'RSA1_5' })
    rsaAlgorithm?: string;
}
