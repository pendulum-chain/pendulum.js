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
import type { ClientsInfoClientRelease, CumulusPrimitivesParachainInherentParachainInherentData, DiaOracleDiaCoinInfo, FoucocoRuntimeOriginCaller, FoucocoRuntimeSessionKeys, FrameSupportPreimagesBounded, OrmlTraitsAssetRegistryAssetMetadata, PalletContractsWasmDeterminism, PalletDemocracyConviction, PalletDemocracyMetadataOwner, PalletDemocracyVoteAccountVote, PalletIdentityBitFlags, PalletIdentityIdentityInfo, PalletIdentityJudgement, PalletMultisigTimepoint, PalletVestingVestingInfo, RuntimeCommonAssetRegistryCustomMetadata, RuntimeCommonProxyType, SecurityErrorCode, SecurityStatusCode, SpWeightsWeightV2Weight, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, StagingXcmV3MultiLocation, StagingXcmV3WeightLimit, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAssets, StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm, StellarRelayOrganization, StellarRelayValidator, TreasuryBuyoutExtensionAmount, ZenlinkProtocolPrimitivesAssetId } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * See [`Pallet::register_asset`].
       **/
      registerAsset: AugmentedSubmittable<(metadata: OrmlTraitsAssetRegistryAssetMetadata | { decimals?: any; name?: any; symbol?: any; existentialDeposit?: any; location?: any; additional?: any } | string | Uint8Array, assetId: Option<SpacewalkPrimitivesCurrencyId> | null | Uint8Array | SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string) => SubmittableExtrinsic<ApiType>, [OrmlTraitsAssetRegistryAssetMetadata, Option<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * See [`Pallet::update_asset`].
       **/
      updateAsset: AugmentedSubmittable<(assetId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, decimals: Option<u32> | null | Uint8Array | u32 | AnyNumber, name: Option<Bytes> | null | Uint8Array | Bytes | string, symbol: Option<Bytes> | null | Uint8Array | Bytes | string, existentialDeposit: Option<u128> | null | Uint8Array | u128 | AnyNumber, location: Option<Option<StagingXcmVersionedMultiLocation>> | null | Uint8Array | Option<StagingXcmVersionedMultiLocation> | StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string, additional: Option<RuntimeCommonAssetRegistryCustomMetadata> | null | Uint8Array | RuntimeCommonAssetRegistryCustomMetadata | { diaKeys?: any; feePerSecond?: any } | string) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, Option<u32>, Option<Bytes>, Option<Bytes>, Option<u128>, Option<Option<StagingXcmVersionedMultiLocation>>, Option<RuntimeCommonAssetRegistryCustomMetadata>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    balances: {
      /**
       * See [`Pallet::force_set_balance`].
       **/
      forceSetBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::force_unreserve`].
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::set_balance_deprecated`].
       **/
      setBalanceDeprecated: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, oldReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * See [`Pallet::transfer_allow_death`].
       **/
      transferAllowDeath: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::upgrade_accounts`].
       **/
      upgradeAccounts: AugmentedSubmittable<(who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    bounties: {
      /**
       * See [`Pallet::accept_curator`].
       **/
      acceptCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::approve_bounty`].
       **/
      approveBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::award_bounty`].
       **/
      awardBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::claim_bounty`].
       **/
      claimBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::close_bounty`].
       **/
      closeBounty: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::extend_bounty_expiry`].
       **/
      extendBountyExpiry: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Bytes]>;
      /**
       * See [`Pallet::propose_bounty`].
       **/
      proposeBounty: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::propose_curator`].
       **/
      proposeCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::unassign_curator`].
       **/
      unassignCurator: AugmentedSubmittable<(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    childBounties: {
      /**
       * See [`Pallet::accept_curator`].
       **/
      acceptCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::add_child_bounty`].
       **/
      addChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, description: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>, Bytes]>;
      /**
       * See [`Pallet::award_child_bounty`].
       **/
      awardChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::claim_child_bounty`].
       **/
      claimChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::close_child_bounty`].
       **/
      closeChildBounty: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::propose_curator`].
       **/
      proposeCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array, curator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>, MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::unassign_curator`].
       **/
      unassignCurator: AugmentedSubmittable<(parentBountyId: Compact<u32> | AnyNumber | Uint8Array, childBountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    clientsInfo: {
      /**
       * See [`Pallet::authorize_account`].
       **/
      authorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::deauthorize_account`].
       **/
      deauthorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::set_current_client_release`].
       **/
      setCurrentClientRelease: AugmentedSubmittable<(clientName: Bytes | string | Uint8Array, release: ClientsInfoClientRelease | { uri?: any; checksum?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, ClientsInfoClientRelease]>;
      /**
       * See [`Pallet::set_pending_client_release`].
       **/
      setPendingClientRelease: AugmentedSubmittable<(clientName: Bytes | string | Uint8Array, release: ClientsInfoClientRelease | { uri?: any; checksum?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, ClientsInfoClientRelease]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    contracts: {
      /**
       * See [`Pallet::call`].
       **/
      call: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, SpWeightsWeightV2Weight, Option<Compact<u128>>, Bytes]>;
      /**
       * See [`Pallet::call_old_weight`].
       **/
      callOldWeight: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, data: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u64>, Option<Compact<u128>>, Bytes]>;
      /**
       * See [`Pallet::instantiate`].
       **/
      instantiate: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, codeHash: H256 | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpWeightsWeightV2Weight, Option<Compact<u128>>, H256, Bytes, Bytes]>;
      /**
       * See [`Pallet::instantiate_old_weight`].
       **/
      instantiateOldWeight: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, codeHash: H256 | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u64>, Option<Compact<u128>>, H256, Bytes, Bytes]>;
      /**
       * See [`Pallet::instantiate_with_code`].
       **/
      instantiateWithCode: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpWeightsWeightV2Weight, Option<Compact<u128>>, Bytes, Bytes, Bytes]>;
      /**
       * See [`Pallet::instantiate_with_code_old_weight`].
       **/
      instantiateWithCodeOldWeight: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, gasLimit: Compact<u64> | AnyNumber | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, code: Bytes | string | Uint8Array, data: Bytes | string | Uint8Array, salt: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u64>, Option<Compact<u128>>, Bytes, Bytes, Bytes]>;
      /**
       * See [`Pallet::migrate`].
       **/
      migrate: AugmentedSubmittable<(weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::remove_code`].
       **/
      removeCode: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, codeHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::upload_code`].
       **/
      uploadCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array, storageDepositLimit: Option<Compact<u128>> | null | Uint8Array | Compact<u128> | AnyNumber, determinism: PalletContractsWasmDeterminism | 'Enforced' | 'Relaxed' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Option<Compact<u128>>, PalletContractsWasmDeterminism]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    council: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_native_currency`].
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
      /**
       * See [`Pallet::update_balance`].
       **/
      updateBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, i128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    democracy: {
      /**
       * See [`Pallet::blacklist`].
       **/
      blacklist: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [H256, Option<u32>]>;
      /**
       * See [`Pallet::cancel_proposal`].
       **/
      cancelProposal: AugmentedSubmittable<(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::cancel_referendum`].
       **/
      cancelReferendum: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::clear_public_proposals`].
       **/
      clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::delegate`].
       **/
      delegate: AugmentedSubmittable<(to: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, conviction: PalletDemocracyConviction | 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x' | number | Uint8Array, balance: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletDemocracyConviction, u128]>;
      /**
       * See [`Pallet::emergency_cancel`].
       **/
      emergencyCancel: AugmentedSubmittable<(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::external_propose`].
       **/
      externalPropose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::external_propose_default`].
       **/
      externalProposeDefault: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::external_propose_majority`].
       **/
      externalProposeMajority: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded]>;
      /**
       * See [`Pallet::fast_track`].
       **/
      fastTrack: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, votingPeriod: u32 | AnyNumber | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, u32, u32]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(proposal: FrameSupportPreimagesBounded | { Legacy: any } | { Inline: any } | { Lookup: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [FrameSupportPreimagesBounded, Compact<u128>]>;
      /**
       * See [`Pallet::remove_other_vote`].
       **/
      removeOtherVote: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u32]>;
      /**
       * See [`Pallet::remove_vote`].
       **/
      removeVote: AugmentedSubmittable<(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::second`].
       **/
      second: AugmentedSubmittable<(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::set_metadata`].
       **/
      setMetadata: AugmentedSubmittable<(owner: PalletDemocracyMetadataOwner | { External: any } | { Proposal: any } | { Referendum: any } | string | Uint8Array, maybeHash: Option<H256> | null | Uint8Array | H256 | string) => SubmittableExtrinsic<ApiType>, [PalletDemocracyMetadataOwner, Option<H256>]>;
      /**
       * See [`Pallet::undelegate`].
       **/
      undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::unlock`].
       **/
      unlock: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::veto_external`].
       **/
      vetoExternal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(refIndex: Compact<u32> | AnyNumber | Uint8Array, vote: PalletDemocracyVoteAccountVote | { Standard: any } | { Split: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletDemocracyVoteAccountVote]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    diaOracleModule: {
      /**
       * See [`Pallet::add_currency`].
       **/
      addCurrency: AugmentedSubmittable<(blockchain: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * See [`Pallet::authorize_account`].
       **/
      authorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::deauthorize_account`].
       **/
      deauthorizeAccount: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
      /**
       * See [`Pallet::remove_currency`].
       **/
      removeCurrency: AugmentedSubmittable<(blockchain: Bytes | string | Uint8Array, symbol: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, Bytes]>;
      /**
       * See [`Pallet::set_batching_api`].
       **/
      setBatchingApi: AugmentedSubmittable<(api: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_updated_coin_infos`].
       **/
      setUpdatedCoinInfos: AugmentedSubmittable<(coinInfos: Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>> | ([ITuple<[Bytes, Bytes]> | [Bytes | string | Uint8Array, Bytes | string | Uint8Array], DiaOracleDiaCoinInfo | { symbol?: any; name?: any; blockchain?: any; supply?: any; lastUpdateTimestamp?: any; price?: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dmpQueue: {
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    farming: {
      /**
       * See [`Pallet::add_boost_pool_whitelist`].
       **/
      addBoostPoolWhitelist: AugmentedSubmittable<(whitelist: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>]>;
      /**
       * See [`Pallet::charge`].
       **/
      charge: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>;
      /**
       * See [`Pallet::charge_boost`].
       **/
      chargeBoost: AugmentedSubmittable<(rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>;
      /**
       * See [`Pallet::claim`].
       **/
      claim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::close_pool`].
       **/
      closePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::create_farming_pool`].
       **/
      createFarmingPool: AugmentedSubmittable<(tokensProportion: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, Perbill]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, Perbill | AnyNumber | Uint8Array])[], basicRewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], gaugeInit: Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>> | null | Uint8Array | ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]> | [SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u32 | AnyNumber | Uint8Array, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]], minDepositToStart: u128 | AnyNumber | Uint8Array, afterBlockToStart: Compact<u32> | AnyNumber | Uint8Array, withdrawLimitTime: Compact<u32> | AnyNumber | Uint8Array, claimLimitTime: Compact<u32> | AnyNumber | Uint8Array, withdrawLimitCount: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesCurrencyId, Perbill]>>, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>, Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>>, u128, Compact<u32>, Compact<u32>, Compact<u32>, u8]>;
      /**
       * See [`Pallet::deposit`].
       **/
      deposit: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, addValue: u128 | AnyNumber | Uint8Array, gaugeInfo: Option<ITuple<[u128, u32]>> | null | Uint8Array | ITuple<[u128, u32]> | [u128 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array]) => SubmittableExtrinsic<ApiType>, [u32, u128, Option<ITuple<[u128, u32]>>]>;
      /**
       * See [`Pallet::edit_pool`].
       **/
      editPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, basicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], withdrawLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, claimLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, gaugeBasicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], withdrawLimitCount: Option<u8> | null | Uint8Array | u8 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>, Option<u32>, Option<u32>, Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>, Option<u8>]>;
      /**
       * See [`Pallet::end_boost_round`].
       **/
      endBoostRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_gauge_claim`].
       **/
      forceGaugeClaim: AugmentedSubmittable<(gid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::force_retire_pool`].
       **/
      forceRetirePool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::gauge_withdraw`].
       **/
      gaugeWithdraw: AugmentedSubmittable<(gid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::kill_pool`].
       **/
      killPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::reset_pool`].
       **/
      resetPool: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, basicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>> | null | Uint8Array | Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], minDepositToStart: Option<u128> | null | Uint8Array | u128 | AnyNumber, afterBlockToStart: Option<u32> | null | Uint8Array | u32 | AnyNumber, withdrawLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, claimLimitTime: Option<u32> | null | Uint8Array | u32 | AnyNumber, withdrawLimitCount: Option<u8> | null | Uint8Array | u8 | AnyNumber, gaugeInit: Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>> | null | Uint8Array | ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]> | [SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u32 | AnyNumber | Uint8Array, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]]) => SubmittableExtrinsic<ApiType>, [u32, Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>, Option<u128>, Option<u32>, Option<u32>, Option<u32>, Option<u8>, Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>>]>;
      /**
       * See [`Pallet::set_next_round_whitelist`].
       **/
      setNextRoundWhitelist: AugmentedSubmittable<(whitelist: Vec<u32> | (u32 | AnyNumber | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<u32>]>;
      /**
       * See [`Pallet::set_retire_limit`].
       **/
      setRetireLimit: AugmentedSubmittable<(limit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::start_boost_round`].
       **/
      startBoostRound: AugmentedSubmittable<(roundLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(voteList: Vec<ITuple<[u32, Percent]>> | ([u32 | AnyNumber | Uint8Array, Percent | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[u32, Percent]>>]>;
      /**
       * See [`Pallet::withdraw`].
       **/
      withdraw: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array, removeValue: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [u32, Option<u128>]>;
      /**
       * See [`Pallet::withdraw_claim`].
       **/
      withdrawClaim: AugmentedSubmittable<(pid: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    fee: {
      /**
       * See [`Pallet::set_issue_fee`].
       **/
      setIssueFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_issue_griefing_collateral`].
       **/
      setIssueGriefingCollateral: AugmentedSubmittable<(griefingCollateral: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_premium_redeem_fee`].
       **/
      setPremiumRedeemFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_punishment_fee`].
       **/
      setPunishmentFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_redeem_fee`].
       **/
      setRedeemFee: AugmentedSubmittable<(fee: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_replace_griefing_collateral`].
       **/
      setReplaceGriefingCollateral: AugmentedSubmittable<(griefingCollateral: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    identity: {
      /**
       * See [`Pallet::add_registrar`].
       **/
      addRegistrar: AugmentedSubmittable<(account: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::add_sub`].
       **/
      addSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::cancel_request`].
       **/
      cancelRequest: AugmentedSubmittable<(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::clear_identity`].
       **/
      clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::kill_identity`].
       **/
      killIdentity: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::provide_judgement`].
       **/
      provideJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, judgement: PalletIdentityJudgement | { Unknown: any } | { FeePaid: any } | { Reasonable: any } | { KnownGood: any } | { OutOfDate: any } | { LowQuality: any } | { Erroneous: any } | string | Uint8Array, identity: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]>;
      /**
       * See [`Pallet::quit_sub`].
       **/
      quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_sub`].
       **/
      removeSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::rename_sub`].
       **/
      renameSub: AugmentedSubmittable<(sub: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, data: Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Data]>;
      /**
       * See [`Pallet::request_judgement`].
       **/
      requestJudgement: AugmentedSubmittable<(regIndex: Compact<u32> | AnyNumber | Uint8Array, maxFee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_account_id`].
       **/
      setAccountId: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, MultiAddress]>;
      /**
       * See [`Pallet::set_fee`].
       **/
      setFee: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fee: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Compact<u128>]>;
      /**
       * See [`Pallet::set_fields`].
       **/
      setFields: AugmentedSubmittable<(index: Compact<u32> | AnyNumber | Uint8Array, fields: PalletIdentityBitFlags) => SubmittableExtrinsic<ApiType>, [Compact<u32>, PalletIdentityBitFlags]>;
      /**
       * See [`Pallet::set_identity`].
       **/
      setIdentity: AugmentedSubmittable<(info: PalletIdentityIdentityInfo | { additional?: any; display?: any; legal?: any; web?: any; riot?: any; email?: any; pgpFingerprint?: any; image?: any; twitter?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [PalletIdentityIdentityInfo]>;
      /**
       * See [`Pallet::set_subs`].
       **/
      setSubs: AugmentedSubmittable<(subs: Vec<ITuple<[AccountId32, Data]>> | ([AccountId32 | string | Uint8Array, Data | { None: any } | { Raw: any } | { BlakeTwo256: any } | { Sha256: any } | { Keccak256: any } | { ShaThree256: any } | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[AccountId32, Data]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    issue: {
      /**
       * See [`Pallet::cancel_issue`].
       **/
      cancelIssue: AugmentedSubmittable<(issueId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute_issue`].
       **/
      executeIssue: AugmentedSubmittable<(issueId: H256 | string | Uint8Array, transactionEnvelopeXdrEncoded: Bytes | string | Uint8Array, externalizedEnvelopesEncoded: Bytes | string | Uint8Array, transactionSetEncoded: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, Bytes, Bytes]>;
      /**
       * See [`Pallet::minimum_transfer_amount_update`].
       **/
      minimumTransferAmountUpdate: AugmentedSubmittable<(newMinimumAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::rate_limit_update`].
       **/
      rateLimitUpdate: AugmentedSubmittable<(limitVolumeAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, intervalLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u128>, SpacewalkPrimitivesCurrencyId, u32]>;
      /**
       * See [`Pallet::request_issue`].
       **/
      requestIssue: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, SpacewalkPrimitivesVaultId]>;
      /**
       * See [`Pallet::set_issue_period`].
       **/
      setIssuePeriod: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    multisig: {
      /**
       * See [`Pallet::approve_as_multi`].
       **/
      approveAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, callHash: U8aFixed | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi`].
       **/
      asMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], maybeTimepoint: Option<PalletMultisigTimepoint> | null | Uint8Array | PalletMultisigTimepoint | { height?: any; index?: any } | string, call: Call | IMethod | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::as_multi_threshold_1`].
       **/
      asMultiThreshold1: AugmentedSubmittable<(otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Call]>;
      /**
       * See [`Pallet::cancel_as_multi`].
       **/
      cancelAsMulti: AugmentedSubmittable<(threshold: u16 | AnyNumber | Uint8Array, otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array, callHash: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nomination: {
      /**
       * See [`Pallet::deposit_collateral`].
       **/
      depositCollateral: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, u128]>;
      /**
       * See [`Pallet::opt_in_to_nomination`].
       **/
      optInToNomination: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * See [`Pallet::opt_out_of_nomination`].
       **/
      optOutOfNomination: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * See [`Pallet::set_nomination_enabled`].
       **/
      setNominationEnabled: AugmentedSubmittable<(enabled: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::withdraw_collateral`].
       **/
      withdrawCollateral: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, index: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, u128, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    oracle: {
      /**
       * See [`Pallet::set_max_delay`].
       **/
      setMaxDelay: AugmentedSubmittable<(newMaxDelay: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::update_oracle_keys`].
       **/
      updateOracleKeys: AugmentedSubmittable<(oracleKeys: Vec<SpacewalkPrimitivesOracleKey> | (SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesOracleKey>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    ormlExtension: {
      /**
       * See [`Pallet::burn`].
       **/
      burn: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, from: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, u128]>;
      /**
       * See [`Pallet::create`].
       **/
      create: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId]>;
      /**
       * See [`Pallet::force_transfer_ownership`].
       **/
      forceTransferOwnership: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32]>;
      /**
       * See [`Pallet::mint`].
       **/
      mint: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, to: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, u128]>;
      /**
       * See [`Pallet::set_managers`].
       **/
      setManagers: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newAdmin: AccountId32 | string | Uint8Array, newIssuer: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, AccountId32]>;
      /**
       * See [`Pallet::transfer_ownership`].
       **/
      transferOwnership: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newOwner: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainInfo: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainStaking: {
      /**
       * See [`Pallet::cancel_leave_candidates`].
       **/
      cancelLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::candidate_stake_less`].
       **/
      candidateStakeLess: AugmentedSubmittable<(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::candidate_stake_more`].
       **/
      candidateStakeMore: AugmentedSubmittable<(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::claim_rewards`].
       **/
      claimRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::delegator_stake_less`].
       **/
      delegatorStakeLess: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::delegator_stake_more`].
       **/
      delegatorStakeMore: AugmentedSubmittable<(candidate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::execute_leave_candidates`].
       **/
      executeLeaveCandidates: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::execute_scheduled_reward_change`].
       **/
      executeScheduledRewardChange: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_new_round`].
       **/
      forceNewRound: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::force_remove_candidate`].
       **/
      forceRemoveCandidate: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::increment_collator_rewards`].
       **/
      incrementCollatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::increment_delegator_rewards`].
       **/
      incrementDelegatorRewards: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::init_leave_candidates`].
       **/
      initLeaveCandidates: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::join_candidates`].
       **/
      joinCandidates: AugmentedSubmittable<(stake: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::join_delegators`].
       **/
      joinDelegators: AugmentedSubmittable<(collator: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * See [`Pallet::leave_delegators`].
       **/
      leaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_blocks_per_round`].
       **/
      setBlocksPerRound: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_inflation`].
       **/
      setInflation: AugmentedSubmittable<(collatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, collatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorMaxRatePercentage: Perquintill | AnyNumber | Uint8Array, delegatorAnnualRewardRatePercentage: Perquintill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Perquintill, Perquintill, Perquintill, Perquintill]>;
      /**
       * See [`Pallet::set_max_candidate_stake`].
       **/
      setMaxCandidateStake: AugmentedSubmittable<(updated: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::set_max_selected_candidates`].
       **/
      setMaxSelectedCandidates: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::unlock_unstaked`].
       **/
      unlockUnstaked: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    parachainSystem: {
      /**
       * See [`Pallet::authorize_upgrade`].
       **/
      authorizeUpgrade: AugmentedSubmittable<(codeHash: H256 | string | Uint8Array, checkVersion: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * See [`Pallet::enact_authorized_upgrade`].
       **/
      enactAuthorizedUpgrade: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_validation_data`].
       **/
      setValidationData: AugmentedSubmittable<(data: CumulusPrimitivesParachainInherentParachainInherentData | { validationData?: any; relayChainState?: any; downwardMessages?: any; horizontalMessages?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CumulusPrimitivesParachainInherentParachainInherentData]>;
      /**
       * See [`Pallet::sudo_send_upward_message`].
       **/
      sudoSendUpwardMessage: AugmentedSubmittable<(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotXcm: {
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array, maxWeight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedXcm, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::force_default_xcm_version`].
       **/
      forceDefaultXcmVersion: AugmentedSubmittable<(maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u32>]>;
      /**
       * See [`Pallet::force_subscribe_version_notify`].
       **/
      forceSubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_suspension`].
       **/
      forceSuspension: AugmentedSubmittable<(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [bool]>;
      /**
       * See [`Pallet::force_unsubscribe_version_notify`].
       **/
      forceUnsubscribeVersionNotify: AugmentedSubmittable<(location: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation]>;
      /**
       * See [`Pallet::force_xcm_version`].
       **/
      forceXcmVersion: AugmentedSubmittable<(location: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array, version: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmV3MultiLocation, u32]>;
      /**
       * See [`Pallet::limited_reserve_transfer_assets`].
       **/
      limitedReserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::limited_teleport_assets`].
       **/
      limitedTeleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array, weightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::reserve_transfer_assets`].
       **/
      reserveTransferAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
      /**
       * See [`Pallet::send`].
       **/
      send: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, message: StagingXcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedXcm]>;
      /**
       * See [`Pallet::teleport_assets`].
       **/
      teleportAssets: AugmentedSubmittable<(dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, beneficiary: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeAssetItem: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiLocation, StagingXcmVersionedMultiAssets, u32]>;
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
       * See [`Pallet::note_preimage`].
       **/
      notePreimage: AugmentedSubmittable<(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::request_preimage`].
       **/
      requestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unnote_preimage`].
       **/
      unnotePreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::unrequest_preimage`].
       **/
      unrequestPreimage: AugmentedSubmittable<(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    proxy: {
      /**
       * See [`Pallet::add_proxy`].
       **/
      addProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, RuntimeCommonProxyType, u32]>;
      /**
       * See [`Pallet::announce`].
       **/
      announce: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::create_pure`].
       **/
      createPure: AugmentedSubmittable<(proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array, index: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [RuntimeCommonProxyType, u32, u16]>;
      /**
       * See [`Pallet::kill_pure`].
       **/
      killPure: AugmentedSubmittable<(spawner: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, index: u16 | AnyNumber | Uint8Array, height: Compact<u32> | AnyNumber | Uint8Array, extIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, RuntimeCommonProxyType, u16, Compact<u32>, Compact<u32>]>;
      /**
       * See [`Pallet::proxy`].
       **/
      proxy: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<RuntimeCommonProxyType> | null | Uint8Array | RuntimeCommonProxyType | 'Any' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Option<RuntimeCommonProxyType>, Call]>;
      /**
       * See [`Pallet::proxy_announced`].
       **/
      proxyAnnounced: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, forceProxyType: Option<RuntimeCommonProxyType> | null | Uint8Array | RuntimeCommonProxyType | 'Any' | number, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Option<RuntimeCommonProxyType>, Call]>;
      /**
       * See [`Pallet::reject_announcement`].
       **/
      rejectAnnouncement: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_announcement`].
       **/
      removeAnnouncement: AugmentedSubmittable<(real: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, H256]>;
      /**
       * See [`Pallet::remove_proxies`].
       **/
      removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::remove_proxy`].
       **/
      removeProxy: AugmentedSubmittable<(delegate: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, proxyType: RuntimeCommonProxyType | 'Any' | number | Uint8Array, delay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, RuntimeCommonProxyType, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    redeem: {
      /**
       * See [`Pallet::cancel_redeem`].
       **/
      cancelRedeem: AugmentedSubmittable<(redeemId: H256 | string | Uint8Array, reimburse: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, bool]>;
      /**
       * See [`Pallet::execute_redeem`].
       **/
      executeRedeem: AugmentedSubmittable<(redeemId: H256 | string | Uint8Array, transactionEnvelopeXdrEncoded: Bytes | string | Uint8Array, externalizedEnvelopesEncoded: Bytes | string | Uint8Array, transactionSetEncoded: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, Bytes, Bytes]>;
      /**
       * See [`Pallet::liquidation_redeem`].
       **/
      liquidationRedeem: AugmentedSubmittable<(currencies: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amountWrapped: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * See [`Pallet::minimum_transfer_amount_update`].
       **/
      minimumTransferAmountUpdate: AugmentedSubmittable<(newMinimumAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::mint_tokens_for_reimbursed_redeem`].
       **/
      mintTokensForReimbursedRedeem: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, redeemId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, H256]>;
      /**
       * See [`Pallet::rate_limit_update`].
       **/
      rateLimitUpdate: AugmentedSubmittable<(limitVolumeAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, intervalLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u128>, SpacewalkPrimitivesCurrencyId, u32]>;
      /**
       * See [`Pallet::request_redeem`].
       **/
      requestRedeem: AugmentedSubmittable<(amountWrapped: Compact<u128> | AnyNumber | Uint8Array, stellarAddress: U8aFixed | string | Uint8Array, vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, U8aFixed, SpacewalkPrimitivesVaultId]>;
      /**
       * See [`Pallet::self_redeem`].
       **/
      selfRedeem: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amountWrapped: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * See [`Pallet::set_redeem_period`].
       **/
      setRedeemPeriod: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    replace: {
      /**
       * See [`Pallet::accept_replace`].
       **/
      acceptReplace: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, oldVault: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array, collateral: Compact<u128> | AnyNumber | Uint8Array, stellarAddress: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, Compact<u128>, Compact<u128>, U8aFixed]>;
      /**
       * See [`Pallet::cancel_replace`].
       **/
      cancelReplace: AugmentedSubmittable<(replaceId: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute_replace`].
       **/
      executeReplace: AugmentedSubmittable<(replaceId: H256 | string | Uint8Array, transactionEnvelopeXdrEncoded: Bytes | string | Uint8Array, externalizedEnvelopesXdrEncoded: Bytes | string | Uint8Array, transactionSetXdrEncoded: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Bytes, Bytes, Bytes]>;
      /**
       * See [`Pallet::minimum_transfer_amount_update`].
       **/
      minimumTransferAmountUpdate: AugmentedSubmittable<(newMinimumAmount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * See [`Pallet::request_replace`].
       **/
      requestReplace: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * See [`Pallet::set_replace_period`].
       **/
      setReplacePeriod: AugmentedSubmittable<(period: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::withdraw_replace`].
       **/
      withdrawReplace: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    rewardDistribution: {
      /**
       * See [`Pallet::collect_reward`].
       **/
      collectReward: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, rewardCurrencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, index: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, SpacewalkPrimitivesCurrencyId, Option<u32>]>;
      /**
       * See [`Pallet::set_reward_per_block`].
       **/
      setRewardPerBlock: AugmentedSubmittable<(newRewardPerBlock: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    scheduler: {
      /**
       * See [`Pallet::cancel`].
       **/
      cancel: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::cancel_named`].
       **/
      cancelNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::schedule`].
       **/
      schedule: AugmentedSubmittable<(when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_after`].
       **/
      scheduleAfter: AugmentedSubmittable<(after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named`].
       **/
      scheduleNamed: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, when: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * See [`Pallet::schedule_named_after`].
       **/
      scheduleNamedAfter: AugmentedSubmittable<(id: U8aFixed | string | Uint8Array, after: u32 | AnyNumber | Uint8Array, maybePeriodic: Option<ITuple<[u32, u32]>> | null | Uint8Array | ITuple<[u32, u32]> | [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array], priority: u8 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    security: {
      /**
       * See [`Pallet::insert_parachain_error`].
       **/
      insertParachainError: AugmentedSubmittable<(errorCode: SecurityErrorCode | 'None' | 'OracleOffline' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [SecurityErrorCode]>;
      /**
       * See [`Pallet::remove_parachain_error`].
       **/
      removeParachainError: AugmentedSubmittable<(errorCode: SecurityErrorCode | 'None' | 'OracleOffline' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [SecurityErrorCode]>;
      /**
       * See [`Pallet::set_parachain_status`].
       **/
      setParachainStatus: AugmentedSubmittable<(statusCode: SecurityStatusCode | 'Running' | 'Error' | 'Shutdown' | number | Uint8Array) => SubmittableExtrinsic<ApiType>, [SecurityStatusCode]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    session: {
      /**
       * See [`Pallet::purge_keys`].
       **/
      purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::set_keys`].
       **/
      setKeys: AugmentedSubmittable<(keys: FoucocoRuntimeSessionKeys | { aura?: any } | string | Uint8Array, proof: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FoucocoRuntimeSessionKeys, Bytes]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stellarRelay: {
      /**
       * See [`Pallet::update_tier_1_validator_set`].
       **/
      updateTier1ValidatorSet: AugmentedSubmittable<(validators: Vec<StellarRelayValidator> | (StellarRelayValidator | { name?: any; publicKey?: any; organizationId?: any } | string | Uint8Array)[], organizations: Vec<StellarRelayOrganization> | (StellarRelayOrganization | { id?: any; name?: any } | string | Uint8Array)[], enactmentBlockHeight: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<StellarRelayValidator>, Vec<StellarRelayOrganization>, u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    sudo: {
      /**
       * See [`Pallet::set_key`].
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * See [`Pallet::sudo`].
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * See [`Pallet::sudo_as`].
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * See [`Pallet::sudo_unchecked_weight`].
       **/
      sudoUncheckedWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    system: {
      /**
       * See [`Pallet::kill_prefix`].
       **/
      killPrefix: AugmentedSubmittable<(prefix: Bytes | string | Uint8Array, subkeys: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes, u32]>;
      /**
       * See [`Pallet::kill_storage`].
       **/
      killStorage: AugmentedSubmittable<(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Bytes>]>;
      /**
       * See [`Pallet::remark`].
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::remark_with_event`].
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code`].
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_code_without_checks`].
       **/
      setCodeWithoutChecks: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * See [`Pallet::set_heap_pages`].
       **/
      setHeapPages: AugmentedSubmittable<(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64]>;
      /**
       * See [`Pallet::set_storage`].
       **/
      setStorage: AugmentedSubmittable<(items: Vec<ITuple<[Bytes, Bytes]>> | ([Bytes | string | Uint8Array, Bytes | string | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[Bytes, Bytes]>>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    technicalCommittee: {
      /**
       * See [`Pallet::close`].
       **/
      close: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, proposalWeightBound: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]>;
      /**
       * See [`Pallet::disapprove_proposal`].
       **/
      disapproveProposal: AugmentedSubmittable<(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256]>;
      /**
       * See [`Pallet::execute`].
       **/
      execute: AugmentedSubmittable<(proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, Compact<u32>]>;
      /**
       * See [`Pallet::propose`].
       **/
      propose: AugmentedSubmittable<(threshold: Compact<u32> | AnyNumber | Uint8Array, proposal: Call | IMethod | string | Uint8Array, lengthBound: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>, Call, Compact<u32>]>;
      /**
       * See [`Pallet::set_members`].
       **/
      setMembers: AugmentedSubmittable<(newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[], prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string, oldCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<AccountId32>, Option<AccountId32>, u32]>;
      /**
       * See [`Pallet::vote`].
       **/
      vote: AugmentedSubmittable<(proposal: H256 | string | Uint8Array, index: Compact<u32> | AnyNumber | Uint8Array, approve: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [H256, Compact<u32>, bool]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    timestamp: {
      /**
       * See [`Pallet::set`].
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokenAllowance: {
      /**
       * See [`Pallet::add_allowed_currencies`].
       **/
      addAllowedCurrencies: AugmentedSubmittable<(currencies: Vec<SpacewalkPrimitivesCurrencyId> | (SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * See [`Pallet::approve`].
       **/
      approve: AugmentedSubmittable<(id: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, delegate: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, u128]>;
      /**
       * See [`Pallet::remove_allowed_currencies`].
       **/
      removeAllowedCurrencies: AugmentedSubmittable<(currencies: Vec<SpacewalkPrimitivesCurrencyId> | (SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * See [`Pallet::transfer_from`].
       **/
      transferFrom: AugmentedSubmittable<(id: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, owner: AccountId32 | string | Uint8Array, destination: AccountId32 | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, AccountId32, AccountId32, u128]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    tokens: {
      /**
       * See [`Pallet::force_transfer`].
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::set_balance`].
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>, Compact<u128>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * See [`Pallet::transfer_all`].
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, bool]>;
      /**
       * See [`Pallet::transfer_keep_alive`].
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasury: {
      /**
       * See [`Pallet::approve_proposal`].
       **/
      approveProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::propose_spend`].
       **/
      proposeSpend: AugmentedSubmittable<(value: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * See [`Pallet::reject_proposal`].
       **/
      rejectProposal: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::remove_approval`].
       **/
      removeApproval: AugmentedSubmittable<(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u32>]>;
      /**
       * See [`Pallet::spend`].
       **/
      spend: AugmentedSubmittable<(amount: Compact<u128> | AnyNumber | Uint8Array, beneficiary: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    treasuryBuyoutExtension: {
      /**
       * See [`Pallet::buyout`].
       **/
      buyout: AugmentedSubmittable<(asset: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: TreasuryBuyoutExtensionAmount | { Buyout: any } | { Exchange: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, TreasuryBuyoutExtensionAmount]>;
      /**
       * See [`Pallet::update_allowed_assets`].
       **/
      updateAllowedAssets: AugmentedSubmittable<(assets: Vec<SpacewalkPrimitivesCurrencyId> | (SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<SpacewalkPrimitivesCurrencyId>]>;
      /**
       * See [`Pallet::update_buyout_limit`].
       **/
      updateBuyoutLimit: AugmentedSubmittable<(limit: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [Option<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    utility: {
      /**
       * See [`Pallet::as_derivative`].
       **/
      asDerivative: AugmentedSubmittable<(index: u16 | AnyNumber | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u16, Call]>;
      /**
       * See [`Pallet::batch`].
       **/
      batch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::batch_all`].
       **/
      batchAll: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::dispatch_as`].
       **/
      dispatchAs: AugmentedSubmittable<(asOrigin: FoucocoRuntimeOriginCaller | { system: any } | { Void: any } | { Council: any } | { TechnicalCommittee: any } | { PolkadotXcm: any } | { CumulusXcm: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [FoucocoRuntimeOriginCaller, Call]>;
      /**
       * See [`Pallet::force_batch`].
       **/
      forceBatch: AugmentedSubmittable<(calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<Call>]>;
      /**
       * See [`Pallet::with_weight`].
       **/
      withWeight: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array, weight: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call, SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vaultRegistry: {
      /**
       * See [`Pallet::accept_new_issues`].
       **/
      acceptNewIssues: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, acceptNewIssues: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, bool]>;
      /**
       * See [`Pallet::deposit_collateral`].
       **/
      depositCollateral: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * See [`Pallet::recover_vault_id`].
       **/
      recoverVaultId: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair]>;
      /**
       * See [`Pallet::register_public_key`].
       **/
      registerPublicKey: AugmentedSubmittable<(publicKey: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [U8aFixed]>;
      /**
       * See [`Pallet::register_vault`].
       **/
      registerVault: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, collateral: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * See [`Pallet::report_undercollateralized_vault`].
       **/
      reportUndercollateralizedVault: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId]>;
      /**
       * See [`Pallet::set_custom_secure_threshold`].
       **/
      setCustomSecureThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, customThreshold: Option<u128> | null | Uint8Array | u128 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Option<u128>]>;
      /**
       * See [`Pallet::set_liquidation_collateral_threshold`].
       **/
      setLiquidationCollateralThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * See [`Pallet::set_minimum_collateral`].
       **/
      setMinimumCollateral: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, minimum: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128]>;
      /**
       * See [`Pallet::set_premium_redeem_threshold`].
       **/
      setPremiumRedeemThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * See [`Pallet::set_punishment_delay`].
       **/
      setPunishmentDelay: AugmentedSubmittable<(punishmentDelay: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::set_secure_collateral_threshold`].
       **/
      setSecureCollateralThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * See [`Pallet::set_system_collateral_ceiling`].
       **/
      setSystemCollateralCeiling: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, ceiling: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
      /**
       * See [`Pallet::withdraw_collateral`].
       **/
      withdrawCollateral: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vaultStaking: {
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    vesting: {
      /**
       * See [`Pallet::force_vested_transfer`].
       **/
      forceVestedTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::merge_schedules`].
       **/
      mergeSchedules: AugmentedSubmittable<(schedule1Index: u32 | AnyNumber | Uint8Array, schedule2Index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * See [`Pallet::vest`].
       **/
      vest: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::vested_transfer`].
       **/
      vestedTransfer: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, schedule: PalletVestingVestingInfo | { locked?: any; perBlock?: any; startingBlock?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, PalletVestingVestingInfo]>;
      /**
       * See [`Pallet::vest_other`].
       **/
      vestOther: AugmentedSubmittable<(target: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xcmpQueue: {
      /**
       * See [`Pallet::resume_xcm_execution`].
       **/
      resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::service_overweight`].
       **/
      serviceOverweight: AugmentedSubmittable<(index: u64 | AnyNumber | Uint8Array, weightLimit: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [u64, SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::suspend_xcm_execution`].
       **/
      suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * See [`Pallet::update_drop_threshold`].
       **/
      updateDropThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_resume_threshold`].
       **/
      updateResumeThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_suspend_threshold`].
       **/
      updateSuspendThreshold: AugmentedSubmittable<(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * See [`Pallet::update_threshold_weight`].
       **/
      updateThresholdWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_weight_restrict_decay`].
       **/
      updateWeightRestrictDecay: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * See [`Pallet::update_xcmp_max_individual_weight`].
       **/
      updateXcmpMaxIndividualWeight: AugmentedSubmittable<(updated: SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpWeightsWeightV2Weight]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    xTokens: {
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset`].
       **/
      transferMultiasset: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiassets`].
       **/
      transferMultiassets: AugmentedSubmittable<(assets: StagingXcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array, feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAssets, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multiasset_with_fee`].
       **/
      transferMultiassetWithFee: AugmentedSubmittable<(asset: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, fee: StagingXcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiAsset, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_multicurrencies`].
       **/
      transferMulticurrencies: AugmentedSubmittable<(currencies: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>> | ([SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[], feeItem: u32 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>, u32, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * See [`Pallet::transfer_with_fee`].
       **/
      transferWithFee: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Native: any } | { XCM: any } | { Stellar: any } | { ZenlinkLPToken: any } | { Token: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array, fee: u128 | AnyNumber | Uint8Array, dest: StagingXcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array, destWeightLimit: StagingXcmV3WeightLimit | { Unlimited: any } | { Limited: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128, u128, StagingXcmVersionedMultiLocation, StagingXcmV3WeightLimit]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * See [`Pallet::add_liquidity`].
       **/
      addLiquidity: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, amount0Desired: Compact<u128> | AnyNumber | Uint8Array, amount1Desired: Compact<u128> | AnyNumber | Uint8Array, amount0Min: Compact<u128> | AnyNumber | Uint8Array, amount1Min: Compact<u128> | AnyNumber | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>]>;
      /**
       * See [`Pallet::bootstrap_charge_reward`].
       **/
      bootstrapChargeReward: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, chargeRewards: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * See [`Pallet::bootstrap_claim`].
       **/
      bootstrapClaim: AugmentedSubmittable<(recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u32>]>;
      /**
       * See [`Pallet::bootstrap_contribute`].
       **/
      bootstrapContribute: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, amount0Contribute: Compact<u128> | AnyNumber | Uint8Array, amount1Contribute: Compact<u128> | AnyNumber | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u32>]>;
      /**
       * See [`Pallet::bootstrap_create`].
       **/
      bootstrapCreate: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, targetSupply0: Compact<u128> | AnyNumber | Uint8Array, targetSupply1: Compact<u128> | AnyNumber | Uint8Array, capacitySupply0: Compact<u128> | AnyNumber | Uint8Array, capacitySupply1: Compact<u128> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, rewards: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * See [`Pallet::bootstrap_end`].
       **/
      bootstrapEnd: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * See [`Pallet::bootstrap_refund`].
       **/
      bootstrapRefund: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * See [`Pallet::bootstrap_update`].
       **/
      bootstrapUpdate: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, targetSupply0: Compact<u128> | AnyNumber | Uint8Array, targetSupply1: Compact<u128> | AnyNumber | Uint8Array, capacitySupply0: Compact<u128> | AnyNumber | Uint8Array, capacitySupply1: Compact<u128> | AnyNumber | Uint8Array, end: Compact<u32> | AnyNumber | Uint8Array, rewards: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>> | ([ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u128>, Compact<u32>, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
      /**
       * See [`Pallet::bootstrap_withdraw_reward`].
       **/
      bootstrapWithdrawReward: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, MultiAddress]>;
      /**
       * See [`Pallet::create_pair`].
       **/
      createPair: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
      /**
       * See [`Pallet::remove_liquidity`].
       **/
      removeLiquidity: AugmentedSubmittable<(asset0: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, asset1: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, liquidity: Compact<u128> | AnyNumber | Uint8Array, amount0Min: Compact<u128> | AnyNumber | Uint8Array, amount1Min: Compact<u128> | AnyNumber | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, Compact<u128>, Compact<u128>, Compact<u128>, MultiAddress, Compact<u32>]>;
      /**
       * See [`Pallet::set_fee_point`].
       **/
      setFeePoint: AugmentedSubmittable<(feePoint: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u8]>;
      /**
       * See [`Pallet::set_fee_receiver`].
       **/
      setFeeReceiver: AugmentedSubmittable<(sendTo: Option<MultiAddress> | null | Uint8Array | MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string) => SubmittableExtrinsic<ApiType>, [Option<MultiAddress>]>;
      /**
       * See [`Pallet::swap_assets_for_exact_assets`].
       **/
      swapAssetsForExactAssets: AugmentedSubmittable<(amountOut: Compact<u128> | AnyNumber | Uint8Array, amountInMax: Compact<u128> | AnyNumber | Uint8Array, path: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<ZenlinkProtocolPrimitivesAssetId>, MultiAddress, Compact<u32>]>;
      /**
       * See [`Pallet::swap_exact_assets_for_assets`].
       **/
      swapExactAssetsForAssets: AugmentedSubmittable<(amountIn: Compact<u128> | AnyNumber | Uint8Array, amountOutMin: Compact<u128> | AnyNumber | Uint8Array, path: Vec<ZenlinkProtocolPrimitivesAssetId> | (ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array)[], recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, deadline: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u128>, Compact<u128>, Vec<ZenlinkProtocolPrimitivesAssetId>, MultiAddress, Compact<u32>]>;
      /**
       * See [`Pallet::transfer`].
       **/
      transfer: AugmentedSubmittable<(assetId: ZenlinkProtocolPrimitivesAssetId | { chainId?: any; assetType?: any; assetIndex?: any } | string | Uint8Array, recipient: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [ZenlinkProtocolPrimitivesAssetId, MultiAddress, Compact<u128>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  } // AugmentedSubmittables
} // declare module
