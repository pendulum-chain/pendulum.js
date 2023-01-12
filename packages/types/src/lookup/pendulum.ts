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
   * Lookup18: frame_system::EventRecord<spacewalk_runtime_standalone::RuntimeEvent, primitive_types::H256>
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
      Arithmetic: 'SpRuntimeArithmeticError',
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
   * Lookup27: sp_runtime::ArithmeticError
   **/
  SpRuntimeArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup28: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup29: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup32: sp_finality_grandpa::app::Public
   **/
  SpFinalityGrandpaAppPublic: 'SpCoreEd25519Public',
  /**
   * Lookup33: sp_core::ed25519::Public
   **/
  SpCoreEd25519Public: '[u8;32]',
  /**
   * Lookup34: pallet_sudo::pallet::Event<T>
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
   * Lookup38: orml_tokens::module::Event<T>
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
   * Lookup39: spacewalk_primitives::CurrencyId
   **/
  SpacewalkPrimitivesCurrencyId: {
    _enum: {
      Token: 'SpacewalkPrimitivesTokenSymbol',
      ForeignAsset: 'u32',
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
   * Lookup40: spacewalk_primitives::TokenSymbol
   **/
  SpacewalkPrimitivesTokenSymbol: {
    _enum: ['DOT', 'PEN', '__Unused2', '__Unused3', '__Unused4', '__Unused5', '__Unused6', '__Unused7', '__Unused8', '__Unused9', 'KSM', '__Unused11', 'AMPE']
  },
  /**
   * Lookup42: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup44: pallet_balances::pallet::Event<T, I>
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
   * Lookup45: pallet_transaction_payment::pallet::Event<T>
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
   * Lookup46: stellar_relay::pallet::Event<T>
   **/
  StellarRelayEvent: {
    _enum: {
      UpdateTier1ValidatorSet: {
        newValidatorsEnactmentBlockHeight: 'u32'
      }
    }
  },
  /**
   * Lookup47: reward::pallet::Event<T, I>
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
   * Lookup48: spacewalk_primitives::VaultId<sp_core::crypto::AccountId32, spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesVaultId: {
    accountId: 'AccountId32',
    currencies: 'SpacewalkPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup49: spacewalk_primitives::VaultCurrencyPair<spacewalk_primitives::CurrencyId>
   **/
  SpacewalkPrimitivesVaultCurrencyPair: {
    collateral: 'SpacewalkPrimitivesCurrencyId',
    wrapped: 'SpacewalkPrimitivesCurrencyId'
  },
  /**
   * Lookup52: staking::pallet::Event<T>
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
   * Lookup53: security::pallet::Event<T>
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
   * Lookup54: security::types::StatusCode
   **/
  SecurityStatusCode: {
    _enum: ['Running', 'Error', 'Shutdown']
  },
  /**
   * Lookup56: security::types::ErrorCode
   **/
  SecurityErrorCode: {
    _enum: ['None', 'OracleOffline']
  },
  /**
   * Lookup57: vault_registry::pallet::Event<T>
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
   * Lookup58: vault_registry::types::VaultStatus
   **/
  VaultRegistryVaultStatus: {
    _enum: {
      Active: 'bool',
      Liquidated: 'Null'
    }
  },
  /**
   * Lookup60: oracle::pallet::Event<T>
   **/
  OracleEvent: {
    _enum: {
      FeedValues: {
        oracleId: 'AccountId32',
        values: 'Vec<(SpacewalkPrimitivesOracleKey,u128)>',
      },
      AggregateUpdated: {
        values: 'Vec<(SpacewalkPrimitivesOracleKey,Option<u128>)>',
      },
      OracleAdded: {
        oracleId: 'AccountId32',
        name: 'Bytes',
      },
      OracleRemoved: {
        oracleId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup63: spacewalk_primitives::oracle::Key
   **/
  SpacewalkPrimitivesOracleKey: {
    _enum: {
      ExchangeRate: 'SpacewalkPrimitivesCurrencyId',
      FeeEstimation: 'Null'
    }
  },
  /**
   * Lookup68: issue::pallet::Event<T>
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
   * Lookup70: redeem::pallet::Event<T>
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
   * Lookup71: spacewalk_primitives::redeem::RedeemRequestStatus
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
   * Lookup72: replace::pallet::Event<T>
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
   * Lookup73: nomination::pallet::Event<T>
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
   * Lookup74: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup78: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup81: frame_system::pallet::Call<T>
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
   * Lookup85: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup86: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup87: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup89: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup90: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup91: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup92: sp_version::RuntimeVersion
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
   * Lookup97: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered']
  },
  /**
   * Lookup98: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup99: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup100: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpFinalityGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup103: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpFinalityGrandpaEquivocationProof',
        keyOwnerProof: 'SpCoreVoid',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup104: sp_finality_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpFinalityGrandpaEquivocation'
  },
  /**
   * Lookup105: sp_finality_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpFinalityGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup106: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup107: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup108: sp_finality_grandpa::app::Signature
   **/
  SpFinalityGrandpaAppSignature: 'SpCoreEd25519Signature',
  /**
   * Lookup109: sp_core::ed25519::Signature
   **/
  SpCoreEd25519Signature: '[u8;64]',
  /**
   * Lookup112: finality_grandpa::Equivocation<sp_finality_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_finality_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpFinalityGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpFinalityGrandpaAppSignature)'
  },
  /**
   * Lookup113: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup115: sp_core::Void
   **/
  SpCoreVoid: 'Null',
  /**
   * Lookup116: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup117: pallet_sudo::pallet::Call<T>
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
   * Lookup119: orml_tokens::module::Call<T>
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
   * Lookup124: orml_currencies::module::Call<T>
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
   * Lookup125: pallet_balances::pallet::Call<T, I>
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
   * Lookup126: stellar_relay::pallet::Call<T>
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
   * Lookup128: stellar_relay::traits::Validator<OrganizationId>
   **/
  StellarRelayValidator: {
    name: 'Bytes',
    publicKey: 'Bytes',
    organizationId: 'u128'
  },
  /**
   * Lookup131: stellar_relay::traits::Organization<OrganizationId>
   **/
  StellarRelayOrganization: {
    id: 'u128',
    name: 'Bytes'
  },
  /**
   * Lookup132: security::pallet::Call<T>
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
   * Lookup133: vault_registry::pallet::Call<T>
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
   * Lookup134: oracle::pallet::Call<T>
   **/
  OracleCall: {
    _enum: {
      feed_values: {
        values: 'Vec<(SpacewalkPrimitivesOracleKey,u128)>',
      },
      insert_authorized_oracle: {
        accountId: 'AccountId32',
        name: 'Bytes',
      },
      remove_authorized_oracle: {
        accountId: 'AccountId32'
      }
    }
  },
  /**
   * Lookup135: issue::pallet::Call<T>
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
   * Lookup136: redeem::pallet::Call<T>
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
   * Lookup137: replace::pallet::Call<T>
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
   * Lookup138: fee::pallet::Call<T>
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
   * Lookup139: nomination::pallet::Call<T>
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
   * Lookup140: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup143: orml_tokens::BalanceLock<Balance>
   **/
  OrmlTokensBalanceLock: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup145: orml_tokens::AccountData<Balance>
   **/
  OrmlTokensAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128'
  },
  /**
   * Lookup147: orml_tokens::ReserveData<ReserveIdentifier, Balance>
   **/
  OrmlTokensReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup149: orml_tokens::module::Error<T>
   **/
  OrmlTokensModuleError: {
    _enum: ['BalanceTooLow', 'AmountIntoBalanceFailed', 'LiquidityRestrictions', 'MaxLocksExceeded', 'KeepAlive', 'ExistentialDeposit', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup150: orml_currencies::module::Error<T>
   **/
  OrmlCurrenciesModuleError: {
    _enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed']
  },
  /**
   * Lookup152: pallet_balances::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup153: pallet_balances::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup156: pallet_balances::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup158: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'KeepAlive', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves']
  },
  /**
   * Lookup159: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup162: stellar_relay::pallet::Error<T>
   **/
  StellarRelayError: {
    _enum: ['Base64DecodeError', 'BoundedVecCreationFailed', 'EnvelopeSignedByUnknownValidator', 'InvalidQuorumSetNotEnoughOrganizations', 'InvalidQuorumSetNotEnoughValidators', 'InvalidScpPledge', 'InvalidEnvelopeSignature', 'InvalidXDR', 'NoOrganizationsRegisteredForNetwork', 'NoValidatorsRegisteredForNetwork', 'InvalidTransactionSet', 'InvalidTransactionXDR', 'NoOrganizationsRegistered', 'NoValidatorsRegistered', 'OrganizationLimitExceeded', 'TransactionNotInTransactionSet', 'TransactionSetHashCreationFailed', 'TransactionSetHashMismatch', 'ValidatorLimitExceeded']
  },
  /**
   * Lookup164: reward::pallet::Error<T, I>
   **/
  RewardError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'ZeroTotalStake']
  },
  /**
   * Lookup171: staking::pallet::Error<T>
   **/
  StakingError: {
    _enum: ['TryIntoIntError', 'InsufficientFunds', 'SlashZeroTotalStake']
  },
  /**
   * Lookup172: currency::pallet::Error<T>
   **/
  CurrencyError: {
    _enum: ['AssetConversionError', 'BalanceConversionError', 'TryIntoIntError', 'InvalidCurrency']
  },
  /**
   * Lookup176: security::pallet::Error<T>
   **/
  SecurityError: {
    _enum: ['ParachainNotRunning']
  },
  /**
   * Lookup177: vault_registry::types::SystemVault<Balance, spacewalk_primitives::CurrencyId>
   **/
  VaultRegistrySystemVault: {
    toBeIssuedTokens: 'u128',
    issuedTokens: 'u128',
    toBeRedeemedTokens: 'u128',
    collateral: 'u128',
    currencyPair: 'SpacewalkPrimitivesVaultCurrencyPair'
  },
  /**
   * Lookup178: vault_registry::types::Vault<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId, sp_arithmetic::fixed_point::FixedU128>
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
   * Lookup179: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup180: vault_registry::pallet::Error<T>
   **/
  VaultRegistryError: {
    _enum: ['InsufficientCollateral', 'ExceedingVaultLimit', 'InsufficientTokensCommitted', 'VaultBanned', 'InsufficientVaultCollateralAmount', 'VaultAlreadyRegistered', 'VaultNotFound', 'VaultNotBelowLiquidationThreshold', 'InvalidPublicKey', 'MaxNominationRatioViolation', 'CurrencyCeilingExceeded', 'VaultLiquidated', 'VaultNotRecoverable', 'NoStellarPublicKey', 'PublicKeyAlreadyRegistered', 'NoTokensIssued', 'NoVaultWithSufficientCollateral', 'NoVaultWithSufficientTokens', 'NoVaultUnderThePremiumRedeemThreshold', 'InvalidCurrency', 'GlobalThresholdNotSet', 'LiquidationCollateralThresholdNotSet', 'PremiumRedeemThresholdNotSet', 'SecureCollateralThresholdNotSet', 'CeilingNotSet', 'ThresholdNotAboveGlobalThreshold', 'TryIntoIntError', 'VaultNotAcceptingIssueRequests', 'MinimumCollateralNotSet']
  },
  /**
   * Lookup182: oracle::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
   **/
  OracleTimestampedValue: {
    value: 'u128',
    timestamp: 'u64'
  },
  /**
   * Lookup183: oracle::types::Version
   **/
  OracleVersion: {
    _enum: ['V0']
  },
  /**
   * Lookup184: oracle::pallet::Error<T>
   **/
  OracleError: {
    _enum: ['InvalidOracleSource', 'MissingExchangeRate', 'TryIntoIntError']
  },
  /**
   * Lookup185: spacewalk_primitives::issue::IssueRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
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
   * Lookup186: spacewalk_primitives::issue::IssueRequestStatus
   **/
  SpacewalkPrimitivesIssueIssueRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup187: issue::pallet::Error<T>
   **/
  IssueError: {
    _enum: ['IssueIdNotFound', 'TimeNotExpired', 'IssueCompleted', 'IssueCancelled', 'VaultNotAcceptingNewIssues', 'InvalidExecutor', 'AmountBelowMinimumTransferAmount', 'ExceedLimitVolumeForIssueRequest']
  },
  /**
   * Lookup188: spacewalk_primitives::redeem::RedeemRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
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
   * Lookup189: redeem::pallet::Error<T>
   **/
  RedeemError: {
    _enum: ['AmountExceedsUserBalance', 'UnauthorizedRedeemer', 'UnauthorizedVault', 'TimeNotExpired', 'RedeemCancelled', 'RedeemCompleted', 'RedeemIdNotFound', 'TryIntoIntError', 'AmountBelowMinimumTransferAmount', 'ExceedLimitVolumeForIssueRequest']
  },
  /**
   * Lookup190: spacewalk_primitives::replace::ReplaceRequest<sp_core::crypto::AccountId32, BlockNumber, Balance, spacewalk_primitives::CurrencyId>
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
   * Lookup191: spacewalk_primitives::replace::ReplaceRequestStatus
   **/
  SpacewalkPrimitivesReplaceReplaceRequestStatus: {
    _enum: ['Pending', 'Completed', 'Cancelled']
  },
  /**
   * Lookup192: replace::pallet::Error<T>
   **/
  ReplaceError: {
    _enum: ['ReplaceAmountZero', 'AmountBelowDustAmount', 'NoPendingRequest', 'UnauthorizedVault', 'ReplaceSelfNotAllowed', 'VaultHasEnabledNomination', 'ReplacePeriodNotExpired', 'ReplaceCompleted', 'ReplaceCancelled', 'ReplaceIdNotFound', 'InvalidWrappedCurrency']
  },
  /**
   * Lookup193: fee::pallet::Error<T>
   **/
  FeeError: {
    _enum: ['TryIntoIntError', 'AboveMaxExpectedValue']
  },
  /**
   * Lookup194: nomination::pallet::Error<T>
   **/
  NominationError: {
    _enum: ['VaultAlreadyOptedInToNomination', 'VaultNotOptedInToNomination', 'VaultNotFound', 'CannotWithdrawCollateral', 'VaultNominationDisabled', 'DepositViolatesMaxNominationRatio', 'CollateralizationTooLow']
  },
  /**
   * Lookup196: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: 'SpCoreEd25519Signature',
      Sr25519: 'SpCoreSr25519Signature',
      Ecdsa: 'SpCoreEcdsaSignature'
    }
  },
  /**
   * Lookup197: sp_core::sr25519::Signature
   **/
  SpCoreSr25519Signature: '[u8;64]',
  /**
   * Lookup198: sp_core::ecdsa::Signature
   **/
  SpCoreEcdsaSignature: '[u8;65]',
  /**
   * Lookup201: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup202: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup203: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup206: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup207: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup208: pallet_transaction_payment::ChargeTransactionPayment<T>
   **/
  PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
  /**
   * Lookup209: spacewalk_runtime_standalone::Runtime
   **/
  SpacewalkRuntimeStandaloneRuntime: 'Null'
};
