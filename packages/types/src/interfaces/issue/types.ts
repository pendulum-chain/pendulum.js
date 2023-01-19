// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { AccountId32 } from '@pendulum-chain/types/interfaces/runtime';
import type { Enum, Struct, U8aFixed } from '@polkadot/types-codec';

/** @name SpacewalkPrimitivesCurrencyId */
export interface SpacewalkPrimitivesCurrencyId extends Enum {
  readonly isToken: boolean;
  readonly asToken: SpacewalkPrimitivesTokenSymbol;
  readonly isXcm: boolean;
  readonly asXcm: SpacewalkPrimitivesForeignCurrencyId;
  readonly isNative: boolean;
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
  readonly type: 'Token' | 'Xcm' | 'Native' | 'StellarNative' | 'AlphaNum4' | 'AlphaNum12';
}

/** @name SpacewalkPrimitivesForeignCurrencyId */
export interface SpacewalkPrimitivesForeignCurrencyId extends Enum {
  readonly isKsm: boolean;
  readonly isKar: boolean;
  readonly isAusd: boolean;
  readonly isBnc: boolean;
  readonly isVsKSM: boolean;
  readonly isHko: boolean;
  readonly isMovr: boolean;
  readonly isSdn: boolean;
  readonly isKint: boolean;
  readonly isKbtc: boolean;
  readonly isGens: boolean;
  readonly isXor: boolean;
  readonly isTeer: boolean;
  readonly isKilt: boolean;
  readonly isPha: boolean;
  readonly isZtg: boolean;
  readonly isUsd: boolean;
  readonly type: 'Ksm' | 'Kar' | 'Ausd' | 'Bnc' | 'VsKSM' | 'Hko' | 'Movr' | 'Sdn' | 'Kint' | 'Kbtc' | 'Gens' | 'Xor' | 'Teer' | 'Kilt' | 'Pha' | 'Ztg' | 'Usd';
}

/** @name SpacewalkPrimitivesTokenSymbol */
export interface SpacewalkPrimitivesTokenSymbol extends Enum {
  readonly isDot: boolean;
  readonly isPen: boolean;
  readonly isKsm: boolean;
  readonly isAmpe: boolean;
  readonly type: 'Dot' | 'Pen' | 'Ksm' | 'Ampe';
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

export type PHANTOM_ISSUE = 'issue';
