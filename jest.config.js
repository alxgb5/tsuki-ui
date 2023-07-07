module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/node_modules/', '/src/stories/'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};