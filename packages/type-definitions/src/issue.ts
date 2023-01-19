export default {
  rpc: {
    getIssueRequests: {
      description: 'Get all issue requests for a particular account',
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
    getVaultIssueRequests: {
      description: 'Get all issue requests for a particular vault',
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
