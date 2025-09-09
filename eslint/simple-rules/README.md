# Simple Rules Demo: ESLint

## Setup

```sh
npm i
```

## Basic Rules

This demo shows ESLint with the new `@eslint/css` plugin for CSS linting, using just 2 simple rules.

### Rules

- `css/no-empty-blocks`: Detects empty CSS blocks
- `css/no-duplicate-imports`: Detects duplicate @import rules

### Configuration

ESLint 9+ uses flat config format (`eslint.config.js`) with the CSS language support.

### Run

```sh
npx eslint style.css
```

Output:

```sh
/css-linter-demos/eslint/simple-rules/style.css
   3:1  error  Unexpected duplicate @import rule for reset.css  css/no-duplicate-imports
  11:8  error  Unexpected empty block found                     css/no-empty-blocks

✖ 2 problems (2 errors, 0 warnings)
```

### What it checks

- Empty CSS blocks
- Duplicate @import rules
