export default {
  rpc: {
    getRedeemRequests: {
      description: 'Get all redeem requests for a particular account',
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
      type: 'Vec<H256>'
    },
    getVaultRedeemRequests: {
      description: 'Get all redeem requests for a particular vault',
      params: [
        {
          name: 'vaultId',
          type: 'AccountId'
        },
        {
          name: 'at',
          type: 'BlockHash',
          isHistoric: true,
          isOptional: true
        }
      ],
      type: 'Vec<H256>'
    }
  },
  types: {},
  typesAlias: {}
};
