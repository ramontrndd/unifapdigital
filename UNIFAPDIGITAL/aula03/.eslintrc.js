module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'windows'], // Use 'windows' se necessário
    'react/prop-types': 'off', // Desabilitar verificação de prop-types (opcional)
    'react/react-in-jsx-scope': 'off', // Não é mais necessário com React 17+
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
