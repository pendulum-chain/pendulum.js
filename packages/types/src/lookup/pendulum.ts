// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Index, pallet_balances::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    miscFrozen: 'u128',
    feeFrozen: 'u128'
  },
  /**
   * Lookup7: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup8: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup13: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::DigestItem
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
   * Lookup18: frame_system::EventRecord<foucoco_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup20: frame_system::pallet::Event<T>
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
   * Lookup21: frame_support::dispatch::DispatchInfo
   **/
  FrameSupportDispatchDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup22: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup23: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup24: sp_runtime::DispatchError
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
   * Lookup25: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup26: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['NoFunds', 'WouldDie', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported']
  },
  /**
   * Lookup27: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup29: cumulus_pallet_parachain_system::pallet::Event<T>
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
        dmqHead: 'H256'
      }
    }
  },
  /**
   * Lookup30: pallet_balances::pallet::Event<T, I>
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
        reserved: 'u128',
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
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup31: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup32: pallet_transaction_payment::pallet::Event<T>
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
   * Lookup33: pallet_sudo::pallet::Event<T>
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
   * Lookup37: pallet_democracy::pallet::Event<T>
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
        propIndex: 'u32'
      }
    }
  },
  /**
   * Lookup38: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup39: pallet_democracy::vote::AccountVote<Balance>
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
   * Lookup41: pallet_collective::pallet::Event<T, I>
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
   * Lookup44: pallet_scheduler::pallet::Event<T>
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
   * Lookup47: pallet_preimage::pallet::Event<T>
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
   * Lookup48: pallet_multisig::pallet::Event<T>
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
   * Lookup49: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup50: pallet_treasury::pallet::Event<T, I>
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
   * Lookup51: pallet_bounties::pallet::Event<T, I>
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
   * Lookup52: pallet_child_bounties::pallet::Event<T>
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
   * Lookup53: pallet_session::pallet::Event
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32'
      }
    }
  },
  /**
   * Lookup54: parachain_staking::pallet::Event<T>
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
   * Lookup56: cumulus_pallet_xcmp_queue::pallet::Event<T>
   **/
  CumulusPalletXcmpQueueEvent: {
    _enum: {
      Success: {
        messageHash: 'Option<H256>',
        weight: 'SpWeightsWeightV2Weight',
      },
      Fail: {
        messageHash: 'Option<H256>',
        error: 'XcmV2TraitsError',
        weight: 'SpWeightsWeightV2Weight',
      },
      BadVersion: {
        messageHash: 'Option<H256>',
      },
      BadFormat: {
        messageHash: 'Option<H256>',
      },
      UpwardMessageSent: {
        messageHash: 'Option<H256>',
      },
      XcmpMessageSent: {
        messageHash: 'Option<H256>',
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
   * Lookup58: xcm::v2::traits::Error
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
   * Lookup60: pallet_xcm::pallet::Event<T>
   **/
  PalletXcmEvent: {
    _enum: {
      Attempted: 'XcmV2TraitsOutcome',
      Sent: '(XcmV1MultiLocation,XcmV1MultiLocation,XcmV2Xcm)',
      UnexpectedResponse: '(XcmV1MultiLocation,u64)',
      ResponseReady: '(u64,XcmV2Response)',
      Notified: '(u64,u8,u8)',
      NotifyOverweight: '(u64,u8,u8,SpWeightsWeightV2Weight,SpWeightsWeightV2Weight)',
      NotifyDispatchError: '(u64,u8,u8)',
      NotifyDecodeFailed: '(u64,u8,u8)',
      InvalidResponder: '(XcmV1MultiLocation,u64,Option<XcmV1MultiLocation>)',
      InvalidResponderVersion: '(XcmV1MultiLocation,u64)',
      ResponseTaken: 'u64',
      AssetsTrapped: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)',
      VersionChangeNotified: '(XcmV1MultiLocation,u32)',
      SupportedVersionChanged: '(XcmV1MultiLocation,u32)',
      NotifyTargetSendFail: '(XcmV1MultiLocation,u64,XcmV2TraitsError)',
      NotifyTargetMigrationFail: '(XcmVersionedMultiLocation,u64)',
      AssetsClaimed: '(H256,XcmV1MultiLocation,XcmVersionedMultiAssets)'
    }
  },
  /**
   * Lookup61: xcm::v2::traits::Outcome
   **/
  XcmV2TraitsOutcome: {
    _enum: {
      Complete: 'u64',
      Incomplete: '(u64,XcmV2TraitsError)',
      Error: 'XcmV2TraitsError'
    }
  },
  /**
   * Lookup62: xcm::v1::multilocation::MultiLocation
   **/
  XcmV1MultiLocation: {
    parents: 'u8',
    interior: 'XcmV1MultilocationJunctions'
  },
  /**
   * Lookup63: xcm::v1::multilocation::Junctions
   **/
  XcmV1MultilocationJunctions: {
    _enum: {
      Here: 'Null',
      X1: 'XcmV1Junction',
      X2: '(XcmV1Junction,XcmV1Junction)',
      X3: '(XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X4: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X5: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X6: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X7: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)',
      X8: '(XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction,XcmV1Junction)'
    }
  },
  /**
   * Lookup64: xcm::v1::junction::Junction
   **/
  XcmV1Junction: {
    _enum: {
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup66: xcm::v0::junction::NetworkId
   **/
  XcmV0JunctionNetworkId: {
    _enum: {
      Any: 'Null',
      Named: 'Bytes',
      Polkadot: 'Null',
      Kusama: 'Null'
    }
  },
  /**
   * Lookup70: xcm::v0::junction::BodyId
   **/
  XcmV0JunctionBodyId: {
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
   * Lookup71: xcm::v0::junction::BodyPart
   **/
  XcmV0JunctionBodyPart: {
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
   * Lookup72: xcm::v2::Xcm<RuntimeCall>
   **/
  XcmV2Xcm: 'Vec<XcmV2Instruction>',
  /**
   * Lookup74: xcm::v2::Instruction<RuntimeCall>
   **/
  XcmV2Instruction: {
    _enum: {
      WithdrawAsset: 'XcmV1MultiassetMultiAssets',
      ReserveAssetDeposited: 'XcmV1MultiassetMultiAssets',
      ReceiveTeleportedAsset: 'XcmV1MultiassetMultiAssets',
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV2Response',
        maxWeight: 'Compact<u64>',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
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
      DescendOrigin: 'XcmV1MultilocationJunctions',
      ReportError: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        maxResponseWeight: 'Compact<u64>',
      },
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'Compact<u32>',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        xcm: 'XcmV2Xcm',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxResponseWeight: 'Compact<u64>',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weightLimit: 'XcmV2WeightLimit',
      },
      RefundSurplus: 'Null',
      SetErrorHandler: 'XcmV2Xcm',
      SetAppendix: 'XcmV2Xcm',
      ClearError: 'Null',
      ClaimAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        ticket: 'XcmV1MultiLocation',
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
   * Lookup75: xcm::v1::multiasset::MultiAssets
   **/
  XcmV1MultiassetMultiAssets: 'Vec<XcmV1MultiAsset>',
  /**
   * Lookup77: xcm::v1::multiasset::MultiAsset
   **/
  XcmV1MultiAsset: {
    id: 'XcmV1MultiassetAssetId',
    fun: 'XcmV1MultiassetFungibility'
  },
  /**
   * Lookup78: xcm::v1::multiasset::AssetId
   **/
  XcmV1MultiassetAssetId: {
    _enum: {
      Concrete: 'XcmV1MultiLocation',
      Abstract: 'Bytes'
    }
  },
  /**
   * Lookup79: xcm::v1::multiasset::Fungibility
   **/
  XcmV1MultiassetFungibility: {
    _enum: {
      Fungible: 'Compact<u128>',
      NonFungible: 'XcmV1MultiassetAssetInstance'
    }
  },
  /**
   * Lookup80: xcm::v1::multiasset::AssetInstance
   **/
  XcmV1MultiassetAssetInstance: {
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
   * Lookup83: xcm::v2::Response
   **/
  XcmV2Response: {
    _enum: {
      Null: 'Null',
      Assets: 'XcmV1MultiassetMultiAssets',
      ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
      Version: 'u32'
    }
  },
  /**
   * Lookup86: xcm::v0::OriginKind
   **/
  XcmV0OriginKind: {
    _enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm']
  },
  /**
   * Lookup87: xcm::double_encoded::DoubleEncoded<T>
   **/
  XcmDoubleEncoded: {
    encoded: 'Bytes'
  },
  /**
   * Lookup88: xcm::v1::multiasset::MultiAssetFilter
   **/
  XcmV1MultiassetMultiAssetFilter: {
    _enum: {
      Definite: 'XcmV1MultiassetMultiAssets',
      Wild: 'XcmV1MultiassetWildMultiAsset'
    }
  },
  /**
   * Lookup89: xcm::v1::multiasset::WildMultiAsset
   **/
  XcmV1MultiassetWildMultiAsset: {
    _enum: {
      All: 'Null',
      AllOf: {
        id: 'XcmV1MultiassetAssetId',
        fun: 'XcmV1MultiassetWildFungibility'
      }
    }
  },
  /**
   * Lookup90: xcm::v1::multiasset::WildFungibility
   **/
  XcmV1MultiassetWildFungibility: {
    _enum: ['Fungible', 'NonFungible']
  },
  /**
   * Lookup91: xcm::v2::WeightLimit
   **/
  XcmV2WeightLimit: {
    _enum: {
      Unlimited: 'Null',
      Limited: 'Compact<u64>'
    }
  },
  /**
   * Lookup93: xcm::VersionedMultiAssets
   **/
  XcmVersionedMultiAssets: {
    _enum: {
      V0: 'Vec<XcmV0MultiAsset>',
      V1: 'XcmV1MultiassetMultiAssets'
    }
  },
  /**
   * Lookup95: xcm::v0::multi_asset::MultiAsset
   **/
  XcmV0MultiAsset: {
    _enum: {
      None: 'Null',
      All: 'Null',
      AllFungible: 'Null',
      AllNonFungible: 'Null',
      AllAbstractFungible: {
        id: 'Bytes',
      },
      AllAbstractNonFungible: {
        class: 'Bytes',
      },
      AllConcreteFungible: {
        id: 'XcmV0MultiLocation',
      },
      AllConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
      },
      AbstractFungible: {
        id: 'Bytes',
        amount: 'Compact<u128>',
      },
      AbstractNonFungible: {
        class: 'Bytes',
        instance: 'XcmV1MultiassetAssetInstance',
      },
      ConcreteFungible: {
        id: 'XcmV0MultiLocation',
        amount: 'Compact<u128>',
      },
      ConcreteNonFungible: {
        class: 'XcmV0MultiLocation',
        instance: 'XcmV1MultiassetAssetInstance'
      }
    }
  },
  /**
   * Lookup96: xcm::v0::multi_location::MultiLocation
   **/
  XcmV0MultiLocation: {
    _enum: {
      Null: 'Null',
      X1: 'XcmV0Junction',
      X2: '(XcmV0Junction,XcmV0Junction)',
      X3: '(XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X4: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X5: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X6: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X7: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)',
      X8: '(XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction,XcmV0Junction)'
    }
  },
  /**
   * Lookup97: xcm::v0::junction::Junction
   **/
  XcmV0Junction: {
    _enum: {
      Parent: 'Null',
      Parachain: 'Compact<u32>',
      AccountId32: {
        network: 'XcmV0JunctionNetworkId',
        id: '[u8;32]',
      },
      AccountIndex64: {
        network: 'XcmV0JunctionNetworkId',
        index: 'Compact<u64>',
      },
      AccountKey20: {
        network: 'XcmV0JunctionNetworkId',
        key: '[u8;20]',
      },
      PalletInstance: 'u8',
      GeneralIndex: 'Compact<u128>',
      GeneralKey: 'Bytes',
      OnlyChild: 'Null',
      Plurality: {
        id: 'XcmV0JunctionBodyId',
        part: 'XcmV0JunctionBodyPart'
      }
    }
  },
  /**
   * Lookup98: xcm::VersionedMultiLocation
   **/
  XcmVersionedMultiLocation: {
    _enum: {
      V0: 'XcmV0MultiLocation',
      V1: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup99: cumulus_pallet_xcm::pallet::Event<T>
   **/
  CumulusPalletXcmEvent: {
    _enum: {
      InvalidFormat: '[u8;8]',
      UnsupportedVersion: '[u8;8]',
      ExecutedDownward: '([u8;8],XcmV2TraitsOutcome)'
    }
  },
  /**
   * Lookup100: cumulus_pallet_dmp_queue::pallet::Event<T>
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
        outcome: 'XcmV2TraitsOutcome',
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
        weightUsed: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup101: pallet_vesting::pallet::Event<T>
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
   * Lookup102: pallet_utility::pallet::Event
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
   * Lookup103: orml_tokens::module::Event<T>
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
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup104: spacewalk_primitives::CurrencyId
   **/
  SpacewalkPrimitivesCurrencyId: {
    _enum: {
      XCM: 'SpacewalkPrimitivesForeignCurrencyId',
      Native: 'Null',
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
   * Lookup105: spacewalk_primitives::ForeignCurrencyId
   **/
  SpacewalkPrimitivesForeignCurrencyId: {
    _enum: ['KSM', 'KAR', 'AUSD', 'BNC', 'VsKSM', 'HKO', 'MOVR', 'SDN', 'KINT', 'KBTC', 'GENS', 'XOR', 'TEER', 'KILT', 'PHA', 'ZTG', 'USD', '__Unused17', '__Unused18', '__Unused19', 'DOT']
  },
  /**
   * Lookup107: orml_xtokens::module::Event<T>
   **/
  OrmlXtokensModuleEvent: {
    _enum: {
      TransferredMultiAssets: {
        sender: 'AccountId32',
        assets: 'XcmV1MultiassetMultiAssets',
        fee: 'XcmV1MultiAsset',
        dest: 'XcmV1MultiLocation'
      }
    }
  },
  /**
   * Lookup108: pallet_identity::pallet::Event<T>
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
   * Lookup109: pallet_contracts::pallet::Event<T>
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
   * Lookup110: dia_oracle::pallet::Event<T>
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
   * Lookup114: dia_oracle::dia::CoinInfo
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
   * Lookup115: zenlink_protocol::pallet::Event<T>
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
   * Lookup116: zenlink_protocol::primitives::AssetId
   **/
  ZenlinkProtocolPrimitivesAssetId: {
    chainId: 'u32',
    assetType: 'u8',
    assetIndex: 'u64'
  },
  /**
   * Lookup121: issue::pallet::Event<T>
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
        intervalLength: 'u32'
      }
    }
  },
  /**
   * Lookup122: spacewalk_primitives::VaultId<sp_core::crypto::AccountId32, spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesVaultId: {
    accountId: 'AccountId32',
    currencies: 'SpacewalkPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup123: spacewalk_primitives::VaultCurrencyPair<spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesVaultCurrencyPair: {
    collateral: 'SpacewalkPrimitivesCurrencyId',
    wrapped: 'SpacewalkPrimitivesCurrencyId'
  },
  /**
   * Lookup125: nomination::pallet::Event<T>
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
   * Lookup126: oracle::pallet::Event<T>
   **/
  OracleEvent: {
    _enum: {
      AggregateUpdated: {
        values: 'Vec<(SpacewalkPrimitivesOracleKey,u128)>',
      },
      OracleKeysUpdated: {
        oracleKeys: 'Vec<SpacewalkPrimitivesOracleKey>'
      }
    }
  },
  /**
   * Lookup129: spacewalk_primitives::oracle::Key
   **/
  SpacewalkPrimitivesOracleKey: {
    _enum: {
      ExchangeRate: 'SpacewalkPrimitivesCurrencyId'
    }
  },
  /**
   * Lookup132: redeem::pallet::Event<T>
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
        intervalLength: 'u32'
      }
    }
  },
  /**
   * Lookup133: spacewalk_primitives::redeem::RedeemRequestStatus
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
   * Lookup134: replace::pallet::Event<T>
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
        period: 'u32'
      }
    }
  },
  /**
   * Lookup135: security::pallet::Event<T>
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
   * Lookup136: security::types::StatusCode
   **/
  SecurityStatusCode: {
    _enum: ['Running', 'Error', 'Shutdown']
  },
  /**
   * Lookup138: security::types::ErrorCode
   **/
  SecurityErrorCode: {
    _enum: ['None', 'OracleOffline']
  },
  /**
   * Lookup139: stellar_relay::pallet::Event<T>
   **/
  StellarRelayEvent: {
    _enum: {
      UpdateTier1ValidatorSet: {
        newValidatorsEnactmentBlockHeight: 'u32'
      }
    }
  },
  /**
   * Lookup140: vault_registry::pallet::Event<T>
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
   * Lookup141: vault_registry::types::VaultStatus
   **/
  VaultRegistryVaultStatus: {
    _enum: {
      Active: 'bool',
      Liquidated: 'Null'
    }
  },
  /**
   * Lookup142: reward::pallet::Event<T, I>
   **/
  RewardEvent: {
    _enum: {
      DepositStake: {
        rewardId: 'SpacewalkPrimitivesVaultId',
        amount: 'i128',
      },
      DistributeReward: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'i128',
      },
      WithdrawStake: {
        rewardId: 'SpacewalkPrimitivesVaultId',
        amount: 'i128',
      },
      WithdrawReward: {
        rewardId: 'SpacewalkPrimitivesVaultId',
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'i128'
      }
    }
  },
  /**
   * Lookup145: staking::pallet::Event<T>
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
   * Lookup146: orml_tokens_allowance::pallet::Event<T>
   **/
  OrmlTokensAllowanceEvent: {
    _enum: {
      UpdateActiveBlock: {
        blockNumber: 'u32',
      },
      ApprovedTransfer: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup147: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup150: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup152: frame_system::pallet::Call<T>
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
   * Lookup155: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup156: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup157: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup159: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup160: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup161: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup162: sp_version::RuntimeVersion
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
   * Lookup167: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup168: polkadot_primitives::v2::PersistedValidationData<primitive_types::H256, N>
   **/
  PolkadotPrimitivesV2PersistedValidationData: {
    parentHead: 'Bytes',
    relayParentNumber: 'u32',
    relayParentStorageRoot: 'H256',
    maxPovSize: 'u32'
  },
  /**
   * Lookup171: polkadot_primitives::v2::UpgradeRestriction
   **/
  PolkadotPrimitivesV2UpgradeRestriction: {
    _enum: ['Present']
  },
  /**
   * Lookup172: sp_trie::storage_proof::StorageProof
   **/
  SpTrieStorageProof: {
    trieNodes: 'BTreeSet<Bytes>'
  },
  /**
   * Lookup174: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
   **/
  CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
    dmqMqcHead: 'H256',
    relayDispatchQueueSize: '(u32,u32)',
    ingressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>',
    egressChannels: 'Vec<(u32,PolkadotPrimitivesV2AbridgedHrmpChannel)>'
  },
  /**
   * Lookup177: polkadot_primitives::v2::AbridgedHrmpChannel
   **/
  PolkadotPrimitivesV2AbridgedHrmpChannel: {
    maxCapacity: 'u32',
    maxTotalSize: 'u32',
    maxMessageSize: 'u32',
    msgCount: 'u32',
    totalSize: 'u32',
    mqcHead: 'Option<H256>'
  },
  /**
   * Lookup178: polkadot_primitives::v2::AbridgedHostConfiguration
   **/
  PolkadotPrimitivesV2AbridgedHostConfiguration: {
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
   * Lookup184: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain::primitives::Id>
   **/
  PolkadotCorePrimitivesOutboundHrmpMessage: {
    recipient: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup185: cumulus_pallet_parachain_system::pallet::Call<T>
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
      },
      enact_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup186: cumulus_primitives_parachain_inherent::ParachainInherentData
   **/
  CumulusPrimitivesParachainInherentParachainInherentData: {
    validationData: 'PolkadotPrimitivesV2PersistedValidationData',
    relayChainState: 'SpTrieStorageProof',
    downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
    horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>'
  },
  /**
   * Lookup188: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundDownwardMessage: {
    sentAt: 'u32',
    msg: 'Bytes'
  },
  /**
   * Lookup191: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
   **/
  PolkadotCorePrimitivesInboundHrmpMessage: {
    sentAt: 'u32',
    data: 'Bytes'
  },
  /**
   * Lookup194: cumulus_pallet_parachain_system::pallet::Error<T>
   **/
  CumulusPalletParachainSystemError: {
    _enum: ['OverlappingUpgrades', 'ProhibitedByPolkadot', 'TooBig', 'ValidationDataNotAvailable', 'HostConfigurationNotAvailable', 'NotScheduled', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup195: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup197: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup198: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup201: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup203: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
        newReserved: 'Compact<u128>',
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
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup206: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup207: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup208: pallet_sudo::pallet::Call<T>
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
   * Lookup210: pallet_democracy::pallet::Call<T>
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
        propIndex: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup211: frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>
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
   * Lookup213: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup215: pallet_collective::pallet::Call<T, I>
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
      close_old_weight: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'Compact<u64>',
        lengthBound: 'Compact<u32>',
      },
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
   * Lookup220: pallet_scheduler::pallet::Call<T>
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
   * Lookup222: pallet_preimage::pallet::Call<T>
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
   * Lookup223: pallet_multisig::pallet::Call<T>
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
   * Lookup225: pallet_treasury::pallet::Call<T, I>
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
   * Lookup226: pallet_bounties::pallet::Call<T, I>
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
   * Lookup227: pallet_child_bounties::pallet::Call<T>
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
   * Lookup228: pallet_authorship::pallet::Call<T>
   **/
  PalletAuthorshipCall: {
    _enum: {
      set_uncles: {
        newUncles: 'Vec<SpRuntimeHeader>'
      }
    }
  },
  /**
   * Lookup230: sp_runtime::generic::header::Header<Number, sp_runtime::traits::BlakeTwo256>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup231: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup232: pallet_session::pallet::Call<T>
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
   * Lookup233: foucoco_runtime::SessionKeys
   **/
  FoucocoRuntimeSessionKeys: {
    aura: 'SpConsensusAuraSr25519AppSr25519Public'
  },
  /**
   * Lookup234: sp_consensus_aura::sr25519::app_sr25519::Public
   **/
  SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
  /**
   * Lookup235: sp_core::sr25519::Public
   **/
  SpCoreSr25519Public: '[u8;32]',
  /**
   * Lookup236: parachain_staking::pallet::Call<T>
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
   * Lookup237: cumulus_pallet_xcmp_queue::pallet::Call<T>
   **/
  CumulusPalletXcmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64',
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
        new_: 'u64',
      },
      update_weight_restrict_decay: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64',
      },
      update_xcmp_max_individual_weight: {
        _alias: {
          new_: 'new',
        },
        new_: 'u64'
      }
    }
  },
  /**
   * Lookup238: pallet_xcm::pallet::Call<T>
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
        maxWeight: 'u64',
      },
      force_xcm_version: {
        location: 'XcmV1MultiLocation',
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
        weightLimit: 'XcmV2WeightLimit',
      },
      limited_teleport_assets: {
        dest: 'XcmVersionedMultiLocation',
        beneficiary: 'XcmVersionedMultiLocation',
        assets: 'XcmVersionedMultiAssets',
        feeAssetItem: 'u32',
        weightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
   * Lookup239: xcm::VersionedXcm<RuntimeCall>
   **/
  XcmVersionedXcm: {
    _enum: {
      V0: 'XcmV0Xcm',
      V1: 'XcmV1Xcm',
      V2: 'XcmV2Xcm'
    }
  },
  /**
   * Lookup240: xcm::v0::Xcm<RuntimeCall>
   **/
  XcmV0Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      ReserveAssetDeposit: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      TeleportAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        effects: 'Vec<XcmV0Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV0Response',
      },
      TransferAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
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
      RelayedFrom: {
        who: 'XcmV0MultiLocation',
        message: 'XcmV0Xcm'
      }
    }
  },
  /**
   * Lookup242: xcm::v0::order::Order<RuntimeCall>
   **/
  XcmV0Order: {
    _enum: {
      Null: 'Null',
      DepositAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      ExchangeAsset: {
        give: 'Vec<XcmV0MultiAsset>',
        receive: 'Vec<XcmV0MultiAsset>',
      },
      InitiateReserveWithdraw: {
        assets: 'Vec<XcmV0MultiAsset>',
        reserve: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      InitiateTeleport: {
        assets: 'Vec<XcmV0MultiAsset>',
        dest: 'XcmV0MultiLocation',
        effects: 'Vec<XcmV0Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV0MultiLocation',
        assets: 'Vec<XcmV0MultiAsset>',
      },
      BuyExecution: {
        fees: 'XcmV0MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        xcm: 'Vec<XcmV0Xcm>'
      }
    }
  },
  /**
   * Lookup244: xcm::v0::Response
   **/
  XcmV0Response: {
    _enum: {
      Assets: 'Vec<XcmV0MultiAsset>'
    }
  },
  /**
   * Lookup245: xcm::v1::Xcm<RuntimeCall>
   **/
  XcmV1Xcm: {
    _enum: {
      WithdrawAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReserveAssetDeposited: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      ReceiveTeleportedAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        effects: 'Vec<XcmV1Order>',
      },
      QueryResponse: {
        queryId: 'Compact<u64>',
        response: 'XcmV1Response',
      },
      TransferAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        beneficiary: 'XcmV1MultiLocation',
      },
      TransferReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssets',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      Transact: {
        originType: 'XcmV0OriginKind',
        requireWeightAtMost: 'u64',
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
      RelayedFrom: {
        who: 'XcmV1MultilocationJunctions',
        message: 'XcmV1Xcm',
      },
      SubscribeVersion: {
        queryId: 'Compact<u64>',
        maxResponseWeight: 'Compact<u64>',
      },
      UnsubscribeVersion: 'Null'
    }
  },
  /**
   * Lookup247: xcm::v1::order::Order<RuntimeCall>
   **/
  XcmV1Order: {
    _enum: {
      Noop: 'Null',
      DepositAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        beneficiary: 'XcmV1MultiLocation',
      },
      DepositReserveAsset: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        maxAssets: 'u32',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      ExchangeAsset: {
        give: 'XcmV1MultiassetMultiAssetFilter',
        receive: 'XcmV1MultiassetMultiAssets',
      },
      InitiateReserveWithdraw: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        reserve: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      InitiateTeleport: {
        assets: 'XcmV1MultiassetMultiAssetFilter',
        dest: 'XcmV1MultiLocation',
        effects: 'Vec<XcmV1Order>',
      },
      QueryHolding: {
        queryId: 'Compact<u64>',
        dest: 'XcmV1MultiLocation',
        assets: 'XcmV1MultiassetMultiAssetFilter',
      },
      BuyExecution: {
        fees: 'XcmV1MultiAsset',
        weight: 'u64',
        debt: 'u64',
        haltOnError: 'bool',
        instructions: 'Vec<XcmV1Xcm>'
      }
    }
  },
  /**
   * Lookup249: xcm::v1::Response
   **/
  XcmV1Response: {
    _enum: {
      Assets: 'XcmV1MultiassetMultiAssets',
      Version: 'u32'
    }
  },
  /**
   * Lookup263: cumulus_pallet_dmp_queue::pallet::Call<T>
   **/
  CumulusPalletDmpQueueCall: {
    _enum: {
      service_overweight: {
        index: 'u64',
        weightLimit: 'u64'
      }
    }
  },
  /**
   * Lookup264: pallet_vesting::pallet::Call<T>
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
   * Lookup265: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup266: pallet_utility::pallet::Call<T>
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
   * Lookup268: foucoco_runtime::OriginCaller
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
   * Lookup269: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup270: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup272: pallet_xcm::pallet::Origin
   **/
  PalletXcmOrigin: {
    _enum: {
      Xcm: 'XcmV1MultiLocation',
      Response: 'XcmV1MultiLocation'
    }
  },
  /**
   * Lookup273: cumulus_pallet_xcm::pallet::Origin
   **/
  CumulusPalletXcmOrigin: {
    _enum: {
      Relay: 'Null',
      SiblingParachain: 'u32'
    }
  },
  /**
   * Lookup274: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup275: orml_currencies::module::Call<T>
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
   * Lookup276: orml_tokens::module::Call<T>
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
   * Lookup277: orml_xtokens::module::Call<T>
   **/
  OrmlXtokensModuleCall: {
    _enum: {
      transfer: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset: {
        asset: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_with_fee: {
        currencyId: 'SpacewalkPrimitivesCurrencyId',
        amount: 'u128',
        fee: 'u128',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiasset_with_fee: {
        asset: 'XcmVersionedMultiAsset',
        fee: 'XcmVersionedMultiAsset',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multicurrencies: {
        currencies: 'Vec<(SpacewalkPrimitivesCurrencyId,u128)>',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit',
      },
      transfer_multiassets: {
        assets: 'XcmVersionedMultiAssets',
        feeItem: 'u32',
        dest: 'XcmVersionedMultiLocation',
        destWeightLimit: 'XcmV2WeightLimit'
      }
    }
  },
  /**
   * Lookup278: xcm::VersionedMultiAsset
   **/
  XcmVersionedMultiAsset: {
    _enum: {
      V0: 'XcmV0MultiAsset',
      V1: 'XcmV1MultiAsset'
    }
  },
  /**
   * Lookup281: pallet_identity::pallet::Call<T>
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
   * Lookup282: pallet_identity::types::IdentityInfo<FieldLimit>
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
   * Lookup317: pallet_identity::types::BitFlags<pallet_identity::types::IdentityField>
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
   * Lookup318: pallet_identity::types::IdentityField
   **/
  PalletIdentityIdentityField: {
    _enum: ['__Unused0', 'Display', 'Legal', '__Unused3', 'Web', '__Unused5', '__Unused6', '__Unused7', 'Riot', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'Email', '__Unused17', '__Unused18', '__Unused19', '__Unused20', '__Unused21', '__Unused22', '__Unused23', '__Unused24', '__Unused25', '__Unused26', '__Unused27', '__Unused28', '__Unused29', '__Unused30', '__Unused31', 'PgpFingerprint', '__Unused33', '__Unused34', '__Unused35', '__Unused36', '__Unused37', '__Unused38', '__Unused39', '__Unused40', '__Unused41', '__Unused42', '__Unused43', '__Unused44', '__Unused45', '__Unused46', '__Unused47', '__Unused48', '__Unused49', '__Unused50', '__Unused51', '__Unused52', '__Unused53', '__Unused54', '__Unused55', '__Unused56', '__Unused57', '__Unused58', '__Unused59', '__Unused60', '__Unused61', '__Unused62', '__Unused63', 'Image', '__Unused65', '__Unused66', '__Unused67', '__Unused68', '__Unused69', '__Unused70', '__Unused71', '__Unused72', '__Unused73', '__Unused74', '__Unused75', '__Unused76', '__Unused77', '__Unused78', '__Unused79', '__Unused80', '__Unused81', '__Unused82', '__Unused83', '__Unused84', '__Unused85', '__Unused86', '__Unused87', '__Unused88', '__Unused89', '__Unused90', '__Unused91', '__Unused92', '__Unused93', '__Unused94', '__Unused95', '__Unused96', '__Unused97', '__Unused98', '__Unused99', '__Unused100', '__Unused101', '__Unused102', '__Unused103', '__Unused104', '__Unused105', '__Unused106', '__Unused107', '__Unused108', '__Unused109', '__Unused110', '__Unused111', '__Unused112', '__Unused113', '__Unused114', '__Unused115', '__Unused116', '__Unused117', '__Unused118', '__Unused119', '__Unused120', '__Unused121', '__Unused122', '__Unused123', '__Unused124', '__Unused125', '__Unused126', '__Unused127', 'Twitter']
  },
  /**
   * Lookup319: pallet_identity::types::Judgement<Balance>
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
   * Lookup320: pallet_contracts::pallet::Call<T>
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
   * Lookup322: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Deterministic', 'AllowIndeterminism']
  },
  /**
   * Lookup323: dia_oracle::pallet::Call<T>
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
   * Lookup324: zenlink_protocol::pallet::Call<T>
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
      transfer_to_parachain: {
        assetId: 'ZenlinkProtocolPrimitivesAssetId',
        paraId: 'u32',
        recipient: 'AccountId32',
        amount: 'Compact<u128>',
        maxWeight: 'u64',
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
      __Unused15: 'Null',
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
   * Lookup326: fee::pallet::Call<T>
   **/
  FeeCall: {
    _enum: {
      withdraw_rewards: {
        vaultId: 'SpacewalkPrimitivesVaultId',
        index: 'Option<u32>',
      },
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
   * Lookup327: issue::pallet::Call<T>
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
        intervalLength: 'u32'
      }
    }
  },
  /**
   * Lookup328: nomination::pallet::Call<T>
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
   * Lookup329: oracle::pallet::Call<T>
   **/
  OracleCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      update_oracle_keys: {
        oracleKeys: 'Vec<SpacewalkPrimitivesOracleKey>'
      }
    }
  },
  /**
   * Lookup330: redeem::pallet::Call<T>
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
        intervalLength: 'u32'
      }
    }
  },
  /**
   * Lookup331: replace::pallet::Call<T>
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
        period: 'u32'
      }
    }
  },
  /**
   * Lookup332: security::pallet::Call<T>
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
   * Lookup333: stellar_relay::pallet::Call<T>
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
   * Lookup335: stellar_relay::traits::Validator<OrganizationId>
   **/
  StellarRelayValidator: {
    name: 'Bytes',
    publicKey: 'Bytes',
    organizationId: 'u128'
  },
  /**
   * Lookup338: stellar_relay::traits::Organization<OrganizationId>
   **/
  StellarRelayOrganization: {
    id: 'u128',
    name: 'Bytes'
  },
  /**
   * Lookup339: vault_registry::pallet::Call<T>
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
        currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair'
      }
    }
  },
  /**
   * Lookup341: reward::pallet::Call<T, I>
   **/
  RewardCall: 'Null',
  /**
   * Lookup342: orml_tokens_allowance::pallet::Call<T>
   **/
  OrmlTokensAllowanceCall: 'Null',
  /**
   * Lookup343: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup349: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>, Balance>
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
   * Lookup350: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup351: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup352: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
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
   * Lookup356: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup357: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup360: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow']
  },
  /**
   * Lookup362: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup363: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength']
  },
  /**
   * Lookup368: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<foucoco_runtime::RuntimeCall>, BlockNumber, foucoco_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'FoucocoRuntimeOriginCaller'
  },
  /**
   * Lookup370: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup371: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, Balance>
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
   * Lookup376: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested']
  },
  /**
   * Lookup378: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup380: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup381: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup385: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup386: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved']
  },
  /**
   * Lookup387: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
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
   * Lookup388: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
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
   * Lookup390: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup391: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup392: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
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
   * Lookup393: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup395: pallet_authorship::UncleEntryItem<BlockNumber, primitive_types::H256, sp_core::crypto::AccountId32>
   **/
  PalletAuthorshipUncleEntryItem: {
    _enum: {
      InclusionHeight: 'u32',
      Uncle: '(H256,Option<AccountId32>)'
    }
  },
  /**
   * Lookup397: pallet_authorship::pallet::Error<T>
   **/
  PalletAuthorshipError: {
    _enum: ['InvalidUncleParent', 'UnclesAlreadySet', 'TooManyUncles', 'GenesisUncle', 'TooHighUncle', 'UncleAlreadyIncluded', 'OldUncle']
  },
  /**
   * Lookup401: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup402: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup406: parachain_staking::types::RoundInfo<BlockNumber>
   **/
  ParachainStakingRoundInfo: {
    current: 'u32',
    first: 'u32',
    length: 'u32'
  },
  /**
   * Lookup407: parachain_staking::types::DelegationCounter
   **/
  ParachainStakingDelegationCounter: {
    round: 'u32',
    counter: 'u32'
  },
  /**
   * Lookup408: parachain_staking::types::Stake<Option<sp_core::crypto::AccountId32>, Balance>
   **/
  ParachainStakingStakeOption: {
    owner: 'Option<AccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup409: parachain_staking::types::Candidate<sp_core::crypto::AccountId32, Balance, MaxDelegatorsPerCandidate>
   **/
  ParachainStakingCandidate: {
    id: 'AccountId32',
    stake: 'u128',
    delegators: 'ParachainStakingSetOrderedSet',
    total: 'u128',
    status: 'ParachainStakingCandidateStatus'
  },
  /**
   * Lookup410: parachain_staking::set::OrderedSet<parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>, S>
   **/
  ParachainStakingSetOrderedSet: 'Vec<ParachainStakingStakeAccountId32>',
  /**
   * Lookup411: parachain_staking::types::Stake<sp_core::crypto::AccountId32, Balance>
   **/
  ParachainStakingStakeAccountId32: {
    owner: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup414: parachain_staking::types::CandidateStatus
   **/
  ParachainStakingCandidateStatus: {
    _enum: {
      Active: 'Null',
      Leaving: 'u32'
    }
  },
  /**
   * Lookup415: parachain_staking::types::TotalStake<Balance>
   **/
  ParachainStakingTotalStake: {
    collators: 'u128',
    delegators: 'u128'
  },
  /**
   * Lookup418: parachain_staking::inflation::InflationInfo
   **/
  ParachainStakingInflationInflationInfo: {
    collator: 'ParachainStakingInflationStakingInfo',
    delegator: 'ParachainStakingInflationStakingInfo'
  },
  /**
   * Lookup419: parachain_staking::inflation::StakingInfo
   **/
  ParachainStakingInflationStakingInfo: {
    maxRate: 'Perquintill',
    rewardRate: 'ParachainStakingInflationRewardRate'
  },
  /**
   * Lookup420: parachain_staking::inflation::RewardRate
   **/
  ParachainStakingInflationRewardRate: {
    annual: 'Perquintill',
    perBlock: 'Perquintill'
  },
  /**
   * Lookup425: parachain_staking::pallet::Error<T>
   **/
  ParachainStakingError: {
    _enum: ['DelegatorNotFound', 'CandidateNotFound', 'DelegatorExists', 'CandidateExists', 'ValStakeZero', 'ValStakeBelowMin', 'ValStakeAboveMax', 'DelegationBelowMin', 'AlreadyLeaving', 'NotLeaving', 'CannotLeaveYet', 'CannotJoinBeforeUnlocking', 'AlreadyDelegating', 'NotYetDelegating', 'DelegationsPerRoundExceeded', 'TooManyDelegators', 'TooFewCollatorCandidates', 'CannotStakeIfLeaving', 'CannotDelegateIfLeaving', 'MaxCollatorsPerDelegatorExceeded', 'AlreadyDelegatedCollator', 'DelegationNotFound', 'Underflow', 'CannotSetAboveMax', 'CannotSetBelowMin', 'InvalidSchedule', 'NoMoreUnstaking', 'TooEarly', 'StakeNotFound', 'UnstakingIsEmpty', 'RewardsNotFound']
  },
  /**
   * Lookup427: cumulus_pallet_xcmp_queue::InboundChannelDetails
   **/
  CumulusPalletXcmpQueueInboundChannelDetails: {
    sender: 'u32',
    state: 'CumulusPalletXcmpQueueInboundState',
    messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesXcmpMessageFormat)>'
  },
  /**
   * Lookup428: cumulus_pallet_xcmp_queue::InboundState
   **/
  CumulusPalletXcmpQueueInboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup431: polkadot_parachain::primitives::XcmpMessageFormat
   **/
  PolkadotParachainPrimitivesXcmpMessageFormat: {
    _enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals']
  },
  /**
   * Lookup434: cumulus_pallet_xcmp_queue::OutboundChannelDetails
   **/
  CumulusPalletXcmpQueueOutboundChannelDetails: {
    recipient: 'u32',
    state: 'CumulusPalletXcmpQueueOutboundState',
    signalsExist: 'bool',
    firstIndex: 'u16',
    lastIndex: 'u16'
  },
  /**
   * Lookup435: cumulus_pallet_xcmp_queue::OutboundState
   **/
  CumulusPalletXcmpQueueOutboundState: {
    _enum: ['Ok', 'Suspended']
  },
  /**
   * Lookup437: cumulus_pallet_xcmp_queue::QueueConfigData
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
   * Lookup439: cumulus_pallet_xcmp_queue::pallet::Error<T>
   **/
  CumulusPalletXcmpQueueError: {
    _enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit']
  },
  /**
   * Lookup440: pallet_xcm::pallet::Error<T>
   **/
  PalletXcmError: {
    _enum: ['Unreachable', 'SendFailure', 'Filtered', 'UnweighableMessage', 'DestinationNotInvertible', 'Empty', 'CannotReanchor', 'TooManyAssets', 'InvalidOrigin', 'BadVersion', 'BadLocation', 'NoSubscription', 'AlreadySubscribed']
  },
  /**
   * Lookup441: cumulus_pallet_xcm::pallet::Error<T>
   **/
  CumulusPalletXcmError: 'Null',
  /**
   * Lookup442: cumulus_pallet_dmp_queue::ConfigData
   **/
  CumulusPalletDmpQueueConfigData: {
    maxIndividual: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup443: cumulus_pallet_dmp_queue::PageIndexData
   **/
  CumulusPalletDmpQueuePageIndexData: {
    beginUsed: 'u32',
    endUsed: 'u32',
    overweightCount: 'u64'
  },
  /**
   * Lookup446: cumulus_pallet_dmp_queue::pallet::Error<T>
   **/
  CumulusPalletDmpQueueError: {
    _enum: ['Unknown', 'OverLimit']
  },
  /**
   * Lookup449: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup450: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup451: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup452: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup455: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup457: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup459: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup461: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup462: orml_xtokens::module::Error<T>
   **/
  OrmlXtokensModuleError: {
    _enum: ['AssetHasNoReserve', 'NotCrossChainTransfer', 'InvalidDest', 'NotCrossChainTransferableCurrency', 'UnweighableMessage', 'XcmExecutionFailed', 'CannotReanchor', 'InvalidAncestry', 'InvalidAsset', 'DestinationNotInvertible', 'BadVersion', 'DistinctReserveForAssetAndFee', 'ZeroFee', 'ZeroAmount', 'TooManyAssetsBeingSent', 'AssetIndexNonExistent', 'FeeNotEnough', 'NotSupportedMultiLocation', 'MinXcmFeeNotDefined']
  },
  /**
   * Lookup463: pallet_identity::types::Registration<Balance, MaxJudgements, MaxAdditionalFields>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityIdentityInfo'
  },
  /**
   * Lookup471: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'PalletIdentityBitFlags'
  },
  /**
   * Lookup473: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyFields', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed']
  },
  /**
   * Lookup475: pallet_contracts::wasm::PrefabWasmModule<T>
   **/
  PalletContractsWasmPrefabWasmModule: {
    instructionWeightsVersion: 'Compact<u32>',
    initial: 'Compact<u32>',
    maximum: 'Compact<u32>',
    code: 'Bytes',
    determinism: 'PalletContractsWasmDeterminism'
  },
  /**
   * Lookup477: pallet_contracts::wasm::OwnerInfo<T>
   **/
  PalletContractsWasmOwnerInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>'
  },
  /**
   * Lookup478: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128'
  },
  /**
   * Lookup480: pallet_contracts::storage::DeletedContract
   **/
  PalletContractsStorageDeletedContract: {
    trieId: 'Bytes'
  },
  /**
   * Lookup482: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights',
    hostFnWeights: 'PalletContractsScheduleHostFnWeights'
  },
  /**
   * Lookup483: pallet_contracts::schedule::Limits
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
    callDepth: 'u32',
    payloadLen: 'u32'
  },
  /**
   * Lookup484: pallet_contracts::schedule::InstructionWeights<T>
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
    callIndirectPerParam: 'u32',
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
   * Lookup485: pallet_contracts::schedule::HostFnWeights<T>
   **/
  PalletContractsScheduleHostFnWeights: {
    _alias: {
      r_return: 'r#return'
    },
    caller: 'u64',
    isContract: 'u64',
    codeHash: 'u64',
    ownCodeHash: 'u64',
    callerIsOrigin: 'u64',
    address: 'u64',
    gasLeft: 'u64',
    balance: 'u64',
    valueTransferred: 'u64',
    minimumBalance: 'u64',
    blockNumber: 'u64',
    now: 'u64',
    weightToFee: 'u64',
    gas: 'u64',
    input: 'u64',
    inputPerByte: 'u64',
    r_return: 'u64',
    returnPerByte: 'u64',
    terminate: 'u64',
    random: 'u64',
    depositEvent: 'u64',
    depositEventPerTopic: 'u64',
    depositEventPerByte: 'u64',
    debugMessage: 'u64',
    setStorage: 'u64',
    setStoragePerNewByte: 'u64',
    setStoragePerOldByte: 'u64',
    setCodeHash: 'u64',
    clearStorage: 'u64',
    clearStoragePerByte: 'u64',
    containsStorage: 'u64',
    containsStoragePerByte: 'u64',
    getStorage: 'u64',
    getStoragePerByte: 'u64',
    takeStorage: 'u64',
    takeStoragePerByte: 'u64',
    transfer: 'u64',
    call: 'u64',
    delegateCall: 'u64',
    callTransferSurcharge: 'u64',
    callPerClonedByte: 'u64',
    instantiate: 'u64',
    instantiateTransferSurcharge: 'u64',
    instantiatePerInputByte: 'u64',
    instantiatePerSaltByte: 'u64',
    hashSha2256: 'u64',
    hashSha2256PerByte: 'u64',
    hashKeccak256: 'u64',
    hashKeccak256PerByte: 'u64',
    hashBlake2256: 'u64',
    hashBlake2256PerByte: 'u64',
    hashBlake2128: 'u64',
    hashBlake2128PerByte: 'u64',
    ecdsaRecover: 'u64',
    ecdsaToEthAddress: 'u64',
    reentranceCount: 'u64',
    accountReentranceCount: 'u64',
    instantiationNonce: 'u64'
  },
  /**
   * Lookup486: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidScheduleVersion', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'DuplicateTopics', 'NoChainExtension', 'DeletionQueueFull', 'DuplicateContract', 'TerminatedInConstructor', 'DebugMessageInvalidUTF8', 'ReentranceDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic']
  },
  /**
   * Lookup488: dia_oracle::dia::AssetId
   **/
  DiaOracleDiaAssetId: {
    blockchain: 'Bytes',
    symbol: 'Bytes'
  },
  /**
   * Lookup489: dia_oracle::pallet::Error<T>
   **/
  DiaOracleError: {
    _enum: ['NoCoinInfoAvailable', 'ThisAccountIdIsNotAuthorized', 'NoBatchingApiEndPoint', 'DeserializeStrError', 'DeserializeError', 'HttpRequestSendFailed', 'HttpRequestFailed', 'FailedSignedTransaction', 'UserUnableToDeauthorizeThemself', 'BadOrigin']
  },
  /**
   * Lookup496: zenlink_protocol::primitives::PairStatus<Balance, BlockNumber, sp_core::crypto::AccountId32>
   **/
  ZenlinkProtocolPrimitivesPairStatus: {
    _enum: {
      Trading: 'ZenlinkProtocolPrimitivesPairMetadata',
      Bootstrap: 'ZenlinkProtocolPrimitivesBootstrapParameter',
      Disable: 'Null'
    }
  },
  /**
   * Lookup497: zenlink_protocol::primitives::PairMetadata<Balance, sp_core::crypto::AccountId32>
   **/
  ZenlinkProtocolPrimitivesPairMetadata: {
    pairAccount: 'AccountId32',
    totalSupply: 'u128'
  },
  /**
   * Lookup498: zenlink_protocol::primitives::BootstrapParameter<Balance, BlockNumber, sp_core::crypto::AccountId32>
   **/
  ZenlinkProtocolPrimitivesBootstrapParameter: {
    targetSupply: '(u128,u128)',
    capacitySupply: '(u128,u128)',
    accumulatedSupply: '(u128,u128)',
    endBlockNumber: 'u32',
    pairAccount: 'AccountId32'
  },
  /**
   * Lookup502: zenlink_protocol::pallet::Error<T>
   **/
  ZenlinkProtocolError: {
    _enum: ['RequireProtocolAdmin', 'RequireProtocolAdminCandidate', 'InvalidFeePoint', 'UnsupportedAssetType', 'InsufficientAssetBalance', 'NativeBalanceTooLow', 'DeniedCreatePair', 'PairAlreadyExists', 'PairNotExists', 'AssetNotExists', 'InsufficientLiquidity', 'InsufficientPairReserve', 'InsufficientTargetAmount', 'ExcessiveSoldAmount', 'InvalidPath', 'IncorrectAssetAmountRange', 'Overflow', 'Deadline', 'AccountIdBadLocation', 'ExecutionFailed', 'DeniedTransferToSelf', 'TargetChainNotRegistered', 'InvariantCheckFailed', 'PairCreateForbidden', 'NotInBootstrap', 'InvalidContributionAmount', 'UnqualifiedBootstrap', 'ZeroContribute', 'DenyRefund', 'DisableBootstrap', 'NotQualifiedAccount', 'NoRewardTokens', 'ChargeRewardParamsError', 'ExistRewardsInBootstrap']
  },
  /**
   * Lookup503: currency::pallet::Error<T>
   **/
  CurrencyError: {
    _enum: ['AssetConversionError', 'BalanceConversionError', 'TryIntoIntError', 'InvalidCurrency']
  },
  /**
   * Lookup504: fee::pallet::Error<T>
   **/
  FeeError: {
    _enum: ['TryIntoIntError', 'AboveMaxExpectedValue']
  },
  /**
   * Lookup505: spacewalk_primitives::issue::IssueRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
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
   * Lookup506: spacewalk_primitives::issue::IssueRequestStatus
   **/
  SpacewalkPrimitivesIssueIssueRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup507: issue::pallet::Error<T>
   **/
  IssueError: {
    _enum: ['IssueIdNotFound', 'TimeNotExpired', 'IssueCompleted', 'IssueCancelled', 'VaultNotAcceptingNewIssues', 'InvalidExecutor', 'AmountBelowMinimumTransferAmount', 'ExceedLimitVolumeForIssueRequest']
  },
  /**
   * Lookup508: nomination::pallet::Error<T>
   **/
  NominationError: {
    _enum: ['VaultAlreadyOptedInToNomination', 'VaultNotOptedInToNomination', 'VaultNotFound', 'CannotWithdrawCollateral', 'VaultNominationDisabled', 'DepositViolatesMaxNominationRatio', 'CollateralizationTooLow']
  },
  /**
   * Lookup509: oracle::types::Version
   **/
  OracleVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup510: oracle::pallet::Error<T>
   **/
  OracleError: {
    _enum: ['InvalidOracleSource', 'MissingExchangeRate', 'TryIntoIntError']
  },
  /**
   * Lookup511: spacewalk_primitives::redeem::RedeemRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
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
   * Lookup512: redeem::pallet::Error<T>
   **/
  RedeemError: {
    _enum: ['AmountExceedsUserBalance', 'UnauthorizedRedeemer', 'UnauthorizedVault', 'TimeNotExpired', 'RedeemCancelled', 'RedeemCompleted', 'RedeemIdNotFound', 'TryIntoIntError', 'AmountBelowMinimumTransferAmount', 'ExceedLimitVolumeForIssueRequest', 'InvalidPaymentAmount']
  },
  /**
   * Lookup513: spacewalk_primitives::replace::ReplaceRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
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
   * Lookup514: spacewalk_primitives::replace::ReplaceRequestStatus
   **/
  SpacewalkPrimitivesReplaceReplaceRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup515: replace::pallet::Error<T>
   **/
  ReplaceError: {
    _enum: ['ReplaceAmountZero', 'AmountBelowDustAmount', 'NoPendingRequest', 'UnauthorizedVault', 'ReplaceSelfNotAllowed', 'VaultHasEnabledNomination', 'ReplacePeriodNotExpired', 'ReplaceCompleted', 'ReplaceCancelled', 'ReplaceIdNotFound', 'InvalidWrappedCurrency', 'InvalidPaymentAmount']
  },
  /**
   * Lookup517: security::pallet::Error<T>
   **/
  SecurityError: {
    _enum: ['ParachainNotRunning']
  },
  /**
   * Lookup520: stellar_relay::pallet::Error<T>
   **/
  StellarRelayError: {
    _enum: ['Base64DecodeError', 'BoundedVecCreationFailed', 'EnvelopeSignedByUnknownValidator', 'InvalidQuorumSetNotEnoughOrganizations', 'InvalidQuorumSetNotEnoughValidators', 'InvalidScpPledge', 'InvalidEnvelopeSignature', 'InvalidXDR', 'NoOrganizationsRegisteredForNetwork', 'NoValidatorsRegisteredForNetwork', 'InvalidTransactionSet', 'InvalidTransactionXDR', 'NoOrganizationsRegistered', 'NoValidatorsRegistered', 'OrganizationLimitExceeded', 'TransactionMemoDoesNotMatch', 'TransactionNotInTransactionSet', 'TransactionSetHashCreationFailed', 'TransactionSetHashMismatch', 'ValidatorLimitExceeded']
  },
  /**
   * Lookup521: vault_registry::types::SystemVault<Balance, spacewalk_primitives::CurrencyId>
   **/
  VaultRegistrySystemVault: {
    toBeIssuedTokens: 'u128',
    issuedTokens: 'u128',
    toBeRedeemedTokens: 'u128',
    collateral: 'u128',
    currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup522: vault_registry::types::Vault<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId, sp_arithmetic::fixed_point::FixedU128>
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
   * Lookup523: vault_registry::pallet::Error<T>
   **/
  VaultRegistryError: {
    _enum: ['InsufficientCollateral', 'ExceedingVaultLimit', 'InsufficientTokensCommitted', 'VaultBanned', 'InsufficientVaultCollateralAmount', 'VaultAlreadyRegistered', 'VaultNotFound', 'VaultNotBelowLiquidationThreshold', 'InvalidPublicKey', 'MaxNominationRatioViolation', 'CurrencyCeilingExceeded', 'VaultLiquidated', 'VaultNotRecoverable', 'NoStellarPublicKey', 'PublicKeyAlreadyRegistered', 'NoTokensIssued', 'NoVaultWithSufficientCollateral', 'NoVaultWithSufficientTokens', 'NoVaultUnderThePremiumRedeemThreshold', 'InvalidCurrency', 'GlobalThresholdNotSet', 'LiquidationCollateralThresholdNotSet', 'PremiumRedeemThresholdNotSet', 'SecureCollateralThresholdNotSet', 'CeilingNotSet', 'ThresholdNotAboveGlobalThreshold', 'TryIntoIntError', 'VaultNotAcceptingIssueRequests', 'MinimumCollateralNotSet']
  },
  /**
   * Lookup525: reward::pallet::Error<T, I>
   **/
  RewardError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'ZeroTotalStake']
  },
  /**
   * Lookup532: staking::pallet::Error<T>
   **/
  StakingError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'SlashZeroTotalStake']
  },
  /**
   * Lookup534: orml_tokens_allowance::pallet::Error<T>
   **/
  OrmlTokensAllowanceError: {
    _enum: ['Unapproved', 'ParachainNotRunning', 'CurrencyNotLive']
  },
  /**
   * Lookup536: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup537: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup539: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup540: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup543: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup544: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup545: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup546: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup549: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup550: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup551: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup552: foucoco_runtime::Runtime
   **/
  FoucocoRuntimeRuntime: 'Null'
};
