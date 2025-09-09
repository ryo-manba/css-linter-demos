# Config Recommended Demo: ESLint

## Setup

```sh
npm i
```

## ESLint CSS Recommended Configuration

This demo uses the recommended configuration from `@eslint/css` which includes a curated set of rules for catching common CSS errors.

### Configuration

The `eslint.config.js` uses the recommended preset:

```javascript
import { defineConfig } from "eslint/config";
import css from "@eslint/css";

export default defineConfig([
  {
    files: ["**/*.css"],
    language: "css/css",
    plugins: { css },
    extends: ["css/recommended"],
  },
]);
```

### Run

```sh
npx eslint style.css
```

Output:

```sh
/css-linter-demos/eslint/config-recommended/style.css
   8:1   error  @import must be placed before all other rules  css/no-invalid-at-rule-placement
   9:1   error  @import must be placed before all other rules  css/no-invalid-at-rule-placement
   9:1   error  Duplicate @import rule for reset.css           css/no-duplicate-imports
  12:1   error  Unknown at-rule '@invalide' found              css/no-invalid-at-rules
  13:3   error  Unknown descriptor 'color' for '@invalide'     css/no-invalid-at-rules
  18:3   error  Unknown property 'colr' found                  css/no-invalid-properties
  23:8   error  Unexpected empty block found                   css/no-empty-blocks
  28:16  error  Use fallback fonts and generic font last       css/font-family-fallbacks
  32:1   error  @import must be placed before all other rules  css/no-invalid-at-rule-placement
  33:1   error  @import must be placed before all other rules  css/no-invalid-at-rule-placement
  33:1   error  Duplicate @import rule for base.css            css/no-duplicate-imports
  35:16  error  Unexpected empty block found                   css/no-empty-blocks

✖ 12 problems (12 errors, 0 warnings)
```

### What it checks

- Duplicate @import statements
- Invalid at-rules and their descriptors
- Unknown/misspelled CSS properties
- Empty CSS blocks
- @import rule placement
- Font family fallback requirements
- Other common CSS errors
