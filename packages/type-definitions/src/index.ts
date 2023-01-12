import type { OverrideVersionedType } from '@polkadot/types/types';

import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import pallets from './pallets';

import pendulumVersioned from './specs/pendulum';
import amplitudeVersioned from './specs/amplitude';

// FIXME: currently we cannot override this in runtime definitions because the code generation script cannot handle overrides
// This will make it behave correctly in runtime, but wrong types in TS definition.
const additionalOverride = {
  Address: 'AccountId',
  LookupSource: 'AccountId',
  PalletsOrigin: {
    _enum: {
      System: 'SystemOrigin',
      Timestamp: 'Null',
      RandomnessCollectiveFlip: 'Null',
      Balances: 'Null',
      // Vesting: 'Null',
      // Treasury: 'Null',
      Utility: 'Null',
      // Multisig: 'Null',
      // Recovery: 'Null',
      // Proxy: 'Null',
      // Scheduler: 'Null',
      Indices: 'Null',
      Authorship: 'Null',
      Aura: 'Null',
      Grandpa: 'Null',
      Staking: 'Null',
      Session: 'Null',
      Historical: 'Null',
      // Council: 'CollectiveOrigin',
      // Contracts: 'Null',
      // EVM: 'Null',
      Sudo: 'Null',
      TransactionPayment: 'Null'
    }
  }
};

const pendulumDefs = {
  pallets
};

export const types = {
  ...typesFromDefs(pendulumDefs),
  ...additionalOverride
};

export const rpc = jsonrpcFromDefs(pendulumDefs, {});
export const typesAlias = typesAliasFromDefs(pendulumDefs, {});

function getBundle(versioned: OverrideVersionedType[]) {
  return {
    rpc,
    instances: {
      council: ['generalCouncil']
    },
    types: [...versioned].map((version) => {
      return {
        minmax: version.minmax,
        types: {
          ...types,
          ...version.types
        }
      };
    }),
    alias: typesAlias
  };
}

export const typesBundle = {
  spec: {
    pendulum: getBundle(pendulumVersioned),
    shibuya: getBundle(amplitudeVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    pendulum: getBundle(pendulumVersioned),
    shibuya: getBundle(amplitudeVersioned)
  }
};
