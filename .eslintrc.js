module.exports = {
    extends: ['airbnb-base', 'angular', 'prettier'],
    plugins: ['prettier'],
    env: {
        browser: true,
        es6: true,
        jasmine: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017,
    },
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        'no-return-assign': 'off',
        "prettier/prettier": [
            'error',
            {
                tabWidth: 4,
                singleQuote: true,
                trailingComma: "all",
                printWidth: 120
            }
        ]
    },
};
