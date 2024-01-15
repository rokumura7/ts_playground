/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  moduleNameMapper: {
    "^@/(.+)": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testMatch: [
    "**/test/**/*.spec.ts"
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!**/node_modules/**"
  ]
}