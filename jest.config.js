module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/docs/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};