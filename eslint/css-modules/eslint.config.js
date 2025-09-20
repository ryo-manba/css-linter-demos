import css from "@eslint/css";

export default [
  {
    files: ["**/*.css", "**/*.module.css"],
    language: "css/css",
    ...css.configs.recommended,
  },
  
  // Custom rules with property/value validation
  {
    files: ["**/*.css", "**/*.module.css"],
    language: "css/css",
    rules: {
      "css/no-duplicate-imports": "error",
      "css/no-empty-blocks": "warn",
      "css/no-invalid-properties": "error",
      "css/no-invalid-at-rules": "error",
      "css/no-invalid-at-rule-placement": "error"
    }
  }
];