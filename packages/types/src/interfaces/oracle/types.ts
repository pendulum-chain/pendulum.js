// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Balance } from '@pendulum-chain/types/interfaces/runtime';
import type { Struct } from '@polkadot/types-codec';

/** @name BalanceWrapper */
export interface BalanceWrapper extends Struct {
  readonly amount: Balance;
}

export type PHANTOM_ORACLE = 'oracle';
