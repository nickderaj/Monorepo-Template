module.exports = {
  roots: ['<rootDir>'],
  transform: { '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest' },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/test/__fixtures__', '<rootDir>/node_modules', '<rootDir>/dist'],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
