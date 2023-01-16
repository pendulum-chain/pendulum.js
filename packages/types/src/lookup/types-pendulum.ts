// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Bytes, Compact, Enum, Null, Option, Result, Struct, Text, U8aFixed, Vec, bool, i128, u128, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { AccountId32, Call, H256, MultiAddress } from '@polkadot/types/interfaces/runtime';
import type { Event } from '@polkadot/types/interfaces/system';

declare module '@polkadot/types/lookup' {
  /** @name FrameSystemAccountInfo (3) */
  interface FrameSystemAccountInfo extends Struct {
    readonly nonce: u32;
    readonly consumers: u32;
    readonly providers: u32;
    readonly sufficients: u32;
    readonly data: PalletBalancesAccountData;
  }

  /** @name PalletBalancesAccountData (5) */
  interface PalletBalancesAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly miscFrozen: u128;
    readonly feeFrozen: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (7) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (8) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (13) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (15) */
  interface SpRuntimeDigestDigestItem extends Enum {
    readonly isOther: boolean;
    readonly asOther: Bytes;
    readonly isConsensus: boolean;
    readonly asConsensus: ITuple<[U8aFixed, Bytes]>;
    readonly isSeal: boolean;
    readonly asSeal: ITuple<[U8aFixed, Bytes]>;
    readonly isPreRuntime: boolean;
    readonly asPreRuntime: ITuple<[U8aFixed, Bytes]>;
    readonly isRuntimeEnvironmentUpdated: boolean;
    readonly type: 'Other' | 'Consensus' | 'Seal' | 'PreRuntime' | 'RuntimeEnvironmentUpdated';
  }

