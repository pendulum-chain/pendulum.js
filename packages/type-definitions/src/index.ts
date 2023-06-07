import type { OverrideVersionedType } from '@polkadot/types/types';

import { jsonrpcFromDefs, typesAliasFromDefs, typesFromDefs } from '@open-web3/orml-type-definitions/utils';
import issue from './issue';
import redeem from './redeem';
import replace from './replace';
import oracle from './oracle';
import primitives from './primitives';
import vaultRegistry from './vaultRegistry';

import pendulumVersioned from './specs/pendulum';
import amplitudeVersioned from './specs/amplitude';

const additionalOverride = {};

const pendulumDefs = {
  primitives,
  issue,
  redeem,
  replace,
  oracle,
  vaultRegistry
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
