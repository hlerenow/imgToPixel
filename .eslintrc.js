module.exports = {
  "extends": "standard",
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "globals": {
    "ActiveXObject": false,
    "describe": true,
    "it": true,
    "expect": true
  },
  "rules": {
    'semi': ["error", "never"],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ['error', 'never'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'no-return-await': ['off'],
    'comma-spacing': ["error", { "before": false, "after": true }],
    "object-curly-spacing": ["error", "always"],
    'no-trailing-spaces': ["error", { "skipBlankLines": true, ignoreComments: true }],
    "space-infix-ops": ["error", { "int32Hint": false }],
    'keyword-spacing': ["error", { "before": true }]
  }
}