  /** @name FrameSystemEventRecord (18) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (20) */
  interface FrameSystemEvent extends Enum {
    readonly isExtrinsicSuccess: boolean;
    readonly asExtrinsicSuccess: {
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isExtrinsicFailed: boolean;
    readonly asExtrinsicFailed: {
      readonly dispatchError: SpRuntimeDispatchError;
      readonly dispatchInfo: FrameSupportDispatchDispatchInfo;
    } & Struct;
    readonly isCodeUpdated: boolean;
    readonly isNewAccount: boolean;
    readonly asNewAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isKilledAccount: boolean;
    readonly asKilledAccount: {
      readonly account: AccountId32;
    } & Struct;
    readonly isRemarked: boolean;
    readonly asRemarked: {
      readonly sender: AccountId32;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'ExtrinsicSuccess' | 'ExtrinsicFailed' | 'CodeUpdated' | 'NewAccount' | 'KilledAccount' | 'Remarked';
  }

  /** @name FrameSupportDispatchDispatchInfo (21) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (22) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (23) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (24) */
  interface SpRuntimeDispatchError extends Enum {
    readonly isOther: boolean;
    readonly isCannotLookup: boolean;
    readonly isBadOrigin: boolean;
    readonly isModule: boolean;
    readonly asModule: SpRuntimeModuleError;
    readonly isConsumerRemaining: boolean;
    readonly isNoProviders: boolean;
    readonly isTooManyConsumers: boolean;
    readonly isToken: boolean;
    readonly asToken: SpRuntimeTokenError;
    readonly isArithmetic: boolean;
    readonly asArithmetic: SpRuntimeArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (25) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (26) */
  interface SpRuntimeTokenError extends Enum {
    readonly isNoFunds: boolean;
    readonly isWouldDie: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly type: 'NoFunds' | 'WouldDie' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported';
  }

  /** @name SpRuntimeArithmeticError (27) */
  interface SpRuntimeArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (28) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name PalletGrandpaEvent (29) */
  interface PalletGrandpaEvent extends Enum {
    readonly isNewAuthorities: boolean;
    readonly asNewAuthorities: {
      readonly authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    } & Struct;
    readonly isPaused: boolean;
    readonly isResumed: boolean;
    readonly type: 'NewAuthorities' | 'Paused' | 'Resumed';
  }

  /** @name SpFinalityGrandpaAppPublic (32) */
  interface SpFinalityGrandpaAppPublic extends SpCoreEd25519Public {}

  /** @name SpCoreEd25519Public (33) */
  interface SpCoreEd25519Public extends U8aFixed {}

  /** @name PalletSudoEvent (34) */
  interface PalletSudoEvent extends Enum {
    readonly isSudid: boolean;
    readonly asSudid: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isKeyChanged: boolean;
    readonly asKeyChanged: {
      readonly oldSudoer: Option<AccountId32>;
    } & Struct;
    readonly isSudoAsDone: boolean;
    readonly asSudoAsDone: {
      readonly sudoResult: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'Sudid' | 'KeyChanged' | 'SudoAsDone';
  }

  /** @name OrmlTokensModuleEvent (38) */
  interface OrmlTokensModuleEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly status: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isTotalIssuanceSet: boolean;
    readonly asTotalIssuanceSet: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly freeAmount: u128;
      readonly reservedAmount: u128;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockSet: boolean;
    readonly asLockSet: {
      readonly lockId: U8aFixed;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isLockRemoved: boolean;
    readonly asLockRemoved: {
      readonly lockId: U8aFixed;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved';
  }

  /** @name SpacewalkPrimitivesCurrencyId (39) */
  interface SpacewalkPrimitivesCurrencyId extends Enum {
    readonly isToken: boolean;
    readonly asToken: SpacewalkPrimitivesTokenSymbol;
    readonly isXcm: boolean;
    readonly asXcm: SpacewalkPrimitivesForeignCurrencyId;
    readonly isNative: boolean;
    readonly isStellarNative: boolean;
    readonly isAlphaNum4: boolean;
    readonly asAlphaNum4: {
      readonly code: U8aFixed;
      readonly issuer: U8aFixed;
    } & Struct;
    readonly isAlphaNum12: boolean;
    readonly asAlphaNum12: {
      readonly code: U8aFixed;
      readonly issuer: U8aFixed;
    } & Struct;
    readonly type: 'Token' | 'Xcm' | 'Native' | 'StellarNative' | 'AlphaNum4' | 'AlphaNum12';
  }

  /** @name SpacewalkPrimitivesTokenSymbol (40) */
  interface SpacewalkPrimitivesTokenSymbol extends Enum {
    readonly isDot: boolean;
    readonly isPen: boolean;
    readonly isKsm: boolean;
    readonly isAmpe: boolean;
    readonly type: 'Dot' | 'Pen' | 'Ksm' | 'Ampe';
  }

  /** @name SpacewalkPrimitivesForeignCurrencyId (41) */
  interface SpacewalkPrimitivesForeignCurrencyId extends Enum {
    readonly isKsm: boolean;
    readonly isKar: boolean;
    readonly isAusd: boolean;
    readonly isBnc: boolean;
    readonly isVsKSM: boolean;
    readonly isHko: boolean;
    readonly isMovr: boolean;
    readonly isSdn: boolean;
    readonly isKint: boolean;
    readonly isKbtc: boolean;
    readonly isGens: boolean;
    readonly isXor: boolean;
    readonly isTeer: boolean;
    readonly isKilt: boolean;
    readonly isPha: boolean;
    readonly isZtg: boolean;
    readonly isUsd: boolean;
    readonly type: 'Ksm' | 'Kar' | 'Ausd' | 'Bnc' | 'VsKSM' | 'Hko' | 'Movr' | 'Sdn' | 'Kint' | 'Kbtc' | 'Gens' | 'Xor' | 'Teer' | 'Kilt' | 'Pha' | 'Ztg' | 'Usd';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (43) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletBalancesEvent (45) */
  interface PalletBalancesEvent extends Enum {
    readonly isEndowed: boolean;
    readonly asEndowed: {
      readonly account: AccountId32;
      readonly freeBalance: u128;
    } & Struct;
    readonly isDustLost: boolean;
    readonly asDustLost: {
      readonly account: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBalanceSet: boolean;
    readonly asBalanceSet: {
      readonly who: AccountId32;
      readonly free: u128;
      readonly reserved: u128;
    } & Struct;
    readonly isReserved: boolean;
    readonly asReserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnreserved: boolean;
    readonly asUnreserved: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isReserveRepatriated: boolean;
    readonly asReserveRepatriated: {
      readonly from: AccountId32;
      readonly to: AccountId32;
      readonly amount: u128;
      readonly destinationStatus: FrameSupportTokensMiscBalanceStatus;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSlashed: boolean;
    readonly asSlashed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed';
  }

  /** @name PalletTransactionPaymentEvent (46) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name StellarRelayEvent (47) */
  interface StellarRelayEvent extends Enum {
    readonly isUpdateTier1ValidatorSet: boolean;
    readonly asUpdateTier1ValidatorSet: {
      readonly newValidatorsEnactmentBlockHeight: u32;
    } & Struct;
    readonly type: 'UpdateTier1ValidatorSet';
  }

  /** @name RewardEvent (48) */
  interface RewardEvent extends Enum {
    readonly isDepositStake: boolean;
    readonly asDepositStake: {
      readonly rewardId: SpacewalkPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isDistributeReward: boolean;
    readonly asDistributeReward: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawStake: boolean;
    readonly asWithdrawStake: {
      readonly rewardId: SpacewalkPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawReward: boolean;
    readonly asWithdrawReward: {
      readonly rewardId: SpacewalkPrimitivesVaultId;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly type: 'DepositStake' | 'DistributeReward' | 'WithdrawStake' | 'WithdrawReward';
  }

  /** @name SpacewalkPrimitivesVaultId (49) */
  interface SpacewalkPrimitivesVaultId extends Struct {
    readonly accountId: AccountId32;
    readonly currencies: SpacewalkPrimitivesVaultCurrencyPair;
  }

  /** @name SpacewalkPrimitivesVaultCurrencyPair (50) */
  interface SpacewalkPrimitivesVaultCurrencyPair extends Struct {
    readonly collateral: SpacewalkPrimitivesCurrencyId;
    readonly wrapped: SpacewalkPrimitivesCurrencyId;
  }

  /** @name StakingEvent (53) */
  interface StakingEvent extends Enum {
    readonly isDepositStake: boolean;
    readonly asDepositStake: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isDistributeReward: boolean;
    readonly asDistributeReward: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawStake: boolean;
    readonly asWithdrawStake: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawReward: boolean;
    readonly asWithdrawReward: {
      readonly nonce: u32;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: i128;
    } & Struct;
    readonly isForceRefund: boolean;
    readonly asForceRefund: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isIncreaseNonce: boolean;
    readonly asIncreaseNonce: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly newNonce: u32;
    } & Struct;
    readonly type: 'DepositStake' | 'DistributeReward' | 'WithdrawStake' | 'WithdrawReward' | 'ForceRefund' | 'IncreaseNonce';
  }

  /** @name SecurityEvent (54) */
  interface SecurityEvent extends Enum {
    readonly isRecoverFromErrors: boolean;
    readonly asRecoverFromErrors: {
      readonly newStatus: SecurityStatusCode;
      readonly clearedErrors: Vec<SecurityErrorCode>;
    } & Struct;
    readonly isUpdateActiveBlock: boolean;
    readonly asUpdateActiveBlock: {
      readonly blockNumber: u32;
    } & Struct;
    readonly type: 'RecoverFromErrors' | 'UpdateActiveBlock';
  }

  /** @name SecurityStatusCode (55) */
  interface SecurityStatusCode extends Enum {
    readonly isRunning: boolean;
    readonly isError: boolean;
    readonly isShutdown: boolean;
    readonly type: 'Running' | 'Error' | 'Shutdown';
  }

  /** @name SecurityErrorCode (57) */
  interface SecurityErrorCode extends Enum {
    readonly isNone: boolean;
    readonly isOracleOffline: boolean;
    readonly type: 'None' | 'OracleOffline';
  }

  /** @name VaultRegistryEvent (58) */
  interface VaultRegistryEvent extends Enum {
    readonly isRegisterVault: boolean;
    readonly asRegisterVault: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly collateral: u128;
    } & Struct;
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly newCollateral: u128;
      readonly totalCollateral: u128;
      readonly freeCollateral: u128;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly withdrawnAmount: u128;
      readonly totalCollateral: u128;
    } & Struct;
    readonly isIncreaseLockedCollateral: boolean;
    readonly asIncreaseLockedCollateral: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly delta: u128;
      readonly total: u128;
    } & Struct;
    readonly isDecreaseLockedCollateral: boolean;
    readonly asDecreaseLockedCollateral: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly delta: u128;
      readonly total: u128;
    } & Struct;
    readonly isUpdatePublicKey: boolean;
    readonly asUpdatePublicKey: {
      readonly accountId: AccountId32;
      readonly publicKey: U8aFixed;
    } & Struct;
    readonly isRegisterAddress: boolean;
    readonly asRegisterAddress: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly address: U8aFixed;
    } & Struct;
    readonly isIncreaseToBeIssuedTokens: boolean;
    readonly asIncreaseToBeIssuedTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isDecreaseToBeIssuedTokens: boolean;
    readonly asDecreaseToBeIssuedTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly decrease: u128;
    } & Struct;
    readonly isIssueTokens: boolean;
    readonly asIssueTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isIncreaseToBeRedeemedTokens: boolean;
    readonly asIncreaseToBeRedeemedTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isDecreaseToBeRedeemedTokens: boolean;
    readonly asDecreaseToBeRedeemedTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly decrease: u128;
    } & Struct;
    readonly isIncreaseToBeReplacedTokens: boolean;
    readonly asIncreaseToBeReplacedTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly increase: u128;
    } & Struct;
    readonly isDecreaseToBeReplacedTokens: boolean;
    readonly asDecreaseToBeReplacedTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly decrease: u128;
    } & Struct;
    readonly isDecreaseTokens: boolean;
    readonly asDecreaseTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly userId: AccountId32;
      readonly decrease: u128;
    } & Struct;
    readonly isRedeemTokens: boolean;
    readonly asRedeemTokens: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly redeemedAmount: u128;
    } & Struct;
    readonly isRedeemTokensPremium: boolean;
    readonly asRedeemTokensPremium: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly redeemedAmount: u128;
      readonly collateral: u128;
      readonly userId: AccountId32;
    } & Struct;
    readonly isRedeemTokensLiquidatedVault: boolean;
    readonly asRedeemTokensLiquidatedVault: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly tokens: u128;
      readonly collateral: u128;
    } & Struct;
    readonly isRedeemTokensLiquidation: boolean;
    readonly asRedeemTokensLiquidation: {
      readonly redeemerId: AccountId32;
      readonly burnedTokens: u128;
      readonly transferredCollateral: u128;
    } & Struct;
    readonly isReplaceTokens: boolean;
    readonly asReplaceTokens: {
      readonly oldVaultId: SpacewalkPrimitivesVaultId;
      readonly newVaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly additionalCollateral: u128;
    } & Struct;
    readonly isLiquidateVault: boolean;
    readonly asLiquidateVault: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly issuedTokens: u128;
      readonly toBeIssuedTokens: u128;
      readonly toBeRedeemedTokens: u128;
      readonly toBeReplacedTokens: u128;
      readonly backingCollateral: u128;
      readonly status: VaultRegistryVaultStatus;
      readonly replaceCollateral: u128;
    } & Struct;
    readonly isBanVault: boolean;
    readonly asBanVault: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly bannedUntil: u32;
    } & Struct;
    readonly type: 'RegisterVault' | 'DepositCollateral' | 'WithdrawCollateral' | 'IncreaseLockedCollateral' | 'DecreaseLockedCollateral' | 'UpdatePublicKey' | 'RegisterAddress' | 'IncreaseToBeIssuedTokens' | 'DecreaseToBeIssuedTokens' | 'IssueTokens' | 'IncreaseToBeRedeemedTokens' | 'DecreaseToBeRedeemedTokens' | 'IncreaseToBeReplacedTokens' | 'DecreaseToBeReplacedTokens' | 'DecreaseTokens' | 'RedeemTokens' | 'RedeemTokensPremium' | 'RedeemTokensLiquidatedVault' | 'RedeemTokensLiquidation' | 'ReplaceTokens' | 'LiquidateVault' | 'BanVault';
  }

  /** @name VaultRegistryVaultStatus (59) */
  interface VaultRegistryVaultStatus extends Enum {
    readonly isActive: boolean;
    readonly asActive: bool;
    readonly isLiquidated: boolean;
    readonly type: 'Active' | 'Liquidated';
  }

  /** @name OracleEvent (61) */
  interface OracleEvent extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly oracleId: AccountId32;
      readonly values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>>;
    } & Struct;
    readonly isAggregateUpdated: boolean;
    readonly asAggregateUpdated: {
      readonly values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, Option<u128>]>>;
    } & Struct;
    readonly isOracleAdded: boolean;
    readonly asOracleAdded: {
      readonly oracleId: AccountId32;
      readonly name: Bytes;
    } & Struct;
    readonly isOracleRemoved: boolean;
    readonly asOracleRemoved: {
      readonly oracleId: AccountId32;
    } & Struct;
    readonly type: 'FeedValues' | 'AggregateUpdated' | 'OracleAdded' | 'OracleRemoved';
  }

  /** @name SpacewalkPrimitivesOracleKey (64) */
  interface SpacewalkPrimitivesOracleKey extends Enum {
    readonly isExchangeRate: boolean;
    readonly asExchangeRate: SpacewalkPrimitivesCurrencyId;
    readonly isFeeEstimation: boolean;
    readonly type: 'ExchangeRate' | 'FeeEstimation';
  }

  /** @name IssueEvent (69) */
  interface IssueEvent extends Enum {
    readonly isRequestIssue: boolean;
    readonly asRequestIssue: {
      readonly issueId: H256;
      readonly requester: AccountId32;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly fee: u128;
      readonly griefingCollateral: u128;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly vaultStellarPublicKey: U8aFixed;
    } & Struct;
    readonly isIssueAmountChange: boolean;
    readonly asIssueAmountChange: {
      readonly issueId: H256;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly fee: u128;
      readonly confiscatedGriefingCollateral: u128;
    } & Struct;
    readonly isExecuteIssue: boolean;
    readonly asExecuteIssue: {
      readonly issueId: H256;
      readonly requester: AccountId32;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly fee: u128;
    } & Struct;
    readonly isCancelIssue: boolean;
    readonly asCancelIssue: {
      readonly issueId: H256;
      readonly requester: AccountId32;
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isIssuePeriodChange: boolean;
    readonly asIssuePeriodChange: {
      readonly period: u32;
    } & Struct;
    readonly isRateLimitUpdate: boolean;
    readonly asRateLimitUpdate: {
      readonly limitVolumeAmount: Option<u128>;
      readonly limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId;
      readonly intervalLength: u32;
    } & Struct;
    readonly type: 'RequestIssue' | 'IssueAmountChange' | 'ExecuteIssue' | 'CancelIssue' | 'IssuePeriodChange' | 'RateLimitUpdate';
  }

  /** @name RedeemEvent (71) */
  interface RedeemEvent extends Enum {
    readonly isRequestRedeem: boolean;
    readonly asRequestRedeem: {
      readonly redeemId: H256;
      readonly redeemer: AccountId32;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly fee: u128;
      readonly premium: u128;
      readonly stellarAddress: U8aFixed;
      readonly transferFee: u128;
    } & Struct;
    readonly isLiquidationRedeem: boolean;
    readonly asLiquidationRedeem: {
      readonly redeemer: AccountId32;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
    } & Struct;
    readonly isExecuteRedeem: boolean;
    readonly asExecuteRedeem: {
      readonly redeemId: H256;
      readonly redeemer: AccountId32;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly fee: u128;
      readonly transferFee: u128;
    } & Struct;
    readonly isCancelRedeem: boolean;
    readonly asCancelRedeem: {
      readonly redeemId: H256;
      readonly redeemer: AccountId32;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly slashedAmount: u128;
      readonly status: SpacewalkPrimitivesRedeemRedeemRequestStatus;
    } & Struct;
    readonly isMintTokensForReimbursedRedeem: boolean;
    readonly asMintTokensForReimbursedRedeem: {
      readonly redeemId: H256;
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
    } & Struct;
    readonly isRedeemPeriodChange: boolean;
    readonly asRedeemPeriodChange: {
      readonly period: u32;
    } & Struct;
    readonly isSelfRedeem: boolean;
    readonly asSelfRedeem: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly fee: u128;
    } & Struct;
    readonly isRateLimitUpdate: boolean;
    readonly asRateLimitUpdate: {
      readonly limitVolumeAmount: Option<u128>;
      readonly limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId;
      readonly intervalLength: u32;
    } & Struct;
    readonly type: 'RequestRedeem' | 'LiquidationRedeem' | 'ExecuteRedeem' | 'CancelRedeem' | 'MintTokensForReimbursedRedeem' | 'RedeemPeriodChange' | 'SelfRedeem' | 'RateLimitUpdate';
  }

  /** @name SpacewalkPrimitivesRedeemRedeemRequestStatus (72) */
  interface SpacewalkPrimitivesRedeemRedeemRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isReimbursed: boolean;
    readonly asReimbursed: bool;
    readonly isRetried: boolean;
    readonly type: 'Pending' | 'Completed' | 'Reimbursed' | 'Retried';
  }

  /** @name ReplaceEvent (73) */
  interface ReplaceEvent extends Enum {
    readonly isRequestReplace: boolean;
    readonly asRequestReplace: {
      readonly oldVaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isWithdrawReplace: boolean;
    readonly asWithdrawReplace: {
      readonly oldVaultId: SpacewalkPrimitivesVaultId;
      readonly withdrawnTokens: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly withdrawnGriefingCollateral: u128;
    } & Struct;
    readonly isAcceptReplace: boolean;
    readonly asAcceptReplace: {
      readonly replaceId: H256;
      readonly oldVaultId: SpacewalkPrimitivesVaultId;
      readonly newVaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly collateral: u128;
      readonly stellarAddress: U8aFixed;
    } & Struct;
    readonly isExecuteReplace: boolean;
    readonly asExecuteReplace: {
      readonly replaceId: H256;
      readonly oldVaultId: SpacewalkPrimitivesVaultId;
      readonly newVaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isCancelReplace: boolean;
    readonly asCancelReplace: {
      readonly replaceId: H256;
      readonly newVaultId: SpacewalkPrimitivesVaultId;
      readonly oldVaultId: SpacewalkPrimitivesVaultId;
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isReplacePeriodChange: boolean;
    readonly asReplacePeriodChange: {
      readonly period: u32;
    } & Struct;
    readonly type: 'RequestReplace' | 'WithdrawReplace' | 'AcceptReplace' | 'ExecuteReplace' | 'CancelReplace' | 'ReplacePeriodChange';
  }

  /** @name NominationEvent (74) */
  interface NominationEvent extends Enum {
    readonly isNominationOptIn: boolean;
    readonly asNominationOptIn: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isNominationOptOut: boolean;
    readonly asNominationOptOut: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly nominatorId: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'NominationOptIn' | 'NominationOptOut' | 'DepositCollateral' | 'WithdrawCollateral';
  }

  /** @name FrameSystemPhase (75) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (79) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (82) */
  interface FrameSystemCall extends Enum {
    readonly isRemark: boolean;
    readonly asRemark: {
      readonly remark: Bytes;
    } & Struct;
    readonly isSetHeapPages: boolean;
    readonly asSetHeapPages: {
      readonly pages: u64;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetCodeWithoutChecks: boolean;
    readonly asSetCodeWithoutChecks: {
      readonly code: Bytes;
    } & Struct;
    readonly isSetStorage: boolean;
    readonly asSetStorage: {
      readonly items: Vec<ITuple<[Bytes, Bytes]>>;
    } & Struct;
    readonly isKillStorage: boolean;
    readonly asKillStorage: {
      readonly keys_: Vec<Bytes>;
    } & Struct;
    readonly isKillPrefix: boolean;
    readonly asKillPrefix: {
      readonly prefix: Bytes;
      readonly subkeys: u32;
    } & Struct;
    readonly isRemarkWithEvent: boolean;
    readonly asRemarkWithEvent: {
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'Remark' | 'SetHeapPages' | 'SetCode' | 'SetCodeWithoutChecks' | 'SetStorage' | 'KillStorage' | 'KillPrefix' | 'RemarkWithEvent';
  }

  /** @name FrameSystemLimitsBlockWeights (86) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (87) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (88) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (90) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (91) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (92) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (93) */
  interface SpVersionRuntimeVersion extends Struct {
    readonly specName: Text;
    readonly implName: Text;
    readonly authoringVersion: u32;
    readonly specVersion: u32;
    readonly implVersion: u32;
    readonly apis: Vec<ITuple<[U8aFixed, u32]>>;
    readonly transactionVersion: u32;
    readonly stateVersion: u8;
  }

  /** @name FrameSystemError (98) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PalletTimestampCall (99) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletGrandpaStoredState (100) */
  interface PalletGrandpaStoredState extends Enum {
    readonly isLive: boolean;
    readonly isPendingPause: boolean;
    readonly asPendingPause: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly isPaused: boolean;
    readonly isPendingResume: boolean;
    readonly asPendingResume: {
      readonly scheduledAt: u32;
      readonly delay: u32;
    } & Struct;
    readonly type: 'Live' | 'PendingPause' | 'Paused' | 'PendingResume';
  }

  /** @name PalletGrandpaStoredPendingChange (101) */
  interface PalletGrandpaStoredPendingChange extends Struct {
    readonly scheduledAt: u32;
    readonly delay: u32;
    readonly nextAuthorities: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>;
    readonly forced: Option<u32>;
  }

  /** @name PalletGrandpaCall (104) */
  interface PalletGrandpaCall extends Enum {
    readonly isReportEquivocation: boolean;
    readonly asReportEquivocation: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isReportEquivocationUnsigned: boolean;
    readonly asReportEquivocationUnsigned: {
      readonly equivocationProof: SpFinalityGrandpaEquivocationProof;
      readonly keyOwnerProof: SpCoreVoid;
    } & Struct;
    readonly isNoteStalled: boolean;
    readonly asNoteStalled: {
      readonly delay: u32;
      readonly bestFinalizedBlockNumber: u32;
    } & Struct;
    readonly type: 'ReportEquivocation' | 'ReportEquivocationUnsigned' | 'NoteStalled';
  }

  /** @name SpFinalityGrandpaEquivocationProof (105) */
  interface SpFinalityGrandpaEquivocationProof extends Struct {
    readonly setId: u64;
    readonly equivocation: SpFinalityGrandpaEquivocation;
  }

  /** @name SpFinalityGrandpaEquivocation (106) */
  interface SpFinalityGrandpaEquivocation extends Enum {
    readonly isPrevote: boolean;
    readonly asPrevote: FinalityGrandpaEquivocationPrevote;
    readonly isPrecommit: boolean;
    readonly asPrecommit: FinalityGrandpaEquivocationPrecommit;
    readonly type: 'Prevote' | 'Precommit';
  }

  /** @name FinalityGrandpaEquivocationPrevote (107) */
  interface FinalityGrandpaEquivocationPrevote extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrevote, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrevote (108) */
  interface FinalityGrandpaPrevote extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpFinalityGrandpaAppSignature (109) */
  interface SpFinalityGrandpaAppSignature extends SpCoreEd25519Signature {}

  /** @name SpCoreEd25519Signature (110) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name FinalityGrandpaEquivocationPrecommit (113) */
  interface FinalityGrandpaEquivocationPrecommit extends Struct {
    readonly roundNumber: u64;
    readonly identity: SpFinalityGrandpaAppPublic;
    readonly first: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
    readonly second: ITuple<[FinalityGrandpaPrecommit, SpFinalityGrandpaAppSignature]>;
  }

  /** @name FinalityGrandpaPrecommit (114) */
  interface FinalityGrandpaPrecommit extends Struct {
    readonly targetHash: H256;
    readonly targetNumber: u32;
  }

  /** @name SpCoreVoid (116) */
  type SpCoreVoid = Null;

  /** @name PalletGrandpaError (117) */
  interface PalletGrandpaError extends Enum {
    readonly isPauseFailed: boolean;
    readonly isResumeFailed: boolean;
    readonly isChangePending: boolean;
    readonly isTooSoon: boolean;
    readonly isInvalidKeyOwnershipProof: boolean;
    readonly isInvalidEquivocationProof: boolean;
    readonly isDuplicateOffenceReport: boolean;
    readonly type: 'PauseFailed' | 'ResumeFailed' | 'ChangePending' | 'TooSoon' | 'InvalidKeyOwnershipProof' | 'InvalidEquivocationProof' | 'DuplicateOffenceReport';
  }

  /** @name PalletSudoCall (118) */
  interface PalletSudoCall extends Enum {
    readonly isSudo: boolean;
    readonly asSudo: {
      readonly call: Call;
    } & Struct;
    readonly isSudoUncheckedWeight: boolean;
    readonly asSudoUncheckedWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSetKey: boolean;
    readonly asSetKey: {
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSudoAs: boolean;
    readonly asSudoAs: {
      readonly who: MultiAddress;
      readonly call: Call;
    } & Struct;
    readonly type: 'Sudo' | 'SudoUncheckedWeight' | 'SetKey' | 'SudoAs';
  }

  /** @name OrmlTokensModuleCall (120) */
  interface OrmlTokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly keepAlive: bool;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly type: 'Transfer' | 'TransferAll' | 'TransferKeepAlive' | 'ForceTransfer' | 'SetBalance';
  }

  /** @name OrmlCurrenciesModuleCall (125) */
  interface OrmlCurrenciesModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isTransferNativeCurrency: boolean;
    readonly asTransferNativeCurrency: {
      readonly dest: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isUpdateBalance: boolean;
    readonly asUpdateBalance: {
      readonly who: MultiAddress;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly type: 'Transfer' | 'TransferNativeCurrency' | 'UpdateBalance';
  }

  /** @name PalletBalancesCall (126) */
  interface PalletBalancesCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalance: boolean;
    readonly asSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly newReserved: Compact<u128>;
    } & Struct;
    readonly isForceTransfer: boolean;
    readonly asForceTransfer: {
      readonly source: MultiAddress;
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferKeepAlive: boolean;
    readonly asTransferKeepAlive: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isTransferAll: boolean;
    readonly asTransferAll: {
      readonly dest: MultiAddress;
      readonly keepAlive: bool;
    } & Struct;
    readonly isForceUnreserve: boolean;
    readonly asForceUnreserve: {
      readonly who: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Transfer' | 'SetBalance' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve';
  }

  /** @name StellarRelayCall (127) */
  interface StellarRelayCall extends Enum {
    readonly isUpdateTier1ValidatorSet: boolean;
    readonly asUpdateTier1ValidatorSet: {
      readonly validators: Vec<StellarRelayValidator>;
      readonly organizations: Vec<StellarRelayOrganization>;
      readonly enactmentBlockHeight: u32;
    } & Struct;
    readonly type: 'UpdateTier1ValidatorSet';
  }

  /** @name StellarRelayValidator (129) */
  interface StellarRelayValidator extends Struct {
    readonly name: Bytes;
    readonly publicKey: Bytes;
    readonly organizationId: u128;
  }

  /** @name StellarRelayOrganization (132) */
  interface StellarRelayOrganization extends Struct {
    readonly id: u128;
    readonly name: Bytes;
  }

  /** @name SecurityCall (133) */
  interface SecurityCall extends Enum {
    readonly isSetParachainStatus: boolean;
    readonly asSetParachainStatus: {
      readonly statusCode: SecurityStatusCode;
    } & Struct;
    readonly isInsertParachainError: boolean;
    readonly asInsertParachainError: {
      readonly errorCode: SecurityErrorCode;
    } & Struct;
    readonly isRemoveParachainError: boolean;
    readonly asRemoveParachainError: {
      readonly errorCode: SecurityErrorCode;
    } & Struct;
    readonly type: 'SetParachainStatus' | 'InsertParachainError' | 'RemoveParachainError';
  }

  /** @name VaultRegistryCall (134) */
  interface VaultRegistryCall extends Enum {
    readonly isRegisterVault: boolean;
    readonly asRegisterVault: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly collateral: Compact<u128>;
    } & Struct;
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isRegisterPublicKey: boolean;
    readonly asRegisterPublicKey: {
      readonly publicKey: U8aFixed;
    } & Struct;
    readonly isAcceptNewIssues: boolean;
    readonly asAcceptNewIssues: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly acceptNewIssues: bool;
    } & Struct;
    readonly isSetCustomSecureThreshold: boolean;
    readonly asSetCustomSecureThreshold: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly customThreshold: Option<u128>;
    } & Struct;
    readonly isReportUndercollateralizedVault: boolean;
    readonly asReportUndercollateralizedVault: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isSetMinimumCollateral: boolean;
    readonly asSetMinimumCollateral: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly minimum: u128;
    } & Struct;
    readonly isSetSystemCollateralCeiling: boolean;
    readonly asSetSystemCollateralCeiling: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly ceiling: u128;
    } & Struct;
    readonly isSetSecureCollateralThreshold: boolean;
    readonly asSetSecureCollateralThreshold: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetPremiumRedeemThreshold: boolean;
    readonly asSetPremiumRedeemThreshold: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isSetLiquidationCollateralThreshold: boolean;
    readonly asSetLiquidationCollateralThreshold: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly threshold: u128;
    } & Struct;
    readonly isRecoverVaultId: boolean;
    readonly asRecoverVaultId: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
    } & Struct;
    readonly type: 'RegisterVault' | 'DepositCollateral' | 'WithdrawCollateral' | 'RegisterPublicKey' | 'AcceptNewIssues' | 'SetCustomSecureThreshold' | 'ReportUndercollateralizedVault' | 'SetMinimumCollateral' | 'SetSystemCollateralCeiling' | 'SetSecureCollateralThreshold' | 'SetPremiumRedeemThreshold' | 'SetLiquidationCollateralThreshold' | 'RecoverVaultId';
  }

  /** @name OracleCall (135) */
  interface OracleCall extends Enum {
    readonly isFeedValues: boolean;
    readonly asFeedValues: {
      readonly values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>>;
    } & Struct;
    readonly isInsertAuthorizedOracle: boolean;
    readonly asInsertAuthorizedOracle: {
      readonly accountId: AccountId32;
      readonly name: Bytes;
    } & Struct;
    readonly isRemoveAuthorizedOracle: boolean;
    readonly asRemoveAuthorizedOracle: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'FeedValues' | 'InsertAuthorizedOracle' | 'RemoveAuthorizedOracle';
  }

  /** @name IssueCall (136) */
  interface IssueCall extends Enum {
    readonly isRequestIssue: boolean;
    readonly asRequestIssue: {
      readonly amount: Compact<u128>;
      readonly vaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isExecuteIssue: boolean;
    readonly asExecuteIssue: {
      readonly issueId: H256;
      readonly transactionEnvelopeXdrEncoded: Bytes;
      readonly externalizedEnvelopesEncoded: Bytes;
      readonly transactionSetEncoded: Bytes;
    } & Struct;
    readonly isCancelIssue: boolean;
    readonly asCancelIssue: {
      readonly issueId: H256;
    } & Struct;
    readonly isSetIssuePeriod: boolean;
    readonly asSetIssuePeriod: {
      readonly period: u32;
    } & Struct;
    readonly isRateLimitUpdate: boolean;
    readonly asRateLimitUpdate: {
      readonly limitVolumeAmount: Option<u128>;
      readonly limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId;
      readonly intervalLength: u32;
    } & Struct;
    readonly type: 'RequestIssue' | 'ExecuteIssue' | 'CancelIssue' | 'SetIssuePeriod' | 'RateLimitUpdate';
  }

  /** @name RedeemCall (137) */
  interface RedeemCall extends Enum {
    readonly isRequestRedeem: boolean;
    readonly asRequestRedeem: {
      readonly amountWrapped: Compact<u128>;
      readonly stellarAddress: U8aFixed;
      readonly vaultId: SpacewalkPrimitivesVaultId;
    } & Struct;
    readonly isLiquidationRedeem: boolean;
    readonly asLiquidationRedeem: {
      readonly currencies: SpacewalkPrimitivesVaultCurrencyPair;
      readonly amountWrapped: Compact<u128>;
    } & Struct;
    readonly isExecuteRedeem: boolean;
    readonly asExecuteRedeem: {
      readonly redeemId: H256;
      readonly transactionEnvelopeXdrEncoded: Bytes;
      readonly externalizedEnvelopesEncoded: Bytes;
      readonly transactionSetEncoded: Bytes;
    } & Struct;
    readonly isCancelRedeem: boolean;
    readonly asCancelRedeem: {
      readonly redeemId: H256;
      readonly reimburse: bool;
    } & Struct;
    readonly isSetRedeemPeriod: boolean;
    readonly asSetRedeemPeriod: {
      readonly period: u32;
    } & Struct;
    readonly isMintTokensForReimbursedRedeem: boolean;
    readonly asMintTokensForReimbursedRedeem: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly redeemId: H256;
    } & Struct;
    readonly isSelfRedeem: boolean;
    readonly asSelfRedeem: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly amountWrapped: u128;
    } & Struct;
    readonly isRateLimitUpdate: boolean;
    readonly asRateLimitUpdate: {
      readonly limitVolumeAmount: Option<u128>;
      readonly limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId;
      readonly intervalLength: u32;
    } & Struct;
    readonly type: 'RequestRedeem' | 'LiquidationRedeem' | 'ExecuteRedeem' | 'CancelRedeem' | 'SetRedeemPeriod' | 'MintTokensForReimbursedRedeem' | 'SelfRedeem' | 'RateLimitUpdate';
  }

  /** @name ReplaceCall (138) */
  interface ReplaceCall extends Enum {
    readonly isRequestReplace: boolean;
    readonly asRequestReplace: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isWithdrawReplace: boolean;
    readonly asWithdrawReplace: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isAcceptReplace: boolean;
    readonly asAcceptReplace: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
      readonly oldVault: SpacewalkPrimitivesVaultId;
      readonly amount: Compact<u128>;
      readonly collateral: Compact<u128>;
      readonly stellarAddress: U8aFixed;
    } & Struct;
    readonly isExecuteReplace: boolean;
    readonly asExecuteReplace: {
      readonly replaceId: H256;
      readonly transactionEnvelopeXdrEncoded: Bytes;
      readonly externalizedEnvelopesXdrEncoded: Bytes;
      readonly transactionSetXdrEncoded: Bytes;
    } & Struct;
    readonly isCancelReplace: boolean;
    readonly asCancelReplace: {
      readonly replaceId: H256;
    } & Struct;
    readonly isSetReplacePeriod: boolean;
    readonly asSetReplacePeriod: {
      readonly period: u32;
    } & Struct;
    readonly type: 'RequestReplace' | 'WithdrawReplace' | 'AcceptReplace' | 'ExecuteReplace' | 'CancelReplace' | 'SetReplacePeriod';
  }

  /** @name FeeCall (139) */
  interface FeeCall extends Enum {
    readonly isWithdrawRewards: boolean;
    readonly asWithdrawRewards: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly index: Option<u32>;
    } & Struct;
    readonly isSetIssueFee: boolean;
    readonly asSetIssueFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetIssueGriefingCollateral: boolean;
    readonly asSetIssueGriefingCollateral: {
      readonly griefingCollateral: u128;
    } & Struct;
    readonly isSetRedeemFee: boolean;
    readonly asSetRedeemFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetPremiumRedeemFee: boolean;
    readonly asSetPremiumRedeemFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetPunishmentFee: boolean;
    readonly asSetPunishmentFee: {
      readonly fee: u128;
    } & Struct;
    readonly isSetReplaceGriefingCollateral: boolean;
    readonly asSetReplaceGriefingCollateral: {
      readonly griefingCollateral: u128;
    } & Struct;
    readonly type: 'WithdrawRewards' | 'SetIssueFee' | 'SetIssueGriefingCollateral' | 'SetRedeemFee' | 'SetPremiumRedeemFee' | 'SetPunishmentFee' | 'SetReplaceGriefingCollateral';
  }

  /** @name NominationCall (140) */
  interface NominationCall extends Enum {
    readonly isSetNominationEnabled: boolean;
    readonly asSetNominationEnabled: {
      readonly enabled: bool;
    } & Struct;
    readonly isOptInToNomination: boolean;
    readonly asOptInToNomination: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
    } & Struct;
    readonly isOptOutOfNomination: boolean;
    readonly asOptOutOfNomination: {
      readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
    } & Struct;
    readonly isDepositCollateral: boolean;
    readonly asDepositCollateral: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
    } & Struct;
    readonly isWithdrawCollateral: boolean;
    readonly asWithdrawCollateral: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly amount: u128;
      readonly index: Option<u32>;
    } & Struct;
    readonly type: 'SetNominationEnabled' | 'OptInToNomination' | 'OptOutOfNomination' | 'DepositCollateral' | 'WithdrawCollateral';
  }

  /** @name PalletSudoError (141) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name OrmlTokensBalanceLock (144) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (146) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (148) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (150) */
  interface OrmlTokensModuleError extends Enum {
    readonly isBalanceTooLow: boolean;
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isMaxLocksExceeded: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'BalanceTooLow' | 'AmountIntoBalanceFailed' | 'LiquidityRestrictions' | 'MaxLocksExceeded' | 'KeepAlive' | 'ExistentialDeposit' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name OrmlCurrenciesModuleError (151) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name PalletBalancesBalanceLock (153) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (154) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (157) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name PalletBalancesError (159) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isKeepAlive: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'KeepAlive' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves';
  }

  /** @name PalletTransactionPaymentReleases (160) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name StellarRelayError (163) */
  interface StellarRelayError extends Enum {
    readonly isBase64DecodeError: boolean;
    readonly isBoundedVecCreationFailed: boolean;
    readonly isEnvelopeSignedByUnknownValidator: boolean;
    readonly isInvalidQuorumSetNotEnoughOrganizations: boolean;
    readonly isInvalidQuorumSetNotEnoughValidators: boolean;
    readonly isInvalidScpPledge: boolean;
    readonly isInvalidEnvelopeSignature: boolean;
    readonly isInvalidXDR: boolean;
    readonly isNoOrganizationsRegisteredForNetwork: boolean;
    readonly isNoValidatorsRegisteredForNetwork: boolean;
    readonly isInvalidTransactionSet: boolean;
    readonly isInvalidTransactionXDR: boolean;
    readonly isNoOrganizationsRegistered: boolean;
    readonly isNoValidatorsRegistered: boolean;
    readonly isOrganizationLimitExceeded: boolean;
    readonly isTransactionMemoDoesNotMatch: boolean;
    readonly isTransactionNotInTransactionSet: boolean;
    readonly isTransactionSetHashCreationFailed: boolean;
    readonly isTransactionSetHashMismatch: boolean;
    readonly isValidatorLimitExceeded: boolean;
    readonly type: 'Base64DecodeError' | 'BoundedVecCreationFailed' | 'EnvelopeSignedByUnknownValidator' | 'InvalidQuorumSetNotEnoughOrganizations' | 'InvalidQuorumSetNotEnoughValidators' | 'InvalidScpPledge' | 'InvalidEnvelopeSignature' | 'InvalidXDR' | 'NoOrganizationsRegisteredForNetwork' | 'NoValidatorsRegisteredForNetwork' | 'InvalidTransactionSet' | 'InvalidTransactionXDR' | 'NoOrganizationsRegistered' | 'NoValidatorsRegistered' | 'OrganizationLimitExceeded' | 'TransactionMemoDoesNotMatch' | 'TransactionNotInTransactionSet' | 'TransactionSetHashCreationFailed' | 'TransactionSetHashMismatch' | 'ValidatorLimitExceeded';
  }

  /** @name RewardError (165) */
  interface RewardError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isZeroTotalStake: boolean;
    readonly type: 'TryIntoIntError' | 'InsufficientFunds' | 'ZeroTotalStake';
  }

  /** @name StakingError (172) */
  interface StakingError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isSlashZeroTotalStake: boolean;
    readonly type: 'TryIntoIntError' | 'InsufficientFunds' | 'SlashZeroTotalStake';
  }

  /** @name CurrencyError (173) */
  interface CurrencyError extends Enum {
    readonly isAssetConversionError: boolean;
    readonly isBalanceConversionError: boolean;
    readonly isTryIntoIntError: boolean;
    readonly isInvalidCurrency: boolean;
    readonly type: 'AssetConversionError' | 'BalanceConversionError' | 'TryIntoIntError' | 'InvalidCurrency';
  }

  /** @name SecurityError (177) */
  interface SecurityError extends Enum {
    readonly isParachainNotRunning: boolean;
    readonly type: 'ParachainNotRunning';
  }

  /** @name VaultRegistrySystemVault (178) */
  interface VaultRegistrySystemVault extends Struct {
    readonly toBeIssuedTokens: u128;
    readonly issuedTokens: u128;
    readonly toBeRedeemedTokens: u128;
    readonly collateral: u128;
    readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
  }

  /** @name VaultRegistryVault (179) */
  interface VaultRegistryVault extends Struct {
    readonly id: SpacewalkPrimitivesVaultId;
    readonly status: VaultRegistryVaultStatus;
    readonly bannedUntil: Option<u32>;
    readonly secureCollateralThreshold: Option<u128>;
    readonly toBeIssuedTokens: u128;
    readonly issuedTokens: u128;
    readonly toBeRedeemedTokens: u128;
    readonly toBeReplacedTokens: u128;
    readonly replaceCollateral: u128;
    readonly activeReplaceCollateral: u128;
    readonly liquidatedCollateral: u128;
  }

  /** @name FrameSupportPalletId (180) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name VaultRegistryError (181) */
  interface VaultRegistryError extends Enum {
    readonly isInsufficientCollateral: boolean;
    readonly isExceedingVaultLimit: boolean;
    readonly isInsufficientTokensCommitted: boolean;
    readonly isVaultBanned: boolean;
    readonly isInsufficientVaultCollateralAmount: boolean;
    readonly isVaultAlreadyRegistered: boolean;
    readonly isVaultNotFound: boolean;
    readonly isVaultNotBelowLiquidationThreshold: boolean;
    readonly isInvalidPublicKey: boolean;
    readonly isMaxNominationRatioViolation: boolean;
    readonly isCurrencyCeilingExceeded: boolean;
    readonly isVaultLiquidated: boolean;
    readonly isVaultNotRecoverable: boolean;
    readonly isNoStellarPublicKey: boolean;
    readonly isPublicKeyAlreadyRegistered: boolean;
    readonly isNoTokensIssued: boolean;
    readonly isNoVaultWithSufficientCollateral: boolean;
    readonly isNoVaultWithSufficientTokens: boolean;
    readonly isNoVaultUnderThePremiumRedeemThreshold: boolean;
    readonly isInvalidCurrency: boolean;
    readonly isGlobalThresholdNotSet: boolean;
    readonly isLiquidationCollateralThresholdNotSet: boolean;
    readonly isPremiumRedeemThresholdNotSet: boolean;
    readonly isSecureCollateralThresholdNotSet: boolean;
    readonly isCeilingNotSet: boolean;
    readonly isThresholdNotAboveGlobalThreshold: boolean;
    readonly isTryIntoIntError: boolean;
    readonly isVaultNotAcceptingIssueRequests: boolean;
    readonly isMinimumCollateralNotSet: boolean;
    readonly type: 'InsufficientCollateral' | 'ExceedingVaultLimit' | 'InsufficientTokensCommitted' | 'VaultBanned' | 'InsufficientVaultCollateralAmount' | 'VaultAlreadyRegistered' | 'VaultNotFound' | 'VaultNotBelowLiquidationThreshold' | 'InvalidPublicKey' | 'MaxNominationRatioViolation' | 'CurrencyCeilingExceeded' | 'VaultLiquidated' | 'VaultNotRecoverable' | 'NoStellarPublicKey' | 'PublicKeyAlreadyRegistered' | 'NoTokensIssued' | 'NoVaultWithSufficientCollateral' | 'NoVaultWithSufficientTokens' | 'NoVaultUnderThePremiumRedeemThreshold' | 'InvalidCurrency' | 'GlobalThresholdNotSet' | 'LiquidationCollateralThresholdNotSet' | 'PremiumRedeemThresholdNotSet' | 'SecureCollateralThresholdNotSet' | 'CeilingNotSet' | 'ThresholdNotAboveGlobalThreshold' | 'TryIntoIntError' | 'VaultNotAcceptingIssueRequests' | 'MinimumCollateralNotSet';
  }

  /** @name OracleTimestampedValue (183) */
  interface OracleTimestampedValue extends Struct {
    readonly value: u128;
    readonly timestamp: u64;
  }

  /** @name OracleVersion (184) */
  interface OracleVersion extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name OracleError (185) */
  interface OracleError extends Enum {
    readonly isInvalidOracleSource: boolean;
    readonly isMissingExchangeRate: boolean;
    readonly isTryIntoIntError: boolean;
    readonly type: 'InvalidOracleSource' | 'MissingExchangeRate' | 'TryIntoIntError';
  }

  /** @name SpacewalkPrimitivesIssueIssueRequest (186) */
  interface SpacewalkPrimitivesIssueIssueRequest extends Struct {
    readonly vault: SpacewalkPrimitivesVaultId;
    readonly opentime: u32;
    readonly period: u32;
    readonly griefingCollateral: u128;
    readonly amount: u128;
    readonly asset: SpacewalkPrimitivesCurrencyId;
    readonly fee: u128;
    readonly requester: AccountId32;
    readonly stellarAddress: U8aFixed;
    readonly status: SpacewalkPrimitivesIssueIssueRequestStatus;
  }

  /** @name SpacewalkPrimitivesIssueIssueRequestStatus (187) */
  interface SpacewalkPrimitivesIssueIssueRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isCancelled: boolean;
    readonly type: 'Pending' | 'Completed' | 'Cancelled';
  }

  /** @name IssueError (188) */
  interface IssueError extends Enum {
    readonly isIssueIdNotFound: boolean;
    readonly isTimeNotExpired: boolean;
    readonly isIssueCompleted: boolean;
    readonly isIssueCancelled: boolean;
    readonly isVaultNotAcceptingNewIssues: boolean;
    readonly isInvalidExecutor: boolean;
    readonly isAmountBelowMinimumTransferAmount: boolean;
    readonly isExceedLimitVolumeForIssueRequest: boolean;
    readonly type: 'IssueIdNotFound' | 'TimeNotExpired' | 'IssueCompleted' | 'IssueCancelled' | 'VaultNotAcceptingNewIssues' | 'InvalidExecutor' | 'AmountBelowMinimumTransferAmount' | 'ExceedLimitVolumeForIssueRequest';
  }

  /** @name SpacewalkPrimitivesRedeemRedeemRequest (189) */
  interface SpacewalkPrimitivesRedeemRedeemRequest extends Struct {
    readonly vault: SpacewalkPrimitivesVaultId;
    readonly opentime: u32;
    readonly period: u32;
    readonly fee: u128;
    readonly transferFee: u128;
    readonly amount: u128;
    readonly asset: SpacewalkPrimitivesCurrencyId;
    readonly premium: u128;
    readonly redeemer: AccountId32;
    readonly stellarAddress: U8aFixed;
    readonly status: SpacewalkPrimitivesRedeemRedeemRequestStatus;
  }

  /** @name RedeemError (190) */
  interface RedeemError extends Enum {
    readonly isAmountExceedsUserBalance: boolean;
    readonly isUnauthorizedRedeemer: boolean;
    readonly isUnauthorizedVault: boolean;
    readonly isTimeNotExpired: boolean;
    readonly isRedeemCancelled: boolean;
    readonly isRedeemCompleted: boolean;
    readonly isRedeemIdNotFound: boolean;
    readonly isTryIntoIntError: boolean;
    readonly isAmountBelowMinimumTransferAmount: boolean;
    readonly isExceedLimitVolumeForIssueRequest: boolean;
    readonly type: 'AmountExceedsUserBalance' | 'UnauthorizedRedeemer' | 'UnauthorizedVault' | 'TimeNotExpired' | 'RedeemCancelled' | 'RedeemCompleted' | 'RedeemIdNotFound' | 'TryIntoIntError' | 'AmountBelowMinimumTransferAmount' | 'ExceedLimitVolumeForIssueRequest';
  }

  /** @name SpacewalkPrimitivesReplaceReplaceRequest (191) */
  interface SpacewalkPrimitivesReplaceReplaceRequest extends Struct {
    readonly oldVault: SpacewalkPrimitivesVaultId;
    readonly newVault: SpacewalkPrimitivesVaultId;
    readonly amount: u128;
    readonly asset: SpacewalkPrimitivesCurrencyId;
    readonly griefingCollateral: u128;
    readonly collateral: u128;
    readonly acceptTime: u32;
    readonly period: u32;
    readonly stellarAddress: U8aFixed;
    readonly status: SpacewalkPrimitivesReplaceReplaceRequestStatus;
  }

  /** @name SpacewalkPrimitivesReplaceReplaceRequestStatus (192) */
  interface SpacewalkPrimitivesReplaceReplaceRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isCancelled: boolean;
    readonly type: 'Pending' | 'Completed' | 'Cancelled';
  }

  /** @name ReplaceError (193) */
  interface ReplaceError extends Enum {
    readonly isReplaceAmountZero: boolean;
    readonly isAmountBelowDustAmount: boolean;
    readonly isNoPendingRequest: boolean;
    readonly isUnauthorizedVault: boolean;
    readonly isReplaceSelfNotAllowed: boolean;
    readonly isVaultHasEnabledNomination: boolean;
    readonly isReplacePeriodNotExpired: boolean;
    readonly isReplaceCompleted: boolean;
    readonly isReplaceCancelled: boolean;
    readonly isReplaceIdNotFound: boolean;
    readonly isInvalidWrappedCurrency: boolean;
    readonly type: 'ReplaceAmountZero' | 'AmountBelowDustAmount' | 'NoPendingRequest' | 'UnauthorizedVault' | 'ReplaceSelfNotAllowed' | 'VaultHasEnabledNomination' | 'ReplacePeriodNotExpired' | 'ReplaceCompleted' | 'ReplaceCancelled' | 'ReplaceIdNotFound' | 'InvalidWrappedCurrency';
  }

  /** @name FeeError (194) */
  interface FeeError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isAboveMaxExpectedValue: boolean;
    readonly type: 'TryIntoIntError' | 'AboveMaxExpectedValue';
  }

  /** @name NominationError (195) */
  interface NominationError extends Enum {
    readonly isVaultAlreadyOptedInToNomination: boolean;
    readonly isVaultNotOptedInToNomination: boolean;
    readonly isVaultNotFound: boolean;
    readonly isCannotWithdrawCollateral: boolean;
    readonly isVaultNominationDisabled: boolean;
    readonly isDepositViolatesMaxNominationRatio: boolean;
    readonly isCollateralizationTooLow: boolean;
    readonly type: 'VaultAlreadyOptedInToNomination' | 'VaultNotOptedInToNomination' | 'VaultNotFound' | 'CannotWithdrawCollateral' | 'VaultNominationDisabled' | 'DepositViolatesMaxNominationRatio' | 'CollateralizationTooLow';
  }

  /** @name SpRuntimeMultiSignature (197) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreSr25519Signature (198) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (199) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckSpecVersion (202) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (203) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (204) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (207) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (208) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (209) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name SpacewalkRuntimeStandaloneRuntime (210) */
  type SpacewalkRuntimeStandaloneRuntime = Null;

} // declare module
