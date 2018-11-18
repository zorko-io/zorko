module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
        },
        "sourceType": "module"
    },
    "plugins": ["node"],
    "globals": {
        "describe": false,
        "xdescribe": false,
        "it": false,
        "xit": false,
        "after": false,
        "before": false
    },
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "prefer-destructuring": 'off',
        "linebreak-style": 'off',
        "camelcase": 'off',
        "import/no-extraneous-dependencies": 'warn',
        "no-param-reassign": "warn",
        "no-extend-native": "warn",
        "no-bitwise": 'off',
        "no-restricted-globals": 'warn',
        "no-lone-blocks": 'off',
        "no-fallthrough": "warn",
        "no-trailing-spaces": "off",
        "no-undef": "warn",
        "no-unused-expressions": "warn",
        "operator-assignment": "warn",
        "max-len": [1, 170],
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "radix": ["error", "as-needed"],
        "class-methods-use-this" : "off",
        "comma-dangle": "off",
    }
};
