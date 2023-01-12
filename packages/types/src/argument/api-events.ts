// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { AccountId32, H256 } from '@pendulum-chain/types/interfaces/runtime';
import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, i128, u128, u32, u64 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, SecurityErrorCode, SecurityStatusCode, SpFinalityGrandpaAppPublic, SpRuntimeDispatchError, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesRedeemRedeemRequestStatus, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, VaultRegistryVaultStatus } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128, reserved: u128], { who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Some amount was deposited (e.g. for transaction fees).
       **/
      Deposit: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below ExistentialDeposit,
       * resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [account: AccountId32, amount: u128], { account: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [account: AccountId32, freeBalance: u128], { account: AccountId32, freeBalance: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was moved from the reserve of the first account to the second account.
       * Final argument indicates the destination balance type.
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus], { from: AccountId32, to: AccountId32, amount: u128, destinationStatus: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    grandpa: {
      /**
       * New authority set has been applied.
       **/
      NewAuthorities: AugmentedEvent<ApiType, [authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>>], { authoritySet: Vec<ITuple<[SpFinalityGrandpaAppPublic, u64]>> }>;
      /**
       * Current authority set has been paused.
       **/
      Paused: AugmentedEvent<ApiType, []>;
      /**
       * Current authority set has been resumed.
       **/
      Resumed: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    issue: {
      CancelIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, griefingCollateral: u128], { issueId: H256, requester: AccountId32, griefingCollateral: u128 }>;
      ExecuteIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128], { issueId: H256, requester: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128 }>;
      IssueAmountChange: AugmentedEvent<ApiType, [issueId: H256, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, confiscatedGriefingCollateral: u128], { issueId: H256, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, confiscatedGriefingCollateral: u128 }>;
      IssuePeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RateLimitUpdate: AugmentedEvent<ApiType, [limitVolumeAmount: Option<u128>, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId, intervalLength: u32], { limitVolumeAmount: Option<u128>, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId, intervalLength: u32 }>;
      RequestIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, griefingCollateral: u128, vaultId: SpacewalkPrimitivesVaultId, vaultStellarPublicKey: U8aFixed], { issueId: H256, requester: AccountId32, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, griefingCollateral: u128, vaultId: SpacewalkPrimitivesVaultId, vaultStellarPublicKey: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    nomination: {
      DepositCollateral: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: u128], { vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: u128 }>;
      NominationOptIn: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId], { vaultId: SpacewalkPrimitivesVaultId }>;
      NominationOptOut: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId], { vaultId: SpacewalkPrimitivesVaultId }>;
      WithdrawCollateral: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: u128], { vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    oracle: {
      AggregateUpdated: AugmentedEvent<ApiType, [values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, Option<u128>]>>], { values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, Option<u128>]>> }>;
      /**
       * Event emitted when exchange rate is set
       **/
      FeedValues: AugmentedEvent<ApiType, [oracleId: AccountId32, values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>>], { oracleId: AccountId32, values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>> }>;
      OracleAdded: AugmentedEvent<ApiType, [oracleId: AccountId32, name: Bytes], { oracleId: AccountId32, name: Bytes }>;
      OracleRemoved: AugmentedEvent<ApiType, [oracleId: AccountId32], { oracleId: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    redeem: {
      CancelRedeem: AugmentedEvent<ApiType, [redeemId: H256, redeemer: AccountId32, vaultId: SpacewalkPrimitivesVaultId, slashedAmount: u128, status: SpacewalkPrimitivesRedeemRedeemRequestStatus], { redeemId: H256, redeemer: AccountId32, vaultId: SpacewalkPrimitivesVaultId, slashedAmount: u128, status: SpacewalkPrimitivesRedeemRedeemRequestStatus }>;
      ExecuteRedeem: AugmentedEvent<ApiType, [redeemId: H256, redeemer: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, transferFee: u128], { redeemId: H256, redeemer: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, transferFee: u128 }>;
      LiquidationRedeem: AugmentedEvent<ApiType, [redeemer: AccountId32, amount: u128, asset: SpacewalkPrimitivesCurrencyId], { redeemer: AccountId32, amount: u128, asset: SpacewalkPrimitivesCurrencyId }>;
      MintTokensForReimbursedRedeem: AugmentedEvent<ApiType, [redeemId: H256, vaultId: SpacewalkPrimitivesVaultId, amount: u128], { redeemId: H256, vaultId: SpacewalkPrimitivesVaultId, amount: u128 }>;
      RateLimitUpdate: AugmentedEvent<ApiType, [limitVolumeAmount: Option<u128>, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId, intervalLength: u32], { limitVolumeAmount: Option<u128>, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId, intervalLength: u32 }>;
      RedeemPeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RequestRedeem: AugmentedEvent<ApiType, [redeemId: H256, redeemer: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, premium: u128, stellarAddress: U8aFixed, transferFee: u128], { redeemId: H256, redeemer: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, premium: u128, stellarAddress: U8aFixed, transferFee: u128 }>;
      SelfRedeem: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, amount: u128, fee: u128], { vaultId: SpacewalkPrimitivesVaultId, amount: u128, fee: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    replace: {
      AcceptReplace: AugmentedEvent<ApiType, [replaceId: H256, oldVaultId: SpacewalkPrimitivesVaultId, newVaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, collateral: u128, stellarAddress: U8aFixed], { replaceId: H256, oldVaultId: SpacewalkPrimitivesVaultId, newVaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, collateral: u128, stellarAddress: U8aFixed }>;
      CancelReplace: AugmentedEvent<ApiType, [replaceId: H256, newVaultId: SpacewalkPrimitivesVaultId, oldVaultId: SpacewalkPrimitivesVaultId, griefingCollateral: u128], { replaceId: H256, newVaultId: SpacewalkPrimitivesVaultId, oldVaultId: SpacewalkPrimitivesVaultId, griefingCollateral: u128 }>;
      ExecuteReplace: AugmentedEvent<ApiType, [replaceId: H256, oldVaultId: SpacewalkPrimitivesVaultId, newVaultId: SpacewalkPrimitivesVaultId], { replaceId: H256, oldVaultId: SpacewalkPrimitivesVaultId, newVaultId: SpacewalkPrimitivesVaultId }>;
      ReplacePeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RequestReplace: AugmentedEvent<ApiType, [oldVaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, griefingCollateral: u128], { oldVaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, griefingCollateral: u128 }>;
      WithdrawReplace: AugmentedEvent<ApiType, [oldVaultId: SpacewalkPrimitivesVaultId, withdrawnTokens: u128, asset: SpacewalkPrimitivesCurrencyId, withdrawnGriefingCollateral: u128], { oldVaultId: SpacewalkPrimitivesVaultId, withdrawnTokens: u128, asset: SpacewalkPrimitivesCurrencyId, withdrawnGriefingCollateral: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    security: {
      RecoverFromErrors: AugmentedEvent<ApiType, [newStatus: SecurityStatusCode, clearedErrors: Vec<SecurityErrorCode>], { newStatus: SecurityStatusCode, clearedErrors: Vec<SecurityErrorCode> }>;
      UpdateActiveBlock: AugmentedEvent<ApiType, [blockNumber: u32], { blockNumber: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    stellarRelay: {
      UpdateTier1ValidatorSet: AugmentedEvent<ApiType, [newValidatorsEnactmentBlockHeight: u32], { newValidatorsEnactmentBlockHeight: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    sudo: {
      /**
       * The \[sudoer\] just switched identity; the old key is supplied if one existed.
       **/
      KeyChanged: AugmentedEvent<ApiType, [oldSudoer: Option<AccountId32>], { oldSudoer: Option<AccountId32> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      Sudid: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A sudo just took place. \[result\]
       **/
      SudoAsDone: AugmentedEvent<ApiType, [sudoResult: Result<Null, SpRuntimeDispatchError>], { sudoResult: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    system: {
      /**
       * `:code` was updated.
       **/
      CodeUpdated: AugmentedEvent<ApiType, []>;
      /**
       * An extrinsic failed.
       **/
      ExtrinsicFailed: AugmentedEvent<ApiType, [dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchError: SpRuntimeDispatchError, dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An extrinsic completed successfully.
       **/
      ExtrinsicSuccess: AugmentedEvent<ApiType, [dispatchInfo: FrameSupportDispatchDispatchInfo], { dispatchInfo: FrameSupportDispatchDispatchInfo }>;
      /**
       * An account was reaped.
       **/
      KilledAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * A new account was created.
       **/
      NewAccount: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * On on-chain remark happened.
       **/
      Remarked: AugmentedEvent<ApiType, [sender: AccountId32, hash_: H256], { sender: AccountId32, hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokens: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, free: u128, reserved: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, free: u128, reserved: u128 }>;
      /**
       * Deposited some balance into an account
       **/
      Deposited: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was removed whose balance was non-zero but below
       * ExistentialDeposit, resulting in an outright loss.
       **/
      DustLost: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * An account was created with some free balance.
       **/
      Endowed: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some locked funds were unlocked
       **/
      LockRemoved: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32], { lockId: U8aFixed, currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32 }>;
      /**
       * Some funds are locked
       **/
      LockSet: AugmentedEvent<ApiType, [lockId: U8aFixed, currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { lockId: U8aFixed, currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balance was reserved (moved from free to reserved).
       **/
      Reserved: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some reserved balance was repatriated (moved from reserved to
       * another account).
       **/
      ReserveRepatriated: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus], { currencyId: SpacewalkPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128, status: FrameSupportTokensMiscBalanceStatus }>;
      /**
       * Some balances were slashed (e.g. due to mis-behavior)
       **/
      Slashed: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, freeAmount: u128, reservedAmount: u128 }>;
      /**
       * The total issuance of an currency has been set
       **/
      TotalIssuanceSet: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Some balances were withdrawn (e.g. pay for transaction fee)
       **/
      Withdrawn: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    transactionPayment: {
      /**
       * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
       * has been paid by `who`.
       **/
      TransactionFeePaid: AugmentedEvent<ApiType, [who: AccountId32, actualFee: u128, tip: u128], { who: AccountId32, actualFee: u128, tip: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultRegistry: {
      BanVault: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, bannedUntil: u32], { vaultId: SpacewalkPrimitivesVaultId, bannedUntil: u32 }>;
      DecreaseLockedCollateral: AugmentedEvent<ApiType, [currencyPair: SpacewalkPrimitivesVaultCurrencyPair, delta: u128, total: u128], { currencyPair: SpacewalkPrimitivesVaultCurrencyPair, delta: u128, total: u128 }>;
      DecreaseToBeIssuedTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, decrease: u128], { vaultId: SpacewalkPrimitivesVaultId, decrease: u128 }>;
      DecreaseToBeRedeemedTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, decrease: u128], { vaultId: SpacewalkPrimitivesVaultId, decrease: u128 }>;
      DecreaseToBeReplacedTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, decrease: u128], { vaultId: SpacewalkPrimitivesVaultId, decrease: u128 }>;
      DecreaseTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, userId: AccountId32, decrease: u128], { vaultId: SpacewalkPrimitivesVaultId, userId: AccountId32, decrease: u128 }>;
      DepositCollateral: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, newCollateral: u128, totalCollateral: u128, freeCollateral: u128], { vaultId: SpacewalkPrimitivesVaultId, newCollateral: u128, totalCollateral: u128, freeCollateral: u128 }>;
      IncreaseLockedCollateral: AugmentedEvent<ApiType, [currencyPair: SpacewalkPrimitivesVaultCurrencyPair, delta: u128, total: u128], { currencyPair: SpacewalkPrimitivesVaultCurrencyPair, delta: u128, total: u128 }>;
      IncreaseToBeIssuedTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, increase: u128], { vaultId: SpacewalkPrimitivesVaultId, increase: u128 }>;
      IncreaseToBeRedeemedTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, increase: u128], { vaultId: SpacewalkPrimitivesVaultId, increase: u128 }>;
      IncreaseToBeReplacedTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, increase: u128], { vaultId: SpacewalkPrimitivesVaultId, increase: u128 }>;
      IssueTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, increase: u128], { vaultId: SpacewalkPrimitivesVaultId, increase: u128 }>;
      LiquidateVault: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, issuedTokens: u128, toBeIssuedTokens: u128, toBeRedeemedTokens: u128, toBeReplacedTokens: u128, backingCollateral: u128, status: VaultRegistryVaultStatus, replaceCollateral: u128], { vaultId: SpacewalkPrimitivesVaultId, issuedTokens: u128, toBeIssuedTokens: u128, toBeRedeemedTokens: u128, toBeReplacedTokens: u128, backingCollateral: u128, status: VaultRegistryVaultStatus, replaceCollateral: u128 }>;
      RedeemTokens: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, redeemedAmount: u128], { vaultId: SpacewalkPrimitivesVaultId, redeemedAmount: u128 }>;
      RedeemTokensLiquidatedVault: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, tokens: u128, collateral: u128], { vaultId: SpacewalkPrimitivesVaultId, tokens: u128, collateral: u128 }>;
      RedeemTokensLiquidation: AugmentedEvent<ApiType, [redeemerId: AccountId32, burnedTokens: u128, transferredCollateral: u128], { redeemerId: AccountId32, burnedTokens: u128, transferredCollateral: u128 }>;
      RedeemTokensPremium: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, redeemedAmount: u128, collateral: u128, userId: AccountId32], { vaultId: SpacewalkPrimitivesVaultId, redeemedAmount: u128, collateral: u128, userId: AccountId32 }>;
      RegisterAddress: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, address: U8aFixed], { vaultId: SpacewalkPrimitivesVaultId, address: U8aFixed }>;
      RegisterVault: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, collateral: u128], { vaultId: SpacewalkPrimitivesVaultId, collateral: u128 }>;
      ReplaceTokens: AugmentedEvent<ApiType, [oldVaultId: SpacewalkPrimitivesVaultId, newVaultId: SpacewalkPrimitivesVaultId, amount: u128, additionalCollateral: u128], { oldVaultId: SpacewalkPrimitivesVaultId, newVaultId: SpacewalkPrimitivesVaultId, amount: u128, additionalCollateral: u128 }>;
      UpdatePublicKey: AugmentedEvent<ApiType, [accountId: AccountId32, publicKey: U8aFixed], { accountId: AccountId32, publicKey: U8aFixed }>;
      WithdrawCollateral: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, withdrawnAmount: u128, totalCollateral: u128], { vaultId: SpacewalkPrimitivesVaultId, withdrawnAmount: u128, totalCollateral: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultRewards: {
      DepositStake: AugmentedEvent<ApiType, [rewardId: SpacewalkPrimitivesVaultId, amount: i128], { rewardId: SpacewalkPrimitivesVaultId, amount: i128 }>;
      DistributeReward: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, amount: i128], { currencyId: SpacewalkPrimitivesCurrencyId, amount: i128 }>;
      WithdrawReward: AugmentedEvent<ApiType, [rewardId: SpacewalkPrimitivesVaultId, currencyId: SpacewalkPrimitivesCurrencyId, amount: i128], { rewardId: SpacewalkPrimitivesVaultId, currencyId: SpacewalkPrimitivesCurrencyId, amount: i128 }>;
      WithdrawStake: AugmentedEvent<ApiType, [rewardId: SpacewalkPrimitivesVaultId, amount: i128], { rewardId: SpacewalkPrimitivesVaultId, amount: i128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    vaultStaking: {
      DepositStake: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: i128], { vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: i128 }>;
      DistributeReward: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, vaultId: SpacewalkPrimitivesVaultId, amount: i128], { currencyId: SpacewalkPrimitivesCurrencyId, vaultId: SpacewalkPrimitivesVaultId, amount: i128 }>;
      ForceRefund: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId], { vaultId: SpacewalkPrimitivesVaultId }>;
      IncreaseNonce: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, newNonce: u32], { vaultId: SpacewalkPrimitivesVaultId, newNonce: u32 }>;
      WithdrawReward: AugmentedEvent<ApiType, [nonce: u32, currencyId: SpacewalkPrimitivesCurrencyId, vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: i128], { nonce: u32, currencyId: SpacewalkPrimitivesCurrencyId, vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: i128 }>;
      WithdrawStake: AugmentedEvent<ApiType, [vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: i128], { vaultId: SpacewalkPrimitivesVaultId, nominatorId: AccountId32, amount: i128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
