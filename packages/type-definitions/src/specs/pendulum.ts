import type { OverrideVersionedType } from '@polkadot/types/types';

const sharedTypes = {};

const definitions: OverrideVersionedType[] = [
  {
    minmax: [0, undefined],
    types: {
      ...sharedTypes
    }
  }
];

export default definitions;
