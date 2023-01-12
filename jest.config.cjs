const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@pendulum-chain/api-derive(.*)$': '<rootDir>/packages/api-derive/src/$1',
    '@pendulum-chain/api(.*)$': '<rootDir>/packages/api/src/$1',
    '@pendulum-chain/types(.*)$': '<rootDir>/packages/types/src/$1',
    '@pendulum-chain/type-definitions(.*)$': '<rootDir>/packages/type-definitions/src/$1',
    '@pendulum-chain/sdk-core(.*)$': '<rootDir>/packages/sdk-core/src/$1'
  },
  testTimeout: 30000
};
