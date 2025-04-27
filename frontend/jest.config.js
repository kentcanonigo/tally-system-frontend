/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    "^expo-secure-store$": "<rootDir>/__mocks__/expo-secure-store.ts",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(expo|@expo|react-native|@react-native|@expo-google-fonts)/)"
  ],
};