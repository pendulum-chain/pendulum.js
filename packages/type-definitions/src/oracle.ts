export default {
  rpc: {
    currencyToUsd: {
      description: 'Get the USD value of a currency',
      params: [
        {
          name: 'amount',
          type: 'BalanceWrapper',
        },
        {
          name: 'currencyId',
          type: 'CurrencyId',
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
      type: "BalanceWrapper"
    },
    usdToCurrency: {
      description: 'Get the currency value of a USD amount',
      params: [
        {
          name: 'amount',
          type: 'BalanceWrapper',
        },
        {
          name: 'currencyId',
          type: 'CurrencyId',
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }],
      type: "BalanceWrapper"
    },

  },
  types: {
    BalanceWrapper: {
      amount: "Balance",
    }
  },
  typesAlias: {}
};
