import css from "@eslint/css";

export default [
  {
    name: "css-files",
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    rules: {
      "css/no-empty-blocks": "error",
      "css/no-invalid-properties": "error"
    }
  }
];