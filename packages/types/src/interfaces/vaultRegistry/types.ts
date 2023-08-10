// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId32 } from '@pendulum-chain/types/interfaces/runtime';
import type { Enum, Struct, U8aFixed, u8 } from '@polkadot/types-codec';
import type { ITuple } from '@polkadot/types-codec/types';

/** @name SpacewalkPrimitivesAsset */
export interface SpacewalkPrimitivesAsset extends Enum {
  readonly isStellarNative: boolean;
  readonly isAlphaNum4: boolean;
  readonly asAlphaNum4: {
    readonly code: U8aFixed;
    readonly issuer: U8aFixed;
  } & Struct;
  readonly isAlphaNum12: boolean;
  readonly asAlphaNum12: {
    readonly code: U8aFixed;
    readonly issuer: U8aFixed;
  } & Struct;
  readonly type: 'StellarNative' | 'AlphaNum4' | 'AlphaNum12';
}

/** @name SpacewalkPrimitivesCurrencyId */
export interface SpacewalkPrimitivesCurrencyId extends Enum {
  readonly isNative: boolean;
  readonly isXcm: boolean;
  readonly asXcm: u8;
  readonly isStellar: boolean;
  readonly asStellar: SpacewalkPrimitivesAsset;
  readonly isZenlinkLPToken: boolean;
  readonly asZenlinkLPToken: ITuple<[u8, u8, u8, u8]>;
  readonly type: 'Native' | 'Xcm' | 'Stellar' | 'ZenlinkLPToken';
}

/** @name SpacewalkPrimitivesVaultCurrencyPair */
export interface SpacewalkPrimitivesVaultCurrencyPair extends Struct {
  readonly collateral: SpacewalkPrimitivesCurrencyId;
  readonly wrapped: SpacewalkPrimitivesCurrencyId;
}

/** @name SpacewalkPrimitivesVaultId */
export interface SpacewalkPrimitivesVaultId extends Struct {
  readonly accountId: AccountId32;
  readonly currencies: SpacewalkPrimitivesVaultCurrencyPair;
}

export type PHANTOM_VAULTREGISTRY = 'vaultRegistry';
