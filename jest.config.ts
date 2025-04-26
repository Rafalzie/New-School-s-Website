import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)$": "<rootDir>/app/components/$1",
    "^UIcomponents/(.*)$": "<rootDir>/app/UIcomponents/$1",
    "^globalStyles/(.*)$": "<rootDir>/app/globalStyles/$1",
    "^hooks/(.*)$": "<rootDir>/app/hooks/$1",
    "^pages/(.*)$": "<rootDir>/app/pages/$1",
    "^serverActions/(.*)$": "<rootDir>/app/serverActions/$1",
    "^clientActions/(.*)$": "<rootDir>/app/clientActions/$1",
    "^assets/(.*)$": "<rootDir>/app/assets/$1",
    "^models/(.*)$": "<rootDir>/app/models/$1",
    "^providers/(.*)$": "<rootDir>/app/providers/$1",
    "^types/(.*)$": "<rootDir>/types/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/__tests__/__mocks__/mongoHandler.ts"],
  transformIgnorePatterns: ["/node_modules/(?!(react-session-hooks)/)"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
