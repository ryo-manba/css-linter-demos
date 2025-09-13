import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  ...tailwindcss.configs["flat/recommended"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Enforce consistent ordering of Tailwind CSS classes
      "tailwindcss/classnames-order": "error",

      // Disallow contradicting Tailwind CSS classnames (e.g., "w-3 w-5")
      "tailwindcss/no-contradicting-classname": "error",

      // Disallow using arbitrary values in classnames where Tailwind utilities exist
      "tailwindcss/no-unnecessary-arbitrary-value": "error",

      // Detect deprecated class names
      "tailwindcss/no-custom-classname": ["error", {
        whitelist: ["custom-.*", "btn-.*"]
      }],

      // Enforce using shorthand Tailwind classes when possible
      "tailwindcss/enforces-shorthand": "error",

      // Ensure negative classnames use the proper syntax
      "tailwindcss/enforces-negative-arbitrary-values": "error",

      // Validate arbitrary values syntax
      "tailwindcss/no-arbitrary-value": "off",

      // Migration helper for v2 to v3
      "tailwindcss/migration-from-tailwind-2": "off"
    }
  }
];