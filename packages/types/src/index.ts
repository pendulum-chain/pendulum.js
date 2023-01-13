import {
  typesBundle as pendulumTypesBundle,
  types as pendulumTypes,
  typesAlias as pendulumTypeAlias,
  rpc as pendulumRpc
} from '@pendulum-chain/type-definitions';
import {
  OverrideBundleType,
  OverrideModuleType,
  RegistryTypes,
  DefinitionRpc,
  DefinitionRpcSub
} from '@polkadot/types/types';

import './argument/api';
import './lookup/types';

export * as lookupTypes from './lookup';

// export * from './interfaces/augment-api-mobx';

export const types: RegistryTypes = pendulumTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = pendulumRpc;

export const typesAlias: Record<string, OverrideModuleType> = pendulumTypeAlias;

export const typesBundle = pendulumTypesBundle as unknown as OverrideBundleType;
