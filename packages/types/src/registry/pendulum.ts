// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { CurrencyError, FeeCall, FeeError, FinalityGrandpaEquivocationPrecommit, FinalityGrandpaEquivocationPrevote, FinalityGrandpaPrecommit, FinalityGrandpaPrevote, FrameSupportDispatchDispatchClass, FrameSupportDispatchDispatchInfo, FrameSupportDispatchPays, FrameSupportDispatchPerDispatchClassU32, FrameSupportDispatchPerDispatchClassWeight, FrameSupportDispatchPerDispatchClassWeightsPerClass, FrameSupportPalletId, FrameSupportTokensMiscBalanceStatus, FrameSystemAccountInfo, FrameSystemCall, FrameSystemError, FrameSystemEvent, FrameSystemEventRecord, FrameSystemExtensionsCheckGenesis, FrameSystemExtensionsCheckNonce, FrameSystemExtensionsCheckSpecVersion, FrameSystemExtensionsCheckTxVersion, FrameSystemExtensionsCheckWeight, FrameSystemLastRuntimeUpgradeInfo, FrameSystemLimitsBlockLength, FrameSystemLimitsBlockWeights, FrameSystemLimitsWeightsPerClass, FrameSystemPhase, IssueCall, IssueError, IssueEvent, NominationCall, NominationError, NominationEvent, OracleCall, OracleError, OracleEvent, OracleTimestampedValue, OracleVersion, OrmlCurrenciesModuleCall, OrmlCurrenciesModuleError, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensModuleCall, OrmlTokensModuleError, OrmlTokensModuleEvent, OrmlTokensReserveData, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesCall, PalletBalancesError, PalletBalancesEvent, PalletBalancesReasons, PalletBalancesReserveData, PalletGrandpaCall, PalletGrandpaError, PalletGrandpaEvent, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletSudoCall, PalletSudoError, PalletSudoEvent, PalletTimestampCall, PalletTransactionPaymentChargeTransactionPayment, PalletTransactionPaymentEvent, PalletTransactionPaymentReleases, RedeemCall, RedeemError, RedeemEvent, ReplaceCall, ReplaceError, ReplaceEvent, RewardError, RewardEvent, SecurityCall, SecurityError, SecurityErrorCode, SecurityEvent, SecurityStatusCode, SpCoreEcdsaSignature, SpCoreEd25519Public, SpCoreEd25519Signature, SpCoreSr25519Signature, SpCoreVoid, SpFinalityGrandpaAppPublic, SpFinalityGrandpaAppSignature, SpFinalityGrandpaEquivocation, SpFinalityGrandpaEquivocationProof, SpRuntimeArithmeticError, SpRuntimeDigest, SpRuntimeDigestDigestItem, SpRuntimeDispatchError, SpRuntimeModuleError, SpRuntimeMultiSignature, SpRuntimeTokenError, SpRuntimeTransactionalError, SpVersionRuntimeVersion, SpWeightsRuntimeDbWeight, SpWeightsWeightV2Weight, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesIssueIssueRequest, SpacewalkPrimitivesIssueIssueRequestStatus, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesRedeemRedeemRequest, SpacewalkPrimitivesRedeemRedeemRequestStatus, SpacewalkPrimitivesReplaceReplaceRequest, SpacewalkPrimitivesReplaceReplaceRequestStatus, SpacewalkPrimitivesTokenSymbol, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, SpacewalkRuntimeStandaloneRuntime, StakingError, StakingEvent, StellarRelayCall, StellarRelayError, StellarRelayEvent, StellarRelayOrganization, StellarRelayValidator, VaultRegistryCall, VaultRegistryError, VaultRegistryEvent, VaultRegistrySystemVault, VaultRegistryVault, VaultRegistryVaultStatus } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    CurrencyError: CurrencyError;
    FeeCall: FeeCall;
    FeeError: FeeError;
    FinalityGrandpaEquivocationPrecommit: FinalityGrandpaEquivocationPrecommit;
    FinalityGrandpaEquivocationPrevote: FinalityGrandpaEquivocationPrevote;
    FinalityGrandpaPrecommit: FinalityGrandpaPrecommit;
    FinalityGrandpaPrevote: FinalityGrandpaPrevote;
    FrameSupportDispatchDispatchClass: FrameSupportDispatchDispatchClass;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    FrameSupportDispatchPays: FrameSupportDispatchPays;
    FrameSupportDispatchPerDispatchClassU32: FrameSupportDispatchPerDispatchClassU32;
    FrameSupportDispatchPerDispatchClassWeight: FrameSupportDispatchPerDispatchClassWeight;
    FrameSupportDispatchPerDispatchClassWeightsPerClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
    FrameSupportPalletId: FrameSupportPalletId;
    FrameSupportTokensMiscBalanceStatus: FrameSupportTokensMiscBalanceStatus;
    FrameSystemAccountInfo: FrameSystemAccountInfo;
    FrameSystemCall: FrameSystemCall;
    FrameSystemError: FrameSystemError;
    FrameSystemEvent: FrameSystemEvent;
    FrameSystemEventRecord: FrameSystemEventRecord;
    FrameSystemExtensionsCheckGenesis: FrameSystemExtensionsCheckGenesis;
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
    OracleTimestampedValue: OracleTimestampedValue;
    OracleVersion: OracleVersion;
    OrmlCurrenciesModuleCall: OrmlCurrenciesModuleCall;
    OrmlCurrenciesModuleError: OrmlCurrenciesModuleError;
    OrmlTokensAccountData: OrmlTokensAccountData;
    OrmlTokensBalanceLock: OrmlTokensBalanceLock;
    OrmlTokensModuleCall: OrmlTokensModuleCall;
    OrmlTokensModuleError: OrmlTokensModuleError;
    OrmlTokensModuleEvent: OrmlTokensModuleEvent;
    OrmlTokensReserveData: OrmlTokensReserveData;
    PalletBalancesAccountData: PalletBalancesAccountData;
    PalletBalancesBalanceLock: PalletBalancesBalanceLock;
    PalletBalancesCall: PalletBalancesCall;
    PalletBalancesError: PalletBalancesError;
    PalletBalancesEvent: PalletBalancesEvent;
    PalletBalancesReasons: PalletBalancesReasons;
    PalletBalancesReserveData: PalletBalancesReserveData;
    PalletGrandpaCall: PalletGrandpaCall;
    PalletGrandpaError: PalletGrandpaError;
    PalletGrandpaEvent: PalletGrandpaEvent;
    PalletGrandpaStoredPendingChange: PalletGrandpaStoredPendingChange;
    PalletGrandpaStoredState: PalletGrandpaStoredState;
    PalletSudoCall: PalletSudoCall;
    PalletSudoError: PalletSudoError;
    PalletSudoEvent: PalletSudoEvent;
    PalletTimestampCall: PalletTimestampCall;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletTransactionPaymentEvent: PalletTransactionPaymentEvent;
    PalletTransactionPaymentReleases: PalletTransactionPaymentReleases;
    RedeemCall: RedeemCall;
    RedeemError: RedeemError;
    RedeemEvent: RedeemEvent;
    ReplaceCall: ReplaceCall;
    ReplaceError: ReplaceError;
    ReplaceEvent: ReplaceEvent;
    RewardError: RewardError;
    RewardEvent: RewardEvent;
    SecurityCall: SecurityCall;
    SecurityError: SecurityError;
    SecurityErrorCode: SecurityErrorCode;
    SecurityEvent: SecurityEvent;
    SecurityStatusCode: SecurityStatusCode;
    SpCoreEcdsaSignature: SpCoreEcdsaSignature;
    SpCoreEd25519Public: SpCoreEd25519Public;
    SpCoreEd25519Signature: SpCoreEd25519Signature;
    SpCoreSr25519Signature: SpCoreSr25519Signature;
    SpCoreVoid: SpCoreVoid;
    SpFinalityGrandpaAppPublic: SpFinalityGrandpaAppPublic;
    SpFinalityGrandpaAppSignature: SpFinalityGrandpaAppSignature;
    SpFinalityGrandpaEquivocation: SpFinalityGrandpaEquivocation;
    SpFinalityGrandpaEquivocationProof: SpFinalityGrandpaEquivocationProof;
    SpRuntimeArithmeticError: SpRuntimeArithmeticError;
    SpRuntimeDigest: SpRuntimeDigest;
    SpRuntimeDigestDigestItem: SpRuntimeDigestDigestItem;
    SpRuntimeDispatchError: SpRuntimeDispatchError;
    SpRuntimeModuleError: SpRuntimeModuleError;
    SpRuntimeMultiSignature: SpRuntimeMultiSignature;
    SpRuntimeTokenError: SpRuntimeTokenError;
    SpRuntimeTransactionalError: SpRuntimeTransactionalError;
    SpVersionRuntimeVersion: SpVersionRuntimeVersion;
    SpWeightsRuntimeDbWeight: SpWeightsRuntimeDbWeight;
    SpWeightsWeightV2Weight: SpWeightsWeightV2Weight;
    SpacewalkPrimitivesCurrencyId: SpacewalkPrimitivesCurrencyId;
    SpacewalkPrimitivesIssueIssueRequest: SpacewalkPrimitivesIssueIssueRequest;
    SpacewalkPrimitivesIssueIssueRequestStatus: SpacewalkPrimitivesIssueIssueRequestStatus;
    SpacewalkPrimitivesOracleKey: SpacewalkPrimitivesOracleKey;
    SpacewalkPrimitivesRedeemRedeemRequest: SpacewalkPrimitivesRedeemRedeemRequest;
    SpacewalkPrimitivesRedeemRedeemRequestStatus: SpacewalkPrimitivesRedeemRedeemRequestStatus;
    SpacewalkPrimitivesReplaceReplaceRequest: SpacewalkPrimitivesReplaceReplaceRequest;
    SpacewalkPrimitivesReplaceReplaceRequestStatus: SpacewalkPrimitivesReplaceReplaceRequestStatus;
    SpacewalkPrimitivesTokenSymbol: SpacewalkPrimitivesTokenSymbol;
    SpacewalkPrimitivesVaultCurrencyPair: SpacewalkPrimitivesVaultCurrencyPair;
    SpacewalkPrimitivesVaultId: SpacewalkPrimitivesVaultId;
    SpacewalkRuntimeStandaloneRuntime: SpacewalkRuntimeStandaloneRuntime;
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
  } // InterfaceTypes
} // declare module
