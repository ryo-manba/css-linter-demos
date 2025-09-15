# ESLint Tailwind CSS Demo

Demo showing how ESLint with tailwind-csstree provides semantic validation of Tailwind syntax.

## Setup

```sh
npm i
```

## Configuration

```javascript
// eslint.config.js
import { tailwind3 } from "tailwind-csstree";

export default defineConfig({
  languageOptions: {
    customSyntax: tailwind3,
  },
  rules: {
    "css/no-invalid-at-rules": "error",
    "css/no-invalid-properties": "error",
  },
});
```

## Semantic Validation with tailwind-csstree

ESLint **provides semantic validation** of Tailwind syntax:

1. **@apply directive validation** - Ensures correct usage with utility classes:

```css
/* CORRECT - NO ERROR */
@apply text-white bg-blue-500;

/* INCORRECT - SHOWS ERROR */
@apply { color: red; }  /* ✖ Unknown descriptor 'color' */
@apply;                 /* ✖ Should contain a prelude */
```

2. **theme() function validation** - Detects invalid theme values:

```css
/* CORRECT - NO ERROR */
background: theme(colors.blue.500);

/* INCORRECT - SHOWS ERROR */
color: theme(fake.value);  /* ✖ Invalid value for 'color' property */
```

## Run

```sh
$ npx eslint style.css

style.css
  10:3  error  At-rule '@apply' should contain a prelude         css/no-invalid-at-rules
  11:5  error  Unknown descriptor 'color' found for at-rule '@apply'  css/no-invalid-at-rules
  17:3  error  At-rule '@apply' should contain a prelude         css/no-invalid-at-rules
  27:10  error  Invalid value for 'color' property               css/no-invalid-properties
```
