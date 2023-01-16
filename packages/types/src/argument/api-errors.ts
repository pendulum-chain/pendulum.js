// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
  interface AugmentedErrors<ApiType extends ApiTypes> {
    balances: {
      /**
       * Beneficiary account must pre-exist
       **/
      DeadAccount: AugmentedError<ApiType>;
      /**
       * Value too low to create account due to existential deposit
       **/
      ExistentialDeposit: AugmentedError<ApiType>;
      /**
       * A vesting schedule already exists for this account
       **/
      ExistingVestingSchedule: AugmentedError<ApiType>;
      /**
       * Balance too low to send value.
       **/
      InsufficientBalance: AugmentedError<ApiType>;
      /**
       * Transfer/payment would kill account
       **/
      KeepAlive: AugmentedError<ApiType>;
      /**
       * Account liquidity restrictions prevent withdrawal
       **/
      LiquidityRestrictions: AugmentedError<ApiType>;
      /**
       * Number of named reserves exceed MaxReserves
       **/
      TooManyReserves: AugmentedError<ApiType>;
      /**
       * Vesting balance too high to send value
       **/
      VestingBalance: AugmentedError<ApiType>;
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
      InvalidCurrency: AugmentedError<ApiType>;
      TryIntoIntError: AugmentedError<ApiType>;
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
      /**
       * Unable to convert value.
       **/
      TryIntoIntError: AugmentedError<ApiType>;
      /**
       * Generic error
       **/
      [key: string]: AugmentedError<ApiType>;
    };
    grandpa: {
      /**
       * Attempt to signal GRANDPA change with one already pending.
       **/
      ChangePending: AugmentedError<ApiType>;
      /**
       * A given equivocation report is valid but already previously reported.
       **/
      DuplicateOffenceReport: AugmentedError<ApiType>;
      /**
       * An equivocation proof provided as part of an equivocation report is invalid.
       **/
      InvalidEquivocationProof: AugmentedError<ApiType>;
      /**
       * A key ownership proof provided as part of an equivocation report is invalid.
       **/
      InvalidKeyOwnershipProof: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA pause when the authority set isn't live
       * (either paused or already pending pause).
       **/
      PauseFailed: AugmentedError<ApiType>;
      /**
       * Attempt to signal GRANDPA resume when the authority set isn't paused
       * (either live or already pending resume).
       **/
      ResumeFailed: AugmentedError<ApiType>;
      /**
       * Cannot signal forced change so soon after last.
       **/
      TooSoon: AugmentedError<ApiType>;
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
       * Exceeds the volume limit for an issue request.
       **/
      ExceedLimitVolumeForIssueRequest: AugmentedError<ApiType>;
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
    stellarRelay: {
      Base64DecodeError: AugmentedError<ApiType>;
      BoundedVecCreationFailed: AugmentedError<ApiType>;
      EnvelopeSignedByUnknownValidator: AugmentedError<ApiType>;
      InvalidEnvelopeSignature: AugmentedError<ApiType>;
      InvalidQuorumSetNotEnoughOrganizations: AugmentedError<ApiType>;
      InvalidQuorumSetNotEnoughValidators: AugmentedError<ApiType>;
      InvalidScpPledge: AugmentedError<ApiType>;
      InvalidTransactionSet: AugmentedError<ApiType>;
      InvalidTransactionXDR: AugmentedError<ApiType>;
      InvalidXDR: AugmentedError<ApiType>;
      NoOrganizationsRegistered: AugmentedError<ApiType>;
      NoOrganizationsRegisteredForNetwork: AugmentedError<ApiType>;
      NoValidatorsRegistered: AugmentedError<ApiType>;
      NoValidatorsRegisteredForNetwork: AugmentedError<ApiType>;
      OrganizationLimitExceeded: AugmentedError<ApiType>;
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
    vaultRewards: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
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
    vaultStaking: {
      /**
       * Balance not sufficient to withdraw stake.
       **/
      InsufficientFunds: AugmentedError<ApiType>;
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
  } // AugmentedErrors
} // declare module
