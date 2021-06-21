module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json', 'gql'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(gql|graphql)$': 'jest-transform-graphql',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/filters/**/*.ts',
    '<rootDir>/layouts/*.vue',
    '<rootDir>/middleware/*.ts',
    '<rootDir>/store/**/*.ts',
    '!<rootDir>/store/index.ts',
  ],
};
