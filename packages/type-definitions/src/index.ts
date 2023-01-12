import type { OverrideVersionedType } from '@polkadot/types/types';

import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import pallets from './pallets';
import primitives from './primitives';

import pendulumVersioned from './specs/pendulum';
import amplitudeVersioned from './specs/amplitude';

const additionalOverride = {};

const pendulumDefs = {
  primitives,
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
    amplitude: getBundle(amplitudeVersioned)
  }
};

// Type overrides have priority issues
export const typesBundleForPolkadot = {
  spec: {
    pendulum: getBundle(pendulumVersioned),
    amplitude: getBundle(amplitudeVersioned)
  }
};
