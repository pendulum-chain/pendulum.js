// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Text, u128 } from '@polkadot/types-codec';

/** @name BalanceWrapper */
export interface BalanceWrapper extends Struct {
  readonly amount: Text;
}

/** @name UnsignedFixedPoint */
export interface UnsignedFixedPoint extends u128 {}

export type PHANTOM_ORACLE = 'oracle';
