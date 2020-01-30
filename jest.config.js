module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '\\.tsx?$': 'ts-jest'
  },
  testRegex: '\\.test\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy'
  }
};
