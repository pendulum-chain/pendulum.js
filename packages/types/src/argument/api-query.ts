// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/storage';

import type { AccountId32, Call, H256 } from '@pendulum-chain/types/interfaces/runtime';
import type { ApiTypes, AugmentedQuery, QueryableStorageEntry } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Null, Option, Struct, U256, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, ITuple } from '@polkadot/types-codec/types';
import type { BifrostFarmingBoostBoostPoolInfo, BifrostFarmingBoostUserBoostInfo, BifrostFarmingGaugeGaugeInfo, BifrostFarmingGaugeGaugePoolInfo, BifrostFarmingRewardsPoolInfo, BifrostFarmingRewardsShareInfo, ClientsInfoClientRelease, CumulusPalletDmpQueueConfigData, CumulusPalletDmpQueuePageIndexData, CumulusPalletParachainSystemCodeUpgradeAuthorization, CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot, CumulusPalletParachainSystemUnincludedSegmentAncestor, CumulusPalletParachainSystemUnincludedSegmentSegmentTracker, CumulusPalletXcmpQueueInboundChannelDetails, CumulusPalletXcmpQueueOutboundChannelDetails, CumulusPalletXcmpQueueQueueConfigData, DiaOracleDiaAssetId, DiaOracleDiaCoinInfo, FoucocoRuntimeRuntimeHoldReason, FoucocoRuntimeSessionKeys, FrameSupportDispatchPerDispatchClassWeight, FrameSupportPreimagesBounded, FrameSystemAccountInfo, FrameSystemEventRecord, FrameSystemLastRuntimeUpgradeInfo, FrameSystemPhase, OracleVersion, OrmlTokensAccountData, OrmlTokensBalanceLock, OrmlTokensManagementExtensionCurrencyDetails, OrmlTokensReserveData, OrmlTraitsAssetRegistryAssetMetadata, PalletBalancesAccountData, PalletBalancesBalanceLock, PalletBalancesIdAmount, PalletBalancesReserveData, PalletBountiesBounty, PalletChildBountiesChildBounty, PalletCollectiveVotes, PalletContractsStorageContractInfo, PalletContractsStorageDeletionQueueManager, PalletContractsWasmCodeInfo, PalletDemocracyMetadataOwner, PalletDemocracyReferendumInfo, PalletDemocracyVoteThreshold, PalletDemocracyVoteVoting, PalletIdentityRegistrarInfo, PalletIdentityRegistration, PalletMultisigMultisig, PalletPreimageRequestStatus, PalletProxyAnnouncement, PalletProxyProxyDefinition, PalletSchedulerScheduled, PalletTransactionPaymentReleases, PalletTreasuryProposal, PalletVestingReleases, PalletVestingVestingInfo, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, ParachainStakingCandidate, ParachainStakingDelegationCounter, ParachainStakingInflationInflationInfo, ParachainStakingRoundInfo, ParachainStakingSetOrderedSet, ParachainStakingStakeAccountId32, ParachainStakingStakeOption, ParachainStakingTotalStake, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotPrimitivesV5AbridgedHostConfiguration, PolkadotPrimitivesV5PersistedValidationData, PolkadotPrimitivesV5UpgradeGoAhead, PolkadotPrimitivesV5UpgradeRestriction, SecurityErrorCode, SecurityStatusCode, SpConsensusAuraSr25519AppSr25519Public, SpCoreCryptoKeyTypeId, SpRuntimeDigest, SpTrieStorageProof, SpWeightsWeightV2Weight, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesIssueIssueRequest, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesRedeemRedeemRequest, SpacewalkPrimitivesReplaceReplaceRequest, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, StagingXcmV3MultiLocation, StagingXcmVersionedAssetId, StagingXcmVersionedMultiLocation, StellarRelayOrganization, StellarRelayValidator, VaultRegistrySystemVault, VaultRegistryVault, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesPairStatus } from '@polkadot/types/lookup';
import type { Observable } from '@polkadot/types/types';

export type __AugmentedQuery<ApiType extends ApiTypes> = AugmentedQuery<ApiType, () => unknown>;
export type __QueryableStorageEntry<ApiType extends ApiTypes> = QueryableStorageEntry<ApiType>;

