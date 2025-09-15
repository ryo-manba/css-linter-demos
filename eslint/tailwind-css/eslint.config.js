import { defineConfig } from "eslint/config";
import css from "@eslint/css";
import { tailwind3,tailwind4 } from "tailwind-csstree";

export default defineConfig({
  files: ["**/*.css"],
  plugins: {
    css,
  },
  language: "css/css",
  languageOptions: {
    customSyntax: tailwind3,
  },
  rules: {
    "css/no-invalid-at-rules": "error",
    "css/no-invalid-properties": "error",
  },
});