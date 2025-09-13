# Plugin Example Demo: ESLint

## Setup

```sh
npm i
```

## Custom CSS Plugin Demo

This demo shows how to create a custom ESLint plugin for CSS linting and how to use the built-in `no-restricted-syntax` rule for AST-based pattern restrictions.

### Custom Plugin Rule

The `my-plugin.js` implements one custom rule:

- **no-important**: Disallows use of `!important` in CSS declarations

### Configuration

The `eslint.config.js` demonstrates two approaches to restricting `!important`:

```javascript
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
        }
      ]
    }
  }
]);
```

### Run

```sh
npx eslint style.css
```

Output:

```sh
/css-linter-demos/eslint/plugin-example/style.css
  8:3  error  !important annotations are not allowed  my-plugin/no-important
  8:3  error  !important annotations are not allowed  no-restricted-syntax

✖ 2 problems (2 errors, 0 warnings)
```

Note: Both the custom plugin rule and the `no-restricted-syntax` rule detect the same `!important` usage, demonstrating two different approaches to achieving the same goal.

### What it demonstrates

- Creating custom ESLint rules for CSS using the new `@eslint/css` package
- Using the CSS AST (Abstract Syntax Tree) to analyze CSS code
- Two approaches to the same restriction:
  - Custom plugin rule with dedicated logic
  - Built-in `no-restricted-syntax` rule with AST selectors
- How to use `defineConfig` for modern ESLint configuration
- CSS language support with `language: "css/css"`

### Benefits

- **Custom Plugin Approach**: More control, custom messages, can add complex logic
- **Restricted Syntax Approach**: Quick to implement, no plugin needed, uses AST selectors
