export default {
  rpc: {
    currencyToUsd: {
      description: 'Get the USD value of a currency',
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
    usdToCurrency: {
      description: 'Get the currency value of a USD amount',
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
    getExchangeRate: {
      description: 'Get the exchange rate of the given currencyId to USD',
      params: [
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
      type: 'UnsignedFixedPoint'
    }
  },
  types: {
    BalanceWrapper: {
      amount: 'String'
    },
    UnsignedFixedPoint: 'u128'
  },
  typesAlias: {}
};
