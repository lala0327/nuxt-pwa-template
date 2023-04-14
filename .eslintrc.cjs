module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    '@nuxtjs', 'plugin:vue/vue3-recommended', "prettier", '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-undef': 'off',
    quotes: 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    'vue/multi-word-component-names': 'off',
    indent: "off"
  }
}
