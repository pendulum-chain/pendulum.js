// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/events';

import type { AccountId32, H256, Percent, Perquintill } from '@pendulum-chain/types/interfaces/runtime';
import type { ApiTypes, AugmentedEvent } from '@polkadot/api-base/types';
import type { Bytes, Null, Option, Result, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { ClientsInfoClientRelease, DiaOracleDiaCoinInfo, FrameSupportDispatchDispatchInfo, FrameSupportTokensMiscBalanceStatus, OrmlTraitsAssetRegistryAssetMetadata, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletDemocracyVoteThreshold, PalletMultisigTimepoint, RuntimeCommonProxyType, SecurityErrorCode, SecurityStatusCode, SpRuntimeDispatchError, SpWeightsWeightV2Weight, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesRedeemRedeemRequestStatus, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, VaultRegistryVaultStatus, XcmV3MultiAsset, XcmV3MultiLocation, XcmV3MultiassetMultiAssets, XcmV3Response, XcmV3TraitsError, XcmV3TraitsOutcome, XcmV3Xcm, XcmVersionedMultiAssets, XcmVersionedMultiLocation, ZenlinkProtocolPrimitivesAssetId } from '@polkadot/types/lookup';

export type __AugmentedEvent<ApiType extends ApiTypes> = AugmentedEvent<ApiType>;

declare module '@polkadot/api-base/types/events' {
  interface AugmentedEvents<ApiType extends ApiTypes> {
    assetRegistry: {
      RegisteredAsset: AugmentedEvent<ApiType, [assetId: SpacewalkPrimitivesCurrencyId, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: SpacewalkPrimitivesCurrencyId, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      UpdatedAsset: AugmentedEvent<ApiType, [assetId: SpacewalkPrimitivesCurrencyId, metadata: OrmlTraitsAssetRegistryAssetMetadata], { assetId: SpacewalkPrimitivesCurrencyId, metadata: OrmlTraitsAssetRegistryAssetMetadata }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    balances: {
      /**
       * A balance was set by root.
       **/
      BalanceSet: AugmentedEvent<ApiType, [who: AccountId32, free: u128], { who: AccountId32, free: u128 }>;
      /**
       * Some amount was burned from an account.
       **/
      Burned: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
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
       * Some balance was frozen.
       **/
      Frozen: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was increased by `amount`, creating a credit to be balanced.
       **/
      Issued: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
      /**
       * Some balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was minted into an account.
       **/
      Minted: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Total issuance was decreased by `amount`, creating a debt to be balanced.
       **/
      Rescinded: AugmentedEvent<ApiType, [amount: u128], { amount: u128 }>;
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
       * Some amount was restored into an account.
       **/
      Restored: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was removed from the account (e.g. for misbehavior).
       **/
      Slashed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some amount was suspended from an account (it can be restored later).
       **/
      Suspended: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was thawed.
       **/
      Thawed: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Transfer succeeded.
       **/
      Transfer: AugmentedEvent<ApiType, [from: AccountId32, to: AccountId32, amount: u128], { from: AccountId32, to: AccountId32, amount: u128 }>;
      /**
       * Some balance was unlocked.
       **/
      Unlocked: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Some balance was unreserved (moved from reserved to free).
       **/
      Unreserved: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * An account was upgraded.
       **/
      Upgraded: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * Some amount was withdrawn from the account (e.g. for transaction fees).
       **/
      Withdraw: AugmentedEvent<ApiType, [who: AccountId32, amount: u128], { who: AccountId32, amount: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    bounties: {
      /**
       * A bounty is awarded to a beneficiary.
       **/
      BountyAwarded: AugmentedEvent<ApiType, [index: u32, beneficiary: AccountId32], { index: u32, beneficiary: AccountId32 }>;
      /**
       * A bounty proposal is funded and became active.
       **/
      BountyBecameActive: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is cancelled.
       **/
      BountyCanceled: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty is claimed by beneficiary.
       **/
      BountyClaimed: AugmentedEvent<ApiType, [index: u32, payout: u128, beneficiary: AccountId32], { index: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * A bounty expiry is extended.
       **/
      BountyExtended: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * New bounty proposal.
       **/
      BountyProposed: AugmentedEvent<ApiType, [index: u32], { index: u32 }>;
      /**
       * A bounty proposal was rejected; funds were slashed.
       **/
      BountyRejected: AugmentedEvent<ApiType, [index: u32, bond: u128], { index: u32, bond: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    childBounties: {
      /**
       * A child-bounty is added.
       **/
      Added: AugmentedEvent<ApiType, [index: u32, childIndex: u32], { index: u32, childIndex: u32 }>;
      /**
       * A child-bounty is awarded to a beneficiary.
       **/
      Awarded: AugmentedEvent<ApiType, [index: u32, childIndex: u32, beneficiary: AccountId32], { index: u32, childIndex: u32, beneficiary: AccountId32 }>;
      /**
       * A child-bounty is cancelled.
       **/
      Canceled: AugmentedEvent<ApiType, [index: u32, childIndex: u32], { index: u32, childIndex: u32 }>;
      /**
       * A child-bounty is claimed by beneficiary.
       **/
      Claimed: AugmentedEvent<ApiType, [index: u32, childIndex: u32, payout: u128, beneficiary: AccountId32], { index: u32, childIndex: u32, payout: u128, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    clientsInfo: {
      AccountIdAuthorized: AugmentedEvent<ApiType, [AccountId32]>;
      AccountIdDeauthorized: AugmentedEvent<ApiType, [AccountId32]>;
      ApplyClientRelease: AugmentedEvent<ApiType, [release: ClientsInfoClientRelease], { release: ClientsInfoClientRelease }>;
      NotifyClientRelease: AugmentedEvent<ApiType, [release: ClientsInfoClientRelease], { release: ClientsInfoClientRelease }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    contracts: {
      /**
       * A contract was called either by a plain account or another contract.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      Called: AugmentedEvent<ApiType, [caller: AccountId32, contract: AccountId32], { caller: AccountId32, contract: AccountId32 }>;
      /**
       * A code with the specified hash was removed.
       **/
      CodeRemoved: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * Code with the specified hash has been stored.
       **/
      CodeStored: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * A contract's code was updated.
       **/
      ContractCodeUpdated: AugmentedEvent<ApiType, [contract: AccountId32, newCodeHash: H256, oldCodeHash: H256], { contract: AccountId32, newCodeHash: H256, oldCodeHash: H256 }>;
      /**
       * A custom event emitted by the contract.
       **/
      ContractEmitted: AugmentedEvent<ApiType, [contract: AccountId32, data: Bytes], { contract: AccountId32, data: Bytes }>;
      /**
       * A contract delegate called a code hash.
       * 
       * # Note
       * 
       * Please keep in mind that like all events this is only emitted for successful
       * calls. This is because on failure all storage changes including events are
       * rolled back.
       **/
      DelegateCalled: AugmentedEvent<ApiType, [contract: AccountId32, codeHash: H256], { contract: AccountId32, codeHash: H256 }>;
      /**
       * Contract deployed by address at the specified address.
       **/
      Instantiated: AugmentedEvent<ApiType, [deployer: AccountId32, contract: AccountId32], { deployer: AccountId32, contract: AccountId32 }>;
      /**
       * Contract has been removed.
       * 
       * # Note
       * 
       * The only way for a contract to be removed and emitting this event is by calling
       * `seal_terminate`.
       **/
      Terminated: AugmentedEvent<ApiType, [contract: AccountId32, beneficiary: AccountId32], { contract: AccountId32, beneficiary: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    council: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    cumulusXcm: {
      /**
       * Downward message executed with the given outcome.
       * \[ id, outcome \]
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [U8aFixed, XcmV3TraitsOutcome]>;
      /**
       * Downward message is invalid XCM.
       * \[ id \]
       **/
      InvalidFormat: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Downward message is unsupported version of XCM.
       * \[ id \]
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [U8aFixed]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    democracy: {
      /**
       * A proposal_hash has been blacklisted permanently.
       **/
      Blacklisted: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A referendum has been cancelled.
       **/
      Cancelled: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * An account has delegated their vote to another account.
       **/
      Delegated: AugmentedEvent<ApiType, [who: AccountId32, target: AccountId32], { who: AccountId32, target: AccountId32 }>;
      /**
       * An external proposal has been tabled.
       **/
      ExternalTabled: AugmentedEvent<ApiType, []>;
      /**
       * Metadata for a proposal or a referendum has been cleared.
       **/
      MetadataCleared: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata for a proposal or a referendum has been set.
       **/
      MetadataSet: AugmentedEvent<ApiType, [owner: PalletDemocracyMetadataOwner, hash_: H256], { owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * Metadata has been transferred to new owner.
       **/
      MetadataTransferred: AugmentedEvent<ApiType, [prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256], { prevOwner: PalletDemocracyMetadataOwner, owner: PalletDemocracyMetadataOwner, hash_: H256 }>;
      /**
       * A proposal has been rejected by referendum.
       **/
      NotPassed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal has been approved by referendum.
       **/
      Passed: AugmentedEvent<ApiType, [refIndex: u32], { refIndex: u32 }>;
      /**
       * A proposal got canceled.
       **/
      ProposalCanceled: AugmentedEvent<ApiType, [propIndex: u32], { propIndex: u32 }>;
      /**
       * A motion has been proposed by a public account.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has secconded a proposal
       **/
      Seconded: AugmentedEvent<ApiType, [seconder: AccountId32, propIndex: u32], { seconder: AccountId32, propIndex: u32 }>;
      /**
       * A referendum has begun.
       **/
      Started: AugmentedEvent<ApiType, [refIndex: u32, threshold: PalletDemocracyVoteThreshold], { refIndex: u32, threshold: PalletDemocracyVoteThreshold }>;
      /**
       * A public proposal has been tabled for referendum vote.
       **/
      Tabled: AugmentedEvent<ApiType, [proposalIndex: u32, deposit: u128], { proposalIndex: u32, deposit: u128 }>;
      /**
       * An account has cancelled a previous delegation operation.
       **/
      Undelegated: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * An external proposal has been vetoed.
       **/
      Vetoed: AugmentedEvent<ApiType, [who: AccountId32, proposalHash: H256, until: u32], { who: AccountId32, proposalHash: H256, until: u32 }>;
      /**
       * An account has voted in a referendum
       **/
      Voted: AugmentedEvent<ApiType, [voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote], { voter: AccountId32, refIndex: u32, vote: PalletDemocracyVoteAccountVote }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    diaOracleModule: {
      /**
       * Event is triggered when account is authorized
       **/
      AccountIdAuthorized: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Event is triggered when account is deauthorized
       **/
      AccountIdDeauthorized: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * Event is triggered when batching api route is set from the list
       **/
      BatchingApiRouteSet: AugmentedEvent<ApiType, [Bytes]>;
      /**
       * Event is triggered when currency is added to the list
       **/
      CurrencyAdded: AugmentedEvent<ApiType, [Bytes, Bytes]>;
      /**
       * Event is triggered when currency is remove from the list
       **/
      CurrencyRemoved: AugmentedEvent<ApiType, [Bytes, Bytes]>;
      /**
       * Event is triggered when prices are updated
       **/
      UpdatedPrices: AugmentedEvent<ApiType, [Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>>]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    dmpQueue: {
      /**
       * Downward message executed with the given outcome.
       **/
      ExecutedDownward: AugmentedEvent<ApiType, [messageId: U8aFixed, outcome: XcmV3TraitsOutcome], { messageId: U8aFixed, outcome: XcmV3TraitsOutcome }>;
      /**
       * Downward message is invalid XCM.
       **/
      InvalidFormat: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The maximum number of downward messages was.
       **/
      MaxMessagesExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * Downward message is overweight and was placed in the overweight queue.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight], { messageId: U8aFixed, overweightIndex: u64, requiredWeight: SpWeightsWeightV2Weight }>;
      /**
       * Downward message from the overweight queue was executed.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight], { overweightIndex: u64, weightUsed: SpWeightsWeightV2Weight }>;
      /**
       * Downward message is unsupported version of XCM.
       **/
      UnsupportedVersion: AugmentedEvent<ApiType, [messageId: U8aFixed], { messageId: U8aFixed }>;
      /**
       * The weight limit for handling downward messages was reached.
       **/
      WeightExhausted: AugmentedEvent<ApiType, [messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight], { messageId: U8aFixed, remainingWeight: SpWeightsWeightV2Weight, requiredWeight: SpWeightsWeightV2Weight }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    farming: {
      AllForceGaugeClaimed: AugmentedEvent<ApiType, [gid: u32], { gid: u32 }>;
      AllRetired: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      BoostCharged: AugmentedEvent<ApiType, [who: AccountId32, rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>], { who: AccountId32, rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> }>;
      Charged: AugmentedEvent<ApiType, [who: AccountId32, pid: u32, rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>], { who: AccountId32, pid: u32, rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> }>;
      Claimed: AugmentedEvent<ApiType, [who: AccountId32, pid: u32], { who: AccountId32, pid: u32 }>;
      Deposited: AugmentedEvent<ApiType, [who: AccountId32, pid: u32, addValue: u128, gaugeInfo: Option<ITuple<[u128, u32]>>], { who: AccountId32, pid: u32, addValue: u128, gaugeInfo: Option<ITuple<[u128, u32]>> }>;
      FarmingPoolClosed: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolCreated: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolEdited: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolKilled: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      FarmingPoolReset: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      GaugeWithdrawn: AugmentedEvent<ApiType, [who: AccountId32, gid: u32], { who: AccountId32, gid: u32 }>;
      PartiallyForceGaugeClaimed: AugmentedEvent<ApiType, [gid: u32], { gid: u32 }>;
      PartiallyRetired: AugmentedEvent<ApiType, [pid: u32], { pid: u32 }>;
      RetireLimitSet: AugmentedEvent<ApiType, [limit: u32], { limit: u32 }>;
      RoundEnd: AugmentedEvent<ApiType, [totalVotes: u128, startRound: u32, endRound: u32], { totalVotes: u128, startRound: u32, endRound: u32 }>;
      RoundStart: AugmentedEvent<ApiType, [roundLength: u32], { roundLength: u32 }>;
      RoundStartError: AugmentedEvent<ApiType, [info: SpRuntimeDispatchError], { info: SpRuntimeDispatchError }>;
      Voted: AugmentedEvent<ApiType, [who: AccountId32, voteList: Vec<ITuple<[u32, Percent]>>], { who: AccountId32, voteList: Vec<ITuple<[u32, Percent]>> }>;
      WithdrawClaimed: AugmentedEvent<ApiType, [who: AccountId32, pid: u32], { who: AccountId32, pid: u32 }>;
      Withdrawn: AugmentedEvent<ApiType, [who: AccountId32, pid: u32, removeValue: Option<u128>], { who: AccountId32, pid: u32, removeValue: Option<u128> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    identity: {
      /**
       * A name was cleared, and the given balance returned.
       **/
      IdentityCleared: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was removed and the given balance slashed.
       **/
      IdentityKilled: AugmentedEvent<ApiType, [who: AccountId32, deposit: u128], { who: AccountId32, deposit: u128 }>;
      /**
       * A name was set or reset (which will remove all judgements).
       **/
      IdentitySet: AugmentedEvent<ApiType, [who: AccountId32], { who: AccountId32 }>;
      /**
       * A judgement was given by a registrar.
       **/
      JudgementGiven: AugmentedEvent<ApiType, [target: AccountId32, registrarIndex: u32], { target: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement was asked from a registrar.
       **/
      JudgementRequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A judgement request was retracted.
       **/
      JudgementUnrequested: AugmentedEvent<ApiType, [who: AccountId32, registrarIndex: u32], { who: AccountId32, registrarIndex: u32 }>;
      /**
       * A registrar was added.
       **/
      RegistrarAdded: AugmentedEvent<ApiType, [registrarIndex: u32], { registrarIndex: u32 }>;
      /**
       * A sub-identity was added to an identity and the deposit paid.
       **/
      SubIdentityAdded: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was removed from an identity and the deposit freed.
       **/
      SubIdentityRemoved: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * A sub-identity was cleared, and the given deposit repatriated from the
       * main identity account to the sub-identity account.
       **/
      SubIdentityRevoked: AugmentedEvent<ApiType, [sub: AccountId32, main: AccountId32, deposit: u128], { sub: AccountId32, main: AccountId32, deposit: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    issue: {
      CancelIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, griefingCollateral: u128], { issueId: H256, requester: AccountId32, griefingCollateral: u128 }>;
      ExecuteIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128], { issueId: H256, requester: AccountId32, vaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128 }>;
      IssueAmountChange: AugmentedEvent<ApiType, [issueId: H256, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, confiscatedGriefingCollateral: u128], { issueId: H256, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, confiscatedGriefingCollateral: u128 }>;
      IssueMinimumTransferAmountUpdate: AugmentedEvent<ApiType, [newMinimumAmount: u128], { newMinimumAmount: u128 }>;
      IssuePeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RateLimitUpdate: AugmentedEvent<ApiType, [limitVolumeAmount: Option<u128>, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId, intervalLength: u32], { limitVolumeAmount: Option<u128>, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId, intervalLength: u32 }>;
      RequestIssue: AugmentedEvent<ApiType, [issueId: H256, requester: AccountId32, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, griefingCollateral: u128, vaultId: SpacewalkPrimitivesVaultId, vaultStellarPublicKey: U8aFixed], { issueId: H256, requester: AccountId32, amount: u128, asset: SpacewalkPrimitivesCurrencyId, fee: u128, griefingCollateral: u128, vaultId: SpacewalkPrimitivesVaultId, vaultStellarPublicKey: U8aFixed }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    multisig: {
      /**
       * A multisig operation has been approved by someone.
       **/
      MultisigApproval: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been cancelled.
       **/
      MultisigCancelled: AugmentedEvent<ApiType, [cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed], { cancelling: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed }>;
      /**
       * A multisig operation has been executed.
       **/
      MultisigExecuted: AugmentedEvent<ApiType, [approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError>], { approving: AccountId32, timepoint: PalletMultisigTimepoint, multisig: AccountId32, callHash: U8aFixed, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A new multisig operation has begun.
       **/
      NewMultisig: AugmentedEvent<ApiType, [approving: AccountId32, multisig: AccountId32, callHash: U8aFixed], { approving: AccountId32, multisig: AccountId32, callHash: U8aFixed }>;
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
      AggregateUpdated: AugmentedEvent<ApiType, [values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>>], { values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>> }>;
      MaxDelayUpdated: AugmentedEvent<ApiType, [maxDelay: u64], { maxDelay: u64 }>;
      OracleKeysUpdated: AugmentedEvent<ApiType, [oracleKeys: Vec<SpacewalkPrimitivesOracleKey>], { oracleKeys: Vec<SpacewalkPrimitivesOracleKey> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    ormlExtension: {
      /**
       * Some currency was burned.
       **/
      Burned: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, from: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, from: AccountId32, amount: u128 }>;
      /**
       * Some currency class was created.
       **/
      Created: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, creator: AccountId32, owner: AccountId32], { currencyId: SpacewalkPrimitivesCurrencyId, creator: AccountId32, owner: AccountId32 }>;
      /**
       * Issuer and admin changed
       **/
      ManagersChanged: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, newAdmin: AccountId32, newIssuer: AccountId32], { currencyId: SpacewalkPrimitivesCurrencyId, newAdmin: AccountId32, newIssuer: AccountId32 }>;
      /**
       * Some currency was issued.
       **/
      Mint: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, to: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, to: AccountId32, amount: u128 }>;
      /**
       * Change of ownership
       **/
      OwnershipChanged: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, newOwner: AccountId32], { currencyId: SpacewalkPrimitivesCurrencyId, newOwner: AccountId32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainStaking: {
      /**
       * The length in blocks for future validation rounds has changed.
       * \[round number, first block in the current round, old value, new
       * value\]
       **/
      BlocksPerRoundSet: AugmentedEvent<ApiType, [u32, u32, u32, u32]>;
      /**
       * An account has left the set of collator candidates.
       * \[account, amount of funds un-staked\]
       **/
      CandidateLeft: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A collator candidate has canceled the process to leave the set of
       * candidates and was added back to the candidate pool. \[collator's
       * account\]
       **/
      CollatorCanceledExit: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * An account was forcedly removed from the  set of collator
       * candidates. \[account, amount of funds un-staked\]
       **/
      CollatorRemoved: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * A collator candidate has started the process to leave the set of
       * candidates. \[round number, collator's account, round number when
       * the collator will be effectively removed from the set of
       * candidates\]
       **/
      CollatorScheduledExit: AugmentedEvent<ApiType, [u32, AccountId32, u32]>;
      /**
       * A collator candidate has decreased the amount of funds at stake.
       * \[collator's account, previous stake, new stake\]
       **/
      CollatorStakedLess: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * A collator candidate has increased the amount of funds at stake.
       * \[collator's account, previous stake, new stake\]
       **/
      CollatorStakedMore: AugmentedEvent<ApiType, [AccountId32, u128, u128]>;
      /**
       * An account has delegated a new collator candidate.
       * \[account, amount of funds staked, total amount of delegators' funds
       * staked for the collator candidate\]
       **/
      Delegation: AugmentedEvent<ApiType, [AccountId32, u128, AccountId32, u128]>;
      /**
       * A new delegation has replaced an existing one in the set of ongoing
       * delegations for a collator candidate. \[new delegator's account,
       * amount of funds staked in the new delegation, replaced delegator's
       * account, amount of funds staked in the replace delegation, collator
       * candidate's account, new total amount of delegators' funds staked
       * for the collator candidate\]
       **/
      DelegationReplaced: AugmentedEvent<ApiType, [AccountId32, u128, AccountId32, u128, AccountId32, u128]>;
      /**
       * An account has left the set of delegators.
       * \[account, amount of funds un-staked\]
       **/
      DelegatorLeft: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account has stopped delegating a collator candidate.
       * \[account, collator candidate's account, old amount of delegators'
       * funds staked, new amount of delegators' funds staked\]
       **/
      DelegatorLeftCollator: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, u128]>;
      /**
       * A delegator has decreased the amount of funds at stake for a
       * collator. \[delegator's account, collator's account, previous
       * delegation stake, new delegation stake\]
       **/
      DelegatorStakedLess: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, u128]>;
      /**
       * A delegator has increased the amount of funds at stake for a
       * collator. \[delegator's account, collator's account, previous
       * delegation stake, new delegation stake\]
       **/
      DelegatorStakedMore: AugmentedEvent<ApiType, [AccountId32, AccountId32, u128, u128]>;
      /**
       * A new account has joined the set of top candidates.
       * \[account\]
       **/
      EnteredTopCandidates: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * A new account has joined the set of collator candidates.
       * \[account, amount staked by the new candidate\]
       **/
      JoinedCollatorCandidates: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * An account was removed from the set of top candidates.
       * \[account\]
       **/
      LeftTopCandidates: AugmentedEvent<ApiType, [AccountId32]>;
      /**
       * The maximum candidate stake has been changed.
       * \[new max amount\]
       **/
      MaxCandidateStakeChanged: AugmentedEvent<ApiType, [u128]>;
      /**
       * The maximum number of collator candidates selected in future
       * validation rounds has changed. \[old value, new value\]
       **/
      MaxSelectedCandidatesSet: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * A new staking round has started.
       * \[block number, round number\]
       **/
      NewRound: AugmentedEvent<ApiType, [u32, u32]>;
      /**
       * A collator or a delegator has received a reward.
       * \[account, amount of reward\]
       **/
      Rewarded: AugmentedEvent<ApiType, [AccountId32, u128]>;
      /**
       * Inflation configuration for future validation rounds has changed.
       * \[maximum collator's staking rate, maximum collator's reward rate,
       * maximum delegator's staking rate, maximum delegator's reward rate\]
       **/
      RoundInflationSet: AugmentedEvent<ApiType, [Perquintill, Perquintill, Perquintill, Perquintill]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    parachainSystem: {
      /**
       * Downward messages were processed using the given weight.
       **/
      DownwardMessagesProcessed: AugmentedEvent<ApiType, [weightUsed: SpWeightsWeightV2Weight, dmqHead: H256], { weightUsed: SpWeightsWeightV2Weight, dmqHead: H256 }>;
      /**
       * Some downward messages have been received and will be processed.
       **/
      DownwardMessagesReceived: AugmentedEvent<ApiType, [count: u32], { count: u32 }>;
      /**
       * An upgrade has been authorized.
       **/
      UpgradeAuthorized: AugmentedEvent<ApiType, [codeHash: H256], { codeHash: H256 }>;
      /**
       * An upward message was sent to the relay chain.
       **/
      UpwardMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * The validation function was applied as of the contained relay chain block number.
       **/
      ValidationFunctionApplied: AugmentedEvent<ApiType, [relayChainBlockNum: u32], { relayChainBlockNum: u32 }>;
      /**
       * The relay-chain aborted the upgrade process.
       **/
      ValidationFunctionDiscarded: AugmentedEvent<ApiType, []>;
      /**
       * The validation function has been scheduled to apply.
       **/
      ValidationFunctionStored: AugmentedEvent<ApiType, []>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    polkadotXcm: {
      /**
       * Some assets have been claimed from an asset trap
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsClaimed: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Some assets have been placed in an asset trap.
       * 
       * \[ hash, origin, assets \]
       **/
      AssetsTrapped: AugmentedEvent<ApiType, [H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
      /**
       * Execution of an XCM message was attempted.
       * 
       * \[ outcome \]
       **/
      Attempted: AugmentedEvent<ApiType, [XcmV3TraitsOutcome]>;
      /**
       * Fees were paid from a location for an operation (often for using `SendXcm`).
       * 
       * \[ paying location, fees \]
       **/
      FeesPaid: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Expected query response has been received but the querier location of the response does
       * not match the expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected querier, maybe actual querier \]
       **/
      InvalidQuerier: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected querier location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidQuerierVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Expected query response has been received but the origin location of the response does
       * not match that expected. The query remains registered for a later, valid, response to
       * be received and acted upon.
       * 
       * \[ origin location, id, expected location \]
       **/
      InvalidResponder: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
      /**
       * Expected query response has been received but the expected origin location placed in
       * storage by this runtime previously cannot be decoded. The query remains registered.
       * 
       * This is unexpected (since a location placed in storage in a previously executing
       * runtime should be readable prior to query timeout) and dangerous since the possibly
       * valid response will be dropped. Manual governance intervention is probably going to be
       * needed.
       * 
       * \[ origin location, id \]
       **/
      InvalidResponderVersion: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * Query response has been received and query is removed. The registered notification has
       * been dispatched and executed successfully.
       * 
       * \[ id, pallet index, call index \]
       **/
      Notified: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The dispatch was unable to be
       * decoded into a `Call`; this might be due to dispatch function having a signature which
       * is not `(origin, QueryId, Response)`.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDecodeFailed: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. There was a general error with
       * dispatching the notification call.
       * 
       * \[ id, pallet index, call index \]
       **/
      NotifyDispatchError: AugmentedEvent<ApiType, [u64, u8, u8]>;
      /**
       * Query response has been received and query is removed. The registered notification could
       * not be dispatched because the dispatch weight is greater than the maximum weight
       * originally budgeted by this runtime for the query result.
       * 
       * \[ id, pallet index, call index, actual weight, max budgeted weight \]
       **/
      NotifyOverweight: AugmentedEvent<ApiType, [u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * migrating the location to our new XCM format.
       * 
       * \[ location, query ID \]
       **/
      NotifyTargetMigrationFail: AugmentedEvent<ApiType, [XcmVersionedMultiLocation, u64]>;
      /**
       * A given location which had a version change subscription was dropped owing to an error
       * sending the notification to it.
       * 
       * \[ location, query ID, error \]
       **/
      NotifyTargetSendFail: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64, XcmV3TraitsError]>;
      /**
       * Query response has been received and is ready for taking with `take_response`. There is
       * no registered notification call.
       * 
       * \[ id, response \]
       **/
      ResponseReady: AugmentedEvent<ApiType, [u64, XcmV3Response]>;
      /**
       * Received query response has been read and removed.
       * 
       * \[ id \]
       **/
      ResponseTaken: AugmentedEvent<ApiType, [u64]>;
      /**
       * A XCM message was sent.
       * 
       * \[ origin, destination, message \]
       **/
      Sent: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
      /**
       * The supported version of a location has been changed. This might be through an
       * automatic notification or a manual intervention.
       * 
       * \[ location, XCM version \]
       **/
      SupportedVersionChanged: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32]>;
      /**
       * Query response received which does not match a registered query. This may be because a
       * matching query was never registered, it may be because it is a duplicate response, or
       * because the query timed out.
       * 
       * \[ origin location, id \]
       **/
      UnexpectedResponse: AugmentedEvent<ApiType, [XcmV3MultiLocation, u64]>;
      /**
       * An XCM version change notification message has been attempted to be sent.
       * 
       * The cost of sending it (borne by the chain) is included.
       * 
       * \[ destination, result, cost \]
       **/
      VersionChangeNotified: AugmentedEvent<ApiType, [XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain sends us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyRequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * A remote has requested XCM version change notification from us and we have honored it.
       * A version information message is sent to them and its cost is included.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyStarted: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * We have requested that a remote chain stops sending us XCM version change notifications.
       * 
       * \[ destination location, cost \]
       **/
      VersionNotifyUnrequested: AugmentedEvent<ApiType, [XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    pooledVaultRewards: {
      DepositStake: AugmentedEvent<ApiType, [poolId: SpacewalkPrimitivesCurrencyId, stakeId: SpacewalkPrimitivesVaultId, amount: i128], { poolId: SpacewalkPrimitivesCurrencyId, stakeId: SpacewalkPrimitivesVaultId, amount: i128 }>;
      DistributeReward: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, amount: i128], { currencyId: SpacewalkPrimitivesCurrencyId, amount: i128 }>;
      WithdrawReward: AugmentedEvent<ApiType, [poolId: SpacewalkPrimitivesCurrencyId, stakeId: SpacewalkPrimitivesVaultId, currencyId: SpacewalkPrimitivesCurrencyId, amount: i128], { poolId: SpacewalkPrimitivesCurrencyId, stakeId: SpacewalkPrimitivesVaultId, currencyId: SpacewalkPrimitivesCurrencyId, amount: i128 }>;
      WithdrawStake: AugmentedEvent<ApiType, [poolId: SpacewalkPrimitivesCurrencyId, stakeId: SpacewalkPrimitivesVaultId, amount: i128], { poolId: SpacewalkPrimitivesCurrencyId, stakeId: SpacewalkPrimitivesVaultId, amount: i128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    preimage: {
      /**
       * A preimage has ben cleared.
       **/
      Cleared: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been noted.
       **/
      Noted: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * A preimage has been requested.
       **/
      Requested: AugmentedEvent<ApiType, [hash_: H256], { hash_: H256 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    proxy: {
      /**
       * An announcement was placed to make a call in the future.
       **/
      Announced: AugmentedEvent<ApiType, [real: AccountId32, proxy: AccountId32, callHash: H256], { real: AccountId32, proxy: AccountId32, callHash: H256 }>;
      /**
       * A proxy was added.
       **/
      ProxyAdded: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32 }>;
      /**
       * A proxy was executed correctly, with the given.
       **/
      ProxyExecuted: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A proxy was removed.
       **/
      ProxyRemoved: AugmentedEvent<ApiType, [delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32], { delegator: AccountId32, delegatee: AccountId32, proxyType: RuntimeCommonProxyType, delay: u32 }>;
      /**
       * A pure account has been created by new proxy with given
       * disambiguation index and proxy type.
       **/
      PureCreated: AugmentedEvent<ApiType, [pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonProxyType, disambiguationIndex: u16], { pure: AccountId32, who: AccountId32, proxyType: RuntimeCommonProxyType, disambiguationIndex: u16 }>;
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
      RedeemMinimumTransferAmountUpdate: AugmentedEvent<ApiType, [newMinimumAmount: u128], { newMinimumAmount: u128 }>;
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
      ReplaceMinimumTransferAmountUpdate: AugmentedEvent<ApiType, [newMinimumAmount: u128], { newMinimumAmount: u128 }>;
      ReplacePeriodChange: AugmentedEvent<ApiType, [period: u32], { period: u32 }>;
      RequestReplace: AugmentedEvent<ApiType, [oldVaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, griefingCollateral: u128], { oldVaultId: SpacewalkPrimitivesVaultId, amount: u128, asset: SpacewalkPrimitivesCurrencyId, griefingCollateral: u128 }>;
      WithdrawReplace: AugmentedEvent<ApiType, [oldVaultId: SpacewalkPrimitivesVaultId, withdrawnTokens: u128, asset: SpacewalkPrimitivesCurrencyId, withdrawnGriefingCollateral: u128], { oldVaultId: SpacewalkPrimitivesVaultId, withdrawnTokens: u128, asset: SpacewalkPrimitivesCurrencyId, withdrawnGriefingCollateral: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    rewardDistribution: {
      /**
       * A new RewardPerBlock value has been set.
       **/
      RewardPerBlockAdapted: AugmentedEvent<ApiType, [u128]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    scheduler: {
      /**
       * The call for the provided hash was not found so the task has been aborted.
       **/
      CallUnavailable: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Canceled some task.
       **/
      Canceled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
      /**
       * Dispatched some task.
       **/
      Dispatched: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed>, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * The given task was unable to be renewed since the agenda is full at that block.
       **/
      PeriodicFailed: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * The given task can never be executed since it is overweight.
       **/
      PermanentlyOverweight: AugmentedEvent<ApiType, [task: ITuple<[u32, u32]>, id: Option<U8aFixed>], { task: ITuple<[u32, u32]>, id: Option<U8aFixed> }>;
      /**
       * Scheduled some task.
       **/
      Scheduled: AugmentedEvent<ApiType, [when: u32, index: u32], { when: u32, index: u32 }>;
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
    session: {
      /**
       * New session has happened. Note that the argument is the session index, not the
       * block number as the type might suggest.
       **/
      NewSession: AugmentedEvent<ApiType, [sessionIndex: u32], { sessionIndex: u32 }>;
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
    technicalCommittee: {
      /**
       * A motion was approved by the required threshold.
       **/
      Approved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A proposal was closed because its threshold was reached or after its duration was up.
       **/
      Closed: AugmentedEvent<ApiType, [proposalHash: H256, yes: u32, no: u32], { proposalHash: H256, yes: u32, no: u32 }>;
      /**
       * A motion was not approved by the required threshold.
       **/
      Disapproved: AugmentedEvent<ApiType, [proposalHash: H256], { proposalHash: H256 }>;
      /**
       * A motion was executed; result will be `Ok` if it returned without error.
       **/
      Executed: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single member did some action; result will be `Ok` if it returned without error.
       **/
      MemberExecuted: AugmentedEvent<ApiType, [proposalHash: H256, result: Result<Null, SpRuntimeDispatchError>], { proposalHash: H256, result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A motion (given hash) has been proposed (by given account) with a threshold (given
       * `MemberCount`).
       **/
      Proposed: AugmentedEvent<ApiType, [account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32], { account: AccountId32, proposalIndex: u32, proposalHash: H256, threshold: u32 }>;
      /**
       * A motion (given hash) has been voted on by given account, leaving
       * a tally (yes votes and no votes given respectively as `MemberCount`).
       **/
      Voted: AugmentedEvent<ApiType, [account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32], { account: AccountId32, proposalHash: H256, voted: bool, yes: u32, no: u32 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    tokenAllowance: {
      AllowedCurrenciesAdded: AugmentedEvent<ApiType, [currencies: Vec<SpacewalkPrimitivesCurrencyId>], { currencies: Vec<SpacewalkPrimitivesCurrencyId> }>;
      AllowedCurrenciesDeleted: AugmentedEvent<ApiType, [currencies: Vec<SpacewalkPrimitivesCurrencyId>], { currencies: Vec<SpacewalkPrimitivesCurrencyId> }>;
      /**
       * (Additional) funds have been approved for transfer to a destination account.
       **/
      TransferApproved: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, source: AccountId32, delegate: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, source: AccountId32, delegate: AccountId32, amount: u128 }>;
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
       * Some free balance was locked.
       **/
      Locked: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
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
       * Some locked balance was freed.
       **/
      Unlocked: AugmentedEvent<ApiType, [currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128], { currencyId: SpacewalkPrimitivesCurrencyId, who: AccountId32, amount: u128 }>;
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
    treasury: {
      /**
       * Some funds have been allocated.
       **/
      Awarded: AugmentedEvent<ApiType, [proposalIndex: u32, award: u128, account: AccountId32], { proposalIndex: u32, award: u128, account: AccountId32 }>;
      /**
       * Some of our funds have been burnt.
       **/
      Burnt: AugmentedEvent<ApiType, [burntFunds: u128], { burntFunds: u128 }>;
      /**
       * Some funds have been deposited.
       **/
      Deposit: AugmentedEvent<ApiType, [value: u128], { value: u128 }>;
      /**
       * New proposal.
       **/
      Proposed: AugmentedEvent<ApiType, [proposalIndex: u32], { proposalIndex: u32 }>;
      /**
       * A proposal was rejected; funds were slashed.
       **/
      Rejected: AugmentedEvent<ApiType, [proposalIndex: u32, slashed: u128], { proposalIndex: u32, slashed: u128 }>;
      /**
       * Spending has finished; this is the amount that rolls over until next spend.
       **/
      Rollover: AugmentedEvent<ApiType, [rolloverBalance: u128], { rolloverBalance: u128 }>;
      /**
       * A new spend proposal has been approved.
       **/
      SpendApproved: AugmentedEvent<ApiType, [proposalIndex: u32, amount: u128, beneficiary: AccountId32], { proposalIndex: u32, amount: u128, beneficiary: AccountId32 }>;
      /**
       * We have ended a spend period and will now allocate funds.
       **/
      Spending: AugmentedEvent<ApiType, [budgetRemaining: u128], { budgetRemaining: u128 }>;
      /**
       * The inactive funds of the pallet have been updated.
       **/
      UpdatedInactive: AugmentedEvent<ApiType, [reactivated: u128, deactivated: u128], { reactivated: u128, deactivated: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    treasuryBuyoutExtension: {
      /**
       * Updated allowed assets for buyout event
       **/
      AllowedAssetsForBuyoutUpdated: AugmentedEvent<ApiType, [allowedAssets: Vec<SpacewalkPrimitivesCurrencyId>], { allowedAssets: Vec<SpacewalkPrimitivesCurrencyId> }>;
      /**
       * Buyout event
       **/
      Buyout: AugmentedEvent<ApiType, [who: AccountId32, buyoutAmount: u128, asset: SpacewalkPrimitivesCurrencyId, exchangeAmount: u128], { who: AccountId32, buyoutAmount: u128, asset: SpacewalkPrimitivesCurrencyId, exchangeAmount: u128 }>;
      /**
       * Buyout limit updated event
       **/
      BuyoutLimitUpdated: AugmentedEvent<ApiType, [limit: Option<u128>], { limit: Option<u128> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    utility: {
      /**
       * Batch of dispatches completed fully with no error.
       **/
      BatchCompleted: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches completed but has errors.
       **/
      BatchCompletedWithErrors: AugmentedEvent<ApiType, []>;
      /**
       * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
       * well as the error.
       **/
      BatchInterrupted: AugmentedEvent<ApiType, [index: u32, error: SpRuntimeDispatchError], { index: u32, error: SpRuntimeDispatchError }>;
      /**
       * A call was dispatched.
       **/
      DispatchedAs: AugmentedEvent<ApiType, [result: Result<Null, SpRuntimeDispatchError>], { result: Result<Null, SpRuntimeDispatchError> }>;
      /**
       * A single item within a Batch of dispatches has completed with no error.
       **/
      ItemCompleted: AugmentedEvent<ApiType, []>;
      /**
       * A single item within a Batch of dispatches has completed with error.
       **/
      ItemFailed: AugmentedEvent<ApiType, [error: SpRuntimeDispatchError], { error: SpRuntimeDispatchError }>;
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
    vesting: {
      /**
       * An \[account\] has become fully vested.
       **/
      VestingCompleted: AugmentedEvent<ApiType, [account: AccountId32], { account: AccountId32 }>;
      /**
       * The amount vested has been updated. This could indicate a change in funds available.
       * The balance given is the amount which is left unvested (and thus locked).
       **/
      VestingUpdated: AugmentedEvent<ApiType, [account: AccountId32, unvested: u128], { account: AccountId32, unvested: u128 }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad XCM format used.
       **/
      BadFormat: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Bad XCM version used.
       **/
      BadVersion: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Some XCM failed.
       **/
      Fail: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight], { messageHash: Option<U8aFixed>, error: XcmV3TraitsError, weight: SpWeightsWeightV2Weight }>;
      /**
       * An XCM exceeded the individual message weight budget.
       **/
      OverweightEnqueued: AugmentedEvent<ApiType, [sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight], { sender: u32, sentAt: u32, index: u64, required: SpWeightsWeightV2Weight }>;
      /**
       * An XCM from the overweight queue was executed with the given actual weight used.
       **/
      OverweightServiced: AugmentedEvent<ApiType, [index: u64, used: SpWeightsWeightV2Weight], { index: u64, used: SpWeightsWeightV2Weight }>;
      /**
       * Some XCM was executed ok.
       **/
      Success: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight], { messageHash: Option<U8aFixed>, weight: SpWeightsWeightV2Weight }>;
      /**
       * An HRMP message was sent to a sibling parachain.
       **/
      XcmpMessageSent: AugmentedEvent<ApiType, [messageHash: Option<U8aFixed>], { messageHash: Option<U8aFixed> }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    xTokens: {
      /**
       * Transferred `MultiAsset` with fee.
       **/
      TransferredMultiAssets: AugmentedEvent<ApiType, [sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation], { sender: AccountId32, assets: XcmV3MultiassetMultiAssets, fee: XcmV3MultiAsset, dest: XcmV3MultiLocation }>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * Transact in trading \[owner, recipient, swap_path, balances\]
       **/
      AssetSwap: AugmentedEvent<ApiType, [AccountId32, AccountId32, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<u128>]>;
      /**
       * Claim a bootstrap pair. \[bootstrap_pair_account, claimer, receiver, asset_0, asset_1,
       * asset_0_refund, asset_1_refund, lp_amount\]
       **/
      BootstrapClaim: AugmentedEvent<ApiType, [AccountId32, AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Contribute to bootstrap pair. \[who, asset_0, asset_0_contribute, asset_1_contribute\]
       **/
      BootstrapContribute: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, u128, ZenlinkProtocolPrimitivesAssetId, u128]>;
      /**
       * Create a bootstrap pair. \[bootstrap_pair_account, asset_0, asset_1,
       * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1, end\]
       **/
      BootstrapCreated: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
      /**
       * A bootstrap pair end. \[asset_0, asset_1, asset_0_amount, asset_1_amount,
       * total_lp_supply]
       **/
      BootstrapEnd: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Refund from disable bootstrap pair. \[bootstrap_pair_account, caller, asset_0, asset_1,
       * asset_0_refund, asset_1_refund\]
       **/
      BootstrapRefund: AugmentedEvent<ApiType, [AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128]>;
      /**
       * Update a bootstrap pair. \[caller, asset_0, asset_1,
       * total_supply_0,total_supply_1, capacity_supply_0,capacity_supply_1\]
       **/
      BootstrapUpdate: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
      /**
       * Some assets were burned. \[asset_id, owner, amount\]
       **/
      Burned: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
      /**
       * Charge reward into a bootstrap.
       **/
      ChargeReward: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * Bootstrap distribute some rewards to contributors.
       **/
      DistributeReward: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * Add liquidity. \[owner, asset_0, asset_1, add_balance_0, add_balance_1,
       * mint_balance_lp\]
       **/
      LiquidityAdded: AugmentedEvent<ApiType, [AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Remove liquidity. \[owner, recipient, asset_0, asset_1, rm_balance_0, rm_balance_1,
       * burn_balance_lp\]
       **/
      LiquidityRemoved: AugmentedEvent<ApiType, [AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
      /**
       * Some assets were minted. \[asset_id, owner, amount\]
       **/
      Minted: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
      /**
       * Swap
       * Create a trading pair. \[asset_0, asset_1\]
       **/
      PairCreated: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * Foreign Asset
       * Some assets were transferred. \[asset_id, owner, target, amount\]
       **/
      Transferred: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, AccountId32, u128]>;
      /**
       * Transfer by xcm
       * Transferred to parachain. \[asset_id, src, para_id, dest, amount, used_weight\]
       **/
      TransferredToParachain: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, AccountId32, u32, AccountId32, u128, u64]>;
      /**
       * Withdraw all reward from a bootstrap.
       **/
      WithdrawReward: AugmentedEvent<ApiType, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32]>;
      /**
       * Generic event
       **/
      [key: string]: AugmentedEvent<ApiType>;
    };
  } // AugmentedEvents
} // declare module
