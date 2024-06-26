// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Perquintill } from '@pendulum-chain/types/interfaces/runtime';
import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { ClientsInfoClientRelease, CumulusPrimitivesParachainInherentParachainInherentData, DiaOracleDiaCoinInfo, FoucocoRuntimeOriginCaller, FoucocoRuntimeSessionKeys, FrameSupportPreimagesBounded, OrmlTraitsAssetRegistryAssetMetadata, PalletContractsWasmDeterminism, PalletDemocracyConviction, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletMultisigTimepoint, PalletVestingVestingInfo, RuntimeCommonAssetRegistryCustomMetadata, RuntimeCommonProxyType, SecurityErrorCode, SecurityStatusCode, SpWeightsWeightV2Weight, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, StellarRelayOrganization, StellarRelayValidator, TreasuryBuyoutExtensionAmount, XcmV3MultiLocation, XcmV3WeightLimit, XcmVersionedMultiAsset, XcmVersionedMultiAssets, XcmVersionedMultiLocation, XcmVersionedXcm, ZenlinkProtocolPrimitivesAssetId } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; location?: any; additional?: any } | string | Uint8Array, assetId: Option<SpacewalkPrimitivesCurrencyId> | null | Uint8Array | SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<SpacewalkPrimitivesCurrencyId>]>;
      updateAsset: AugmentedSubmittable<(assetId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, location: Option<Option<XcmVersionedMultiLocation>> | null | Uint8Array | Option<XcmVersionedMultiLocation> | XcmVersionedMultiLocation | { V2: any } | { V3: any } | string, additional: Option<RuntimeCommonAssetRegistryCustomMetadata> | null | Uint8Array | RuntimeCommonAssetRegistryCustomMetadata | { diaKeys?: any; feePerSecond?: any } | string) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<Option<XcmVersionedMultiLocation>>, Option<RuntimeCommonAssetRegistryCustomMetadata>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * Set the regular balance of a given account.
       * 
       * The dispatch origin for this call is `root`.
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Exactly as `transfer_allow_death`, except the origin must be root and the source account
       * may be specified.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Set the regular balance of a given account; it also takes a reserved balance but this
       * must be the same as the account's current reserved balance.
       * 
       * The dispatch origin for this call is `root`.
       * 
       * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
       * 
       * WARNING: DEPRECATED! Will be released in approximately 3 months.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Transfer the entire transferable balance from the caller account.
       * 
       * NOTE: This function only attempts to transfer _transferable_ balances. This means that
       * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
       * transferred by this function. To ensure that this function results in a killed account,
       * you might need to prepare the account by removing any reference counters, storage
       * deposits, etc...
       * 
       * The dispatch origin of this call must be Signed.
       * 
       * - `dest`: The recipient of the transfer.
       * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
       * of the funds the account has, causing the sender account to be killed (false), or
       * transfer everything except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
       * kill the origin account.
       * 
       * 99% of the time you want [`transfer_allow_death`] instead.
       * 
       * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * Upgrade a specified account.
       * 
       * - `origin`: Must be `Signed`.
       * - `who`: The account to be upgraded.
       * 
       * This will waive the transaction fee if at least all but 10% of the accounts needed to
       * be upgraded. (We let some not have to be upgraded just in order to allow for the
       * possibililty of churn).
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * Accept the curator role for a bounty.
       * A deposit will be reserved from curator and refund upon successful payout.
       * 
       * May only be called from the curator.
       * 
       * ## Complexity
       * - O(1).
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Approve a bounty proposal. At a later time, the bounty will be funded and become active
       * and the original deposit will be returned.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
       * after a delay.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to award.
       * - `beneficiary`: The beneficiary account whom will receive the payout.
       * 
       * ## Complexity
       * - O(1).
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded bounty after payout delay.
       * 
       * The dispatch origin for this call must be the beneficiary of this bounty.
       * 
       * - `bounty_id`: Bounty ID to claim.
       * 
       * ## Complexity
       * - O(1).
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Cancel a proposed or active bounty. All the funds will be sent to treasury and
       * the curator deposit will be unreserved if possible.
       * 
       * Only `T::RejectOrigin` is able to cancel a bounty.
       * 
       * - `bounty_id`: Bounty ID to cancel.
       * 
       * ## Complexity
       * - O(1).
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Extend the expiry time of an active bounty.
       * 
       * The dispatch origin for this call must be the curator of this bounty.
       * 
       * - `bounty_id`: Bounty ID to extend.
       * - `remark`: additional information.
       * 
       * ## Complexity
       * - O(1).
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * Propose a new bounty.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
       * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
       * or slashed when rejected.
       * 
       * - `curator`: The curator account whom will manage this bounty.
       * - `fee`: The curator fee.
       * - `value`: The total payment amount of this bounty, curator fee included.
       * - `description`: The description of this bounty.
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * Assign a curator to a funded bounty.
       * 
       * May only be called from `T::SpendOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a bounty.
       * 
       * This function can only be called by the `RejectOrigin` a signed origin.
       * 
       * If this function is called by the `RejectOrigin`, we assume that the curator is
       * malicious or inactive. As a result, we will slash the curator when possible.
       * 
       * If the origin is the curator, we take this as a sign they are unable to do their job and
       * they willingly give up. We could slash them, but for now we allow them to recover their
       * deposit and exit without issue. (We may want to change this if it is abused.)
       * 
       * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
       * anyone in the community to call out that a curator is not doing their due diligence, and
       * we should pick a new curator. In this case the curator should also be slashed.
       * 
       * ## Complexity
       * - O(1).
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    childBounties: {
      /**
       * Accept the curator role for the child-bounty.
       * 
       * The dispatch origin for this call must be the curator of this
       * child-bounty.
       * 
       * A deposit will be reserved from the curator and refund upon
       * successful payout or cancellation.
       * 
       * Fee for curator is deducted from curator fee of parent bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in "CuratorProposed" state, for processing the
       * call. And state of child-bounty is moved to "Active" on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      acceptCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Add a new child-bounty.
       * 
       * The dispatch origin for this call must be the curator of parent
       * bounty and the parent bounty must be in "active" state.
       * 
       * Child-bounty gets added successfully & fund gets transferred from
       * parent bounty to child-bounty account, if parent bounty has enough
       * funds, else the call fails.
       * 
       * Upper bound to maximum number of active  child bounties that can be
       * added are managed via runtime trait config
       * [`Config::MaxActiveChildBountyCount`].
       * 
       * If the call is success, the status of child-bounty is updated to
       * "Added".
       * 
       * - `parent_bounty_id`: Index of parent bounty for which child-bounty is being added.
       * - `value`: Value for executing the proposal.
       * - `description`: Text description for the child-bounty.
       **/
      addChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Bytes]>;
      /**
       * Award child-bounty to a beneficiary.
       * 
       * The beneficiary will be able to claim the funds after a delay.
       * 
       * The dispatch origin for this call must be the parent curator or
       * curator of this child-bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in active state, for processing the call. And
       * state of child-bounty is moved to "PendingPayout" on successful call
       * completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       * - `beneficiary`: Beneficiary account.
       **/
      awardChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      /**
       * Claim the payout from an awarded child-bounty after payout delay.
       * 
       * The dispatch origin for this call may be any signed origin.
       * 
       * Call works independent of parent bounty state, No need for parent
       * bounty to be in active state.
       * 
       * The Beneficiary is paid out with agreed bounty value. Curator fee is
       * paid & curator deposit is unreserved.
       * 
       * Child-bounty must be in "PendingPayout" state, for processing the
       * call. And instance of child-bounty is removed from the state on
       * successful call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      claimChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Cancel a proposed or active child-bounty. Child-bounty account funds
       * are transferred to parent bounty account. The child-bounty curator
       * deposit may be unreserved if possible.
       * 
       * The dispatch origin for this call must be either parent curator or
       * `T::RejectOrigin`.
       * 
       * If the state of child-bounty is `Active`, curator deposit is
       * unreserved.
       * 
       * If the state of child-bounty is `PendingPayout`, call fails &
       * returns `PendingPayout` error.
       * 
       * For the origin other than T::RejectOrigin, parent bounty must be in
       * active state, for this child-bounty call to work. For origin
       * T::RejectOrigin execution is forced.
       * 
       * Instance of child-bounty is removed from the state on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      closeChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Propose curator for funded child-bounty.
       * 
       * The dispatch origin for this call must be curator of parent bounty.
       * 
       * Parent bounty must be in active state, for this child-bounty call to
       * work.
       * 
       * Child-bounty must be in "Added" state, for processing the call. And
       * state of child-bounty is moved to "CuratorProposed" on successful
       * call completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       * - `curator`: Address of child-bounty curator.
       * - `fee`: payment fee to child-bounty curator for execution.
       **/
      proposeCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * Unassign curator from a child-bounty.
       * 
       * The dispatch origin for this call can be either `RejectOrigin`, or
       * the curator of the parent bounty, or any signed origin.
       * 
       * For the origin other than T::RejectOrigin and the child-bounty
       * curator, parent bounty must be in active state, for this call to
       * work. We allow child-bounty curator and T::RejectOrigin to execute
       * this call irrespective of the parent bounty state.
       * 
       * If this function is called by the `RejectOrigin` or the
       * parent bounty curator, we assume that the child-bounty curator is
       * malicious or inactive. As a result, child-bounty curator deposit is
       * slashed.
       * 
       * If the origin is the child-bounty curator, we take this as a sign
       * that they are unable to do their job, and are willingly giving up.
       * We could slash the deposit, but for now we allow them to unreserve
       * their deposit and exit without issue. (We may want to change this if
       * it is abused.)
       * 
       * Finally, the origin can be anyone iff the child-bounty curator is
       * "inactive". Expiry update due of parent bounty is used to estimate
       * inactive state of child-bounty curator.
       * 
       * This allows anyone in the community to call out that a child-bounty
       * curator is not doing their due diligence, and we should pick a new
       * one. In this case the child-bounty curator deposit is slashed.
       * 
       * State of child-bounty is moved to Added state on successful call
       * completion.
       * 
       * - `parent_bounty_id`: Index of parent bounty.
       * - `child_bounty_id`: Index of child bounty.
       **/
      unassignCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    clientsInfo: {
      authorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      deauthorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * Sets the current client release version, in case of a bug fix or patch.
       * 
       * # Arguments
       * * `client_name` - raw byte string representation of the client name (e.g. `b"vault"`)
       * * `release` - The release information for the given `client_name`
       **/
      setCurrentClientRelease: AugmentedSubmittable<(clientName: Bytes | string | Uint8Array, release: ClientsInfoClientRelease | { uri?: any; checksum?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, ClientsInfoClientRelease]>;
      /**
       * Sets the pending client release version. To be batched alongside the
       * `parachainSystem.authorizeUpgrade` Cumulus call.
       * Clients include the vault, oracle, and faucet.
       * 
       * # Arguments
       * * `client_name` - raw byte string representation of the client name (e.g. `b"vault"`)
       * * `release` - The release information for the given `client_name`
       **/
      setPendingClientRelease: AugmentedSubmittable<(clientName: Bytes | string | Uint8Array, release: ClientsInfoClientRelease | { uri?: any; checksum?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, ClientsInfoClientRelease]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    contracts: {
      /**
       * Makes a call to an account, optionally transferring some balance.
       * 
       * # Parameters
       * 
       * * `dest`: Address of the contract to call.
       * * `value`: The balance to transfer from the `origin` to `dest`.
       * * `gas_limit`: The gas limit enforced when executing the constructor.
       * * `storage_deposit_limit`: The maximum amount of balance that can be charged from the
       * caller to pay for the storage consumed.
       * * `data`: The input data to pass to the contract.
       * 
       * * If the account is a smart-contract account, the associated code will be
       * executed and any value will be transferred.
       * * If the account is a regular account, any value will be transferred.
       * * If no account exists and the call value is not less than `existential_deposit`,
       * a regular account will be created and any value will be transferred.
       **/
      call: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, SpWeightsWeightV2Weight, Option<Compact<u128>>, Bytes]>;
      /**
       * Deprecated version if [`Self::call`] for use in an in-storage `Call`.
       **/
      callOldWeight: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u64>, Option<Compact<u128>>, Bytes]>;
      /**
       * Instantiates a contract from a previously deployed wasm binary.
       * 
       * This function is identical to [`Self::instantiate_with_code`] but without the
       * code deployment step. Instead, the `code_hash` of an on-chain deployed wasm binary
       * must be supplied.
       **/
      instantiate: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, codeHash: H256 | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpWeightsWeightV2Weight, Option<Compact<u128>>, H256, Bytes, Bytes]>;
      /**
       * Deprecated version if [`Self::instantiate`] for use in an in-storage `Call`.
       **/
      instantiateOldWeight: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, codeHash: H256 | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u64>, Option<Compact<u128>>, H256, Bytes, Bytes]>;
      /**
       * Instantiates a new contract from the supplied `code` optionally transferring
       * some balance.
       * 
       * This dispatchable has the same effect as calling [`Self::upload_code`] +
       * [`Self::instantiate`]. Bundling them together provides efficiency gains. Please
       * also check the documentation of [`Self::upload_code`].
       * 
       * # Parameters
       * 
       * * `value`: The balance to transfer from the `origin` to the newly created contract.
       * * `gas_limit`: The gas limit enforced when executing the constructor.
       * * `storage_deposit_limit`: The maximum amount of balance that can be charged/reserved
       * from the caller to pay for the storage consumed.
       * * `code`: The contract code to deploy in raw bytes.
       * * `data`: The input data to pass to the contract constructor.
       * * `salt`: Used for the address derivation. See [`Pallet::contract_address`].
       * 
       * Instantiation is executed as follows:
       * 
       * - The supplied `code` is instrumented, deployed, and a `code_hash` is created for that
       * code.
       * - If the `code_hash` already exists on the chain the underlying `code` will be shared.
       * - The destination address is computed based on the sender, code_hash and the salt.
       * - The smart-contract account is created at the computed address.
       * - The `value` is transferred to the new account.
       * - The `deploy` function is executed in the context of the newly-created account.
       **/
      instantiateWithCode: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpWeightsWeightV2Weight, Option<Compact<u128>>, Bytes, Bytes, Bytes]>;
      /**
       * Deprecated version if [`Self::instantiate_with_code`] for use in an in-storage `Call`.
       **/
      instantiateWithCodeOldWeight: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u64>, Option<Compact<u128>>, Bytes, Bytes, Bytes]>;
      /**
       * Remove the code stored under `code_hash` and refund the deposit to its owner.
       * 
       * A code can only be removed by its original uploader (its owner) and only if it is
       * not used by any contract.
       **/
      removeCode: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Privileged function that changes the code of an existing contract.
       * 
       * This takes care of updating refcounts and all other necessary operations. Returns
       * an error if either the `code_hash` or `dest` do not exist.
       * 
       * # Note
       * 
       * This does **not** change the address of the contract in question. This means
       * that the contract address is no longer derived from its code hash after calling
       * this dispatchable.
       **/
      setCode: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Upload new `code` without instantiating a contract from it.
       * 
       * If the code does not already exist a deposit is reserved from the caller
       * and unreserved only when [`Self::remove_code`] is called. The size of the reserve
       * depends on the instrumented size of the the supplied `code`.
       * 
       * If the code already exists in storage it will still return `Ok` and upgrades
       * the in storage version to the current
       * [`InstructionWeights::version`](InstructionWeights).
       * 
       * - `determinism`: If this is set to any other value but [`Determinism::Enforced`] then
       * the only way to use this code is to delegate call into it from an offchain execution.
       * Set to [`Determinism::Enforced`] if in doubt.
       * 
       * # Note
       * 
       * Anyone can instantiate a contract from any uploaded code and thus prevent its removal.
       * To avoid this situation a constructor could employ access control so that it can
       * only be instantiated by permissioned entities. The same is true when uploading
       * through [`Self::instantiate_with_code`].
       **/
      uploadCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, determinism: PalletContractsWasmDeterminism | 'Enforced' | 'Relaxed' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Option<Compact<u128>>, PalletContractsWasmDeterminism]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * ## Complexity
       * O(P) where P is the number of max proposals
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * ## Complexity:
       * - `O(B + M + P)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` members-count (code-bounded)
       * - `P` complexity of dispatching `proposal`
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * ## Complexity
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       * 
       * The dispatch of this call must be `SetMembersOrigin`.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # WARNING:
       * 
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       * 
       * ## Complexity:
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * ## Complexity
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, i128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      /**
       * Permanently place a proposal into the blacklist. This prevents it from ever being
       * proposed again.
       * 
       * If called on a queued public or external proposal, then this will result in it being
       * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
       * then it will be cancelled.
       * 
       * The dispatch origin of this call must be `BlacklistOrigin`.
       * 
       * - `proposal_hash`: The proposal hash to blacklist permanently.
       * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
       * cancelled.
       * 
       * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
       * reasonable value).
       **/
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      /**
       * Remove a proposal.
       * 
       * The dispatch origin of this call must be `CancelProposalOrigin`.
       * 
       * - `prop_index`: The index of the proposal to cancel.
       * 
       * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Remove a referendum.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * - `ref_index`: The index of the referendum to cancel.
       * 
       * # Weight: `O(1)`.
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Clears all public proposals.
       * 
       * The dispatch origin of this call must be _Root_.
       * 
       * Weight: `O(1)`.
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Delegate the voting power (with some given conviction) of the sending account.
       * 
       * The balance delegated is locked for as long as it's delegated, and thereafter for the
       * time appropriate for the conviction's lock period.
       * 
       * The dispatch origin of this call must be _Signed_, and the signing account must either:
       * - be delegating already; or
       * - have no voting activity (if there is, then it will need to be removed/consolidated
       * through `reap_vote` or `unvote`).
       * 
       * - `to`: The account whose voting the `target` account's voting power will follow.
       * - `conviction`: The conviction that will be attached to the delegated votes. When the
       * account is undelegated, the funds will be locked for the corresponding period.
       * - `balance`: The amount of the account's balance to be used in delegating. This must not
       * be more than the account's current balance.
       * 
       * Emits `Delegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      delegate: AugmentedSubmittable<(to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletDemocracyConviction, u128]>;
      /**
       * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
       * referendum.
       * 
       * The dispatch origin of this call must be `CancellationOrigin`.
       * 
       * -`ref_index`: The index of the referendum to cancel.
       * 
       * Weight: `O(1)`.
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Schedule a referendum to be tabled once it is legal to schedule an external
       * referendum.
       * 
       * The dispatch origin of this call must be `ExternalOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       **/
      externalPropose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
       * schedule an external referendum.
       * 
       * The dispatch of this call must be `ExternalDefaultOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * 
       * Weight: `O(1)`
       **/
      externalProposeDefault: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
       * an external referendum.
       * 
       * The dispatch of this call must be `ExternalMajorityOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal.
       * 
       * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
       * pre-scheduled `external_propose` call.
       * 
       * Weight: `O(1)`
       **/
      externalProposeMajority: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * Schedule the currently externally-proposed majority-carries referendum to be tabled
       * immediately. If there is no externally-proposed referendum currently, or if there is one
       * but it is not a majority-carries referendum then it fails.
       * 
       * The dispatch of this call must be `FastTrackOrigin`.
       * 
       * - `proposal_hash`: The hash of the current external proposal.
       * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
       * Must be always greater than zero.
       * For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
       * - `delay`: The number of block after voting has ended in approval and this should be
       * enacted. This doesn't have a minimum amount.
       * 
       * Emits `Started`.
       * 
       * Weight: `O(1)`
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
      /**
       * Propose a sensitive action to be taken.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender must
       * have funds to cover the deposit.
       * 
       * - `proposal_hash`: The hash of the proposal preimage.
       * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
       * 
       * Emits `Proposed`.
       **/
      propose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded, Compact<u128>]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If the `target` is equal to the signer, then this function is exactly equivalent to
       * `remove_vote`. If not equal to the signer, then the vote must have expired,
       * either because the referendum was cancelled, because the voter lost the referendum or
       * because the conviction period is over.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account of the vote to be removed; this account must have voted for
       * referendum `index`.
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * Remove a vote for a referendum.
       * 
       * If:
       * - the referendum was cancelled, or
       * - the referendum is ongoing, or
       * - the referendum has ended such that
       * - the vote of the account was in opposition to the result; or
       * - there was no conviction to the account's vote; or
       * - the account made a split vote
       * ...then the vote is removed cleanly and a following call to `unlock` may result in more
       * funds being available.
       * 
       * If, however, the referendum has ended and:
       * - it finished corresponding to the vote of the account, and
       * - the account made a standard vote with conviction, and
       * - the lock period of the conviction is not over
       * ...then the lock will be aggregated into the overall account's lock, which may involve
       * *overlocking* (where the two locks are combined into a single lock that is the maximum
       * of both the amount locked and the time is it locked for).
       * 
       * The dispatch origin of this call must be _Signed_, and the signer must have a vote
       * registered for referendum `index`.
       * 
       * - `index`: The index of referendum of the vote to be removed.
       * 
       * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
       * Weight is calculated for the maximum number of vote.
       **/
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Signals agreement with a particular proposal.
       * 
       * The dispatch origin of this call must be _Signed_ and the sender
       * must have funds to cover the deposit, equal to the original deposit.
       * 
       * - `proposal`: The index of the proposal to second.
       **/
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Set or clear a metadata of a proposal or a referendum.
       * 
       * Parameters:
       * - `origin`: Must correspond to the `MetadataOwner`.
       * - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
       * threshold.
       * - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
       * threshold.
       * - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
       * threshold.
       * - `Signed` by a creator for a public proposal.
       * - `Signed` to clear a metadata for a finished referendum.
       * - `Root` to set a metadata for an ongoing referendum.
       * - `owner`: an identifier of a metadata owner.
       * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
       **/
      setMetadata: AugmentedSubmittable<(owner: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [PalletDemocracyMetadataOwner, Option<H256>]>;
      /**
       * Undelegate the voting power of the sending account.
       * 
       * Tokens may be unlocked following once an amount of time consistent with the lock period
       * of the conviction with which the delegation was issued.
       * 
       * The dispatch origin of this call must be _Signed_ and the signing account must be
       * currently delegating.
       * 
       * Emits `Undelegated`.
       * 
       * Weight: `O(R)` where R is the number of referendums the voter delegating to has
       * voted on. Weight is charged as if maximum votes.
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unlock tokens that have an expired lock.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `target`: The account to remove the lock on.
       * 
       * Weight: `O(R)` with R number of vote of target.
       **/
      unlock: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Veto and blacklist the external proposal hash.
       * 
       * The dispatch origin of this call must be `VetoOrigin`.
       * 
       * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
       * 
       * Emits `Vetoed`.
       * 
       * Weight: `O(V + log(V))` where V is number of `existing vetoers`
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
       * otherwise it is a vote to keep the status quo.
       * 
       * The dispatch origin of this call must be _Signed_.
       * 
       * - `ref_index`: The index of the referendum to vote for.
       * - `vote`: The vote configuration.
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    diaOracleModule: {
      addCurrency: AugmentedSubmittable<(blockchain: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      authorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      deauthorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      removeCurrency: AugmentedSubmittable<(blockchain: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      setBatchingApi: AugmentedSubmittable<(api: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      setUpdatedCoinInfos: AugmentedSubmittable<(coinInfos: Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>> | ([ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array], DiaOracleDiaCoinInfo | { symbol?: any; name?: any; blockchain?: any; supply?: any; lastUpdateTimestamp?: any; price?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * Service a single overweight message.
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    farming: {
      addBoostPoolWhitelist: AugmentedSubmittable<(whitelist: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>]>;
      charge: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>;
      chargeBoost: AugmentedSubmittable<(rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>;
      claim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      closePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      createFarmingPool: AugmentedSubmittable<(tokensProportion: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, Perbill]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, Perbill | AnyNumber | Uint8Array])[], basicRewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], gaugeInit: Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>> | null | Uint8Array | ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]> | [SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u32 | AnyNumber | Uint8Array, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]], minDepositToStart: u128 | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, withdrawLimitTime: Compact<u32> | AnyNumber | Uint8Array, claimLimitTime: Compact<u32> | AnyNumber | Uint8Array, withdrawLimitCount: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesCurrencyId, Perbill]>>, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>, Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>>, u128, Compact<u32>, Compact<u32>, Compact<u32>, u8]>;
      deposit: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, addValue: u128 | AnyNumber | Uint8Array, gaugeInfo: Option<ITuple<[u128, u32]>> | null | Uint8Array | ITuple<[u128, u32]> | [u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<ITuple<[u128, u32]>>]>;
      editPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, basicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], withdrawLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, claimLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, gaugeBasicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], withdrawLimitCount: Option<u8> | null | Uint8Array | u8 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>, Option<u32>, Option<u32>, Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>, Option<u8>]>;
      endBoostRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      forceGaugeClaim: AugmentedSubmittable<(gid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      forceRetirePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      gaugeWithdraw: AugmentedSubmittable<(gid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      killPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      resetPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, basicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], minDepositToStart: Option<u128> | null | Uint8Array | u128 | AnyNumber, afterBlockToStart: Option<u32> | null | Uint8Array | u32 | AnyNumber, withdrawLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, claimLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, withdrawLimitCount: Option<u8> | null | Uint8Array | u8 | AnyNumber, gaugeInit: Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>> | null | Uint8Array | ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]> | [SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u32 | AnyNumber | Uint8Array, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]]) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>, Option<u128>, Option<u32>, Option<u32>, Option<u32>, Option<u8>, Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>>]>;
      setNextRoundWhitelist: AugmentedSubmittable<(whitelist: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>]>;
      setRetireLimit: AugmentedSubmittable<(limit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      startBoostRound: AugmentedSubmittable<(roundLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      vote: AugmentedSubmittable<(voteList: Vec<ITuple<[u32, Percent]>> | ([u32 | AnyNumber | Uint8Array, Percent | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, Percent]>>]>;
      withdraw: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, removeValue: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>]>;
      withdrawClaim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fee: {
      /**
       * Changes the issue fee percentage (only executable by the Root account)
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       * * `fee` - the new fee
       **/
      setIssueFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Changes the issue griefing collateral percentage (only executable by the Root account)
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       * * `griefing_collateral` - the new griefing collateral
       **/
      setIssueGriefingCollateral: AugmentedSubmittable<(griefingCollateral: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Changes the premium redeem fee percentage (only executable by the Root account)
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       * * `fee` - the new fee
       **/
      setPremiumRedeemFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Changes the punishment fee percentage (only executable by the Root account)
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       * * `fee` - the new fee
       **/
      setPunishmentFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Changes the redeem fee percentage (only executable by the Root account)
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       * * `fee` - the new fee
       **/
      setRedeemFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Changes the replace griefing collateral percentage (only executable by the Root account)
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       * * `griefing_collateral` - the new griefing collateral
       **/
      setReplaceGriefingCollateral: AugmentedSubmittable<(griefingCollateral: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * Add a registrar to the system.
       * 
       * The dispatch origin for this call must be `T::RegistrarOrigin`.
       * 
       * - `account`: the account of the registrar.
       * 
       * Emits `RegistrarAdded` if successful.
       * 
       * ## Complexity
       * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Add the given account to the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * Cancel a previous request.
       * 
       * Payment: A previously reserved deposit is returned on success.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is no longer requested.
       * 
       * Emits `JudgementUnrequested` if successful.
       * 
       * ## Complexity
       * - `O(R + X)`.
       * - where `R` registrar-count (governance-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Clear an account's identity info and all sub-accounts and return all deposits.
       * 
       * Payment: All reserved balances on the account are returned.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * Emits `IdentityCleared` if successful.
       * 
       * ## Complexity
       * - `O(R + S + X)`
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove an account's identity and sub-account information and slash the deposits.
       * 
       * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
       * `Slash`. Verification request deposits are not returned; they should be cancelled
       * manually using `cancel_request`.
       * 
       * The dispatch origin for this call must match `T::ForceOrigin`.
       * 
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * 
       * Emits `IdentityKilled` if successful.
       * 
       * ## Complexity
       * - `O(R + S + X)`
       * - where `R` registrar-count (governance-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Provide a judgement for an account's identity.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `reg_index`.
       * 
       * - `reg_index`: the index of the registrar whose judgement is being made.
       * - `target`: the account whose identity the judgement is upon. This must be an account
       * with a registered identity.
       * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
       * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
       * 
       * Emits `JudgementGiven` if successful.
       * 
       * ## Complexity
       * - `O(R + X)`.
       * - where `R` registrar-count (governance-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * Remove the sender as a sub-account.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender (*not* the original depositor).
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * super-identity.
       * 
       * NOTE: This should not normally be used, but is provided in the case that the non-
       * controller of an account is maliciously registered as a sub-account.
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Remove the given account from the sender's subs.
       * 
       * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
       * to the sender.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Alter the associated name of the given sub-account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * sub identity of `sub`.
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * Request a judgement from a registrar.
       * 
       * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
       * given.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a
       * registered identity.
       * 
       * - `reg_index`: The index of the registrar whose judgement is requested.
       * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
       * 
       * ```nocompile
       * Self::registrars().get(reg_index).unwrap().fee
       * ```
       * 
       * Emits `JudgementRequested` if successful.
       * 
       * ## Complexity
       * - `O(R + X)`.
       * - where `R` registrar-count (governance-bounded).
       * - where `X` additional-field-count (deposit-bounded and code-bounded).
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Change the account associated with a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `new`: the new account ID.
       * 
       * ## Complexity
       * - `O(R)`.
       * - where `R` registrar-count (governance-bounded).
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * Set the fee required for a judgement to be requested from a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fee`: the new fee.
       * 
       * ## Complexity
       * - `O(R)`.
       * - where `R` registrar-count (governance-bounded).
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * Set the field information for a registrar.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must be the account
       * of the registrar whose index is `index`.
       * 
       * - `index`: the index of the registrar whose fee is to be set.
       * - `fields`: the fields that the registrar concerns themselves with.
       * 
       * ## Complexity
       * - `O(R)`.
       * - where `R` registrar-count (governance-bounded).
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * Set an account's identity information and reserve the appropriate deposit.
       * 
       * If the account already has identity information, the deposit is taken as part payment
       * for the new deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `info`: The identity information.
       * 
       * Emits `IdentitySet` if successful.
       * 
       * ## Complexity
       * - `O(X + X' + R)`
       * - where `X` additional-field-count (deposit-bounded and code-bounded)
       * - where `R` judgements-count (registrar-count-bounded)
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * Set the sub-accounts of the sender.
       * 
       * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
       * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have a registered
       * identity.
       * 
       * - `subs`: The identity's (new) sub-accounts.
       * 
       * ## Complexity
       * - `O(P + S)`
       * - where `P` old-subs-count (hard- and deposit-bounded).
       * - where `S` subs-count (hard- and deposit-bounded).
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    issue: {
      /**
       * Cancel the issuance of tokens if expired
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `issue_id` - identifier of issue request as output from request_issue
       **/
      cancelIssue: AugmentedSubmittable<(issueId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Finalize the issuance of tokens
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `issue_id` - identifier of issue request as output from request_issue
       * * `transaction_envelope_xdr_encoded` - the XDR representation of the transaction
       * envelope
       * * `externalized_envelopes_encoded` - the XDR representation of the externalized
       * envelopes
       * * `transaction_set_encoded` - the XDR representation of the transaction set
       **/
      executeIssue: AugmentedSubmittable<(issueId: H256 | string | Uint8Array, transactionEnvelopeXdrEncoded: Bytes | string | Uint8Array, externalizedEnvelopesEncoded: Bytes | string | Uint8Array, transactionSetEncoded: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, Bytes, Bytes]>;
      minimumTransferAmountUpdate: AugmentedSubmittable<(newMinimumAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      rateLimitUpdate: AugmentedSubmittable<(limitVolumeAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, intervalLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u128>, SpacewalkPrimitivesCurrencyId, u32]>;
      /**
       * Request the issuance of tokens
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `amount` - amount of a stellar asset the user wants to convert to issued tokens. Note
       * that the
       * amount of issued tokens received will be less, because a fee is subtracted.
       * * `asset` - the currency id of the stellar asset the user wants to convert to issued
       * tokens
       * * `vault` - address of the vault
       **/
      requestIssue: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpacewalkPrimitivesVaultId]>;
      /**
       * Set the default issue period for tx verification.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `period` - default period for new requests
       **/
      setIssuePeriod: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * NOTE: If this is the final approval, you will want to use `as_multi` instead.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * Register approval for a dispatch to be made from a deterministic composite account if
       * approved by a total of `threshold - 1` of `other_signatories`.
       * 
       * If there are enough, then dispatch the call.
       * 
       * Payment: `DepositBase` will be reserved if this is the first approval, plus
       * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
       * is cancelled.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
       * not the first approval, then it must be `Some`, with the timepoint (block number and
       * transaction index) of the first approval transaction.
       * - `call`: The call to be executed.
       * 
       * NOTE: Unless this is the final approval, you will generally want to use
       * `approve_as_multi` instead, since it only requires a hash of the call.
       * 
       * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
       * on success, result is `Ok` and the result from the interior call, if it was executed,
       * may be found in the deposited `MultisigExecuted` event.
       * 
       * ## Complexity
       * - `O(S + Z + Call)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
       * - One encode & hash, both of complexity `O(S)`.
       * - Up to one binary search and insert (`O(logS + S)`).
       * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
       * - One event.
       * - The weight of the `call`.
       * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
       * taken for its lifetime of `DepositBase + threshold * DepositFactor`.
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * Immediately dispatch a multi-signature call using a single approval from the caller.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `other_signatories`: The accounts (other than the sender) who are part of the
       * multi-signature, but do not participate in the approval process.
       * - `call`: The call to be executed.
       * 
       * Result is equivalent to the dispatched result.
       * 
       * ## Complexity
       * O(Z + C) where Z is the length of the call and C its execution weight.
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
       * for this operation will be unreserved on success.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `threshold`: The total number of approvals for this dispatch before it is executed.
       * - `other_signatories`: The accounts (other than the sender) who can approve this
       * dispatch. May not be empty.
       * - `timepoint`: The timepoint (block number and transaction index) of the first approval
       * transaction for this dispatch.
       * - `call_hash`: The hash of the call to be executed.
       * 
       * ## Complexity
       * - `O(S)`.
       * - Up to one balance-reserve or unreserve operation.
       * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
       * signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
       * - One encode & hash, both of complexity `O(S)`.
       * - One event.
       * - I/O: 1 read `O(S)`, one remove.
       * - Storage: removes one item.
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nomination: {
      depositCollateral: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, u128]>;
      /**
       * Allow nomination for this vault
       **/
      optInToNomination: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * Disallow nomination for this vault
       **/
      optOutOfNomination: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair]>;
      setNominationEnabled: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      withdrawCollateral: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, index: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, u128, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    oracle: {
      /**
       * Set the maximum delay (in milliseconds) for a reported value to be used
       * 
       * # Arguments
       * * `new_max_delay` - new max delay in milliseconds
       **/
      setMaxDelay: AugmentedSubmittable<(newMaxDelay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * set oracle keys
       * 
       * # Arguments
       * * `oracle_key` - list of oracle keys
       **/
      updateOracleKeys: AugmentedSubmittable<(oracleKeys: Vec<SpacewalkPrimitivesOracleKey> | (SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesOracleKey>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlExtension: {
      /**
       * Burn currency of a particular class.
       * 
       * The origin must be Signed and the sender must be the Admin of the currency `id`.
       * 
       * - `id`: The identifier of the currency to have some amount burned.
       * - `from`: The account to be debited.
       * - `amount`: The amount of the currency to be burned.
       * 
       * Emits `Burned` event when successful.
       **/
      burn: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, from: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, u128]>;
      /**
       * Create and take ownership of one CurrencyId
       * 
       * The creator will have full control of this pallet's functions
       * regarding this currency
       * 
       * Parameters:
       * - `currency_id`: Allowed Currency Id.
       * 
       * Emits `Created` event when successful.
       **/
      create: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * Force transfer ownership from root.
       * 
       * Origin must be root.
       * 
       * - `currency_id`: Currency id.
       * - `new_owner`: The new Owner of this currency.
       * 
       * Emits `OwnershipChanged`.
       **/
      forceTransferOwnership: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32]>;
      /**
       * Mint currency of a particular class.
       * 
       * The origin must be Signed and the sender must be the Issuer of the currency `id`.
       * 
       * - `id`: The identifier of the currency to have some amount minted.
       * - `beneficiary`: The account to be credited with the minted currency.
       * - `amount`: The amount of the currency to be minted.
       * 
       * Emits `Issued` event when successful.
       **/
      mint: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, to: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, u128]>;
      /**
       * Change the Issuer and Admin.
       * 
       * Origin must be Signed and the sender should be the Owner of the currency.
       * 
       * - `currency_id`: Identifier of the currency.
       * - `new_admin`: The new Admin of this currency.
       * - `new_issuer`: The new Issuer of this currency.
       * 
       * Emits `ManagersChanged`.
       **/
      setManagers: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newAdmin: AccountId32 | string | Uint8Array, newIssuer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, AccountId32]>;
      /**
       * Change the Owner of a currency.
       * 
       * Origin must be Signed and the sender should be the Owner of the currency.
       * 
       * - `currency_id`: Currency id.
       * - `new_owner`: The new Owner of this currency.
       * 
       * Emits `OwnershipChanged`.
       **/
      transferOwnership: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainStaking: {
      /**
       * Revert the previously requested exit of the network of a collator
       * candidate. On success, adds back the candidate to the TopCandidates
       * and updates the collators.
       * 
       * Requires the candidate to previously have called
       * `init_leave_candidates`.
       * 
       * Emits `CollatorCanceledExit`.
       **/
      cancelLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Stake less funds for a collator candidate.
       * 
       * If the new amount of staked fund is not large enough, the account
       * could be removed from the set of collator candidates and not be
       * considered for authoring the next blocks.
       * 
       * This operation affects the pallet's total stake amount.
       * 
       * The unstaked funds are not released immediately to the account, but
       * they will be available after `StakeDuration` blocks.
       * 
       * The resulting total amount of funds staked must be within the
       * allowed range as set in the pallet's configuration.
       * 
       * Emits `CollatorStakedLess`.
       **/
      candidateStakeLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Stake more funds for a collator candidate.
       * 
       * If not in the set of candidates, staking enough funds allows the
       * account to be added to it. The larger amount of funds, the higher
       * chances to be selected as the author of the next block.
       * 
       * This operation affects the pallet's total stake amount.
       * 
       * The resulting total amount of funds staked must be within the
       * allowed range as set in the pallet's configuration.
       * 
       * Emits `CollatorStakedMore`.
       **/
      candidateStakeMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Claim block authoring rewards for the target address.
       * 
       * Requires `Rewards` to be set beforehand, which can by triggered by
       * any of the following options
       * * Calling increment_{collator, delegator}_rewards (active)
       * * Altering your stake (active)
       * * Leaving the network as a collator (active)
       * * Revoking a delegation as a delegator (active)
       * * Being a delegator whose collator left the network, altered their
       * stake or incremented rewards (passive)
       * 
       * The dispatch origin can be any signed one, e.g., anyone can claim
       * for anyone.
       * 
       * Emits `Rewarded`.
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Reduce the stake for delegating a collator candidate.
       * 
       * If the new amount of staked fund is not large enough, the collator
       * could be removed from the set of collator candidates and not be
       * considered for authoring the next blocks.
       * 
       * The unstaked funds are not release immediately to the account, but
       * they will be available after `StakeDuration` blocks.
       * 
       * The remaining staked funds must still be larger than the minimum
       * required by this pallet to maintain the status of delegator.
       * 
       * The resulting total amount of funds staked must be within the
       * allowed range as set in the pallet's configuration.
       * 
       * Emits `DelegatorStakedLess`.
       **/
      delegatorStakeLess: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Increase the stake for delegating a collator candidate.
       * 
       * If not in the set of candidates, staking enough funds allows the
       * collator candidate to be added to it.
       * 
       * Emits `DelegatorStakedMore`.
       **/
      delegatorStakeMore: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Execute the network exit of a candidate who requested to leave at
       * least `ExitQueueDelay` rounds ago. Prepares unstaking of the
       * candidates and their delegators stake which can be unlocked via
       * `unlock_unstaked` after waiting at least `StakeDuration` many
       * blocks.
       * 
       * Requires the candidate to previously have called
       * `init_leave_candidates`.
       * 
       * The exit request can be reversed by calling
       * `cancel_leave_candidates`.
       * 
       * NOTE: Iterates over CandidatePool for each candidate over their
       * delegators to set rewards. Needs to be improved when scaling up
       * `MaxTopCandidates`.
       * 
       * Emits `CollatorLeft`.
       **/
      executeLeaveCandidates: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Executes the annual reduction of the reward rates for collators and
       * delegators. Moreover, sets rewards for all collators and delegators
       * before adjusting the inflation.
       * 
       * Emits `RoundInflationSet`.
       **/
      executeScheduledRewardChange: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Forces the start of the new round in the next block.
       * 
       * The new round will be enforced via <T as
       * ShouldEndSession<_>>::should_end_session.
       * 
       * The dispatch origin must be Root.
       **/
      forceNewRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Forcedly removes a collator candidate from the TopCandidates and
       * clears all associated storage for the candidate and their
       * delegators.
       * 
       * Prepares unstaking of the candidates and their delegators stake
       * which can be unlocked via `unlock_unstaked` after waiting at
       * least `StakeDuration` many blocks. Also increments rewards for the
       * collator and their delegators.
       * 
       * Increments rewards of candidate and their delegators.
       * 
       * Emits `CandidateRemoved`.
       **/
      forceRemoveCandidate: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Actively increment the rewards of a collator and their delegators.
       * 
       * The same effect is triggered by changing the stake or leaving the
       * network.
       * 
       * The dispatch origin must be a collator.
       **/
      incrementCollatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Actively increment the rewards of a delegator for all their
       * delegations.
       * 
       * The same effect is triggered by changing the stake or revoking
       * delegations.
       * 
       * The dispatch origin must be a delegator.
       **/
      incrementDelegatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Request to leave the set of collator candidates.
       * 
       * On success, the account is immediately removed from the candidate
       * pool to prevent selection as a collator in future validation rounds,
       * but unstaking of the funds is executed with a delay of
       * `StakeDuration` blocks.
       * 
       * The exit request can be reversed by calling
       * `cancel_leave_candidates`.
       * 
       * This operation affects the pallet's total stake amount. It is
       * updated even though the funds of the candidate who signaled to leave
       * are still locked for `ExitDelay` + `StakeDuration` more blocks.
       * 
       * NOTE 1: Upon starting a new session_i in `new_session`, the current
       * top candidates are selected to be block authors for session_i+1. Any
       * changes to the top candidates afterwards do not effect the set of
       * authors for session_i+1.
       * Thus, we have to make sure none of these collators can
       * leave before session_i+1 ends by delaying their
       * exit for `ExitDelay` many blocks.
       * 
       * NOTE 2: We do not increment rewards in this extrinsic as the
       * candidate could still author blocks, and thus be eligible to receive
       * rewards, until the end of the next session.
       * 
       * Emits `CollatorScheduledExit`.
       **/
      initLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Join the set of collator candidates.
       * 
       * In the next blocks, if the collator candidate has enough funds
       * staked to be included in any of the top `MaxSelectedCandidates`
       * positions, it will be included in the set of potential authors that
       * will be selected by the stake-weighted random selection function.
       * 
       * The staked funds of the new collator candidate are added to the
       * total stake of the system.
       * 
       * The total amount of funds staked must be within the allowed range as
       * set in the pallet's configuration.
       * 
       * The dispatch origin must not be already part of the collator
       * candidates nor of the delegators set.
       * 
       * Emits `JoinedCollatorCandidates`.
       **/
      joinCandidates: AugmentedSubmittable<(stake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Join the set of delegators by delegating to a collator candidate.
       * 
       * The account that wants to delegate cannot be part of the collator
       * candidates set as well.
       * 
       * The caller must _not_ have a delegation. If that is the case, they
       * are required to first remove the delegation.
       * 
       * The amount staked must be larger than the minimum required to become
       * a delegator as set in the pallet's configuration.
       * 
       * As only `MaxDelegatorsPerCollator` are allowed to delegate a given
       * collator, the amount staked must be larger than the lowest one in
       * the current set of delegator for the operation to be meaningful.
       * 
       * The collator's total stake as well as the pallet's total stake are
       * increased accordingly.
       * 
       * Emits `Delegation`.
       * Emits `DelegationReplaced` if the candidate has
       * `MaxDelegatorsPerCollator` many delegations but this delegator
       * staked more than one of the other delegators of this candidate.
       **/
      joinDelegators: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Leave the set of delegators and, by implication, revoke the ongoing
       * delegation.
       * 
       * All staked funds are not unlocked immediately, but they are added to
       * the queue of pending unstaking, and will effectively be released
       * after `StakeDuration` blocks from the moment the delegator leaves.
       * 
       * This operation reduces the total stake of the pallet as well as the
       * stakes of all collators that were delegated, potentially affecting
       * their chances to be included in the set of candidates in the next
       * rounds.
       * 
       * Automatically increments the accumulated rewards of the origin of
       * the current delegation.
       * 
       * Emits `DelegatorLeft`.
       **/
      leaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Set the number of blocks each validation round lasts.
       * 
       * If the new value is less than the length of the current round, the
       * system will immediately move to the next round in the next block.
       * 
       * The new value must be higher than the minimum allowed as set in the
       * pallet's configuration.
       * 
       * The dispatch origin must be Root.
       * 
       * Emits `BlocksPerRoundSet`.
       **/
      setBlocksPerRound: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Set the annual inflation rate to derive per-round inflation.
       * 
       * The inflation details are considered valid if the annual reward rate
       * is approximately the per-block reward rate multiplied by the
       * estimated* total number of blocks per year.
       * 
       * The estimated average block time is twelve seconds.
       * 
       * NOTE: Iterates over CandidatePool for each candidate over their
       * delegators to set rewards. Needs to be improved when scaling up
       * `MaxTopCandidates`.
       * 
       * The dispatch origin must be Root.
       * 
       * Emits `RoundInflationSet`.
       **/
      setInflation: AugmentedSubmittable<(collatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, collatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perquintill, Perquintill, Perquintill, Perquintill]>;
      /**
       * Set the maximal amount a collator can stake. Existing stakes are not
       * changed.
       * 
       * The dispatch origin must be Root.
       * 
       * Emits `MaxCandidateStakeChanged`.
       **/
      setMaxCandidateStake: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Set the maximum number of collator candidates that can be selected
       * at the beginning of each validation round.
       * 
       * Changes are not applied until the start of the next round.
       * 
       * The new value must be higher than the minimum allowed as set in the
       * pallet's configuration.
       * 
       * The dispatch origin must be Root.
       * 
       * Emits `MaxSelectedCandidatesSet`.
       **/
      setMaxSelectedCandidates: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Unlock all previously staked funds that are now available for
       * unlocking by the origin account after `StakeDuration` blocks have
       * elapsed.
       * 
       * Weight: O(U) where U is the number of locked unstaking requests
       * bounded by `MaxUnstakeRequests`.
       * - Reads: [Origin Account], Unstaking, Locks
       * - Writes: Unstaking, Locks
       * - Kills: Unstaking & Locks if no balance is locked anymore
       * # </weight>
       **/
      unlockUnstaked: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
       * later.
       * 
       * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
       * version and name should be verified on upgrade. Since the authorization only has a hash,
       * it cannot actually perform the verification.
       * 
       * This call requires Root origin.
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
       * 
       * If the authorization required a version check, this call will ensure the spec name
       * remains unchanged and that the spec version has increased.
       * 
       * Note that this function will not apply the new `code`, but only attempt to schedule the
       * upgrade with the Relay Chain.
       * 
       * All origins are allowed.
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the current validation data.
       * 
       * This should be invoked exactly once per block. It will panic at the finalization
       * phase if the call was not invoked.
       * 
       * The dispatch origin for this call must be `Inherent`
       * 
       * As a side effect, this function upgrades the current validation function
       * if the appropriate time has come.
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * Execute an XCM message from a local, signed, origin.
       * 
       * An event is deposited indicating whether `msg` could be executed completely or only
       * partially.
       * 
       * No more than `max_weight` will be used in its attempted execution. If this is less than the
       * maximum amount of weight that the message could take to be executed, then no execution
       * attempt will be made.
       * 
       * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
       * to completion; only that *some* of it was executed.
       **/
      execute: AugmentedSubmittable<(message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * Set a safe XCM version (the version that XCM should be encoded with if the most recent
       * version a destination can accept is unknown).
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * Ask a location to notify us regarding their XCM version and any changes to it.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The location to which we should subscribe for XCM version notifications.
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
      /**
       * Set or unset the global suspension state of the XCM executor.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `suspended`: `true` to suspend, `false` to resume.
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * Require that a particular destination should no longer notify us regarding any XCM
       * version changes.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The location to which we are currently subscribed for XCM version
       * notifications which we no longer desire.
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation]>;
      /**
       * Extoll that a particular destination can be communicated with through a particular
       * version of XCM.
       * 
       * - `origin`: Must be an origin specified by AdminOrigin.
       * - `location`: The destination that is being described.
       * - `xcm_version`: The latest version of XCM that `location` supports.
       **/
      forceXcmVersion: AugmentedSubmittable<(location: XcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, xcmVersion: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmV3MultiLocation, u32]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination
       * chain and forward a notification XCM.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the assets send may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
       * is needed than `weight_limit`, then the operation will fail and the assets send may be
       * at risk.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32, XcmV3WeightLimit]>;
      /**
       * Transfer some assets from the local chain to the sovereign account of a destination
       * chain and forward a notification XCM.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
       * `dest` side.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
      send: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedXcm]>;
      /**
       * Teleport some assets from the local chain to some destination chain.
       * 
       * Fee payment on the destination side is made from the asset in the `assets` vector of
       * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
       * with all fees taken as needed from the asset.
       * 
       * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
       * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
       * from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
       * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
       * an `AccountId32` value.
       * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
       * `dest` side. May not be empty.
       * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
       * fees.
       **/
      teleportAssets: AugmentedSubmittable<(dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    pooledVaultRewards: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    preimage: {
      /**
       * Register a preimage on-chain.
       * 
       * If the preimage was previously requested, no fees or deposits are taken for providing
       * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Request a preimage be uploaded to the chain without paying any fees or deposits.
       * 
       * If the preimage requests has already been provided on-chain, we unreserve any deposit
       * a user may have paid, and take the control of the preimage out of their hands.
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear an unrequested preimage from the runtime storage.
       * 
       * If `len` is provided, then it will be a much cheaper operation.
       * 
       * - `hash`: The hash of the preimage to be removed from the store.
       * - `len`: The length of the preimage of `hash`.
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Clear a previously made request for a preimage.
       * 
       * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * Register a proxy account for the sender that is able to make calls on its behalf.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to make a proxy.
       * - `proxy_type`: The permissions allowed for this proxy account.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, RuntimeCommonProxyType, u32]>;
      /**
       * Publish the hash of a proxy-call that will be made in the future.
       * 
       * This must be called some number of blocks before the corresponding `proxy` is attempted
       * if the delay associated with the proxy relationship is greater than zero.
       * 
       * No more than `MaxPending` announcements may be made at any one time.
       * 
       * This will take a deposit of `AnnouncementDepositFactor` as well as
       * `AnnouncementDepositBase` if there are no other pending announcements.
       * 
       * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
       * initialize it with a proxy of `proxy_type` for `origin` sender.
       * 
       * Requires a `Signed` origin.
       * 
       * - `proxy_type`: The type of the proxy that the sender will be registered as over the
       * new account. This will almost always be the most permissive `ProxyType` possible to
       * allow for maximum flexibility.
       * - `index`: A disambiguation index, in case this is called multiple times in the same
       * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
       * want to use `0`.
       * - `delay`: The announcement period required of the initial proxy. Will generally be
       * zero.
       * 
       * Fails with `Duplicate` if this has already been called in this transaction, from the
       * same sender, with the same parameters.
       * 
       * Fails if there are insufficient funds to pay for deposit.
       **/
      createPure: AugmentedSubmittable<(proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [RuntimeCommonProxyType, u32, u16]>;
      /**
       * Removes a previously spawned pure proxy.
       * 
       * WARNING: **All access to this account will be lost.** Any funds held in it will be
       * inaccessible.
       * 
       * Requires a `Signed` origin, and the sender account must have been created by a call to
       * `pure` with corresponding parameters.
       * 
       * - `spawner`: The account that originally called `pure` to create this account.
       * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
       * - `proxy_type`: The proxy type originally passed to `pure`.
       * - `height`: The height of the chain when the call to `pure` was processed.
       * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
       * 
       * Fails with `NoPermission` in case the caller is not a previously created pure
       * account whose `pure` call has corresponding parameters.
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, RuntimeCommonProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorised for through
       * `add_proxy`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<RuntimeCommonProxyType> | null | Uint8Array | RuntimeCommonProxyType | 'Any' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<RuntimeCommonProxyType>, Call]>;
      /**
       * Dispatch the given `call` from an account that the sender is authorized for through
       * `add_proxy`.
       * 
       * Removes any corresponding announcement(s).
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
       * - `call`: The call to be made by the `real` account.
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<RuntimeCommonProxyType> | null | Uint8Array | RuntimeCommonProxyType | 'Any' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<RuntimeCommonProxyType>, Call]>;
      /**
       * Remove the given announcement of a delegate.
       * 
       * May be called by a target (proxied) account to remove a call that one of their delegates
       * (`delegate`) has announced they want to execute. The deposit is returned.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `delegate`: The account that previously announced the call.
       * - `call_hash`: The hash of the call to be made.
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Remove a given announcement.
       * 
       * May be called by a proxy account to remove a call they previously announced and return
       * the deposit.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `real`: The account that the proxy will make a call on behalf of.
       * - `call_hash`: The hash of the call to be made by the `real` account.
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * Unregister all proxy accounts for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * WARNING: This may be called on accounts created by `pure`, however if done, then
       * the unreserved fees will be inaccessible. **All access to this account will be lost.**
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Unregister a proxy account for the sender.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * Parameters:
       * - `proxy`: The account that the `caller` would like to remove as a proxy.
       * - `proxy_type`: The permissions currently enabled for the removed proxy account.
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, RuntimeCommonProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    redeem: {
      /**
       * If a redeem request is not completed on time, the redeem request can be cancelled.
       * The user that initially requested the redeem process calls this function to obtain
       * the Vault’s collateral as compensation for not transferring the Stellar assets back to
       * their address.
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `redeem_id` - identifier of redeem request as output from request_redeem
       * * `reimburse` - specifying if the user wishes to be reimbursed in collateral
       * and slash the Vault, or wishes to keep the tokens (and retry
       * Redeem with another Vault)
       **/
      cancelRedeem: AugmentedSubmittable<(redeemId: H256 | string | Uint8Array, reimburse: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * A Vault calls this function after receiving an RequestRedeem event with their public
       * key. Before calling the function, the Vault transfers the specific amount of Stellar
       * assets to the Stellar address given in the original redeem request. The Vault completes
       * the redeem with this function.
       * 
       * # Arguments
       * 
       * * `origin` - anyone executing this redeem request
       * * `redeem_id` - identifier of redeem request as output from request_redeem
       * * `transaction_envelope_xdr_encoded` - the XDR representation of the transaction
       * envelope
       * * `externalized_envelopes_encoded` - the XDR representation of the externalized
       * envelopes
       * * `transaction_set_encoded` - the XDR representation of the transaction set
       **/
      executeRedeem: AugmentedSubmittable<(redeemId: H256 | string | Uint8Array, transactionEnvelopeXdrEncoded: Bytes | string | Uint8Array, externalizedEnvelopesEncoded: Bytes | string | Uint8Array, transactionSetEncoded: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, Bytes, Bytes]>;
      /**
       * When a Vault is liquidated, its collateral is slashed up to 150% of the liquidated
       * value. To re-establish the physical 1:1 peg, the bridge allows users to burn issued
       * tokens in return for collateral at a premium rate.
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `collateral_currency` - currency to be received
       * * `wrapped_currency` - currency of the wrapped token to burn
       * * `amount_wrapped` - amount of issued tokens to burn
       **/
      liquidationRedeem: AugmentedSubmittable<(currencies: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amountWrapped: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      minimumTransferAmountUpdate: AugmentedSubmittable<(newMinimumAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Mint tokens for a redeem that was cancelled with reimburse=true. This is
       * only possible if at the time of the cancel_redeem, the vault did not have
       * sufficient collateral after being slashed to back the tokens that the user
       * used to hold.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `redeem_id` - identifier of redeem request as output from request_redeem
       **/
      mintTokensForReimbursedRedeem: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, redeemId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, H256]>;
      rateLimitUpdate: AugmentedSubmittable<(limitVolumeAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, intervalLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u128>, SpacewalkPrimitivesCurrencyId, u32]>;
      /**
       * Initializes a request to burn issued tokens against a Vault with sufficient tokens. It
       * will also ensure that the Parachain status is RUNNING.
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `amount_wrapped` - amount of tokens to redeem
       * * `asset` - the asset to redeem
       * * `stellar_address` - the address to receive assets on Stellar
       * * `vault_id` - address of the vault
       **/
      requestRedeem: AugmentedSubmittable<(amountWrapped: Compact<u128> | AnyNumber | Uint8Array, stellarAddress: U8aFixed | string | Uint8Array, vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, U8aFixed, SpacewalkPrimitivesVaultId]>;
      selfRedeem: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amountWrapped: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * Set the default redeem period for tx verification.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `period` - default period for new requests
       **/
      setRedeemPeriod: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    replace: {
      /**
       * Accept request of vault replacement
       * 
       * # Arguments
       * 
       * * `origin` - the initiator of the transaction: the new vault
       * * `currency_pair` - currency_pair of the new vault
       * * `amount` - amount of tokens to be replaced
       * * `collateral` - the collateral provided by the new vault to match the replace request
       * (for backing the transferred tokens)
       * * `stellar_address` - the address that old-vault should transfer the wrapped asset to
       **/
      acceptReplace: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, oldVault: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, collateral: Compact<u128> | AnyNumber | Uint8Array, stellarAddress: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, Compact<u128>, Compact<u128>, U8aFixed]>;
      /**
       * Cancel vault replacement
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction: anyone
       * * `replace_id` - the ID of the replacement request
       **/
      cancelReplace: AugmentedSubmittable<(replaceId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Execute vault replacement
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction: the new vault
       * * `replace_id` - the ID of the replacement request
       **/
      executeReplace: AugmentedSubmittable<(replaceId: H256 | string | Uint8Array, transactionEnvelopeXdrEncoded: Bytes | string | Uint8Array, externalizedEnvelopesXdrEncoded: Bytes | string | Uint8Array, transactionSetXdrEncoded: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, Bytes, Bytes]>;
      minimumTransferAmountUpdate: AugmentedSubmittable<(newMinimumAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Request the replacement of a new vault ownership
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction
       * * `amount` - amount of issued tokens
       **/
      requestReplace: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * Set the default replace period for tx verification.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `period` - default period for new requests
       * 
       * # Weight: `O(1)`
       **/
      setReplacePeriod: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Withdraw a request of vault replacement
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction: the old vault
       * * `amount` - amount of tokens to be withdrawn from being replaced
       **/
      withdrawReplace: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    rewardDistribution: {
      /**
       * Allow users who have staked to collect rewards for a given vault and rewraded currency
       **/
      collectReward: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, rewardCurrencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, index: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, SpacewalkPrimitivesCurrencyId, Option<u32>]>;
      /**
       * Sets the reward per block.
       **/
      setRewardPerBlock: AugmentedSubmittable<(newRewardPerBlock: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * Cancel an anonymously scheduled task.
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Cancel a named scheduled task.
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Anonymously schedule a task.
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Anonymously schedule a task after a delay.
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task.
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Schedule a named task after a delay.
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    security: {
      /**
       * Insert a new parachain error.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `error_code` - the error code to insert
       * 
       * # Weight: `O(1)`
       **/
      insertParachainError: AugmentedSubmittable<(errorCode: SecurityErrorCode | 'None' | 'OracleOffline' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [SecurityErrorCode]>;
      /**
       * Remove a parachain error.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `error_code` - the error code to remove
       * 
       * # Weight: `O(1)`
       **/
      removeParachainError: AugmentedSubmittable<(errorCode: SecurityErrorCode | 'None' | 'OracleOffline' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [SecurityErrorCode]>;
      /**
       * Set the parachain status code.
       * 
       * # Arguments
       * 
       * * `origin` - the dispatch origin of this call (must be _Root_)
       * * `status_code` - the status code to set
       * 
       * # Weight: `O(1)`
       **/
      setParachainStatus: AugmentedSubmittable<(statusCode: SecurityStatusCode | 'Running' | 'Error' | 'Shutdown' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [SecurityStatusCode]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * Removes any session key(s) of the function caller.
       * 
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be Signed and the account must be either be
       * convertible to a validator ID using the chain's typical addressing system (this usually
       * means being a controller account) or directly convertible into a validator ID (which
       * usually means being a stash account).
       * 
       * ## Complexity
       * - `O(1)` in number of key types. Actual cost depends on the number of length of
       * `T::Keys::key_ids()` which is fixed.
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Sets the session key(s) of the function caller to `keys`.
       * Allows an account to set its session key prior to becoming a validator.
       * This doesn't take effect until the next session.
       * 
       * The dispatch origin of this function must be signed.
       * 
       * ## Complexity
       * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
       * fixed.
       **/
      setKeys: AugmentedSubmittable<(keys: FoucocoRuntimeSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FoucocoRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stellarRelay: {
      /**
       * This extrinsic is used to update the current sets of validators and
       * organizations. The current values of validators and organizations are moved to the
       * OldValidators and OldOrganizations respectively, and the function arguments are stored
       * as new/current values. The `enactment_block_height` parameter is used by the
       * `validate_stellar_transaction` function to determine if it should use the 'old' or
       * updated sets for validation. This makes a seamless transition between old and new
       * validators possible.
       * 
       * It can only be called by the root origin.
       **/
      updateTier1ValidatorSet: AugmentedSubmittable<(validators: Vec<StellarRelayValidator> | (StellarRelayValidator | { name?: any; publicKey?: any; organizationId?: any } | string | Uint8Array)[], organizations: Vec<StellarRelayOrganization> | (StellarRelayOrganization | { id?: any; name?: any } | string | Uint8Array)[], enactmentBlockHeight: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<StellarRelayValidator>, Vec<StellarRelayOrganization>, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
       * key.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * ## Complexity
       * - O(1).
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * Kill all storage items with a key that starts with the given prefix.
       * 
       * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
       * the prefix we are removing to accurately calculate the weight of this function.
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * Kill some items from storage.
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * Make some on-chain remark.
       * 
       * ## Complexity
       * - `O(1)`
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       * 
       * ## Complexity
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * ## Complexity
       * - `O(C)` where `C` length of `code`
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the number of pages in the WebAssembly environment's heap.
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * Set some items of storage.
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      /**
       * Close a vote that is either approved, disapproved or whose voting period has ended.
       * 
       * May be called by any signed account in order to finish voting and close the proposal.
       * 
       * If called before the end of the voting period it will only close the vote if it is
       * has enough votes to be approved or disapproved.
       * 
       * If called after the end of the voting period abstentions are counted as rejections
       * unless there is a prime member set and the prime member cast an approval.
       * 
       * If the close operation completes successfully with disapproval, the transaction fee will
       * be waived. Otherwise execution of the approved operation will be charged to the caller.
       * 
       * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
       * proposal.
       * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
       * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
       * 
       * ## Complexity
       * - `O(B + M + P1 + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - `P1` is the complexity of `proposal` preimage.
       * - `P2` is proposal-count (code-bounded)
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * Disapprove a proposal, close, and remove it from the system, regardless of its current
       * state.
       * 
       * Must be called by the Root origin.
       * 
       * Parameters:
       * * `proposal_hash`: The hash of the proposal that should be disapproved.
       * 
       * ## Complexity
       * O(P) where P is the number of max proposals
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Dispatch a proposal from a member using the `Member` origin.
       * 
       * Origin must be a member of the collective.
       * 
       * ## Complexity:
       * - `O(B + M + P)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` members-count (code-bounded)
       * - `P` complexity of dispatching `proposal`
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * Add a new proposal to either be voted on or executed directly.
       * 
       * Requires the sender to be member.
       * 
       * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
       * or put up for voting.
       * 
       * ## Complexity
       * - `O(B + M + P1)` or `O(B + M + P2)` where:
       * - `B` is `proposal` size in bytes (length-fee-bounded)
       * - `M` is members-count (code- and governance-bounded)
       * - branching is influenced by `threshold` where:
       * - `P1` is proposal execution complexity (`threshold < 2`)
       * - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * Set the collective's membership.
       * 
       * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
       * - `prime`: The prime member whose vote sets the default.
       * - `old_count`: The upper bound for the previous number of members in storage. Used for
       * weight estimation.
       * 
       * The dispatch of this call must be `SetMembersOrigin`.
       * 
       * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
       * the weight estimations rely on it to estimate dispatchable weight.
       * 
       * # WARNING:
       * 
       * The `pallet-collective` can also be managed by logic outside of the pallet through the
       * implementation of the trait [`ChangeMembers`].
       * Any call to `set_members` must be careful that the member set doesn't get out of sync
       * with other logic managing the member set.
       * 
       * ## Complexity:
       * - `O(MP + N)` where:
       * - `M` old-members-count (code- and governance-bounded)
       * - `N` new-members-count (code- and governance-bounded)
       * - `P` proposals-count (code-bounded)
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * Add an aye or nay vote for the sender to the given proposal.
       * 
       * Requires the sender to be a member.
       * 
       * Transaction fees will be waived if the member is voting on any particular proposal
       * for the first time and the call is successful. Subsequent vote changes will charge a
       * fee.
       * ## Complexity
       * - `O(M)` where `M` is members-count (code- and governance-bounded)
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * Set the current time.
       * 
       * This call should be invoked exactly once per block. It will panic at the finalization
       * phase, if this call hasn't been invoked by that time.
       * 
       * The timestamp should be greater than the previous one by the amount specified by
       * `MinimumPeriod`.
       * 
       * The dispatch origin for this call must be `Inherent`.
       * 
       * ## Complexity
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokenAllowance: {
      /**
       * Added allowed currencies that possible to use chain extension
       * 
       * # Arguments
       * * `currencies` - list of currency id allowed to use in chain extension
       **/
      addAllowedCurrencies: AugmentedSubmittable<(currencies: Vec<SpacewalkPrimitivesCurrencyId> | (SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * Approve an amount for another account to spend on owner's behalf.
       * 
       * # Arguments
       * * `id` - the currency_id of the asset to approve
       * * `delegate` - the spender account to approve the asset for
       * * `amount` - the amount of the asset to approve
       **/
      approve: AugmentedSubmittable<(id: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, delegate: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, u128]>;
      /**
       * Remove allowed currencies that possible to use chain extension
       * 
       * # Arguments
       * * `currencies` - list of currency id allowed to use in chain extension
       **/
      removeAllowedCurrencies: AugmentedSubmittable<(currencies: Vec<SpacewalkPrimitivesCurrencyId> | (SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * Execute a pre-approved transfer from another account
       * 
       * # Arguments
       * * `id` - the currency_id of the asset to transfer
       * * `owner` - the owner account of the asset to transfer
       * * `destination` - the destination account to transfer to
       * * `amount` - the amount of the asset to transfer
       **/
      transferFrom: AugmentedSubmittable<(id: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, owner: AccountId32 | string | Uint8Array, destination: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, AccountId32, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source
       * account may be specified.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The sender of the transfer.
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it
       * will also decrease the total issuance of the system
       * (`TotalIssuance`). If the new free or reserved balance is below the
       * existential deposit, it will reap the `AccountInfo`.
       * 
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * It will decrease the total issuance of the system by the
       * `TransferFee`. If the sender's account is below the existential
       * deposit as a result of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * Transfer all remaining balance to the given account.
       * 
       * NOTE: This function only attempts to transfer _transferable_
       * balances. This means that any locked, reserved, or existential
       * deposits (when `keep_alive` is `true`), will not be transferred by
       * this function. To ensure that this function results in a killed
       * account, you might need to prepare the account by removing any
       * reference counters, storage deposits, etc...
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `keep_alive`: A boolean to determine if the `transfer_all`
       * operation should send all of the funds the account has, causing
       * the sender account to be killed (false), or transfer everything
       * except at least the existential deposit, which will guarantee to
       * keep the sender account alive (true).
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer
       * will not kill the origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       * 
       * - `dest`: The recipient of the transfer.
       * - `currency_id`: currency type.
       * - `amount`: free balance amount to tranfer.
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
       * and the original deposit will be returned.
       * 
       * May only be called from `T::ApproveOrigin`.
       * 
       * ## Complexity
       * - O(1).
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Put forward a suggestion for spending. A deposit proportional to the value
       * is reserved and slashed if the proposal is rejected. It is returned once the
       * proposal is awarded.
       * 
       * ## Complexity
       * - O(1)
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Reject a proposed spend. The original deposit will be slashed.
       * 
       * May only be called from `T::RejectOrigin`.
       * 
       * ## Complexity
       * - O(1)
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Force a previously approved proposal to be removed from the approval queue.
       * The original deposit will no longer be returned.
       * 
       * May only be called from `T::RejectOrigin`.
       * - `proposal_id`: The index of a proposal
       * 
       * ## Complexity
       * - O(A) where `A` is the number of approvals
       * 
       * Errors:
       * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
       * i.e., the proposal has not been approved. This could also mean the proposal does not
       * exist altogether, thus there is no way it would have been approved in the first place.
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Propose and approve a spend of treasury funds.
       * 
       * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
       * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
       * - `beneficiary`: The destination account for the transfer.
       * 
       * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
       * beneficiary.
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasuryBuyoutExtension: {
      /**
       * Allows caller to buyout a given amount of native token.
       * When denoting the `amount` as `Buyout` the caller will receive this exact amount of the native token in exchange for a corresponding amount of an allowed asset.
       * When denoting the `amount` as `Exchange`, the caller will spend this exact amount of an allowed asset in exchange for a corresponding amount of the native token.
       * 
       * Parameters
       * 
       * - `origin`: Caller's origin.
       * - `asset`: Exchange asset used for buyout of basic asset.
       * - `amount`: Amount of basic asset to buyout or amount of asset to exchange.
       * 
       * Emits `Buyout` event when successful.
       **/
      buyout: AugmentedSubmittable<(asset: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: TreasuryBuyoutExtensionAmount | { Buyout: any } | { Exchange: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, TreasuryBuyoutExtensionAmount]>;
      /**
       * Allows root to update the allowed currencies for buyout.
       * `AllowedCurrencies` storage will be reset and updated with provided `assets`.
       * 
       * Parameters
       * 
       * - `origin`: Origin must be root.
       * - `assets`: List of assets to be inserted into `AllowedCurrencies` storage.
       * 
       * Emits `AllowedAssetsForBuyoutUpdated` event when successful.
       **/
      updateAllowedAssets: AugmentedSubmittable<(assets: Vec<SpacewalkPrimitivesCurrencyId> | (SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * Allows root to update the buyout limit.
       * 
       * Parameters
       * 
       * - `origin`: Origin must be root.
       * - `limit`: New buyout limit. If None, then buyouts are not limited.
       * 
       * Emits `BuyoutLimitUpdated` event when successful.
       **/
      updateBuyoutLimit: AugmentedSubmittable<(limit: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * Send a call through an indexed pseudonym of the sender.
       * 
       * Filter from origin are passed along. The call will be dispatched with an origin which
       * use the same filter as the origin of this call.
       * 
       * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
       * because you expect `proxy` to have been used prior in the call stack and you do not want
       * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
       * in the Multisig pallet instead.
       * 
       * NOTE: Prior to version *12, this was called `as_limited_sub`.
       * 
       * The dispatch origin for this call must be _Signed_.
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * Send a batch of dispatch calls.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       * 
       * This will return `Ok` in all circumstances. To determine the success of the batch, an
       * event is deposited. If a call failed and the batch was interrupted, then the
       * `BatchInterrupted` event is deposited, along with the number of successful calls made
       * and the error of the failed call. If all were successful, then the `BatchCompleted`
       * event is deposited.
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Send a batch of dispatch calls and atomically execute them.
       * The whole transaction will rollback and fail if any of the calls failed.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatched without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatches a function call with a provided origin.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * ## Complexity
       * - O(1).
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: FoucocoRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | { TechnicalCommittee: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FoucocoRuntimeOriginCaller, Call]>;
      /**
       * Send a batch of dispatch calls.
       * Unlike `batch`, it allows errors and won't interrupt.
       * 
       * May be called from any origin except `None`.
       * 
       * - `calls`: The calls to be dispatched from the same origin. The number of call must not
       * exceed the constant: `batched_calls_limit` (available in constant metadata).
       * 
       * If origin is root then the calls are dispatch without checking origin filter. (This
       * includes bypassing `frame_system::Config::BaseCallFilter`).
       * 
       * ## Complexity
       * - O(C) where C is the number of calls to be batched.
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * Dispatch a function call with a specified weight.
       * 
       * This function does not check the weight of the call, and instead allows the
       * Root origin to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Root_.
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vaultRegistry: {
      /**
       * Configures whether or not the vault accepts new issues.
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction (i.e. the vault)
       * * `accept_new_issues` - true indicates that the vault accepts new issues
       * 
       * # Weight: `O(1)`
       **/
      acceptNewIssues: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, acceptNewIssues: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, bool]>;
      /**
       * Deposit collateral as a security against stealing the
       * Stellar assets locked with the caller.
       * 
       * # Arguments
       * * `amount` - the amount of extra collateral to lock
       **/
      depositCollateral: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * Recover vault ID from a liquidated status.
       * 
       * # Arguments
       * * `currency_pair` - the currency pair to change
       **/
      recoverVaultId: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * Registers a new Stellar address for the vault.
       * 
       * # Arguments
       * * `public_key` - the Stellar public key of the vault to update
       **/
      registerPublicKey: AugmentedSubmittable<(publicKey: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * Initiates the registration procedure for a new Vault.
       * The Vault locks up collateral, which is to be used in the issuing process.
       * 
       * 
       * # Errors
       * * `InsufficientVaultCollateralAmount` - if the collateral is below the minimum threshold
       * * `VaultAlreadyRegistered` - if a vault is already registered for the origin account
       * * `InsufficientCollateralAvailable` - if the vault does not own enough collateral
       **/
      registerVault: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, collateral: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      reportUndercollateralizedVault: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId]>;
      /**
       * Configures a custom, higher secure collateral threshold for the vault.
       * 
       * # Arguments
       * 
       * * `origin` - sender of the transaction (i.e. the vault)
       * * `custom_threshold` - either the threshold, or None to use the systemwide default
       * 
       * # Weight: `O(1)`
       **/
      setCustomSecureThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, customThreshold: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Option<u128>]>;
      /**
       * Changes the collateral liquidation threshold for a currency (only executable by the Root
       * account)
       * 
       * # Arguments
       * * `currency_pair` - the currency pair to change
       * * `ceiling` - the new collateral ceiling
       **/
      setLiquidationCollateralThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * Changes the minimum amount of collateral required for registration
       * (only executable by the Root account)
       * 
       * # Arguments
       * * `currency_id` - the collateral's currency id
       * * `minimum` - the new minimum collateral
       **/
      setMinimumCollateral: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, minimum: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128]>;
      /**
       * Changes the collateral premium redeem threshold for a currency (only executable by the
       * Root account)
       * 
       * # Arguments
       * * `currency_pair` - the currency pair to change
       * * `ceiling` - the new collateral ceiling
       **/
      setPremiumRedeemThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      setPunishmentDelay: AugmentedSubmittable<(punishmentDelay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Changes the secure threshold for a currency (only executable by the Root account)
       * 
       * # Arguments
       * * `currency_pair` - the currency pair to change
       * * `threshold` - the new secure threshold
       **/
      setSecureCollateralThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * Changes the collateral ceiling for a currency (only executable by the Root account)
       * 
       * # Arguments
       * * `currency_pair` - the currency pair to change
       * * `ceiling` - the new collateral ceiling
       **/
      setSystemCollateralCeiling: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, ceiling: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * Withdraws `amount` of the collateral from the amount locked by
       * the vault corresponding to the origin account
       * The collateral left after withdrawal must be more
       * (free or used in collateral issued tokens) than MinimumCollateralVault
       * and above the SecureCollateralThreshold. Collateral that is currently
       * being used to back issued tokens remains locked until the Vault
       * is used for a redeem request (full release can take multiple redeem requests).
       * 
       * # Arguments
       * * `amount` - the amount of collateral to withdraw
       * 
       * # Errors
       * * `VaultNotFound` - if no vault exists for the origin account
       * * `InsufficientCollateralAvailable` - if the vault does not own enough collateral
       **/
      withdrawCollateral: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * Force a vested transfer.
       * 
       * The dispatch origin for this call must be _Root_.
       * 
       * - `source`: The account whose funds should be transferred.
       * - `target`: The account that should be transferred the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * Merge two vesting schedules together, creating a new vesting schedule that unlocks over
       * the highest possible start and end blocks. If both schedules have already started the
       * current block will be used as the schedule start; with the caveat that if one schedule
       * is finished by the current block, the other will be treated as the new merged schedule,
       * unmodified.
       * 
       * NOTE: If `schedule1_index == schedule2_index` this is a no-op.
       * NOTE: This will unlock all schedules through the current block prior to merging.
       * NOTE: If both schedules have ended by the current block, no new schedule will be created
       * and both will be removed.
       * 
       * Merged schedule attributes:
       * - `starting_block`: `MAX(schedule1.starting_block, scheduled2.starting_block,
       * current_block)`.
       * - `ending_block`: `MAX(schedule1.ending_block, schedule2.ending_block)`.
       * - `locked`: `schedule1.locked_at(current_block) + schedule2.locked_at(current_block)`.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `schedule1_index`: index of the first schedule to merge.
       * - `schedule2_index`: index of the second schedule to merge.
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Unlock any vested funds of the sender account.
       * 
       * The dispatch origin for this call must be _Signed_ and the sender must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Create a vested transfer.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account receiving the vested funds.
       * - `schedule`: The vesting schedule attached to the transfer.
       * 
       * Emits `VestingCreated`.
       * 
       * NOTE: This will unlock all schedules through the current block.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * Unlock any vested funds of a `target` account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * - `target`: The account whose vested funds should be unlocked. Must have funds still
       * locked under this pallet.
       * 
       * Emits either `VestingCompleted` or `VestingUpdated`.
       * 
       * ## Complexity
       * - `O(1)`.
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmpQueue: {
      /**
       * Resumes all XCM executions for the XCMP queue.
       * 
       * Note that this function doesn't change the status of the in/out bound channels.
       * 
       * - `origin`: Must pass `ControllerOrigin`.
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Services a single overweight XCM.
       * 
       * - `origin`: Must pass `ExecuteOverweightOrigin`.
       * - `index`: The index of the overweight XCM to service
       * - `weight_limit`: The amount of weight that XCM execution may take.
       * 
       * Errors:
       * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
       * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
       * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
       * 
       * Events:
       * - `OverweightServiced`: On success.
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
       * 
       * - `origin`: Must pass `ControllerOrigin`.
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Overwrites the number of pages of messages which must be in the queue after which we drop any further
       * messages from the channel.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.drop_threshold`
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
       * message sending may recommence after it has been suspended.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.resume_threshold`
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
       * suspend their sending.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.suspend_value`
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Overwrites the amount of remaining weight under which we stop processing messages.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.threshold_weight`
       **/
      updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Overwrites the speed to which the available weight approaches the maximum weight.
       * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
       **/
      updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Overwrite the maximum amount of weight any individual message may consume.
       * Messages above this weight go into the overweight queue and may only be serviced explicitly.
       * 
       * - `origin`: Must pass `Root`.
       * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
       **/
      updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * Transfer native currencies.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transfer: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer `MultiAsset`.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiasset: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer several `MultiAsset` specifying the item to be used as fee
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee_item` is index of the MultiAssets that we want to use for
       * payment
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiassets: AugmentedSubmittable<(assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAssets, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer `MultiAsset` specifying the fee and amount as separate.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee` is the multiasset to be spent to pay for execution in
       * destination chain. Both fee and amount will be subtracted form the
       * callers balance For now we only accept fee and asset having the same
       * `MultiLocation` id.
       * 
       * If `fee` is not high enough to cover for the execution costs in the
       * destination chain, then the assets will be trapped in the
       * destination chain
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [XcmVersionedMultiAsset, XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer several currencies specifying the item to be used as fee
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee_item` is index of the currencies tuple that we want to use for
       * payment
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Transfer native currencies specifying the fee and amount as
       * separate.
       * 
       * `dest_weight_limit` is the weight for XCM execution on the dest
       * chain, and it would be charged from the transferred assets. If set
       * below requirements, the execution may fail and assets wouldn't be
       * received.
       * 
       * `fee` is the amount to be spent to pay for execution in destination
       * chain. Both fee and amount will be subtracted form the callers
       * balance.
       * 
       * If `fee` is not high enough to cover for the execution costs in the
       * destination chain, then the assets will be trapped in the
       * destination chain
       * 
       * It's a no-op if any error on local XCM execution or message sending.
       * Note sending assets out per se doesn't guarantee they would be
       * received. Receiving depends on if the XCM message could be delivered
       * by the network, and if the receiving chain would handle
       * messages correctly.
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: XcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * Provide liquidity to a pair.
       * 
       * The order of foreign dot effect result.
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up pair
       * - `asset_1`: Asset which make up pair
       * - `amount_0_desired`: Maximum amount of asset_0 added to the pair
       * - `amount_1_desired`: Maximum amount of asset_1 added to the pair
       * - `amount_0_min`: Minimum amount of asset_0 added to the pair
       * - `amount_1_min`: Minimum amount of asset_1 added to the pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      addLiquidity: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, amount0Desired: Compact<u128> | AnyNumber | Uint8Array, amount1Desired: Compact<u128> | AnyNumber | Uint8Array, amount0Min: Compact<u128> | AnyNumber | Uint8Array, amount1Min: Compact<u128> | AnyNumber | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>]>;
      bootstrapChargeReward: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, chargeRewards: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * Claim lp asset from a bootstrap pair
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      bootstrapClaim: AugmentedSubmittable<(recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u32>]>;
      /**
       * Contribute some asset to a bootstrap pair
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `amount_0_contribute`: The amount of asset_0 contribute to this bootstrap pair
       * - `amount_1_contribute`: The amount of asset_1 contribute to this bootstrap pair
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      bootstrapContribute: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, amount0Contribute: Compact<u128> | AnyNumber | Uint8Array, amount1Contribute: Compact<u128> | AnyNumber | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u32>]>;
      /**
       * Create bootstrap pair
       * 
       * The order of asset don't affect result.
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `target_supply_0`: Target amount of asset_0 total contribute
       * - `target_supply_0`: Target amount of asset_1 total contribute
       * - `capacity_supply_0`: The max amount of asset_0 total contribute
       * - `capacity_supply_1`: The max amount of asset_1 total contribute
       * - `end`: The earliest ending block.
       **/
      bootstrapCreate: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, targetSupply0: Compact<u128> | AnyNumber | Uint8Array, targetSupply1: Compact<u128> | AnyNumber | Uint8Array, capacitySupply0: Compact<u128> | AnyNumber | Uint8Array, capacitySupply1: Compact<u128> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, rewards: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * End a bootstrap pair
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       **/
      bootstrapEnd: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * Contributor refund from disable bootstrap pair
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       **/
      bootstrapRefund: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * update a bootstrap pair
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up bootstrap pair
       * - `asset_1`: Asset which make up bootstrap pair
       * - `min_contribution_0`: The new min amount of asset_0 contribute
       * - `min_contribution_0`: The new min amount of asset_1 contribute
       * - `target_supply_0`: The new target amount of asset_0 total contribute
       * - `target_supply_0`: The new target amount of asset_1 total contribute
       * - `capacity_supply_0`: The new max amount of asset_0 total contribute
       * - `capacity_supply_1`: The new max amount of asset_1 total contribute
       * - `end`: The earliest ending block.
       **/
      bootstrapUpdate: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, targetSupply0: Compact<u128> | AnyNumber | Uint8Array, targetSupply1: Compact<u128> | AnyNumber | Uint8Array, capacitySupply0: Compact<u128> | AnyNumber | Uint8Array, capacitySupply1: Compact<u128> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, rewards: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      bootstrapWithdrawReward: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, MultiAddress]>;
      /**
       * Create pair by two assets.
       * 
       * The order of foreign dot effect result.
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up Pair
       * - `asset_1`: Asset which make up Pair
       **/
      createPair: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * Extract liquidity.
       * 
       * The order of foreign dot effect result.
       * 
       * # Arguments
       * 
       * - `asset_0`: Asset which make up pair
       * - `asset_1`: Asset which make up pair
       * - `amount_asset_0_min`: Minimum amount of asset_0 to exact
       * - `amount_asset_1_min`: Minimum amount of asset_1 to exact
       * - `recipient`: Account that accepts withdrawal of assets
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      removeLiquidity: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, liquidity: Compact<u128> | AnyNumber | Uint8Array, amount0Min: Compact<u128> | AnyNumber | Uint8Array, amount1Min: Compact<u128> | AnyNumber | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, MultiAddress, Compact<u32>]>;
      /**
       * Set the protocol fee point.
       * 
       * # Arguments
       * 
       * - `fee_point`:
       * 0 means that all exchange fees belong to the liquidity provider.
       * 30 means that all exchange fees belong to the fee receiver.
       **/
      setFeePoint: AugmentedSubmittable<(feePoint: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      /**
       * Set the new receiver of the protocol fee.
       * 
       * # Arguments
       * 
       * - `send_to`:
       * (1) Some(receiver): it turn on the protocol fee and the new receiver account.
       * (2) None: it turn off the protocol fee.
       **/
      setFeeReceiver: AugmentedSubmittable<(sendTo: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [Option<MultiAddress>]>;
      /**
       * Buy amount of foreign by path.
       * 
       * # Arguments
       * 
       * - `amount_out`: Amount of the foreign will be bought
       * - `amount_in_max`: Maximum amount of sold foreign
       * - `path`: path can convert to pairs.
       * - `recipient`: Account that receive the target foreign
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swapAssetsForExactAssets: AugmentedSubmittable<(amountOut: Compact<u128> | AnyNumber | Uint8Array, amountInMax: Compact<u128> | AnyNumber | Uint8Array, path: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<ZenlinkProtocolPrimitivesAssetId>, MultiAddress, Compact<u32>]>;
      /**
       * Sell amount of foreign by path.
       * 
       * # Arguments
       * 
       * - `amount_in`: Amount of the foreign will be sold
       * - `amount_out_min`: Minimum amount of target foreign
       * - `path`: path can convert to pairs.
       * - `recipient`: Account that receive the target foreign
       * - `deadline`: Height of the cutoff block of this transaction
       **/
      swapExactAssetsForAssets: AugmentedSubmittable<(amountIn: Compact<u128> | AnyNumber | Uint8Array, amountOutMin: Compact<u128> | AnyNumber | Uint8Array, path: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<ZenlinkProtocolPrimitivesAssetId>, MultiAddress, Compact<u32>]>;
      /**
       * Move some assets from one holder to another.
       * 
       * # Arguments
       * 
       * - `asset_id`: The foreign id.
       * - `target`: The receiver of the foreign.
       * - `amount`: The amount of the foreign to transfer.
       **/
      transfer: AugmentedSubmittable<(assetId: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, MultiAddress, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
