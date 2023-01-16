// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { AccountId32, H256 } from '@pendulum-chain/types/interfaces/runtime';
import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { BTreeSet, Bytes, Option, U256, U8aFixed, Vec, bool, i128, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { FrameSupportDispatchPerDispatchClassWeight, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, OracleTimestampedValue, OracleVersion, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensReserveData, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesReserveData, PalletGrandpaStoredPendingChange, PalletGrandpaStoredState, PalletTransactionPaymentReleases, SecurityErrorCode, SecurityStatusCode, SpRuntimeDigest, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesIssueIssueRequest, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesRedeemRedeemRequest, SpacewalkPrimitivesReplaceReplaceRequest, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, StellarRelayOrganization, StellarRelayValidator, VaultRegistrySystemVault, VaultRegistryVault } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    balances: {
      /**
       * The Balances pallet example of storing the balance of an account.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
       * }
       * ```
       * 
       * You can also store the balance of an account in the `System` pallet.
       * 
       * # Example
       * 
       * ```nocompile
       * impl pallet_balances::Config for Runtime {
       * type AccountStore = System
       * }
       * ```
       * 
       * But this comes with tradeoffs, storing account balances in the system pallet stores
       * `frame_system` data alongside the account data contrary to storing account balances in the
       * `Balances` pallet, which uses a `StorageMap` to store balances data only.
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletBalancesAccountData>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units of outstanding deactivated balance in the system.
       **/
      inactiveIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesBalanceLock>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesReserveData>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    currencies: {
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    fee: {
      /**
       * # Issue
       * Fee share that users need to pay to issue tokens.
       **/
      issueFee: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Default griefing collateral (e.g. DOT/KSM) as a percentage of the locked
       * collateral of a Vault a user has to lock to issue tokens.
       **/
      issueGriefingCollateral: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * # Vault Registry
       * If users execute a redeem with a Vault flagged for premium redeem,
       * they can earn a collateral premium, slashed from the Vault.
       **/
      premiumRedeemFee: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fee that a Vault has to pay if it fails to execute redeem or replace requests
       * (for redeem, on top of the slashed value of the request). The fee is
       * paid in collateral based on the token amount at the current exchange rate.
       **/
      punishmentFee: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * # Redeem
       * Fee share that users need to pay to redeem tokens.
       **/
      redeemFee: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * # Replace
       * Default griefing collateral (e.g. DOT/KSM) as a percentage of the to-be-locked collateral
       * of the new Vault. This collateral will be slashed and allocated to the replacing Vault
       * if the to-be-replaced Vault does not transfer the Stellar assets on time.
       **/
      replaceGriefingCollateral: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    grandpa: {
      /**
       * The number of changes (both in terms of keys and underlying economic responsibilities)
       * in the "set" of Grandpa validators from genesis.
       **/
      currentSetId: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * next block number where we can force a change.
       **/
      nextForced: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Pending change: (signaled at, scheduled change).
       **/
      pendingChange: AugmentedQuery<ApiType, () => Observable<Option<PalletGrandpaStoredPendingChange>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from grandpa set ID to the index of the *most recent* session for which its
       * members were responsible.
       * 
       * TWOX-NOTE: `SetId` is not under user control.
       **/
      setIdSession: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<u32>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * `true` if we are currently stalled.
       **/
      stalled: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u32, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * State of the current authority set.
       **/
      state: AugmentedQuery<ApiType, () => Observable<PalletGrandpaStoredState>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    issue: {
      currentVolumeAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Represent interval define regular 24 hour intervals (every 24 * 3600 / 12 blocks)
       **/
      intervalLength: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum amount of wrapped assets that is required for issue requests
       **/
      issueMinimumTransferAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The time difference in number of blocks between an issue request is created
       * and required completion time by a user. The issue period has an upper limit
       * to prevent griefing of vault collateral.
       **/
      issuePeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Users create issue requests to issue tokens. This mapping provides access
       * from a unique hash `IssueId` to an `IssueRequest` struct.
       **/
      issueRequests: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<SpacewalkPrimitivesIssueIssueRequest>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Represent current interval current_block_number / IntervalLength
       **/
      lastIntervalIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      limitVolumeAmount: AugmentedQuery<ApiType, () => Observable<Option<u128>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * CurrencyID that represents the currency in which the volume limit is measured, eg DOT, USDC
       * or PEN
       **/
      limitVolumeCurrencyId: AugmentedQuery<ApiType, () => Observable<SpacewalkPrimitivesCurrencyId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    nomination: {
      /**
       * Flag indicating whether this feature is enabled
       **/
      nominationEnabled: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of Vaults who have enabled nomination
       **/
      vaults: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<bool>, [SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    oracle: {
      /**
       * Current medianized value for the given key
       **/
      aggregate: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | { FeeEstimation: any } | string | Uint8Array) => Observable<Option<u128>>, [SpacewalkPrimitivesOracleKey]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesOracleKey]>;
      authorizedOracles: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Bytes>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Maximum delay (milliseconds) for a reported value to be used
       **/
      maxDelay: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      rawValues: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | { FeeEstimation: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<OracleTimestampedValue>>, [SpacewalkPrimitivesOracleKey, AccountId32]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesOracleKey, AccountId32]>;
      /**
       * if a key is present, it means the values have been updated
       **/
      rawValuesUpdated: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | { FeeEstimation: any } | string | Uint8Array) => Observable<Option<bool>>, [SpacewalkPrimitivesOracleKey]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesOracleKey]>;
      /**
       * Build storage at V1 (requires default 0).
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<OracleVersion>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Time until which the aggregate is valid
       **/
      validUntil: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | { FeeEstimation: any } | string | Uint8Array) => Observable<Option<u64>>, [SpacewalkPrimitivesOracleKey]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesOracleKey]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    redeem: {
      currentVolumeAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Represent interval define regular 24 hour intervals (every 24 * 3600 / 12 blocks)
       **/
      intervalLength: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Represent current interval current_block_number / IntervalLength
       **/
      lastIntervalIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      limitVolumeAmount: AugmentedQuery<ApiType, () => Observable<Option<u128>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * CurrencyID that represents the currency in which the volume limit is measured, eg DOT, USDC
       * or PEN
       **/
      limitVolumeCurrencyId: AugmentedQuery<ApiType, () => Observable<SpacewalkPrimitivesCurrencyId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The minimum amount of wrapped assets that is accepted for redeem requests
       **/
      redeemMinimumTransferAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The time difference in number of blocks between a redeem request is created and required
       * completion time by a vault. The redeem period has an upper limit to ensure the user gets
       * their Stellar assets in time and to potentially punish a vault for inactivity or stealing
       * Stellar assets.
       **/
      redeemPeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Users create redeem requests to receive stellar assets in return for their previously issued
       * tokens. This mapping provides access from a unique hash redeemId to a Redeem struct.
       **/
      redeemRequests: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<SpacewalkPrimitivesRedeemRedeemRequest>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    replace: {
      /**
       * The minimum amount of wrapped assets that is accepted for replace requests
       **/
      replaceMinimumTransferAmount: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The time difference in number of blocks between when a replace request is created
       * and required completion time by a vault. The replace period has an upper limit
       * to prevent griefing of vault collateral.
       **/
      replacePeriod: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Vaults create replace requests to transfer locked collateral.
       * This mapping provides access from a unique hash to a `ReplaceRequest`.
       **/
      replaceRequests: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<SpacewalkPrimitivesReplaceReplaceRequest>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    security: {
      /**
       * Like frame_system::block_number, but this one only increments if the parachain status is
       * RUNNING. This variable is used to keep track of durations, such as the issue/redeem/replace
       * expiry. If the parachain is not RUNNING, no payment proofs can be submitted, and it wouldn't
       * be fair to punish the user/vault. By using this variable we ensure that they have sufficient
       * time to submit their proof.
       **/
      activeBlockCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Set of ErrorCodes, indicating the reason for an "Error" ParachainStatus.
       **/
      errors: AugmentedQuery<ApiType, () => Observable<BTreeSet<SecurityErrorCode>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Integer increment-only counter, used to prevent collisions when generating identifiers
       * for e.g. issue, redeem or replace requests.
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<U256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Integer/Enum defining the current state of the Spacewalk-Parachain.
       **/
      parachainStatus: AugmentedQuery<ApiType, () => Observable<SecurityStatusCode>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    stellarRelay: {
      isPublicNetwork: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      newValidatorsEnactmentBlockHeight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      oldOrganizations: AugmentedQuery<ApiType, () => Observable<Vec<StellarRelayOrganization>>, []> & QueryableStorageEntry<ApiType, []>;
      oldValidators: AugmentedQuery<ApiType, () => Observable<Vec<StellarRelayValidator>>, []> & QueryableStorageEntry<ApiType, []>;
      organizations: AugmentedQuery<ApiType, () => Observable<Vec<StellarRelayOrganization>>, []> & QueryableStorageEntry<ApiType, []>;
      validators: AugmentedQuery<ApiType, () => Observable<Vec<StellarRelayValidator>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<FrameSystemAccountInfo>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<H256>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<FrameSupportDispatchPerDispatchClassWeight>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<SpRuntimeDigest>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Events deposited for the current block.
       * 
       * NOTE: The item is unbound and should therefore never be read on chain.
       * It could otherwise inflate the PoV size of a block.
       * 
       * Events have a large in-memory size. Box the events to not go out-of-memory
       * just in case someone still reads them from within the runtime.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<FrameSystemEventRecord>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Vec<ITuple<[u32, u32]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemPhase>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<FrameSystemLastRuntimeUpgradeInfo>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    tokens: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, SpacewalkPrimitivesCurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, SpacewalkPrimitivesCurrencyId]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [AccountId32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, SpacewalkPrimitivesCurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<u128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletTransactionPaymentReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vaultRegistry: {
      /**
       * Determines the lower bound for the collateral rate in issued tokens. If a Vault’s
       * collateral rate drops below this, automatic liquidation (forced Redeem) is triggered.
       **/
      liquidationCollateralThreshold: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => Observable<Option<u128>>, [SpacewalkPrimitivesVaultCurrencyPair]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultCurrencyPair]>;
      liquidationVault: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => Observable<Option<VaultRegistrySystemVault>>, [SpacewalkPrimitivesVaultCurrencyPair]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * The minimum collateral (e.g. DOT/KSM) a Vault needs to provide to register.
       **/
      minimumCollateralVault: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<u128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Determines the rate for the collateral rate of Vaults, at which users receive a premium,
       * allocated from the Vault's collateral, when performing a redeem with this Vault. This
       * threshold should be greater than the LiquidationCollateralThreshold.
       **/
      premiumRedeemThreshold: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => Observable<Option<u128>>, [SpacewalkPrimitivesVaultCurrencyPair]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * If a Vault fails to execute a correct redeem or replace, it is temporarily banned
       * from further issue, redeem or replace requests. This value configures the duration
       * of this ban (in number of blocks) .
       **/
      punishmentDelay: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Mapping of reserved Stellar addresses to the registered account
       **/
      reservedAddresses: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<SpacewalkPrimitivesVaultId>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
      /**
       * Determines the over-collateralization rate for collateral locked by Vaults, necessary for
       * wrapped tokens. This threshold should be greater than the LiquidationCollateralThreshold.
       **/
      secureCollateralThreshold: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => Observable<Option<u128>>, [SpacewalkPrimitivesVaultCurrencyPair]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * Determines the over-collateralization rate for collateral locked by Vaults, necessary for
       * wrapped tokens. This threshold should be greater than the LiquidationCollateralThreshold.
       **/
      systemCollateralCeiling: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => Observable<Option<u128>>, [SpacewalkPrimitivesVaultCurrencyPair]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * Total collateral used for collateral tokens issued by active vaults, excluding the
       * liquidation vault
       **/
      totalUserVaultCollateral: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => Observable<u128>, [SpacewalkPrimitivesVaultCurrencyPair]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * Mapping of Vaults, using the respective Vault account identifier as key.
       **/
      vaults: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<Option<VaultRegistryVault>>, [SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultId]>;
      /**
       * Mapping of Vaults, using the respective Vault account identifier as key.
       **/
      vaultStellarPublicKey: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<U8aFixed>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vaultRewards: {
      /**
       * Used to compute the rewards for a participant's stake.
       **/
      rewardPerToken: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Accounts for previous changes in stake size.
       **/
      rewardTally: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, arg2: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]>;
      /**
       * The stake of a participant in this reward pool.
       **/
      stake: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultId]>;
      /**
       * The total unclaimed rewards distributed to this reward pool.
       * NOTE: this is currently only used for integration tests.
       **/
      totalRewards: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * The total stake deposited to this reward pool.
       **/
      totalStake: AugmentedQuery<ApiType, () => Observable<i128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vaultStaking: {
      /**
       * The nonce of the current staking pool, used in force refunds.
       * This is a strictly increasing value.
       **/
      nonce: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<u32>, [SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultId]>;
      /**
       * Used to compute the rewards for a participant's stake.
       **/
      rewardPerToken: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, arg2: ITuple<[u32, SpacewalkPrimitivesVaultId]> | [u32 | AnyNumber | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]>;
      /**
       * Accounts for previous changes in stake size.
       **/
      rewardTally: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, arg2: ITuple<[u32, SpacewalkPrimitivesVaultId, AccountId32]> | [u32 | AnyNumber | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId, AccountId32]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId, AccountId32]>]>;
      /**
       * Used to compute the amount to slash from a participant's stake.
       **/
      slashPerToken: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<i128>, [u32, SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [u32, SpacewalkPrimitivesVaultId]>;
      /**
       * Accounts for previous changes in stake size.
       **/
      slashTally: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: ITuple<[SpacewalkPrimitivesVaultId, AccountId32]> | [SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<i128>, [u32, ITuple<[SpacewalkPrimitivesVaultId, AccountId32]>]> & QueryableStorageEntry<ApiType, [u32, ITuple<[SpacewalkPrimitivesVaultId, AccountId32]>]>;
      /**
       * The stake of a participant in this reward pool.
       **/
      stake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: ITuple<[SpacewalkPrimitivesVaultId, AccountId32]> | [SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<i128>, [u32, ITuple<[SpacewalkPrimitivesVaultId, AccountId32]>]> & QueryableStorageEntry<ApiType, [u32, ITuple<[SpacewalkPrimitivesVaultId, AccountId32]>]>;
      /**
       * The total stake - this will increase on deposit and decrease on withdrawal or slashing.
       **/
      totalCurrentStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<i128>, [u32, SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [u32, SpacewalkPrimitivesVaultId]>;
      /**
       * The total unclaimed rewards distributed to this reward pool.
       * NOTE: this is currently only used for integration tests.
       **/
      totalRewards: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Token: any } | { XCM: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, arg2: ITuple<[u32, SpacewalkPrimitivesVaultId]> | [u32 | AnyNumber | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]>;
      /**
       * The total stake - this will increase on deposit and decrease on withdrawal.
       **/
      totalStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<i128>, [u32, SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [u32, SpacewalkPrimitivesVaultId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
