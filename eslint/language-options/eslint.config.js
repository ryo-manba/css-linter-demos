import { defineConfig } from "eslint/config";
import css from "@eslint/css";

export default defineConfig([
  {
    files: ["**/*.css"],
    plugins: {
      css,
    },
    language: "css/css",
    languageOptions: {
      customSyntax: {
        atrules: {
          "example": {
            prelude: "<custom-ident>",
            descriptors: {
              "foo": "<number>",
              "bar": "<color>"
            }
          }
        },
        properties: {
          "my-color": "<color>",
          "my-size": "<length> | <percentage>"
        },
        types: {
          "my-spacing": "<length> | auto"
        }
      }
    },
    rules: {
      "css/no-invalid-at-rules": "error",
      "css/no-invalid-properties": "error",
    },
  },
]);