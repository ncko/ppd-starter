module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/containers/(.*)': '<rootDir>/src/containers/$1',
    "@/state": '<rootDir>/src/state',
    "@/constants": '<rootDir>/src/constants',
    "@/layouts/(.*)": '<rootDir>/src/layouts/$1',
    "@/theme": '<rootDir>/src/theme',
    "@/test-utils": '<rootDir>/test/test-utils',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.jest.json'
    }
  }
};
