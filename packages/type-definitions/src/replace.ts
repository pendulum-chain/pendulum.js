export default {
  rpc: {
    getOldVaultReplaceRequests: {
      description: 'Get all replace requests from a particular vault',
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
    getNewVaultReplaceRequests: {
      description: 'Get all replace requests to a particular vault',
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
