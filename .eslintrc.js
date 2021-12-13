module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier",
        "prettier/react"
    ],
    "parser" : "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": ['react', 'prettier', 'react-hooks', 'jsx-a11y', 'import'],
    "rules": {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.jsx', '.js'],
          },
        ],
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
      },
};
