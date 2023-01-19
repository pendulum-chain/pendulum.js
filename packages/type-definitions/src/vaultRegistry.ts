export default {
  rpc: {
    getVaultCollateral: {
      description: "Get the vault's collateral (excluding nomination)",
      params: [
        {
          name: 'vaultId',
          type: 'VaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper<Balance>'
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
      type: 'Vec<VaultId>'
    },
    getVaultTotalCollateral: {
      description: "Get the vault's collateral (including nomination)",
      params: [
        {
          name: 'vaultId',
          type: 'VaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper<Balance>'
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
      type: 'Vec<(VaultId, BalanceWrapper<Balance>)>'
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
      type: 'Vec<(VaultId, BalanceWrapper<Balance>)>'
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
      type: 'Vec<(VaultId, BalanceWrapper<Balance>)>'
    },
    getIssuableTokensFromVault: {
      description: 'Get the amount of tokens a vault can issue',
      params: [
        {
          name: 'vaultId',
          type: 'VaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper<Balance>'
    },
    getCollateralizationFromVault: {
      description: 'Get the collateralization rate of a vault',
      params: [
        {
          name: 'vaultId',
          type: 'VaultId'
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
      type: 'UnsignedFixedPoint'
    },
    getCollateralizationFromVaultAndCollateral: {
      description: 'Get the collateralization rate of a vault and collateral',
      params: [
        {
          name: 'vaultId',
          type: 'VaultId'
        },
        {
          name: 'collateral',
          type: 'BalanceWrapper<Balance>'
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
      type: 'UnsignedFixedPoint'
    },
    getRequiredCollateralForWrapped: {
      description:
        'Get the minimum amount of collateral required for the given amount of token with the current threshold and exchange rate',
      params: [
        {
          name: 'amount',
          type: 'BalanceWrapper<Balance>'
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
      type: 'BalanceWrapper<Balance>'
    },
    getRequiredCollateralForVault: {
      description:
        'Get the amount of collateral required for the given vault to be at the current SecureCollateralThreshold with the current exchange rate',
      params: [
        {
          name: 'vaultId',
          type: 'VaultId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'BalanceWrapper<Balance>'
    }
  },
  types: {
    VaultId: {
      accountId: 'AccountId32',
      currencies: 'SpacewalkPrimitivesVaultCurrencyPair'
    },
    /**
     * Lookup39: spacewalk_primitives::CurrencyId
     **/
    SpacewalkPrimitivesCurrencyId: {
      _enum: {
        Token: 'SpacewalkPrimitivesTokenSymbol',
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
     * Lookup40: spacewalk_primitives::TokenSymbol
     **/
    SpacewalkPrimitivesTokenSymbol: {
      _enum: [
        'DOT',
        'PEN',
        '__Unused2',
        '__Unused3',
        '__Unused4',
        '__Unused5',
        '__Unused6',
        '__Unused7',
        '__Unused8',
        '__Unused9',
        'KSM',
        '__Unused11',
        'AMPE'
      ]
    },
    /**
     * Lookup41: spacewalk_primitives::ForeignCurrencyId
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
        'USD'
      ]
    },
    /**
     * Lookup50: spacewalk_primitives::VaultCurrencyPair<spacewalk_primitives::CurrencyId>
     **/
    SpacewalkPrimitivesVaultCurrencyPair: {
      collateral: 'SpacewalkPrimitivesCurrencyId',
      wrapped: 'SpacewalkPrimitivesCurrencyId'
    }
    // UnsignedFixedPoint: {}
    // CurrencyId: {}
  },
  typesAlias: {
    BalanceWrapper: 'Balance',
    CurrencyId: 'SpacewalkPrimitivesCurrencyId',
    UnsignedFixedPoint: 'FixedU128'
  }
};
