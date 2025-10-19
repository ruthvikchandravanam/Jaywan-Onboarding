import { Database } from '../ORM/DB.js';
// TR
import type TokenRequestorsDetailsInterface from "../FileInterface/TokenRequestorDetails.js";
import { TokenRequestorDetailsORM } from '../ORM/TR.js';
// Issuer
import { IssuerORM, IssuerBinORM, TokenBinRangeORM, TokenBinSubrangeORM } from '../ORM/Issuer.js';
import { IssuerFileInterface } from '../FileInterface/Issuer.js';




interface MemberHandler {
    process(fileContentObj: any): Promise<void>;
}
class TokenRequestorHandler implements MemberHandler {
    async process(fileContentObj: any) {
        const db = Database.getInstance();
        await db.connect();
        const TRContent: TokenRequestorsDetailsInterface = fileContentObj as TokenRequestorsDetailsInterface;

        const TRRepo = db.getDataSource().getRepository(TokenRequestorDetailsORM);
        const TRRepoDetails: TokenRequestorDetailsORM = {
            name: 'TRContent.tokenRequestorName',
            tokenRequestorId: '1121212',
            presentationModesSupport: 'asd',
            isIssuerWallet: 'true',
            requestorType: 'asd',
            allowedForOnfile: 'qwe'
        };

        await TRRepo.save(TRRepo.create(TRRepoDetails));
        // console.log('TRDetails saved successfully!');

    }
}

class IssuerHandler implements MemberHandler {
    async process(fileContentObj: any) {
        const db = Database.getInstance();
        await db.connect();
        // console.log(db.getDataSource().entityMetadatas.map(e => e.name));

        const issuerContent: IssuerFileInterface = fileContentObj as IssuerFileInterface;

        // Issuer Table
        const issuerRepo = db.getDataSource().getRepository(IssuerORM);
        const issuerRepoDetails: IssuerORM = {
            issuerID: issuerContent.issuerID,
            issuer_name: issuerContent.issuerName,
            iasDomain: issuerContent.IssuerDomain,
            param1: issuerContent.checkCardEligibilityEndPoint,
            param2: issuerContent.ProvisioningEndPoint,
            param3: issuerContent.LCMEventNotificationEndPoint,
            param4: issuerContent.VerifyOTPEndPoint,
            param5: issuerContent.SendSelectedValidationMethodEndPoint,
            issuer_public_key: issuerContent.IssuerPublicKey
        };
        await issuerRepo.save(issuerRepo.create(issuerRepoDetails));

        for (const iBIN of issuerContent.issuerBIN) {

            // Issuer BIN Table
            const issuerBINRepo = db.getDataSource().getRepository(IssuerBinORM);
            const issuerBINRepoDetails: IssuerBinORM = {
                issuerID: issuerContent.issuerID,
                bin: iBIN.BIN,
                param1: iBIN.checkCardEligibilityEndPoint,
                param2: iBIN.ProvisioningEndPoint,
                param3: iBIN.LCMEventNotificationEndPoint,
                param4: iBIN.VerifyOTPEndPoint,
                param5: iBIN.SendSelectedValidationMethodEndPoint,
                param6: iBIN.HealthCheckEndPoint,
                validity: "3",
                isActive: 1,
                maxAllowedTokens: 10,
                issuerInterfaceType: iBIN.issuerInterfaceType,
                issuerPublicKey: iBIN.IssuerPublicKey,
                cardProductId: iBIN.cardProductID,

            };
            await issuerBINRepo.save(issuerBINRepo.create(issuerBINRepoDetails));

            for (const tBIN of iBIN.tokenBIN) {

                // Token BIN Range Table
                const tokenBINRangeRepo = db.getDataSource().getRepository(TokenBinRangeORM);
                const tokenBINRangeRepoDetails: TokenBinRangeORM = {
                    issuerID: issuerContent.issuerID,
                    bin: iBIN.BIN,
                    tokenBin: tBIN.BIN,
                    status: 'Active',
                };
                await tokenBINRangeRepo.save(tokenBINRangeRepo.create(tokenBINRangeRepoDetails));

                // Token BIN Sub Range Table
                const tokenBINSubRangeRepo = db.getDataSource().getRepository(TokenBinSubrangeORM);
                const tokenBINSubRangeDetails: TokenBinSubrangeORM[] = [
                    {
                        issuerID: issuerContent.issuerID,
                        bin: iBIN.BIN,
                        tokenBin: tBIN.BIN,
                        siteID: '1',
                        partitionNo: 1,
                        minSeqNo: 0,
                        maxSeqNo: 1999999,
                        currSeqNo: 0
                    },
                    {
                        issuerID: issuerContent.issuerID,
                        bin: iBIN.BIN,
                        tokenBin: tBIN.BIN,
                        siteID: '1',
                        partitionNo: 2,
                        minSeqNo: 2000000,
                        maxSeqNo: 3999999,
                        currSeqNo: 2000000
                    },
                    {
                        issuerID: issuerContent.issuerID,
                        bin: iBIN.BIN,
                        tokenBin: tBIN.BIN,
                        siteID: '1',
                        partitionNo: 3,
                        minSeqNo: 4000000,
                        maxSeqNo: 5999999,
                        currSeqNo: 4000000
                    },
                    {
                        issuerID: issuerContent.issuerID,
                        bin: iBIN.BIN,
                        tokenBin: tBIN.BIN,
                        siteID: '1',
                        partitionNo: 4,
                        minSeqNo: 6000000,
                        maxSeqNo: 7999999,
                        currSeqNo: 6000000
                    },
                    {
                        issuerID: issuerContent.issuerID,
                        bin: iBIN.BIN,
                        tokenBin: tBIN.BIN,
                        siteID: '1',
                        partitionNo: 5,
                        minSeqNo: 8000000,
                        maxSeqNo: 9999999,
                        currSeqNo: 8000000
                    }
                ];
                const entities = tokenBINSubRangeRepo.create(tokenBINSubRangeDetails);
                await tokenBINSubRangeRepo.save(entities);
            }
        }
    }
}
export class MemberTypeFactory {
    static create(jobType: string): MemberHandler {
        switch (jobType) {
            case 'TR':
                return new TokenRequestorHandler();
            case 'Issuer':
                return new IssuerHandler();
            default:
                throw new Error(`Unsupported job type: ${jobType}`);
        }
    }
}
