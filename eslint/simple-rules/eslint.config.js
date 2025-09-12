import { defineConfig } from "eslint/config";
import css from "@eslint/css";

export default defineConfig([
  {
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    rules: {
      "css/no-empty-blocks": "error",
      "css/no-duplicate-imports": "error"
    }
  }
]);