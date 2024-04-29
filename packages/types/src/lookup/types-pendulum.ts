// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/lookup';

import type { Data } from '@polkadot/types';
import type { BTreeMap, BTreeSet, Bytes, Compact, Enum, Null, Option, Result, Set, Struct, Text, U8aFixed, Vec, bool, i128, u128, u16, u32, u64, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';
import type { Vote } from '@polkadot/types/interfaces/elections';
import type { AccountId32, Call, H256, MultiAddress, Perbill, Percent, Perquintill } from '@polkadot/types/interfaces/runtime';
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
    readonly frozen: u128;
    readonly flags: u128;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeight (8) */
  interface FrameSupportDispatchPerDispatchClassWeight extends Struct {
    readonly normal: SpWeightsWeightV2Weight;
    readonly operational: SpWeightsWeightV2Weight;
    readonly mandatory: SpWeightsWeightV2Weight;
  }

  /** @name SpWeightsWeightV2Weight (9) */
  interface SpWeightsWeightV2Weight extends Struct {
    readonly refTime: Compact<u64>;
    readonly proofSize: Compact<u64>;
  }

  /** @name SpRuntimeDigest (14) */
  interface SpRuntimeDigest extends Struct {
    readonly logs: Vec<SpRuntimeDigestDigestItem>;
  }

  /** @name SpRuntimeDigestDigestItem (16) */
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

  /** @name FrameSystemEventRecord (19) */
  interface FrameSystemEventRecord extends Struct {
    readonly phase: FrameSystemPhase;
    readonly event: Event;
    readonly topics: Vec<H256>;
  }

  /** @name FrameSystemEvent (21) */
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

  /** @name FrameSupportDispatchDispatchInfo (22) */
  interface FrameSupportDispatchDispatchInfo extends Struct {
    readonly weight: SpWeightsWeightV2Weight;
    readonly class: FrameSupportDispatchDispatchClass;
    readonly paysFee: FrameSupportDispatchPays;
  }

  /** @name FrameSupportDispatchDispatchClass (23) */
  interface FrameSupportDispatchDispatchClass extends Enum {
    readonly isNormal: boolean;
    readonly isOperational: boolean;
    readonly isMandatory: boolean;
    readonly type: 'Normal' | 'Operational' | 'Mandatory';
  }

  /** @name FrameSupportDispatchPays (24) */
  interface FrameSupportDispatchPays extends Enum {
    readonly isYes: boolean;
    readonly isNo: boolean;
    readonly type: 'Yes' | 'No';
  }

  /** @name SpRuntimeDispatchError (25) */
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
    readonly asArithmetic: SpArithmeticArithmeticError;
    readonly isTransactional: boolean;
    readonly asTransactional: SpRuntimeTransactionalError;
    readonly isExhausted: boolean;
    readonly isCorruption: boolean;
    readonly isUnavailable: boolean;
    readonly type: 'Other' | 'CannotLookup' | 'BadOrigin' | 'Module' | 'ConsumerRemaining' | 'NoProviders' | 'TooManyConsumers' | 'Token' | 'Arithmetic' | 'Transactional' | 'Exhausted' | 'Corruption' | 'Unavailable';
  }

  /** @name SpRuntimeModuleError (26) */
  interface SpRuntimeModuleError extends Struct {
    readonly index: u8;
    readonly error: U8aFixed;
  }

  /** @name SpRuntimeTokenError (27) */
  interface SpRuntimeTokenError extends Enum {
    readonly isFundsUnavailable: boolean;
    readonly isOnlyProvider: boolean;
    readonly isBelowMinimum: boolean;
    readonly isCannotCreate: boolean;
    readonly isUnknownAsset: boolean;
    readonly isFrozen: boolean;
    readonly isUnsupported: boolean;
    readonly isCannotCreateHold: boolean;
    readonly isNotExpendable: boolean;
    readonly type: 'FundsUnavailable' | 'OnlyProvider' | 'BelowMinimum' | 'CannotCreate' | 'UnknownAsset' | 'Frozen' | 'Unsupported' | 'CannotCreateHold' | 'NotExpendable';
  }

  /** @name SpArithmeticArithmeticError (28) */
  interface SpArithmeticArithmeticError extends Enum {
    readonly isUnderflow: boolean;
    readonly isOverflow: boolean;
    readonly isDivisionByZero: boolean;
    readonly type: 'Underflow' | 'Overflow' | 'DivisionByZero';
  }

  /** @name SpRuntimeTransactionalError (29) */
  interface SpRuntimeTransactionalError extends Enum {
    readonly isLimitReached: boolean;
    readonly isNoLayer: boolean;
    readonly type: 'LimitReached' | 'NoLayer';
  }

  /** @name CumulusPalletParachainSystemEvent (30) */
  interface CumulusPalletParachainSystemEvent extends Enum {
    readonly isValidationFunctionStored: boolean;
    readonly isValidationFunctionApplied: boolean;
    readonly asValidationFunctionApplied: {
      readonly relayChainBlockNum: u32;
    } & Struct;
    readonly isValidationFunctionDiscarded: boolean;
    readonly isUpgradeAuthorized: boolean;
    readonly asUpgradeAuthorized: {
      readonly codeHash: H256;
    } & Struct;
    readonly isDownwardMessagesReceived: boolean;
    readonly asDownwardMessagesReceived: {
      readonly count: u32;
    } & Struct;
    readonly isDownwardMessagesProcessed: boolean;
    readonly asDownwardMessagesProcessed: {
      readonly weightUsed: SpWeightsWeightV2Weight;
      readonly dmqHead: H256;
    } & Struct;
    readonly isUpwardMessageSent: boolean;
    readonly asUpwardMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly type: 'ValidationFunctionStored' | 'ValidationFunctionApplied' | 'ValidationFunctionDiscarded' | 'UpgradeAuthorized' | 'DownwardMessagesReceived' | 'DownwardMessagesProcessed' | 'UpwardMessageSent';
  }

  /** @name PalletBalancesEvent (32) */
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
    readonly isMinted: boolean;
    readonly asMinted: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isSuspended: boolean;
    readonly asSuspended: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isRestored: boolean;
    readonly asRestored: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUpgraded: boolean;
    readonly asUpgraded: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIssued: boolean;
    readonly asIssued: {
      readonly amount: u128;
    } & Struct;
    readonly isRescinded: boolean;
    readonly asRescinded: {
      readonly amount: u128;
    } & Struct;
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isFrozen: boolean;
    readonly asFrozen: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isThawed: boolean;
    readonly asThawed: {
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'BalanceSet' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'Deposit' | 'Withdraw' | 'Slashed' | 'Minted' | 'Burned' | 'Suspended' | 'Restored' | 'Upgraded' | 'Issued' | 'Rescinded' | 'Locked' | 'Unlocked' | 'Frozen' | 'Thawed';
  }

  /** @name FrameSupportTokensMiscBalanceStatus (33) */
  interface FrameSupportTokensMiscBalanceStatus extends Enum {
    readonly isFree: boolean;
    readonly isReserved: boolean;
    readonly type: 'Free' | 'Reserved';
  }

  /** @name PalletTransactionPaymentEvent (34) */
  interface PalletTransactionPaymentEvent extends Enum {
    readonly isTransactionFeePaid: boolean;
    readonly asTransactionFeePaid: {
      readonly who: AccountId32;
      readonly actualFee: u128;
      readonly tip: u128;
    } & Struct;
    readonly type: 'TransactionFeePaid';
  }

  /** @name PalletSudoEvent (35) */
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

  /** @name PalletDemocracyEvent (39) */
  interface PalletDemocracyEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isTabled: boolean;
    readonly asTabled: {
      readonly proposalIndex: u32;
      readonly deposit: u128;
    } & Struct;
    readonly isExternalTabled: boolean;
    readonly isStarted: boolean;
    readonly asStarted: {
      readonly refIndex: u32;
      readonly threshold: PalletDemocracyVoteThreshold;
    } & Struct;
    readonly isPassed: boolean;
    readonly asPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isNotPassed: boolean;
    readonly asNotPassed: {
      readonly refIndex: u32;
    } & Struct;
    readonly isCancelled: boolean;
    readonly asCancelled: {
      readonly refIndex: u32;
    } & Struct;
    readonly isDelegated: boolean;
    readonly asDelegated: {
      readonly who: AccountId32;
      readonly target: AccountId32;
    } & Struct;
    readonly isUndelegated: boolean;
    readonly asUndelegated: {
      readonly account: AccountId32;
    } & Struct;
    readonly isVetoed: boolean;
    readonly asVetoed: {
      readonly who: AccountId32;
      readonly proposalHash: H256;
      readonly until: u32;
    } & Struct;
    readonly isBlacklisted: boolean;
    readonly asBlacklisted: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly voter: AccountId32;
      readonly refIndex: u32;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isSeconded: boolean;
    readonly asSeconded: {
      readonly seconder: AccountId32;
      readonly propIndex: u32;
    } & Struct;
    readonly isProposalCanceled: boolean;
    readonly asProposalCanceled: {
      readonly propIndex: u32;
    } & Struct;
    readonly isMetadataSet: boolean;
    readonly asMetadataSet: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataCleared: boolean;
    readonly asMetadataCleared: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly isMetadataTransferred: boolean;
    readonly asMetadataTransferred: {
      readonly prevOwner: PalletDemocracyMetadataOwner;
      readonly owner: PalletDemocracyMetadataOwner;
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Proposed' | 'Tabled' | 'ExternalTabled' | 'Started' | 'Passed' | 'NotPassed' | 'Cancelled' | 'Delegated' | 'Undelegated' | 'Vetoed' | 'Blacklisted' | 'Voted' | 'Seconded' | 'ProposalCanceled' | 'MetadataSet' | 'MetadataCleared' | 'MetadataTransferred';
  }

  /** @name PalletDemocracyVoteThreshold (40) */
  interface PalletDemocracyVoteThreshold extends Enum {
    readonly isSuperMajorityApprove: boolean;
    readonly isSuperMajorityAgainst: boolean;
    readonly isSimpleMajority: boolean;
    readonly type: 'SuperMajorityApprove' | 'SuperMajorityAgainst' | 'SimpleMajority';
  }

  /** @name PalletDemocracyVoteAccountVote (41) */
  interface PalletDemocracyVoteAccountVote extends Enum {
    readonly isStandard: boolean;
    readonly asStandard: {
      readonly vote: Vote;
      readonly balance: u128;
    } & Struct;
    readonly isSplit: boolean;
    readonly asSplit: {
      readonly aye: u128;
      readonly nay: u128;
    } & Struct;
    readonly type: 'Standard' | 'Split';
  }

  /** @name PalletDemocracyMetadataOwner (43) */
  interface PalletDemocracyMetadataOwner extends Enum {
    readonly isExternal: boolean;
    readonly isProposal: boolean;
    readonly asProposal: u32;
    readonly isReferendum: boolean;
    readonly asReferendum: u32;
    readonly type: 'External' | 'Proposal' | 'Referendum';
  }

  /** @name PalletCollectiveEvent (44) */
  interface PalletCollectiveEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly account: AccountId32;
      readonly proposalIndex: u32;
      readonly proposalHash: H256;
      readonly threshold: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly account: AccountId32;
      readonly proposalHash: H256;
      readonly voted: bool;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly isApproved: boolean;
    readonly asApproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isDisapproved: boolean;
    readonly asDisapproved: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isExecuted: boolean;
    readonly asExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMemberExecuted: boolean;
    readonly asMemberExecuted: {
      readonly proposalHash: H256;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isClosed: boolean;
    readonly asClosed: {
      readonly proposalHash: H256;
      readonly yes: u32;
      readonly no: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Voted' | 'Approved' | 'Disapproved' | 'Executed' | 'MemberExecuted' | 'Closed';
  }

  /** @name PalletSchedulerEvent (47) */
  interface PalletSchedulerEvent extends Enum {
    readonly isScheduled: boolean;
    readonly asScheduled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isDispatched: boolean;
    readonly asDispatched: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isCallUnavailable: boolean;
    readonly asCallUnavailable: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPeriodicFailed: boolean;
    readonly asPeriodicFailed: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly isPermanentlyOverweight: boolean;
    readonly asPermanentlyOverweight: {
      readonly task: ITuple<[u32, u32]>;
      readonly id: Option<U8aFixed>;
    } & Struct;
    readonly type: 'Scheduled' | 'Canceled' | 'Dispatched' | 'CallUnavailable' | 'PeriodicFailed' | 'PermanentlyOverweight';
  }

  /** @name PalletPreimageEvent (49) */
  interface PalletPreimageEvent extends Enum {
    readonly isNoted: boolean;
    readonly asNoted: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly hash_: H256;
    } & Struct;
    readonly isCleared: boolean;
    readonly asCleared: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'Noted' | 'Requested' | 'Cleared';
  }

  /** @name PalletMultisigEvent (50) */
  interface PalletMultisigEvent extends Enum {
    readonly isNewMultisig: boolean;
    readonly asNewMultisig: {
      readonly approving: AccountId32;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigApproval: boolean;
    readonly asMultisigApproval: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly isMultisigExecuted: boolean;
    readonly asMultisigExecuted: {
      readonly approving: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isMultisigCancelled: boolean;
    readonly asMultisigCancelled: {
      readonly cancelling: AccountId32;
      readonly timepoint: PalletMultisigTimepoint;
      readonly multisig: AccountId32;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'NewMultisig' | 'MultisigApproval' | 'MultisigExecuted' | 'MultisigCancelled';
  }

  /** @name PalletMultisigTimepoint (51) */
  interface PalletMultisigTimepoint extends Struct {
    readonly height: u32;
    readonly index: u32;
  }

  /** @name PalletTreasuryEvent (52) */
  interface PalletTreasuryEvent extends Enum {
    readonly isProposed: boolean;
    readonly asProposed: {
      readonly proposalIndex: u32;
    } & Struct;
    readonly isSpending: boolean;
    readonly asSpending: {
      readonly budgetRemaining: u128;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly proposalIndex: u32;
      readonly award: u128;
      readonly account: AccountId32;
    } & Struct;
    readonly isRejected: boolean;
    readonly asRejected: {
      readonly proposalIndex: u32;
      readonly slashed: u128;
    } & Struct;
    readonly isBurnt: boolean;
    readonly asBurnt: {
      readonly burntFunds: u128;
    } & Struct;
    readonly isRollover: boolean;
    readonly asRollover: {
      readonly rolloverBalance: u128;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly value: u128;
    } & Struct;
    readonly isSpendApproved: boolean;
    readonly asSpendApproved: {
      readonly proposalIndex: u32;
      readonly amount: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isUpdatedInactive: boolean;
    readonly asUpdatedInactive: {
      readonly reactivated: u128;
      readonly deactivated: u128;
    } & Struct;
    readonly type: 'Proposed' | 'Spending' | 'Awarded' | 'Rejected' | 'Burnt' | 'Rollover' | 'Deposit' | 'SpendApproved' | 'UpdatedInactive';
  }

  /** @name PalletBountiesEvent (53) */
  interface PalletBountiesEvent extends Enum {
    readonly isBountyProposed: boolean;
    readonly asBountyProposed: {
      readonly index: u32;
    } & Struct;
    readonly isBountyRejected: boolean;
    readonly asBountyRejected: {
      readonly index: u32;
      readonly bond: u128;
    } & Struct;
    readonly isBountyBecameActive: boolean;
    readonly asBountyBecameActive: {
      readonly index: u32;
    } & Struct;
    readonly isBountyAwarded: boolean;
    readonly asBountyAwarded: {
      readonly index: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyClaimed: boolean;
    readonly asBountyClaimed: {
      readonly index: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isBountyCanceled: boolean;
    readonly asBountyCanceled: {
      readonly index: u32;
    } & Struct;
    readonly isBountyExtended: boolean;
    readonly asBountyExtended: {
      readonly index: u32;
    } & Struct;
    readonly type: 'BountyProposed' | 'BountyRejected' | 'BountyBecameActive' | 'BountyAwarded' | 'BountyClaimed' | 'BountyCanceled' | 'BountyExtended';
  }

  /** @name PalletChildBountiesEvent (54) */
  interface PalletChildBountiesEvent extends Enum {
    readonly isAdded: boolean;
    readonly asAdded: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly isAwarded: boolean;
    readonly asAwarded: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly index: u32;
      readonly childIndex: u32;
      readonly payout: u128;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCanceled: boolean;
    readonly asCanceled: {
      readonly index: u32;
      readonly childIndex: u32;
    } & Struct;
    readonly type: 'Added' | 'Awarded' | 'Claimed' | 'Canceled';
  }

  /** @name PalletProxyEvent (55) */
  interface PalletProxyEvent extends Enum {
    readonly isProxyExecuted: boolean;
    readonly asProxyExecuted: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly isPureCreated: boolean;
    readonly asPureCreated: {
      readonly pure: AccountId32;
      readonly who: AccountId32;
      readonly proxyType: RuntimeCommonProxyType;
      readonly disambiguationIndex: u16;
    } & Struct;
    readonly isAnnounced: boolean;
    readonly asAnnounced: {
      readonly real: AccountId32;
      readonly proxy: AccountId32;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAdded: boolean;
    readonly asProxyAdded: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isProxyRemoved: boolean;
    readonly asProxyRemoved: {
      readonly delegator: AccountId32;
      readonly delegatee: AccountId32;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly type: 'ProxyExecuted' | 'PureCreated' | 'Announced' | 'ProxyAdded' | 'ProxyRemoved';
  }

  /** @name RuntimeCommonProxyType (56) */
  interface RuntimeCommonProxyType extends Enum {
    readonly isAny: boolean;
    readonly type: 'Any';
  }

  /** @name PalletSessionEvent (58) */
  interface PalletSessionEvent extends Enum {
    readonly isNewSession: boolean;
    readonly asNewSession: {
      readonly sessionIndex: u32;
    } & Struct;
    readonly type: 'NewSession';
  }

  /** @name ParachainStakingEvent (59) */
  interface ParachainStakingEvent extends Enum {
    readonly isNewRound: boolean;
    readonly asNewRound: ITuple<[u32, u32]>;
    readonly isEnteredTopCandidates: boolean;
    readonly asEnteredTopCandidates: AccountId32;
    readonly isLeftTopCandidates: boolean;
    readonly asLeftTopCandidates: AccountId32;
    readonly isJoinedCollatorCandidates: boolean;
    readonly asJoinedCollatorCandidates: ITuple<[AccountId32, u128]>;
    readonly isCollatorStakedMore: boolean;
    readonly asCollatorStakedMore: ITuple<[AccountId32, u128, u128]>;
    readonly isCollatorStakedLess: boolean;
    readonly asCollatorStakedLess: ITuple<[AccountId32, u128, u128]>;
    readonly isCollatorScheduledExit: boolean;
    readonly asCollatorScheduledExit: ITuple<[u32, AccountId32, u32]>;
    readonly isCollatorCanceledExit: boolean;
    readonly asCollatorCanceledExit: AccountId32;
    readonly isCandidateLeft: boolean;
    readonly asCandidateLeft: ITuple<[AccountId32, u128]>;
    readonly isCollatorRemoved: boolean;
    readonly asCollatorRemoved: ITuple<[AccountId32, u128]>;
    readonly isMaxCandidateStakeChanged: boolean;
    readonly asMaxCandidateStakeChanged: u128;
    readonly isDelegatorStakedMore: boolean;
    readonly asDelegatorStakedMore: ITuple<[AccountId32, AccountId32, u128, u128]>;
    readonly isDelegatorStakedLess: boolean;
    readonly asDelegatorStakedLess: ITuple<[AccountId32, AccountId32, u128, u128]>;
    readonly isDelegatorLeft: boolean;
    readonly asDelegatorLeft: ITuple<[AccountId32, u128]>;
    readonly isDelegation: boolean;
    readonly asDelegation: ITuple<[AccountId32, u128, AccountId32, u128]>;
    readonly isDelegationReplaced: boolean;
    readonly asDelegationReplaced: ITuple<[AccountId32, u128, AccountId32, u128, AccountId32, u128]>;
    readonly isDelegatorLeftCollator: boolean;
    readonly asDelegatorLeftCollator: ITuple<[AccountId32, AccountId32, u128, u128]>;
    readonly isRewarded: boolean;
    readonly asRewarded: ITuple<[AccountId32, u128]>;
    readonly isRoundInflationSet: boolean;
    readonly asRoundInflationSet: ITuple<[Perquintill, Perquintill, Perquintill, Perquintill]>;
    readonly isMaxSelectedCandidatesSet: boolean;
    readonly asMaxSelectedCandidatesSet: ITuple<[u32, u32]>;
    readonly isBlocksPerRoundSet: boolean;
    readonly asBlocksPerRoundSet: ITuple<[u32, u32, u32, u32]>;
    readonly type: 'NewRound' | 'EnteredTopCandidates' | 'LeftTopCandidates' | 'JoinedCollatorCandidates' | 'CollatorStakedMore' | 'CollatorStakedLess' | 'CollatorScheduledExit' | 'CollatorCanceledExit' | 'CandidateLeft' | 'CollatorRemoved' | 'MaxCandidateStakeChanged' | 'DelegatorStakedMore' | 'DelegatorStakedLess' | 'DelegatorLeft' | 'Delegation' | 'DelegationReplaced' | 'DelegatorLeftCollator' | 'Rewarded' | 'RoundInflationSet' | 'MaxSelectedCandidatesSet' | 'BlocksPerRoundSet';
  }

  /** @name CumulusPalletXcmpQueueEvent (61) */
  interface CumulusPalletXcmpQueueEvent extends Enum {
    readonly isSuccess: boolean;
    readonly asSuccess: {
      readonly messageHash: Option<U8aFixed>;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isFail: boolean;
    readonly asFail: {
      readonly messageHash: Option<U8aFixed>;
      readonly error: XcmV3TraitsError;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isBadVersion: boolean;
    readonly asBadVersion: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isBadFormat: boolean;
    readonly asBadFormat: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isXcmpMessageSent: boolean;
    readonly asXcmpMessageSent: {
      readonly messageHash: Option<U8aFixed>;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly sender: u32;
      readonly sentAt: u32;
      readonly index: u64;
      readonly required: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly index: u64;
      readonly used: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Success' | 'Fail' | 'BadVersion' | 'BadFormat' | 'XcmpMessageSent' | 'OverweightEnqueued' | 'OverweightServiced';
  }

  /** @name XcmV3TraitsError (62) */
  interface XcmV3TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isLocationFull: boolean;
    readonly isLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isExpectationFalse: boolean;
    readonly isPalletNotFound: boolean;
    readonly isNameMismatch: boolean;
    readonly isVersionIncompatible: boolean;
    readonly isHoldingWouldOverflow: boolean;
    readonly isExportError: boolean;
    readonly isReanchorFailed: boolean;
    readonly isNoDeal: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockError: boolean;
    readonly isNoPermission: boolean;
    readonly isUnanchored: boolean;
    readonly isNotDepositable: boolean;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: SpWeightsWeightV2Weight;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly isExceedsStackLimit: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'LocationFull' | 'LocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'ExpectationFalse' | 'PalletNotFound' | 'NameMismatch' | 'VersionIncompatible' | 'HoldingWouldOverflow' | 'ExportError' | 'ReanchorFailed' | 'NoDeal' | 'FeesNotMet' | 'LockError' | 'NoPermission' | 'Unanchored' | 'NotDepositable' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable' | 'ExceedsStackLimit';
  }

  /** @name PalletXcmEvent (64) */
  interface PalletXcmEvent extends Enum {
    readonly isAttempted: boolean;
    readonly asAttempted: XcmV3TraitsOutcome;
    readonly isSent: boolean;
    readonly asSent: ITuple<[XcmV3MultiLocation, XcmV3MultiLocation, XcmV3Xcm]>;
    readonly isUnexpectedResponse: boolean;
    readonly asUnexpectedResponse: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseReady: boolean;
    readonly asResponseReady: ITuple<[u64, XcmV3Response]>;
    readonly isNotified: boolean;
    readonly asNotified: ITuple<[u64, u8, u8]>;
    readonly isNotifyOverweight: boolean;
    readonly asNotifyOverweight: ITuple<[u64, u8, u8, SpWeightsWeightV2Weight, SpWeightsWeightV2Weight]>;
    readonly isNotifyDispatchError: boolean;
    readonly asNotifyDispatchError: ITuple<[u64, u8, u8]>;
    readonly isNotifyDecodeFailed: boolean;
    readonly asNotifyDecodeFailed: ITuple<[u64, u8, u8]>;
    readonly isInvalidResponder: boolean;
    readonly asInvalidResponder: ITuple<[XcmV3MultiLocation, u64, Option<XcmV3MultiLocation>]>;
    readonly isInvalidResponderVersion: boolean;
    readonly asInvalidResponderVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isResponseTaken: boolean;
    readonly asResponseTaken: u64;
    readonly isAssetsTrapped: boolean;
    readonly asAssetsTrapped: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly isVersionChangeNotified: boolean;
    readonly asVersionChangeNotified: ITuple<[XcmV3MultiLocation, u32, XcmV3MultiassetMultiAssets]>;
    readonly isSupportedVersionChanged: boolean;
    readonly asSupportedVersionChanged: ITuple<[XcmV3MultiLocation, u32]>;
    readonly isNotifyTargetSendFail: boolean;
    readonly asNotifyTargetSendFail: ITuple<[XcmV3MultiLocation, u64, XcmV3TraitsError]>;
    readonly isNotifyTargetMigrationFail: boolean;
    readonly asNotifyTargetMigrationFail: ITuple<[XcmVersionedMultiLocation, u64]>;
    readonly isInvalidQuerierVersion: boolean;
    readonly asInvalidQuerierVersion: ITuple<[XcmV3MultiLocation, u64]>;
    readonly isInvalidQuerier: boolean;
    readonly asInvalidQuerier: ITuple<[XcmV3MultiLocation, u64, XcmV3MultiLocation, Option<XcmV3MultiLocation>]>;
    readonly isVersionNotifyStarted: boolean;
    readonly asVersionNotifyStarted: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyRequested: boolean;
    readonly asVersionNotifyRequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isVersionNotifyUnrequested: boolean;
    readonly asVersionNotifyUnrequested: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isFeesPaid: boolean;
    readonly asFeesPaid: ITuple<[XcmV3MultiLocation, XcmV3MultiassetMultiAssets]>;
    readonly isAssetsClaimed: boolean;
    readonly asAssetsClaimed: ITuple<[H256, XcmV3MultiLocation, XcmVersionedMultiAssets]>;
    readonly type: 'Attempted' | 'Sent' | 'UnexpectedResponse' | 'ResponseReady' | 'Notified' | 'NotifyOverweight' | 'NotifyDispatchError' | 'NotifyDecodeFailed' | 'InvalidResponder' | 'InvalidResponderVersion' | 'ResponseTaken' | 'AssetsTrapped' | 'VersionChangeNotified' | 'SupportedVersionChanged' | 'NotifyTargetSendFail' | 'NotifyTargetMigrationFail' | 'InvalidQuerierVersion' | 'InvalidQuerier' | 'VersionNotifyStarted' | 'VersionNotifyRequested' | 'VersionNotifyUnrequested' | 'FeesPaid' | 'AssetsClaimed';
  }

  /** @name XcmV3TraitsOutcome (65) */
  interface XcmV3TraitsOutcome extends Enum {
    readonly isComplete: boolean;
    readonly asComplete: SpWeightsWeightV2Weight;
    readonly isIncomplete: boolean;
    readonly asIncomplete: ITuple<[SpWeightsWeightV2Weight, XcmV3TraitsError]>;
    readonly isError: boolean;
    readonly asError: XcmV3TraitsError;
    readonly type: 'Complete' | 'Incomplete' | 'Error';
  }

  /** @name XcmV3MultiLocation (66) */
  interface XcmV3MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV3Junctions;
  }

  /** @name XcmV3Junctions (67) */
  interface XcmV3Junctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV3Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV3Junction, XcmV3Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction, XcmV3Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV3Junction (68) */
  interface XcmV3Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: Option<XcmV3JunctionNetworkId>;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: {
      readonly length: u8;
      readonly data: U8aFixed;
    } & Struct;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV3JunctionBodyId;
      readonly part: XcmV3JunctionBodyPart;
    } & Struct;
    readonly isGlobalConsensus: boolean;
    readonly asGlobalConsensus: XcmV3JunctionNetworkId;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality' | 'GlobalConsensus';
  }

  /** @name XcmV3JunctionNetworkId (71) */
  interface XcmV3JunctionNetworkId extends Enum {
    readonly isByGenesis: boolean;
    readonly asByGenesis: U8aFixed;
    readonly isByFork: boolean;
    readonly asByFork: {
      readonly blockNumber: u64;
      readonly blockHash: U8aFixed;
    } & Struct;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly isWestend: boolean;
    readonly isRococo: boolean;
    readonly isWococo: boolean;
    readonly isEthereum: boolean;
    readonly asEthereum: {
      readonly chainId: Compact<u64>;
    } & Struct;
    readonly isBitcoinCore: boolean;
    readonly isBitcoinCash: boolean;
    readonly type: 'ByGenesis' | 'ByFork' | 'Polkadot' | 'Kusama' | 'Westend' | 'Rococo' | 'Wococo' | 'Ethereum' | 'BitcoinCore' | 'BitcoinCash';
  }

  /** @name XcmV3JunctionBodyId (74) */
  interface XcmV3JunctionBodyId extends Enum {
    readonly isUnit: boolean;
    readonly isMoniker: boolean;
    readonly asMoniker: U8aFixed;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Moniker' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV3JunctionBodyPart (75) */
  interface XcmV3JunctionBodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV3Xcm (76) */
  interface XcmV3Xcm extends Vec<XcmV3Instruction> {}

  /** @name XcmV3Instruction (78) */
  interface XcmV3Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV3MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV3MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV3MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV3Response;
      readonly maxWeight: SpWeightsWeightV2Weight;
      readonly querier: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originKind: XcmV2OriginKind;
      readonly requireWeightAtMost: SpWeightsWeightV2Weight;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV3Junctions;
    readonly isReportError: boolean;
    readonly asReportError: XcmV3QueryResponseInfo;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly beneficiary: XcmV3MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV3MultiassetMultiAssetFilter;
      readonly want: XcmV3MultiassetMultiAssets;
      readonly maximal: bool;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly reserve: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV3MultiassetMultiAssetFilter;
      readonly dest: XcmV3MultiLocation;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isReportHolding: boolean;
    readonly asReportHolding: {
      readonly responseInfo: XcmV3QueryResponseInfo;
      readonly assets: XcmV3MultiassetMultiAssetFilter;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV3MultiAsset;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV3Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV3Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly ticket: XcmV3MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly isBurnAsset: boolean;
    readonly asBurnAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectAsset: boolean;
    readonly asExpectAsset: XcmV3MultiassetMultiAssets;
    readonly isExpectOrigin: boolean;
    readonly asExpectOrigin: Option<XcmV3MultiLocation>;
    readonly isExpectError: boolean;
    readonly asExpectError: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isExpectTransactStatus: boolean;
    readonly asExpectTransactStatus: XcmV3MaybeErrorCode;
    readonly isQueryPallet: boolean;
    readonly asQueryPallet: {
      readonly moduleName: Bytes;
      readonly responseInfo: XcmV3QueryResponseInfo;
    } & Struct;
    readonly isExpectPallet: boolean;
    readonly asExpectPallet: {
      readonly index: Compact<u32>;
      readonly name: Bytes;
      readonly moduleName: Bytes;
      readonly crateMajor: Compact<u32>;
      readonly minCrateMinor: Compact<u32>;
    } & Struct;
    readonly isReportTransactStatus: boolean;
    readonly asReportTransactStatus: XcmV3QueryResponseInfo;
    readonly isClearTransactStatus: boolean;
    readonly isUniversalOrigin: boolean;
    readonly asUniversalOrigin: XcmV3Junction;
    readonly isExportMessage: boolean;
    readonly asExportMessage: {
      readonly network: XcmV3JunctionNetworkId;
      readonly destination: XcmV3Junctions;
      readonly xcm: XcmV3Xcm;
    } & Struct;
    readonly isLockAsset: boolean;
    readonly asLockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly unlocker: XcmV3MultiLocation;
    } & Struct;
    readonly isUnlockAsset: boolean;
    readonly asUnlockAsset: {
      readonly asset: XcmV3MultiAsset;
      readonly target: XcmV3MultiLocation;
    } & Struct;
    readonly isNoteUnlockable: boolean;
    readonly asNoteUnlockable: {
      readonly asset: XcmV3MultiAsset;
      readonly owner: XcmV3MultiLocation;
    } & Struct;
    readonly isRequestUnlock: boolean;
    readonly asRequestUnlock: {
      readonly asset: XcmV3MultiAsset;
      readonly locker: XcmV3MultiLocation;
    } & Struct;
    readonly isSetFeesMode: boolean;
    readonly asSetFeesMode: {
      readonly jitWithdraw: bool;
    } & Struct;
    readonly isSetTopic: boolean;
    readonly asSetTopic: U8aFixed;
    readonly isClearTopic: boolean;
    readonly isAliasOrigin: boolean;
    readonly asAliasOrigin: XcmV3MultiLocation;
    readonly isUnpaidExecution: boolean;
    readonly asUnpaidExecution: {
      readonly weightLimit: XcmV3WeightLimit;
      readonly checkOrigin: Option<XcmV3MultiLocation>;
    } & Struct;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'ReportHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion' | 'BurnAsset' | 'ExpectAsset' | 'ExpectOrigin' | 'ExpectError' | 'ExpectTransactStatus' | 'QueryPallet' | 'ExpectPallet' | 'ReportTransactStatus' | 'ClearTransactStatus' | 'UniversalOrigin' | 'ExportMessage' | 'LockAsset' | 'UnlockAsset' | 'NoteUnlockable' | 'RequestUnlock' | 'SetFeesMode' | 'SetTopic' | 'ClearTopic' | 'AliasOrigin' | 'UnpaidExecution';
  }

  /** @name XcmV3MultiassetMultiAssets (79) */
  interface XcmV3MultiassetMultiAssets extends Vec<XcmV3MultiAsset> {}

  /** @name XcmV3MultiAsset (81) */
  interface XcmV3MultiAsset extends Struct {
    readonly id: XcmV3MultiassetAssetId;
    readonly fun: XcmV3MultiassetFungibility;
  }

  /** @name XcmV3MultiassetAssetId (82) */
  interface XcmV3MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV3MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: U8aFixed;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV3MultiassetFungibility (83) */
  interface XcmV3MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV3MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3MultiassetAssetInstance (84) */
  interface XcmV3MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32';
  }

  /** @name XcmV3Response (87) */
  interface XcmV3Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV3MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV3TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly isPalletsInfo: boolean;
    readonly asPalletsInfo: Vec<XcmV3PalletInfo>;
    readonly isDispatchResult: boolean;
    readonly asDispatchResult: XcmV3MaybeErrorCode;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version' | 'PalletsInfo' | 'DispatchResult';
  }

  /** @name XcmV3PalletInfo (91) */
  interface XcmV3PalletInfo extends Struct {
    readonly index: Compact<u32>;
    readonly name: Bytes;
    readonly moduleName: Bytes;
    readonly major: Compact<u32>;
    readonly minor: Compact<u32>;
    readonly patch: Compact<u32>;
  }

  /** @name XcmV3MaybeErrorCode (94) */
  interface XcmV3MaybeErrorCode extends Enum {
    readonly isSuccess: boolean;
    readonly isError: boolean;
    readonly asError: Bytes;
    readonly isTruncatedError: boolean;
    readonly asTruncatedError: Bytes;
    readonly type: 'Success' | 'Error' | 'TruncatedError';
  }

  /** @name XcmV2OriginKind (97) */
  interface XcmV2OriginKind extends Enum {
    readonly isNative: boolean;
    readonly isSovereignAccount: boolean;
    readonly isSuperuser: boolean;
    readonly isXcm: boolean;
    readonly type: 'Native' | 'SovereignAccount' | 'Superuser' | 'Xcm';
  }

  /** @name XcmDoubleEncoded (98) */
  interface XcmDoubleEncoded extends Struct {
    readonly encoded: Bytes;
  }

  /** @name XcmV3QueryResponseInfo (99) */
  interface XcmV3QueryResponseInfo extends Struct {
    readonly destination: XcmV3MultiLocation;
    readonly queryId: Compact<u64>;
    readonly maxWeight: SpWeightsWeightV2Weight;
  }

  /** @name XcmV3MultiassetMultiAssetFilter (100) */
  interface XcmV3MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV3MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV3MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV3MultiassetWildMultiAsset (101) */
  interface XcmV3MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
    } & Struct;
    readonly isAllCounted: boolean;
    readonly asAllCounted: Compact<u32>;
    readonly isAllOfCounted: boolean;
    readonly asAllOfCounted: {
      readonly id: XcmV3MultiassetAssetId;
      readonly fun: XcmV3MultiassetWildFungibility;
      readonly count: Compact<u32>;
    } & Struct;
    readonly type: 'All' | 'AllOf' | 'AllCounted' | 'AllOfCounted';
  }

  /** @name XcmV3MultiassetWildFungibility (102) */
  interface XcmV3MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV3WeightLimit (103) */
  interface XcmV3WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: SpWeightsWeightV2Weight;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name XcmVersionedMultiAssets (104) */
  interface XcmVersionedMultiAssets extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiassetMultiAssets;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiassetMultiAssets;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2MultiassetMultiAssets (105) */
  interface XcmV2MultiassetMultiAssets extends Vec<XcmV2MultiAsset> {}

  /** @name XcmV2MultiAsset (107) */
  interface XcmV2MultiAsset extends Struct {
    readonly id: XcmV2MultiassetAssetId;
    readonly fun: XcmV2MultiassetFungibility;
  }

  /** @name XcmV2MultiassetAssetId (108) */
  interface XcmV2MultiassetAssetId extends Enum {
    readonly isConcrete: boolean;
    readonly asConcrete: XcmV2MultiLocation;
    readonly isAbstract: boolean;
    readonly asAbstract: Bytes;
    readonly type: 'Concrete' | 'Abstract';
  }

  /** @name XcmV2MultiLocation (109) */
  interface XcmV2MultiLocation extends Struct {
    readonly parents: u8;
    readonly interior: XcmV2MultilocationJunctions;
  }

  /** @name XcmV2MultilocationJunctions (110) */
  interface XcmV2MultilocationJunctions extends Enum {
    readonly isHere: boolean;
    readonly isX1: boolean;
    readonly asX1: XcmV2Junction;
    readonly isX2: boolean;
    readonly asX2: ITuple<[XcmV2Junction, XcmV2Junction]>;
    readonly isX3: boolean;
    readonly asX3: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX4: boolean;
    readonly asX4: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX5: boolean;
    readonly asX5: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX6: boolean;
    readonly asX6: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX7: boolean;
    readonly asX7: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly isX8: boolean;
    readonly asX8: ITuple<[XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction, XcmV2Junction]>;
    readonly type: 'Here' | 'X1' | 'X2' | 'X3' | 'X4' | 'X5' | 'X6' | 'X7' | 'X8';
  }

  /** @name XcmV2Junction (111) */
  interface XcmV2Junction extends Enum {
    readonly isParachain: boolean;
    readonly asParachain: Compact<u32>;
    readonly isAccountId32: boolean;
    readonly asAccountId32: {
      readonly network: XcmV2NetworkId;
      readonly id: U8aFixed;
    } & Struct;
    readonly isAccountIndex64: boolean;
    readonly asAccountIndex64: {
      readonly network: XcmV2NetworkId;
      readonly index: Compact<u64>;
    } & Struct;
    readonly isAccountKey20: boolean;
    readonly asAccountKey20: {
      readonly network: XcmV2NetworkId;
      readonly key: U8aFixed;
    } & Struct;
    readonly isPalletInstance: boolean;
    readonly asPalletInstance: u8;
    readonly isGeneralIndex: boolean;
    readonly asGeneralIndex: Compact<u128>;
    readonly isGeneralKey: boolean;
    readonly asGeneralKey: Bytes;
    readonly isOnlyChild: boolean;
    readonly isPlurality: boolean;
    readonly asPlurality: {
      readonly id: XcmV2BodyId;
      readonly part: XcmV2BodyPart;
    } & Struct;
    readonly type: 'Parachain' | 'AccountId32' | 'AccountIndex64' | 'AccountKey20' | 'PalletInstance' | 'GeneralIndex' | 'GeneralKey' | 'OnlyChild' | 'Plurality';
  }

  /** @name XcmV2NetworkId (112) */
  interface XcmV2NetworkId extends Enum {
    readonly isAny: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isPolkadot: boolean;
    readonly isKusama: boolean;
    readonly type: 'Any' | 'Named' | 'Polkadot' | 'Kusama';
  }

  /** @name XcmV2BodyId (114) */
  interface XcmV2BodyId extends Enum {
    readonly isUnit: boolean;
    readonly isNamed: boolean;
    readonly asNamed: Bytes;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u32>;
    readonly isExecutive: boolean;
    readonly isTechnical: boolean;
    readonly isLegislative: boolean;
    readonly isJudicial: boolean;
    readonly isDefense: boolean;
    readonly isAdministration: boolean;
    readonly isTreasury: boolean;
    readonly type: 'Unit' | 'Named' | 'Index' | 'Executive' | 'Technical' | 'Legislative' | 'Judicial' | 'Defense' | 'Administration' | 'Treasury';
  }

  /** @name XcmV2BodyPart (115) */
  interface XcmV2BodyPart extends Enum {
    readonly isVoice: boolean;
    readonly isMembers: boolean;
    readonly asMembers: {
      readonly count: Compact<u32>;
    } & Struct;
    readonly isFraction: boolean;
    readonly asFraction: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isAtLeastProportion: boolean;
    readonly asAtLeastProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly isMoreThanProportion: boolean;
    readonly asMoreThanProportion: {
      readonly nom: Compact<u32>;
      readonly denom: Compact<u32>;
    } & Struct;
    readonly type: 'Voice' | 'Members' | 'Fraction' | 'AtLeastProportion' | 'MoreThanProportion';
  }

  /** @name XcmV2MultiassetFungibility (116) */
  interface XcmV2MultiassetFungibility extends Enum {
    readonly isFungible: boolean;
    readonly asFungible: Compact<u128>;
    readonly isNonFungible: boolean;
    readonly asNonFungible: XcmV2MultiassetAssetInstance;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2MultiassetAssetInstance (117) */
  interface XcmV2MultiassetAssetInstance extends Enum {
    readonly isUndefined: boolean;
    readonly isIndex: boolean;
    readonly asIndex: Compact<u128>;
    readonly isArray4: boolean;
    readonly asArray4: U8aFixed;
    readonly isArray8: boolean;
    readonly asArray8: U8aFixed;
    readonly isArray16: boolean;
    readonly asArray16: U8aFixed;
    readonly isArray32: boolean;
    readonly asArray32: U8aFixed;
    readonly isBlob: boolean;
    readonly asBlob: Bytes;
    readonly type: 'Undefined' | 'Index' | 'Array4' | 'Array8' | 'Array16' | 'Array32' | 'Blob';
  }

  /** @name XcmVersionedMultiLocation (118) */
  interface XcmVersionedMultiLocation extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiLocation;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiLocation;
    readonly type: 'V2' | 'V3';
  }

  /** @name CumulusPalletXcmEvent (119) */
  interface CumulusPalletXcmEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: U8aFixed;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: U8aFixed;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: ITuple<[U8aFixed, XcmV3TraitsOutcome]>;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward';
  }

  /** @name CumulusPalletDmpQueueEvent (120) */
  interface CumulusPalletDmpQueueEvent extends Enum {
    readonly isInvalidFormat: boolean;
    readonly asInvalidFormat: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isUnsupportedVersion: boolean;
    readonly asUnsupportedVersion: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly isExecutedDownward: boolean;
    readonly asExecutedDownward: {
      readonly messageId: U8aFixed;
      readonly outcome: XcmV3TraitsOutcome;
    } & Struct;
    readonly isWeightExhausted: boolean;
    readonly asWeightExhausted: {
      readonly messageId: U8aFixed;
      readonly remainingWeight: SpWeightsWeightV2Weight;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightEnqueued: boolean;
    readonly asOverweightEnqueued: {
      readonly messageId: U8aFixed;
      readonly overweightIndex: u64;
      readonly requiredWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isOverweightServiced: boolean;
    readonly asOverweightServiced: {
      readonly overweightIndex: u64;
      readonly weightUsed: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isMaxMessagesExhausted: boolean;
    readonly asMaxMessagesExhausted: {
      readonly messageId: U8aFixed;
    } & Struct;
    readonly type: 'InvalidFormat' | 'UnsupportedVersion' | 'ExecutedDownward' | 'WeightExhausted' | 'OverweightEnqueued' | 'OverweightServiced' | 'MaxMessagesExhausted';
  }

  /** @name PalletVestingEvent (121) */
  interface PalletVestingEvent extends Enum {
    readonly isVestingUpdated: boolean;
    readonly asVestingUpdated: {
      readonly account: AccountId32;
      readonly unvested: u128;
    } & Struct;
    readonly isVestingCompleted: boolean;
    readonly asVestingCompleted: {
      readonly account: AccountId32;
    } & Struct;
    readonly type: 'VestingUpdated' | 'VestingCompleted';
  }

  /** @name PalletUtilityEvent (122) */
  interface PalletUtilityEvent extends Enum {
    readonly isBatchInterrupted: boolean;
    readonly asBatchInterrupted: {
      readonly index: u32;
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isBatchCompleted: boolean;
    readonly isBatchCompletedWithErrors: boolean;
    readonly isItemCompleted: boolean;
    readonly isItemFailed: boolean;
    readonly asItemFailed: {
      readonly error: SpRuntimeDispatchError;
    } & Struct;
    readonly isDispatchedAs: boolean;
    readonly asDispatchedAs: {
      readonly result: Result<Null, SpRuntimeDispatchError>;
    } & Struct;
    readonly type: 'BatchInterrupted' | 'BatchCompleted' | 'BatchCompletedWithErrors' | 'ItemCompleted' | 'ItemFailed' | 'DispatchedAs';
  }

  /** @name OrmlTokensModuleEvent (123) */
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
    readonly isLocked: boolean;
    readonly asLocked: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isUnlocked: boolean;
    readonly asUnlocked: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly who: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'Endowed' | 'DustLost' | 'Transfer' | 'Reserved' | 'Unreserved' | 'ReserveRepatriated' | 'BalanceSet' | 'TotalIssuanceSet' | 'Withdrawn' | 'Slashed' | 'Deposited' | 'LockSet' | 'LockRemoved' | 'Locked' | 'Unlocked';
  }

  /** @name SpacewalkPrimitivesCurrencyId (124) */
  interface SpacewalkPrimitivesCurrencyId extends Enum {
    readonly isNative: boolean;
    readonly isXcm: boolean;
    readonly asXcm: u8;
    readonly isStellar: boolean;
    readonly asStellar: SpacewalkPrimitivesAsset;
    readonly isZenlinkLPToken: boolean;
    readonly asZenlinkLPToken: ITuple<[u8, u8, u8, u8]>;
    readonly isToken: boolean;
    readonly asToken: u64;
    readonly type: 'Native' | 'Xcm' | 'Stellar' | 'ZenlinkLPToken' | 'Token';
  }

  /** @name SpacewalkPrimitivesAsset (125) */
  interface SpacewalkPrimitivesAsset extends Enum {
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
    readonly type: 'StellarNative' | 'AlphaNum4' | 'AlphaNum12';
  }

  /** @name OrmlXtokensModuleEvent (127) */
  interface OrmlXtokensModuleEvent extends Enum {
    readonly isTransferredMultiAssets: boolean;
    readonly asTransferredMultiAssets: {
      readonly sender: AccountId32;
      readonly assets: XcmV3MultiassetMultiAssets;
      readonly fee: XcmV3MultiAsset;
      readonly dest: XcmV3MultiLocation;
    } & Struct;
    readonly type: 'TransferredMultiAssets';
  }

  /** @name PalletIdentityEvent (128) */
  interface PalletIdentityEvent extends Enum {
    readonly isIdentitySet: boolean;
    readonly asIdentitySet: {
      readonly who: AccountId32;
    } & Struct;
    readonly isIdentityCleared: boolean;
    readonly asIdentityCleared: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isIdentityKilled: boolean;
    readonly asIdentityKilled: {
      readonly who: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isJudgementRequested: boolean;
    readonly asJudgementRequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementUnrequested: boolean;
    readonly asJudgementUnrequested: {
      readonly who: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isJudgementGiven: boolean;
    readonly asJudgementGiven: {
      readonly target: AccountId32;
      readonly registrarIndex: u32;
    } & Struct;
    readonly isRegistrarAdded: boolean;
    readonly asRegistrarAdded: {
      readonly registrarIndex: u32;
    } & Struct;
    readonly isSubIdentityAdded: boolean;
    readonly asSubIdentityAdded: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRemoved: boolean;
    readonly asSubIdentityRemoved: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly isSubIdentityRevoked: boolean;
    readonly asSubIdentityRevoked: {
      readonly sub: AccountId32;
      readonly main: AccountId32;
      readonly deposit: u128;
    } & Struct;
    readonly type: 'IdentitySet' | 'IdentityCleared' | 'IdentityKilled' | 'JudgementRequested' | 'JudgementUnrequested' | 'JudgementGiven' | 'RegistrarAdded' | 'SubIdentityAdded' | 'SubIdentityRemoved' | 'SubIdentityRevoked';
  }

  /** @name PalletContractsEvent (129) */
  interface PalletContractsEvent extends Enum {
    readonly isInstantiated: boolean;
    readonly asInstantiated: {
      readonly deployer: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isTerminated: boolean;
    readonly asTerminated: {
      readonly contract: AccountId32;
      readonly beneficiary: AccountId32;
    } & Struct;
    readonly isCodeStored: boolean;
    readonly asCodeStored: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractEmitted: boolean;
    readonly asContractEmitted: {
      readonly contract: AccountId32;
      readonly data: Bytes;
    } & Struct;
    readonly isCodeRemoved: boolean;
    readonly asCodeRemoved: {
      readonly codeHash: H256;
    } & Struct;
    readonly isContractCodeUpdated: boolean;
    readonly asContractCodeUpdated: {
      readonly contract: AccountId32;
      readonly newCodeHash: H256;
      readonly oldCodeHash: H256;
    } & Struct;
    readonly isCalled: boolean;
    readonly asCalled: {
      readonly caller: AccountId32;
      readonly contract: AccountId32;
    } & Struct;
    readonly isDelegateCalled: boolean;
    readonly asDelegateCalled: {
      readonly contract: AccountId32;
      readonly codeHash: H256;
    } & Struct;
    readonly type: 'Instantiated' | 'Terminated' | 'CodeStored' | 'ContractEmitted' | 'CodeRemoved' | 'ContractCodeUpdated' | 'Called' | 'DelegateCalled';
  }

  /** @name DiaOracleEvent (130) */
  interface DiaOracleEvent extends Enum {
    readonly isUpdatedPrices: boolean;
    readonly asUpdatedPrices: Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>>;
    readonly isAccountIdAuthorized: boolean;
    readonly asAccountIdAuthorized: AccountId32;
    readonly isAccountIdDeauthorized: boolean;
    readonly asAccountIdDeauthorized: AccountId32;
    readonly isCurrencyAdded: boolean;
    readonly asCurrencyAdded: ITuple<[Bytes, Bytes]>;
    readonly isCurrencyRemoved: boolean;
    readonly asCurrencyRemoved: ITuple<[Bytes, Bytes]>;
    readonly isBatchingApiRouteSet: boolean;
    readonly asBatchingApiRouteSet: Bytes;
    readonly type: 'UpdatedPrices' | 'AccountIdAuthorized' | 'AccountIdDeauthorized' | 'CurrencyAdded' | 'CurrencyRemoved' | 'BatchingApiRouteSet';
  }

  /** @name DiaOracleDiaCoinInfo (134) */
  interface DiaOracleDiaCoinInfo extends Struct {
    readonly symbol: Bytes;
    readonly name: Bytes;
    readonly blockchain: Bytes;
    readonly supply: u128;
    readonly lastUpdateTimestamp: u64;
    readonly price: u128;
  }

  /** @name ZenlinkProtocolEvent (135) */
  interface ZenlinkProtocolEvent extends Enum {
    readonly isTransferred: boolean;
    readonly asTransferred: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, AccountId32, u128]>;
    readonly isBurned: boolean;
    readonly asBurned: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
    readonly isMinted: boolean;
    readonly asMinted: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u128]>;
    readonly isPairCreated: boolean;
    readonly asPairCreated: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]>;
    readonly isLiquidityAdded: boolean;
    readonly asLiquidityAdded: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
    readonly isLiquidityRemoved: boolean;
    readonly asLiquidityRemoved: ITuple<[AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
    readonly isAssetSwap: boolean;
    readonly asAssetSwap: ITuple<[AccountId32, AccountId32, Vec<ZenlinkProtocolPrimitivesAssetId>, Vec<u128>]>;
    readonly isTransferredToParachain: boolean;
    readonly asTransferredToParachain: ITuple<[ZenlinkProtocolPrimitivesAssetId, AccountId32, u32, AccountId32, u128, u64]>;
    readonly isBootstrapContribute: boolean;
    readonly asBootstrapContribute: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, u128, ZenlinkProtocolPrimitivesAssetId, u128]>;
    readonly isBootstrapEnd: boolean;
    readonly asBootstrapEnd: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
    readonly isBootstrapCreated: boolean;
    readonly asBootstrapCreated: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
    readonly isBootstrapClaim: boolean;
    readonly asBootstrapClaim: ITuple<[AccountId32, AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128]>;
    readonly isBootstrapUpdate: boolean;
    readonly asBootstrapUpdate: ITuple<[AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128, u128, u128, u32]>;
    readonly isBootstrapRefund: boolean;
    readonly asBootstrapRefund: ITuple<[AccountId32, AccountId32, ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, u128, u128]>;
    readonly isDistributeReward: boolean;
    readonly asDistributeReward: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
    readonly isChargeReward: boolean;
    readonly asChargeReward: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32, Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>]>;
    readonly isWithdrawReward: boolean;
    readonly asWithdrawReward: ITuple<[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, AccountId32]>;
    readonly type: 'Transferred' | 'Burned' | 'Minted' | 'PairCreated' | 'LiquidityAdded' | 'LiquidityRemoved' | 'AssetSwap' | 'TransferredToParachain' | 'BootstrapContribute' | 'BootstrapEnd' | 'BootstrapCreated' | 'BootstrapClaim' | 'BootstrapUpdate' | 'BootstrapRefund' | 'DistributeReward' | 'ChargeReward' | 'WithdrawReward';
  }

  /** @name ZenlinkProtocolPrimitivesAssetId (136) */
  interface ZenlinkProtocolPrimitivesAssetId extends Struct {
    readonly chainId: u32;
    readonly assetType: u8;
    readonly assetIndex: u64;
  }

  /** @name IssueEvent (141) */
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
    readonly isIssueMinimumTransferAmountUpdate: boolean;
    readonly asIssueMinimumTransferAmountUpdate: {
      readonly newMinimumAmount: u128;
    } & Struct;
    readonly type: 'RequestIssue' | 'IssueAmountChange' | 'ExecuteIssue' | 'CancelIssue' | 'IssuePeriodChange' | 'RateLimitUpdate' | 'IssueMinimumTransferAmountUpdate';
  }

  /** @name SpacewalkPrimitivesVaultId (142) */
  interface SpacewalkPrimitivesVaultId extends Struct {
    readonly accountId: AccountId32;
    readonly currencies: SpacewalkPrimitivesVaultCurrencyPair;
  }

  /** @name SpacewalkPrimitivesVaultCurrencyPair (143) */
  interface SpacewalkPrimitivesVaultCurrencyPair extends Struct {
    readonly collateral: SpacewalkPrimitivesCurrencyId;
    readonly wrapped: SpacewalkPrimitivesCurrencyId;
  }

  /** @name NominationEvent (145) */
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

  /** @name OracleEvent (146) */
  interface OracleEvent extends Enum {
    readonly isAggregateUpdated: boolean;
    readonly asAggregateUpdated: {
      readonly values: Vec<ITuple<[SpacewalkPrimitivesOracleKey, u128]>>;
    } & Struct;
    readonly isOracleKeysUpdated: boolean;
    readonly asOracleKeysUpdated: {
      readonly oracleKeys: Vec<SpacewalkPrimitivesOracleKey>;
    } & Struct;
    readonly isMaxDelayUpdated: boolean;
    readonly asMaxDelayUpdated: {
      readonly maxDelay: u64;
    } & Struct;
    readonly type: 'AggregateUpdated' | 'OracleKeysUpdated' | 'MaxDelayUpdated';
  }

  /** @name SpacewalkPrimitivesOracleKey (149) */
  interface SpacewalkPrimitivesOracleKey extends Enum {
    readonly isExchangeRate: boolean;
    readonly asExchangeRate: SpacewalkPrimitivesCurrencyId;
    readonly type: 'ExchangeRate';
  }

  /** @name RedeemEvent (152) */
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
    readonly isRedeemMinimumTransferAmountUpdate: boolean;
    readonly asRedeemMinimumTransferAmountUpdate: {
      readonly newMinimumAmount: u128;
    } & Struct;
    readonly type: 'RequestRedeem' | 'LiquidationRedeem' | 'ExecuteRedeem' | 'CancelRedeem' | 'MintTokensForReimbursedRedeem' | 'RedeemPeriodChange' | 'SelfRedeem' | 'RateLimitUpdate' | 'RedeemMinimumTransferAmountUpdate';
  }

  /** @name SpacewalkPrimitivesRedeemRedeemRequestStatus (153) */
  interface SpacewalkPrimitivesRedeemRedeemRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isReimbursed: boolean;
    readonly asReimbursed: bool;
    readonly isRetried: boolean;
    readonly type: 'Pending' | 'Completed' | 'Reimbursed' | 'Retried';
  }

  /** @name ReplaceEvent (154) */
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
    readonly isReplaceMinimumTransferAmountUpdate: boolean;
    readonly asReplaceMinimumTransferAmountUpdate: {
      readonly newMinimumAmount: u128;
    } & Struct;
    readonly type: 'RequestReplace' | 'WithdrawReplace' | 'AcceptReplace' | 'ExecuteReplace' | 'CancelReplace' | 'ReplacePeriodChange' | 'ReplaceMinimumTransferAmountUpdate';
  }

  /** @name SecurityEvent (155) */
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

  /** @name SecurityStatusCode (156) */
  interface SecurityStatusCode extends Enum {
    readonly isRunning: boolean;
    readonly isError: boolean;
    readonly isShutdown: boolean;
    readonly type: 'Running' | 'Error' | 'Shutdown';
  }

  /** @name SecurityErrorCode (158) */
  interface SecurityErrorCode extends Enum {
    readonly isNone: boolean;
    readonly isOracleOffline: boolean;
    readonly type: 'None' | 'OracleOffline';
  }

  /** @name StellarRelayEvent (159) */
  interface StellarRelayEvent extends Enum {
    readonly isUpdateTier1ValidatorSet: boolean;
    readonly asUpdateTier1ValidatorSet: {
      readonly newValidatorsEnactmentBlockHeight: u32;
    } & Struct;
    readonly type: 'UpdateTier1ValidatorSet';
  }

  /** @name VaultRegistryEvent (160) */
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

  /** @name VaultRegistryVaultStatus (161) */
  interface VaultRegistryVaultStatus extends Enum {
    readonly isActive: boolean;
    readonly asActive: bool;
    readonly isLiquidated: boolean;
    readonly type: 'Active' | 'Liquidated';
  }

  /** @name PooledRewardsEvent (162) */
  interface PooledRewardsEvent extends Enum {
    readonly isDepositStake: boolean;
    readonly asDepositStake: {
      readonly poolId: SpacewalkPrimitivesCurrencyId;
      readonly stakeId: SpacewalkPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isDistributeReward: boolean;
    readonly asDistributeReward: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawStake: boolean;
    readonly asWithdrawStake: {
      readonly poolId: SpacewalkPrimitivesCurrencyId;
      readonly stakeId: SpacewalkPrimitivesVaultId;
      readonly amount: i128;
    } & Struct;
    readonly isWithdrawReward: boolean;
    readonly asWithdrawReward: {
      readonly poolId: SpacewalkPrimitivesCurrencyId;
      readonly stakeId: SpacewalkPrimitivesVaultId;
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: i128;
    } & Struct;
    readonly type: 'DepositStake' | 'DistributeReward' | 'WithdrawStake' | 'WithdrawReward';
  }

  /** @name StakingEvent (165) */
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

  /** @name ClientsInfoEvent (166) */
  interface ClientsInfoEvent extends Enum {
    readonly isNotifyClientRelease: boolean;
    readonly asNotifyClientRelease: {
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly isApplyClientRelease: boolean;
    readonly asApplyClientRelease: {
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly isAccountIdAuthorized: boolean;
    readonly asAccountIdAuthorized: AccountId32;
    readonly isAccountIdDeauthorized: boolean;
    readonly asAccountIdDeauthorized: AccountId32;
    readonly type: 'NotifyClientRelease' | 'ApplyClientRelease' | 'AccountIdAuthorized' | 'AccountIdDeauthorized';
  }

  /** @name ClientsInfoClientRelease (167) */
  interface ClientsInfoClientRelease extends Struct {
    readonly uri: Bytes;
    readonly checksum: H256;
  }

  /** @name RewardDistributionEvent (169) */
  interface RewardDistributionEvent extends Enum {
    readonly isRewardPerBlockAdapted: boolean;
    readonly asRewardPerBlockAdapted: u128;
    readonly type: 'RewardPerBlockAdapted';
  }

  /** @name OrmlCurrenciesAllowanceExtensionEvent (170) */
  interface OrmlCurrenciesAllowanceExtensionEvent extends Enum {
    readonly isAllowedCurrenciesAdded: boolean;
    readonly asAllowedCurrenciesAdded: {
      readonly currencies: Vec<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly isAllowedCurrenciesDeleted: boolean;
    readonly asAllowedCurrenciesDeleted: {
      readonly currencies: Vec<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly isTransferApproved: boolean;
    readonly asTransferApproved: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly source: AccountId32;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'AllowedCurrenciesAdded' | 'AllowedCurrenciesDeleted' | 'TransferApproved';
  }

  /** @name OrmlTokensManagementExtensionEvent (172) */
  interface OrmlTokensManagementExtensionEvent extends Enum {
    readonly isMint: boolean;
    readonly asMint: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurned: boolean;
    readonly asBurned: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly from: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isCreated: boolean;
    readonly asCreated: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly creator: AccountId32;
      readonly owner: AccountId32;
    } & Struct;
    readonly isOwnershipChanged: boolean;
    readonly asOwnershipChanged: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isManagersChanged: boolean;
    readonly asManagersChanged: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly newAdmin: AccountId32;
      readonly newIssuer: AccountId32;
    } & Struct;
    readonly type: 'Mint' | 'Burned' | 'Created' | 'OwnershipChanged' | 'ManagersChanged';
  }

  /** @name TreasuryBuyoutExtensionEvent (173) */
  interface TreasuryBuyoutExtensionEvent extends Enum {
    readonly isBuyout: boolean;
    readonly asBuyout: {
      readonly who: AccountId32;
      readonly buyoutAmount: u128;
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly exchangeAmount: u128;
    } & Struct;
    readonly isBuyoutLimitUpdated: boolean;
    readonly asBuyoutLimitUpdated: {
      readonly limit: Option<u128>;
    } & Struct;
    readonly isAllowedAssetsForBuyoutUpdated: boolean;
    readonly asAllowedAssetsForBuyoutUpdated: {
      readonly allowedAssets: Vec<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly type: 'Buyout' | 'BuyoutLimitUpdated' | 'AllowedAssetsForBuyoutUpdated';
  }

  /** @name BifrostFarmingEvent (174) */
  interface BifrostFarmingEvent extends Enum {
    readonly isFarmingPoolCreated: boolean;
    readonly asFarmingPoolCreated: {
      readonly pid: u32;
    } & Struct;
    readonly isFarmingPoolReset: boolean;
    readonly asFarmingPoolReset: {
      readonly pid: u32;
    } & Struct;
    readonly isFarmingPoolClosed: boolean;
    readonly asFarmingPoolClosed: {
      readonly pid: u32;
    } & Struct;
    readonly isFarmingPoolKilled: boolean;
    readonly asFarmingPoolKilled: {
      readonly pid: u32;
    } & Struct;
    readonly isFarmingPoolEdited: boolean;
    readonly asFarmingPoolEdited: {
      readonly pid: u32;
    } & Struct;
    readonly isCharged: boolean;
    readonly asCharged: {
      readonly who: AccountId32;
      readonly pid: u32;
      readonly rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>;
    } & Struct;
    readonly isDeposited: boolean;
    readonly asDeposited: {
      readonly who: AccountId32;
      readonly pid: u32;
      readonly addValue: u128;
      readonly gaugeInfo: Option<ITuple<[u128, u32]>>;
    } & Struct;
    readonly isWithdrawn: boolean;
    readonly asWithdrawn: {
      readonly who: AccountId32;
      readonly pid: u32;
      readonly removeValue: Option<u128>;
    } & Struct;
    readonly isClaimed: boolean;
    readonly asClaimed: {
      readonly who: AccountId32;
      readonly pid: u32;
    } & Struct;
    readonly isWithdrawClaimed: boolean;
    readonly asWithdrawClaimed: {
      readonly who: AccountId32;
      readonly pid: u32;
    } & Struct;
    readonly isGaugeWithdrawn: boolean;
    readonly asGaugeWithdrawn: {
      readonly who: AccountId32;
      readonly gid: u32;
    } & Struct;
    readonly isAllForceGaugeClaimed: boolean;
    readonly asAllForceGaugeClaimed: {
      readonly gid: u32;
    } & Struct;
    readonly isPartiallyForceGaugeClaimed: boolean;
    readonly asPartiallyForceGaugeClaimed: {
      readonly gid: u32;
    } & Struct;
    readonly isAllRetired: boolean;
    readonly asAllRetired: {
      readonly pid: u32;
    } & Struct;
    readonly isPartiallyRetired: boolean;
    readonly asPartiallyRetired: {
      readonly pid: u32;
    } & Struct;
    readonly isRetireLimitSet: boolean;
    readonly asRetireLimitSet: {
      readonly limit: u32;
    } & Struct;
    readonly isRoundEnd: boolean;
    readonly asRoundEnd: {
      readonly totalVotes: u128;
      readonly startRound: u32;
      readonly endRound: u32;
    } & Struct;
    readonly isRoundStartError: boolean;
    readonly asRoundStartError: {
      readonly info: SpRuntimeDispatchError;
    } & Struct;
    readonly isRoundStart: boolean;
    readonly asRoundStart: {
      readonly roundLength: u32;
    } & Struct;
    readonly isVoted: boolean;
    readonly asVoted: {
      readonly who: AccountId32;
      readonly voteList: Vec<ITuple<[u32, Percent]>>;
    } & Struct;
    readonly isBoostCharged: boolean;
    readonly asBoostCharged: {
      readonly who: AccountId32;
      readonly rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>;
    } & Struct;
    readonly type: 'FarmingPoolCreated' | 'FarmingPoolReset' | 'FarmingPoolClosed' | 'FarmingPoolKilled' | 'FarmingPoolEdited' | 'Charged' | 'Deposited' | 'Withdrawn' | 'Claimed' | 'WithdrawClaimed' | 'GaugeWithdrawn' | 'AllForceGaugeClaimed' | 'PartiallyForceGaugeClaimed' | 'AllRetired' | 'PartiallyRetired' | 'RetireLimitSet' | 'RoundEnd' | 'RoundStartError' | 'RoundStart' | 'Voted' | 'BoostCharged';
  }

  /** @name OrmlAssetRegistryModuleEvent (182) */
  interface OrmlAssetRegistryModuleEvent extends Enum {
    readonly isRegisteredAsset: boolean;
    readonly asRegisteredAsset: {
      readonly assetId: SpacewalkPrimitivesCurrencyId;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly isUpdatedAsset: boolean;
    readonly asUpdatedAsset: {
      readonly assetId: SpacewalkPrimitivesCurrencyId;
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
    } & Struct;
    readonly type: 'RegisteredAsset' | 'UpdatedAsset';
  }

  /** @name OrmlTraitsAssetRegistryAssetMetadata (183) */
  interface OrmlTraitsAssetRegistryAssetMetadata extends Struct {
    readonly decimals: u32;
    readonly name: Bytes;
    readonly symbol: Bytes;
    readonly existentialDeposit: u128;
    readonly location: Option<XcmVersionedMultiLocation>;
    readonly additional: RuntimeCommonAssetRegistryCustomMetadata;
  }

  /** @name RuntimeCommonAssetRegistryCustomMetadata (184) */
  interface RuntimeCommonAssetRegistryCustomMetadata extends Struct {
    readonly diaKeys: RuntimeCommonAssetRegistryDiaKeys;
    readonly feePerSecond: u128;
  }

  /** @name RuntimeCommonAssetRegistryDiaKeys (185) */
  interface RuntimeCommonAssetRegistryDiaKeys extends Struct {
    readonly blockchain: Bytes;
    readonly symbol: Bytes;
  }

  /** @name RuntimeCommonAssetRegistryStringLimit (186) */
  type RuntimeCommonAssetRegistryStringLimit = Null;

  /** @name FrameSystemPhase (189) */
  interface FrameSystemPhase extends Enum {
    readonly isApplyExtrinsic: boolean;
    readonly asApplyExtrinsic: u32;
    readonly isFinalization: boolean;
    readonly isInitialization: boolean;
    readonly type: 'ApplyExtrinsic' | 'Finalization' | 'Initialization';
  }

  /** @name FrameSystemLastRuntimeUpgradeInfo (192) */
  interface FrameSystemLastRuntimeUpgradeInfo extends Struct {
    readonly specVersion: Compact<u32>;
    readonly specName: Text;
  }

  /** @name FrameSystemCall (194) */
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

  /** @name FrameSystemLimitsBlockWeights (197) */
  interface FrameSystemLimitsBlockWeights extends Struct {
    readonly baseBlock: SpWeightsWeightV2Weight;
    readonly maxBlock: SpWeightsWeightV2Weight;
    readonly perClass: FrameSupportDispatchPerDispatchClassWeightsPerClass;
  }

  /** @name FrameSupportDispatchPerDispatchClassWeightsPerClass (198) */
  interface FrameSupportDispatchPerDispatchClassWeightsPerClass extends Struct {
    readonly normal: FrameSystemLimitsWeightsPerClass;
    readonly operational: FrameSystemLimitsWeightsPerClass;
    readonly mandatory: FrameSystemLimitsWeightsPerClass;
  }

  /** @name FrameSystemLimitsWeightsPerClass (199) */
  interface FrameSystemLimitsWeightsPerClass extends Struct {
    readonly baseExtrinsic: SpWeightsWeightV2Weight;
    readonly maxExtrinsic: Option<SpWeightsWeightV2Weight>;
    readonly maxTotal: Option<SpWeightsWeightV2Weight>;
    readonly reserved: Option<SpWeightsWeightV2Weight>;
  }

  /** @name FrameSystemLimitsBlockLength (201) */
  interface FrameSystemLimitsBlockLength extends Struct {
    readonly max: FrameSupportDispatchPerDispatchClassU32;
  }

  /** @name FrameSupportDispatchPerDispatchClassU32 (202) */
  interface FrameSupportDispatchPerDispatchClassU32 extends Struct {
    readonly normal: u32;
    readonly operational: u32;
    readonly mandatory: u32;
  }

  /** @name SpWeightsRuntimeDbWeight (203) */
  interface SpWeightsRuntimeDbWeight extends Struct {
    readonly read: u64;
    readonly write: u64;
  }

  /** @name SpVersionRuntimeVersion (204) */
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

  /** @name FrameSystemError (208) */
  interface FrameSystemError extends Enum {
    readonly isInvalidSpecName: boolean;
    readonly isSpecVersionNeedsToIncrease: boolean;
    readonly isFailedToExtractRuntimeVersion: boolean;
    readonly isNonDefaultComposite: boolean;
    readonly isNonZeroRefCount: boolean;
    readonly isCallFiltered: boolean;
    readonly type: 'InvalidSpecName' | 'SpecVersionNeedsToIncrease' | 'FailedToExtractRuntimeVersion' | 'NonDefaultComposite' | 'NonZeroRefCount' | 'CallFiltered';
  }

  /** @name PolkadotPrimitivesV4PersistedValidationData (209) */
  interface PolkadotPrimitivesV4PersistedValidationData extends Struct {
    readonly parentHead: Bytes;
    readonly relayParentNumber: u32;
    readonly relayParentStorageRoot: H256;
    readonly maxPovSize: u32;
  }

  /** @name PolkadotPrimitivesV4UpgradeRestriction (212) */
  interface PolkadotPrimitivesV4UpgradeRestriction extends Enum {
    readonly isPresent: boolean;
    readonly type: 'Present';
  }

  /** @name SpTrieStorageProof (213) */
  interface SpTrieStorageProof extends Struct {
    readonly trieNodes: BTreeSet<Bytes>;
  }

  /** @name CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot (215) */
  interface CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot extends Struct {
    readonly dmqMqcHead: H256;
    readonly relayDispatchQueueSize: ITuple<[u32, u32]>;
    readonly ingressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV4AbridgedHrmpChannel]>>;
    readonly egressChannels: Vec<ITuple<[u32, PolkadotPrimitivesV4AbridgedHrmpChannel]>>;
  }

  /** @name PolkadotPrimitivesV4AbridgedHrmpChannel (218) */
  interface PolkadotPrimitivesV4AbridgedHrmpChannel extends Struct {
    readonly maxCapacity: u32;
    readonly maxTotalSize: u32;
    readonly maxMessageSize: u32;
    readonly msgCount: u32;
    readonly totalSize: u32;
    readonly mqcHead: Option<H256>;
  }

  /** @name PolkadotPrimitivesV4AbridgedHostConfiguration (220) */
  interface PolkadotPrimitivesV4AbridgedHostConfiguration extends Struct {
    readonly maxCodeSize: u32;
    readonly maxHeadDataSize: u32;
    readonly maxUpwardQueueCount: u32;
    readonly maxUpwardQueueSize: u32;
    readonly maxUpwardMessageSize: u32;
    readonly maxUpwardMessageNumPerCandidate: u32;
    readonly hrmpMaxMessageNumPerCandidate: u32;
    readonly validationUpgradeCooldown: u32;
    readonly validationUpgradeDelay: u32;
  }

  /** @name PolkadotCorePrimitivesOutboundHrmpMessage (226) */
  interface PolkadotCorePrimitivesOutboundHrmpMessage extends Struct {
    readonly recipient: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemCodeUpgradeAuthorization (227) */
  interface CumulusPalletParachainSystemCodeUpgradeAuthorization extends Struct {
    readonly codeHash: H256;
    readonly checkVersion: bool;
  }

  /** @name CumulusPalletParachainSystemCall (228) */
  interface CumulusPalletParachainSystemCall extends Enum {
    readonly isSetValidationData: boolean;
    readonly asSetValidationData: {
      readonly data: CumulusPrimitivesParachainInherentParachainInherentData;
    } & Struct;
    readonly isSudoSendUpwardMessage: boolean;
    readonly asSudoSendUpwardMessage: {
      readonly message: Bytes;
    } & Struct;
    readonly isAuthorizeUpgrade: boolean;
    readonly asAuthorizeUpgrade: {
      readonly codeHash: H256;
      readonly checkVersion: bool;
    } & Struct;
    readonly isEnactAuthorizedUpgrade: boolean;
    readonly asEnactAuthorizedUpgrade: {
      readonly code: Bytes;
    } & Struct;
    readonly type: 'SetValidationData' | 'SudoSendUpwardMessage' | 'AuthorizeUpgrade' | 'EnactAuthorizedUpgrade';
  }

  /** @name CumulusPrimitivesParachainInherentParachainInherentData (229) */
  interface CumulusPrimitivesParachainInherentParachainInherentData extends Struct {
    readonly validationData: PolkadotPrimitivesV4PersistedValidationData;
    readonly relayChainState: SpTrieStorageProof;
    readonly downwardMessages: Vec<PolkadotCorePrimitivesInboundDownwardMessage>;
    readonly horizontalMessages: BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>;
  }

  /** @name PolkadotCorePrimitivesInboundDownwardMessage (231) */
  interface PolkadotCorePrimitivesInboundDownwardMessage extends Struct {
    readonly sentAt: u32;
    readonly msg: Bytes;
  }

  /** @name PolkadotCorePrimitivesInboundHrmpMessage (234) */
  interface PolkadotCorePrimitivesInboundHrmpMessage extends Struct {
    readonly sentAt: u32;
    readonly data: Bytes;
  }

  /** @name CumulusPalletParachainSystemError (237) */
  interface CumulusPalletParachainSystemError extends Enum {
    readonly isOverlappingUpgrades: boolean;
    readonly isProhibitedByPolkadot: boolean;
    readonly isTooBig: boolean;
    readonly isValidationDataNotAvailable: boolean;
    readonly isHostConfigurationNotAvailable: boolean;
    readonly isNotScheduled: boolean;
    readonly isNothingAuthorized: boolean;
    readonly isUnauthorized: boolean;
    readonly type: 'OverlappingUpgrades' | 'ProhibitedByPolkadot' | 'TooBig' | 'ValidationDataNotAvailable' | 'HostConfigurationNotAvailable' | 'NotScheduled' | 'NothingAuthorized' | 'Unauthorized';
  }

  /** @name PalletTimestampCall (238) */
  interface PalletTimestampCall extends Enum {
    readonly isSet: boolean;
    readonly asSet: {
      readonly now: Compact<u64>;
    } & Struct;
    readonly type: 'Set';
  }

  /** @name PalletBalancesBalanceLock (240) */
  interface PalletBalancesBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
    readonly reasons: PalletBalancesReasons;
  }

  /** @name PalletBalancesReasons (241) */
  interface PalletBalancesReasons extends Enum {
    readonly isFee: boolean;
    readonly isMisc: boolean;
    readonly isAll: boolean;
    readonly type: 'Fee' | 'Misc' | 'All';
  }

  /** @name PalletBalancesReserveData (244) */
  interface PalletBalancesReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name FoucocoRuntimeRuntimeHoldReason (248) */
  type FoucocoRuntimeRuntimeHoldReason = Null;

  /** @name PalletBalancesIdAmount (251) */
  interface PalletBalancesIdAmount extends Struct {
    readonly id: Null;
    readonly amount: u128;
  }

  /** @name PalletBalancesCall (253) */
  interface PalletBalancesCall extends Enum {
    readonly isTransferAllowDeath: boolean;
    readonly asTransferAllowDeath: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSetBalanceDeprecated: boolean;
    readonly asSetBalanceDeprecated: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
      readonly oldReserved: Compact<u128>;
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
    readonly isUpgradeAccounts: boolean;
    readonly asUpgradeAccounts: {
      readonly who: Vec<AccountId32>;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isForceSetBalance: boolean;
    readonly asForceSetBalance: {
      readonly who: MultiAddress;
      readonly newFree: Compact<u128>;
    } & Struct;
    readonly type: 'TransferAllowDeath' | 'SetBalanceDeprecated' | 'ForceTransfer' | 'TransferKeepAlive' | 'TransferAll' | 'ForceUnreserve' | 'UpgradeAccounts' | 'Transfer' | 'ForceSetBalance';
  }

  /** @name PalletBalancesError (257) */
  interface PalletBalancesError extends Enum {
    readonly isVestingBalance: boolean;
    readonly isLiquidityRestrictions: boolean;
    readonly isInsufficientBalance: boolean;
    readonly isExistentialDeposit: boolean;
    readonly isExpendability: boolean;
    readonly isExistingVestingSchedule: boolean;
    readonly isDeadAccount: boolean;
    readonly isTooManyReserves: boolean;
    readonly isTooManyHolds: boolean;
    readonly isTooManyFreezes: boolean;
    readonly type: 'VestingBalance' | 'LiquidityRestrictions' | 'InsufficientBalance' | 'ExistentialDeposit' | 'Expendability' | 'ExistingVestingSchedule' | 'DeadAccount' | 'TooManyReserves' | 'TooManyHolds' | 'TooManyFreezes';
  }

  /** @name PalletTransactionPaymentReleases (258) */
  interface PalletTransactionPaymentReleases extends Enum {
    readonly isV1Ancient: boolean;
    readonly isV2: boolean;
    readonly type: 'V1Ancient' | 'V2';
  }

  /** @name PalletSudoCall (259) */
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

  /** @name PalletDemocracyCall (261) */
  interface PalletDemocracyCall extends Enum {
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
      readonly value: Compact<u128>;
    } & Struct;
    readonly isSecond: boolean;
    readonly asSecond: {
      readonly proposal: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly refIndex: Compact<u32>;
      readonly vote: PalletDemocracyVoteAccountVote;
    } & Struct;
    readonly isEmergencyCancel: boolean;
    readonly asEmergencyCancel: {
      readonly refIndex: u32;
    } & Struct;
    readonly isExternalPropose: boolean;
    readonly asExternalPropose: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeMajority: boolean;
    readonly asExternalProposeMajority: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isExternalProposeDefault: boolean;
    readonly asExternalProposeDefault: {
      readonly proposal: FrameSupportPreimagesBounded;
    } & Struct;
    readonly isFastTrack: boolean;
    readonly asFastTrack: {
      readonly proposalHash: H256;
      readonly votingPeriod: u32;
      readonly delay: u32;
    } & Struct;
    readonly isVetoExternal: boolean;
    readonly asVetoExternal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isCancelReferendum: boolean;
    readonly asCancelReferendum: {
      readonly refIndex: Compact<u32>;
    } & Struct;
    readonly isDelegate: boolean;
    readonly asDelegate: {
      readonly to: MultiAddress;
      readonly conviction: PalletDemocracyConviction;
      readonly balance: u128;
    } & Struct;
    readonly isUndelegate: boolean;
    readonly isClearPublicProposals: boolean;
    readonly isUnlock: boolean;
    readonly asUnlock: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isRemoveVote: boolean;
    readonly asRemoveVote: {
      readonly index: u32;
    } & Struct;
    readonly isRemoveOtherVote: boolean;
    readonly asRemoveOtherVote: {
      readonly target: MultiAddress;
      readonly index: u32;
    } & Struct;
    readonly isBlacklist: boolean;
    readonly asBlacklist: {
      readonly proposalHash: H256;
      readonly maybeRefIndex: Option<u32>;
    } & Struct;
    readonly isCancelProposal: boolean;
    readonly asCancelProposal: {
      readonly propIndex: Compact<u32>;
    } & Struct;
    readonly isSetMetadata: boolean;
    readonly asSetMetadata: {
      readonly owner: PalletDemocracyMetadataOwner;
      readonly maybeHash: Option<H256>;
    } & Struct;
    readonly type: 'Propose' | 'Second' | 'Vote' | 'EmergencyCancel' | 'ExternalPropose' | 'ExternalProposeMajority' | 'ExternalProposeDefault' | 'FastTrack' | 'VetoExternal' | 'CancelReferendum' | 'Delegate' | 'Undelegate' | 'ClearPublicProposals' | 'Unlock' | 'RemoveVote' | 'RemoveOtherVote' | 'Blacklist' | 'CancelProposal' | 'SetMetadata';
  }

  /** @name FrameSupportPreimagesBounded (262) */
  interface FrameSupportPreimagesBounded extends Enum {
    readonly isLegacy: boolean;
    readonly asLegacy: {
      readonly hash_: H256;
    } & Struct;
    readonly isInline: boolean;
    readonly asInline: Bytes;
    readonly isLookup: boolean;
    readonly asLookup: {
      readonly hash_: H256;
      readonly len: u32;
    } & Struct;
    readonly type: 'Legacy' | 'Inline' | 'Lookup';
  }

  /** @name PalletDemocracyConviction (264) */
  interface PalletDemocracyConviction extends Enum {
    readonly isNone: boolean;
    readonly isLocked1x: boolean;
    readonly isLocked2x: boolean;
    readonly isLocked3x: boolean;
    readonly isLocked4x: boolean;
    readonly isLocked5x: boolean;
    readonly isLocked6x: boolean;
    readonly type: 'None' | 'Locked1x' | 'Locked2x' | 'Locked3x' | 'Locked4x' | 'Locked5x' | 'Locked6x';
  }

  /** @name PalletCollectiveCall (266) */
  interface PalletCollectiveCall extends Enum {
    readonly isSetMembers: boolean;
    readonly asSetMembers: {
      readonly newMembers: Vec<AccountId32>;
      readonly prime: Option<AccountId32>;
      readonly oldCount: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isPropose: boolean;
    readonly asPropose: {
      readonly threshold: Compact<u32>;
      readonly proposal: Call;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly proposal: H256;
      readonly index: Compact<u32>;
      readonly approve: bool;
    } & Struct;
    readonly isDisapproveProposal: boolean;
    readonly asDisapproveProposal: {
      readonly proposalHash: H256;
    } & Struct;
    readonly isClose: boolean;
    readonly asClose: {
      readonly proposalHash: H256;
      readonly index: Compact<u32>;
      readonly proposalWeightBound: SpWeightsWeightV2Weight;
      readonly lengthBound: Compact<u32>;
    } & Struct;
    readonly type: 'SetMembers' | 'Execute' | 'Propose' | 'Vote' | 'DisapproveProposal' | 'Close';
  }

  /** @name PalletSchedulerCall (268) */
  interface PalletSchedulerCall extends Enum {
    readonly isSchedule: boolean;
    readonly asSchedule: {
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancel: boolean;
    readonly asCancel: {
      readonly when: u32;
      readonly index: u32;
    } & Struct;
    readonly isScheduleNamed: boolean;
    readonly asScheduleNamed: {
      readonly id: U8aFixed;
      readonly when: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isCancelNamed: boolean;
    readonly asCancelNamed: {
      readonly id: U8aFixed;
    } & Struct;
    readonly isScheduleAfter: boolean;
    readonly asScheduleAfter: {
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly isScheduleNamedAfter: boolean;
    readonly asScheduleNamedAfter: {
      readonly id: U8aFixed;
      readonly after: u32;
      readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
      readonly priority: u8;
      readonly call: Call;
    } & Struct;
    readonly type: 'Schedule' | 'Cancel' | 'ScheduleNamed' | 'CancelNamed' | 'ScheduleAfter' | 'ScheduleNamedAfter';
  }

  /** @name PalletPreimageCall (270) */
  interface PalletPreimageCall extends Enum {
    readonly isNotePreimage: boolean;
    readonly asNotePreimage: {
      readonly bytes: Bytes;
    } & Struct;
    readonly isUnnotePreimage: boolean;
    readonly asUnnotePreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isRequestPreimage: boolean;
    readonly asRequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly isUnrequestPreimage: boolean;
    readonly asUnrequestPreimage: {
      readonly hash_: H256;
    } & Struct;
    readonly type: 'NotePreimage' | 'UnnotePreimage' | 'RequestPreimage' | 'UnrequestPreimage';
  }

  /** @name PalletMultisigCall (271) */
  interface PalletMultisigCall extends Enum {
    readonly isAsMultiThreshold1: boolean;
    readonly asAsMultiThreshold1: {
      readonly otherSignatories: Vec<AccountId32>;
      readonly call: Call;
    } & Struct;
    readonly isAsMulti: boolean;
    readonly asAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly call: Call;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isApproveAsMulti: boolean;
    readonly asApproveAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly maybeTimepoint: Option<PalletMultisigTimepoint>;
      readonly callHash: U8aFixed;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isCancelAsMulti: boolean;
    readonly asCancelAsMulti: {
      readonly threshold: u16;
      readonly otherSignatories: Vec<AccountId32>;
      readonly timepoint: PalletMultisigTimepoint;
      readonly callHash: U8aFixed;
    } & Struct;
    readonly type: 'AsMultiThreshold1' | 'AsMulti' | 'ApproveAsMulti' | 'CancelAsMulti';
  }

  /** @name PalletTreasuryCall (273) */
  interface PalletTreasuryCall extends Enum {
    readonly isProposeSpend: boolean;
    readonly asProposeSpend: {
      readonly value: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRejectProposal: boolean;
    readonly asRejectProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isApproveProposal: boolean;
    readonly asApproveProposal: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly isSpend: boolean;
    readonly asSpend: {
      readonly amount: Compact<u128>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isRemoveApproval: boolean;
    readonly asRemoveApproval: {
      readonly proposalId: Compact<u32>;
    } & Struct;
    readonly type: 'ProposeSpend' | 'RejectProposal' | 'ApproveProposal' | 'Spend' | 'RemoveApproval';
  }

  /** @name PalletBountiesCall (274) */
  interface PalletBountiesCall extends Enum {
    readonly isProposeBounty: boolean;
    readonly asProposeBounty: {
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isApproveBounty: boolean;
    readonly asApproveBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly bountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isAwardBounty: boolean;
    readonly asAwardBounty: {
      readonly bountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimBounty: boolean;
    readonly asClaimBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isCloseBounty: boolean;
    readonly asCloseBounty: {
      readonly bountyId: Compact<u32>;
    } & Struct;
    readonly isExtendBountyExpiry: boolean;
    readonly asExtendBountyExpiry: {
      readonly bountyId: Compact<u32>;
      readonly remark: Bytes;
    } & Struct;
    readonly type: 'ProposeBounty' | 'ApproveBounty' | 'ProposeCurator' | 'UnassignCurator' | 'AcceptCurator' | 'AwardBounty' | 'ClaimBounty' | 'CloseBounty' | 'ExtendBountyExpiry';
  }

  /** @name PalletChildBountiesCall (275) */
  interface PalletChildBountiesCall extends Enum {
    readonly isAddChildBounty: boolean;
    readonly asAddChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly value: Compact<u128>;
      readonly description: Bytes;
    } & Struct;
    readonly isProposeCurator: boolean;
    readonly asProposeCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly curator: MultiAddress;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isAcceptCurator: boolean;
    readonly asAcceptCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isUnassignCurator: boolean;
    readonly asUnassignCurator: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isAwardChildBounty: boolean;
    readonly asAwardChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
      readonly beneficiary: MultiAddress;
    } & Struct;
    readonly isClaimChildBounty: boolean;
    readonly asClaimChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly isCloseChildBounty: boolean;
    readonly asCloseChildBounty: {
      readonly parentBountyId: Compact<u32>;
      readonly childBountyId: Compact<u32>;
    } & Struct;
    readonly type: 'AddChildBounty' | 'ProposeCurator' | 'AcceptCurator' | 'UnassignCurator' | 'AwardChildBounty' | 'ClaimChildBounty' | 'CloseChildBounty';
  }

  /** @name PalletProxyCall (276) */
  interface PalletProxyCall extends Enum {
    readonly isProxy: boolean;
    readonly asProxy: {
      readonly real: MultiAddress;
      readonly forceProxyType: Option<RuntimeCommonProxyType>;
      readonly call: Call;
    } & Struct;
    readonly isAddProxy: boolean;
    readonly asAddProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxy: boolean;
    readonly asRemoveProxy: {
      readonly delegate: MultiAddress;
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
    } & Struct;
    readonly isRemoveProxies: boolean;
    readonly isCreatePure: boolean;
    readonly asCreatePure: {
      readonly proxyType: RuntimeCommonProxyType;
      readonly delay: u32;
      readonly index: u16;
    } & Struct;
    readonly isKillPure: boolean;
    readonly asKillPure: {
      readonly spawner: MultiAddress;
      readonly proxyType: RuntimeCommonProxyType;
      readonly index: u16;
      readonly height: Compact<u32>;
      readonly extIndex: Compact<u32>;
    } & Struct;
    readonly isAnnounce: boolean;
    readonly asAnnounce: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRemoveAnnouncement: boolean;
    readonly asRemoveAnnouncement: {
      readonly real: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isRejectAnnouncement: boolean;
    readonly asRejectAnnouncement: {
      readonly delegate: MultiAddress;
      readonly callHash: H256;
    } & Struct;
    readonly isProxyAnnounced: boolean;
    readonly asProxyAnnounced: {
      readonly delegate: MultiAddress;
      readonly real: MultiAddress;
      readonly forceProxyType: Option<RuntimeCommonProxyType>;
      readonly call: Call;
    } & Struct;
    readonly type: 'Proxy' | 'AddProxy' | 'RemoveProxy' | 'RemoveProxies' | 'CreatePure' | 'KillPure' | 'Announce' | 'RemoveAnnouncement' | 'RejectAnnouncement' | 'ProxyAnnounced';
  }

  /** @name PalletSessionCall (278) */
  interface PalletSessionCall extends Enum {
    readonly isSetKeys: boolean;
    readonly asSetKeys: {
      readonly keys_: FoucocoRuntimeSessionKeys;
      readonly proof: Bytes;
    } & Struct;
    readonly isPurgeKeys: boolean;
    readonly type: 'SetKeys' | 'PurgeKeys';
  }

  /** @name FoucocoRuntimeSessionKeys (279) */
  interface FoucocoRuntimeSessionKeys extends Struct {
    readonly aura: SpConsensusAuraSr25519AppSr25519Public;
  }

  /** @name SpConsensusAuraSr25519AppSr25519Public (280) */
  interface SpConsensusAuraSr25519AppSr25519Public extends SpCoreSr25519Public {}

  /** @name SpCoreSr25519Public (281) */
  interface SpCoreSr25519Public extends U8aFixed {}

  /** @name ParachainStakingCall (282) */
  interface ParachainStakingCall extends Enum {
    readonly isForceNewRound: boolean;
    readonly isSetInflation: boolean;
    readonly asSetInflation: {
      readonly collatorMaxRatePercentage: Perquintill;
      readonly collatorAnnualRewardRatePercentage: Perquintill;
      readonly delegatorMaxRatePercentage: Perquintill;
      readonly delegatorAnnualRewardRatePercentage: Perquintill;
    } & Struct;
    readonly isSetMaxSelectedCandidates: boolean;
    readonly asSetMaxSelectedCandidates: {
      readonly new_: u32;
    } & Struct;
    readonly isSetBlocksPerRound: boolean;
    readonly asSetBlocksPerRound: {
      readonly new_: u32;
    } & Struct;
    readonly isSetMaxCandidateStake: boolean;
    readonly asSetMaxCandidateStake: {
      readonly new_: u128;
    } & Struct;
    readonly isForceRemoveCandidate: boolean;
    readonly asForceRemoveCandidate: {
      readonly collator: MultiAddress;
    } & Struct;
    readonly isJoinCandidates: boolean;
    readonly asJoinCandidates: {
      readonly stake: u128;
    } & Struct;
    readonly isInitLeaveCandidates: boolean;
    readonly isExecuteLeaveCandidates: boolean;
    readonly asExecuteLeaveCandidates: {
      readonly collator: MultiAddress;
    } & Struct;
    readonly isCancelLeaveCandidates: boolean;
    readonly isCandidateStakeMore: boolean;
    readonly asCandidateStakeMore: {
      readonly more: u128;
    } & Struct;
    readonly isCandidateStakeLess: boolean;
    readonly asCandidateStakeLess: {
      readonly less: u128;
    } & Struct;
    readonly isJoinDelegators: boolean;
    readonly asJoinDelegators: {
      readonly collator: MultiAddress;
      readonly amount: u128;
    } & Struct;
    readonly isLeaveDelegators: boolean;
    readonly isDelegatorStakeMore: boolean;
    readonly asDelegatorStakeMore: {
      readonly candidate: MultiAddress;
      readonly more: u128;
    } & Struct;
    readonly isDelegatorStakeLess: boolean;
    readonly asDelegatorStakeLess: {
      readonly candidate: MultiAddress;
      readonly less: u128;
    } & Struct;
    readonly isUnlockUnstaked: boolean;
    readonly asUnlockUnstaked: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isClaimRewards: boolean;
    readonly isIncrementCollatorRewards: boolean;
    readonly isIncrementDelegatorRewards: boolean;
    readonly isExecuteScheduledRewardChange: boolean;
    readonly type: 'ForceNewRound' | 'SetInflation' | 'SetMaxSelectedCandidates' | 'SetBlocksPerRound' | 'SetMaxCandidateStake' | 'ForceRemoveCandidate' | 'JoinCandidates' | 'InitLeaveCandidates' | 'ExecuteLeaveCandidates' | 'CancelLeaveCandidates' | 'CandidateStakeMore' | 'CandidateStakeLess' | 'JoinDelegators' | 'LeaveDelegators' | 'DelegatorStakeMore' | 'DelegatorStakeLess' | 'UnlockUnstaked' | 'ClaimRewards' | 'IncrementCollatorRewards' | 'IncrementDelegatorRewards' | 'ExecuteScheduledRewardChange';
  }

  /** @name CumulusPalletXcmpQueueCall (283) */
  interface CumulusPalletXcmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isSuspendXcmExecution: boolean;
    readonly isResumeXcmExecution: boolean;
    readonly isUpdateSuspendThreshold: boolean;
    readonly asUpdateSuspendThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateDropThreshold: boolean;
    readonly asUpdateDropThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateResumeThreshold: boolean;
    readonly asUpdateResumeThreshold: {
      readonly new_: u32;
    } & Struct;
    readonly isUpdateThresholdWeight: boolean;
    readonly asUpdateThresholdWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateWeightRestrictDecay: boolean;
    readonly asUpdateWeightRestrictDecay: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isUpdateXcmpMaxIndividualWeight: boolean;
    readonly asUpdateXcmpMaxIndividualWeight: {
      readonly new_: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight' | 'SuspendXcmExecution' | 'ResumeXcmExecution' | 'UpdateSuspendThreshold' | 'UpdateDropThreshold' | 'UpdateResumeThreshold' | 'UpdateThresholdWeight' | 'UpdateWeightRestrictDecay' | 'UpdateXcmpMaxIndividualWeight';
  }

  /** @name PalletXcmCall (284) */
  interface PalletXcmCall extends Enum {
    readonly isSend: boolean;
    readonly asSend: {
      readonly dest: XcmVersionedMultiLocation;
      readonly message: XcmVersionedXcm;
    } & Struct;
    readonly isTeleportAssets: boolean;
    readonly asTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isReserveTransferAssets: boolean;
    readonly asReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
    } & Struct;
    readonly isExecute: boolean;
    readonly asExecute: {
      readonly message: XcmVersionedXcm;
      readonly maxWeight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly isForceXcmVersion: boolean;
    readonly asForceXcmVersion: {
      readonly location: XcmV3MultiLocation;
      readonly xcmVersion: u32;
    } & Struct;
    readonly isForceDefaultXcmVersion: boolean;
    readonly asForceDefaultXcmVersion: {
      readonly maybeXcmVersion: Option<u32>;
    } & Struct;
    readonly isForceSubscribeVersionNotify: boolean;
    readonly asForceSubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isForceUnsubscribeVersionNotify: boolean;
    readonly asForceUnsubscribeVersionNotify: {
      readonly location: XcmVersionedMultiLocation;
    } & Struct;
    readonly isLimitedReserveTransferAssets: boolean;
    readonly asLimitedReserveTransferAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isLimitedTeleportAssets: boolean;
    readonly asLimitedTeleportAssets: {
      readonly dest: XcmVersionedMultiLocation;
      readonly beneficiary: XcmVersionedMultiLocation;
      readonly assets: XcmVersionedMultiAssets;
      readonly feeAssetItem: u32;
      readonly weightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isForceSuspension: boolean;
    readonly asForceSuspension: {
      readonly suspended: bool;
    } & Struct;
    readonly type: 'Send' | 'TeleportAssets' | 'ReserveTransferAssets' | 'Execute' | 'ForceXcmVersion' | 'ForceDefaultXcmVersion' | 'ForceSubscribeVersionNotify' | 'ForceUnsubscribeVersionNotify' | 'LimitedReserveTransferAssets' | 'LimitedTeleportAssets' | 'ForceSuspension';
  }

  /** @name XcmVersionedXcm (285) */
  interface XcmVersionedXcm extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2Xcm;
    readonly isV3: boolean;
    readonly asV3: XcmV3Xcm;
    readonly type: 'V2' | 'V3';
  }

  /** @name XcmV2Xcm (286) */
  interface XcmV2Xcm extends Vec<XcmV2Instruction> {}

  /** @name XcmV2Instruction (288) */
  interface XcmV2Instruction extends Enum {
    readonly isWithdrawAsset: boolean;
    readonly asWithdrawAsset: XcmV2MultiassetMultiAssets;
    readonly isReserveAssetDeposited: boolean;
    readonly asReserveAssetDeposited: XcmV2MultiassetMultiAssets;
    readonly isReceiveTeleportedAsset: boolean;
    readonly asReceiveTeleportedAsset: XcmV2MultiassetMultiAssets;
    readonly isQueryResponse: boolean;
    readonly asQueryResponse: {
      readonly queryId: Compact<u64>;
      readonly response: XcmV2Response;
      readonly maxWeight: Compact<u64>;
    } & Struct;
    readonly isTransferAsset: boolean;
    readonly asTransferAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isTransferReserveAsset: boolean;
    readonly asTransferReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isTransact: boolean;
    readonly asTransact: {
      readonly originType: XcmV2OriginKind;
      readonly requireWeightAtMost: Compact<u64>;
      readonly call: XcmDoubleEncoded;
    } & Struct;
    readonly isHrmpNewChannelOpenRequest: boolean;
    readonly asHrmpNewChannelOpenRequest: {
      readonly sender: Compact<u32>;
      readonly maxMessageSize: Compact<u32>;
      readonly maxCapacity: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelAccepted: boolean;
    readonly asHrmpChannelAccepted: {
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isHrmpChannelClosing: boolean;
    readonly asHrmpChannelClosing: {
      readonly initiator: Compact<u32>;
      readonly sender: Compact<u32>;
      readonly recipient: Compact<u32>;
    } & Struct;
    readonly isClearOrigin: boolean;
    readonly isDescendOrigin: boolean;
    readonly asDescendOrigin: XcmV2MultilocationJunctions;
    readonly isReportError: boolean;
    readonly asReportError: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isDepositAsset: boolean;
    readonly asDepositAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly beneficiary: XcmV2MultiLocation;
    } & Struct;
    readonly isDepositReserveAsset: boolean;
    readonly asDepositReserveAsset: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxAssets: Compact<u32>;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isExchangeAsset: boolean;
    readonly asExchangeAsset: {
      readonly give: XcmV2MultiassetMultiAssetFilter;
      readonly receive: XcmV2MultiassetMultiAssets;
    } & Struct;
    readonly isInitiateReserveWithdraw: boolean;
    readonly asInitiateReserveWithdraw: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly reserve: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isInitiateTeleport: boolean;
    readonly asInitiateTeleport: {
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly dest: XcmV2MultiLocation;
      readonly xcm: XcmV2Xcm;
    } & Struct;
    readonly isQueryHolding: boolean;
    readonly asQueryHolding: {
      readonly queryId: Compact<u64>;
      readonly dest: XcmV2MultiLocation;
      readonly assets: XcmV2MultiassetMultiAssetFilter;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isBuyExecution: boolean;
    readonly asBuyExecution: {
      readonly fees: XcmV2MultiAsset;
      readonly weightLimit: XcmV2WeightLimit;
    } & Struct;
    readonly isRefundSurplus: boolean;
    readonly isSetErrorHandler: boolean;
    readonly asSetErrorHandler: XcmV2Xcm;
    readonly isSetAppendix: boolean;
    readonly asSetAppendix: XcmV2Xcm;
    readonly isClearError: boolean;
    readonly isClaimAsset: boolean;
    readonly asClaimAsset: {
      readonly assets: XcmV2MultiassetMultiAssets;
      readonly ticket: XcmV2MultiLocation;
    } & Struct;
    readonly isTrap: boolean;
    readonly asTrap: Compact<u64>;
    readonly isSubscribeVersion: boolean;
    readonly asSubscribeVersion: {
      readonly queryId: Compact<u64>;
      readonly maxResponseWeight: Compact<u64>;
    } & Struct;
    readonly isUnsubscribeVersion: boolean;
    readonly type: 'WithdrawAsset' | 'ReserveAssetDeposited' | 'ReceiveTeleportedAsset' | 'QueryResponse' | 'TransferAsset' | 'TransferReserveAsset' | 'Transact' | 'HrmpNewChannelOpenRequest' | 'HrmpChannelAccepted' | 'HrmpChannelClosing' | 'ClearOrigin' | 'DescendOrigin' | 'ReportError' | 'DepositAsset' | 'DepositReserveAsset' | 'ExchangeAsset' | 'InitiateReserveWithdraw' | 'InitiateTeleport' | 'QueryHolding' | 'BuyExecution' | 'RefundSurplus' | 'SetErrorHandler' | 'SetAppendix' | 'ClearError' | 'ClaimAsset' | 'Trap' | 'SubscribeVersion' | 'UnsubscribeVersion';
  }

  /** @name XcmV2Response (289) */
  interface XcmV2Response extends Enum {
    readonly isNull: boolean;
    readonly isAssets: boolean;
    readonly asAssets: XcmV2MultiassetMultiAssets;
    readonly isExecutionResult: boolean;
    readonly asExecutionResult: Option<ITuple<[u32, XcmV2TraitsError]>>;
    readonly isVersion: boolean;
    readonly asVersion: u32;
    readonly type: 'Null' | 'Assets' | 'ExecutionResult' | 'Version';
  }

  /** @name XcmV2TraitsError (292) */
  interface XcmV2TraitsError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnimplemented: boolean;
    readonly isUntrustedReserveLocation: boolean;
    readonly isUntrustedTeleportLocation: boolean;
    readonly isMultiLocationFull: boolean;
    readonly isMultiLocationNotInvertible: boolean;
    readonly isBadOrigin: boolean;
    readonly isInvalidLocation: boolean;
    readonly isAssetNotFound: boolean;
    readonly isFailedToTransactAsset: boolean;
    readonly isNotWithdrawable: boolean;
    readonly isLocationCannotHold: boolean;
    readonly isExceedsMaxMessageSize: boolean;
    readonly isDestinationUnsupported: boolean;
    readonly isTransport: boolean;
    readonly isUnroutable: boolean;
    readonly isUnknownClaim: boolean;
    readonly isFailedToDecode: boolean;
    readonly isMaxWeightInvalid: boolean;
    readonly isNotHoldingFees: boolean;
    readonly isTooExpensive: boolean;
    readonly isTrap: boolean;
    readonly asTrap: u64;
    readonly isUnhandledXcmVersion: boolean;
    readonly isWeightLimitReached: boolean;
    readonly asWeightLimitReached: u64;
    readonly isBarrier: boolean;
    readonly isWeightNotComputable: boolean;
    readonly type: 'Overflow' | 'Unimplemented' | 'UntrustedReserveLocation' | 'UntrustedTeleportLocation' | 'MultiLocationFull' | 'MultiLocationNotInvertible' | 'BadOrigin' | 'InvalidLocation' | 'AssetNotFound' | 'FailedToTransactAsset' | 'NotWithdrawable' | 'LocationCannotHold' | 'ExceedsMaxMessageSize' | 'DestinationUnsupported' | 'Transport' | 'Unroutable' | 'UnknownClaim' | 'FailedToDecode' | 'MaxWeightInvalid' | 'NotHoldingFees' | 'TooExpensive' | 'Trap' | 'UnhandledXcmVersion' | 'WeightLimitReached' | 'Barrier' | 'WeightNotComputable';
  }

  /** @name XcmV2MultiassetMultiAssetFilter (293) */
  interface XcmV2MultiassetMultiAssetFilter extends Enum {
    readonly isDefinite: boolean;
    readonly asDefinite: XcmV2MultiassetMultiAssets;
    readonly isWild: boolean;
    readonly asWild: XcmV2MultiassetWildMultiAsset;
    readonly type: 'Definite' | 'Wild';
  }

  /** @name XcmV2MultiassetWildMultiAsset (294) */
  interface XcmV2MultiassetWildMultiAsset extends Enum {
    readonly isAll: boolean;
    readonly isAllOf: boolean;
    readonly asAllOf: {
      readonly id: XcmV2MultiassetAssetId;
      readonly fun: XcmV2MultiassetWildFungibility;
    } & Struct;
    readonly type: 'All' | 'AllOf';
  }

  /** @name XcmV2MultiassetWildFungibility (295) */
  interface XcmV2MultiassetWildFungibility extends Enum {
    readonly isFungible: boolean;
    readonly isNonFungible: boolean;
    readonly type: 'Fungible' | 'NonFungible';
  }

  /** @name XcmV2WeightLimit (296) */
  interface XcmV2WeightLimit extends Enum {
    readonly isUnlimited: boolean;
    readonly isLimited: boolean;
    readonly asLimited: Compact<u64>;
    readonly type: 'Unlimited' | 'Limited';
  }

  /** @name CumulusPalletDmpQueueCall (305) */
  interface CumulusPalletDmpQueueCall extends Enum {
    readonly isServiceOverweight: boolean;
    readonly asServiceOverweight: {
      readonly index: u64;
      readonly weightLimit: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'ServiceOverweight';
  }

  /** @name PalletVestingCall (306) */
  interface PalletVestingCall extends Enum {
    readonly isVest: boolean;
    readonly isVestOther: boolean;
    readonly asVestOther: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isVestedTransfer: boolean;
    readonly asVestedTransfer: {
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isForceVestedTransfer: boolean;
    readonly asForceVestedTransfer: {
      readonly source: MultiAddress;
      readonly target: MultiAddress;
      readonly schedule: PalletVestingVestingInfo;
    } & Struct;
    readonly isMergeSchedules: boolean;
    readonly asMergeSchedules: {
      readonly schedule1Index: u32;
      readonly schedule2Index: u32;
    } & Struct;
    readonly type: 'Vest' | 'VestOther' | 'VestedTransfer' | 'ForceVestedTransfer' | 'MergeSchedules';
  }

  /** @name PalletVestingVestingInfo (307) */
  interface PalletVestingVestingInfo extends Struct {
    readonly locked: u128;
    readonly perBlock: u128;
    readonly startingBlock: u32;
  }

  /** @name PalletUtilityCall (308) */
  interface PalletUtilityCall extends Enum {
    readonly isBatch: boolean;
    readonly asBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isAsDerivative: boolean;
    readonly asAsDerivative: {
      readonly index: u16;
      readonly call: Call;
    } & Struct;
    readonly isBatchAll: boolean;
    readonly asBatchAll: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isDispatchAs: boolean;
    readonly asDispatchAs: {
      readonly asOrigin: FoucocoRuntimeOriginCaller;
      readonly call: Call;
    } & Struct;
    readonly isForceBatch: boolean;
    readonly asForceBatch: {
      readonly calls: Vec<Call>;
    } & Struct;
    readonly isWithWeight: boolean;
    readonly asWithWeight: {
      readonly call: Call;
      readonly weight: SpWeightsWeightV2Weight;
    } & Struct;
    readonly type: 'Batch' | 'AsDerivative' | 'BatchAll' | 'DispatchAs' | 'ForceBatch' | 'WithWeight';
  }

  /** @name FoucocoRuntimeOriginCaller (310) */
  interface FoucocoRuntimeOriginCaller extends Enum {
    readonly isSystem: boolean;
    readonly asSystem: FrameSupportDispatchRawOrigin;
    readonly isVoid: boolean;
    readonly isCouncil: boolean;
    readonly asCouncil: PalletCollectiveRawOrigin;
    readonly isTechnicalCommittee: boolean;
    readonly asTechnicalCommittee: PalletCollectiveRawOrigin;
    readonly isPolkadotXcm: boolean;
    readonly asPolkadotXcm: PalletXcmOrigin;
    readonly isCumulusXcm: boolean;
    readonly asCumulusXcm: CumulusPalletXcmOrigin;
    readonly type: 'System' | 'Void' | 'Council' | 'TechnicalCommittee' | 'PolkadotXcm' | 'CumulusXcm';
  }

  /** @name FrameSupportDispatchRawOrigin (311) */
  interface FrameSupportDispatchRawOrigin extends Enum {
    readonly isRoot: boolean;
    readonly isSigned: boolean;
    readonly asSigned: AccountId32;
    readonly isNone: boolean;
    readonly type: 'Root' | 'Signed' | 'None';
  }

  /** @name PalletCollectiveRawOrigin (312) */
  interface PalletCollectiveRawOrigin extends Enum {
    readonly isMembers: boolean;
    readonly asMembers: ITuple<[u32, u32]>;
    readonly isMember: boolean;
    readonly asMember: AccountId32;
    readonly isPhantom: boolean;
    readonly type: 'Members' | 'Member' | 'Phantom';
  }

  /** @name PalletXcmOrigin (314) */
  interface PalletXcmOrigin extends Enum {
    readonly isXcm: boolean;
    readonly asXcm: XcmV3MultiLocation;
    readonly isResponse: boolean;
    readonly asResponse: XcmV3MultiLocation;
    readonly type: 'Xcm' | 'Response';
  }

  /** @name CumulusPalletXcmOrigin (315) */
  interface CumulusPalletXcmOrigin extends Enum {
    readonly isRelay: boolean;
    readonly isSiblingParachain: boolean;
    readonly asSiblingParachain: u32;
    readonly type: 'Relay' | 'SiblingParachain';
  }

  /** @name SpCoreVoid (316) */
  type SpCoreVoid = Null;

  /** @name OrmlCurrenciesModuleCall (317) */
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

  /** @name OrmlTokensModuleCall (318) */
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

  /** @name OrmlXtokensModuleCall (319) */
  interface OrmlXtokensModuleCall extends Enum {
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiasset: boolean;
    readonly asTransferMultiasset: {
      readonly asset: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferWithFee: boolean;
    readonly asTransferWithFee: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly amount: u128;
      readonly fee: u128;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassetWithFee: boolean;
    readonly asTransferMultiassetWithFee: {
      readonly asset: XcmVersionedMultiAsset;
      readonly fee: XcmVersionedMultiAsset;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMulticurrencies: boolean;
    readonly asTransferMulticurrencies: {
      readonly currencies: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly isTransferMultiassets: boolean;
    readonly asTransferMultiassets: {
      readonly assets: XcmVersionedMultiAssets;
      readonly feeItem: u32;
      readonly dest: XcmVersionedMultiLocation;
      readonly destWeightLimit: XcmV3WeightLimit;
    } & Struct;
    readonly type: 'Transfer' | 'TransferMultiasset' | 'TransferWithFee' | 'TransferMultiassetWithFee' | 'TransferMulticurrencies' | 'TransferMultiassets';
  }

  /** @name XcmVersionedMultiAsset (320) */
  interface XcmVersionedMultiAsset extends Enum {
    readonly isV2: boolean;
    readonly asV2: XcmV2MultiAsset;
    readonly isV3: boolean;
    readonly asV3: XcmV3MultiAsset;
    readonly type: 'V2' | 'V3';
  }

  /** @name PalletIdentityCall (321) */
  interface PalletIdentityCall extends Enum {
    readonly isAddRegistrar: boolean;
    readonly asAddRegistrar: {
      readonly account: MultiAddress;
    } & Struct;
    readonly isSetIdentity: boolean;
    readonly asSetIdentity: {
      readonly info: PalletIdentityIdentityInfo;
    } & Struct;
    readonly isSetSubs: boolean;
    readonly asSetSubs: {
      readonly subs: Vec<ITuple<[AccountId32, Data]>>;
    } & Struct;
    readonly isClearIdentity: boolean;
    readonly isRequestJudgement: boolean;
    readonly asRequestJudgement: {
      readonly regIndex: Compact<u32>;
      readonly maxFee: Compact<u128>;
    } & Struct;
    readonly isCancelRequest: boolean;
    readonly asCancelRequest: {
      readonly regIndex: u32;
    } & Struct;
    readonly isSetFee: boolean;
    readonly asSetFee: {
      readonly index: Compact<u32>;
      readonly fee: Compact<u128>;
    } & Struct;
    readonly isSetAccountId: boolean;
    readonly asSetAccountId: {
      readonly index: Compact<u32>;
      readonly new_: MultiAddress;
    } & Struct;
    readonly isSetFields: boolean;
    readonly asSetFields: {
      readonly index: Compact<u32>;
      readonly fields: PalletIdentityBitFlags;
    } & Struct;
    readonly isProvideJudgement: boolean;
    readonly asProvideJudgement: {
      readonly regIndex: Compact<u32>;
      readonly target: MultiAddress;
      readonly judgement: PalletIdentityJudgement;
      readonly identity: H256;
    } & Struct;
    readonly isKillIdentity: boolean;
    readonly asKillIdentity: {
      readonly target: MultiAddress;
    } & Struct;
    readonly isAddSub: boolean;
    readonly asAddSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRenameSub: boolean;
    readonly asRenameSub: {
      readonly sub: MultiAddress;
      readonly data: Data;
    } & Struct;
    readonly isRemoveSub: boolean;
    readonly asRemoveSub: {
      readonly sub: MultiAddress;
    } & Struct;
    readonly isQuitSub: boolean;
    readonly type: 'AddRegistrar' | 'SetIdentity' | 'SetSubs' | 'ClearIdentity' | 'RequestJudgement' | 'CancelRequest' | 'SetFee' | 'SetAccountId' | 'SetFields' | 'ProvideJudgement' | 'KillIdentity' | 'AddSub' | 'RenameSub' | 'RemoveSub' | 'QuitSub';
  }

  /** @name PalletIdentityIdentityInfo (322) */
  interface PalletIdentityIdentityInfo extends Struct {
    readonly additional: Vec<ITuple<[Data, Data]>>;
    readonly display: Data;
    readonly legal: Data;
    readonly web: Data;
    readonly riot: Data;
    readonly email: Data;
    readonly pgpFingerprint: Option<U8aFixed>;
    readonly image: Data;
    readonly twitter: Data;
  }

  /** @name PalletIdentityBitFlags (357) */
  interface PalletIdentityBitFlags extends Set {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
  }

  /** @name PalletIdentityIdentityField (358) */
  interface PalletIdentityIdentityField extends Enum {
    readonly isDisplay: boolean;
    readonly isLegal: boolean;
    readonly isWeb: boolean;
    readonly isRiot: boolean;
    readonly isEmail: boolean;
    readonly isPgpFingerprint: boolean;
    readonly isImage: boolean;
    readonly isTwitter: boolean;
    readonly type: 'Display' | 'Legal' | 'Web' | 'Riot' | 'Email' | 'PgpFingerprint' | 'Image' | 'Twitter';
  }

  /** @name PalletIdentityJudgement (359) */
  interface PalletIdentityJudgement extends Enum {
    readonly isUnknown: boolean;
    readonly isFeePaid: boolean;
    readonly asFeePaid: u128;
    readonly isReasonable: boolean;
    readonly isKnownGood: boolean;
    readonly isOutOfDate: boolean;
    readonly isLowQuality: boolean;
    readonly isErroneous: boolean;
    readonly type: 'Unknown' | 'FeePaid' | 'Reasonable' | 'KnownGood' | 'OutOfDate' | 'LowQuality' | 'Erroneous';
  }

  /** @name PalletContractsCall (360) */
  interface PalletContractsCall extends Enum {
    readonly isCallOldWeight: boolean;
    readonly asCallOldWeight: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCodeOldWeight: boolean;
    readonly asInstantiateWithCodeOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiateOldWeight: boolean;
    readonly asInstantiateOldWeight: {
      readonly value: Compact<u128>;
      readonly gasLimit: Compact<u64>;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isUploadCode: boolean;
    readonly asUploadCode: {
      readonly code: Bytes;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly determinism: PalletContractsWasmDeterminism;
    } & Struct;
    readonly isRemoveCode: boolean;
    readonly asRemoveCode: {
      readonly codeHash: H256;
    } & Struct;
    readonly isSetCode: boolean;
    readonly asSetCode: {
      readonly dest: MultiAddress;
      readonly codeHash: H256;
    } & Struct;
    readonly isCall: boolean;
    readonly asCall: {
      readonly dest: MultiAddress;
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly data: Bytes;
    } & Struct;
    readonly isInstantiateWithCode: boolean;
    readonly asInstantiateWithCode: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly code: Bytes;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly isInstantiate: boolean;
    readonly asInstantiate: {
      readonly value: Compact<u128>;
      readonly gasLimit: SpWeightsWeightV2Weight;
      readonly storageDepositLimit: Option<Compact<u128>>;
      readonly codeHash: H256;
      readonly data: Bytes;
      readonly salt: Bytes;
    } & Struct;
    readonly type: 'CallOldWeight' | 'InstantiateWithCodeOldWeight' | 'InstantiateOldWeight' | 'UploadCode' | 'RemoveCode' | 'SetCode' | 'Call' | 'InstantiateWithCode' | 'Instantiate';
  }

  /** @name PalletContractsWasmDeterminism (362) */
  interface PalletContractsWasmDeterminism extends Enum {
    readonly isEnforced: boolean;
    readonly isRelaxed: boolean;
    readonly type: 'Enforced' | 'Relaxed';
  }

  /** @name DiaOracleCall (363) */
  interface DiaOracleCall extends Enum {
    readonly isAddCurrency: boolean;
    readonly asAddCurrency: {
      readonly blockchain: Bytes;
      readonly symbol: Bytes;
    } & Struct;
    readonly isRemoveCurrency: boolean;
    readonly asRemoveCurrency: {
      readonly blockchain: Bytes;
      readonly symbol: Bytes;
    } & Struct;
    readonly isAuthorizeAccount: boolean;
    readonly asAuthorizeAccount: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isDeauthorizeAccount: boolean;
    readonly asDeauthorizeAccount: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isSetUpdatedCoinInfos: boolean;
    readonly asSetUpdatedCoinInfos: {
      readonly coinInfos: Vec<ITuple<[ITuple<[Bytes, Bytes]>, DiaOracleDiaCoinInfo]>>;
    } & Struct;
    readonly isSetBatchingApi: boolean;
    readonly asSetBatchingApi: {
      readonly api: Bytes;
    } & Struct;
    readonly type: 'AddCurrency' | 'RemoveCurrency' | 'AuthorizeAccount' | 'DeauthorizeAccount' | 'SetUpdatedCoinInfos' | 'SetBatchingApi';
  }

  /** @name ZenlinkProtocolCall (364) */
  interface ZenlinkProtocolCall extends Enum {
    readonly isSetFeeReceiver: boolean;
    readonly asSetFeeReceiver: {
      readonly sendTo: Option<MultiAddress>;
    } & Struct;
    readonly isSetFeePoint: boolean;
    readonly asSetFeePoint: {
      readonly feePoint: u8;
    } & Struct;
    readonly isTransfer: boolean;
    readonly asTransfer: {
      readonly assetId: ZenlinkProtocolPrimitivesAssetId;
      readonly recipient: MultiAddress;
      readonly amount: Compact<u128>;
    } & Struct;
    readonly isCreatePair: boolean;
    readonly asCreatePair: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
    } & Struct;
    readonly isAddLiquidity: boolean;
    readonly asAddLiquidity: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly amount0Desired: Compact<u128>;
      readonly amount1Desired: Compact<u128>;
      readonly amount0Min: Compact<u128>;
      readonly amount1Min: Compact<u128>;
      readonly deadline: Compact<u32>;
    } & Struct;
    readonly isRemoveLiquidity: boolean;
    readonly asRemoveLiquidity: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly liquidity: Compact<u128>;
      readonly amount0Min: Compact<u128>;
      readonly amount1Min: Compact<u128>;
      readonly recipient: MultiAddress;
      readonly deadline: Compact<u32>;
    } & Struct;
    readonly isSwapExactAssetsForAssets: boolean;
    readonly asSwapExactAssetsForAssets: {
      readonly amountIn: Compact<u128>;
      readonly amountOutMin: Compact<u128>;
      readonly path: Vec<ZenlinkProtocolPrimitivesAssetId>;
      readonly recipient: MultiAddress;
      readonly deadline: Compact<u32>;
    } & Struct;
    readonly isSwapAssetsForExactAssets: boolean;
    readonly asSwapAssetsForExactAssets: {
      readonly amountOut: Compact<u128>;
      readonly amountInMax: Compact<u128>;
      readonly path: Vec<ZenlinkProtocolPrimitivesAssetId>;
      readonly recipient: MultiAddress;
      readonly deadline: Compact<u32>;
    } & Struct;
    readonly isBootstrapCreate: boolean;
    readonly asBootstrapCreate: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly targetSupply0: Compact<u128>;
      readonly targetSupply1: Compact<u128>;
      readonly capacitySupply0: Compact<u128>;
      readonly capacitySupply1: Compact<u128>;
      readonly end: Compact<u32>;
      readonly rewards: Vec<ZenlinkProtocolPrimitivesAssetId>;
      readonly limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
    } & Struct;
    readonly isBootstrapContribute: boolean;
    readonly asBootstrapContribute: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly amount0Contribute: Compact<u128>;
      readonly amount1Contribute: Compact<u128>;
      readonly deadline: Compact<u32>;
    } & Struct;
    readonly isBootstrapClaim: boolean;
    readonly asBootstrapClaim: {
      readonly recipient: MultiAddress;
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly deadline: Compact<u32>;
    } & Struct;
    readonly isBootstrapEnd: boolean;
    readonly asBootstrapEnd: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
    } & Struct;
    readonly isBootstrapUpdate: boolean;
    readonly asBootstrapUpdate: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly targetSupply0: Compact<u128>;
      readonly targetSupply1: Compact<u128>;
      readonly capacitySupply0: Compact<u128>;
      readonly capacitySupply1: Compact<u128>;
      readonly end: Compact<u32>;
      readonly rewards: Vec<ZenlinkProtocolPrimitivesAssetId>;
      readonly limits: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
    } & Struct;
    readonly isBootstrapRefund: boolean;
    readonly asBootstrapRefund: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
    } & Struct;
    readonly isBootstrapChargeReward: boolean;
    readonly asBootstrapChargeReward: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly chargeRewards: Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>;
    } & Struct;
    readonly isBootstrapWithdrawReward: boolean;
    readonly asBootstrapWithdrawReward: {
      readonly asset0: ZenlinkProtocolPrimitivesAssetId;
      readonly asset1: ZenlinkProtocolPrimitivesAssetId;
      readonly recipient: MultiAddress;
    } & Struct;
    readonly type: 'SetFeeReceiver' | 'SetFeePoint' | 'Transfer' | 'CreatePair' | 'AddLiquidity' | 'RemoveLiquidity' | 'SwapExactAssetsForAssets' | 'SwapAssetsForExactAssets' | 'BootstrapCreate' | 'BootstrapContribute' | 'BootstrapClaim' | 'BootstrapEnd' | 'BootstrapUpdate' | 'BootstrapRefund' | 'BootstrapChargeReward' | 'BootstrapWithdrawReward';
  }

  /** @name FeeCall (366) */
  interface FeeCall extends Enum {
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
    readonly type: 'SetIssueFee' | 'SetIssueGriefingCollateral' | 'SetRedeemFee' | 'SetPremiumRedeemFee' | 'SetPunishmentFee' | 'SetReplaceGriefingCollateral';
  }

  /** @name IssueCall (367) */
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
    readonly isMinimumTransferAmountUpdate: boolean;
    readonly asMinimumTransferAmountUpdate: {
      readonly newMinimumAmount: u128;
    } & Struct;
    readonly type: 'RequestIssue' | 'ExecuteIssue' | 'CancelIssue' | 'SetIssuePeriod' | 'RateLimitUpdate' | 'MinimumTransferAmountUpdate';
  }

  /** @name NominationCall (368) */
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

  /** @name OracleCall (369) */
  interface OracleCall extends Enum {
    readonly isUpdateOracleKeys: boolean;
    readonly asUpdateOracleKeys: {
      readonly oracleKeys: Vec<SpacewalkPrimitivesOracleKey>;
    } & Struct;
    readonly isSetMaxDelay: boolean;
    readonly asSetMaxDelay: {
      readonly newMaxDelay: u64;
    } & Struct;
    readonly type: 'UpdateOracleKeys' | 'SetMaxDelay';
  }

  /** @name RedeemCall (370) */
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
    readonly isMinimumTransferAmountUpdate: boolean;
    readonly asMinimumTransferAmountUpdate: {
      readonly newMinimumAmount: u128;
    } & Struct;
    readonly type: 'RequestRedeem' | 'LiquidationRedeem' | 'ExecuteRedeem' | 'CancelRedeem' | 'SetRedeemPeriod' | 'MintTokensForReimbursedRedeem' | 'SelfRedeem' | 'RateLimitUpdate' | 'MinimumTransferAmountUpdate';
  }

  /** @name ReplaceCall (371) */
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
    readonly isMinimumTransferAmountUpdate: boolean;
    readonly asMinimumTransferAmountUpdate: {
      readonly newMinimumAmount: u128;
    } & Struct;
    readonly type: 'RequestReplace' | 'WithdrawReplace' | 'AcceptReplace' | 'ExecuteReplace' | 'CancelReplace' | 'SetReplacePeriod' | 'MinimumTransferAmountUpdate';
  }

  /** @name SecurityCall (372) */
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

  /** @name StellarRelayCall (373) */
  interface StellarRelayCall extends Enum {
    readonly isUpdateTier1ValidatorSet: boolean;
    readonly asUpdateTier1ValidatorSet: {
      readonly validators: Vec<StellarRelayValidator>;
      readonly organizations: Vec<StellarRelayOrganization>;
      readonly enactmentBlockHeight: u32;
    } & Struct;
    readonly type: 'UpdateTier1ValidatorSet';
  }

  /** @name StellarRelayValidator (375) */
  interface StellarRelayValidator extends Struct {
    readonly name: Bytes;
    readonly publicKey: Bytes;
    readonly organizationId: u128;
  }

  /** @name StellarRelayOrganization (378) */
  interface StellarRelayOrganization extends Struct {
    readonly id: u128;
    readonly name: Bytes;
  }

  /** @name VaultRegistryCall (379) */
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
    readonly isSetPunishmentDelay: boolean;
    readonly asSetPunishmentDelay: {
      readonly punishmentDelay: u32;
    } & Struct;
    readonly type: 'RegisterVault' | 'DepositCollateral' | 'WithdrawCollateral' | 'RegisterPublicKey' | 'AcceptNewIssues' | 'SetCustomSecureThreshold' | 'ReportUndercollateralizedVault' | 'SetMinimumCollateral' | 'SetSystemCollateralCeiling' | 'SetSecureCollateralThreshold' | 'SetPremiumRedeemThreshold' | 'SetLiquidationCollateralThreshold' | 'RecoverVaultId' | 'SetPunishmentDelay';
  }

  /** @name PooledRewardsCall (381) */
  type PooledRewardsCall = Null;

  /** @name ClientsInfoCall (382) */
  interface ClientsInfoCall extends Enum {
    readonly isSetCurrentClientRelease: boolean;
    readonly asSetCurrentClientRelease: {
      readonly clientName: Bytes;
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly isSetPendingClientRelease: boolean;
    readonly asSetPendingClientRelease: {
      readonly clientName: Bytes;
      readonly release: ClientsInfoClientRelease;
    } & Struct;
    readonly isAuthorizeAccount: boolean;
    readonly asAuthorizeAccount: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly isDeauthorizeAccount: boolean;
    readonly asDeauthorizeAccount: {
      readonly accountId: AccountId32;
    } & Struct;
    readonly type: 'SetCurrentClientRelease' | 'SetPendingClientRelease' | 'AuthorizeAccount' | 'DeauthorizeAccount';
  }

  /** @name RewardDistributionCall (383) */
  interface RewardDistributionCall extends Enum {
    readonly isSetRewardPerBlock: boolean;
    readonly asSetRewardPerBlock: {
      readonly newRewardPerBlock: u128;
    } & Struct;
    readonly isCollectReward: boolean;
    readonly asCollectReward: {
      readonly vaultId: SpacewalkPrimitivesVaultId;
      readonly rewardCurrencyId: SpacewalkPrimitivesCurrencyId;
      readonly index: Option<u32>;
    } & Struct;
    readonly type: 'SetRewardPerBlock' | 'CollectReward';
  }

  /** @name OrmlCurrenciesAllowanceExtensionCall (384) */
  interface OrmlCurrenciesAllowanceExtensionCall extends Enum {
    readonly isAddAllowedCurrencies: boolean;
    readonly asAddAllowedCurrencies: {
      readonly currencies: Vec<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly isRemoveAllowedCurrencies: boolean;
    readonly asRemoveAllowedCurrencies: {
      readonly currencies: Vec<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly isApprove: boolean;
    readonly asApprove: {
      readonly id: SpacewalkPrimitivesCurrencyId;
      readonly delegate: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferFrom: boolean;
    readonly asTransferFrom: {
      readonly id: SpacewalkPrimitivesCurrencyId;
      readonly owner: AccountId32;
      readonly destination: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly type: 'AddAllowedCurrencies' | 'RemoveAllowedCurrencies' | 'Approve' | 'TransferFrom';
  }

  /** @name OrmlTokensManagementExtensionCall (385) */
  interface OrmlTokensManagementExtensionCall extends Enum {
    readonly isCreate: boolean;
    readonly asCreate: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
    } & Struct;
    readonly isMint: boolean;
    readonly asMint: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly to: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isBurn: boolean;
    readonly asBurn: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly from: AccountId32;
      readonly amount: u128;
    } & Struct;
    readonly isTransferOwnership: boolean;
    readonly asTransferOwnership: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isForceTransferOwnership: boolean;
    readonly asForceTransferOwnership: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly newOwner: AccountId32;
    } & Struct;
    readonly isSetManagers: boolean;
    readonly asSetManagers: {
      readonly currencyId: SpacewalkPrimitivesCurrencyId;
      readonly newAdmin: AccountId32;
      readonly newIssuer: AccountId32;
    } & Struct;
    readonly type: 'Create' | 'Mint' | 'Burn' | 'TransferOwnership' | 'ForceTransferOwnership' | 'SetManagers';
  }

  /** @name TreasuryBuyoutExtensionCall (386) */
  interface TreasuryBuyoutExtensionCall extends Enum {
    readonly isBuyout: boolean;
    readonly asBuyout: {
      readonly asset: SpacewalkPrimitivesCurrencyId;
      readonly amount: TreasuryBuyoutExtensionAmount;
    } & Struct;
    readonly isUpdateBuyoutLimit: boolean;
    readonly asUpdateBuyoutLimit: {
      readonly limit: Option<u128>;
    } & Struct;
    readonly isUpdateAllowedAssets: boolean;
    readonly asUpdateAllowedAssets: {
      readonly assets: Vec<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly type: 'Buyout' | 'UpdateBuyoutLimit' | 'UpdateAllowedAssets';
  }

  /** @name TreasuryBuyoutExtensionAmount (387) */
  interface TreasuryBuyoutExtensionAmount extends Enum {
    readonly isBuyout: boolean;
    readonly asBuyout: u128;
    readonly isExchange: boolean;
    readonly asExchange: u128;
    readonly type: 'Buyout' | 'Exchange';
  }

  /** @name BifrostFarmingCall (388) */
  interface BifrostFarmingCall extends Enum {
    readonly isCreateFarmingPool: boolean;
    readonly asCreateFarmingPool: {
      readonly tokensProportion: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, Perbill]>>;
      readonly basicRewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>;
      readonly gaugeInit: Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>>;
      readonly minDepositToStart: u128;
      readonly afterBlockToStart: Compact<u32>;
      readonly withdrawLimitTime: Compact<u32>;
      readonly claimLimitTime: Compact<u32>;
      readonly withdrawLimitCount: u8;
    } & Struct;
    readonly isCharge: boolean;
    readonly asCharge: {
      readonly pid: u32;
      readonly rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>;
    } & Struct;
    readonly isDeposit: boolean;
    readonly asDeposit: {
      readonly pid: u32;
      readonly addValue: u128;
      readonly gaugeInfo: Option<ITuple<[u128, u32]>>;
    } & Struct;
    readonly isWithdraw: boolean;
    readonly asWithdraw: {
      readonly pid: u32;
      readonly removeValue: Option<u128>;
    } & Struct;
    readonly isClaim: boolean;
    readonly asClaim: {
      readonly pid: u32;
    } & Struct;
    readonly isWithdrawClaim: boolean;
    readonly asWithdrawClaim: {
      readonly pid: u32;
    } & Struct;
    readonly isForceRetirePool: boolean;
    readonly asForceRetirePool: {
      readonly pid: u32;
    } & Struct;
    readonly isSetRetireLimit: boolean;
    readonly asSetRetireLimit: {
      readonly limit: u32;
    } & Struct;
    readonly isClosePool: boolean;
    readonly asClosePool: {
      readonly pid: u32;
    } & Struct;
    readonly isResetPool: boolean;
    readonly asResetPool: {
      readonly pid: u32;
      readonly basicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>;
      readonly minDepositToStart: Option<u128>;
      readonly afterBlockToStart: Option<u32>;
      readonly withdrawLimitTime: Option<u32>;
      readonly claimLimitTime: Option<u32>;
      readonly withdrawLimitCount: Option<u8>;
      readonly gaugeInit: Option<ITuple<[SpacewalkPrimitivesCurrencyId, u32, Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>]>>;
    } & Struct;
    readonly isKillPool: boolean;
    readonly asKillPool: {
      readonly pid: u32;
    } & Struct;
    readonly isEditPool: boolean;
    readonly asEditPool: {
      readonly pid: u32;
      readonly basicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>;
      readonly withdrawLimitTime: Option<u32>;
      readonly claimLimitTime: Option<u32>;
      readonly gaugeBasicRewards: Option<Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>>;
      readonly withdrawLimitCount: Option<u8>;
    } & Struct;
    readonly isGaugeWithdraw: boolean;
    readonly asGaugeWithdraw: {
      readonly gid: u32;
    } & Struct;
    readonly isForceGaugeClaim: boolean;
    readonly asForceGaugeClaim: {
      readonly gid: u32;
    } & Struct;
    readonly isAddBoostPoolWhitelist: boolean;
    readonly asAddBoostPoolWhitelist: {
      readonly whitelist: Vec<u32>;
    } & Struct;
    readonly isSetNextRoundWhitelist: boolean;
    readonly asSetNextRoundWhitelist: {
      readonly whitelist: Vec<u32>;
    } & Struct;
    readonly isVote: boolean;
    readonly asVote: {
      readonly voteList: Vec<ITuple<[u32, Percent]>>;
    } & Struct;
    readonly isStartBoostRound: boolean;
    readonly asStartBoostRound: {
      readonly roundLength: u32;
    } & Struct;
    readonly isEndBoostRound: boolean;
    readonly isChargeBoost: boolean;
    readonly asChargeBoost: {
      readonly rewards: Vec<ITuple<[SpacewalkPrimitivesCurrencyId, u128]>>;
    } & Struct;
    readonly type: 'CreateFarmingPool' | 'Charge' | 'Deposit' | 'Withdraw' | 'Claim' | 'WithdrawClaim' | 'ForceRetirePool' | 'SetRetireLimit' | 'ClosePool' | 'ResetPool' | 'KillPool' | 'EditPool' | 'GaugeWithdraw' | 'ForceGaugeClaim' | 'AddBoostPoolWhitelist' | 'SetNextRoundWhitelist' | 'Vote' | 'StartBoostRound' | 'EndBoostRound' | 'ChargeBoost';
  }

  /** @name OrmlAssetRegistryModuleCall (397) */
  interface OrmlAssetRegistryModuleCall extends Enum {
    readonly isRegisterAsset: boolean;
    readonly asRegisterAsset: {
      readonly metadata: OrmlTraitsAssetRegistryAssetMetadata;
      readonly assetId: Option<SpacewalkPrimitivesCurrencyId>;
    } & Struct;
    readonly isUpdateAsset: boolean;
    readonly asUpdateAsset: {
      readonly assetId: SpacewalkPrimitivesCurrencyId;
      readonly decimals: Option<u32>;
      readonly name: Option<Bytes>;
      readonly symbol: Option<Bytes>;
      readonly existentialDeposit: Option<u128>;
      readonly location: Option<Option<XcmVersionedMultiLocation>>;
      readonly additional: Option<RuntimeCommonAssetRegistryCustomMetadata>;
    } & Struct;
    readonly type: 'RegisterAsset' | 'UpdateAsset';
  }

  /** @name PalletSudoError (402) */
  interface PalletSudoError extends Enum {
    readonly isRequireSudo: boolean;
    readonly type: 'RequireSudo';
  }

  /** @name PalletDemocracyReferendumInfo (408) */
  interface PalletDemocracyReferendumInfo extends Enum {
    readonly isOngoing: boolean;
    readonly asOngoing: PalletDemocracyReferendumStatus;
    readonly isFinished: boolean;
    readonly asFinished: {
      readonly approved: bool;
      readonly end: u32;
    } & Struct;
    readonly type: 'Ongoing' | 'Finished';
  }

  /** @name PalletDemocracyReferendumStatus (409) */
  interface PalletDemocracyReferendumStatus extends Struct {
    readonly end: u32;
    readonly proposal: FrameSupportPreimagesBounded;
    readonly threshold: PalletDemocracyVoteThreshold;
    readonly delay: u32;
    readonly tally: PalletDemocracyTally;
  }

  /** @name PalletDemocracyTally (410) */
  interface PalletDemocracyTally extends Struct {
    readonly ayes: u128;
    readonly nays: u128;
    readonly turnout: u128;
  }

  /** @name PalletDemocracyVoteVoting (411) */
  interface PalletDemocracyVoteVoting extends Enum {
    readonly isDirect: boolean;
    readonly asDirect: {
      readonly votes: Vec<ITuple<[u32, PalletDemocracyVoteAccountVote]>>;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly isDelegating: boolean;
    readonly asDelegating: {
      readonly balance: u128;
      readonly target: AccountId32;
      readonly conviction: PalletDemocracyConviction;
      readonly delegations: PalletDemocracyDelegations;
      readonly prior: PalletDemocracyVotePriorLock;
    } & Struct;
    readonly type: 'Direct' | 'Delegating';
  }

  /** @name PalletDemocracyDelegations (415) */
  interface PalletDemocracyDelegations extends Struct {
    readonly votes: u128;
    readonly capital: u128;
  }

  /** @name PalletDemocracyVotePriorLock (416) */
  interface PalletDemocracyVotePriorLock extends ITuple<[u32, u128]> {}

  /** @name PalletDemocracyError (419) */
  interface PalletDemocracyError extends Enum {
    readonly isValueLow: boolean;
    readonly isProposalMissing: boolean;
    readonly isAlreadyCanceled: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalBlacklisted: boolean;
    readonly isNotSimpleMajority: boolean;
    readonly isInvalidHash: boolean;
    readonly isNoProposal: boolean;
    readonly isAlreadyVetoed: boolean;
    readonly isReferendumInvalid: boolean;
    readonly isNoneWaiting: boolean;
    readonly isNotVoter: boolean;
    readonly isNoPermission: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isNotDelegating: boolean;
    readonly isVotesExist: boolean;
    readonly isInstantNotAllowed: boolean;
    readonly isNonsense: boolean;
    readonly isWrongUpperBound: boolean;
    readonly isMaxVotesReached: boolean;
    readonly isTooMany: boolean;
    readonly isVotingPeriodLow: boolean;
    readonly isPreimageNotExist: boolean;
    readonly type: 'ValueLow' | 'ProposalMissing' | 'AlreadyCanceled' | 'DuplicateProposal' | 'ProposalBlacklisted' | 'NotSimpleMajority' | 'InvalidHash' | 'NoProposal' | 'AlreadyVetoed' | 'ReferendumInvalid' | 'NoneWaiting' | 'NotVoter' | 'NoPermission' | 'AlreadyDelegating' | 'InsufficientFunds' | 'NotDelegating' | 'VotesExist' | 'InstantNotAllowed' | 'Nonsense' | 'WrongUpperBound' | 'MaxVotesReached' | 'TooMany' | 'VotingPeriodLow' | 'PreimageNotExist';
  }

  /** @name PalletCollectiveVotes (421) */
  interface PalletCollectiveVotes extends Struct {
    readonly index: u32;
    readonly threshold: u32;
    readonly ayes: Vec<AccountId32>;
    readonly nays: Vec<AccountId32>;
    readonly end: u32;
  }

  /** @name PalletCollectiveError (422) */
  interface PalletCollectiveError extends Enum {
    readonly isNotMember: boolean;
    readonly isDuplicateProposal: boolean;
    readonly isProposalMissing: boolean;
    readonly isWrongIndex: boolean;
    readonly isDuplicateVote: boolean;
    readonly isAlreadyInitialized: boolean;
    readonly isTooEarly: boolean;
    readonly isTooManyProposals: boolean;
    readonly isWrongProposalWeight: boolean;
    readonly isWrongProposalLength: boolean;
    readonly type: 'NotMember' | 'DuplicateProposal' | 'ProposalMissing' | 'WrongIndex' | 'DuplicateVote' | 'AlreadyInitialized' | 'TooEarly' | 'TooManyProposals' | 'WrongProposalWeight' | 'WrongProposalLength';
  }

  /** @name PalletSchedulerScheduled (427) */
  interface PalletSchedulerScheduled extends Struct {
    readonly maybeId: Option<U8aFixed>;
    readonly priority: u8;
    readonly call: FrameSupportPreimagesBounded;
    readonly maybePeriodic: Option<ITuple<[u32, u32]>>;
    readonly origin: FoucocoRuntimeOriginCaller;
  }

  /** @name PalletSchedulerError (429) */
  interface PalletSchedulerError extends Enum {
    readonly isFailedToSchedule: boolean;
    readonly isNotFound: boolean;
    readonly isTargetBlockNumberInPast: boolean;
    readonly isRescheduleNoChange: boolean;
    readonly isNamed: boolean;
    readonly type: 'FailedToSchedule' | 'NotFound' | 'TargetBlockNumberInPast' | 'RescheduleNoChange' | 'Named';
  }

  /** @name PalletPreimageRequestStatus (430) */
  interface PalletPreimageRequestStatus extends Enum {
    readonly isUnrequested: boolean;
    readonly asUnrequested: {
      readonly deposit: ITuple<[AccountId32, u128]>;
      readonly len: u32;
    } & Struct;
    readonly isRequested: boolean;
    readonly asRequested: {
      readonly deposit: Option<ITuple<[AccountId32, u128]>>;
      readonly count: u32;
      readonly len: Option<u32>;
    } & Struct;
    readonly type: 'Unrequested' | 'Requested';
  }

  /** @name PalletPreimageError (435) */
  interface PalletPreimageError extends Enum {
    readonly isTooBig: boolean;
    readonly isAlreadyNoted: boolean;
    readonly isNotAuthorized: boolean;
    readonly isNotNoted: boolean;
    readonly isRequested: boolean;
    readonly isNotRequested: boolean;
    readonly type: 'TooBig' | 'AlreadyNoted' | 'NotAuthorized' | 'NotNoted' | 'Requested' | 'NotRequested';
  }

  /** @name PalletMultisigMultisig (437) */
  interface PalletMultisigMultisig extends Struct {
    readonly when: PalletMultisigTimepoint;
    readonly deposit: u128;
    readonly depositor: AccountId32;
    readonly approvals: Vec<AccountId32>;
  }

  /** @name PalletMultisigError (439) */
  interface PalletMultisigError extends Enum {
    readonly isMinimumThreshold: boolean;
    readonly isAlreadyApproved: boolean;
    readonly isNoApprovalsNeeded: boolean;
    readonly isTooFewSignatories: boolean;
    readonly isTooManySignatories: boolean;
    readonly isSignatoriesOutOfOrder: boolean;
    readonly isSenderInSignatories: boolean;
    readonly isNotFound: boolean;
    readonly isNotOwner: boolean;
    readonly isNoTimepoint: boolean;
    readonly isWrongTimepoint: boolean;
    readonly isUnexpectedTimepoint: boolean;
    readonly isMaxWeightTooLow: boolean;
    readonly isAlreadyStored: boolean;
    readonly type: 'MinimumThreshold' | 'AlreadyApproved' | 'NoApprovalsNeeded' | 'TooFewSignatories' | 'TooManySignatories' | 'SignatoriesOutOfOrder' | 'SenderInSignatories' | 'NotFound' | 'NotOwner' | 'NoTimepoint' | 'WrongTimepoint' | 'UnexpectedTimepoint' | 'MaxWeightTooLow' | 'AlreadyStored';
  }

  /** @name PalletTreasuryProposal (440) */
  interface PalletTreasuryProposal extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly beneficiary: AccountId32;
    readonly bond: u128;
  }

  /** @name FrameSupportPalletId (443) */
  interface FrameSupportPalletId extends U8aFixed {}

  /** @name PalletTreasuryError (444) */
  interface PalletTreasuryError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isTooManyApprovals: boolean;
    readonly isInsufficientPermission: boolean;
    readonly isProposalNotApproved: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'TooManyApprovals' | 'InsufficientPermission' | 'ProposalNotApproved';
  }

  /** @name PalletBountiesBounty (445) */
  interface PalletBountiesBounty extends Struct {
    readonly proposer: AccountId32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly bond: u128;
    readonly status: PalletBountiesBountyStatus;
  }

  /** @name PalletBountiesBountyStatus (446) */
  interface PalletBountiesBountyStatus extends Enum {
    readonly isProposed: boolean;
    readonly isApproved: boolean;
    readonly isFunded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
      readonly updateDue: u32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Proposed' | 'Approved' | 'Funded' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletBountiesError (448) */
  interface PalletBountiesError extends Enum {
    readonly isInsufficientProposersBalance: boolean;
    readonly isInvalidIndex: boolean;
    readonly isReasonTooBig: boolean;
    readonly isUnexpectedStatus: boolean;
    readonly isRequireCurator: boolean;
    readonly isInvalidValue: boolean;
    readonly isInvalidFee: boolean;
    readonly isPendingPayout: boolean;
    readonly isPremature: boolean;
    readonly isHasActiveChildBounty: boolean;
    readonly isTooManyQueued: boolean;
    readonly type: 'InsufficientProposersBalance' | 'InvalidIndex' | 'ReasonTooBig' | 'UnexpectedStatus' | 'RequireCurator' | 'InvalidValue' | 'InvalidFee' | 'PendingPayout' | 'Premature' | 'HasActiveChildBounty' | 'TooManyQueued';
  }

  /** @name PalletChildBountiesChildBounty (449) */
  interface PalletChildBountiesChildBounty extends Struct {
    readonly parentBounty: u32;
    readonly value: u128;
    readonly fee: u128;
    readonly curatorDeposit: u128;
    readonly status: PalletChildBountiesChildBountyStatus;
  }

  /** @name PalletChildBountiesChildBountyStatus (450) */
  interface PalletChildBountiesChildBountyStatus extends Enum {
    readonly isAdded: boolean;
    readonly isCuratorProposed: boolean;
    readonly asCuratorProposed: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isActive: boolean;
    readonly asActive: {
      readonly curator: AccountId32;
    } & Struct;
    readonly isPendingPayout: boolean;
    readonly asPendingPayout: {
      readonly curator: AccountId32;
      readonly beneficiary: AccountId32;
      readonly unlockAt: u32;
    } & Struct;
    readonly type: 'Added' | 'CuratorProposed' | 'Active' | 'PendingPayout';
  }

  /** @name PalletChildBountiesError (451) */
  interface PalletChildBountiesError extends Enum {
    readonly isParentBountyNotActive: boolean;
    readonly isInsufficientBountyBalance: boolean;
    readonly isTooManyChildBounties: boolean;
    readonly type: 'ParentBountyNotActive' | 'InsufficientBountyBalance' | 'TooManyChildBounties';
  }

  /** @name PalletProxyProxyDefinition (454) */
  interface PalletProxyProxyDefinition extends Struct {
    readonly delegate: AccountId32;
    readonly proxyType: RuntimeCommonProxyType;
    readonly delay: u32;
  }

  /** @name PalletProxyAnnouncement (458) */
  interface PalletProxyAnnouncement extends Struct {
    readonly real: AccountId32;
    readonly callHash: H256;
    readonly height: u32;
  }

  /** @name PalletProxyError (460) */
  interface PalletProxyError extends Enum {
    readonly isTooMany: boolean;
    readonly isNotFound: boolean;
    readonly isNotProxy: boolean;
    readonly isUnproxyable: boolean;
    readonly isDuplicate: boolean;
    readonly isNoPermission: boolean;
    readonly isUnannounced: boolean;
    readonly isNoSelfProxy: boolean;
    readonly type: 'TooMany' | 'NotFound' | 'NotProxy' | 'Unproxyable' | 'Duplicate' | 'NoPermission' | 'Unannounced' | 'NoSelfProxy';
  }

  /** @name SpCoreCryptoKeyTypeId (467) */
  interface SpCoreCryptoKeyTypeId extends U8aFixed {}

  /** @name PalletSessionError (468) */
  interface PalletSessionError extends Enum {
    readonly isInvalidProof: boolean;
    readonly isNoAssociatedValidatorId: boolean;
    readonly isDuplicatedKey: boolean;
    readonly isNoKeys: boolean;
    readonly isNoAccount: boolean;
    readonly type: 'InvalidProof' | 'NoAssociatedValidatorId' | 'DuplicatedKey' | 'NoKeys' | 'NoAccount';
  }

  /** @name ParachainStakingRoundInfo (469) */
  interface ParachainStakingRoundInfo extends Struct {
    readonly current: u32;
    readonly first: u32;
    readonly length: u32;
  }

  /** @name ParachainStakingDelegationCounter (470) */
  interface ParachainStakingDelegationCounter extends Struct {
    readonly round: u32;
    readonly counter: u32;
  }

  /** @name ParachainStakingStakeOption (471) */
  interface ParachainStakingStakeOption extends Struct {
    readonly owner: Option<AccountId32>;
    readonly amount: u128;
  }

  /** @name ParachainStakingCandidate (472) */
  interface ParachainStakingCandidate extends Struct {
    readonly id: AccountId32;
    readonly stake: u128;
    readonly delegators: ParachainStakingSetOrderedSet;
    readonly total: u128;
    readonly status: ParachainStakingCandidateStatus;
  }

  /** @name ParachainStakingSetOrderedSet (473) */
  interface ParachainStakingSetOrderedSet extends Vec<ParachainStakingStakeAccountId32> {}

  /** @name ParachainStakingStakeAccountId32 (474) */
  interface ParachainStakingStakeAccountId32 extends Struct {
    readonly owner: AccountId32;
    readonly amount: u128;
  }

  /** @name ParachainStakingCandidateStatus (477) */
  interface ParachainStakingCandidateStatus extends Enum {
    readonly isActive: boolean;
    readonly isLeaving: boolean;
    readonly asLeaving: u32;
    readonly type: 'Active' | 'Leaving';
  }

  /** @name ParachainStakingTotalStake (478) */
  interface ParachainStakingTotalStake extends Struct {
    readonly collators: u128;
    readonly delegators: u128;
  }

  /** @name ParachainStakingInflationInflationInfo (481) */
  interface ParachainStakingInflationInflationInfo extends Struct {
    readonly collator: ParachainStakingInflationStakingInfo;
    readonly delegator: ParachainStakingInflationStakingInfo;
  }

  /** @name ParachainStakingInflationStakingInfo (482) */
  interface ParachainStakingInflationStakingInfo extends Struct {
    readonly maxRate: Perquintill;
    readonly rewardRate: ParachainStakingInflationRewardRate;
  }

  /** @name ParachainStakingInflationRewardRate (483) */
  interface ParachainStakingInflationRewardRate extends Struct {
    readonly annual: Perquintill;
    readonly perBlock: Perquintill;
  }

  /** @name ParachainStakingError (488) */
  interface ParachainStakingError extends Enum {
    readonly isDelegatorNotFound: boolean;
    readonly isCandidateNotFound: boolean;
    readonly isDelegatorExists: boolean;
    readonly isCandidateExists: boolean;
    readonly isValStakeZero: boolean;
    readonly isValStakeBelowMin: boolean;
    readonly isValStakeAboveMax: boolean;
    readonly isDelegationBelowMin: boolean;
    readonly isAlreadyLeaving: boolean;
    readonly isNotLeaving: boolean;
    readonly isCannotLeaveYet: boolean;
    readonly isCannotJoinBeforeUnlocking: boolean;
    readonly isAlreadyDelegating: boolean;
    readonly isNotYetDelegating: boolean;
    readonly isDelegationsPerRoundExceeded: boolean;
    readonly isTooManyDelegators: boolean;
    readonly isTooFewCollatorCandidates: boolean;
    readonly isCannotStakeIfLeaving: boolean;
    readonly isCannotDelegateIfLeaving: boolean;
    readonly isMaxCollatorsPerDelegatorExceeded: boolean;
    readonly isAlreadyDelegatedCollator: boolean;
    readonly isDelegationNotFound: boolean;
    readonly isUnderflow: boolean;
    readonly isCannotSetAboveMax: boolean;
    readonly isCannotSetBelowMin: boolean;
    readonly isInvalidSchedule: boolean;
    readonly isNoMoreUnstaking: boolean;
    readonly isTooEarly: boolean;
    readonly isStakeNotFound: boolean;
    readonly isUnstakingIsEmpty: boolean;
    readonly isRewardsNotFound: boolean;
    readonly type: 'DelegatorNotFound' | 'CandidateNotFound' | 'DelegatorExists' | 'CandidateExists' | 'ValStakeZero' | 'ValStakeBelowMin' | 'ValStakeAboveMax' | 'DelegationBelowMin' | 'AlreadyLeaving' | 'NotLeaving' | 'CannotLeaveYet' | 'CannotJoinBeforeUnlocking' | 'AlreadyDelegating' | 'NotYetDelegating' | 'DelegationsPerRoundExceeded' | 'TooManyDelegators' | 'TooFewCollatorCandidates' | 'CannotStakeIfLeaving' | 'CannotDelegateIfLeaving' | 'MaxCollatorsPerDelegatorExceeded' | 'AlreadyDelegatedCollator' | 'DelegationNotFound' | 'Underflow' | 'CannotSetAboveMax' | 'CannotSetBelowMin' | 'InvalidSchedule' | 'NoMoreUnstaking' | 'TooEarly' | 'StakeNotFound' | 'UnstakingIsEmpty' | 'RewardsNotFound';
  }

  /** @name CumulusPalletXcmpQueueInboundChannelDetails (490) */
  interface CumulusPalletXcmpQueueInboundChannelDetails extends Struct {
    readonly sender: u32;
    readonly state: CumulusPalletXcmpQueueInboundState;
    readonly messageMetadata: Vec<ITuple<[u32, PolkadotParachainPrimitivesXcmpMessageFormat]>>;
  }

  /** @name CumulusPalletXcmpQueueInboundState (491) */
  interface CumulusPalletXcmpQueueInboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name PolkadotParachainPrimitivesXcmpMessageFormat (494) */
  interface PolkadotParachainPrimitivesXcmpMessageFormat extends Enum {
    readonly isConcatenatedVersionedXcm: boolean;
    readonly isConcatenatedEncodedBlob: boolean;
    readonly isSignals: boolean;
    readonly type: 'ConcatenatedVersionedXcm' | 'ConcatenatedEncodedBlob' | 'Signals';
  }

  /** @name CumulusPalletXcmpQueueOutboundChannelDetails (497) */
  interface CumulusPalletXcmpQueueOutboundChannelDetails extends Struct {
    readonly recipient: u32;
    readonly state: CumulusPalletXcmpQueueOutboundState;
    readonly signalsExist: bool;
    readonly firstIndex: u16;
    readonly lastIndex: u16;
  }

  /** @name CumulusPalletXcmpQueueOutboundState (498) */
  interface CumulusPalletXcmpQueueOutboundState extends Enum {
    readonly isOk: boolean;
    readonly isSuspended: boolean;
    readonly type: 'Ok' | 'Suspended';
  }

  /** @name CumulusPalletXcmpQueueQueueConfigData (500) */
  interface CumulusPalletXcmpQueueQueueConfigData extends Struct {
    readonly suspendThreshold: u32;
    readonly dropThreshold: u32;
    readonly resumeThreshold: u32;
    readonly thresholdWeight: SpWeightsWeightV2Weight;
    readonly weightRestrictDecay: SpWeightsWeightV2Weight;
    readonly xcmpMaxIndividualWeight: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletXcmpQueueError (502) */
  interface CumulusPalletXcmpQueueError extends Enum {
    readonly isFailedToSend: boolean;
    readonly isBadXcmOrigin: boolean;
    readonly isBadXcm: boolean;
    readonly isBadOverweightIndex: boolean;
    readonly isWeightOverLimit: boolean;
    readonly type: 'FailedToSend' | 'BadXcmOrigin' | 'BadXcm' | 'BadOverweightIndex' | 'WeightOverLimit';
  }

  /** @name PalletXcmError (503) */
  interface PalletXcmError extends Enum {
    readonly isUnreachable: boolean;
    readonly isSendFailure: boolean;
    readonly isFiltered: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isEmpty: boolean;
    readonly isCannotReanchor: boolean;
    readonly isTooManyAssets: boolean;
    readonly isInvalidOrigin: boolean;
    readonly isBadVersion: boolean;
    readonly isBadLocation: boolean;
    readonly isNoSubscription: boolean;
    readonly isAlreadySubscribed: boolean;
    readonly isInvalidAsset: boolean;
    readonly isLowBalance: boolean;
    readonly isTooManyLocks: boolean;
    readonly isAccountNotSovereign: boolean;
    readonly isFeesNotMet: boolean;
    readonly isLockNotFound: boolean;
    readonly isInUse: boolean;
    readonly type: 'Unreachable' | 'SendFailure' | 'Filtered' | 'UnweighableMessage' | 'DestinationNotInvertible' | 'Empty' | 'CannotReanchor' | 'TooManyAssets' | 'InvalidOrigin' | 'BadVersion' | 'BadLocation' | 'NoSubscription' | 'AlreadySubscribed' | 'InvalidAsset' | 'LowBalance' | 'TooManyLocks' | 'AccountNotSovereign' | 'FeesNotMet' | 'LockNotFound' | 'InUse';
  }

  /** @name CumulusPalletXcmError (504) */
  type CumulusPalletXcmError = Null;

  /** @name CumulusPalletDmpQueueConfigData (505) */
  interface CumulusPalletDmpQueueConfigData extends Struct {
    readonly maxIndividual: SpWeightsWeightV2Weight;
  }

  /** @name CumulusPalletDmpQueuePageIndexData (506) */
  interface CumulusPalletDmpQueuePageIndexData extends Struct {
    readonly beginUsed: u32;
    readonly endUsed: u32;
    readonly overweightCount: u64;
  }

  /** @name CumulusPalletDmpQueueError (509) */
  interface CumulusPalletDmpQueueError extends Enum {
    readonly isUnknown: boolean;
    readonly isOverLimit: boolean;
    readonly type: 'Unknown' | 'OverLimit';
  }

  /** @name PalletVestingReleases (512) */
  interface PalletVestingReleases extends Enum {
    readonly isV0: boolean;
    readonly isV1: boolean;
    readonly type: 'V0' | 'V1';
  }

  /** @name PalletVestingError (513) */
  interface PalletVestingError extends Enum {
    readonly isNotVesting: boolean;
    readonly isAtMaxVestingSchedules: boolean;
    readonly isAmountLow: boolean;
    readonly isScheduleIndexOutOfBounds: boolean;
    readonly isInvalidScheduleParams: boolean;
    readonly type: 'NotVesting' | 'AtMaxVestingSchedules' | 'AmountLow' | 'ScheduleIndexOutOfBounds' | 'InvalidScheduleParams';
  }

  /** @name PalletUtilityError (514) */
  interface PalletUtilityError extends Enum {
    readonly isTooManyCalls: boolean;
    readonly type: 'TooManyCalls';
  }

  /** @name OrmlCurrenciesModuleError (515) */
  interface OrmlCurrenciesModuleError extends Enum {
    readonly isAmountIntoBalanceFailed: boolean;
    readonly isBalanceTooLow: boolean;
    readonly isDepositFailed: boolean;
    readonly type: 'AmountIntoBalanceFailed' | 'BalanceTooLow' | 'DepositFailed';
  }

  /** @name OrmlTokensBalanceLock (518) */
  interface OrmlTokensBalanceLock extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensAccountData (520) */
  interface OrmlTokensAccountData extends Struct {
    readonly free: u128;
    readonly reserved: u128;
    readonly frozen: u128;
  }

  /** @name OrmlTokensReserveData (522) */
  interface OrmlTokensReserveData extends Struct {
    readonly id: U8aFixed;
    readonly amount: u128;
  }

  /** @name OrmlTokensModuleError (524) */
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

  /** @name OrmlXtokensModuleError (525) */
  interface OrmlXtokensModuleError extends Enum {
    readonly isAssetHasNoReserve: boolean;
    readonly isNotCrossChainTransfer: boolean;
    readonly isInvalidDest: boolean;
    readonly isNotCrossChainTransferableCurrency: boolean;
    readonly isUnweighableMessage: boolean;
    readonly isXcmExecutionFailed: boolean;
    readonly isCannotReanchor: boolean;
    readonly isInvalidAncestry: boolean;
    readonly isInvalidAsset: boolean;
    readonly isDestinationNotInvertible: boolean;
    readonly isBadVersion: boolean;
    readonly isDistinctReserveForAssetAndFee: boolean;
    readonly isZeroFee: boolean;
    readonly isZeroAmount: boolean;
    readonly isTooManyAssetsBeingSent: boolean;
    readonly isAssetIndexNonExistent: boolean;
    readonly isFeeNotEnough: boolean;
    readonly isNotSupportedMultiLocation: boolean;
    readonly isMinXcmFeeNotDefined: boolean;
    readonly type: 'AssetHasNoReserve' | 'NotCrossChainTransfer' | 'InvalidDest' | 'NotCrossChainTransferableCurrency' | 'UnweighableMessage' | 'XcmExecutionFailed' | 'CannotReanchor' | 'InvalidAncestry' | 'InvalidAsset' | 'DestinationNotInvertible' | 'BadVersion' | 'DistinctReserveForAssetAndFee' | 'ZeroFee' | 'ZeroAmount' | 'TooManyAssetsBeingSent' | 'AssetIndexNonExistent' | 'FeeNotEnough' | 'NotSupportedMultiLocation' | 'MinXcmFeeNotDefined';
  }

  /** @name PalletIdentityRegistration (526) */
  interface PalletIdentityRegistration extends Struct {
    readonly judgements: Vec<ITuple<[u32, PalletIdentityJudgement]>>;
    readonly deposit: u128;
    readonly info: PalletIdentityIdentityInfo;
  }

  /** @name PalletIdentityRegistrarInfo (534) */
  interface PalletIdentityRegistrarInfo extends Struct {
    readonly account: AccountId32;
    readonly fee: u128;
    readonly fields: PalletIdentityBitFlags;
  }

  /** @name PalletIdentityError (536) */
  interface PalletIdentityError extends Enum {
    readonly isTooManySubAccounts: boolean;
    readonly isNotFound: boolean;
    readonly isNotNamed: boolean;
    readonly isEmptyIndex: boolean;
    readonly isFeeChanged: boolean;
    readonly isNoIdentity: boolean;
    readonly isStickyJudgement: boolean;
    readonly isJudgementGiven: boolean;
    readonly isInvalidJudgement: boolean;
    readonly isInvalidIndex: boolean;
    readonly isInvalidTarget: boolean;
    readonly isTooManyFields: boolean;
    readonly isTooManyRegistrars: boolean;
    readonly isAlreadyClaimed: boolean;
    readonly isNotSub: boolean;
    readonly isNotOwned: boolean;
    readonly isJudgementForDifferentIdentity: boolean;
    readonly isJudgementPaymentFailed: boolean;
    readonly type: 'TooManySubAccounts' | 'NotFound' | 'NotNamed' | 'EmptyIndex' | 'FeeChanged' | 'NoIdentity' | 'StickyJudgement' | 'JudgementGiven' | 'InvalidJudgement' | 'InvalidIndex' | 'InvalidTarget' | 'TooManyFields' | 'TooManyRegistrars' | 'AlreadyClaimed' | 'NotSub' | 'NotOwned' | 'JudgementForDifferentIdentity' | 'JudgementPaymentFailed';
  }

  /** @name PalletContractsWasmPrefabWasmModule (538) */
  interface PalletContractsWasmPrefabWasmModule extends Struct {
    readonly instructionWeightsVersion: Compact<u32>;
    readonly initial: Compact<u32>;
    readonly maximum: Compact<u32>;
    readonly code: Bytes;
    readonly determinism: PalletContractsWasmDeterminism;
  }

  /** @name PalletContractsWasmOwnerInfo (540) */
  interface PalletContractsWasmOwnerInfo extends Struct {
    readonly owner: AccountId32;
    readonly deposit: Compact<u128>;
    readonly refcount: Compact<u64>;
  }

  /** @name PalletContractsStorageContractInfo (541) */
  interface PalletContractsStorageContractInfo extends Struct {
    readonly trieId: Bytes;
    readonly depositAccount: AccountId32;
    readonly codeHash: H256;
    readonly storageBytes: u32;
    readonly storageItems: u32;
    readonly storageByteDeposit: u128;
    readonly storageItemDeposit: u128;
    readonly storageBaseDeposit: u128;
  }

  /** @name PalletContractsStorageDeletionQueueManager (543) */
  interface PalletContractsStorageDeletionQueueManager extends Struct {
    readonly insertCounter: u32;
    readonly deleteCounter: u32;
  }

  /** @name PalletContractsSchedule (544) */
  interface PalletContractsSchedule extends Struct {
    readonly limits: PalletContractsScheduleLimits;
    readonly instructionWeights: PalletContractsScheduleInstructionWeights;
    readonly hostFnWeights: PalletContractsScheduleHostFnWeights;
  }

  /** @name PalletContractsScheduleLimits (545) */
  interface PalletContractsScheduleLimits extends Struct {
    readonly eventTopics: u32;
    readonly globals: u32;
    readonly locals: u32;
    readonly parameters: u32;
    readonly memoryPages: u32;
    readonly tableSize: u32;
    readonly brTableSize: u32;
    readonly subjectLen: u32;
    readonly payloadLen: u32;
    readonly runtimeMemory: u32;
  }

  /** @name PalletContractsScheduleInstructionWeights (546) */
  interface PalletContractsScheduleInstructionWeights extends Struct {
    readonly version: u32;
    readonly fallback: u32;
    readonly i64const: u32;
    readonly i64load: u32;
    readonly i64store: u32;
    readonly select: u32;
    readonly r_if: u32;
    readonly br: u32;
    readonly brIf: u32;
    readonly brTable: u32;
    readonly brTablePerEntry: u32;
    readonly call: u32;
    readonly callIndirect: u32;
    readonly callPerLocal: u32;
    readonly localGet: u32;
    readonly localSet: u32;
    readonly localTee: u32;
    readonly globalGet: u32;
    readonly globalSet: u32;
    readonly memoryCurrent: u32;
    readonly memoryGrow: u32;
    readonly i64clz: u32;
    readonly i64ctz: u32;
    readonly i64popcnt: u32;
    readonly i64eqz: u32;
    readonly i64extendsi32: u32;
    readonly i64extendui32: u32;
    readonly i32wrapi64: u32;
    readonly i64eq: u32;
    readonly i64ne: u32;
    readonly i64lts: u32;
    readonly i64ltu: u32;
    readonly i64gts: u32;
    readonly i64gtu: u32;
    readonly i64les: u32;
    readonly i64leu: u32;
    readonly i64ges: u32;
    readonly i64geu: u32;
    readonly i64add: u32;
    readonly i64sub: u32;
    readonly i64mul: u32;
    readonly i64divs: u32;
    readonly i64divu: u32;
    readonly i64rems: u32;
    readonly i64remu: u32;
    readonly i64and: u32;
    readonly i64or: u32;
    readonly i64xor: u32;
    readonly i64shl: u32;
    readonly i64shrs: u32;
    readonly i64shru: u32;
    readonly i64rotl: u32;
    readonly i64rotr: u32;
  }

  /** @name PalletContractsScheduleHostFnWeights (547) */
  interface PalletContractsScheduleHostFnWeights extends Struct {
    readonly caller: SpWeightsWeightV2Weight;
    readonly isContract: SpWeightsWeightV2Weight;
    readonly codeHash: SpWeightsWeightV2Weight;
    readonly ownCodeHash: SpWeightsWeightV2Weight;
    readonly callerIsOrigin: SpWeightsWeightV2Weight;
    readonly address: SpWeightsWeightV2Weight;
    readonly gasLeft: SpWeightsWeightV2Weight;
    readonly balance: SpWeightsWeightV2Weight;
    readonly valueTransferred: SpWeightsWeightV2Weight;
    readonly minimumBalance: SpWeightsWeightV2Weight;
    readonly blockNumber: SpWeightsWeightV2Weight;
    readonly now: SpWeightsWeightV2Weight;
    readonly weightToFee: SpWeightsWeightV2Weight;
    readonly gas: SpWeightsWeightV2Weight;
    readonly input: SpWeightsWeightV2Weight;
    readonly inputPerByte: SpWeightsWeightV2Weight;
    readonly r_return: SpWeightsWeightV2Weight;
    readonly returnPerByte: SpWeightsWeightV2Weight;
    readonly terminate: SpWeightsWeightV2Weight;
    readonly random: SpWeightsWeightV2Weight;
    readonly depositEvent: SpWeightsWeightV2Weight;
    readonly depositEventPerTopic: SpWeightsWeightV2Weight;
    readonly depositEventPerByte: SpWeightsWeightV2Weight;
    readonly debugMessage: SpWeightsWeightV2Weight;
    readonly debugMessagePerByte: SpWeightsWeightV2Weight;
    readonly setStorage: SpWeightsWeightV2Weight;
    readonly setStoragePerNewByte: SpWeightsWeightV2Weight;
    readonly setStoragePerOldByte: SpWeightsWeightV2Weight;
    readonly setCodeHash: SpWeightsWeightV2Weight;
    readonly clearStorage: SpWeightsWeightV2Weight;
    readonly clearStoragePerByte: SpWeightsWeightV2Weight;
    readonly containsStorage: SpWeightsWeightV2Weight;
    readonly containsStoragePerByte: SpWeightsWeightV2Weight;
    readonly getStorage: SpWeightsWeightV2Weight;
    readonly getStoragePerByte: SpWeightsWeightV2Weight;
    readonly takeStorage: SpWeightsWeightV2Weight;
    readonly takeStoragePerByte: SpWeightsWeightV2Weight;
    readonly transfer: SpWeightsWeightV2Weight;
    readonly call: SpWeightsWeightV2Weight;
    readonly delegateCall: SpWeightsWeightV2Weight;
    readonly callTransferSurcharge: SpWeightsWeightV2Weight;
    readonly callPerClonedByte: SpWeightsWeightV2Weight;
    readonly instantiate: SpWeightsWeightV2Weight;
    readonly instantiateTransferSurcharge: SpWeightsWeightV2Weight;
    readonly instantiatePerInputByte: SpWeightsWeightV2Weight;
    readonly instantiatePerSaltByte: SpWeightsWeightV2Weight;
    readonly hashSha2256: SpWeightsWeightV2Weight;
    readonly hashSha2256PerByte: SpWeightsWeightV2Weight;
    readonly hashKeccak256: SpWeightsWeightV2Weight;
    readonly hashKeccak256PerByte: SpWeightsWeightV2Weight;
    readonly hashBlake2256: SpWeightsWeightV2Weight;
    readonly hashBlake2256PerByte: SpWeightsWeightV2Weight;
    readonly hashBlake2128: SpWeightsWeightV2Weight;
    readonly hashBlake2128PerByte: SpWeightsWeightV2Weight;
    readonly ecdsaRecover: SpWeightsWeightV2Weight;
    readonly ecdsaToEthAddress: SpWeightsWeightV2Weight;
    readonly sr25519Verify: SpWeightsWeightV2Weight;
    readonly sr25519VerifyPerByte: SpWeightsWeightV2Weight;
    readonly reentranceCount: SpWeightsWeightV2Weight;
    readonly accountReentranceCount: SpWeightsWeightV2Weight;
    readonly instantiationNonce: SpWeightsWeightV2Weight;
  }

  /** @name PalletContractsError (548) */
  interface PalletContractsError extends Enum {
    readonly isInvalidScheduleVersion: boolean;
    readonly isInvalidCallFlags: boolean;
    readonly isOutOfGas: boolean;
    readonly isOutputBufferTooSmall: boolean;
    readonly isTransferFailed: boolean;
    readonly isMaxCallDepthReached: boolean;
    readonly isContractNotFound: boolean;
    readonly isCodeTooLarge: boolean;
    readonly isCodeNotFound: boolean;
    readonly isOutOfBounds: boolean;
    readonly isDecodingFailed: boolean;
    readonly isContractTrapped: boolean;
    readonly isValueTooLarge: boolean;
    readonly isTerminatedWhileReentrant: boolean;
    readonly isInputForwarded: boolean;
    readonly isRandomSubjectTooLong: boolean;
    readonly isTooManyTopics: boolean;
    readonly isNoChainExtension: boolean;
    readonly isDuplicateContract: boolean;
    readonly isTerminatedInConstructor: boolean;
    readonly isReentranceDenied: boolean;
    readonly isStorageDepositNotEnoughFunds: boolean;
    readonly isStorageDepositLimitExhausted: boolean;
    readonly isCodeInUse: boolean;
    readonly isContractReverted: boolean;
    readonly isCodeRejected: boolean;
    readonly isIndeterministic: boolean;
    readonly type: 'InvalidScheduleVersion' | 'InvalidCallFlags' | 'OutOfGas' | 'OutputBufferTooSmall' | 'TransferFailed' | 'MaxCallDepthReached' | 'ContractNotFound' | 'CodeTooLarge' | 'CodeNotFound' | 'OutOfBounds' | 'DecodingFailed' | 'ContractTrapped' | 'ValueTooLarge' | 'TerminatedWhileReentrant' | 'InputForwarded' | 'RandomSubjectTooLong' | 'TooManyTopics' | 'NoChainExtension' | 'DuplicateContract' | 'TerminatedInConstructor' | 'ReentranceDenied' | 'StorageDepositNotEnoughFunds' | 'StorageDepositLimitExhausted' | 'CodeInUse' | 'ContractReverted' | 'CodeRejected' | 'Indeterministic';
  }

  /** @name DiaOracleDiaAssetId (550) */
  interface DiaOracleDiaAssetId extends Struct {
    readonly blockchain: Bytes;
    readonly symbol: Bytes;
  }

  /** @name DiaOracleError (551) */
  interface DiaOracleError extends Enum {
    readonly isNoCoinInfoAvailable: boolean;
    readonly isThisAccountIdIsNotAuthorized: boolean;
    readonly isNoBatchingApiEndPoint: boolean;
    readonly isDeserializeStrError: boolean;
    readonly isDeserializeError: boolean;
    readonly isHttpRequestSendFailed: boolean;
    readonly isHttpRequestFailed: boolean;
    readonly isFailedSignedTransaction: boolean;
    readonly isUserUnableToDeauthorizeThemself: boolean;
    readonly isBadOrigin: boolean;
    readonly type: 'NoCoinInfoAvailable' | 'ThisAccountIdIsNotAuthorized' | 'NoBatchingApiEndPoint' | 'DeserializeStrError' | 'DeserializeError' | 'HttpRequestSendFailed' | 'HttpRequestFailed' | 'FailedSignedTransaction' | 'UserUnableToDeauthorizeThemself' | 'BadOrigin';
  }

  /** @name ZenlinkProtocolPrimitivesPairStatus (558) */
  interface ZenlinkProtocolPrimitivesPairStatus extends Enum {
    readonly isTrading: boolean;
    readonly asTrading: ZenlinkProtocolPrimitivesPairMetadata;
    readonly isBootstrap: boolean;
    readonly asBootstrap: ZenlinkProtocolPrimitivesBootstrapParameter;
    readonly isDisable: boolean;
    readonly type: 'Trading' | 'Bootstrap' | 'Disable';
  }

  /** @name ZenlinkProtocolPrimitivesPairMetadata (559) */
  interface ZenlinkProtocolPrimitivesPairMetadata extends Struct {
    readonly pairAccount: AccountId32;
    readonly totalSupply: u128;
  }

  /** @name ZenlinkProtocolPrimitivesBootstrapParameter (560) */
  interface ZenlinkProtocolPrimitivesBootstrapParameter extends Struct {
    readonly targetSupply: ITuple<[u128, u128]>;
    readonly capacitySupply: ITuple<[u128, u128]>;
    readonly accumulatedSupply: ITuple<[u128, u128]>;
    readonly endBlockNumber: u32;
    readonly pairAccount: AccountId32;
  }

  /** @name ZenlinkProtocolError (564) */
  interface ZenlinkProtocolError extends Enum {
    readonly isRequireProtocolAdmin: boolean;
    readonly isRequireProtocolAdminCandidate: boolean;
    readonly isInvalidFeePoint: boolean;
    readonly isUnsupportedAssetType: boolean;
    readonly isInsufficientAssetBalance: boolean;
    readonly isNativeBalanceTooLow: boolean;
    readonly isDeniedCreatePair: boolean;
    readonly isPairAlreadyExists: boolean;
    readonly isPairNotExists: boolean;
    readonly isAssetNotExists: boolean;
    readonly isInsufficientLiquidity: boolean;
    readonly isInsufficientPairReserve: boolean;
    readonly isInsufficientTargetAmount: boolean;
    readonly isExcessiveSoldAmount: boolean;
    readonly isInvalidPath: boolean;
    readonly isIncorrectAssetAmountRange: boolean;
    readonly isOverflow: boolean;
    readonly isDeadline: boolean;
    readonly isAccountIdBadLocation: boolean;
    readonly isExecutionFailed: boolean;
    readonly isDeniedTransferToSelf: boolean;
    readonly isTargetChainNotRegistered: boolean;
    readonly isInvariantCheckFailed: boolean;
    readonly isPairCreateForbidden: boolean;
    readonly isNotInBootstrap: boolean;
    readonly isInvalidContributionAmount: boolean;
    readonly isUnqualifiedBootstrap: boolean;
    readonly isZeroContribute: boolean;
    readonly isDenyRefund: boolean;
    readonly isDisableBootstrap: boolean;
    readonly isNotQualifiedAccount: boolean;
    readonly isNoRewardTokens: boolean;
    readonly isChargeRewardParamsError: boolean;
    readonly isExistRewardsInBootstrap: boolean;
    readonly type: 'RequireProtocolAdmin' | 'RequireProtocolAdminCandidate' | 'InvalidFeePoint' | 'UnsupportedAssetType' | 'InsufficientAssetBalance' | 'NativeBalanceTooLow' | 'DeniedCreatePair' | 'PairAlreadyExists' | 'PairNotExists' | 'AssetNotExists' | 'InsufficientLiquidity' | 'InsufficientPairReserve' | 'InsufficientTargetAmount' | 'ExcessiveSoldAmount' | 'InvalidPath' | 'IncorrectAssetAmountRange' | 'Overflow' | 'Deadline' | 'AccountIdBadLocation' | 'ExecutionFailed' | 'DeniedTransferToSelf' | 'TargetChainNotRegistered' | 'InvariantCheckFailed' | 'PairCreateForbidden' | 'NotInBootstrap' | 'InvalidContributionAmount' | 'UnqualifiedBootstrap' | 'ZeroContribute' | 'DenyRefund' | 'DisableBootstrap' | 'NotQualifiedAccount' | 'NoRewardTokens' | 'ChargeRewardParamsError' | 'ExistRewardsInBootstrap';
  }

  /** @name CurrencyError (565) */
  interface CurrencyError extends Enum {
    readonly isAssetConversionError: boolean;
    readonly isBalanceConversionError: boolean;
    readonly isCompatibleRoundingFailed: boolean;
    readonly isIncompatibleAmount: boolean;
    readonly isInvalidCurrency: boolean;
    readonly isTryIntoIntError: boolean;
    readonly type: 'AssetConversionError' | 'BalanceConversionError' | 'CompatibleRoundingFailed' | 'IncompatibleAmount' | 'InvalidCurrency' | 'TryIntoIntError';
  }

  /** @name FeeError (566) */
  interface FeeError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isAboveMaxExpectedValue: boolean;
    readonly isOverflow: boolean;
    readonly type: 'TryIntoIntError' | 'AboveMaxExpectedValue' | 'Overflow';
  }

  /** @name SpacewalkPrimitivesIssueIssueRequest (567) */
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

  /** @name SpacewalkPrimitivesIssueIssueRequestStatus (568) */
  interface SpacewalkPrimitivesIssueIssueRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isCancelled: boolean;
    readonly type: 'Pending' | 'Completed' | 'Cancelled';
  }

  /** @name IssueError (569) */
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

  /** @name NominationError (570) */
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

  /** @name OracleVersion (571) */
  interface OracleVersion extends Enum {
    readonly isV0: boolean;
    readonly type: 'V0';
  }

  /** @name OracleError (572) */
  interface OracleError extends Enum {
    readonly isInvalidOracleSource: boolean;
    readonly isMissingExchangeRate: boolean;
    readonly isTryIntoIntError: boolean;
    readonly type: 'InvalidOracleSource' | 'MissingExchangeRate' | 'TryIntoIntError';
  }

  /** @name SpacewalkPrimitivesRedeemRedeemRequest (573) */
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

  /** @name RedeemError (575) */
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
    readonly isExceedLimitVolumeForRedeemRequest: boolean;
    readonly isInvalidPaymentAmount: boolean;
    readonly type: 'AmountExceedsUserBalance' | 'UnauthorizedRedeemer' | 'UnauthorizedVault' | 'TimeNotExpired' | 'RedeemCancelled' | 'RedeemCompleted' | 'RedeemIdNotFound' | 'TryIntoIntError' | 'AmountBelowMinimumTransferAmount' | 'ExceedLimitVolumeForRedeemRequest' | 'InvalidPaymentAmount';
  }

  /** @name SpacewalkPrimitivesReplaceReplaceRequest (576) */
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

  /** @name SpacewalkPrimitivesReplaceReplaceRequestStatus (577) */
  interface SpacewalkPrimitivesReplaceReplaceRequestStatus extends Enum {
    readonly isPending: boolean;
    readonly isCompleted: boolean;
    readonly isCancelled: boolean;
    readonly type: 'Pending' | 'Completed' | 'Cancelled';
  }

  /** @name ReplaceError (578) */
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
    readonly isInvalidPaymentAmount: boolean;
    readonly type: 'ReplaceAmountZero' | 'AmountBelowDustAmount' | 'NoPendingRequest' | 'UnauthorizedVault' | 'ReplaceSelfNotAllowed' | 'VaultHasEnabledNomination' | 'ReplacePeriodNotExpired' | 'ReplaceCompleted' | 'ReplaceCancelled' | 'ReplaceIdNotFound' | 'InvalidWrappedCurrency' | 'InvalidPaymentAmount';
  }

  /** @name SecurityError (580) */
  interface SecurityError extends Enum {
    readonly isParachainNotRunning: boolean;
    readonly type: 'ParachainNotRunning';
  }

  /** @name StellarRelayError (583) */
  interface StellarRelayError extends Enum {
    readonly isBase64DecodeError: boolean;
    readonly isBoundedVecCreationFailed: boolean;
    readonly isDuplicateOrganizationId: boolean;
    readonly isDuplicateValidatorPublicKey: boolean;
    readonly isEmptyEnvelopeSet: boolean;
    readonly isEnvelopeSignedByUnknownValidator: boolean;
    readonly isEnvelopeSlotIndexMismatch: boolean;
    readonly isExternalizedNHMismatch: boolean;
    readonly isExternalizedValueMismatch: boolean;
    readonly isFailedToComputeNonGenericTxSetContentHash: boolean;
    readonly isInvalidEnvelopeSignature: boolean;
    readonly isInvalidQuorumSetNotEnoughOrganizations: boolean;
    readonly isInvalidQuorumSetNotEnoughValidators: boolean;
    readonly isInvalidScpPledge: boolean;
    readonly isInvalidTransactionSetPrefix: boolean;
    readonly isInvalidXDR: boolean;
    readonly isMissingExternalizedMessage: boolean;
    readonly isNoOrganizationsRegistered: boolean;
    readonly isNoValidatorsRegistered: boolean;
    readonly isOrganizationLimitExceeded: boolean;
    readonly isSlotIndexIsNone: boolean;
    readonly isTransactionMemoDoesNotMatch: boolean;
    readonly isTransactionNotInTransactionSet: boolean;
    readonly isTransactionSetHashCreationFailed: boolean;
    readonly isTransactionSetHashMismatch: boolean;
    readonly isValidatorLimitExceeded: boolean;
    readonly type: 'Base64DecodeError' | 'BoundedVecCreationFailed' | 'DuplicateOrganizationId' | 'DuplicateValidatorPublicKey' | 'EmptyEnvelopeSet' | 'EnvelopeSignedByUnknownValidator' | 'EnvelopeSlotIndexMismatch' | 'ExternalizedNHMismatch' | 'ExternalizedValueMismatch' | 'FailedToComputeNonGenericTxSetContentHash' | 'InvalidEnvelopeSignature' | 'InvalidQuorumSetNotEnoughOrganizations' | 'InvalidQuorumSetNotEnoughValidators' | 'InvalidScpPledge' | 'InvalidTransactionSetPrefix' | 'InvalidXDR' | 'MissingExternalizedMessage' | 'NoOrganizationsRegistered' | 'NoValidatorsRegistered' | 'OrganizationLimitExceeded' | 'SlotIndexIsNone' | 'TransactionMemoDoesNotMatch' | 'TransactionNotInTransactionSet' | 'TransactionSetHashCreationFailed' | 'TransactionSetHashMismatch' | 'ValidatorLimitExceeded';
  }

  /** @name VaultRegistrySystemVault (584) */
  interface VaultRegistrySystemVault extends Struct {
    readonly toBeIssuedTokens: u128;
    readonly issuedTokens: u128;
    readonly toBeRedeemedTokens: u128;
    readonly collateral: u128;
    readonly currencyPair: SpacewalkPrimitivesVaultCurrencyPair;
  }

  /** @name VaultRegistryVault (585) */
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

  /** @name VaultRegistryError (586) */
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

  /** @name PooledRewardsError (592) */
  interface PooledRewardsError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isZeroTotalStake: boolean;
    readonly isMaxRewardCurrencies: boolean;
    readonly type: 'TryIntoIntError' | 'InsufficientFunds' | 'ZeroTotalStake' | 'MaxRewardCurrencies';
  }

  /** @name StakingError (599) */
  interface StakingError extends Enum {
    readonly isTryIntoIntError: boolean;
    readonly isInsufficientFunds: boolean;
    readonly isSlashZeroTotalStake: boolean;
    readonly isMaxRewardCurrencies: boolean;
    readonly type: 'TryIntoIntError' | 'InsufficientFunds' | 'SlashZeroTotalStake' | 'MaxRewardCurrencies';
  }

  /** @name ClientsInfoError (600) */
  interface ClientsInfoError extends Enum {
    readonly isThisAccountIdIsNotAuthorized: boolean;
    readonly isUserUnableToDeauthorizeThemself: boolean;
    readonly type: 'ThisAccountIdIsNotAuthorized' | 'UserUnableToDeauthorizeThemself';
  }

  /** @name RewardDistributionError (601) */
  interface RewardDistributionError extends Enum {
    readonly isOverflow: boolean;
    readonly isUnderflow: boolean;
    readonly isNoRewardsForAccount: boolean;
    readonly isNotEnoughRewardsRegistered: boolean;
    readonly isInconsistentRewardCurrencies: boolean;
    readonly isCollectAmountTooSmall: boolean;
    readonly type: 'Overflow' | 'Underflow' | 'NoRewardsForAccount' | 'NotEnoughRewardsRegistered' | 'InconsistentRewardCurrencies' | 'CollectAmountTooSmall';
  }

  /** @name OrmlCurrenciesAllowanceExtensionError (603) */
  interface OrmlCurrenciesAllowanceExtensionError extends Enum {
    readonly isUnapproved: boolean;
    readonly isCurrencyNotLive: boolean;
    readonly isExceedsNumberOfAllowedCurrencies: boolean;
    readonly type: 'Unapproved' | 'CurrencyNotLive' | 'ExceedsNumberOfAllowedCurrencies';
  }

  /** @name OrmlTokensManagementExtensionCurrencyDetails (604) */
  interface OrmlTokensManagementExtensionCurrencyDetails extends Struct {
    readonly owner: AccountId32;
    readonly issuer: AccountId32;
    readonly admin: AccountId32;
    readonly deposit: u128;
  }

  /** @name OrmlTokensManagementExtensionError (605) */
  interface OrmlTokensManagementExtensionError extends Enum {
    readonly isAlreadyCreated: boolean;
    readonly isNotOwnableCurrency: boolean;
    readonly isNotCreated: boolean;
    readonly isNoPermission: boolean;
    readonly isInsufficientBalance: boolean;
    readonly type: 'AlreadyCreated' | 'NotOwnableCurrency' | 'NotCreated' | 'NoPermission' | 'InsufficientBalance';
  }

  /** @name TreasuryBuyoutExtensionError (606) */
  interface TreasuryBuyoutExtensionError extends Enum {
    readonly isStorageClearingFailure: boolean;
    readonly isNativeTokenNotAllowed: boolean;
    readonly isExceedsNumberOfAllowedCurrencies: boolean;
    readonly isWrongAssetToBuyout: boolean;
    readonly isBuyoutLimitExceeded: boolean;
    readonly isNoPrice: boolean;
    readonly isInsufficientTreasuryBalance: boolean;
    readonly isInsufficientAccountBalance: boolean;
    readonly isLessThanMinBuyoutAmount: boolean;
    readonly isBuyoutWithTreasuryAccount: boolean;
    readonly isExchangeFailure: boolean;
    readonly type: 'StorageClearingFailure' | 'NativeTokenNotAllowed' | 'ExceedsNumberOfAllowedCurrencies' | 'WrongAssetToBuyout' | 'BuyoutLimitExceeded' | 'NoPrice' | 'InsufficientTreasuryBalance' | 'InsufficientAccountBalance' | 'LessThanMinBuyoutAmount' | 'BuyoutWithTreasuryAccount' | 'ExchangeFailure';
  }

  /** @name BifrostFarmingRewardsPoolInfo (607) */
  interface BifrostFarmingRewardsPoolInfo extends Struct {
    readonly tokensProportion: BTreeMap<SpacewalkPrimitivesCurrencyId, Perbill>;
    readonly basicToken: ITuple<[SpacewalkPrimitivesCurrencyId, Perbill]>;
    readonly totalShares: u128;
    readonly basicRewards: BTreeMap<SpacewalkPrimitivesCurrencyId, u128>;
    readonly rewards: BTreeMap<SpacewalkPrimitivesCurrencyId, ITuple<[u128, u128]>>;
    readonly state: BifrostFarmingRewardsPoolState;
    readonly keeper: AccountId32;
    readonly rewardIssuer: AccountId32;
    readonly gauge: Option<u32>;
    readonly blockStartup: Option<u32>;
    readonly minDepositToStart: u128;
    readonly afterBlockToStart: u32;
    readonly withdrawLimitTime: u32;
    readonly claimLimitTime: u32;
    readonly withdrawLimitCount: u8;
  }

  /** @name BifrostFarmingRewardsPoolState (613) */
  interface BifrostFarmingRewardsPoolState extends Enum {
    readonly isUnCharged: boolean;
    readonly isCharged: boolean;
    readonly isOngoing: boolean;
    readonly isDead: boolean;
    readonly isRetired: boolean;
    readonly type: 'UnCharged' | 'Charged' | 'Ongoing' | 'Dead' | 'Retired';
  }

  /** @name BifrostFarmingGaugeGaugePoolInfo (614) */
  interface BifrostFarmingGaugeGaugePoolInfo extends Struct {
    readonly pid: u32;
    readonly token: SpacewalkPrimitivesCurrencyId;
    readonly keeper: AccountId32;
    readonly rewardIssuer: AccountId32;
    readonly rewards: BTreeMap<SpacewalkPrimitivesCurrencyId, ITuple<[u128, u128, u128]>>;
    readonly gaugeBasicRewards: BTreeMap<SpacewalkPrimitivesCurrencyId, u128>;
    readonly maxBlock: u32;
    readonly gaugeAmount: u128;
    readonly totalTimeFactor: u128;
    readonly gaugeState: BifrostFarmingGaugeGaugeState;
    readonly gaugeLastBlock: u32;
  }

  /** @name BifrostFarmingGaugeGaugeState (619) */
  interface BifrostFarmingGaugeGaugeState extends Enum {
    readonly isUnbond: boolean;
    readonly isBonded: boolean;
    readonly type: 'Unbond' | 'Bonded';
  }

  /** @name BifrostFarmingGaugeGaugeInfo (621) */
  interface BifrostFarmingGaugeGaugeInfo extends Struct {
    readonly who: AccountId32;
    readonly gaugeAmount: u128;
    readonly totalTimeFactor: u128;
    readonly latestTimeFactor: u128;
    readonly claimedTimeFactor: u128;
    readonly gaugeStartBlock: u32;
    readonly gaugeStopBlock: u32;
    readonly gaugeLastBlock: u32;
    readonly lastClaimBlock: u32;
  }

  /** @name BifrostFarmingRewardsShareInfo (622) */
  interface BifrostFarmingRewardsShareInfo extends Struct {
    readonly who: AccountId32;
    readonly share: u128;
    readonly withdrawnRewards: BTreeMap<SpacewalkPrimitivesCurrencyId, u128>;
    readonly claimLastBlock: u32;
    readonly withdrawList: Vec<ITuple<[u32, u128]>>;
  }

  /** @name BifrostFarmingBoostBoostPoolInfo (623) */
  interface BifrostFarmingBoostBoostPoolInfo extends Struct {
    readonly totalVotes: u128;
    readonly startRound: u32;
    readonly endRound: u32;
    readonly roundLength: u32;
  }

  /** @name BifrostFarmingBoostUserBoostInfo (624) */
  interface BifrostFarmingBoostUserBoostInfo extends Struct {
    readonly voteAmount: u128;
    readonly voteList: Vec<ITuple<[u32, Percent]>>;
    readonly lastVote: u32;
  }

  /** @name BifrostFarmingError (627) */
  interface BifrostFarmingError extends Enum {
    readonly isNotNullable: boolean;
    readonly isPoolDoesNotExist: boolean;
    readonly isGaugePoolNotExist: boolean;
    readonly isGaugeInfoNotExist: boolean;
    readonly isInvalidPoolState: boolean;
    readonly isLastGaugeNotClaim: boolean;
    readonly isCanNotClaim: boolean;
    readonly isGaugeMaxBlockOverflow: boolean;
    readonly isWithdrawLimitCountExceeded: boolean;
    readonly isShareInfoNotExists: boolean;
    readonly isCanNotDeposit: boolean;
    readonly isWhitelistEmpty: boolean;
    readonly isRoundNotOver: boolean;
    readonly isRoundLengthNotSet: boolean;
    readonly isWhitelistLimitExceeded: boolean;
    readonly isNobodyVoting: boolean;
    readonly isNotInWhitelist: boolean;
    readonly isPercentOverflow: boolean;
    readonly isPoolNotCleared: boolean;
    readonly type: 'NotNullable' | 'PoolDoesNotExist' | 'GaugePoolNotExist' | 'GaugeInfoNotExist' | 'InvalidPoolState' | 'LastGaugeNotClaim' | 'CanNotClaim' | 'GaugeMaxBlockOverflow' | 'WithdrawLimitCountExceeded' | 'ShareInfoNotExists' | 'CanNotDeposit' | 'WhitelistEmpty' | 'RoundNotOver' | 'RoundLengthNotSet' | 'WhitelistLimitExceeded' | 'NobodyVoting' | 'NotInWhitelist' | 'PercentOverflow' | 'PoolNotCleared';
  }

  /** @name OrmlAssetRegistryModuleError (628) */
  interface OrmlAssetRegistryModuleError extends Enum {
    readonly isAssetNotFound: boolean;
    readonly isBadVersion: boolean;
    readonly isInvalidAssetId: boolean;
    readonly isConflictingLocation: boolean;
    readonly isConflictingAssetId: boolean;
    readonly type: 'AssetNotFound' | 'BadVersion' | 'InvalidAssetId' | 'ConflictingLocation' | 'ConflictingAssetId';
  }

  /** @name SpRuntimeMultiSignature (630) */
  interface SpRuntimeMultiSignature extends Enum {
    readonly isEd25519: boolean;
    readonly asEd25519: SpCoreEd25519Signature;
    readonly isSr25519: boolean;
    readonly asSr25519: SpCoreSr25519Signature;
    readonly isEcdsa: boolean;
    readonly asEcdsa: SpCoreEcdsaSignature;
    readonly type: 'Ed25519' | 'Sr25519' | 'Ecdsa';
  }

  /** @name SpCoreEd25519Signature (631) */
  interface SpCoreEd25519Signature extends U8aFixed {}

  /** @name SpCoreSr25519Signature (633) */
  interface SpCoreSr25519Signature extends U8aFixed {}

  /** @name SpCoreEcdsaSignature (634) */
  interface SpCoreEcdsaSignature extends U8aFixed {}

  /** @name FrameSystemExtensionsCheckNonZeroSender (637) */
  type FrameSystemExtensionsCheckNonZeroSender = Null;

  /** @name FrameSystemExtensionsCheckSpecVersion (638) */
  type FrameSystemExtensionsCheckSpecVersion = Null;

  /** @name FrameSystemExtensionsCheckTxVersion (639) */
  type FrameSystemExtensionsCheckTxVersion = Null;

  /** @name FrameSystemExtensionsCheckGenesis (640) */
  type FrameSystemExtensionsCheckGenesis = Null;

  /** @name FrameSystemExtensionsCheckNonce (643) */
  interface FrameSystemExtensionsCheckNonce extends Compact<u32> {}

  /** @name FrameSystemExtensionsCheckWeight (644) */
  type FrameSystemExtensionsCheckWeight = Null;

  /** @name PalletTransactionPaymentChargeTransactionPayment (645) */
  interface PalletTransactionPaymentChargeTransactionPayment extends Compact<u128> {}

  /** @name TreasuryBuyoutExtensionCheckBuyout (646) */
  type TreasuryBuyoutExtensionCheckBuyout = Null;

  /** @name FoucocoRuntimeRuntime (647) */
  type FoucocoRuntimeRuntime = Null;

} // declare module
