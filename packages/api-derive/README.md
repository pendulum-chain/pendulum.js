![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)

# @pendulum-chain/api-derive

Derived API calls that combine several queries to provide convinient results. This package is part of the Pendulum SDK.

## Example

```ts
import { ApiPromise, WsProvider } from '@polkadot/api';
import { options } from '@pendulum-chain/pendulum-api';
import '@pendulum-chain/pendulum-api-derive/augmentDerives';

const getAddressEnum = (address: string) => ({ Evm: address });

const endpoint = 'wss://shiden.api.onfinality.io/public-ws';
const provider = new WsProvider(endpoint);
const address = '0x072416b9df2382a62Df34956DffB7B0aDdf668F9';
const api = new ApiPromise(options({ provider }));

(async function main() {
  await api.isReadyOrError;
  const stakers = await api.derive.dappStaking.stakers(getAddressEnum(address));
  console.log({ stakers: stakers.map((s: any) => s.toHuman()) });
})()
  .then(() => api.disconnect())
  .then(() => process.exit());
```

## Development

Clone the repo, run `yarn` and you should be good to go.

## Issues

Please see the COMMUNITY docs for contact and communication channels.
