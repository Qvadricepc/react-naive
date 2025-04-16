module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/react',
        'prettier', // must be last
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', 'react-native', 'import'],
    rules: {
        'react/react-in-jsx-scope': 'off', // not needed in React 17+
        'react-native/no-inline-styles': 'off',
        'react-native/split-platform-components': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};