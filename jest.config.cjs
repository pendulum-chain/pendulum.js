const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@pendulum-chain/pendulum-api-derive(.*)$': '<rootDir>/packages/api-derive/src/$1',
    '@pendulum-chain/pendulum-api(.*)$': '<rootDir>/packages/api/src/$1',
    '@pendulum-chain/pendulum-types(.*)$': '<rootDir>/packages/types/src/$1',
    '@pendulum-chain/pendulum-type-definitions(.*)$': '<rootDir>/packages/type-definitions/src/$1',
    '@pendulum-chain/pendulum-sdk-core(.*)$': '<rootDir>/packages/sdk-core/src/$1'
  },
  testTimeout: 30000
};
