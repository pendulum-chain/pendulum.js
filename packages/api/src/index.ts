/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { derive as pendulumDerive } from '@pendulum-chain/api-derive';
import {
  rpc as pendulumRpc,
  types as pendulumTypes,
  typesAlias as pendulumTypesAlias,
  typesBundle as pendulumTypesBundle
} from '@pendulum-chain/types';
import { derive as ormlDerive } from '@open-web3/orml-api-derive';

import { ApiOptions } from '@polkadot/api/types';

export const defaultOptions: ApiOptions = {
  types: pendulumTypes,
  rpc: pendulumRpc
};

export const options = ({
  types = {},
  rpc = {},
  typesAlias = {},
  typesBundle = {},
  ...otherOptions
}: ApiOptions = {}): ApiOptions => ({
  types: {
    ...pendulumTypes,
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
  derives: {
    ...ormlDerive,
    ...pendulumDerive
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
        ...typesBundle?.spec?.shiden
      }
    }
  },
  ...otherOptions
});
