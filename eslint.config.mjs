import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"
import {
  default as tsParser,
  default as typescriptParser,
} from "@typescript-eslint/parser"
import eslintConfigPrettier from "eslint-config-prettier"
import boundaries from "eslint-plugin-boundaries"
import prettier from "eslint-plugin-prettier"
import tailwindcss from "eslint-plugin-tailwindcss"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends("plugin:@next/next/recommended", "prettier"),
  eslintConfigPrettier,
  {
    plugins: {
      tailwindcss,
      prettier,
    },
    settings: {
      tailwindcss: {
        callees: ["cn", "cva", "tw"],
        classRegex: ["ClassName$", "className", "tw", "tw$", "tw\\(", "tw\\["],
      },
    },
    rules: {
      "tailwindcss/classnames-order": [
        "error",
        {
          callees: ["cn", "cva", "tw"],
          classRegex: [
            "ClassName$",
            "className",
            "tw",
            "tw$",
            "tw\\(",
            "tw\\[",
          ],
        },
      ],
      "tailwindcss/no-custom-classname": [
        "error",
        {
          whitelist: ["(?!(bg|text)\\-).*"],
        },
      ],

      "tailwindcss/no-contradicting-classname": "error",
      "prettier/prettier": "warn",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs"],
    languageOptions: {
      parser: tsParser,
    },
  },

  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      boundaries,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
          disallowTypeAnnotations: true,
        },
      ],
    },
  },
  {
    plugins: {
      boundaries,
    },
    settings: {
      "boundaries/include": ["src/**/*"],
      "boundaries/elements": [
        {
          mode: "full",
          type: "shared",
          pattern: [
            "src/assets/**/*",
            "src/components/**/*",
            "src/data/**/*",
            "src/drizzle/**/*",
            "src/hooks/**/*",
            "src/lib/**/*",
            "src/utils/**/*",
            "src/server/**/*",
            "src/providers/**/*",
            "src/config/**/*",
            "src/tests/**/*",
            "src/tasks/**/*",
            "src/types/**/*",
            "src/auth.ts",
          ],
        },
        {
          mode: "full",
          type: "feature",
          capture: ["featureName"],
          pattern: ["src/features/*/**/*"],
        },
        {
          mode: "full",
          type: "app",
          capture: ["_", "fileName"],
          pattern: ["src/app/**/*"],
        },
        {
          mode: "full",
          type: "middleware",
          pattern: ["src/middleware.ts"],
        },
        {
          mode: "full",
          type: "neverImport",
          pattern: ["src/*"],
        },
      ],
    },
    rules: {
      "boundaries/no-unknown": ["error"],
      "boundaries/no-unknown-files": ["error"],
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: ["shared"],
              allow: ["shared"],
            },
            {
              from: ["neverImport"],
              allow: ["neverImport"],
            },
            {
              from: ["feature"],
              allow: [
                "shared",
                ["feature", { featureName: "${from.featureName}" }],
              ],
            },
            {
              from: ["app", "neverImport"],
              allow: ["shared", "feature"],
            },
            {
              from: ["app"],
              allow: [["app", { fileName: "*.css" }]],
            },
            {
              from: ["middleware"],
              allow: ["shared"],
            },
          ],
        },
      ],
    },
  },
]
