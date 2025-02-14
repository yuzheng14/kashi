/** @type {import('prettier').Config} */
export default {
  semi: false,
  singleQuote: true,
  htmlWhitespaceSensitivity: 'ignore',
  overrides: [
    {
      files: ['packages/data/src/common.json'],
      options: { printWidth: 50 },
    },
  ],
}
