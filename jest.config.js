module.exports = {
  verbose: true,
  bail: true,
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']
};
