module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg)$':
      '<rootDir>/.jest/mock/fileMock.js',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '\\.css$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
}
