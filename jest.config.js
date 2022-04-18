const nextJest = require('next/jest')

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		// Handle module aliases (this will be automatically configured for you soon)
		'@components/(.*)$': '<rootDir>/components/$1',
		'@pages/(.*)$': '<rootDir>/pages/$1',
		'@services/(.*)$': '<rootDir>/services/$1',
		'@constants/(.*)$': '<rootDir>/constants/$1',
		'@mocks/(.*)$': '<rootDir>/mocks/$1',
		'@styles/(.*)$': '<rootDir>/styles/$1',
		'@utils/(.*)$': '<rootDir>/utils/$1',
		'@store/(.*)$': '<rootDir>/store/$1',
	},
	testEnvironment: 'jest-environment-jsdom',
	testPathIgnorePatterns: ['/node_modules/', '/.next/'],
	collectCoverage: true,
	collectCoverageFrom: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[jt]s?(x)',
	],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
