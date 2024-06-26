// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup9: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup14: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup16: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup19: frame_system::EventRecord<foucoco_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup21: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSupportDispatchDispatchInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup23: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup24: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup25: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null'
    }
  },
  /**
   * Lookup26: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup27: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable']
  },
  /**
   * Lookup28: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup29: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup30: cumulus_pallet_parachain_system::pallet::Event<T>
   **/
  CumulusPalletParachainSystemEvent: {
    _enum: {
      ValidationFunctionStored: 'Null',
      ValidationFunctionApplied: {
        relayChainBlockNum: 'u32',
      },
      ValidationFunctionDiscarded: 'Null',
      UpgradeAuthorized: {
        codeHash: 'H256',
      },
      DownwardMessagesReceived: {
        count: 'u32',
      },
      DownwardMessagesProcessed: {
        weightUsed: 'SpWeightsWeightV2Weight',
        dmqHead: 'H256',
      },
      UpwardMessageSent: {
        messageHash: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup32: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup33: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup34: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup35: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        oldSudoer: 'Option<AccountId32>',
      },
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup39: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup40: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup41: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup43: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup44: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32'
      }
    }
  },
  /**
   * Lookup47: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>'
      }
    }
  },
  /**
   * Lookup49: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup50: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup51: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup52: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
      },
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Rejected: {
        proposalIndex: 'u32',
        slashed: 'u128',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128'
      }
    }
  },
  /**
   * Lookup53: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup54: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup55: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup56: runtime_common::proxy_type::ProxyType
   **/
  RuntimeCommonProxyType: {
    _enum: ['Any']
  },
  /**
   * Lookup58: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup59: parachain_staking::pallet::Event<T>
   **/
  ParachainStakingEvent: {
    _enum: {
      NewRound: '(u32,u32)',
      EnteredTopCandidates: 'AccountId32',
      LeftTopCandidates: 'AccountId32',
      JoinedCollatorCandidates: '(AccountId32,u128)',
      CollatorStakedMore: '(AccountId32,u128,u128)',
      CollatorStakedLess: '(AccountId32,u128,u128)',
      CollatorScheduledExit: '(u32,AccountId32,u32)',
      CollatorCanceledExit: 'AccountId32',
      CandidateLeft: '(AccountId32,u128)',
      CollatorRemoved: '(AccountId32,u128)',
      MaxCandidateStakeChanged: 'u128',
      DelegatorStakedMore: '(AccountId32,AccountId32,u128,u128)',
      DelegatorStakedLess: '(AccountId32,AccountId32,u128,u128)',
      DelegatorLeft: '(AccountId32,u128)',
      Delegation: '(AccountId32,u128,AccountId32,u128)',
      DelegationReplaced: '(AccountId32,u128,AccountId32,u128,AccountId32,u128)',
      DelegatorLeftCollator: '(AccountId32,AccountId32,u128,u128)',
      Rewarded: '(AccountId32,u128)',
      RoundInflationSet: '(Perquintill,Perquintill,Perquintill,Perquintill)',
      MaxSelectedCandidatesSet: '(u32,u32)',
      BlocksPerRoundSet: '(u32,u32,u32,u32)'
    }
  },
  /**
   * Lookup61: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<[u8;32]>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<[u8;32]>',
        error: 'XcmV3TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<[u8;32]>',
      },
      BadFormat: {
        messageHash: 'Option<[u8;32]>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<[u8;32]>',
      },
      OverweightEnqueued: {
        sender: 'u32',
        sentAt: 'u32',
        index: 'u64',
        required: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        index: 'u64',
        used: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup62: xcm::v3::traits::Error
   **/
  XcmV3TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      LocationFull: 'Null',
      LocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      ExpectationFalse: 'Null',
      PalletNotFound: 'Null',
      NameMismatch: 'Null',
      VersionIncompatible: 'Null',
      HoldingWouldOverflow: 'Null',
      ExportError: 'Null',
      ReanchorFailed: 'Null',
      NoDeal: 'Null',
      FeesNotMet: 'Null',
      LockError: 'Null',
      NoPermission: 'Null',
      Unanchored: 'Null',
      NotDepositable: 'Null',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'SpWeightsWeightV2Weight',
      Barrier: 'Null',
      WeightNotComputable: 'Null',
      ExceedsStackLimit: 'Null'
    }
  },
  /**
   * Lookup64: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV3TraitsOutcome',
      Sent: '(XcmV3MultiLocation,XcmV3MultiLocation,XcmV3Xcm)',
      UnexpectedResponse: '(XcmV3MultiLocation,u64)',
      ResponseReady: '(u64,XcmV3Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV3MultiLocation,u64,Option<XcmV3MultiLocation>)',
      InvalidResponderVersion: '(XcmV3MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV3MultiLocation,u32,XcmV3MultiassetMultiAssets)',
      SupportedVersionChanged: '(XcmV3MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV3MultiLocation,u64,XcmV3TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      InvalidQuerierVersion: '(XcmV3MultiLocation,u64)',
      InvalidQuerier: '(XcmV3MultiLocation,u64,XcmV3MultiLocation,Option<XcmV3MultiLocation>)',
      VersionNotifyStarted: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      VersionNotifyRequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      VersionNotifyUnrequested: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      FeesPaid: '(XcmV3MultiLocation,XcmV3MultiassetMultiAssets)',
      AssetsClaimed: '(H256,XcmV3MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup65: xcm::v3::traits::Outcome
   **/
  XcmV3TraitsOutcome: {
    _enum: {
      Complete: 'SpWeightsWeightV2Weight',
      Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
      Error: 'XcmV3TraitsError'
    }
  },
  /**
   * Lookup66: xcm::v3::multilocation::MultiLocation
   **/
  XcmV3MultiLocation: {
    parents: 'u8',
    interior: 'XcmV3Junctions'
  },
  /**
   * Lookup67: xcm::v3::junctions::Junctions
   **/
  XcmV3Junctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV3Junction',
      X2: '(XcmV3Junction,XcmV3Junction)',
      X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
      X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)'
    }
  },
  /**
   * Lookup68: xcm::v3::junction::Junction
   **/
  XcmV3Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'Option<XcmV3JunctionNetworkId>',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'Option<XcmV3JunctionNetworkId>',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'Option<XcmV3JunctionNetworkId>',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: {
        length: 'u8',
        data: '[u8;32]',
      },
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV3JunctionBodyId',
        part: 'XcmV3JunctionBodyPart',
      },
      GlobalConsensus: 'XcmV3JunctionNetworkId'
    }
  },
  /**
   * Lookup71: xcm::v3::junction::NetworkId
   **/
  XcmV3JunctionNetworkId: {
    _enum: {
      ByGenesis: '[u8;32]',
      ByFork: {
        blockNumber: 'u64',
        blockHash: '[u8;32]',
      },
      Polkadot: 'Null',
      Kusama: 'Null',
      Westend: 'Null',
      Rococo: 'Null',
      Wococo: 'Null',
      Ethereum: {
        chainId: 'Compact<u64>',
      },
      BitcoinCore: 'Null',
      BitcoinCash: 'Null'
    }
  },
  /**
   * Lookup74: xcm::v3::junction::BodyId
   **/
  XcmV3JunctionBodyId: {
    _enum: {
      Unit: 'Null',
      Moniker: '[u8;4]',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup75: xcm::v3::junction::BodyPart
   **/
  XcmV3JunctionBodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup76: xcm::v3::Xcm<Call>
   **/
  XcmV3Xcm: 'Vec<XcmV3Instruction>',
  /**
   * Lookup78: xcm::v3::Instruction<Call>
   **/
  XcmV3Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV3MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV3Response',
        maxWeight: 'SpWeightsWeightV2Weight',
        querier: 'Option<XcmV3MultiLocation>',
      },
      TransferAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        beneficiary: 'XcmV3MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      Transact: {
        originKind: 'XcmV2OriginKind',
        requireWeightAtMost: 'SpWeightsWeightV2Weight',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV3Junctions',
      ReportError: 'XcmV3QueryResponseInfo',
      DepositAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        beneficiary: 'XcmV3MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV3MultiassetMultiAssetFilter',
        want: 'XcmV3MultiassetMultiAssets',
        maximal: 'bool',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        reserve: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV3MultiassetMultiAssetFilter',
        dest: 'XcmV3MultiLocation',
        xcm: 'XcmV3Xcm',
      },
      ReportHolding: {
        responseInfo: 'XcmV3QueryResponseInfo',
        assets: 'XcmV3MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV3MultiAsset',
        weightLimit: 'XcmV3WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV3Xcm',
      SetAppendix: 'XcmV3Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV3MultiassetMultiAssets',
        ticket: 'XcmV3MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'SpWeightsWeightV2Weight',
      },
      UnsubscribeVersion: 'Null',
      BurnAsset: 'XcmV3MultiassetMultiAssets',
      ExpectAsset: 'XcmV3MultiassetMultiAssets',
      ExpectOrigin: 'Option<XcmV3MultiLocation>',
      ExpectError: 'Option<(u32,XcmV3TraitsError)>',
      ExpectTransactStatus: 'XcmV3MaybeErrorCode',
      QueryPallet: {
        moduleName: 'Bytes',
        responseInfo: 'XcmV3QueryResponseInfo',
      },
      ExpectPallet: {
        index: 'Compact<u32>',
        name: 'Bytes',
        moduleName: 'Bytes',
        crateMajor: 'Compact<u32>',
        minCrateMinor: 'Compact<u32>',
      },
      ReportTransactStatus: 'XcmV3QueryResponseInfo',
      ClearTransactStatus: 'Null',
      UniversalOrigin: 'XcmV3Junction',
      ExportMessage: {
        network: 'XcmV3JunctionNetworkId',
        destination: 'XcmV3Junctions',
        xcm: 'XcmV3Xcm',
      },
      LockAsset: {
        asset: 'XcmV3MultiAsset',
        unlocker: 'XcmV3MultiLocation',
      },
      UnlockAsset: {
        asset: 'XcmV3MultiAsset',
        target: 'XcmV3MultiLocation',
      },
      NoteUnlockable: {
        asset: 'XcmV3MultiAsset',
        owner: 'XcmV3MultiLocation',
      },
      RequestUnlock: {
        asset: 'XcmV3MultiAsset',
        locker: 'XcmV3MultiLocation',
      },
      SetFeesMode: {
        jitWithdraw: 'bool',
      },
      SetTopic: '[u8;32]',
      ClearTopic: 'Null',
      AliasOrigin: 'XcmV3MultiLocation',
      UnpaidExecution: {
        weightLimit: 'XcmV3WeightLimit',
        checkOrigin: 'Option<XcmV3MultiLocation>'
      }
    }
  },
  /**
   * Lookup79: xcm::v3::multiasset::MultiAssets
   **/
  XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
  /**
   * Lookup81: xcm::v3::multiasset::MultiAsset
   **/
  XcmV3MultiAsset: {
    id: 'XcmV3MultiassetAssetId',
    fun: 'XcmV3MultiassetFungibility'
  },
  /**
   * Lookup82: xcm::v3::multiasset::AssetId
   **/
  XcmV3MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV3MultiLocation',
      Abstract: '[u8;32]'
    }
  },
  /**
   * Lookup83: xcm::v3::multiasset::Fungibility
   **/
  XcmV3MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV3MultiassetAssetInstance'
    }
  },
  /**
   * Lookup84: xcm::v3::multiasset::AssetInstance
   **/
  XcmV3MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]'
    }
  },
  /**
   * Lookup87: xcm::v3::Response
   **/
  XcmV3Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV3MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
      Version: 'u32',
      PalletsInfo: 'Vec<XcmV3PalletInfo>',
      DispatchResult: 'XcmV3MaybeErrorCode'
    }
  },
  /**
   * Lookup91: xcm::v3::PalletInfo
   **/
  XcmV3PalletInfo: {
    index: 'Compact<u32>',
    name: 'Bytes',
    moduleName: 'Bytes',
    major: 'Compact<u32>',
    minor: 'Compact<u32>',
    patch: 'Compact<u32>'
  },
  /**
   * Lookup94: xcm::v3::MaybeErrorCode
   **/
  XcmV3MaybeErrorCode: {
    _enum: {
      Success: 'Null',
      Error: 'Bytes',
      TruncatedError: 'Bytes'
    }
  },
  /**
   * Lookup97: xcm::v2::OriginKind
   **/
  XcmV2OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup98: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup99: xcm::v3::QueryResponseInfo
   **/
  XcmV3QueryResponseInfo: {
    destination: 'XcmV3MultiLocation',
    queryId: 'Compact<u64>',
    maxWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup100: xcm::v3::multiasset::MultiAssetFilter
   **/
  XcmV3MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV3MultiassetMultiAssets',
      Wild: 'XcmV3MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup101: xcm::v3::multiasset::WildMultiAsset
   **/
  XcmV3MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
      },
      AllCounted: 'Compact<u32>',
      AllOfCounted: {
        id: 'XcmV3MultiassetAssetId',
        fun: 'XcmV3MultiassetWildFungibility',
        count: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup102: xcm::v3::multiasset::WildFungibility
   **/
  XcmV3MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup103: xcm::v3::WeightLimit
   **/
  XcmV3WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'SpWeightsWeightV2Weight'
    }
  },
  /**
   * Lookup104: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiassetMultiAssets',
      __Unused2: 'Null',
      V3: 'XcmV3MultiassetMultiAssets'
    }
  },
  /**
   * Lookup105: xcm::v2::multiasset::MultiAssets
   **/
  XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
  /**
   * Lookup107: xcm::v2::multiasset::MultiAsset
   **/
  XcmV2MultiAsset: {
    id: 'XcmV2MultiassetAssetId',
    fun: 'XcmV2MultiassetFungibility'
  },
  /**
   * Lookup108: xcm::v2::multiasset::AssetId
   **/
  XcmV2MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV2MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup109: xcm::v2::multilocation::MultiLocation
   **/
  XcmV2MultiLocation: {
    parents: 'u8',
    interior: 'XcmV2MultilocationJunctions'
  },
  /**
   * Lookup110: xcm::v2::multilocation::Junctions
   **/
  XcmV2MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV2Junction',
      X2: '(XcmV2Junction,XcmV2Junction)',
      X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
      X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)'
    }
  },
  /**
   * Lookup111: xcm::v2::junction::Junction
   **/
  XcmV2Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV2NetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV2NetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV2NetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV2BodyId',
        part: 'XcmV2BodyPart'
      }
    }
  },
  /**
   * Lookup112: xcm::v2::NetworkId
   **/
  XcmV2NetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup114: xcm::v2::BodyId
   **/
  XcmV2BodyId: {
    _enum: {
      Unit: 'Null',
      Named: 'Bytes',
      Index: 'Compact<u32>',
      Executive: 'Null',
      Technical: 'Null',
      Legislative: 'Null',
      Judicial: 'Null',
      Defense: 'Null',
      Administration: 'Null',
      Treasury: 'Null'
    }
  },
  /**
   * Lookup115: xcm::v2::BodyPart
   **/
  XcmV2BodyPart: {
    _enum: {
      Voice: 'Null',
      Members: {
        count: 'Compact<u32>',
      },
      Fraction: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      AtLeastProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>',
      },
      MoreThanProportion: {
        nom: 'Compact<u32>',
        denom: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup116: xcm::v2::multiasset::Fungibility
   **/
  XcmV2MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV2MultiassetAssetInstance'
    }
  },
  /**
   * Lookup117: xcm::v2::multiasset::AssetInstance
   **/
  XcmV2MultiassetAssetInstance: {
    _enum: {
      Undefined: 'Null',
      Index: 'Compact<u128>',
      Array4: '[u8;4]',
      Array8: '[u8;8]',
      Array16: '[u8;16]',
      Array32: '[u8;32]',
      Blob: 'Bytes'
    }
  },
  /**
   * Lookup118: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiLocation',
      __Unused2: 'Null',
      V3: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup119: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;32]',
      UnsupportedVersion: '[u8;32]',
      ExecutedDownward: '([u8;32],XcmV3TraitsOutcome)'
    }
  },
  /**
   * Lookup120: cumulus_pallet_dmp_queue::pallet::Event<T>
   **/
  CumulusPalletDmpQueueEvent: {
    _enum: {
      InvalidFormat: {
        messageId: '[u8;32]',
      },
      UnsupportedVersion: {
        messageId: '[u8;32]',
      },
      ExecutedDownward: {
        messageId: '[u8;32]',
        outcome: 'XcmV3TraitsOutcome',
      },
      WeightExhausted: {
        messageId: '[u8;32]',
        remainingWeight: 'SpWeightsWeightV2Weight',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightEnqueued: {
        messageId: '[u8;32]',
        overweightIndex: 'u64',
        requiredWeight: 'SpWeightsWeightV2Weight',
      },
      OverweightServiced: {
        overweightIndex: 'u64',
        weightUsed: 'SpWeightsWeightV2Weight',
      },
      MaxMessagesExhausted: {
        messageId: '[u8;32]'
      }
    }
  },
  /**
   * Lookup121: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup122: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup123: orml_tokens::module::Event<T>
   **/
  OrmlTokensModuleEvent: {
    _enum: {
      Endowed: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      DustLost: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Reserved: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        status: 'FrameSupportTokensMiscBalanceStatus',
      },
      BalanceSet: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        free: 'u128',
        reserved: 'u128',
      },
      TotalIssuanceSet: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'u128',
      },
      Withdrawn: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        freeAmount: 'u128',
        reservedAmount: 'u128',
      },
      Deposited: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockSet: {
        lockId: '[u8;8]',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      LockRemoved: {
        lockId: '[u8;8]',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
      },
      Locked: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup124: spacewalk_primitives::CurrencyId
   **/
  SpacewalkPrimitivesCurrencyId: {
    _enum: {
      Native: 'Null',
      XCM: 'u8',
      Stellar: 'SpacewalkPrimitivesAsset',
      ZenlinkLPToken: '(u8,u8,u8,u8)',
      Token: 'u64'
    }
  },
  /**
   * Lookup125: spacewalk_primitives::Asset
   **/
  SpacewalkPrimitivesAsset: {
    _enum: {
      StellarNative: 'Null',
      AlphaNum4: {
        code: '[u8;4]',
        issuer: '[u8;32]',
      },
      AlphaNum12: {
        code: '[u8;12]',
        issuer: '[u8;32]'
      }
    }
  },
  /**
   * Lookup127: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV3MultiassetMultiAssets',
        fee: 'XcmV3MultiAsset',
        dest: 'XcmV3MultiLocation'
      }
    }
  },
  /**
   * Lookup128: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup129: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'AccountId32',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256'
      }
    }
  },
  /**
   * Lookup130: dia_oracle::pallet::Event<T>
   **/
  DiaOracleEvent: {
    _enum: {
      UpdatedPrices: 'Vec<((Bytes,Bytes),DiaOracleDiaCoinInfo)>',
      AccountIdAuthorized: 'AccountId32',
      AccountIdDeauthorized: 'AccountId32',
      CurrencyAdded: '(Bytes,Bytes)',
      CurrencyRemoved: '(Bytes,Bytes)',
      BatchingApiRouteSet: 'Bytes'
    }
  },
  /**
   * Lookup134: dia_oracle::dia::CoinInfo
   **/
  DiaOracleDiaCoinInfo: {
    symbol: 'Bytes',
    name: 'Bytes',
    blockchain: 'Bytes',
    supply: 'u128',
    lastUpdateTimestamp: 'u64',
    price: 'u128'
  },
  /**
   * Lookup135: zenlink_protocol::pallet::Event<T>
   **/
  ZenlinkProtocolEvent: {
    _enum: {
      Transferred: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,AccountId32,u128)',
      Burned: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u128)',
      Minted: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u128)',
      PairCreated: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId)',
      LiquidityAdded: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
      LiquidityRemoved: '(AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
      AssetSwap: '(AccountId32,AccountId32,Vec<ZenlinkProtocolPrimitivesAssetId>,Vec<u128>)',
      TransferredToParachain: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u32,AccountId32,u128,u64)',
      BootstrapContribute: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,u128,ZenlinkProtocolPrimitivesAssetId,u128)',
      BootstrapEnd: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
      BootstrapCreated: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128,u128,u32)',
      BootstrapClaim: '(AccountId32,AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
      BootstrapUpdate: '(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128,u128,u32)',
      BootstrapRefund: '(AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128)',
      DistributeReward: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32,Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>)',
      ChargeReward: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32,Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>)',
      WithdrawReward: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32)'
    }
  },
  /**
   * Lookup136: zenlink_protocol::primitives::AssetId
   **/
  ZenlinkProtocolPrimitivesAssetId: {
    chainId: 'u32',
    assetType: 'u8',
    assetIndex: 'u64'
  },
  /**
   * Lookup141: issue::pallet::Event<T>
   **/
  IssueEvent: {
    _enum: {
      RequestIssue: {
        issueId: 'H256',
        requester: 'AccountId32',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        fee: 'u128',
        griefingCollateral: 'u128',
        vaultId: 'SpacewalkPrimitivesVaultId',
        vaultStellarPublicKey: '[u8;32]',
      },
      IssueAmountChange: {
        issueId: 'H256',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        fee: 'u128',
        confiscatedGriefingCollateral: 'u128',
      },
      ExecuteIssue: {
        issueId: 'H256',
        requester: 'AccountId32',
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        fee: 'u128',
      },
      CancelIssue: {
        issueId: 'H256',
        requester: 'AccountId32',
        griefingCollateral: 'u128',
      },
      IssuePeriodChange: {
        period: 'u32',
      },
      RateLimitUpdate: {
        limitVolumeAmount: 'Option<u128>',
        limitVolumeCurrencyId: 'SpacewalkPrimitivesCurrencyId',
        intervalLength: 'u32',
      },
      IssueMinimumTransferAmountUpdate: {
        newMinimumAmount: 'u128'
      }
    }
  },
  /**
   * Lookup142: spacewalk_primitives::VaultId<sp_core::crypto::AccountId32, spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesVaultId: {
    accountId: 'AccountId32',
    currencies: 'SpacewalkPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup143: spacewalk_primitives::VaultCurrencyPair<spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesVaultCurrencyPair: {
    collateral: 'SpacewalkPrimitivesCurrencyId',
    wrapped: 'SpacewalkPrimitivesCurrencyId'
  },
  /**
   * Lookup145: nomination::pallet::Event<T>
   **/
  NominationEvent: {
    _enum: {
      NominationOptIn: {
        vaultId: 'SpacewalkPrimitivesVaultId',
      },
      NominationOptOut: {
        vaultId: 'SpacewalkPrimitivesVaultId',
      },
      DepositCollateral: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'u128',
      },
      WithdrawCollateral: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup146: oracle::pallet::Event<T>
   **/
  OracleEvent: {
    _enum: {
      AggregateUpdated: {
        values: 'Vec<(SpacewalkPrimitivesOracleKey,u128)>',
      },
      OracleKeysUpdated: {
        oracleKeys: 'Vec<SpacewalkPrimitivesOracleKey>',
      },
      MaxDelayUpdated: {
        maxDelay: 'u64'
      }
    }
  },
  /**
   * Lookup149: spacewalk_primitives::oracle::Key
   **/
  SpacewalkPrimitivesOracleKey: {
    _enum: {
      ExchangeRate: 'SpacewalkPrimitivesCurrencyId'
    }
  },
  /**
   * Lookup152: redeem::pallet::Event<T>
   **/
  RedeemEvent: {
    _enum: {
      RequestRedeem: {
        redeemId: 'H256',
        redeemer: 'AccountId32',
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        fee: 'u128',
        premium: 'u128',
        stellarAddress: '[u8;32]',
        transferFee: 'u128',
      },
      LiquidationRedeem: {
        redeemer: 'AccountId32',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
      },
      ExecuteRedeem: {
        redeemId: 'H256',
        redeemer: 'AccountId32',
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        fee: 'u128',
        transferFee: 'u128',
      },
      CancelRedeem: {
        redeemId: 'H256',
        redeemer: 'AccountId32',
        vaultId: 'SpacewalkPrimitivesVaultId',
        slashedAmount: 'u128',
        status: 'SpacewalkPrimitivesRedeemRedeemRequestStatus',
      },
      MintTokensForReimbursedRedeem: {
        redeemId: 'H256',
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
      },
      RedeemPeriodChange: {
        period: 'u32',
      },
      SelfRedeem: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        fee: 'u128',
      },
      RateLimitUpdate: {
        limitVolumeAmount: 'Option<u128>',
        limitVolumeCurrencyId: 'SpacewalkPrimitivesCurrencyId',
        intervalLength: 'u32',
      },
      RedeemMinimumTransferAmountUpdate: {
        newMinimumAmount: 'u128'
      }
    }
  },
  /**
   * Lookup153: spacewalk_primitives::redeem::RedeemRequestStatus
   **/
  SpacewalkPrimitivesRedeemRedeemRequestStatus: {
    _enum: {
      Pending: 'Null',
      Completed: 'Null',
      Reimbursed: 'bool',
      Retried: 'Null'
    }
  },
  /**
   * Lookup154: replace::pallet::Event<T>
   **/
  ReplaceEvent: {
    _enum: {
      RequestReplace: {
        oldVaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        griefingCollateral: 'u128',
      },
      WithdrawReplace: {
        oldVaultId: 'SpacewalkPrimitivesVaultId',
        withdrawnTokens: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        withdrawnGriefingCollateral: 'u128',
      },
      AcceptReplace: {
        replaceId: 'H256',
        oldVaultId: 'SpacewalkPrimitivesVaultId',
        newVaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        collateral: 'u128',
        stellarAddress: '[u8;32]',
      },
      ExecuteReplace: {
        replaceId: 'H256',
        oldVaultId: 'SpacewalkPrimitivesVaultId',
        newVaultId: 'SpacewalkPrimitivesVaultId',
      },
      CancelReplace: {
        replaceId: 'H256',
        newVaultId: 'SpacewalkPrimitivesVaultId',
        oldVaultId: 'SpacewalkPrimitivesVaultId',
        griefingCollateral: 'u128',
      },
      ReplacePeriodChange: {
        period: 'u32',
      },
      ReplaceMinimumTransferAmountUpdate: {
        newMinimumAmount: 'u128'
      }
    }
  },
  /**
   * Lookup155: security::pallet::Event<T>
   **/
  SecurityEvent: {
    _enum: {
      RecoverFromErrors: {
        newStatus: 'SecurityStatusCode',
        clearedErrors: 'Vec<SecurityErrorCode>',
      },
      UpdateActiveBlock: {
        blockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup156: security::types::StatusCode
   **/
  SecurityStatusCode: {
    _enum: ['Running', 'Error', 'Shutdown']
  },
  /**
   * Lookup158: security::types::ErrorCode
   **/
  SecurityErrorCode: {
    _enum: ['None', 'OracleOffline']
  },
  /**
   * Lookup159: stellar_relay::pallet::Event<T>
   **/
  StellarRelayEvent: {
    _enum: {
      UpdateTier1ValidatorSet: {
        newValidatorsEnactmentBlockHeight: 'u32'
      }
    }
  },
  /**
   * Lookup160: vault_registry::pallet::Event<T>
   **/
  VaultRegistryEvent: {
    _enum: {
      RegisterVault: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        collateral: 'u128',
      },
      DepositCollateral: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        newCollateral: 'u128',
        totalCollateral: 'u128',
        freeCollateral: 'u128',
      },
      WithdrawCollateral: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        withdrawnAmount: 'u128',
        totalCollateral: 'u128',
      },
      IncreaseLockedCollateral: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        delta: 'u128',
        total: 'u128',
      },
      DecreaseLockedCollateral: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        delta: 'u128',
        total: 'u128',
      },
      UpdatePublicKey: {
        accountId: 'AccountId32',
        publicKey: '[u8;32]',
      },
      RegisterAddress: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        address: '[u8;32]',
      },
      IncreaseToBeIssuedTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        increase: 'u128',
      },
      DecreaseToBeIssuedTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        decrease: 'u128',
      },
      IssueTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        increase: 'u128',
      },
      IncreaseToBeRedeemedTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        increase: 'u128',
      },
      DecreaseToBeRedeemedTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        decrease: 'u128',
      },
      IncreaseToBeReplacedTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        increase: 'u128',
      },
      DecreaseToBeReplacedTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        decrease: 'u128',
      },
      DecreaseTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        userId: 'AccountId32',
        decrease: 'u128',
      },
      RedeemTokens: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        redeemedAmount: 'u128',
      },
      RedeemTokensPremium: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        redeemedAmount: 'u128',
        collateral: 'u128',
        userId: 'AccountId32',
      },
      RedeemTokensLiquidatedVault: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        tokens: 'u128',
        collateral: 'u128',
      },
      RedeemTokensLiquidation: {
        redeemerId: 'AccountId32',
        burnedTokens: 'u128',
        transferredCollateral: 'u128',
      },
      ReplaceTokens: {
        oldVaultId: 'SpacewalkPrimitivesVaultId',
        newVaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        additionalCollateral: 'u128',
      },
      LiquidateVault: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        issuedTokens: 'u128',
        toBeIssuedTokens: 'u128',
        toBeRedeemedTokens: 'u128',
        toBeReplacedTokens: 'u128',
        backingCollateral: 'u128',
        status: 'VaultRegistryVaultStatus',
        replaceCollateral: 'u128',
      },
      BanVault: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        bannedUntil: 'u32'
      }
    }
  },
  /**
   * Lookup161: vault_registry::types::VaultStatus
   **/
  VaultRegistryVaultStatus: {
    _enum: {
      Active: 'bool',
      Liquidated: 'Null'
    }
  },
  /**
   * Lookup162: pooled_rewards::pallet::Event<T, I>
   **/
  PooledRewardsEvent: {
    _enum: {
      DepositStake: {
        poolId: 'SpacewalkPrimitivesCurrencyId',
        stakeId: 'SpacewalkPrimitivesVaultId',
        amount: 'i128',
      },
      DistributeReward: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'i128',
      },
      WithdrawStake: {
        poolId: 'SpacewalkPrimitivesCurrencyId',
        stakeId: 'SpacewalkPrimitivesVaultId',
        amount: 'i128',
      },
      WithdrawReward: {
        poolId: 'SpacewalkPrimitivesCurrencyId',
        stakeId: 'SpacewalkPrimitivesVaultId',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup165: staking::pallet::Event<T>
   **/
  StakingEvent: {
    _enum: {
      DepositStake: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'i128',
      },
      DistributeReward: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'i128',
      },
      WithdrawStake: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'i128',
      },
      WithdrawReward: {
        nonce: 'u32',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        vaultId: 'SpacewalkPrimitivesVaultId',
        nominatorId: 'AccountId32',
        amount: 'i128',
      },
      ForceRefund: {
        vaultId: 'SpacewalkPrimitivesVaultId',
      },
      IncreaseNonce: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        newNonce: 'u32'
      }
    }
  },
  /**
   * Lookup166: clients_info::pallet::Event<T>
   **/
  ClientsInfoEvent: {
    _enum: {
      NotifyClientRelease: {
        release: 'ClientsInfoClientRelease',
      },
      ApplyClientRelease: {
        release: 'ClientsInfoClientRelease',
      },
      AccountIdAuthorized: 'AccountId32',
      AccountIdDeauthorized: 'AccountId32'
    }
  },
  /**
   * Lookup167: clients_info::ClientRelease<bounded_collections::bounded_vec::BoundedVec<T, S>, primitive_types::H256>
   **/
  ClientsInfoClientRelease: {
    uri: 'Bytes',
    checksum: 'H256'
  },
  /**
   * Lookup169: reward_distribution::pallet::Event<T>
   **/
  RewardDistributionEvent: {
    _enum: {
      RewardPerBlockAdapted: 'u128'
    }
  },
  /**
   * Lookup170: orml_currencies_allowance_extension::pallet::Event<T>
   **/
  OrmlCurrenciesAllowanceExtensionEvent: {
    _enum: {
      AllowedCurrenciesAdded: {
        currencies: 'Vec<SpacewalkPrimitivesCurrencyId>',
      },
      AllowedCurrenciesDeleted: {
        currencies: 'Vec<SpacewalkPrimitivesCurrencyId>',
      },
      TransferApproved: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup172: orml_tokens_management_extension::pallet::Event<T>
   **/
  OrmlTokensManagementExtensionEvent: {
    _enum: {
      Mint: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        from: 'AccountId32',
        amount: 'u128',
      },
      Created: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      OwnershipChanged: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        newOwner: 'AccountId32',
      },
      ManagersChanged: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        newAdmin: 'AccountId32',
        newIssuer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup173: treasury_buyout_extension::pallet::Event<T>
   **/
  TreasuryBuyoutExtensionEvent: {
    _enum: {
      Buyout: {
        who: 'AccountId32',
        buyoutAmount: 'u128',
        asset: 'SpacewalkPrimitivesCurrencyId',
        exchangeAmount: 'u128',
      },
      BuyoutLimitUpdated: {
        limit: 'Option<u128>',
      },
      AllowedAssetsForBuyoutUpdated: {
        allowedAssets: 'Vec<SpacewalkPrimitivesCurrencyId>'
      }
    }
  },
  /**
   * Lookup174: bifrost_farming::pallet::Event<T>
   **/
  BifrostFarmingEvent: {
    _enum: {
      FarmingPoolCreated: {
        pid: 'u32',
      },
      FarmingPoolReset: {
        pid: 'u32',
      },
      FarmingPoolClosed: {
        pid: 'u32',
      },
      FarmingPoolKilled: {
        pid: 'u32',
      },
      FarmingPoolEdited: {
        pid: 'u32',
      },
      Charged: {
        who: 'AccountId32',
        pid: 'u32',
        rewards: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>',
      },
      Deposited: {
        who: 'AccountId32',
        pid: 'u32',
        addValue: 'u128',
        gaugeInfo: 'Option<(u128,u32)>',
      },
      Withdrawn: {
        who: 'AccountId32',
        pid: 'u32',
        removeValue: 'Option<u128>',
      },
      Claimed: {
        who: 'AccountId32',
        pid: 'u32',
      },
      WithdrawClaimed: {
        who: 'AccountId32',
        pid: 'u32',
      },
      GaugeWithdrawn: {
        who: 'AccountId32',
        gid: 'u32',
      },
      AllForceGaugeClaimed: {
        gid: 'u32',
      },
      PartiallyForceGaugeClaimed: {
        gid: 'u32',
      },
      AllRetired: {
        pid: 'u32',
      },
      PartiallyRetired: {
        pid: 'u32',
      },
      RetireLimitSet: {
        limit: 'u32',
      },
      RoundEnd: {
        totalVotes: 'u128',
        startRound: 'u32',
        endRound: 'u32',
      },
      RoundStartError: {
        info: 'SpRuntimeDispatchError',
      },
      RoundStart: {
        roundLength: 'u32',
      },
      Voted: {
        who: 'AccountId32',
        voteList: 'Vec<(u32,Percent)>',
      },
      BoostCharged: {
        who: 'AccountId32',
        rewards: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup182: orml_asset_registry::module::Event<T>
   **/
  OrmlAssetRegistryModuleEvent: {
    _enum: {
      RegisteredAsset: {
        assetId: 'SpacewalkPrimitivesCurrencyId',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
      },
      UpdatedAsset: {
        assetId: 'SpacewalkPrimitivesCurrencyId',
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata'
      }
    }
  },
  /**
   * Lookup183: orml_traits::asset_registry::AssetMetadata<Balance, runtime_common::asset_registry::CustomMetadata>
   **/
  OrmlTraitsAssetRegistryAssetMetadata: {
    decimals: 'u32',
    name: 'Bytes',
    symbol: 'Bytes',
    existentialDeposit: 'u128',
    location: 'Option<XcmVersionedMultiLocation>',
    additional: 'RuntimeCommonAssetRegistryCustomMetadata'
  },
  /**
   * Lookup184: runtime_common::asset_registry::CustomMetadata
   **/
  RuntimeCommonAssetRegistryCustomMetadata: {
    diaKeys: 'RuntimeCommonAssetRegistryDiaKeys',
    feePerSecond: 'u128'
  },
  /**
   * Lookup185: runtime_common::asset_registry::DiaKeys<runtime_common::asset_registry::StringLimit>
   **/
  RuntimeCommonAssetRegistryDiaKeys: {
    blockchain: 'Bytes',
    symbol: 'Bytes'
  },
  /**
   * Lookup186: runtime_common::asset_registry::StringLimit
   **/
  RuntimeCommonAssetRegistryStringLimit: 'Null',
  /**
   * Lookup189: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup192: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup194: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup197: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup198: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup199: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup201: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup202: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup203: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup204: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    stateVersion: 'u8'
  },
  /**
   * Lookup208: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup209: polkadot_primitives::v4::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV4PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup212: polkadot_primitives::v4::UpgradeRestriction
   **/
  PolkadotPrimitivesV4UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup213: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup215: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: '(u32,u32)',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV4AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV4AbridgedHrmpChannel)>'
  },
  /**
   * Lookup218: polkadot_primitives::v4::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV4AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup220: polkadot_primitives::v4::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV4AbridgedHostConfiguration: {
    maxCodeSize: 'u32',
    maxHeadDataSize: 'u32',
    maxUpwardQueueCount: 'u32',
    maxUpwardQueueSize: 'u32',
    maxUpwardMessageSize: 'u32',
    maxUpwardMessageNumPerCandidate: 'u32',
    hrmpMaxMessageNumPerCandidate: 'u32',
    validationUpgradeCooldown: 'u32',
    validationUpgradeDelay: 'u32'
  },
  /**
   * Lookup226: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup227: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
   **/
  CumulusPalletParachainSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup228: cumulus_pallet_parachain_system::pallet::Call<T>
   **/
  CumulusPalletParachainSystemCall: {
    _enum: {
      set_validation_data: {
        data: 'CumulusPrimitivesParachainInherentParachainInherentData',
      },
      sudo_send_upward_message: {
        message: 'Bytes',
      },
      authorize_upgrade: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup229: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV4PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup231: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup234: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup237: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup238: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup240: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup241: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup244: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup248: foucoco_runtime::RuntimeHoldReason
   **/
  FoucocoRuntimeRuntimeHoldReason: 'Null',
  /**
   * Lookup251: pallet_balances::types::IdAmount<Id, Balance>
   **/
  PalletBalancesIdAmount: {
    id: 'Null',
    amount: 'u128'
  },
  /**
   * Lookup253: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance_deprecated: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        oldReserved: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup257: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes']
  },
  /**
   * Lookup258: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup259: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup261: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup262: frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup264: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup266: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup268: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup270: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup271: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup273: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      propose_spend: {
        value: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      reject_proposal: {
        proposalId: 'Compact<u32>',
      },
      approve_proposal: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup274: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup275: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup276: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<RuntimeCommonProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'RuntimeCommonProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'RuntimeCommonProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<RuntimeCommonProxyType>',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup278: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'FoucocoRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup279: foucoco_runtime::SessionKeys
   **/
  FoucocoRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup280: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup281: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup282: parachain_staking::pallet::Call<T>
   **/
  ParachainStakingCall: {
    _enum: {
      force_new_round: 'Null',
      set_inflation: {
        collatorMaxRatePercentage: 'Perquintill',
        collatorAnnualRewardRatePercentage: 'Perquintill',
        delegatorMaxRatePercentage: 'Perquintill',
        delegatorAnnualRewardRatePercentage: 'Perquintill',
      },
      set_max_selected_candidates: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_blocks_per_round: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      set_max_candidate_stake: {
        _alias: {
          new_: 'new',
        },
        new_: 'u128',
      },
      force_remove_candidate: {
        collator: 'MultiAddress',
      },
      join_candidates: {
        stake: 'u128',
      },
      init_leave_candidates: 'Null',
      execute_leave_candidates: {
        collator: 'MultiAddress',
      },
      cancel_leave_candidates: 'Null',
      candidate_stake_more: {
        more: 'u128',
      },
      candidate_stake_less: {
        less: 'u128',
      },
      join_delegators: {
        collator: 'MultiAddress',
        amount: 'u128',
      },
      leave_delegators: 'Null',
      delegator_stake_more: {
        candidate: 'MultiAddress',
        more: 'u128',
      },
      delegator_stake_less: {
        candidate: 'MultiAddress',
        less: 'u128',
      },
      unlock_unstaked: {
        target: 'MultiAddress',
      },
      claim_rewards: 'Null',
      increment_collator_rewards: 'Null',
      increment_delegator_rewards: 'Null',
      execute_scheduled_reward_change: 'Null'
    }
  },
  /**
   * Lookup283: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight',
      },
      suspend_xcm_execution: 'Null',
      resume_xcm_execution: 'Null',
      update_suspend_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_drop_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_resume_threshold: {
        _alias: {
          new_: 'new',
        },
        new_: 'u32',
      },
      update_threshold_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup284: pallet_xcm::pallet::Call<T>
   **/
  PalletXcmCall: {
    _enum: {
      send: {
        dest: 'XcmVersionedMultiLocation',
        message: 'XcmVersionedXcm',
      },
      teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
      },
      execute: {
        message: 'XcmVersionedXcm',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      force_xcm_version: {
        location: 'XcmV3MultiLocation',
        xcmVersion: 'u32',
      },
      force_default_xcm_version: {
        maybeXcmVersion: 'Option<u32>',
      },
      force_subscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      force_unsubscribe_version_notify: {
        location: 'XcmVersionedMultiLocation',
      },
      limited_reserve_transfer_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV3WeightLimit',
      },
      force_suspension: {
        suspended: 'bool'
      }
    }
  },
  /**
   * Lookup285: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      V2: 'XcmV2Xcm',
      V3: 'XcmV3Xcm'
    }
  },
  /**
   * Lookup286: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup288: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV2MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        beneficiary: 'XcmV2MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV2OriginKind',
        requireWeightAtMost: 'Compact<u64>',
        call: 'XcmDoubleEncoded',
      },
      HrmpNewChannelOpenRequest: {
        sender: 'Compact<u32>',
        maxMessageSize: 'Compact<u32>',
        maxCapacity: 'Compact<u32>',
      },
      HrmpChannelAccepted: {
        recipient: 'Compact<u32>',
      },
      HrmpChannelClosing: {
        initiator: 'Compact<u32>',
        sender: 'Compact<u32>',
        recipient: 'Compact<u32>',
      },
      ClearOrigin: 'Null',
      DescendOrigin: 'XcmV2MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV2MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV2MultiassetMultiAssetFilter',
        receive: 'XcmV2MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        reserve: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV2MultiassetMultiAssetFilter',
        dest: 'XcmV2MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV2MultiLocation',
        assets: 'XcmV2MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV2MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV2MultiassetMultiAssets',
        ticket: 'XcmV2MultiLocation',
      },
      Trap: 'Compact<u64>',
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup289: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV2MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup292: xcm::v2::traits::Error
   **/
  XcmV2TraitsError: {
    _enum: {
      Overflow: 'Null',
      Unimplemented: 'Null',
      UntrustedReserveLocation: 'Null',
      UntrustedTeleportLocation: 'Null',
      MultiLocationFull: 'Null',
      MultiLocationNotInvertible: 'Null',
      BadOrigin: 'Null',
      InvalidLocation: 'Null',
      AssetNotFound: 'Null',
      FailedToTransactAsset: 'Null',
      NotWithdrawable: 'Null',
      LocationCannotHold: 'Null',
      ExceedsMaxMessageSize: 'Null',
      DestinationUnsupported: 'Null',
      Transport: 'Null',
      Unroutable: 'Null',
      UnknownClaim: 'Null',
      FailedToDecode: 'Null',
      MaxWeightInvalid: 'Null',
      NotHoldingFees: 'Null',
      TooExpensive: 'Null',
      Trap: 'u64',
      UnhandledXcmVersion: 'Null',
      WeightLimitReached: 'u64',
      Barrier: 'Null',
      WeightNotComputable: 'Null'
    }
  },
  /**
   * Lookup293: xcm::v2::multiasset::MultiAssetFilter
   **/
  XcmV2MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV2MultiassetMultiAssets',
      Wild: 'XcmV2MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup294: xcm::v2::multiasset::WildMultiAsset
   **/
  XcmV2MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV2MultiassetAssetId',
        fun: 'XcmV2MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup295: xcm::v2::multiasset::WildFungibility
   **/
  XcmV2MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup296: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup305: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup306: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32'
      }
    }
  },
  /**
   * Lookup307: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup308: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'FoucocoRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup310: foucoco_runtime::OriginCaller
   **/
  FoucocoRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Void: 'SpCoreVoid',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      PolkadotXcm: 'PalletXcmOrigin',
      CumulusXcm: 'CumulusPalletXcmOrigin'
    }
  },
  /**
   * Lookup311: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup312: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup314: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV3MultiLocation',
      Response: 'XcmV3MultiLocation'
    }
  },
  /**
   * Lookup315: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup316: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup317: orml_currencies::module::Call<T>
   **/
  OrmlCurrenciesModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      transfer_native_currency: {
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      update_balance: {
        who: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup318: orml_tokens::module::Call<T>
   **/
  OrmlTokensModuleCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        keepAlive: 'bool',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup319: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV3WeightLimit'
      }
    }
  },
  /**
   * Lookup320: xcm::VersionedMultiAsset
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      __Unused0: 'Null',
      V2: 'XcmV2MultiAsset',
      __Unused2: 'Null',
      V3: 'XcmV3MultiAsset'
    }
  },
  /**
   * Lookup321: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'PalletIdentityBitFlags',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null'
    }
  },
  /**
   * Lookup322: pallet_identity::types::IdentityInfo<FieldLimit>
   **/
  PalletIdentityIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup357: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
   **/
  PalletIdentityBitFlags: {
    _bitLength: 64,
    Display: 1,
    Legal: 2,
    Web: 4,
    Riot: 8,
    Email: 16,
    PgpFingerprint: 32,
    Image: 64,
    Twitter: 128
  },
  /**
   * Lookup358: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup359: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup360: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes'
      }
    }
  },
  /**
   * Lookup362: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Enforced', 'Relaxed']
  },
  /**
   * Lookup363: dia_oracle::pallet::Call<T>
   **/
  DiaOracleCall: {
    _enum: {
      add_currency: {
        blockchain: 'Bytes',
        symbol: 'Bytes',
      },
      remove_currency: {
        blockchain: 'Bytes',
        symbol: 'Bytes',
      },
      authorize_account: {
        accountId: 'AccountId32',
      },
      deauthorize_account: {
        accountId: 'AccountId32',
      },
      set_updated_coin_infos: {
        coinInfos: 'Vec<((Bytes,Bytes),DiaOracleDiaCoinInfo)>',
      },
      set_batching_api: {
        api: 'Bytes'
      }
    }
  },
  /**
   * Lookup364: zenlink_protocol::pallet::Call<T>
   **/
  ZenlinkProtocolCall: {
    _enum: {
      set_fee_receiver: {
        sendTo: 'Option<MultiAddress>',
      },
      set_fee_point: {
        feePoint: 'u8',
      },
      transfer: {
        assetId: 'ZenlinkProtocolPrimitivesAssetId',
        recipient: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      create_pair: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
      },
      add_liquidity: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        amount0Desired: 'Compact<u128>',
        amount1Desired: 'Compact<u128>',
        amount0Min: 'Compact<u128>',
        amount1Min: 'Compact<u128>',
        deadline: 'Compact<u32>',
      },
      remove_liquidity: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        liquidity: 'Compact<u128>',
        amount0Min: 'Compact<u128>',
        amount1Min: 'Compact<u128>',
        recipient: 'MultiAddress',
        deadline: 'Compact<u32>',
      },
      swap_exact_assets_for_assets: {
        amountIn: 'Compact<u128>',
        amountOutMin: 'Compact<u128>',
        path: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
        recipient: 'MultiAddress',
        deadline: 'Compact<u32>',
      },
      swap_assets_for_exact_assets: {
        amountOut: 'Compact<u128>',
        amountInMax: 'Compact<u128>',
        path: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
        recipient: 'MultiAddress',
        deadline: 'Compact<u32>',
      },
      bootstrap_create: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        targetSupply0: 'Compact<u128>',
        targetSupply1: 'Compact<u128>',
        capacitySupply0: 'Compact<u128>',
        capacitySupply1: 'Compact<u128>',
        end: 'Compact<u32>',
        rewards: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
        limits: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
      },
      bootstrap_contribute: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        amount0Contribute: 'Compact<u128>',
        amount1Contribute: 'Compact<u128>',
        deadline: 'Compact<u32>',
      },
      bootstrap_claim: {
        recipient: 'MultiAddress',
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        deadline: 'Compact<u32>',
      },
      bootstrap_end: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
      },
      bootstrap_update: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        targetSupply0: 'Compact<u128>',
        targetSupply1: 'Compact<u128>',
        capacitySupply0: 'Compact<u128>',
        capacitySupply1: 'Compact<u128>',
        end: 'Compact<u32>',
        rewards: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
        limits: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
      },
      bootstrap_refund: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
      },
      bootstrap_charge_reward: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        chargeRewards: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
      },
      bootstrap_withdraw_reward: {
        asset0: 'ZenlinkProtocolPrimitivesAssetId',
        asset1: 'ZenlinkProtocolPrimitivesAssetId',
        recipient: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup366: fee::pallet::Call<T>
   **/
  FeeCall: {
    _enum: {
      __Unused0: 'Null',
      set_issue_fee: {
        fee: 'u128',
      },
      set_issue_griefing_collateral: {
        griefingCollateral: 'u128',
      },
      set_redeem_fee: {
        fee: 'u128',
      },
      set_premium_redeem_fee: {
        fee: 'u128',
      },
      set_punishment_fee: {
        fee: 'u128',
      },
      set_replace_griefing_collateral: {
        griefingCollateral: 'u128'
      }
    }
  },
  /**
   * Lookup367: issue::pallet::Call<T>
   **/
  IssueCall: {
    _enum: {
      request_issue: {
        amount: 'Compact<u128>',
        vaultId: 'SpacewalkPrimitivesVaultId',
      },
      execute_issue: {
        issueId: 'H256',
        transactionEnvelopeXdrEncoded: 'Bytes',
        externalizedEnvelopesEncoded: 'Bytes',
        transactionSetEncoded: 'Bytes',
      },
      cancel_issue: {
        issueId: 'H256',
      },
      set_issue_period: {
        period: 'u32',
      },
      rate_limit_update: {
        limitVolumeAmount: 'Option<u128>',
        limitVolumeCurrencyId: 'SpacewalkPrimitivesCurrencyId',
        intervalLength: 'u32',
      },
      minimum_transfer_amount_update: {
        newMinimumAmount: 'u128'
      }
    }
  },
  /**
   * Lookup368: nomination::pallet::Call<T>
   **/
  NominationCall: {
    _enum: {
      set_nomination_enabled: {
        enabled: 'bool',
      },
      opt_in_to_nomination: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
      },
      opt_out_of_nomination: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
      },
      deposit_collateral: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
      },
      withdraw_collateral: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        amount: 'u128',
        index: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup369: oracle::pallet::Call<T>
   **/
  OracleCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      update_oracle_keys: {
        oracleKeys: 'Vec<SpacewalkPrimitivesOracleKey>',
      },
      set_max_delay: {
        newMaxDelay: 'u64'
      }
    }
  },
  /**
   * Lookup370: redeem::pallet::Call<T>
   **/
  RedeemCall: {
    _enum: {
      request_redeem: {
        amountWrapped: 'Compact<u128>',
        stellarAddress: '[u8;32]',
        vaultId: 'SpacewalkPrimitivesVaultId',
      },
      liquidation_redeem: {
        currencies: 'SpacewalkPrimitivesVaultCurrencyPair',
        amountWrapped: 'Compact<u128>',
      },
      execute_redeem: {
        redeemId: 'H256',
        transactionEnvelopeXdrEncoded: 'Bytes',
        externalizedEnvelopesEncoded: 'Bytes',
        transactionSetEncoded: 'Bytes',
      },
      cancel_redeem: {
        redeemId: 'H256',
        reimburse: 'bool',
      },
      set_redeem_period: {
        period: 'u32',
      },
      mint_tokens_for_reimbursed_redeem: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        redeemId: 'H256',
      },
      self_redeem: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        amountWrapped: 'u128',
      },
      rate_limit_update: {
        limitVolumeAmount: 'Option<u128>',
        limitVolumeCurrencyId: 'SpacewalkPrimitivesCurrencyId',
        intervalLength: 'u32',
      },
      minimum_transfer_amount_update: {
        newMinimumAmount: 'u128'
      }
    }
  },
  /**
   * Lookup371: replace::pallet::Call<T>
   **/
  ReplaceCall: {
    _enum: {
      request_replace: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        amount: 'Compact<u128>',
      },
      withdraw_replace: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        amount: 'Compact<u128>',
      },
      accept_replace: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        oldVault: 'SpacewalkPrimitivesVaultId',
        amount: 'Compact<u128>',
        collateral: 'Compact<u128>',
        stellarAddress: '[u8;32]',
      },
      execute_replace: {
        replaceId: 'H256',
        transactionEnvelopeXdrEncoded: 'Bytes',
        externalizedEnvelopesXdrEncoded: 'Bytes',
        transactionSetXdrEncoded: 'Bytes',
      },
      cancel_replace: {
        replaceId: 'H256',
      },
      set_replace_period: {
        period: 'u32',
      },
      minimum_transfer_amount_update: {
        newMinimumAmount: 'u128'
      }
    }
  },
  /**
   * Lookup372: security::pallet::Call<T>
   **/
  SecurityCall: {
    _enum: {
      set_parachain_status: {
        statusCode: 'SecurityStatusCode',
      },
      insert_parachain_error: {
        errorCode: 'SecurityErrorCode',
      },
      remove_parachain_error: {
        errorCode: 'SecurityErrorCode'
      }
    }
  },
  /**
   * Lookup373: stellar_relay::pallet::Call<T>
   **/
  StellarRelayCall: {
    _enum: {
      update_tier_1_validator_set: {
        validators: 'Vec<StellarRelayValidator>',
        organizations: 'Vec<StellarRelayOrganization>',
        enactmentBlockHeight: 'u32'
      }
    }
  },
  /**
   * Lookup375: stellar_relay::traits::Validator<OrganizationId>
   **/
  StellarRelayValidator: {
    name: 'Bytes',
    publicKey: 'Bytes',
    organizationId: 'u128'
  },
  /**
   * Lookup378: stellar_relay::traits::Organization<OrganizationId>
   **/
  StellarRelayOrganization: {
    id: 'u128',
    name: 'Bytes'
  },
  /**
   * Lookup379: vault_registry::pallet::Call<T>
   **/
  VaultRegistryCall: {
    _enum: {
      register_vault: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        collateral: 'Compact<u128>',
      },
      deposit_collateral: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        amount: 'Compact<u128>',
      },
      withdraw_collateral: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        amount: 'Compact<u128>',
      },
      register_public_key: {
        publicKey: '[u8;32]',
      },
      accept_new_issues: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        acceptNewIssues: 'bool',
      },
      set_custom_secure_threshold: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        customThreshold: 'Option<u128>',
      },
      report_undercollateralized_vault: {
        vaultId: 'SpacewalkPrimitivesVaultId',
      },
      set_minimum_collateral: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        minimum: 'u128',
      },
      set_system_collateral_ceiling: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        ceiling: 'u128',
      },
      set_secure_collateral_threshold: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      set_premium_redeem_threshold: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      set_liquidation_collateral_threshold: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
        threshold: 'u128',
      },
      recover_vault_id: {
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair',
      },
      set_punishment_delay: {
        punishmentDelay: 'u32'
      }
    }
  },
  /**
   * Lookup381: pooled_rewards::pallet::Call<T, I>
   **/
  PooledRewardsCall: 'Null',
  /**
   * Lookup382: clients_info::pallet::Call<T>
   **/
  ClientsInfoCall: {
    _enum: {
      set_current_client_release: {
        clientName: 'Bytes',
        release: 'ClientsInfoClientRelease',
      },
      set_pending_client_release: {
        clientName: 'Bytes',
        release: 'ClientsInfoClientRelease',
      },
      authorize_account: {
        accountId: 'AccountId32',
      },
      deauthorize_account: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup383: reward_distribution::pallet::Call<T>
   **/
  RewardDistributionCall: {
    _enum: {
      set_reward_per_block: {
        newRewardPerBlock: 'u128',
      },
      collect_reward: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        rewardCurrencyId: 'SpacewalkPrimitivesCurrencyId',
        index: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup384: orml_currencies_allowance_extension::pallet::Call<T>
   **/
  OrmlCurrenciesAllowanceExtensionCall: {
    _enum: {
      add_allowed_currencies: {
        currencies: 'Vec<SpacewalkPrimitivesCurrencyId>',
      },
      remove_allowed_currencies: {
        currencies: 'Vec<SpacewalkPrimitivesCurrencyId>',
      },
      approve: {
        id: 'SpacewalkPrimitivesCurrencyId',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      transfer_from: {
        id: 'SpacewalkPrimitivesCurrencyId',
        owner: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup385: orml_tokens_management_extension::pallet::Call<T>
   **/
  OrmlTokensManagementExtensionCall: {
    _enum: {
      create: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
      },
      mint: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        to: 'AccountId32',
        amount: 'u128',
      },
      burn: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        from: 'AccountId32',
        amount: 'u128',
      },
      transfer_ownership: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        newOwner: 'AccountId32',
      },
      force_transfer_ownership: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        newOwner: 'AccountId32',
      },
      set_managers: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        newAdmin: 'AccountId32',
        newIssuer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup386: treasury_buyout_extension::pallet::Call<T>
   **/
  TreasuryBuyoutExtensionCall: {
    _enum: {
      buyout: {
        asset: 'SpacewalkPrimitivesCurrencyId',
        amount: 'TreasuryBuyoutExtensionAmount',
      },
      update_buyout_limit: {
        limit: 'Option<u128>',
      },
      update_allowed_assets: {
        assets: 'Vec<SpacewalkPrimitivesCurrencyId>'
      }
    }
  },
  /**
   * Lookup387: treasury_buyout_extension::types::Amount<Balance>
   **/
  TreasuryBuyoutExtensionAmount: {
    _enum: {
      Buyout: 'u128',
      Exchange: 'u128'
    }
  },
  /**
   * Lookup388: bifrost_farming::pallet::Call<T>
   **/
  BifrostFarmingCall: {
    _enum: {
      create_farming_pool: {
        tokensProportion: 'Vec<(SpacewalkPrimitivesCurrencyId,Perbill)>',
        basicRewards: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>',
        gaugeInit: 'Option<(SpacewalkPrimitivesCurrencyId,u32,Vec<(SpacewalkPrimitivesCurrencyId,u128)>)>',
        minDepositToStart: 'u128',
        afterBlockToStart: 'Compact<u32>',
        withdrawLimitTime: 'Compact<u32>',
        claimLimitTime: 'Compact<u32>',
        withdrawLimitCount: 'u8',
      },
      charge: {
        pid: 'u32',
        rewards: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>',
      },
      deposit: {
        pid: 'u32',
        addValue: 'u128',
        gaugeInfo: 'Option<(u128,u32)>',
      },
      withdraw: {
        pid: 'u32',
        removeValue: 'Option<u128>',
      },
      claim: {
        pid: 'u32',
      },
      withdraw_claim: {
        pid: 'u32',
      },
      force_retire_pool: {
        pid: 'u32',
      },
      set_retire_limit: {
        limit: 'u32',
      },
      close_pool: {
        pid: 'u32',
      },
      reset_pool: {
        pid: 'u32',
        basicRewards: 'Option<Vec<(SpacewalkPrimitivesCurrencyId,u128)>>',
        minDepositToStart: 'Option<u128>',
        afterBlockToStart: 'Option<u32>',
        withdrawLimitTime: 'Option<u32>',
        claimLimitTime: 'Option<u32>',
        withdrawLimitCount: 'Option<u8>',
        gaugeInit: 'Option<(SpacewalkPrimitivesCurrencyId,u32,Vec<(SpacewalkPrimitivesCurrencyId,u128)>)>',
      },
      kill_pool: {
        pid: 'u32',
      },
      edit_pool: {
        pid: 'u32',
        basicRewards: 'Option<Vec<(SpacewalkPrimitivesCurrencyId,u128)>>',
        withdrawLimitTime: 'Option<u32>',
        claimLimitTime: 'Option<u32>',
        gaugeBasicRewards: 'Option<Vec<(SpacewalkPrimitivesCurrencyId,u128)>>',
        withdrawLimitCount: 'Option<u8>',
      },
      gauge_withdraw: {
        gid: 'u32',
      },
      force_gauge_claim: {
        gid: 'u32',
      },
      add_boost_pool_whitelist: {
        whitelist: 'Vec<u32>',
      },
      set_next_round_whitelist: {
        whitelist: 'Vec<u32>',
      },
      vote: {
        voteList: 'Vec<(u32,Percent)>',
      },
      start_boost_round: {
        roundLength: 'u32',
      },
      end_boost_round: 'Null',
      charge_boost: {
        rewards: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>'
      }
    }
  },
  /**
   * Lookup397: orml_asset_registry::module::Call<T>
   **/
  OrmlAssetRegistryModuleCall: {
    _enum: {
      register_asset: {
        metadata: 'OrmlTraitsAssetRegistryAssetMetadata',
        assetId: 'Option<SpacewalkPrimitivesCurrencyId>',
      },
      update_asset: {
        assetId: 'SpacewalkPrimitivesCurrencyId',
        decimals: 'Option<u32>',
        name: 'Option<Bytes>',
        symbol: 'Option<Bytes>',
        existentialDeposit: 'Option<u128>',
        location: 'Option<Option<XcmVersionedMultiLocation>>',
        additional: 'Option<RuntimeCommonAssetRegistryCustomMetadata>'
      }
    }
  },
  /**
   * Lookup402: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup408: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup409: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup410: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup411: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup415: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup416: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup419: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup421: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup422: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup427: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>, BlockNumber, foucoco_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'FoucocoRuntimeOriginCaller'
  },
  /**
   * Lookup429: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup430: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup435: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup437: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup439: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup440: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup443: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup444: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup445: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup446: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup448: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup449: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup450: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup451: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup454: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, runtime_common::proxy_type::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'RuntimeCommonProxyType',
    delay: 'u32'
  },
  /**
   * Lookup458: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup460: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup467: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup468: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup469: parachain_staking::types::RoundInfo<BlockNumber>
   **/
  ParachainStakingRoundInfo: {
    current: 'u32',
    first: 'u32',
    length: 'u32'
  },
  /**
   * Lookup470: parachain_staking::types::DelegationCounter
   **/
  ParachainStakingDelegationCounter: {
    round: 'u32',
    counter: 'u32'
  },
  /**
   * Lookup471: parachain_staking::types::Stake<Option<sp_core::crypto::AccountId32>, Balance>
   **/
  ParachainStakingStakeOption: {
    owner: 'Option<AccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup472: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
   **/
  ParachainStakingCandidate: {
    id: 'AccountId32',
    stake: 'u128',
    delegators: 'ParachainStakingSetOrderedSet',
    total: 'u128',
    status: 'ParachainStakingCandidateStatus'
  },
  /**
   * Lookup473: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
   **/
  ParachainStakingSetOrderedSet: 'Vec<ParachainStakingStakeAccountId32>',
  /**
   * Lookup474: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
   **/
  ParachainStakingStakeAccountId32: {
    owner: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup477: parachain_staking::types::CandidateStatus
   **/
  ParachainStakingCandidateStatus: {
    _enum: {
      Active: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup478: parachain_staking::types::TotalStake<Balance>
   **/
  ParachainStakingTotalStake: {
    collators: 'u128',
    delegators: 'u128'
  },
  /**
   * Lookup481: parachain_staking::inflation::InflationInfo
   **/
  ParachainStakingInflationInflationInfo: {
    collator: 'ParachainStakingInflationStakingInfo',
    delegator: 'ParachainStakingInflationStakingInfo'
  },
  /**
   * Lookup482: parachain_staking::inflation::StakingInfo
   **/
  ParachainStakingInflationStakingInfo: {
    maxRate: 'Perquintill',
    rewardRate: 'ParachainStakingInflationRewardRate'
  },
  /**
   * Lookup483: parachain_staking::inflation::RewardRate
   **/
  ParachainStakingInflationRewardRate: {
    annual: 'Perquintill',
    perBlock: 'Perquintill'
  },
  /**
   * Lookup488: parachain_staking::pallet::Error<T>
   **/
  ParachainStakingError: {
    _enum: ['DelegatorNotFound', 'CandidateNotFound', 'DelegatorExists', 'CandidateExists', 'ValStakeZero', 'ValStakeBelowMin', 'ValStakeAboveMax', 'DelegationBelowMin', 'AlreadyLeaving', 'NotLeaving', 'CannotLeaveYet', 'CannotJoinBeforeUnlocking', 'AlreadyDelegating', 'NotYetDelegating', 'DelegationsPerRoundExceeded', 'TooManyDelegators', 'TooFewCollatorCandidates', 'CannotStakeIfLeaving', 'CannotDelegateIfLeaving', 'MaxCollatorsPerDelegatorExceeded', 'AlreadyDelegatedCollator', 'DelegationNotFound', 'Underflow', 'CannotSetAboveMax', 'CannotSetBelowMin', 'InvalidSchedule', 'NoMoreUnstaking', 'TooEarly', 'StakeNotFound', 'UnstakingIsEmpty', 'RewardsNotFound']
  },
  /**
   * Lookup490: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup491: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup494: polkadot_parachain::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup497: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup498: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup500: cumulus_pallet_xcmp_queue::QueueConfigData
   **/
  CumulusPalletXcmpQueueQueueConfigData: {
    suspendThreshold: 'u32',
    dropThreshold: 'u32',
    resumeThreshold: 'u32',
    thresholdWeight: 'SpWeightsWeightV2Weight',
    weightRestrictDecay: 'SpWeightsWeightV2Weight',
    xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup502: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup503: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed', 'InvalidAsset', 'LowBalance', 'TooManyLocks', 'AccountNotSovereign', 'FeesNotMet', 'LockNotFound', 'InUse']
  },
  /**
   * Lookup504: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup505: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup506: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup509: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup512: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup513: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup514: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup515: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup518: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup520: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup522: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup524: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup525: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup526: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup534: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup536: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup538: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes',
    determinism: 'PalletContractsWasmDeterminism'
  },
  /**
   * Lookup540: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup541: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    depositAccount: 'AccountId32',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup543: pallet_contracts::storage::DeletionQueueManager<T>
   **/
  PalletContractsStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup544: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup545: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    globals: 'u32',
    locals: 'u32',
    parameters: 'u32',
    memoryPages: 'u32',
    tableSize: 'u32',
    brTableSize: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32',
    runtimeMemory: 'u32'
  },
  /**
   * Lookup546: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    _alias: {
      r_if: 'r#if'
    },
    version: 'u32',
    fallback: 'u32',
    i64const: 'u32',
    i64load: 'u32',
    i64store: 'u32',
    select: 'u32',
    r_if: 'u32',
    br: 'u32',
    brIf: 'u32',
    brTable: 'u32',
    brTablePerEntry: 'u32',
    call: 'u32',
    callIndirect: 'u32',
    callPerLocal: 'u32',
    localGet: 'u32',
    localSet: 'u32',
    localTee: 'u32',
    globalGet: 'u32',
    globalSet: 'u32',
    memoryCurrent: 'u32',
    memoryGrow: 'u32',
    i64clz: 'u32',
    i64ctz: 'u32',
    i64popcnt: 'u32',
    i64eqz: 'u32',
    i64extendsi32: 'u32',
    i64extendui32: 'u32',
    i32wrapi64: 'u32',
    i64eq: 'u32',
    i64ne: 'u32',
    i64lts: 'u32',
    i64ltu: 'u32',
    i64gts: 'u32',
    i64gtu: 'u32',
    i64les: 'u32',
    i64leu: 'u32',
    i64ges: 'u32',
    i64geu: 'u32',
    i64add: 'u32',
    i64sub: 'u32',
    i64mul: 'u32',
    i64divs: 'u32',
    i64divu: 'u32',
    i64rems: 'u32',
    i64remu: 'u32',
    i64and: 'u32',
    i64or: 'u32',
    i64xor: 'u32',
    i64shl: 'u32',
    i64shrs: 'u32',
    i64shru: 'u32',
    i64rotl: 'u32',
    i64rotr: 'u32'
  },
  /**
   * Lookup547: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'SpWeightsWeightV2Weight',
    isContract: 'SpWeightsWeightV2Weight',
    codeHash: 'SpWeightsWeightV2Weight',
    ownCodeHash: 'SpWeightsWeightV2Weight',
    callerIsOrigin: 'SpWeightsWeightV2Weight',
    address: 'SpWeightsWeightV2Weight',
    gasLeft: 'SpWeightsWeightV2Weight',
    balance: 'SpWeightsWeightV2Weight',
    valueTransferred: 'SpWeightsWeightV2Weight',
    minimumBalance: 'SpWeightsWeightV2Weight',
    blockNumber: 'SpWeightsWeightV2Weight',
    now: 'SpWeightsWeightV2Weight',
    weightToFee: 'SpWeightsWeightV2Weight',
    gas: 'SpWeightsWeightV2Weight',
    input: 'SpWeightsWeightV2Weight',
    inputPerByte: 'SpWeightsWeightV2Weight',
    r_return: 'SpWeightsWeightV2Weight',
    returnPerByte: 'SpWeightsWeightV2Weight',
    terminate: 'SpWeightsWeightV2Weight',
    random: 'SpWeightsWeightV2Weight',
    depositEvent: 'SpWeightsWeightV2Weight',
    depositEventPerTopic: 'SpWeightsWeightV2Weight',
    depositEventPerByte: 'SpWeightsWeightV2Weight',
    debugMessage: 'SpWeightsWeightV2Weight',
    debugMessagePerByte: 'SpWeightsWeightV2Weight',
    setStorage: 'SpWeightsWeightV2Weight',
    setStoragePerNewByte: 'SpWeightsWeightV2Weight',
    setStoragePerOldByte: 'SpWeightsWeightV2Weight',
    setCodeHash: 'SpWeightsWeightV2Weight',
    clearStorage: 'SpWeightsWeightV2Weight',
    clearStoragePerByte: 'SpWeightsWeightV2Weight',
    containsStorage: 'SpWeightsWeightV2Weight',
    containsStoragePerByte: 'SpWeightsWeightV2Weight',
    getStorage: 'SpWeightsWeightV2Weight',
    getStoragePerByte: 'SpWeightsWeightV2Weight',
    takeStorage: 'SpWeightsWeightV2Weight',
    takeStoragePerByte: 'SpWeightsWeightV2Weight',
    transfer: 'SpWeightsWeightV2Weight',
    call: 'SpWeightsWeightV2Weight',
    delegateCall: 'SpWeightsWeightV2Weight',
    callTransferSurcharge: 'SpWeightsWeightV2Weight',
    callPerClonedByte: 'SpWeightsWeightV2Weight',
    instantiate: 'SpWeightsWeightV2Weight',
    instantiateTransferSurcharge: 'SpWeightsWeightV2Weight',
    instantiatePerInputByte: 'SpWeightsWeightV2Weight',
    instantiatePerSaltByte: 'SpWeightsWeightV2Weight',
    hashSha2256: 'SpWeightsWeightV2Weight',
    hashSha2256PerByte: 'SpWeightsWeightV2Weight',
    hashKeccak256: 'SpWeightsWeightV2Weight',
    hashKeccak256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2256: 'SpWeightsWeightV2Weight',
    hashBlake2256PerByte: 'SpWeightsWeightV2Weight',
    hashBlake2128: 'SpWeightsWeightV2Weight',
    hashBlake2128PerByte: 'SpWeightsWeightV2Weight',
    ecdsaRecover: 'SpWeightsWeightV2Weight',
    ecdsaToEthAddress: 'SpWeightsWeightV2Weight',
    sr25519Verify: 'SpWeightsWeightV2Weight',
    sr25519VerifyPerByte: 'SpWeightsWeightV2Weight',
    reentranceCount: 'SpWeightsWeightV2Weight',
    accountReentranceCount: 'SpWeightsWeightV2Weight',
    instantiationNonce: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup548: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic']
  },
  /**
   * Lookup550: dia_oracle::dia::AssetId
   **/
  DiaOracleDiaAssetId: {
    blockchain: 'Bytes',
    symbol: 'Bytes'
  },
  /**
   * Lookup551: dia_oracle::pallet::Error<T>
   **/
  DiaOracleError: {
    _enum: ['NoCoinInfoAvailable', 'ThisAccountIdIsNotAuthorized', 'NoBatchingApiEndPoint', 'DeserializeStrError', 'DeserializeError', 'HttpRequestSendFailed', 'HttpRequestFailed', 'FailedSignedTransaction', 'UserUnableToDeauthorizeThemself', 'BadOrigin']
  },
  /**
   * Lookup558: zenlink_protocol::primitives::PairStatus<Balance, BlockNumber, sp_core::crypto::AccountId32>
   **/
  ZenlinkProtocolPrimitivesPairStatus: {
    _enum: {
      Trading: 'ZenlinkProtocolPrimitivesPairMetadata',
      Bootstrap: 'ZenlinkProtocolPrimitivesBootstrapParameter',
      Disable: 'Null'
    }
  },
  /**
   * Lookup559: zenlink_protocol::primitives::PairMetadata<Balance, sp_core::crypto::AccountId32>
   **/
  ZenlinkProtocolPrimitivesPairMetadata: {
    pairAccount: 'AccountId32',
    totalSupply: 'u128'
  },
  /**
   * Lookup560: zenlink_protocol::primitives::BootstrapParameter<Balance, BlockNumber, sp_core::crypto::AccountId32>
   **/
  ZenlinkProtocolPrimitivesBootstrapParameter: {
    targetSupply: '(u128,u128)',
    capacitySupply: '(u128,u128)',
    accumulatedSupply: '(u128,u128)',
    endBlockNumber: 'u32',
    pairAccount: 'AccountId32'
  },
  /**
   * Lookup564: zenlink_protocol::pallet::Error<T>
   **/
  ZenlinkProtocolError: {
    _enum: ['RequireProtocolAdmin', 'RequireProtocolAdminCandidate', 'InvalidFeePoint', 'UnsupportedAssetType', 'InsufficientAssetBalance', 'NativeBalanceTooLow', 'DeniedCreatePair', 'PairAlreadyExists', 'PairNotExists', 'AssetNotExists', 'InsufficientLiquidity', 'InsufficientPairReserve', 'InsufficientTargetAmount', 'ExcessiveSoldAmount', 'InvalidPath', 'IncorrectAssetAmountRange', 'Overflow', 'Deadline', 'AccountIdBadLocation', 'ExecutionFailed', 'DeniedTransferToSelf', 'TargetChainNotRegistered', 'InvariantCheckFailed', 'PairCreateForbidden', 'NotInBootstrap', 'InvalidContributionAmount', 'UnqualifiedBootstrap', 'ZeroContribute', 'DenyRefund', 'DisableBootstrap', 'NotQualifiedAccount', 'NoRewardTokens', 'ChargeRewardParamsError', 'ExistRewardsInBootstrap']
  },
  /**
   * Lookup565: currency::pallet::Error<T>
   **/
  CurrencyError: {
    _enum: ['AssetConversionError', 'BalanceConversionError', 'CompatibleRoundingFailed', 'IncompatibleAmount', 'InvalidCurrency', 'TryIntoIntError']
  },
  /**
   * Lookup566: fee::pallet::Error<T>
   **/
  FeeError: {
    _enum: ['TryIntoIntError', 'AboveMaxExpectedValue', 'Overflow']
  },
  /**
   * Lookup567: spacewalk_primitives::issue::IssueRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesIssueIssueRequest: {
    vault: 'SpacewalkPrimitivesVaultId',
    opentime: 'u32',
    period: 'u32',
    griefingCollateral: 'u128',
    amount: 'u128',
    asset: 'SpacewalkPrimitivesCurrencyId',
    fee: 'u128',
    requester: 'AccountId32',
    stellarAddress: '[u8;32]',
    status: 'SpacewalkPrimitivesIssueIssueRequestStatus'
  },
  /**
   * Lookup568: spacewalk_primitives::issue::IssueRequestStatus
   **/
  SpacewalkPrimitivesIssueIssueRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup569: issue::pallet::Error<T>
   **/
  IssueError: {
    _enum: ['IssueIdNotFound', 'TimeNotExpired', 'IssueCompleted', 'IssueCancelled', 'VaultNotAcceptingNewIssues', 'InvalidExecutor', 'AmountBelowMinimumTransferAmount', 'ExceedLimitVolumeForIssueRequest']
  },
  /**
   * Lookup570: nomination::pallet::Error<T>
   **/
  NominationError: {
    _enum: ['VaultAlreadyOptedInToNomination', 'VaultNotOptedInToNomination', 'VaultNotFound', 'CannotWithdrawCollateral', 'VaultNominationDisabled', 'DepositViolatesMaxNominationRatio', 'CollateralizationTooLow']
  },
  /**
   * Lookup571: oracle::types::Version
   **/
  OracleVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup572: oracle::pallet::Error<T>
   **/
  OracleError: {
    _enum: ['InvalidOracleSource', 'MissingExchangeRate', 'TryIntoIntError']
  },
  /**
   * Lookup573: spacewalk_primitives::redeem::RedeemRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesRedeemRedeemRequest: {
    vault: 'SpacewalkPrimitivesVaultId',
    opentime: 'u32',
    period: 'u32',
    fee: 'u128',
    transferFee: 'u128',
    amount: 'u128',
    asset: 'SpacewalkPrimitivesCurrencyId',
    premium: 'u128',
    redeemer: 'AccountId32',
    stellarAddress: '[u8;32]',
    status: 'SpacewalkPrimitivesRedeemRedeemRequestStatus'
  },
  /**
   * Lookup575: redeem::pallet::Error<T>
   **/
  RedeemError: {
    _enum: ['AmountExceedsUserBalance', 'UnauthorizedRedeemer', 'UnauthorizedVault', 'TimeNotExpired', 'RedeemCancelled', 'RedeemCompleted', 'RedeemIdNotFound', 'TryIntoIntError', 'AmountBelowMinimumTransferAmount', 'ExceedLimitVolumeForRedeemRequest', 'InvalidPaymentAmount']
  },
  /**
   * Lookup576: spacewalk_primitives::replace::ReplaceRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesReplaceReplaceRequest: {
    oldVault: 'SpacewalkPrimitivesVaultId',
    newVault: 'SpacewalkPrimitivesVaultId',
    amount: 'u128',
    asset: 'SpacewalkPrimitivesCurrencyId',
    griefingCollateral: 'u128',
    collateral: 'u128',
    acceptTime: 'u32',
    period: 'u32',
    stellarAddress: '[u8;32]',
    status: 'SpacewalkPrimitivesReplaceReplaceRequestStatus'
  },
  /**
   * Lookup577: spacewalk_primitives::replace::ReplaceRequestStatus
   **/
  SpacewalkPrimitivesReplaceReplaceRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup578: replace::pallet::Error<T>
   **/
  ReplaceError: {
    _enum: ['ReplaceAmountZero', 'AmountBelowDustAmount', 'NoPendingRequest', 'UnauthorizedVault', 'ReplaceSelfNotAllowed', 'VaultHasEnabledNomination', 'ReplacePeriodNotExpired', 'ReplaceCompleted', 'ReplaceCancelled', 'ReplaceIdNotFound', 'InvalidWrappedCurrency', 'InvalidPaymentAmount']
  },
  /**
   * Lookup580: security::pallet::Error<T>
   **/
  SecurityError: {
    _enum: ['ParachainNotRunning']
  },
  /**
   * Lookup583: stellar_relay::pallet::Error<T>
   **/
  StellarRelayError: {
    _enum: ['Base64DecodeError', 'BoundedVecCreationFailed', 'DuplicateOrganizationId', 'DuplicateValidatorPublicKey', 'EmptyEnvelopeSet', 'EnvelopeSignedByUnknownValidator', 'EnvelopeSlotIndexMismatch', 'ExternalizedNHMismatch', 'ExternalizedValueMismatch', 'FailedToComputeNonGenericTxSetContentHash', 'InvalidEnvelopeSignature', 'InvalidQuorumSetNotEnoughOrganizations', 'InvalidQuorumSetNotEnoughValidators', 'InvalidScpPledge', 'InvalidTransactionSetPrefix', 'InvalidXDR', 'MissingExternalizedMessage', 'NoOrganizationsRegistered', 'NoValidatorsRegistered', 'OrganizationLimitExceeded', 'SlotIndexIsNone', 'TransactionMemoDoesNotMatch', 'TransactionNotInTransactionSet', 'TransactionSetHashCreationFailed', 'TransactionSetHashMismatch', 'ValidatorLimitExceeded']
  },
  /**
   * Lookup584: vault_registry::types::SystemVault<Balance, spacewalk_primitives::CurrencyId>
   **/
  VaultRegistrySystemVault: {
    toBeIssuedTokens: 'u128',
    issuedTokens: 'u128',
    toBeRedeemedTokens: 'u128',
    collateral: 'u128',
    currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup585: vault_registry::types::Vault<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId, sp_arithmetic::fixed_point::FixedU128>
   **/
  VaultRegistryVault: {
    id: 'SpacewalkPrimitivesVaultId',
    status: 'VaultRegistryVaultStatus',
    bannedUntil: 'Option<u32>',
    secureCollateralThreshold: 'Option<u128>',
    toBeIssuedTokens: 'u128',
    issuedTokens: 'u128',
    toBeRedeemedTokens: 'u128',
    toBeReplacedTokens: 'u128',
    replaceCollateral: 'u128',
    activeReplaceCollateral: 'u128',
    liquidatedCollateral: 'u128'
  },
  /**
   * Lookup586: vault_registry::pallet::Error<T>
   **/
  VaultRegistryError: {
    _enum: ['InsufficientCollateral', 'ExceedingVaultLimit', 'InsufficientTokensCommitted', 'VaultBanned', 'InsufficientVaultCollateralAmount', 'VaultAlreadyRegistered', 'VaultNotFound', 'VaultNotBelowLiquidationThreshold', 'InvalidPublicKey', 'MaxNominationRatioViolation', 'CurrencyCeilingExceeded', 'VaultLiquidated', 'VaultNotRecoverable', 'NoStellarPublicKey', 'PublicKeyAlreadyRegistered', 'NoTokensIssued', 'NoVaultWithSufficientCollateral', 'NoVaultWithSufficientTokens', 'NoVaultUnderThePremiumRedeemThreshold', 'InvalidCurrency', 'GlobalThresholdNotSet', 'LiquidationCollateralThresholdNotSet', 'PremiumRedeemThresholdNotSet', 'SecureCollateralThresholdNotSet', 'CeilingNotSet', 'ThresholdNotAboveGlobalThreshold', 'TryIntoIntError', 'VaultNotAcceptingIssueRequests', 'MinimumCollateralNotSet']
  },
  /**
   * Lookup592: pooled_rewards::pallet::Error<T, I>
   **/
  PooledRewardsError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'ZeroTotalStake', 'MaxRewardCurrencies']
  },
  /**
   * Lookup599: staking::pallet::Error<T>
   **/
  StakingError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'SlashZeroTotalStake', 'MaxRewardCurrencies']
  },
  /**
   * Lookup600: clients_info::pallet::Error<T>
   **/
  ClientsInfoError: {
    _enum: ['ThisAccountIdIsNotAuthorized', 'UserUnableToDeauthorizeThemself']
  },
  /**
   * Lookup601: reward_distribution::pallet::Error<T>
   **/
  RewardDistributionError: {
    _enum: ['Overflow', 'Underflow', 'NoRewardsForAccount', 'NotEnoughRewardsRegistered', 'InconsistentRewardCurrencies', 'CollectAmountTooSmall']
  },
  /**
   * Lookup603: orml_currencies_allowance_extension::pallet::Error<T>
   **/
  OrmlCurrenciesAllowanceExtensionError: {
    _enum: ['Unapproved', 'CurrencyNotLive', 'ExceedsNumberOfAllowedCurrencies']
  },
  /**
   * Lookup604: orml_tokens_management_extension::types::CurrencyDetails<sp_core::crypto::AccountId32, Balance>
   **/
  OrmlTokensManagementExtensionCurrencyDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    deposit: 'u128'
  },
  /**
   * Lookup605: orml_tokens_management_extension::pallet::Error<T>
   **/
  OrmlTokensManagementExtensionError: {
    _enum: ['AlreadyCreated', 'NotOwnableCurrency', 'NotCreated', 'NoPermission', 'InsufficientBalance']
  },
  /**
   * Lookup606: treasury_buyout_extension::pallet::Error<T>
   **/
  TreasuryBuyoutExtensionError: {
    _enum: ['StorageClearingFailure', 'NativeTokenNotAllowed', 'ExceedsNumberOfAllowedCurrencies', 'WrongAssetToBuyout', 'BuyoutLimitExceeded', 'NoPrice', 'InsufficientTreasuryBalance', 'InsufficientAccountBalance', 'LessThanMinBuyoutAmount', 'BuyoutWithTreasuryAccount', 'ExchangeFailure']
  },
  /**
   * Lookup607: bifrost_farming::rewards::PoolInfo<BalanceOf, spacewalk_primitives::CurrencyId, sp_core::crypto::AccountId32, BlockNumberFor>
   **/
  BifrostFarmingRewardsPoolInfo: {
    tokensProportion: 'BTreeMap<SpacewalkPrimitivesCurrencyId, Perbill>',
    basicToken: '(SpacewalkPrimitivesCurrencyId,Perbill)',
    totalShares: 'u128',
    basicRewards: 'BTreeMap<SpacewalkPrimitivesCurrencyId, u128>',
    rewards: 'BTreeMap<SpacewalkPrimitivesCurrencyId, (u128,u128)>',
    state: 'BifrostFarmingRewardsPoolState',
    keeper: 'AccountId32',
    rewardIssuer: 'AccountId32',
    gauge: 'Option<u32>',
    blockStartup: 'Option<u32>',
    minDepositToStart: 'u128',
    afterBlockToStart: 'u32',
    withdrawLimitTime: 'u32',
    claimLimitTime: 'u32',
    withdrawLimitCount: 'u8'
  },
  /**
   * Lookup613: bifrost_farming::rewards::PoolState
   **/
  BifrostFarmingRewardsPoolState: {
    _enum: ['UnCharged', 'Charged', 'Ongoing', 'Dead', 'Retired']
  },
  /**
   * Lookup614: bifrost_farming::gauge::GaugePoolInfo<BalanceOf, spacewalk_primitives::CurrencyId, sp_core::crypto::AccountId32, BlockNumberFor>
   **/
  BifrostFarmingGaugeGaugePoolInfo: {
    pid: 'u32',
    token: 'SpacewalkPrimitivesCurrencyId',
    keeper: 'AccountId32',
    rewardIssuer: 'AccountId32',
    rewards: 'BTreeMap<SpacewalkPrimitivesCurrencyId, (u128,u128,u128)>',
    gaugeBasicRewards: 'BTreeMap<SpacewalkPrimitivesCurrencyId, u128>',
    maxBlock: 'u32',
    gaugeAmount: 'u128',
    totalTimeFactor: 'u128',
    gaugeState: 'BifrostFarmingGaugeGaugeState',
    gaugeLastBlock: 'u32'
  },
  /**
   * Lookup619: bifrost_farming::gauge::GaugeState
   **/
  BifrostFarmingGaugeGaugeState: {
    _enum: ['Unbond', 'Bonded']
  },
  /**
   * Lookup621: bifrost_farming::gauge::GaugeInfo<BalanceOf, BlockNumberFor, sp_core::crypto::AccountId32>
   **/
  BifrostFarmingGaugeGaugeInfo: {
    who: 'AccountId32',
    gaugeAmount: 'u128',
    totalTimeFactor: 'u128',
    latestTimeFactor: 'u128',
    claimedTimeFactor: 'u128',
    gaugeStartBlock: 'u32',
    gaugeStopBlock: 'u32',
    gaugeLastBlock: 'u32',
    lastClaimBlock: 'u32'
  },
  /**
   * Lookup622: bifrost_farming::rewards::ShareInfo<BalanceOf, spacewalk_primitives::CurrencyId, BlockNumberFor, sp_core::crypto::AccountId32>
   **/
  BifrostFarmingRewardsShareInfo: {
    who: 'AccountId32',
    share: 'u128',
    withdrawnRewards: 'BTreeMap<SpacewalkPrimitivesCurrencyId, u128>',
    claimLastBlock: 'u32',
    withdrawList: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup623: bifrost_farming::boost::BoostPoolInfo<Balance, BlockNumber>
   **/
  BifrostFarmingBoostBoostPoolInfo: {
    totalVotes: 'u128',
    startRound: 'u32',
    endRound: 'u32',
    roundLength: 'u32'
  },
  /**
   * Lookup624: bifrost_farming::boost::UserBoostInfo<T>
   **/
  BifrostFarmingBoostUserBoostInfo: {
    voteAmount: 'u128',
    voteList: 'Vec<(u32,Percent)>',
    lastVote: 'u32'
  },
  /**
   * Lookup627: bifrost_farming::pallet::Error<T>
   **/
  BifrostFarmingError: {
    _enum: ['NotNullable', 'PoolDoesNotExist', 'GaugePoolNotExist', 'GaugeInfoNotExist', 'InvalidPoolState', 'LastGaugeNotClaim', 'CanNotClaim', 'GaugeMaxBlockOverflow', 'WithdrawLimitCountExceeded', 'ShareInfoNotExists', 'CanNotDeposit', 'WhitelistEmpty', 'RoundNotOver', 'RoundLengthNotSet', 'WhitelistLimitExceeded', 'NobodyVoting', 'NotInWhitelist', 'PercentOverflow', 'PoolNotCleared']
  },
  /**
   * Lookup628: orml_asset_registry::module::Error<T>
   **/
  OrmlAssetRegistryModuleError: {
    _enum: ['AssetNotFound', 'BadVersion', 'InvalidAssetId', 'ConflictingLocation', 'ConflictingAssetId']
  },
  /**
   * Lookup630: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup631: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup633: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup634: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup637: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup638: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup639: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup640: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup643: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup644: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup645: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup646: treasury_buyout_extension::CheckBuyout<foucoco_runtime::Runtime>
   **/
  TreasuryBuyoutExtensionCheckBuyout: 'Null',
  /**
   * Lookup647: foucoco_runtime::Runtime
   **/
  FoucocoRuntimeRuntime: 'Null'
};
