![license](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache&style=flat-square)

# pendulum.js

This library provides additional typing information for user to access Pendulum's modules by
using [polkadot.js](https://github.com/polkadot-js/api)

# Getting Started

- Install dependencies

**📝NOTE: @polkadot/api version is pinned**

```bash
yarn add @polkadot/api @pendulum-chain/api
```

- Create API instance

```ts
import {ApiPromise} from '@polkadot/api';
import {WsProvider} from '@polkadot/rpc-provider';
import {options} from '@pendulum-chain/api';

async function main() {
  const provider = new WsProvider('ws://localhost:9944');
  // OR
  // const provider = new WsProvider('wss://shiden.api.onfinality.io/public-ws');
  const api = new ApiPromise(options({provider}));
  await api.isReady;

  // Use the api
  // For example:
  console.log((await api.rpc.system.properties()).toHuman());

  process.exit(0);
}

main()
```

- Use api to interact with node.

```ts
// query and display account data
const data = await api.query.system.account('5F98oWfz2r5rcRVnP9VCndg33DAAsky3iuoBSpaPUbgN9AJn');
console.log(data.toHuman())
```

# Packages

- [api](./packages/api)
  - Contains necessary options to create a polkadot.js API instance
- [api-derive](./packages/api-derive)
  - Contains utility classes and derived methods.
- [types-definitions](./packages/type-definitions)
  - Polkadot.js type definitions for Pendulum Network.
- [types](./packages/types)
  - Polkadot.js type definitions for Pendulum Network.
- [sdk-core](./packages/sdk-core)
  - core api libraries
- [precomplies](./packages/precomplies)
  - precomplied contracts abi

## How-to

### Update polkadot libraries

```shell
yarn up @polkadot/api @polkadot/api-augment @polkadot/api-derive @polkadot/rpc-core @polkadot/types @polkadot/types-codec
```

### Update the type definitions of this package

To update the type definitions of this package, you need to first fetch the metadata from your target chain:

```shell
# To use the metadata from a live-chain use
yarn update-metadata
# To use the metadata from a local node use
yarn update-metadata-local
```

and then run the following command to build the type definitions based on that metadata:

```shell
yarn build
```
