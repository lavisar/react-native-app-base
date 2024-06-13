module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  rules: {
    'react-native/no-inline-styles': 0, // no warn for inline styles
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: false,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        semi: false,
        // New added
        endOfLine: 'auto', // no warn for end of line CRLF type
        'no-inline-styles': false, // no warn for inline styles
      },
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
