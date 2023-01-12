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
import './interfaces/augment-fixes';
import './interfaces/augment-api-query';
import './interfaces/augment-api-consts';
import './interfaces/augment-types';

export const types: RegistryTypes = pendulumTypes;

export const rpc: Record<string, Record<string, DefinitionRpc | DefinitionRpcSub>> = pendulumRpc;

export const typesAlias: Record<string, OverrideModuleType> = pendulumTypeAlias;

export const typesBundle = pendulumTypesBundle as OverrideBundleType;
