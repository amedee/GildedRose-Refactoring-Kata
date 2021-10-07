module.exports = {
    "roots": [
        ""
    ],
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
    ],
    "testMatch": [
        "**/*.(test|spec).(ts|tsx)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    "verbose": true,
    "setupFilesAfterEnv": [
        'jest-extended',
        'jest-extended-snapshot'
    ],
    preset: 'ts-jest'
}
