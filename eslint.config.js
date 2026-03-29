import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "node_modules/**",
      "**/node_modules/**",
      "backend/dist/**",
      "frontend/dist/**",
      "webhook-service/dist/**",
      "edi-collector/dist/**",
      "packages/*/dist/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["webhook-service/**/*.js", "**/*.cjs", "backend/jest.config.js", "frontend/jest.config.js"],
    languageOptions: {
      globals: {
        module: "writable",
        require: "readonly",
        process: "readonly",
        console: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        exports: "writable",
      },
      sourceType: "commonjs",
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
