import { derive as ormlDerives } from '@open-web3/orml-api-derive';
import { derive as pendulumDerives } from '@pendulum-chain/api-derive';
import {
  rpc as pendulumRpc,
  types as pendulumTypes,
  typesAlias as pendulumTypesAlias,
  typesBundle as pendulumTypesBundle,
  lookupTypes as pendulumLookupTypes
} from '@pendulum-chain/types';
import { ApiOptions } from '@polkadot/api/types';
import { RegistryTypes } from '@polkadot/types/types';
import { runtime as pendulumRuntime } from './runtime';

export const defaultOptions: ApiOptions = {
  types: pendulumTypes,
  rpc: pendulumRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  runtime = {},
  signedExtensions,
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...pendulumTypes,
    ...(pendulumLookupTypes as unknown as RegistryTypes), // TODO: RegistryTypes's own issue?
    ...types
  },
  rpc: {
    ...pendulumRpc,
    ...rpc
  },
  typesAlias: {
    ...pendulumTypesAlias,
    ...typesAlias
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  derives: {
    ...pendulumDerives,
    ...ormlDerives
  },
  typesBundle: {
    ...typesBundle,
    spec: {
      ...typesBundle.spec,
      pendulum: {
        ...pendulumTypesBundle?.spec?.pendulum,
        ...typesBundle?.spec?.pendulum
      },
      amplitude: {
        ...pendulumTypesBundle?.spec?.amplitude,
        ...typesBundle?.spec?.amplitude
      }
    }
  },
  signedExtensions: {
    ...signedExtensions
  },
  runtime: {
    ...pendulumRuntime,
    ...runtime
  },
  ...otherOptions
});
