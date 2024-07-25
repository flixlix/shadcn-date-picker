/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  tailwindFunctions: ["cn", "cva"],
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
}
