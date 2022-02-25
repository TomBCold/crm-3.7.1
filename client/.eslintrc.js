module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': ['error', 'never'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'default-param-last': 'off',
    'import/no-unresolved': 'off'
  }
};