declare module '@polkadot/api-base/types/storage' {
  interface AugmentedQueries<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * The last processed asset id - used when assigning a sequential id.
       **/
      lastAssetId: AugmentedQuery<ApiType, () => Observable<SpacewalkPrimitivesCurrencyId>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Maps a multilocation to an asset id - useful when processing xcm
       * messages.
       **/
      locationToAssetId: AugmentedQuery<ApiType, (arg: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array) => Observable<Option<SpacewalkPrimitivesCurrencyId>>, [StagingXcmV3MultiLocation]> & QueryableStorageEntry<ApiType, [StagingXcmV3MultiLocation]>;
      /**
       * The metadata of an asset, indexed by asset id.
       **/
      metadata: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Option<OrmlTraitsAssetRegistryAssetMetadata>>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    aura: {
      /**
       * The current authority set.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current slot of this block.
       * 
       * This will be set in `on_initialize`.
       **/
      currentSlot: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    auraExt: {
      /**
       * Serves as cache for the authorities.
       * 
       * The authorities in AuRa are overwritten in `on_initialize` when we switch to a new session,
       * but we require the old authorities to verify the seal when validating a PoV. This will
       * always be updated to the latest AuRa authorities in `on_finalize`.
       **/
      authorities: AugmentedQuery<ApiType, () => Observable<Vec<SpConsensusAuraSr25519AppSr25519Public>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Current slot paired with a number of authored blocks.
       * 
       * Updated on each block initialization.
       **/
      slotInfo: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[u64, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    authorship: {
      /**
       * Author of current block.
       **/
      author: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
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
       * Freeze locks on account balances.
       **/
      freezes: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<PalletBalancesIdAmount>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Holds on account balances.
       **/
      holds: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Vec<{
    readonly id: FoucocoRuntimeRuntimeHoldReason;
    readonly amount: u128;
  } & Struct>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
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
    bounties: {
      /**
       * Bounties that have been made.
       **/
      bounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletBountiesBounty>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Bounty indices that have been approved but not yet funded.
       **/
      bountyApprovals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of bounty proposals that have been made.
       **/
      bountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each bounty.
       **/
      bountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    childBounties: {
      /**
       * Child bounties that have been added.
       **/
      childBounties: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletChildBountiesChildBounty>>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Number of total child bounties.
       **/
      childBountyCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The description of each child-bounty.
       **/
      childBountyDescriptions: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * The cumulative child-bounty curator fee for each parent bounty.
       **/
      childrenCuratorFees: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u128>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Number of child bounties per parent bounty.
       * Map of parent bounty index to number of child bounties.
       **/
      parentChildBounties: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<u32>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    clientsInfo: {
      /**
       * List of all authorized accounts
       **/
      authorizedAccounts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Null>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Mapping of client name (string literal represented as bytes) to its release details.
       **/
      currentClientReleases: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<ClientsInfoClientRelease>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Mapping of client name (string literal represented as bytes) to its pending release details.
       **/
      pendingClientReleases: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<ClientsInfoClientRelease>>, [Bytes]> & QueryableStorageEntry<ApiType, [Bytes]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    contracts: {
      /**
       * A mapping from a contract's code hash to its code info.
       **/
      codeInfoOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletContractsWasmCodeInfo>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The code associated with a given account.
       * 
       * TWOX-NOTE: SAFE since `AccountId` is a secure hash.
       **/
      contractInfoOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletContractsStorageContractInfo>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Evicted contracts that await child trie deletion.
       * 
       * Child trie deletion is a heavy operation depending on the amount of storage items
       * stored in said trie. Therefore this operation is performed lazily in `on_idle`.
       **/
      deletionQueue: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Bytes>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * A pair of monotonic counters used to track the latest contract marked for deletion
       * and the latest deleted contract in queue.
       **/
      deletionQueueCounter: AugmentedQuery<ApiType, () => Observable<PalletContractsStorageDeletionQueueManager>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A migration can span across multiple blocks. This storage defines a cursor to track the
       * progress of the migration, enabling us to resume from the last completed position.
       **/
      migrationInProgress: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * This is a **monotonic** counter incremented on contract instantiation.
       * 
       * This is used in order to generate unique trie ids for contracts.
       * The trie id of a new contract is calculated from hash(account_id, nonce).
       * The nonce is required because otherwise the following sequence would lead to
       * a possible collision of storage:
       * 
       * 1. Create a new contract.
       * 2. Terminate the contract.
       * 3. Immediately recreate the contract with the same account_id.
       * 
       * This is bad because the contents of a trie are deleted lazily and there might be
       * storage of the old instantiation still in it when the new contract is created. Please
       * note that we can't replace the counter by the block number because the sequence above
       * can happen in the same block. We also can't keep the account counter in memory only
       * because storage is the only way to communicate across different extrinsics in the
       * same block.
       * 
       * # Note
       * 
       * Do not use it to determine the number of contracts. It won't be decremented if
       * a contract is destroyed.
       **/
      nonce: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A mapping from a contract's code hash to its code.
       **/
      pristineCode: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Bytes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u32, Vec<AccountId32>]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<bool>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId32>, u128]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * General information concerning any proposal or referendum.
       * The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
       * dump or IPFS hash of a JSON file.
       * 
       * Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
       * large preimages.
       **/
      metadataOf: AugmentedQuery<ApiType, (arg: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array) => Observable<Option<H256>>, [PalletDemocracyMetadataOwner]> & QueryableStorageEntry<ApiType, [PalletDemocracyMetadataOwner]>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[FrameSupportPreimagesBounded, PalletDemocracyVoteThreshold]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[u32, FrameSupportPreimagesBounded, AccountId32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletDemocracyReferendumInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<PalletDemocracyVoteVoting>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    diaOracleModule: {
      /**
       * List of all authorized accounts
       **/
      authorizedAccounts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Null>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      batchingApi: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Map of all the coins names to their respective info and price
       **/
      coinInfosMap: AugmentedQuery<ApiType, (arg: DiaOracleDiaAssetId | { blockchain?: any; symbol?: any } | string | Uint8Array) => Observable<DiaOracleDiaCoinInfo>, [DiaOracleDiaAssetId]> & QueryableStorageEntry<ApiType, [DiaOracleDiaAssetId]>;
      /**
       * List of all supported currencies
       **/
      supportedCurrencies: AugmentedQuery<ApiType, (arg: DiaOracleDiaAssetId | { blockchain?: any; symbol?: any } | string | Uint8Array) => Observable<Option<Null>>, [DiaOracleDiaAssetId]> & QueryableStorageEntry<ApiType, [DiaOracleDiaAssetId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    dmpQueue: {
      /**
       * The configuration.
       **/
      configuration: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Counter for the related counted storage map
       **/
      counterForOverweight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The overweight messages.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The page index.
       **/
      pageIndex: AugmentedQuery<ApiType, () => Observable<CumulusPalletDmpQueuePageIndexData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queue pages.
       **/
      pages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[u32, Bytes]>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    farming: {
      boostBasicRewards: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Option<u128>>, [u32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [u32, SpacewalkPrimitivesCurrencyId]>;
      boostNextRoundWhitelist: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      boostPoolInfos: AugmentedQuery<ApiType, () => Observable<BifrostFarmingBoostBoostPoolInfo>, []> & QueryableStorageEntry<ApiType, []>;
      boostVotingPools: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<u128>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      boostWhitelist: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<Null>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      gaugeInfos: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<BifrostFarmingGaugeGaugeInfo>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      /**
       * Record gauge farming pool info.
       * 
       * map PoolId => GaugePoolInfo
       **/
      gaugePoolInfos: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<BifrostFarmingGaugeGaugePoolInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      gaugePoolNextId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Record reward pool info.
       * 
       * map PoolId => PoolInfo
       **/
      poolInfos: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<BifrostFarmingRewardsPoolInfo>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      poolNextId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      retireLimit: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Record share amount, reward currency and withdrawn reward amount for
       * specific `AccountId` under `PoolId`.
       * 
       * double_map (PoolId, AccountId) => ShareInfo
       **/
      sharesAndWithdrawnRewards: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array) => Observable<Option<BifrostFarmingRewardsShareInfo>>, [u32, AccountId32]> & QueryableStorageEntry<ApiType, [u32, AccountId32]>;
      userBoostInfos: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<BifrostFarmingBoostUserBoostInfo>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
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
    identity: {
      /**
       * Information that is pertinent to identify the entity behind an account.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      identityOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<PalletIdentityRegistration>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The set of registrars. Not expected to get very big as can only be added through a
       * special origin (likely a council motion).
       * 
       * The index into this can be cast to `RegistrarIndex` to get a valid value.
       **/
      registrars: AugmentedQuery<ApiType, () => Observable<Vec<Option<PalletIdentityRegistrarInfo>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Alternative "sub" identities of this account.
       * 
       * The first item is the deposit, the second is a vector of the accounts.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      subsOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, Vec<AccountId32>]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The super-identity of an alternative "sub" identity together with its name, within that
       * context. If the account is not some other account's sub-identity, then just `None`.
       **/
      superOf: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ITuple<[AccountId32, Data]>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
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
    multisig: {
      /**
       * The set of open multisig operations.
       **/
      multisigs: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: U8aFixed | string | Uint8Array) => Observable<Option<PalletMultisigMultisig>>, [AccountId32, U8aFixed]> & QueryableStorageEntry<ApiType, [AccountId32, U8aFixed]>;
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
       * Maximum delay (milliseconds) for a reported value to be used
       **/
      maxDelay: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      oracleKeys: AugmentedQuery<ApiType, () => Observable<Vec<SpacewalkPrimitivesOracleKey>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Build storage at V1 (requires default 0).
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<OracleVersion>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    ormlExtension: {
      currencyData: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Option<OrmlTokensManagementExtensionCurrencyDetails>>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainStaking: {
      /**
       * The staking information for a candidate.
       * 
       * It maps from an account to its information.
       * Moreover, it counts the number of candidates.
       **/
      candidatePool: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ParachainStakingCandidate>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Counter for the related counted storage map
       **/
      counterForCandidatePool: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Delegation staking information.
       * 
       * It maps from an account to its delegation details.
       **/
      delegatorState: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<ParachainStakingStakeOption>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      forceNewRound: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Inflation configuration.
       **/
      inflationConfig: AugmentedQuery<ApiType, () => Observable<ParachainStakingInflationInflationInfo>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Delegation information for the latest session in which a delegator
       * delegated.
       * 
       * It maps from an account to the number of delegations in the last
       * session in which they (re-)delegated.
       **/
      lastDelegation: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ParachainStakingDelegationCounter>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The year in which the last automatic reduction of the reward rates
       * occurred.
       * 
       * It starts at zero at genesis and increments by one every BLOCKS_PER_YEAR
       * many blocks.
       **/
      lastRewardReduction: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The maximum amount a collator candidate can stake.
       **/
      maxCollatorCandidateStake: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The maximum number of collator candidates selected at each round.
       **/
      maxSelectedCandidates: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The counter of accumulated rewards for an account.
       * 
       * For collators, it reflects the number of authored blocks since the last
       * reward raise. Thus, everytime a collator authors a block, the
       * counter is increased. It is reset, when the collator increments their
       * rewards.
       * 
       * For delegators, it is used to determine the difference between the
       * delegator and corresponding collator when incrementing the delegator's
       * rewards. In this case, the counter is never incremented but reset to the
       * collator one when the delegator reward increment happens.
       **/
      rewardCount: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u32>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The accumulated rewards for collator candidates and delegators.
       * 
       * It maps from accounts to their total rewards since the last payout.
       **/
      rewards: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<u128>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Current round number and next round scheduled transition.
       **/
      round: AugmentedQuery<ApiType, () => Observable<ParachainStakingRoundInfo>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The collator candidates with the highest amount of stake.
       * 
       * Each time the stake of a collator is increased, it is checked whether
       * this pushes another candidate out of the list. When the stake is
       * reduced however, it is not checked if another candidate has more stake,
       * since this would require iterating over the entire [CandidatePool].
       * 
       * There must always be more candidates than [MaxSelectedCandidates] so
       * that a collator can drop out of the collator set by reducing their
       * stake.
       **/
      topCandidates: AugmentedQuery<ApiType, () => Observable<Vec<ParachainStakingStakeAccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Total funds locked to back the currently selected collators.
       * The sum of all collator and their delegator stakes.
       * 
       * Note: There are more funds locked by this pallet, since the backing for
       * non collating candidates is not included in [TotalCollatorStake].
       **/
      totalCollatorStake: AugmentedQuery<ApiType, () => Observable<ParachainStakingTotalStake>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The funds waiting to be unstaked.
       * 
       * It maps from accounts to all the funds addressed to them in the future
       * blocks.
       **/
      unstaking: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<BTreeMap<u32, u128>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    parachainSystem: {
      /**
       * Storage field that keeps track of bandwidth used by the unincluded segment along with the
       * latest the latest HRMP watermark. Used for limiting the acceptance of new blocks with
       * respect to relay chain constraints.
       **/
      aggregatedUnincludedSegment: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemUnincludedSegmentSegmentTracker>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemCodeUpgradeAuthorization>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * A custom head data that should be returned as result of `validate_block`.
       * 
       * See `Pallet::set_custom_validation_head_data` for more information.
       **/
      customValidationHeadData: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV5AbridgedHostConfiguration>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<PolkadotCorePrimitivesOutboundHrmpMessage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<H256>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<u32, H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The relay chain block number associated with the last parachain block.
       **/
      lastRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Validation code that is set by the parachain and is to be communicated to collator and
       * consequently the relay-chain.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * In case of a scheduled upgrade, this storage field contains the validation code to be
       * applied.
       * 
       * As soon as the relay chain gives us the go-ahead signal, we will overwrite the
       * [`:code`][sp_core::storage::well_known_keys::CODE] which will result the next block process
       * with the new validation code. This concludes the upgrade process.
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The state proof for the last relay parent block.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relayStateProof: AugmentedQuery<ApiType, () => Observable<Option<SpTrieStorageProof>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<SpWeightsWeightV2Weight>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Latest included block descendants the runtime accepted. In other words, these are
       * ancestors of the currently executing block which have not been included in the observed
       * relay-chain state.
       * 
       * The segment length is limited by the capacity returned from the [`ConsensusHook`] configured
       * in the pallet.
       **/
      unincludedSegment: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletParachainSystemUnincludedSegmentAncestor>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Optional upgrade go-ahead signal from the relay-chain.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeGoAhead: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV5UpgradeGoAhead>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * An option which indicates if the relay-chain restricts signalling a validation code upgrade.
       * In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
       * candidate will be invalid.
       * 
       * This storage item is a mirror of the corresponding value for the current parachain from the
       * relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
       * set after the inherent.
       **/
      upgradeRestrictionSignal: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV5UpgradeRestriction>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<Bytes>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       * This value is expected to be set only once per block and it's never stored
       * in the trie.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PolkadotPrimitivesV5PersistedValidationData>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    polkadotXcm: {
      /**
       * The existing asset traps.
       * 
       * Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
       * times this pair has been trapped (usually just 1 if it exists at all).
       **/
      assetTraps: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<u32>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The current migration's stage, if any.
       **/
      currentMigration: AugmentedQuery<ApiType, () => Observable<Option<PalletXcmVersionMigrationStage>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on this chain.
       **/
      lockedFungibles: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<ITuple<[u128, StagingXcmVersionedMultiLocation]>>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The ongoing queries.
       **/
      queries: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<PalletXcmQueryStatus>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The latest available query index.
       **/
      queryCounter: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Fungible assets which we know are locked on a remote chain.
       **/
      remoteLockedFungibles: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: StagingXcmVersionedAssetId | { V3: any } | string | Uint8Array) => Observable<Option<PalletXcmRemoteLockedFungibleRecord>>, [u32, AccountId32, StagingXcmVersionedAssetId]> & QueryableStorageEntry<ApiType, [u32, AccountId32, StagingXcmVersionedAssetId]>;
      /**
       * Default version to encode XCM when latest version of destination is unknown. If `None`,
       * then the destinations whose XCM version is unknown are considered unreachable.
       **/
      safeXcmVersion: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The Latest versions that we know various locations support.
       **/
      supportedVersion: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => Observable<Option<u32>>, [u32, StagingXcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, StagingXcmVersionedMultiLocation]>;
      /**
       * Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
       * the `u32` counter is the number of times that a send to the destination has been attempted,
       * which is used as a prioritization.
       **/
      versionDiscoveryQueue: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[StagingXcmVersionedMultiLocation, u32]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * All locations that we have requested version notifications from.
       **/
      versionNotifiers: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => Observable<Option<u64>>, [u32, StagingXcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, StagingXcmVersionedMultiLocation]>;
      /**
       * The target locations that are subscribed to our version changes, as well as the most recent
       * of our versions we informed them of.
       **/
      versionNotifyTargets: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => Observable<Option<ITuple<[u64, SpWeightsWeightV2Weight, u32]>>>, [u32, StagingXcmVersionedMultiLocation]> & QueryableStorageEntry<ApiType, [u32, StagingXcmVersionedMultiLocation]>;
      /**
       * Global suspension state of the XCM executor.
       **/
      xcmExecutionSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    pooledVaultRewards: {
      /**
       * Track the currencies used for rewards.
       **/
      rewardCurrencies: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<BTreeSet<SpacewalkPrimitivesCurrencyId>>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Used to compute the rewards for a participant's stake.
       **/
      rewardPerToken: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesCurrencyId]>;
      /**
       * Accounts for previous changes in stake size.
       **/
      rewardTally: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, arg2: ITuple<[SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]> | [SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]>]>;
      /**
       * The stake of a participant in this reward pool.
       **/
      stake: AugmentedQuery<ApiType, (arg: ITuple<[SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]> | [SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array]) => Observable<i128>, [ITuple<[SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesVaultId]>]>;
      /**
       * The total unclaimed rewards distributed to this reward pool.
       * NOTE: this is currently only used for integration tests.
       **/
      totalRewards: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * The total stake deposited to this reward pool.
       **/
      totalStake: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<i128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    preimage: {
      preimageFor: AugmentedQuery<ApiType, (arg: ITuple<[H256, u32]> | [H256 | string | Uint8Array, u32 | AnyNumber | Uint8Array]) => Observable<Option<Bytes>>, [ITuple<[H256, u32]>]> & QueryableStorageEntry<ApiType, [ITuple<[H256, u32]>]>;
      /**
       * The request status of a given hash.
       **/
      statusFor: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletPreimageRequestStatus>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    proxy: {
      /**
       * The announcements made by the proxy (key).
       **/
      announcements: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyAnnouncement>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * The set of account proxies. Maps the account which has delegated to the accounts
       * which are being delegated to, together with the amount held on deposit.
       **/
      proxies: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[Vec<PalletProxyProxyDefinition>, u128]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    redeem: {
      cancelledRedeemAmount: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<ITuple<[u128, SpacewalkPrimitivesCurrencyId]>>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
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
    rewardDistribution: {
      /**
       * Storage to keep track of the to-be-minted native rewards
       **/
      nativeLiability: AugmentedQuery<ApiType, () => Observable<Option<u128>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Reward per block.
       **/
      rewardPerBlock: AugmentedQuery<ApiType, () => Observable<Option<u128>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Last Block were rewards per block were modified
       **/
      rewardsAdaptedAt: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Vec<Option<PalletSchedulerScheduled>>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      incompleteSince: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Lookup from a name to the block number and index of the task.
       * 
       * For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
       * identities.
       **/
      lookup: AugmentedQuery<ApiType, (arg: U8aFixed | string | Uint8Array) => Observable<Option<ITuple<[u32, u32]>>>, [U8aFixed]> & QueryableStorageEntry<ApiType, [U8aFixed]>;
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
    session: {
      /**
       * Current index of the session.
       **/
      currentIndex: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Indices of disabled validators.
       * 
       * The vec is always kept sorted so that we can find whether a given validator is
       * disabled using binary search. It gets cleared when `on_session_ending` returns
       * a new set of identities.
       **/
      disabledValidators: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The owner of a key. The key is the `KeyTypeId` + the encoded key.
       **/
      keyOwner: AugmentedQuery<ApiType, (arg: ITuple<[SpCoreCryptoKeyTypeId, Bytes]> | [SpCoreCryptoKeyTypeId | string | Uint8Array, Bytes | string | Uint8Array]) => Observable<Option<AccountId32>>, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]> & QueryableStorageEntry<ApiType, [ITuple<[SpCoreCryptoKeyTypeId, Bytes]>]>;
      /**
       * The next session keys for a validator.
       **/
      nextKeys: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<FoucocoRuntimeSessionKeys>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * True if the underlying economic identities or weighting behind the validators
       * has changed in the queued validator set.
       **/
      queuedChanged: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The queued keys for the next session. When the next session begins, these keys
       * will be used to determine the validator's session keys.
       **/
      queuedKeys: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AccountId32, FoucocoRuntimeSessionKeys]>>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The current set of validators.
       **/
      validators: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    stellarRelay: {
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
       * The value has the type `(BlockNumberFor<T>, EventIndex)` because if we used only just
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
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<Call>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<H256>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: H256 | string | Uint8Array) => Observable<Option<PalletCollectiveVotes>>, [H256]> & QueryableStorageEntry<ApiType, [H256]>;
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
    tokenAllowance: {
      /**
       * Currencies that can be used in chain extension
       **/
      allowedCurrencies: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Option<Null>>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Approved balance transfers. Balance is the amount approved for transfer.
       * First key is the currency ID, second key is the owner and third key is the delegate.
       **/
      approvals: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, arg2: AccountId32 | string | Uint8Array, arg3: AccountId32 | string | Uint8Array) => Observable<Option<u128>>, [SpacewalkPrimitivesCurrencyId, AccountId32, AccountId32]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, AccountId32, AccountId32]>;
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
      accounts: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<OrmlTokensAccountData>, [AccountId32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, SpacewalkPrimitivesCurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Vec<OrmlTokensBalanceLock>>, [AccountId32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, SpacewalkPrimitivesCurrencyId]>;
      /**
       * Named reserves on some account balances.
       **/
      reserves: AugmentedQuery<ApiType, (arg1: AccountId32 | string | Uint8Array, arg2: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Vec<OrmlTokensReserveData>>, [AccountId32, SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [AccountId32, SpacewalkPrimitivesCurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<u128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
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
    treasury: {
      /**
       * Proposal indices that have been approved but not yet awarded.
       **/
      approvals: AugmentedQuery<ApiType, () => Observable<Vec<u32>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The amount which has been reported as inactive to Currency.
       **/
      deactivated: AugmentedQuery<ApiType, () => Observable<u128>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Number of proposals that have been made.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Proposals that have been made.
       **/
      proposals: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Option<PalletTreasuryProposal>>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    treasuryBuyoutExtension: {
      /**
       * Stores allowed currencies for buyout
       **/
      allowedCurrencies: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<Option<Null>>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Stores buyout limit amount user could buy for a period of `BuyoutPeriod` blocks.
       * Each user can buyout up to this amount in a period. After each period passes, buyout limit is reset
       * When `None` - buyouts are not limited
       **/
      buyoutLimit: AugmentedQuery<ApiType, () => Observable<Option<u128>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Stores amount of buyouts (amount, block number of last buyout)
       **/
      buyouts: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<ITuple<[u128, u32]>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
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
      minimumCollateralVault: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => Observable<u128>, [SpacewalkPrimitivesCurrencyId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId]>;
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
    vaultStaking: {
      /**
       * The nonce of the current staking pool, used in force refunds.
       * This is a strictly increasing value.
       **/
      nonce: AugmentedQuery<ApiType, (arg: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<u32>, [SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesVaultId]>;
      /**
       * store with all the reward currencies in use
       **/
      rewardCurrencies: AugmentedQuery<ApiType, () => Observable<BTreeSet<SpacewalkPrimitivesCurrencyId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Used to compute the rewards for a participant's stake.
       **/
      rewardPerToken: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, arg2: ITuple<[u32, SpacewalkPrimitivesVaultId]> | [u32 | AnyNumber | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]>;
      /**
       * Accounts for previous changes in stake size.
       **/
      rewardTally: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, arg2: ITuple<[u32, SpacewalkPrimitivesVaultId, AccountId32]> | [u32 | AnyNumber | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId, AccountId32]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId, AccountId32]>]>;
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
      totalRewards: AugmentedQuery<ApiType, (arg1: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, arg2: ITuple<[u32, SpacewalkPrimitivesVaultId]> | [u32 | AnyNumber | Uint8Array, SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array]) => Observable<i128>, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]> & QueryableStorageEntry<ApiType, [SpacewalkPrimitivesCurrencyId, ITuple<[u32, SpacewalkPrimitivesVaultId]>]>;
      /**
       * The total stake - this will increase on deposit and decrease on withdrawal.
       **/
      totalStake: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => Observable<i128>, [u32, SpacewalkPrimitivesVaultId]> & QueryableStorageEntry<ApiType, [u32, SpacewalkPrimitivesVaultId]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    vesting: {
      /**
       * Storage version of the pallet.
       * 
       * New networks start with latest version, as determined by the genesis build.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<PalletVestingReleases>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Information regarding the vesting of a given account.
       **/
      vesting: AugmentedQuery<ApiType, (arg: AccountId32 | string | Uint8Array) => Observable<Option<Vec<PalletVestingVestingInfo>>>, [AccountId32]> & QueryableStorageEntry<ApiType, [AccountId32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    xcmpQueue: {
      /**
       * Counter for the related counted storage map
       **/
      counterForOverweight: AugmentedQuery<ApiType, () => Observable<u32>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
       **/
      inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u32]> & QueryableStorageEntry<ApiType, [u32, u32]>;
      /**
       * Status of the inbound XCMP channels.
       **/
      inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueInboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: u32 | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32, u16]> & QueryableStorageEntry<ApiType, [u32, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<CumulusPalletXcmpQueueOutboundChannelDetails>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The messages that exceeded max individual message weight budget.
       * 
       * These message stay in this storage map until they are manually dispatched via
       * `service_overweight`.
       **/
      overweight: AugmentedQuery<ApiType, (arg: u64 | AnyNumber | Uint8Array) => Observable<Option<ITuple<[u32, u32, Bytes]>>>, [u64]> & QueryableStorageEntry<ApiType, [u64]>;
      /**
       * The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
       * available free overweight index.
       **/
      overweightCount: AugmentedQuery<ApiType, () => Observable<u64>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<CumulusPalletXcmpQueueQueueConfigData>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
       **/
      queueSuspended: AugmentedQuery<ApiType, () => Observable<bool>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]> & QueryableStorageEntry<ApiType, [u32]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * End status of bootstrap
       * 
       * BootstrapEndStatus: map bootstrap pair => pairStatus
       **/
      bootstrapEndStatus: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array]) => Observable<ZenlinkProtocolPrimitivesPairStatus>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]>;
      bootstrapLimits: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array]) => Observable<BTreeMap<ZenlinkProtocolPrimitivesAssetId, u128>>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]>;
      bootstrapPersonalSupply: AugmentedQuery<ApiType, (arg: ITuple<[ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>, AccountId32]> | [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array], AccountId32 | string | Uint8Array]) => Observable<ITuple<[u128, u128]>>, [ITuple<[ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>, AccountId32]>]> & QueryableStorageEntry<ApiType, [ITuple<[ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>, AccountId32]>]>;
      bootstrapRewards: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array]) => Observable<BTreeMap<ZenlinkProtocolPrimitivesAssetId, u128>>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]>;
      /**
       * (Option<fee_receiver>, fee_point)
       **/
      feeMeta: AugmentedQuery<ApiType, () => Observable<ITuple<[Option<AccountId32>, u8]>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * Foreign foreign storage
       * The number of units of assets held by any given account.
       **/
      foreignLedger: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, AccountId32 | string | Uint8Array]) => Observable<u128>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32]>]>;
      foreignList: AugmentedQuery<ApiType, () => Observable<Vec<ZenlinkProtocolPrimitivesAssetId>>, []> & QueryableStorageEntry<ApiType, []>;
      /**
       * TWOX-NOTE: `AssetId` is trusted, so this is safe.
       **/
      foreignMeta: AugmentedQuery<ApiType, (arg: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => Observable<u128>, [ZenlinkProtocolPrimitivesAssetId]> & QueryableStorageEntry<ApiType, [ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * Refer: https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2Pair.sol#L88
       * Last unliquidated protocol fee;
       **/
      kLast: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array]) => Observable<U256>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]>;
      liquidityPairs: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array]) => Observable<Option<ZenlinkProtocolPrimitivesAssetId>>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]>;
      /**
       * (T::AssetId, T::AssetId) -> PairStatus
       **/
      pairStatuses: AugmentedQuery<ApiType, (arg: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]> | [ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array]) => Observable<ZenlinkProtocolPrimitivesPairStatus>, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]> & QueryableStorageEntry<ApiType, [ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>]>;
      /**
       * Generic query
       **/
      [key: string]: QueryableStorageEntry<ApiType>;
    };
  } // AugmentedQueries
} // declare module
