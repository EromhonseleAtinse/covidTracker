module.exports = {
    "setupFilesAfterEnv": [
        "<rootDir>/src/setupTests.js"
    ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy"
    },
    testMatch: [
        '<rootDir>/src/__test__/unitTest/*.test.js',
        '<rootDir>/src/__test__/integrationTest/*.test.js',
    ],
}