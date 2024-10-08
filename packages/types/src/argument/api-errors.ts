// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    assetRegistry: {
      /**
       * Asset was not found.
       **/
      AssetNotFound: AugmentedError<ApiType>;
      /**
       * The version of the `VersionedMultiLocation` value used is not able
       * to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this asset id.
       **/
      ConflictingAssetId: AugmentedError<ApiType>;
      /**
       * Another asset was already register with this location.
       **/
      ConflictingLocation: AugmentedError<ApiType>;
      /**
       * The asset id is invalid.
       **/
      InvalidAssetId: AugmentedError<ApiType>;
      /**
       * Name or symbol is too long.
       **/
      InvalidAssetString: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    balances: {
      /**
       * Beneficiary account must pre-exist.
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit.
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account.
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account.
       **/
      Expendability: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal.
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of freezes exceed `MaxFreezes`.
       **/
      TooManyFreezes: AugmentedError<ApiType>;
      /**
       * Number of holds exceed `MaxHolds`.
       **/
      TooManyHolds: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed `MaxReserves`.
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value.
       **/
      VestingBalance: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    bounties: {
      /**
       * The bounty cannot be closed because it has active child bounties.
       **/
      HasActiveChildBounty: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * Invalid bounty fee.
       **/
      InvalidFee: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid bounty value.
       **/
      InvalidValue: AugmentedError<ApiType>;
      /**
       * A bounty payout is pending.
       * To cancel the bounty, you must unassign and slash the curator.
       **/
      PendingPayout: AugmentedError<ApiType>;
      /**
       * The bounties cannot be claimed/closed because it's still in the countdown period.
       **/
      Premature: AugmentedError<ApiType>;
      /**
       * The reason given is just too big.
       **/
      ReasonTooBig: AugmentedError<ApiType>;
      /**
       * Require bounty curator.
       **/
      RequireCurator: AugmentedError<ApiType>;
      /**
       * Too many approvals are already queued.
       **/
      TooManyQueued: AugmentedError<ApiType>;
      /**
       * The bounty status is unexpected.
       **/
      UnexpectedStatus: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    childBounties: {
      /**
       * The bounty balance is not enough to add new child-bounty.
       **/
      InsufficientBountyBalance: AugmentedError<ApiType>;
      /**
       * The parent bounty is not in active state.
       **/
      ParentBountyNotActive: AugmentedError<ApiType>;
      /**
       * Number of child bounties exceeds limit `MaxActiveChildBountyCount`.
       **/
      TooManyChildBounties: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    clientsInfo: {
      ThisAccountIdIsNotAuthorized: AugmentedError<ApiType>;
      UserUnableToDeauthorizeThemself: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    contracts: {
      /**
       * Can not add a delegate dependency to the code hash of the contract itself.
       **/
      CannotAddSelfAsDelegateDependency: AugmentedError<ApiType>;
      /**
       * No code info could be found at the supplied code hash.
       **/
      CodeInfoNotFound: AugmentedError<ApiType>;
      /**
       * Code removal was denied because the code is still in use by at least one contract.
       **/
      CodeInUse: AugmentedError<ApiType>;
      /**
       * No code could be found at the supplied code hash.
       **/
      CodeNotFound: AugmentedError<ApiType>;
      /**
       * The contract's code was found to be invalid during validation.
       * 
       * The most likely cause of this is that an API was used which is not supported by the
       * node. This happens if an older node is used with a new version of ink!. Try updating
       * your node to the newest available version.
       * 
       * A more detailed error can be found on the node console if debug messages are enabled
       * by supplying `-lruntime::contracts=debug`.
       **/
      CodeRejected: AugmentedError<ApiType>;
      /**
       * The code supplied to `instantiate_with_code` exceeds the limit specified in the
       * current schedule.
       **/
      CodeTooLarge: AugmentedError<ApiType>;
      /**
       * No contract was found at the specified address.
       **/
      ContractNotFound: AugmentedError<ApiType>;
      /**
       * The contract ran to completion but decided to revert its storage changes.
       * Please note that this error is only returned from extrinsics. When called directly
       * or via RPC an `Ok` will be returned. In this case the caller needs to inspect the flags
       * to determine whether a reversion has taken place.
       **/
      ContractReverted: AugmentedError<ApiType>;
      /**
       * Contract trapped during execution.
       **/
      ContractTrapped: AugmentedError<ApiType>;
      /**
       * Input passed to a contract API function failed to decode as expected type.
       **/
      DecodingFailed: AugmentedError<ApiType>;
      /**
       * The contract already depends on the given delegate dependency.
       **/
      DelegateDependencyAlreadyExists: AugmentedError<ApiType>;
      /**
       * The dependency was not found in the contract's delegate dependencies.
       **/
      DelegateDependencyNotFound: AugmentedError<ApiType>;
      /**
       * A contract with the same AccountId already exists.
       **/
      DuplicateContract: AugmentedError<ApiType>;
      /**
       * An indetermistic code was used in a context where this is not permitted.
       **/
      Indeterministic: AugmentedError<ApiType>;
      /**
       * `seal_call` forwarded this contracts input. It therefore is no longer available.
       **/
      InputForwarded: AugmentedError<ApiType>;
      /**
       * Invalid combination of flags supplied to `seal_call` or `seal_delegate_call`.
       **/
      InvalidCallFlags: AugmentedError<ApiType>;
      /**
       * Invalid schedule supplied, e.g. with zero weight of a basic operation.
       **/
      InvalidSchedule: AugmentedError<ApiType>;
      /**
       * Performing a call was denied because the calling depth reached the limit
       * of what is specified in the schedule.
       **/
      MaxCallDepthReached: AugmentedError<ApiType>;
      /**
       * The contract has reached its maximum number of delegate dependencies.
       **/
      MaxDelegateDependenciesReached: AugmentedError<ApiType>;
      /**
       * A pending migration needs to complete before the extrinsic can be called.
       **/
      MigrationInProgress: AugmentedError<ApiType>;
      /**
       * The chain does not provide a chain extension. Calling the chain extension results
       * in this error. Note that this usually  shouldn't happen as deploying such contracts
       * is rejected.
       **/
      NoChainExtension: AugmentedError<ApiType>;
      /**
       * Migrate dispatch call was attempted but no migration was performed.
       **/
      NoMigrationPerformed: AugmentedError<ApiType>;
      /**
       * A buffer outside of sandbox memory was passed to a contract API function.
       **/
      OutOfBounds: AugmentedError<ApiType>;
      /**
       * The executed contract exhausted its gas limit.
       **/
      OutOfGas: AugmentedError<ApiType>;
      /**
       * The output buffer supplied to a contract API call was too small.
       **/
      OutputBufferTooSmall: AugmentedError<ApiType>;
      /**
       * The subject passed to `seal_random` exceeds the limit.
       **/
      RandomSubjectTooLong: AugmentedError<ApiType>;
      /**
       * A call tried to invoke a contract that is flagged as non-reentrant.
       * The only other cause is that a call from a contract into the runtime tried to call back
       * into `pallet-contracts`. This would make the whole pallet reentrant with regard to
       * contract code execution which is not supported.
       **/
      ReentranceDenied: AugmentedError<ApiType>;
      /**
       * More storage was created than allowed by the storage deposit limit.
       **/
      StorageDepositLimitExhausted: AugmentedError<ApiType>;
      /**
       * Origin doesn't have enough balance to pay the required storage deposits.
       **/
      StorageDepositNotEnoughFunds: AugmentedError<ApiType>;
      /**
       * A contract self destructed in its constructor.
       * 
       * This can be triggered by a call to `seal_terminate`.
       **/
      TerminatedInConstructor: AugmentedError<ApiType>;
      /**
       * Termination of a contract is not allowed while the contract is already
       * on the call stack. Can be triggered by `seal_terminate`.
       **/
      TerminatedWhileReentrant: AugmentedError<ApiType>;
      /**
       * The amount of topics passed to `seal_deposit_events` exceeds the limit.
       **/
      TooManyTopics: AugmentedError<ApiType>;
      /**
       * Performing the requested transfer failed. Probably because there isn't enough
       * free balance in the sender's account.
       **/
      TransferFailed: AugmentedError<ApiType>;
      /**
       * The size defined in `T::MaxValueSize` was exceeded.
       **/
      ValueTooLarge: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    council: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    cumulusXcm: {
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currencies: {
      /**
       * Unable to convert the Amount type into Balance.
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * Balance is too low.
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Deposit result is not expected
       **/
      DepositFailed: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    currency: {
      AssetConversionError: AugmentedError<ApiType>;
      BalanceConversionError: AugmentedError<ApiType>;
      CompatibleRoundingFailed: AugmentedError<ApiType>;
      IncompatibleAmount: AugmentedError<ApiType>;
      InvalidCurrency: AugmentedError<ApiType>;
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    democracy: {
      /**
       * Cannot cancel the same proposal twice
       **/
      AlreadyCanceled: AugmentedError<ApiType>;
      /**
       * The account is already delegating.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * Identity may not veto a proposal twice
       **/
      AlreadyVetoed: AugmentedError<ApiType>;
      /**
       * Proposal already made
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * The instant referendum origin is currently disallowed.
       **/
      InstantNotAllowed: AugmentedError<ApiType>;
      /**
       * Too high a balance was provided that the account cannot afford.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Invalid hash
       **/
      InvalidHash: AugmentedError<ApiType>;
      /**
       * Maximum number of votes reached.
       **/
      MaxVotesReached: AugmentedError<ApiType>;
      /**
       * No proposals waiting
       **/
      NoneWaiting: AugmentedError<ApiType>;
      /**
       * Delegation to oneself makes no sense.
       **/
      Nonsense: AugmentedError<ApiType>;
      /**
       * The actor has no permission to conduct the action.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * No external proposal
       **/
      NoProposal: AugmentedError<ApiType>;
      /**
       * The account is not currently delegating.
       **/
      NotDelegating: AugmentedError<ApiType>;
      /**
       * Next external proposal not simple majority
       **/
      NotSimpleMajority: AugmentedError<ApiType>;
      /**
       * The given account did not vote on the referendum.
       **/
      NotVoter: AugmentedError<ApiType>;
      /**
       * The preimage does not exist.
       **/
      PreimageNotExist: AugmentedError<ApiType>;
      /**
       * Proposal still blacklisted
       **/
      ProposalBlacklisted: AugmentedError<ApiType>;
      /**
       * Proposal does not exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * Vote given for invalid referendum
       **/
      ReferendumInvalid: AugmentedError<ApiType>;
      /**
       * Maximum number of items reached.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Value too low
       **/
      ValueLow: AugmentedError<ApiType>;
      /**
       * The account currently has votes attached to it and the operation cannot succeed until
       * these are removed, either through `unvote` or `reap_vote`.
       **/
      VotesExist: AugmentedError<ApiType>;
      /**
       * Voting period too low
       **/
      VotingPeriodLow: AugmentedError<ApiType>;
      /**
       * Invalid upper bound.
       **/
      WrongUpperBound: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    diaOracleModule: {
      /**
       * BadOrigin
       **/
      BadOrigin: AugmentedError<ApiType>;
      /**
       * Failed Deserializing
       **/
      DeserializeError: AugmentedError<ApiType>;
      /**
       * Failed Deserializing to str
       **/
      DeserializeStrError: AugmentedError<ApiType>;
      /**
       * Failed to send signed Transaction
       **/
      FailedSignedTransaction: AugmentedError<ApiType>;
      /**
       * Http request to Batching Server Failed
       **/
      HttpRequestFailed: AugmentedError<ApiType>;
      /**
       * Sending Http request to Batching Server Failed
       **/
      HttpRequestSendFailed: AugmentedError<ApiType>;
      /**
       * Batching Api Endpoint not set.
       **/
      NoBatchingApiEndPoint: AugmentedError<ApiType>;
      /**
       * Error is returned if no information is available about given coin
       **/
      NoCoinInfoAvailable: AugmentedError<ApiType>;
      /**
       * AccountId is not authorized
       **/
      ThisAccountIdIsNotAuthorized: AugmentedError<ApiType>;
      /**
       * User cannot deauthorized themself
       **/
      UserUnableToDeauthorizeThemself: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    dmpQueue: {
      /**
       * The amount of weight given is possibly not enough for executing the message.
       **/
      OverLimit: AugmentedError<ApiType>;
      /**
       * The message index given is unknown.
       **/
      Unknown: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    farming: {
      /**
       * claim_limit_time exceeded
       **/
      CanNotClaim: AugmentedError<ApiType>;
      CanNotDeposit: AugmentedError<ApiType>;
      GaugeInfoNotExist: AugmentedError<ApiType>;
      /**
       * gauge pool max_block exceeded
       **/
      GaugeMaxBlockOverflow: AugmentedError<ApiType>;
      GaugePoolNotExist: AugmentedError<ApiType>;
      InvalidPoolState: AugmentedError<ApiType>;
      LastGaugeNotClaim: AugmentedError<ApiType>;
      NobodyVoting: AugmentedError<ApiType>;
      NotInWhitelist: AugmentedError<ApiType>;
      NotNullable: AugmentedError<ApiType>;
      PercentOverflow: AugmentedError<ApiType>;
      PoolDoesNotExist: AugmentedError<ApiType>;
      PoolNotCleared: AugmentedError<ApiType>;
      RoundLengthNotSet: AugmentedError<ApiType>;
      RoundNotOver: AugmentedError<ApiType>;
      ShareInfoNotExists: AugmentedError<ApiType>;
      WhitelistEmpty: AugmentedError<ApiType>;
      WhitelistLimitExceeded: AugmentedError<ApiType>;
      /**
       * withdraw_limit_time exceeded
       **/
      WithdrawLimitCountExceeded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    fee: {
      /**
       * Value exceeds the expected upper bound for storage fields in this pallet.
       **/
      AboveMaxExpectedValue: AugmentedError<ApiType>;
      Overflow: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    identity: {
      /**
       * Account ID is already named.
       **/
      AlreadyClaimed: AugmentedError<ApiType>;
      /**
       * Empty index.
       **/
      EmptyIndex: AugmentedError<ApiType>;
      /**
       * Fee is changed.
       **/
      FeeChanged: AugmentedError<ApiType>;
      /**
       * The index is invalid.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Invalid judgement.
       **/
      InvalidJudgement: AugmentedError<ApiType>;
      /**
       * The target is invalid.
       **/
      InvalidTarget: AugmentedError<ApiType>;
      /**
       * The provided judgement was for a different identity.
       **/
      JudgementForDifferentIdentity: AugmentedError<ApiType>;
      /**
       * Judgement given.
       **/
      JudgementGiven: AugmentedError<ApiType>;
      /**
       * Error that occurs when there is an issue paying for judgement.
       **/
      JudgementPaymentFailed: AugmentedError<ApiType>;
      /**
       * No identity found.
       **/
      NoIdentity: AugmentedError<ApiType>;
      /**
       * Account isn't found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Account isn't named.
       **/
      NotNamed: AugmentedError<ApiType>;
      /**
       * Sub-account isn't owned by sender.
       **/
      NotOwned: AugmentedError<ApiType>;
      /**
       * Sender is not a sub-account.
       **/
      NotSub: AugmentedError<ApiType>;
      /**
       * Sticky judgement.
       **/
      StickyJudgement: AugmentedError<ApiType>;
      /**
       * Too many additional fields.
       **/
      TooManyFields: AugmentedError<ApiType>;
      /**
       * Maximum amount of registrars reached. Cannot add any more.
       **/
      TooManyRegistrars: AugmentedError<ApiType>;
      /**
       * Too many subs-accounts.
       **/
      TooManySubAccounts: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    issue: {
      /**
       * Issue amount is too small.
       **/
      AmountBelowMinimumTransferAmount: AugmentedError<ApiType>;
      /**
       * Exceeds the volume limit for an issue request.
       **/
      ExceedLimitVolumeForIssueRequest: AugmentedError<ApiType>;
      /**
       * Not expected origin.
       **/
      InvalidExecutor: AugmentedError<ApiType>;
      /**
       * Issue request already cancelled.
       **/
      IssueCancelled: AugmentedError<ApiType>;
      /**
       * Issue request already completed.
       **/
      IssueCompleted: AugmentedError<ApiType>;
      /**
       * Issue request not found.
       **/
      IssueIdNotFound: AugmentedError<ApiType>;
      /**
       * Issue request has not expired.
       **/
      TimeNotExpired: AugmentedError<ApiType>;
      /**
       * Vault is not active.
       **/
      VaultNotAcceptingNewIssues: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    multisig: {
      /**
       * Call is already approved by this signatory.
       **/
      AlreadyApproved: AugmentedError<ApiType>;
      /**
       * The data to be stored is already stored.
       **/
      AlreadyStored: AugmentedError<ApiType>;
      /**
       * The maximum weight information provided was too low.
       **/
      MaxWeightTooLow: AugmentedError<ApiType>;
      /**
       * Threshold must be 2 or greater.
       **/
      MinimumThreshold: AugmentedError<ApiType>;
      /**
       * Call doesn't need any (more) approvals.
       **/
      NoApprovalsNeeded: AugmentedError<ApiType>;
      /**
       * Multisig operation not found when attempting to cancel.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * No timepoint was given, yet the multisig operation is already underway.
       **/
      NoTimepoint: AugmentedError<ApiType>;
      /**
       * Only the account that originally created the multisig is able to cancel it.
       **/
      NotOwner: AugmentedError<ApiType>;
      /**
       * The sender was contained in the other signatories; it shouldn't be.
       **/
      SenderInSignatories: AugmentedError<ApiType>;
      /**
       * The signatories were provided out of order; they should be ordered.
       **/
      SignatoriesOutOfOrder: AugmentedError<ApiType>;
      /**
       * There are too few signatories in the list.
       **/
      TooFewSignatories: AugmentedError<ApiType>;
      /**
       * There are too many signatories in the list.
       **/
      TooManySignatories: AugmentedError<ApiType>;
      /**
       * A timepoint was given, yet no multisig operation is underway.
       **/
      UnexpectedTimepoint: AugmentedError<ApiType>;
      /**
       * A different timepoint was given to the multisig operation that is underway.
       **/
      WrongTimepoint: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    nomination: {
      /**
       * Account cannot withdraw.
       **/
      CannotWithdrawCollateral: AugmentedError<ApiType>;
      /**
       * Vault cannot withdraw.
       **/
      CollateralizationTooLow: AugmentedError<ApiType>;
      /**
       * Nomination would overburden Vault.
       **/
      DepositViolatesMaxNominationRatio: AugmentedError<ApiType>;
      /**
       * Vault has already enabled nomination.
       **/
      VaultAlreadyOptedInToNomination: AugmentedError<ApiType>;
      /**
       * Nomination is not enabled.
       **/
      VaultNominationDisabled: AugmentedError<ApiType>;
      /**
       * Vault not found.
       **/
      VaultNotFound: AugmentedError<ApiType>;
      /**
       * Vault has not enabled nomination.
       **/
      VaultNotOptedInToNomination: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    oracle: {
      /**
       * Not authorized to set exchange rate
       **/
      InvalidOracleSource: AugmentedError<ApiType>;
      /**
       * Exchange rate not specified or has expired
       **/
      MissingExchangeRate: AugmentedError<ApiType>;
      /**
       * Unable to convert value
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    ormlExtension: {
      /**
       * Trying to register a new currency when id is in use
       **/
      AlreadyCreated: AugmentedError<ApiType>;
      /**
       * Insuficient balance to make the creation deposit
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * No permission to call the operation
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Currency has not been created
       **/
      NotCreated: AugmentedError<ApiType>;
      /**
       * Trying to register a currency variant that is not ownable
       **/
      NotOwnableCurrency: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainStaking: {
      /**
       * The delegator has already previously delegated the collator
       * candidate.
       **/
      AlreadyDelegatedCollator: AugmentedError<ApiType>;
      /**
       * The account is already delegating the collator candidate.
       **/
      AlreadyDelegating: AugmentedError<ApiType>;
      /**
       * The collator candidate has already trigger the process to leave the
       * set of collator candidates.
       **/
      AlreadyLeaving: AugmentedError<ApiType>;
      /**
       * The account is already part of the collator candidates set.
       **/
      CandidateExists: AugmentedError<ApiType>;
      /**
       * The account is not part of the collator candidates set.
       **/
      CandidateNotFound: AugmentedError<ApiType>;
      /**
       * The collator candidate is in the process of leaving the set of
       * candidates and thus cannot be delegated to.
       **/
      CannotDelegateIfLeaving: AugmentedError<ApiType>;
      /**
       * The account has a full list of unstaking requests and needs to
       * unlock at least one of these before being able to join (again).
       * NOTE: Can only happen if the account was a candidate or
       * delegator before and either got kicked or exited voluntarily.
       **/
      CannotJoinBeforeUnlocking: AugmentedError<ApiType>;
      /**
       * The collator tried to leave before waiting at least for
       * `ExitQueueDelay` many rounds.
       **/
      CannotLeaveYet: AugmentedError<ApiType>;
      /**
       * The number of selected candidates per staking round is
       * above the maximum value allowed.
       **/
      CannotSetAboveMax: AugmentedError<ApiType>;
      /**
       * The number of selected candidates per staking round is
       * below the minimum value allowed.
       **/
      CannotSetBelowMin: AugmentedError<ApiType>;
      /**
       * The collator candidate is in the process of leaving the set of
       * candidates and cannot perform any other actions in the meantime.
       **/
      CannotStakeIfLeaving: AugmentedError<ApiType>;
      /**
       * The account has not staked enough funds to delegate a collator
       * candidate.
       **/
      DelegationBelowMin: AugmentedError<ApiType>;
      /**
       * The given delegation does not exist in the set of delegations.
       **/
      DelegationNotFound: AugmentedError<ApiType>;
      /**
       * The delegator has exceeded the number of delegations per round which
       * is equal to MaxDelegatorsPerCollator.
       * 
       * This protects against attacks in which a delegator can re-delegate
       * from a collator who has already authored a block, to another one
       * which has not in this round.
       **/
      DelegationsPerRoundExceeded: AugmentedError<ApiType>;
      /**
       * The account is already part of the delegators set.
       **/
      DelegatorExists: AugmentedError<ApiType>;
      /**
       * The account is not part of the delegators set.
       **/
      DelegatorNotFound: AugmentedError<ApiType>;
      /**
       * An invalid inflation configuration is trying to be set.
       **/
      InvalidSchedule: AugmentedError<ApiType>;
      /**
       * The delegator has already delegated the maximum number of candidates
       * allowed.
       **/
      MaxCollatorsPerDelegatorExceeded: AugmentedError<ApiType>;
      /**
       * The staking reward being unlocked does not exist.
       * Max unlocking requests reached.
       **/
      NoMoreUnstaking: AugmentedError<ApiType>;
      /**
       * The collator candidate wanted to execute the exit but has not
       * requested to leave before by calling `init_leave_candidates`.
       **/
      NotLeaving: AugmentedError<ApiType>;
      /**
       * The account has not delegated any collator candidate yet, hence it
       * is not in the set of delegators.
       **/
      NotYetDelegating: AugmentedError<ApiType>;
      /**
       * Cannot claim rewards if empty.
       **/
      RewardsNotFound: AugmentedError<ApiType>;
      /**
       * Provided staked value is zero. Should never be thrown.
       **/
      StakeNotFound: AugmentedError<ApiType>;
      /**
       * The reward rate cannot be adjusted yet as an entire year has not
       * passed.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * The set of collator candidates would fall below the required minimum
       * if the collator left.
       **/
      TooFewCollatorCandidates: AugmentedError<ApiType>;
      /**
       * The collator candidate has already reached the maximum number of
       * delegators.
       * 
       * This error is generated in case a new delegation request does not
       * stake enough funds to replace some other existing delegation.
       **/
      TooManyDelegators: AugmentedError<ApiType>;
      /**
       * The collator delegate or the delegator is trying to un-stake more
       * funds that are currently staked.
       **/
      Underflow: AugmentedError<ApiType>;
      /**
       * Cannot unlock when Unstaked is empty.
       **/
      UnstakingIsEmpty: AugmentedError<ApiType>;
      /**
       * The account has already staked the maximum amount of funds possible.
       **/
      ValStakeAboveMax: AugmentedError<ApiType>;
      /**
       * The account has not staked enough funds to be added to the collator
       * candidates set.
       **/
      ValStakeBelowMin: AugmentedError<ApiType>;
      /**
       * The account tried to stake more or less with amount zero.
       **/
      ValStakeZero: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    parachainSystem: {
      /**
       * The inherent which supplies the host configuration did not run this block.
       **/
      HostConfigurationNotAvailable: AugmentedError<ApiType>;
      /**
       * No code upgrade has been authorized.
       **/
      NothingAuthorized: AugmentedError<ApiType>;
      /**
       * No validation function upgrade is currently scheduled.
       **/
      NotScheduled: AugmentedError<ApiType>;
      /**
       * Attempt to upgrade validation function while existing upgrade pending.
       **/
      OverlappingUpgrades: AugmentedError<ApiType>;
      /**
       * Polkadot currently prohibits this parachain from upgrading its validation function.
       **/
      ProhibitedByPolkadot: AugmentedError<ApiType>;
      /**
       * The supplied validation function has compiled into a blob larger than Polkadot is
       * willing to run.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * The given code upgrade has not been authorized.
       **/
      Unauthorized: AugmentedError<ApiType>;
      /**
       * The inherent which supplies the validation data did not run this block.
       **/
      ValidationDataNotAvailable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    polkadotXcm: {
      /**
       * The given account is not an identifiable sovereign account for any location.
       **/
      AccountNotSovereign: AugmentedError<ApiType>;
      /**
       * The location is invalid since it already has a subscription from us.
       **/
      AlreadySubscribed: AugmentedError<ApiType>;
      /**
       * The given location could not be used (e.g. because it cannot be expressed in the
       * desired version of XCM).
       **/
      BadLocation: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * The assets to be sent are empty.
       **/
      Empty: AugmentedError<ApiType>;
      /**
       * The operation required fees to be paid which the initiator could not meet.
       **/
      FeesNotMet: AugmentedError<ApiType>;
      /**
       * The message execution fails the filter.
       **/
      Filtered: AugmentedError<ApiType>;
      /**
       * The unlock operation cannot succeed because there are still consumers of the lock.
       **/
      InUse: AugmentedError<ApiType>;
      /**
       * Invalid asset for the operation.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Origin is invalid for sending.
       **/
      InvalidOrigin: AugmentedError<ApiType>;
      /**
       * A remote lock with the corresponding data could not be found.
       **/
      LockNotFound: AugmentedError<ApiType>;
      /**
       * The owner does not own (all) of the asset that they wish to do the operation on.
       **/
      LowBalance: AugmentedError<ApiType>;
      /**
       * The referenced subscription could not be found.
       **/
      NoSubscription: AugmentedError<ApiType>;
      /**
       * There was some other issue (i.e. not to do with routing) in sending the message.
       * Perhaps a lack of space for buffering the message.
       **/
      SendFailure: AugmentedError<ApiType>;
      /**
       * Too many assets have been attempted for transfer.
       **/
      TooManyAssets: AugmentedError<ApiType>;
      /**
       * The asset owner has too many locks on the asset.
       **/
      TooManyLocks: AugmentedError<ApiType>;
      /**
       * The desired destination was unreachable, generally because there is a no way of routing
       * to it.
       **/
      Unreachable: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    pooledVaultRewards: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Maximum rewards currencies reached.
       **/
      MaxRewardCurrencies: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Cannot distribute rewards without stake.
       **/
      ZeroTotalStake: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    preimage: {
      /**
       * Preimage has already been noted on-chain.
       **/
      AlreadyNoted: AugmentedError<ApiType>;
      /**
       * The user is not authorized to perform this action.
       **/
      NotAuthorized: AugmentedError<ApiType>;
      /**
       * The preimage cannot be removed since it has not yet been noted.
       **/
      NotNoted: AugmentedError<ApiType>;
      /**
       * The preimage request cannot be removed since no outstanding requests exist.
       **/
      NotRequested: AugmentedError<ApiType>;
      /**
       * A preimage may not be removed when there are outstanding requests.
       **/
      Requested: AugmentedError<ApiType>;
      /**
       * Preimage is too large to store on-chain.
       **/
      TooBig: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    proxy: {
      /**
       * Account is already a proxy.
       **/
      Duplicate: AugmentedError<ApiType>;
      /**
       * Call may not be made by proxy because it may escalate its privileges.
       **/
      NoPermission: AugmentedError<ApiType>;
      /**
       * Cannot add self as proxy.
       **/
      NoSelfProxy: AugmentedError<ApiType>;
      /**
       * Proxy registration not found.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Sender is not a proxy of the account to be proxied.
       **/
      NotProxy: AugmentedError<ApiType>;
      /**
       * There are too many proxies registered or too many announcements pending.
       **/
      TooMany: AugmentedError<ApiType>;
      /**
       * Announcement, if made at all, was made too recently.
       **/
      Unannounced: AugmentedError<ApiType>;
      /**
       * A call which is incompatible with the proxy type's filter was attempted.
       **/
      Unproxyable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    redeem: {
      /**
       * Redeem amount is too small.
       **/
      AmountBelowMinimumTransferAmount: AugmentedError<ApiType>;
      /**
       * Account has insufficient balance.
       **/
      AmountExceedsUserBalance: AugmentedError<ApiType>;
      /**
       * Exceeds the volume limit for a redeem request.
       **/
      ExceedLimitVolumeForRedeemRequest: AugmentedError<ApiType>;
      /**
       * Invalid payment amount
       **/
      InvalidPaymentAmount: AugmentedError<ApiType>;
      /**
       * Redeem request already cancelled.
       **/
      RedeemCancelled: AugmentedError<ApiType>;
      /**
       * Redeem request already completed.
       **/
      RedeemCompleted: AugmentedError<ApiType>;
      /**
       * Redeem request not found.
       **/
      RedeemIdNotFound: AugmentedError<ApiType>;
      /**
       * Redeem request has not expired.
       **/
      TimeNotExpired: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Unexpected redeem account.
       **/
      UnauthorizedRedeemer: AugmentedError<ApiType>;
      /**
       * Unexpected vault account.
       **/
      UnauthorizedVault: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    replace: {
      /**
       * Replace amount is too small.
       **/
      AmountBelowDustAmount: AugmentedError<ApiType>;
      /**
       * Invalid payment amount
       **/
      InvalidPaymentAmount: AugmentedError<ApiType>;
      /**
       * Vault cannot replace different currency.
       **/
      InvalidWrappedCurrency: AugmentedError<ApiType>;
      /**
       * No replace request found.
       **/
      NoPendingRequest: AugmentedError<ApiType>;
      /**
       * Replace requires non-zero increase.
       **/
      ReplaceAmountZero: AugmentedError<ApiType>;
      /**
       * Replace request already cancelled.
       **/
      ReplaceCancelled: AugmentedError<ApiType>;
      /**
       * Replace request already completed.
       **/
      ReplaceCompleted: AugmentedError<ApiType>;
      /**
       * Replace request not found.
       **/
      ReplaceIdNotFound: AugmentedError<ApiType>;
      /**
       * Replace request has not expired.
       **/
      ReplacePeriodNotExpired: AugmentedError<ApiType>;
      /**
       * Cannot replace self.
       **/
      ReplaceSelfNotAllowed: AugmentedError<ApiType>;
      /**
       * Unexpected vault account.
       **/
      UnauthorizedVault: AugmentedError<ApiType>;
      /**
       * Cannot replace with nominated collateral.
       **/
      VaultHasEnabledNomination: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    rewardDistribution: {
      /**
       * If the amount to collect is less than existential deposit
       **/
      CollectAmountTooSmall: AugmentedError<ApiType>;
      /**
       * If distribution logic reaches an inconsistency with the amount of currencies in the
       * system
       **/
      InconsistentRewardCurrencies: AugmentedError<ApiType>;
      /**
       * Origin attempt to withdraw with 0 rewards
       **/
      NoRewardsForAccount: AugmentedError<ApiType>;
      /**
       * Amount to be minted is more than total rewarded
       **/
      NotEnoughRewardsRegistered: AugmentedError<ApiType>;
      /**
       * Overflow
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Underflow
       **/
      Underflow: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    scheduler: {
      /**
       * Failed to schedule a call
       **/
      FailedToSchedule: AugmentedError<ApiType>;
      /**
       * Attempt to use a non-named function on a named task.
       **/
      Named: AugmentedError<ApiType>;
      /**
       * Cannot find the scheduled call.
       **/
      NotFound: AugmentedError<ApiType>;
      /**
       * Reschedule failed because it does not change scheduled time.
       **/
      RescheduleNoChange: AugmentedError<ApiType>;
      /**
       * Given target block number is in the past.
       **/
      TargetBlockNumberInPast: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    security: {
      /**
       * Parachain is not running.
       **/
      ParachainNotRunning: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    session: {
      /**
       * Registered duplicate key.
       **/
      DuplicatedKey: AugmentedError<ApiType>;
      /**
       * Invalid ownership proof.
       **/
      InvalidProof: AugmentedError<ApiType>;
      /**
       * Key setting account is not live, so it's impossible to associate keys.
       **/
      NoAccount: AugmentedError<ApiType>;
      /**
       * No associated validator ID for account.
       **/
      NoAssociatedValidatorId: AugmentedError<ApiType>;
      /**
       * No keys are associated with this account.
       **/
      NoKeys: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    stellarRelay: {
      Base64DecodeError: AugmentedError<ApiType>;
      BoundedVecCreationFailed: AugmentedError<ApiType>;
      DuplicateOrganizationId: AugmentedError<ApiType>;
      DuplicateValidatorPublicKey: AugmentedError<ApiType>;
      EmptyEnvelopeSet: AugmentedError<ApiType>;
      EnvelopeSlotIndexMismatch: AugmentedError<ApiType>;
      ExternalizedNHMismatch: AugmentedError<ApiType>;
      ExternalizedValueMismatch: AugmentedError<ApiType>;
      FailedToComputeNonGenericTxSetContentHash: AugmentedError<ApiType>;
      InvalidEnvelopeSignature: AugmentedError<ApiType>;
      InvalidQuorumSetNotEnoughOrganizations: AugmentedError<ApiType>;
      InvalidQuorumSetNotEnoughValidators: AugmentedError<ApiType>;
      InvalidScpPledge: AugmentedError<ApiType>;
      InvalidTransactionSetPrefix: AugmentedError<ApiType>;
      InvalidXDR: AugmentedError<ApiType>;
      MissingExternalizedMessage: AugmentedError<ApiType>;
      NoOrganizationsRegistered: AugmentedError<ApiType>;
      NoValidatorsRegistered: AugmentedError<ApiType>;
      OrganizationLimitExceeded: AugmentedError<ApiType>;
      SlotIndexIsNone: AugmentedError<ApiType>;
      TransactionMemoDoesNotMatch: AugmentedError<ApiType>;
      TransactionNotInTransactionSet: AugmentedError<ApiType>;
      TransactionSetHashCreationFailed: AugmentedError<ApiType>;
      TransactionSetHashMismatch: AugmentedError<ApiType>;
      ValidatorLimitExceeded: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    sudo: {
      /**
       * Sender must be the Sudo account
       **/
      RequireSudo: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    system: {
      /**
       * The origin filter prevent the call to be dispatched.
       **/
      CallFiltered: AugmentedError<ApiType>;
      /**
       * Failed to extract the runtime version from the new runtime.
       * 
       * Either calling `Core_version` or decoding `RuntimeVersion` failed.
       **/
      FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
      /**
       * The name of specification does not match between the current runtime
       * and the new runtime.
       **/
      InvalidSpecName: AugmentedError<ApiType>;
      /**
       * Suicide called when the account has non-default composite data.
       **/
      NonDefaultComposite: AugmentedError<ApiType>;
      /**
       * There is a non-zero reference count preventing the account from being purged.
       **/
      NonZeroRefCount: AugmentedError<ApiType>;
      /**
       * The specification version is not allowed to decrease between the current runtime
       * and the new runtime.
       **/
      SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    technicalCommittee: {
      /**
       * Members are already initialized!
       **/
      AlreadyInitialized: AugmentedError<ApiType>;
      /**
       * Duplicate proposals not allowed
       **/
      DuplicateProposal: AugmentedError<ApiType>;
      /**
       * Duplicate vote ignored
       **/
      DuplicateVote: AugmentedError<ApiType>;
      /**
       * Account is not a member
       **/
      NotMember: AugmentedError<ApiType>;
      /**
       * Prime account is not a member
       **/
      PrimeAccountNotMember: AugmentedError<ApiType>;
      /**
       * Proposal must exist
       **/
      ProposalMissing: AugmentedError<ApiType>;
      /**
       * The close call was made too early, before the end of the voting.
       **/
      TooEarly: AugmentedError<ApiType>;
      /**
       * There can only be a maximum of `MaxProposals` active proposals.
       **/
      TooManyProposals: AugmentedError<ApiType>;
      /**
       * Mismatched index
       **/
      WrongIndex: AugmentedError<ApiType>;
      /**
       * The given length bound for the proposal was too low.
       **/
      WrongProposalLength: AugmentedError<ApiType>;
      /**
       * The given weight bound for the proposal was too low.
       **/
      WrongProposalWeight: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokenAllowance: {
      CurrencyNotLive: AugmentedError<ApiType>;
      ExceedsNumberOfAllowedCurrencies: AugmentedError<ApiType>;
      Unapproved: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    tokens: {
      /**
       * Cannot convert Amount into Balance type
       **/
      AmountIntoBalanceFailed: AugmentedError<ApiType>;
      /**
       * The balance is too low
       **/
      BalanceTooLow: AugmentedError<ApiType>;
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Failed because liquidity restrictions due to locking
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Failed because the maximum locks was exceeded
       **/
      MaxLocksExceeded: AugmentedError<ApiType>;
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasury: {
      /**
       * The spend origin is valid but the amount it is allowed to spend is lower than the
       * amount to be spent.
       **/
      InsufficientPermission: AugmentedError<ApiType>;
      /**
       * Proposer's balance is too low.
       **/
      InsufficientProposersBalance: AugmentedError<ApiType>;
      /**
       * No proposal or bounty at that index.
       **/
      InvalidIndex: AugmentedError<ApiType>;
      /**
       * Proposal has not been approved.
       **/
      ProposalNotApproved: AugmentedError<ApiType>;
      /**
       * Too many approvals in the queue.
       **/
      TooManyApprovals: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    treasuryBuyoutExtension: {
      /**
       * Buyout limit exceeded for the current period
       **/
      BuyoutLimitExceeded: AugmentedError<ApiType>;
      /**
       * Attempt to use treasury account for buyout
       **/
      BuyoutWithTreasuryAccount: AugmentedError<ApiType>;
      /**
       * Decimals conversion error
       **/
      DecimalsConversionError: AugmentedError<ApiType>;
      /**
       * Exceeds number of allowed currencies for buyout
       **/
      ExceedsNumberOfAllowedCurrencies: AugmentedError<ApiType>;
      /**
       * Exchange failed
       **/
      ExchangeFailure: AugmentedError<ApiType>;
      /**
       * The account balance is too low for an operation
       **/
      InsufficientAccountBalance: AugmentedError<ApiType>;
      /**
       * The treasury balance is too low for an operation
       **/
      InsufficientTreasuryBalance: AugmentedError<ApiType>;
      /**
       * Less than minimum amoount allowed for buyout
       **/
      LessThanMinBuyoutAmount: AugmentedError<ApiType>;
      /**
       * Attempt to add native token to allowed assets
       **/
      NativeTokenNotAllowed: AugmentedError<ApiType>;
      /**
       * One of transacted currencies is missing price information
       **/
      NoPrice: AugmentedError<ApiType>;
      /**
       * Storage clearing of `AllowedCurrencies` failed
       **/
      StorageClearingFailure: AugmentedError<ApiType>;
      /**
       * Attempt to exchange native token to native token
       **/
      WrongAssetToBuyout: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    utility: {
      /**
       * Too many calls batched.
       **/
      TooManyCalls: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vaultRegistry: {
      /**
       * Ceiling was not found for the given currency
       **/
      CeilingNotSet: AugmentedError<ApiType>;
      /**
       * The collateral ceiling would be exceeded for the vault's currency.
       **/
      CurrencyCeilingExceeded: AugmentedError<ApiType>;
      /**
       * The amount of tokens to be issued is higher than the issuable amount by the vault
       **/
      ExceedingVaultLimit: AugmentedError<ApiType>;
      /**
       * Threshold was not found for the given currency
       **/
      GlobalThresholdNotSet: AugmentedError<ApiType>;
      /**
       * Not enough free collateral available.
       **/
      InsufficientCollateral: AugmentedError<ApiType>;
      /**
       * The requested amount of tokens exceeds the amount available to this vault.
       **/
      InsufficientTokensCommitted: AugmentedError<ApiType>;
      /**
       * The provided collateral was insufficient - it must be above ``MinimumCollateralVault``.
       **/
      InsufficientVaultCollateralAmount: AugmentedError<ApiType>;
      /**
       * Failed attempt to modify vault's collateral because it was in the wrong currency
       **/
      InvalidCurrency: AugmentedError<ApiType>;
      /**
       * Deposit address could not be generated with the given public key.
       **/
      InvalidPublicKey: AugmentedError<ApiType>;
      /**
       * Threshold was not found for the given currency
       **/
      LiquidationCollateralThresholdNotSet: AugmentedError<ApiType>;
      /**
       * The Max Nomination Ratio would be exceeded.
       **/
      MaxNominationRatioViolation: AugmentedError<ApiType>;
      MinimumCollateralNotSet: AugmentedError<ApiType>;
      /**
       * No Stellar public key is registered for the vault.
       **/
      NoStellarPublicKey: AugmentedError<ApiType>;
      /**
       * Collateralization is infinite if no tokens are issued
       **/
      NoTokensIssued: AugmentedError<ApiType>;
      NoVaultUnderThePremiumRedeemThreshold: AugmentedError<ApiType>;
      NoVaultWithSufficientCollateral: AugmentedError<ApiType>;
      NoVaultWithSufficientTokens: AugmentedError<ApiType>;
      /**
       * Threshold was not found for the given currency
       **/
      PremiumRedeemThresholdNotSet: AugmentedError<ApiType>;
      /**
       * A Stellar public key was already registered for this account.
       **/
      PublicKeyAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Threshold was not found for the given currency
       **/
      SecureCollateralThresholdNotSet: AugmentedError<ApiType>;
      /**
       * Vault attempted to set secure threshold below the global secure threshold
       **/
      ThresholdNotAboveGlobalThreshold: AugmentedError<ApiType>;
      /**
       * Unable to convert value
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Returned if a vault tries to register while already being registered
       **/
      VaultAlreadyRegistered: AugmentedError<ApiType>;
      /**
       * Action not allowed on banned vault.
       **/
      VaultBanned: AugmentedError<ApiType>;
      /**
       * Vault is no longer usable as it was liquidated due to undercollateralization.
       **/
      VaultLiquidated: AugmentedError<ApiType>;
      /**
       * Vault is not accepting new issue requests.
       **/
      VaultNotAcceptingIssueRequests: AugmentedError<ApiType>;
      /**
       * Attempted to liquidate a vault that is not undercollateralized.
       **/
      VaultNotBelowLiquidationThreshold: AugmentedError<ApiType>;
      /**
       * The specified vault does not exist.
       **/
      VaultNotFound: AugmentedError<ApiType>;
      /**
       * Vault must be liquidated.
       **/
      VaultNotRecoverable: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vaultStaking: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
      /**
       * Max rewards currencies threshold
       **/
      MaxRewardCurrencies: AugmentedError<ApiType>;
      /**
       * Cannot slash zero total stake.
       **/
      SlashZeroTotalStake: AugmentedError<ApiType>;
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    vesting: {
      /**
       * Amount being transferred is too low to create a vesting schedule.
       **/
      AmountLow: AugmentedError<ApiType>;
      /**
       * The account already has `MaxVestingSchedules` count of schedules and thus
       * cannot add another one. Consider merging existing schedules in order to add another.
       **/
      AtMaxVestingSchedules: AugmentedError<ApiType>;
      /**
       * Failed to create a new schedule because some parameter was invalid.
       **/
      InvalidScheduleParams: AugmentedError<ApiType>;
      /**
       * The account given is not vesting.
       **/
      NotVesting: AugmentedError<ApiType>;
      /**
       * An index was out of bounds of the vesting schedules.
       **/
      ScheduleIndexOutOfBounds: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xcmpQueue: {
      /**
       * Bad overweight index.
       **/
      BadOverweightIndex: AugmentedError<ApiType>;
      /**
       * Bad XCM data.
       **/
      BadXcm: AugmentedError<ApiType>;
      /**
       * Bad XCM origin.
       **/
      BadXcmOrigin: AugmentedError<ApiType>;
      /**
       * Failed to send XCM message.
       **/
      FailedToSend: AugmentedError<ApiType>;
      /**
       * Provided weight is possibly not enough to execute the message.
       **/
      WeightOverLimit: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    xTokens: {
      /**
       * Asset has no reserve location.
       **/
      AssetHasNoReserve: AugmentedError<ApiType>;
      /**
       * The specified index does not exist in a MultiAssets struct.
       **/
      AssetIndexNonExistent: AugmentedError<ApiType>;
      /**
       * The version of the `Versioned` value used is not able to be
       * interpreted.
       **/
      BadVersion: AugmentedError<ApiType>;
      /**
       * Could not re-anchor the assets to declare the fees for the
       * destination chain.
       **/
      CannotReanchor: AugmentedError<ApiType>;
      /**
       * The destination `MultiLocation` provided cannot be inverted.
       **/
      DestinationNotInvertible: AugmentedError<ApiType>;
      /**
       * We tried sending distinct asset and fee but they have different
       * reserve chains.
       **/
      DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
      /**
       * Fee is not enough.
       **/
      FeeNotEnough: AugmentedError<ApiType>;
      /**
       * Could not get ancestry of asset reserve location.
       **/
      InvalidAncestry: AugmentedError<ApiType>;
      /**
       * The MultiAsset is invalid.
       **/
      InvalidAsset: AugmentedError<ApiType>;
      /**
       * Invalid transfer destination.
       **/
      InvalidDest: AugmentedError<ApiType>;
      /**
       * MinXcmFee not registered for certain reserve location
       **/
      MinXcmFeeNotDefined: AugmentedError<ApiType>;
      /**
       * Not cross-chain transfer.
       **/
      NotCrossChainTransfer: AugmentedError<ApiType>;
      /**
       * Currency is not cross-chain transferable.
       **/
      NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
      /**
       * Not supported MultiLocation
       **/
      NotSupportedMultiLocation: AugmentedError<ApiType>;
      /**
       * The number of assets to be sent is over the maximum.
       **/
      TooManyAssetsBeingSent: AugmentedError<ApiType>;
      /**
       * The message's weight could not be determined.
       **/
      UnweighableMessage: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      XcmExecutionFailed: AugmentedError<ApiType>;
      /**
       * The transfering asset amount is zero.
       **/
      ZeroAmount: AugmentedError<ApiType>;
      /**
       * The fee is zero.
       **/
      ZeroFee: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    zenlinkProtocol: {
      /**
       * Location given was invalid or unsupported.
       **/
      AccountIdBadLocation: AugmentedError<ApiType>;
      /**
       * Asset does not exist.
       **/
      AssetNotExists: AugmentedError<ApiType>;
      /**
       * Charge bootstrap extrinsic args has error,
       **/
      ChargeRewardParamsError: AugmentedError<ApiType>;
      /**
       * Transaction block number is larger than the end block number.
       **/
      Deadline: AugmentedError<ApiType>;
      /**
       * Trading pair can't be created.
       **/
      DeniedCreatePair: AugmentedError<ApiType>;
      /**
       * Transfer to self by XCM message.
       **/
      DeniedTransferToSelf: AugmentedError<ApiType>;
      /**
       * Bootstrap deny refund
       **/
      DenyRefund: AugmentedError<ApiType>;
      /**
       * Bootstrap is disable
       **/
      DisableBootstrap: AugmentedError<ApiType>;
      /**
       * Sold amount is more than exception.
       **/
      ExcessiveSoldAmount: AugmentedError<ApiType>;
      /**
       * XCM execution failed.
       **/
      ExecutionFailed: AugmentedError<ApiType>;
      /**
       * Exist some reward in bootstrap,
       **/
      ExistRewardsInBootstrap: AugmentedError<ApiType>;
      /**
       * Incorrect foreign amount range.
       **/
      IncorrectAssetAmountRange: AugmentedError<ApiType>;
      /**
       * Account balance must be greater than or equal to the transfer amount.
       **/
      InsufficientAssetBalance: AugmentedError<ApiType>;
      /**
       * Liquidity is not enough.
       **/
      InsufficientLiquidity: AugmentedError<ApiType>;
      /**
       * Trading pair does have enough foreign.
       **/
      InsufficientPairReserve: AugmentedError<ApiType>;
      /**
       * Get target amount is less than exception.
       **/
      InsufficientTargetAmount: AugmentedError<ApiType>;
      /**
       * Amount of contribution is invalid.
       **/
      InvalidContributionAmount: AugmentedError<ApiType>;
      /**
       * Invalid fee_point
       **/
      InvalidFeePoint: AugmentedError<ApiType>;
      /**
       * Can't find pair though trading path.
       **/
      InvalidPath: AugmentedError<ApiType>;
      /**
       * Can't pass the K value check
       **/
      InvariantCheckFailed: AugmentedError<ApiType>;
      /**
       * Account native currency balance must be greater than ExistentialDeposit.
       **/
      NativeBalanceTooLow: AugmentedError<ApiType>;
      /**
       * Reward of bootstrap is not set.
       **/
      NoRewardTokens: AugmentedError<ApiType>;
      /**
       * Pair is not in bootstrap
       **/
      NotInBootstrap: AugmentedError<ApiType>;
      /**
       * Not eligible to contribute
       **/
      NotQualifiedAccount: AugmentedError<ApiType>;
      /**
       * Overflow.
       **/
      Overflow: AugmentedError<ApiType>;
      /**
       * Trading pair already exists.
       **/
      PairAlreadyExists: AugmentedError<ApiType>;
      /**
       * Created pair can't create now
       **/
      PairCreateForbidden: AugmentedError<ApiType>;
      /**
       * Trading pair does not exist.
       **/
      PairNotExists: AugmentedError<ApiType>;
      /**
       * Require the admin who can reset the admin and receiver of the protocol fee.
       **/
      RequireProtocolAdmin: AugmentedError<ApiType>;
      /**
       * Require the admin candidate who can become new admin after confirm.
       **/
      RequireProtocolAdminCandidate: AugmentedError<ApiType>;
      /**
       * Not in ZenlinkRegistedParaChains.
       **/
      TargetChainNotRegistered: AugmentedError<ApiType>;
      /**
       * Amount of contribution is invalid.
       **/
      UnqualifiedBootstrap: AugmentedError<ApiType>;
      /**
       * Unsupported AssetId by this ZenlinkProtocol Version.
       **/
      UnsupportedAssetType: AugmentedError<ApiType>;
      /**
       * Zero contribute in bootstrap
       **/
      ZeroContribute: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
  } // AugmentedErrors
} // declare module
