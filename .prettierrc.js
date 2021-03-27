module.exports = {
  singleQuote: true,
  trailingComma: 'none',
  semicolons: 'remove',
  printWidth: 80,
  proseWrap: 'always',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  semi: true,
  arrowParens: 'avoid',
  svelteSortOrder: 'scripts-markup-styles',
  overrides: [
    {
      files: [
        '.prettierrc',
        '.eslintrc',
        '.babelrc',
        '.tern-project',
        '.stylelintrc',
        '.lighthouserc'
      ],
      options: {
        parser: 'json'
      }
    },
    {
      files: ['package.json'],
      options: {
        printWidth: 180
      }
    }
  ]
}
