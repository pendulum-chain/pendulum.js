export default {
  rpc: {
    getVaultCollateral: {
      description: "Get the vault's collateral (excluding nomination)",
      params: [
        {
          name: 'vaultId',
          type: 'SpacewalkPrimitivesVaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper'
    },
    getVaultsByAccountId: {
      description: "Get all the vaultIds registered by a vault's accountId",
      params: [
        {
          name: 'accountId',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<SpacewalkPrimitivesVaultId>'
    },
    getVaultTotalCollateral: {
      description: "Get the vault's collateral (including nomination)",
      params: [
        {
          name: 'vaultId',
          type: 'SpacewalkPrimitivesVaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper'
    },
    getPremiumRedeemVaults: {
      description: 'Get all vaults below the premium redeem threshold, ordered in descending order of this amount',
      params: [
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<(SpacewalkPrimitivesVaultId, BalanceWrapper)>'
    },
    getVaultsWithIssuableTokens: {
      description: 'Get all vaults with non-zero issuable tokens, ordered in descending order of this amount',
      params: [
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<(SpacewalkPrimitivesVaultId, BalanceWrapper)>'
    },
    getVaultsWithRedeemableTokens: {
      description: 'Get all vaults with non-zero redeemable tokens, ordered in descending order of this amount',
      params: [
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<(SpacewalkPrimitivesVaultId, BalanceWrapper)>'
    },
    getIssueableTokensFromVault: {
      description: 'Get the amount of tokens a vault can issue',
      params: [
        {
          name: 'vaultId',
          type: 'SpacewalkPrimitivesVaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper'
    },
    getCollateralizationFromVault: {
      description: 'Get the collateralization rate of a vault',
      params: [
        {
          name: 'vaultId',
          type: 'SpacewalkPrimitivesVaultId'
        },
        {
          name: 'onlyIssued',
          type: 'bool'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'FixedU128'
    },
    getCollateralizationFromVaultAndCollateral: {
      description: 'Get the collateralization rate of a vault and collateral',
      params: [
        {
          name: 'vaultId',
          type: 'SpacewalkPrimitivesVaultId'
        },
        {
          name: 'collateral',
          type: 'BalanceWrapper'
        },
        {
          name: 'onlyIssued',
          type: 'bool'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'FixedU128'
    },
    getRequiredCollateralForWrapped: {
      description:
        'Get the minimum amount of collateral required for the given amount of token with the current threshold and exchange rate',
      params: [
        {
          name: 'amount',
          type: 'BalanceWrapper'
        },
        {
          name: 'currencyId',
          type: 'SpacewalkPrimitivesCurrencyId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper'
    },
    getRequiredCollateralForVault: {
      description:
        'Get the amount of collateral required for the given vault to be at the current SecureCollateralThreshold with the current exchange rate',
      params: [
        {
          name: 'vaultId',
          type: 'SpacewalkPrimitivesVaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper'
    }
  },
  types: {
    /**
     * Lookup120: spacewalk_primitives::CurrencyId
     **/
    SpacewalkPrimitivesCurrencyId: {
      _enum: {
        Native: 'Null',
        XCM: 'u8',
        Stellar: 'SpacewalkPrimitivesAsset',
        ZenlinkLPToken: '(u8,u8,u8,u8)'
      }
    },
    /**
     * Lookup121: spacewalk_primitives::Asset
     **/
    SpacewalkPrimitivesAsset: {
      _enum: {
        StellarNative: 'Null',
        AlphaNum4: {
          code: '[u8;4]',
          issuer: '[u8;32]'
        },
        AlphaNum12: {
          code: '[u8;12]',
          issuer: '[u8;32]'
        }
      }
    },
    /**
     * Lookup138: spacewalk_primitives::VaultId<sp_core::crypto::AccountId32, spacewalk_primitives::CurrencyId>
     **/
    SpacewalkPrimitivesVaultId: {
      accountId: 'AccountId32',
      currencies: 'SpacewalkPrimitivesVaultCurrencyPair'
    },
    /**
     * Lookup139: spacewalk_primitives::VaultCurrencyPair<spacewalk_primitives::CurrencyId>
     **/
    SpacewalkPrimitivesVaultCurrencyPair: {
      collateral: 'SpacewalkPrimitivesCurrencyId',
      wrapped: 'SpacewalkPrimitivesCurrencyId'
    }
  },
  typesAlias: {}
};
