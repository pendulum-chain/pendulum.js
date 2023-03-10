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
      type: 'Balance'
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
      type: 'Balance'
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
      type: 'Vec<(SpacewalkPrimitivesVaultId, Balance)>'
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
      type: 'Vec<(SpacewalkPrimitivesVaultId, Balance)>'
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
      type: 'Vec<(SpacewalkPrimitivesVaultId, Balance)>'
    },
    getIssuableTokensFromVault: {
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
      type: 'Balance'
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
          type: 'Balance'
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
          type: 'Balance'
        },
        {
          name: 'currencyId',
          type: 'CurrencyId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Balance'
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
      type: 'Balance'
    }
  },
  types: {
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
          issuer: '[u8;32]'
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
      _enum: [
        'KSM',
        'KAR',
        'AUSD',
        'BNC',
        'VsKSM',
        'HKO',
        'MOVR',
        'SDN',
        'KINT',
        'KBTC',
        'GENS',
        'XOR',
        'TEER',
        'KILT',
        'PHA',
        'ZTG',
        'USD',
        '__Unused17',
        '__Unused18',
        '__Unused19',
        'DOT'
      ]
    },
    /**
     * Lookup49: spacewalk_primitives::VaultId<sp_core::crypto::AccountId32, spacewalk_primitives::CurrencyId>
     **/
    SpacewalkPrimitivesVaultId: {
      accountId: 'AccountId32',
      currencies: 'SpacewalkPrimitivesVaultCurrencyPair'
    },
    /**
     * Lookup50: spacewalk_primitives::VaultCurrencyPair<spacewalk_primitives::CurrencyId>
     **/
    SpacewalkPrimitivesVaultCurrencyPair: {
      collateral: 'SpacewalkPrimitivesCurrencyId',
      wrapped: 'SpacewalkPrimitivesCurrencyId'
    }
  },
  typesAlias: {}
};
