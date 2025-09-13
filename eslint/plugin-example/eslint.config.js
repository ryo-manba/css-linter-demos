import { defineConfig } from "eslint/config";
import css from "@eslint/css";
import myPlugin from "./my-plugin.js";

export default defineConfig([
  {
    files: ["**/*.css"],
    language: "css/css",
    plugins: {
      css,
      "my-plugin": myPlugin
    },
    rules: {
      // Built-in ESLint CSS rules
      "css/no-empty-blocks": "error",

      // Custom plugin rule
      "my-plugin/no-important": "error",

      // Using restricted-syntax rule for pattern-based restrictions
      "no-restricted-syntax": [
        "error",
        {
            "selector": "Declaration[important=true]",
            "message": "!important annotations are not allowed."
        },
      ],
    }
  }
]);