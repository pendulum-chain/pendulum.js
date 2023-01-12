// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type { AccountId32, Call, H256, MultiAddress } from '@pendulum-chain/types/interfaces/runtime';
import type { ApiTypes, AugmentedSubmittable, SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api-base/types';
import type { Bytes, Compact, Option, U8aFixed, Vec, bool, i128, u128, u32, u64 } from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type { SecurityErrorCode, SecurityStatusCode, SpCoreVoid, SpFinalityGrandpaEquivocationProof, SpWeightsWeightV2Weight, SpacewalkPrimitivesCurrencyId, SpacewalkPrimitivesOracleKey, SpacewalkPrimitivesVaultCurrencyPair, SpacewalkPrimitivesVaultId, StellarRelayOrganization, StellarRelayValidator } from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> = SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
  interface AugmentedSubmittables<ApiType extends ApiTypes> {
    balances: {
      /**
       * Exactly as `transfer`, except the origin must be root and the source account may be
       * specified.
       * # <weight>
       * - Same as transfer, but additional read and write because the source account is not
       * assumed to be in the overlay.
       * # </weight>
       **/
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, Compact<u128>]>;
      /**
       * Unreserve some balance from a user by force.
       * 
       * Can only be called by ROOT.
       **/
      forceUnreserve: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, u128]>;
      /**
       * Set the balances of a given account.
       * 
       * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
       * also alter the total issuance of the system (`TotalIssuance`) appropriately.
       * If the new free or reserved balance is below the existential deposit,
       * it will reset the account nonce (`frame_system::AccountNonce`).
       * 
       * The dispatch origin for this call is `root`.
       **/
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>, Compact<u128>]>;
      /**
       * Transfer some liquid free balance to another account.
       * 
       * `transfer` will set the `FreeBalance` of the sender and receiver.
       * If the sender's account is below the existential deposit as a result
       * of the transfer, the account will be reaped.
       * 
       * The dispatch origin for this call must be `Signed` by the transactor.
       * 
       * # <weight>
       * - Dependent on arguments but not critical, given proper implementations for input config
       * types. See related functions below.
       * - It contains a limited number of reads and writes internally and no complex
       * computation.
       * 
       * Related functions:
       * 
       * - `ensure_can_withdraw` is always called internally but has a bounded complexity.
       * - Transferring balances to accounts that did not exist before will cause
       * `T::OnNewAccount::on_new_account` to be called.
       * - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
       * - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
       * that the transfer will not kill the origin account.
       * ---------------------------------
       * - Origin account is already in memory, so no DB operations for them.
       * # </weight>
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
       * keep the sender account alive (true). # <weight>
       * - O(1). Just like transfer, but reading the user's transferable balance first.
       * #</weight>
       **/
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, bool]>;
      /**
       * Same as the [`transfer`] call, but with a check that the transfer will not kill the
       * origin account.
       * 
       * 99% of the time you want [`transfer`] instead.
       * 
       * [`transfer`]: struct.Pallet.html#method.transfer
       **/
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, value: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Compact<u128>]>;
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
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
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
      updateBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, amount: i128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, i128]>;
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
       * Withdraw all rewards from the `origin` account in the `vault_id` staking pool.
       * 
       * # Arguments
       * 
       * * `origin` - signing account
       **/
      withdrawRewards: AugmentedSubmittable<(vaultId: SpacewalkPrimitivesVaultId | { accountId?: any; currencies?: any } | string | Uint8Array, index: Option<u32> | null | Uint8Array | u32 | AnyNumber) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultId, Option<u32>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    grandpa: {
      /**
       * Note that the current authority set of the GRANDPA finality gadget has stalled.
       * 
       * This will trigger a forced authority set change at the beginning of the next session, to
       * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
       * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
       * The block production rate (which may be slowed down because of finality lagging) should
       * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
       * authority will start voting on top of `best_finalized_block_number` for new finalized
       * blocks. `best_finalized_block_number` should be the highest of the latest finalized
       * block of all validators of the new authority set.
       * 
       * Only callable by root.
       **/
      noteStalled: AugmentedSubmittable<(delay: u32 | AnyNumber | Uint8Array, bestFinalizedBlockNumber: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, u32]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       **/
      reportEquivocation: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpCoreVoid]>;
      /**
       * Report voter equivocation/misbehavior. This method will verify the
       * equivocation proof and validate the given key ownership proof
       * against the extracted offender. If both are valid, the offence
       * will be reported.
       * 
       * This extrinsic must be called unsigned and it is expected that only
       * block authors will call it (validated in `ValidateUnsigned`), as such
       * if the block author is defined it will be defined as the equivocation
       * reporter.
       **/
      reportEquivocationUnsigned: AugmentedSubmittable<(equivocationProof: SpFinalityGrandpaEquivocationProof | { setId?: any; equivocation?: any } | string | Uint8Array, keyOwnerProof: SpCoreVoid | null) => SubmittableExtrinsic<ApiType>, [SpFinalityGrandpaEquivocationProof, SpCoreVoid]>;
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
      rateLimitUpdate: AugmentedSubmittable<(limitVolumeAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, intervalLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u128>, SpacewalkPrimitivesCurrencyId, u32]>;
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
       * Feeds data from the oracles, e.g., the exchange rates. This function
       * is intended to be API-compatible with orml-oracle.
       * 
       * # Arguments
       * 
       * * `values` - a vector of (key, value) pairs to submit
       **/
      feedValues: AugmentedSubmittable<(values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>> | ([SpacewalkPrimitivesOracleKey | { ExchangeRate: any } | { FeeEstimation: any } | string | Uint8Array, u128 | AnyNumber | Uint8Array])[]) => SubmittableExtrinsic<ApiType>, [Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>>]>;
      /**
       * Adds an authorized oracle account (only executable by the Root account)
       * 
       * # Arguments
       * * `account_id` - the account Id of the oracle
       * * `name` - a descriptive name for the oracle
       **/
      insertAuthorizedOracle: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array, name: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32, Bytes]>;
      /**
       * Removes an authorized oracle account (only executable by the Root account)
       * 
       * # Arguments
       * * `account_id` - the account Id of the oracle
       **/
      removeAuthorizedOracle: AugmentedSubmittable<(accountId: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [AccountId32]>;
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
      rateLimitUpdate: AugmentedSubmittable<(limitVolumeAmount: Option<u128> | null | Uint8Array | u128 | AnyNumber, limitVolumeCurrencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, intervalLength: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Option<u128>, SpacewalkPrimitivesCurrencyId, u32]>;
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
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB change.
       * # </weight>
       **/
      setKey: AugmentedSubmittable<(updated: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudo: AugmentedSubmittable<(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Signed` origin from
       * a given account.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - Limited storage reads.
       * - One DB write (event).
       * - Weight of derivative `call` execution + 10,000.
       * # </weight>
       **/
      sudoAs: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, Call]>;
      /**
       * Authenticates the sudo key and dispatches a function call with `Root` origin.
       * This function does not check the weight of the call, and instead allows the
       * Sudo user to specify the weight of the call.
       * 
       * The dispatch origin for this call must be _Signed_.
       * 
       * # <weight>
       * - O(1).
       * - The weight of this call is defined by the caller.
       * # </weight>
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
       * # <weight>
       * - `O(1)`
       * # </weight>
       **/
      remark: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Make some on-chain remark and emit event.
       **/
      remarkWithEvent: AugmentedSubmittable<(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code.
       * 
       * # <weight>
       * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
       * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
       * expensive).
       * - 1 storage write (codec `O(C)`).
       * - 1 digest item.
       * - 1 event.
       * The weight of this function is dependent on the runtime, but generally this is very
       * expensive. We will treat this as a full block.
       * # </weight>
       **/
      setCode: AugmentedSubmittable<(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [Bytes]>;
      /**
       * Set the new runtime code without doing any checks of the given `code`.
       * 
       * # <weight>
       * - `O(C)` where `C` length of `code`
       * - 1 storage write (codec `O(C)`).
       * - 1 digest item.
       * - 1 event.
       * The weight of this function is dependent on the runtime. We will treat this as a full
       * block. # </weight>
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
       * # <weight>
       * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
       * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
       * `on_finalize`)
       * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
       * # </weight>
       **/
      set: AugmentedSubmittable<(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<u64>]>;
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
      forceTransfer: AugmentedSubmittable<(source: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
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
      setBalance: AugmentedSubmittable<(who: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, newFree: Compact<u128> | AnyNumber | Uint8Array, newReserved: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>, Compact<u128>]>;
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
      transfer: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
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
      transferAll: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, keepAlive: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, bool]>;
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
      transferKeepAlive: AugmentedSubmittable<(dest: MultiAddress | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, amount: Compact<u128> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [MultiAddress, SpacewalkPrimitivesCurrencyId, Compact<u128>]>;
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
      setMinimumCollateral: AugmentedSubmittable<(currencyId: SpacewalkPrimitivesCurrencyId | { Token: any } | { ForeignAsset: any } | { Native: any } | { StellarNative: any } | { AlphaNum4: any } | { AlphaNum12: any } | string | Uint8Array, minimum: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesCurrencyId, u128]>;
      /**
       * Changes the collateral premium redeem threshold for a currency (only executable by the
       * Root account)
       * 
       * # Arguments
       * * `currency_pair` - the currency pair to change
       * * `ceiling` - the new collateral ceiling
       **/
      setPremiumRedeemThreshold: AugmentedSubmittable<(currencyPair: SpacewalkPrimitivesVaultCurrencyPair | { collateral?: any; wrapped?: any } | string | Uint8Array, threshold: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [SpacewalkPrimitivesVaultCurrencyPair, u128]>;
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
  } // AugmentedSubmittables
} // declare module
