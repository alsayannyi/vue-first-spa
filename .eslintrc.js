// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    //Disallow Undeclared Variables
    'extends': 'eslint:recommended',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    //disallows trailing commas
    'comma-dangle': ['error', 'never'],
    // disable semi rule
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    // checks only that locally-declared variables are used but will allow global variables to be unused
    'no-unused-vars': ['error', { 'vars': 'local' }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': ['error', 2, { "ImportDeclaration": 1 }],
    'quote-props': ['error', 'as-needed'],
    'radix': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    'no-shadow': ['error', {'allow': ['state'] }]
    // ' no-param-reassign': ["error", { "props": false } ]
  }
}
