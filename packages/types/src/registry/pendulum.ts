// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BifrostFarmingCall, BifrostFarmingError, BifrostFarmingEvent, BifrostFarmingGaugeGaugeInfo, BifrostFarmingGaugeGaugePoolInfo, BifrostFarmingGaugeGaugeState, BifrostFarmingRewardsPoolInfo, BifrostFarmingRewardsPoolState, BifrostFarmingRewardsShareInfo, CumulusPalletDmpQueueCall, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueueError, CumulusPalletDmpQueueEvent, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCall, CumulusPalletParachainSystemError, CumulusPalletParachainSystemEvent, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletXcmError, CumulusPalletXcmEvent, CumulusPalletXcmOrigin, CumulusPalletXcmpQueueCall, CumulusPalletXcmpQueueError, CumulusPalletXcmpQueueEvent, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueInboundState, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueOutboundState, CumulusPalletXcmpQueueQueueConfigData, CumulusPrimitivesParachainInherentParachainInherentData, CurrencyError, DiaOracleCall, DiaOracleDiaAssetId, DiaOracleDiaCoinInfo, DiaOracleError, DiaOracleEvent, FeeCall, FeeError, FoucocoRuntimeOriginCaller, FoucocoRuntimeRuntime, FoucocoRuntimeSessionKeys, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportDispatchRawOrigin, FrameSupportPalletId, FrameSupportPreimagesBounded, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonZeroSender, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, IssueCall, IssueError, IssueEvent, NominationCall, NominationError, NominationEvent, OracleCall, OracleError, OracleEvent, OracleVersion, OrmlCurrenciesAllowanceExtensionCall, OrmlCurrenciesAllowanceExtensionError, OrmlCurrenciesAllowanceExtensionEvent, OrmlCurrenciesModuleCall, OrmlCurrenciesModuleError, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, OrmlXtokensModuleCall, OrmlXtokensModuleError, OrmlXtokensModuleEvent, PalletAuthorshipCall, PalletAuthorshipError, PalletAuthorshipUncleEntryItem, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReserveData, PalletBountiesBounty, PalletBountiesBountyStatus, PalletBountiesCall, PalletBountiesError, PalletBountiesEvent, PalletChildBountiesCall, PalletChildBountiesChildBounty, PalletChildBountiesChildBountyStatus, PalletChildBountiesError, PalletChildBountiesEvent, PalletCollectiveCall, PalletCollectiveError, PalletCollectiveEvent, PalletCollectiveRawOrigin, PalletCollectiveVotes, PalletContractsCall, PalletContractsError, PalletContractsEvent, PalletContractsSchedule, PalletContractsScheduleHostFnWeights, PalletContractsScheduleInstructionWeights, PalletContractsScheduleLimits, PalletContractsStorageContractInfo, PalletContractsStorageDeletedContract, PalletContractsWasmDeterminism, PalletContractsWasmOwnerInfo, PalletContractsWasmPrefabWasmModule, PalletDemocracyCall, PalletDemocracyConviction, PalletDemocracyDelegations, PalletDemocracyError, PalletDemocracyEvent, PalletDemocracyReferendumInfo, PalletDemocracyReferendumStatus, PalletDemocracyTally, PalletDemocracyVoteAccountVote, PalletDemocracyVotePriorLock, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletIdentityBitFlags, PalletIdentityCall, PalletIdentityError, PalletIdentityEvent, PalletIdentityIdentityField, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMultisigCall, PalletMultisigError, PalletMultisigEvent, PalletMultisigMultisig, PalletMultisigTimepoint, PalletPreimageCall, PalletPreimageError, PalletPreimageEvent, PalletPreimageRequestStatus, PalletSchedulerCall, PalletSchedulerError, PalletSchedulerEvent, PalletSchedulerScheduled, PalletSessionCall, PalletSessionError, PalletSessionEvent, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, PalletTreasuryCall, PalletTreasuryError, PalletTreasuryEvent, PalletTreasuryProposal, PalletUtilityCall, PalletUtilityError, PalletUtilityEvent, PalletVestingCall, PalletVestingError, PalletVestingEvent, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, ParachainStakingCall, ParachainStakingCandidate, ParachainStakingCandidateStatus, ParachainStakingDelegationCounter, ParachainStakingError, ParachainStakingEvent, ParachainStakingInflationInflationInfo, ParachainStakingInflationRewardRate, ParachainStakingInflationStakingInfo, ParachainStakingRoundInfo, ParachainStakingSetOrderedSet, ParachainStakingStakeAccountId32, ParachainStakingStakeOption, ParachainStakingTotalStake, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesXcmpMessageFormat, PolkadotPrimitivesV2AbridgedHostConfiguration, PolkadotPrimitivesV2AbridgedHrmpChannel, PolkadotPrimitivesV2PersistedValidationData, PolkadotPrimitivesV2UpgradeRestriction, RedeemCall, RedeemError, RedeemEvent, ReplaceCall, ReplaceError, ReplaceEvent, RewardCall, RewardError, RewardEvent, SecurityCall, SecurityError, SecurityErrorCode, SecurityEvent, SecurityStatusCode, SpArithmeticArithmeticError, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpCoreEcdsaSignature, SpCoreEd25519Signature, SpCoreSr25519Public, SpCoreSr25519Signature, SpCoreVoid, SpRuntimeBlakeTwo256, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeHeader, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpTrieStorageProof, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, SpacewalkPrimitivesAsset, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesIssueIssueRequest, SpacewalkPrimitivesIssueIssueRequestStatus, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesRedeemRedeemRequest, SpacewalkPrimitivesRedeemRedeemRequestStatus, SpacewalkPrimitivesReplaceReplaceRequest, SpacewalkPrimitivesReplaceReplaceRequestStatus, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, StakingError, StakingEvent, StellarRelayCall, StellarRelayError, StellarRelayEvent, StellarRelayOrganization, StellarRelayValidator, VaultRegistryCall, VaultRegistryError, VaultRegistryEvent, VaultRegistrySystemVault, VaultRegistryVault, VaultRegistryVaultStatus, XcmDoubleEncoded, XcmV0Junction, XcmV0JunctionBodyId, XcmV0JunctionBodyPart, XcmV0JunctionNetworkId, XcmV0MultiAsset, XcmV0MultiLocation, XcmV0Order, XcmV0OriginKind, XcmV0Response, XcmV0Xcm, XcmV1Junction, XcmV1MultiAsset, XcmV1MultiLocation, XcmV1MultiassetAssetId, XcmV1MultiassetAssetInstance, XcmV1MultiassetFungibility, XcmV1MultiassetMultiAssetFilter, XcmV1MultiassetMultiAssets, XcmV1MultiassetWildFungibility, XcmV1MultiassetWildMultiAsset, XcmV1MultilocationJunctions, XcmV1Order, XcmV1Response, XcmV1Xcm, XcmV2Instruction, XcmV2Response, XcmV2TraitsError, XcmV2TraitsOutcome, XcmV2WeightLimit, XcmV2Xcm, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm, ZenlinkProtocolCall, ZenlinkProtocolError, ZenlinkProtocolEvent, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesBootstrapParameter, ZenlinkProtocolPrimitivesPairMetadata, ZenlinkProtocolPrimitivesPairStatus } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BifrostFarmingCall: BifrostFarmingCall;
    BifrostFarmingError: BifrostFarmingError;
    BifrostFarmingEvent: BifrostFarmingEvent;
    BifrostFarmingGaugeGaugeInfo: BifrostFarmingGaugeGaugeInfo;
    BifrostFarmingGaugeGaugePoolInfo: BifrostFarmingGaugeGaugePoolInfo;
    BifrostFarmingGaugeGaugeState: BifrostFarmingGaugeGaugeState;
    BifrostFarmingRewardsPoolInfo: BifrostFarmingRewardsPoolInfo;
    BifrostFarmingRewardsPoolState: BifrostFarmingRewardsPoolState;
    BifrostFarmingRewardsShareInfo: BifrostFarmingRewardsShareInfo;
    CumulusPalletDmpQueueCall: CumulusPalletDmpQueueCall;
    CumulusPalletDmpQueueConfigData: CumulusPalletDmpQueueConfigData;
    CumulusPalletDmpQueueError: CumulusPalletDmpQueueError;
    CumulusPalletDmpQueueEvent: CumulusPalletDmpQueueEvent;
    CumulusPalletDmpQueuePageIndexData: CumulusPalletDmpQueuePageIndexData;
    CumulusPalletParachainSystemCall: CumulusPalletParachainSystemCall;
    CumulusPalletParachainSystemError: CumulusPalletParachainSystemError;
    CumulusPalletParachainSystemEvent: CumulusPalletParachainSystemEvent;
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot;
    CumulusPalletXcmError: CumulusPalletXcmError;
    CumulusPalletXcmEvent: CumulusPalletXcmEvent;
    CumulusPalletXcmOrigin: CumulusPalletXcmOrigin;
    CumulusPalletXcmpQueueCall: CumulusPalletXcmpQueueCall;
    CumulusPalletXcmpQueueError: CumulusPalletXcmpQueueError;
    CumulusPalletXcmpQueueEvent: CumulusPalletXcmpQueueEvent;
    CumulusPalletXcmpQueueInboundChannelDetails: CumulusPalletXcmpQueueInboundChannelDetails;
    CumulusPalletXcmpQueueInboundState: CumulusPalletXcmpQueueInboundState;
    CumulusPalletXcmpQueueOutboundChannelDetails: CumulusPalletXcmpQueueOutboundChannelDetails;
    CumulusPalletXcmpQueueOutboundState: CumulusPalletXcmpQueueOutboundState;
    CumulusPalletXcmpQueueQueueConfigData: CumulusPalletXcmpQueueQueueConfigData;
    CumulusPrimitivesParachainInherentParachainInherentData: CumulusPrimitivesParachainInherentParachainInherentData;
    CurrencyError: CurrencyError;
    DiaOracleCall: DiaOracleCall;
    DiaOracleDiaAssetId: DiaOracleDiaAssetId;
    DiaOracleDiaCoinInfo: DiaOracleDiaCoinInfo;
    DiaOracleError: DiaOracleError;
    DiaOracleEvent: DiaOracleEvent;
    FeeCall: FeeCall;
    FeeError: FeeError;
    FoucocoRuntimeOriginCaller: FoucocoRuntimeOriginCaller;
    FoucocoRuntimeRuntime: FoucocoRuntimeRuntime;
    FoucocoRuntimeSessionKeys: FoucocoRuntimeSessionKeys;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportDispatchRawOrigin: FrameSupportDispatchRawOrigin;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportPreimagesBounded: FrameSupportPreimagesBounded;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
    FrameSystemExtensionsCheckNonZeroSender: FrameSystemExtensionsCheckNonZeroSender;
    FrameSystemExtensionsCheckNonce: FrameSystemExtensionsCheckNonce;
    FrameSystemExtensionsCheckSpecVersion: FrameSystemExtensionsCheckSpecVersion;
    FrameSystemExtensionsCheckTxVersion: FrameSystemExtensionsCheckTxVersion;
    FrameSystemExtensionsCheckWeight: FrameSystemExtensionsCheckWeight;
    FrameSystemLastRuntimeUpgradeInfo: FrameSystemLastRuntimeUpgradeInfo;
    FrameSystemLimitsBlockLength: FrameSystemLimitsBlockLength;
    FrameSystemLimitsBlockWeights: FrameSystemLimitsBlockWeights;
    FrameSystemLimitsWeightsPerClass: FrameSystemLimitsWeightsPerClass;
    FrameSystemPhase: FrameSystemPhase;
    IssueCall: IssueCall;
    IssueError: IssueError;
    IssueEvent: IssueEvent;
    NominationCall: NominationCall;
    NominationError: NominationError;
    NominationEvent: NominationEvent;
    OracleCall: OracleCall;
    OracleError: OracleError;
    OracleEvent: OracleEvent;
    OracleVersion: OracleVersion;
    OrmlCurrenciesAllowanceExtensionCall: OrmlCurrenciesAllowanceExtensionCall;
    OrmlCurrenciesAllowanceExtensionError: OrmlCurrenciesAllowanceExtensionError;
    OrmlCurrenciesAllowanceExtensionEvent: OrmlCurrenciesAllowanceExtensionEvent;
    OrmlCurrenciesModuleCall: OrmlCurrenciesModuleCall;
    OrmlCurrenciesModuleError: OrmlCurrenciesModuleError;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    OrmlXtokensModuleCall: OrmlXtokensModuleCall;
    OrmlXtokensModuleError: OrmlXtokensModuleError;
    OrmlXtokensModuleEvent: OrmlXtokensModuleEvent;
    PalletAuthorshipCall: PalletAuthorshipCall;
    PalletAuthorshipError: PalletAuthorshipError;
    PalletAuthorshipUncleEntryItem: PalletAuthorshipUncleEntryItem;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletBountiesBounty: PalletBountiesBounty;
    PalletBountiesBountyStatus: PalletBountiesBountyStatus;
    PalletBountiesCall: PalletBountiesCall;
    PalletBountiesError: PalletBountiesError;
    PalletBountiesEvent: PalletBountiesEvent;
    PalletChildBountiesCall: PalletChildBountiesCall;
    PalletChildBountiesChildBounty: PalletChildBountiesChildBounty;
    PalletChildBountiesChildBountyStatus: PalletChildBountiesChildBountyStatus;
    PalletChildBountiesError: PalletChildBountiesError;
    PalletChildBountiesEvent: PalletChildBountiesEvent;
    PalletCollectiveCall: PalletCollectiveCall;
    PalletCollectiveError: PalletCollectiveError;
    PalletCollectiveEvent: PalletCollectiveEvent;
    PalletCollectiveRawOrigin: PalletCollectiveRawOrigin;
    PalletCollectiveVotes: PalletCollectiveVotes;
    PalletContractsCall: PalletContractsCall;
    PalletContractsError: PalletContractsError;
    PalletContractsEvent: PalletContractsEvent;
    PalletContractsSchedule: PalletContractsSchedule;
    PalletContractsScheduleHostFnWeights: PalletContractsScheduleHostFnWeights;
    PalletContractsScheduleInstructionWeights: PalletContractsScheduleInstructionWeights;
    PalletContractsScheduleLimits: PalletContractsScheduleLimits;
    PalletContractsStorageContractInfo: PalletContractsStorageContractInfo;
    PalletContractsStorageDeletedContract: PalletContractsStorageDeletedContract;
    PalletContractsWasmDeterminism: PalletContractsWasmDeterminism;
    PalletContractsWasmOwnerInfo: PalletContractsWasmOwnerInfo;
    PalletContractsWasmPrefabWasmModule: PalletContractsWasmPrefabWasmModule;
    PalletDemocracyCall: PalletDemocracyCall;
    PalletDemocracyConviction: PalletDemocracyConviction;
    PalletDemocracyDelegations: PalletDemocracyDelegations;
    PalletDemocracyError: PalletDemocracyError;
    PalletDemocracyEvent: PalletDemocracyEvent;
    PalletDemocracyReferendumInfo: PalletDemocracyReferendumInfo;
    PalletDemocracyReferendumStatus: PalletDemocracyReferendumStatus;
    PalletDemocracyTally: PalletDemocracyTally;
    PalletDemocracyVoteAccountVote: PalletDemocracyVoteAccountVote;
    PalletDemocracyVotePriorLock: PalletDemocracyVotePriorLock;
    PalletDemocracyVoteThreshold: PalletDemocracyVoteThreshold;
    PalletDemocracyVoteVoting: PalletDemocracyVoteVoting;
    PalletIdentityBitFlags: PalletIdentityBitFlags;
    PalletIdentityCall: PalletIdentityCall;
    PalletIdentityError: PalletIdentityError;
    PalletIdentityEvent: PalletIdentityEvent;
    PalletIdentityIdentityField: PalletIdentityIdentityField;
    PalletIdentityIdentityInfo: PalletIdentityIdentityInfo;
    PalletIdentityJudgement: PalletIdentityJudgement;
    PalletIdentityRegistrarInfo: PalletIdentityRegistrarInfo;
    PalletIdentityRegistration: PalletIdentityRegistration;
    PalletMultisigCall: PalletMultisigCall;
    PalletMultisigError: PalletMultisigError;
    PalletMultisigEvent: PalletMultisigEvent;
    PalletMultisigMultisig: PalletMultisigMultisig;
    PalletMultisigTimepoint: PalletMultisigTimepoint;
    PalletPreimageCall: PalletPreimageCall;
    PalletPreimageError: PalletPreimageError;
    PalletPreimageEvent: PalletPreimageEvent;
    PalletPreimageRequestStatus: PalletPreimageRequestStatus;
    PalletSchedulerCall: PalletSchedulerCall;
    PalletSchedulerError: PalletSchedulerError;
    PalletSchedulerEvent: PalletSchedulerEvent;
    PalletSchedulerScheduled: PalletSchedulerScheduled;
    PalletSessionCall: PalletSessionCall;
    PalletSessionError: PalletSessionError;
    PalletSessionEvent: PalletSessionEvent;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    PalletTreasuryCall: PalletTreasuryCall;
    PalletTreasuryError: PalletTreasuryError;
    PalletTreasuryEvent: PalletTreasuryEvent;
    PalletTreasuryProposal: PalletTreasuryProposal;
    PalletUtilityCall: PalletUtilityCall;
    PalletUtilityError: PalletUtilityError;
    PalletUtilityEvent: PalletUtilityEvent;
    PalletVestingCall: PalletVestingCall;
    PalletVestingError: PalletVestingError;
    PalletVestingEvent: PalletVestingEvent;
    PalletVestingReleases: PalletVestingReleases;
    PalletVestingVestingInfo: PalletVestingVestingInfo;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmOrigin: PalletXcmOrigin;
    ParachainStakingCall: ParachainStakingCall;
    ParachainStakingCandidate: ParachainStakingCandidate;
    ParachainStakingCandidateStatus: ParachainStakingCandidateStatus;
    ParachainStakingDelegationCounter: ParachainStakingDelegationCounter;
    ParachainStakingError: ParachainStakingError;
    ParachainStakingEvent: ParachainStakingEvent;
    ParachainStakingInflationInflationInfo: ParachainStakingInflationInflationInfo;
    ParachainStakingInflationRewardRate: ParachainStakingInflationRewardRate;
    ParachainStakingInflationStakingInfo: ParachainStakingInflationStakingInfo;
    ParachainStakingRoundInfo: ParachainStakingRoundInfo;
    ParachainStakingSetOrderedSet: ParachainStakingSetOrderedSet;
    ParachainStakingStakeAccountId32: ParachainStakingStakeAccountId32;
    ParachainStakingStakeOption: ParachainStakingStakeOption;
    ParachainStakingTotalStake: ParachainStakingTotalStake;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesXcmpMessageFormat: PolkadotParachainPrimitivesXcmpMessageFormat;
    PolkadotPrimitivesV2AbridgedHostConfiguration: PolkadotPrimitivesV2AbridgedHostConfiguration;
    PolkadotPrimitivesV2AbridgedHrmpChannel: PolkadotPrimitivesV2AbridgedHrmpChannel;
    PolkadotPrimitivesV2PersistedValidationData: PolkadotPrimitivesV2PersistedValidationData;
    PolkadotPrimitivesV2UpgradeRestriction: PolkadotPrimitivesV2UpgradeRestriction;
    RedeemCall: RedeemCall;
    RedeemError: RedeemError;
    RedeemEvent: RedeemEvent;
    ReplaceCall: ReplaceCall;
    ReplaceError: ReplaceError;
    ReplaceEvent: ReplaceEvent;
    RewardCall: RewardCall;
    RewardError: RewardError;
    RewardEvent: RewardEvent;
    SecurityCall: SecurityCall;
    SecurityError: SecurityError;
    SecurityErrorCode: SecurityErrorCode;
    SecurityEvent: SecurityEvent;
    SecurityStatusCode: SecurityStatusCode;
    SpArithmeticArithmeticError: SpArithmeticArithmeticError;
    SpConsensusAuraSr25519AppSr25519Public: SpConsensusAuraSr25519AppSr25519Public;
    SpCoreCryptoKeyTypeId: SpCoreCryptoKeyTypeId;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Public: SpCoreSr25519Public;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpRuntimeBlakeTwo256: SpRuntimeBlakeTwo256;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeHeader: SpRuntimeHeader;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpTrieStorageProof: SpTrieStorageProof;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    SpacewalkPrimitivesAsset: SpacewalkPrimitivesAsset;
    SpacewalkPrimitivesCurrencyId: SpacewalkPrimitivesCurrencyId;
    SpacewalkPrimitivesIssueIssueRequest: SpacewalkPrimitivesIssueIssueRequest;
    SpacewalkPrimitivesIssueIssueRequestStatus: SpacewalkPrimitivesIssueIssueRequestStatus;
    SpacewalkPrimitivesOracleKey: SpacewalkPrimitivesOracleKey;
    SpacewalkPrimitivesRedeemRedeemRequest: SpacewalkPrimitivesRedeemRedeemRequest;
    SpacewalkPrimitivesRedeemRedeemRequestStatus: SpacewalkPrimitivesRedeemRedeemRequestStatus;
    SpacewalkPrimitivesReplaceReplaceRequest: SpacewalkPrimitivesReplaceReplaceRequest;
    SpacewalkPrimitivesReplaceReplaceRequestStatus: SpacewalkPrimitivesReplaceReplaceRequestStatus;
    SpacewalkPrimitivesVaultCurrencyPair: SpacewalkPrimitivesVaultCurrencyPair;
    SpacewalkPrimitivesVaultId: SpacewalkPrimitivesVaultId;
    StakingError: StakingError;
    StakingEvent: StakingEvent;
    StellarRelayCall: StellarRelayCall;
    StellarRelayError: StellarRelayError;
    StellarRelayEvent: StellarRelayEvent;
    StellarRelayOrganization: StellarRelayOrganization;
    StellarRelayValidator: StellarRelayValidator;
    VaultRegistryCall: VaultRegistryCall;
    VaultRegistryError: VaultRegistryError;
    VaultRegistryEvent: VaultRegistryEvent;
    VaultRegistrySystemVault: VaultRegistrySystemVault;
    VaultRegistryVault: VaultRegistryVault;
    VaultRegistryVaultStatus: VaultRegistryVaultStatus;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmV0Junction: XcmV0Junction;
    XcmV0JunctionBodyId: XcmV0JunctionBodyId;
    XcmV0JunctionBodyPart: XcmV0JunctionBodyPart;
    XcmV0JunctionNetworkId: XcmV0JunctionNetworkId;
    XcmV0MultiAsset: XcmV0MultiAsset;
    XcmV0MultiLocation: XcmV0MultiLocation;
    XcmV0Order: XcmV0Order;
    XcmV0OriginKind: XcmV0OriginKind;
    XcmV0Response: XcmV0Response;
    XcmV0Xcm: XcmV0Xcm;
    XcmV1Junction: XcmV1Junction;
    XcmV1MultiAsset: XcmV1MultiAsset;
    XcmV1MultiLocation: XcmV1MultiLocation;
    XcmV1MultiassetAssetId: XcmV1MultiassetAssetId;
    XcmV1MultiassetAssetInstance: XcmV1MultiassetAssetInstance;
    XcmV1MultiassetFungibility: XcmV1MultiassetFungibility;
    XcmV1MultiassetMultiAssetFilter: XcmV1MultiassetMultiAssetFilter;
    XcmV1MultiassetMultiAssets: XcmV1MultiassetMultiAssets;
    XcmV1MultiassetWildFungibility: XcmV1MultiassetWildFungibility;
    XcmV1MultiassetWildMultiAsset: XcmV1MultiassetWildMultiAsset;
    XcmV1MultilocationJunctions: XcmV1MultilocationJunctions;
    XcmV1Order: XcmV1Order;
    XcmV1Response: XcmV1Response;
    XcmV1Xcm: XcmV1Xcm;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2TraitsOutcome: XcmV2TraitsOutcome;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
    XcmVersionedMultiAsset: XcmVersionedMultiAsset;
    XcmVersionedMultiAssets: XcmVersionedMultiAssets;
    XcmVersionedMultiLocation: XcmVersionedMultiLocation;
    XcmVersionedXcm: XcmVersionedXcm;
    ZenlinkProtocolCall: ZenlinkProtocolCall;
    ZenlinkProtocolError: ZenlinkProtocolError;
    ZenlinkProtocolEvent: ZenlinkProtocolEvent;
    ZenlinkProtocolPrimitivesAssetId: ZenlinkProtocolPrimitivesAssetId;
    ZenlinkProtocolPrimitivesBootstrapParameter: ZenlinkProtocolPrimitivesBootstrapParameter;
    ZenlinkProtocolPrimitivesPairMetadata: ZenlinkProtocolPrimitivesPairMetadata;
    ZenlinkProtocolPrimitivesPairStatus: ZenlinkProtocolPrimitivesPairStatus;
  } // InterfaceTypes
} // declare module
