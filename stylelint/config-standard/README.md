# Config Standard Demo: Stylelint

## Setup

```sh
npm i
```

## stylelint-config-standard

This demo uses [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard) which extends `stylelint-config-recommended` and adds stylistic rules for consistent code style.

### Run

```sh
npx stylelint style.css
```

Output:

```sh
style.css
  20:16  ✖  Unexpected quotes around "Arial"        font-family-name-quotes
  20:16  ✖  Unexpected missing generic font family  font-family-no-missing-generic-family-keyword
  26:12  ✖  Unexpected unit                         length-zero-no-unit

✖ 3 problems (3 errors, 0 warnings)
  2 errors potentially fixable with the "--fix" option.
```

### What it checks

All rules from `stylelint-config-recommended` plus:
- Property name case
- Spacing around colons and semicolons
- Selector formatting
- Quote usage
- Zero units
- And many other stylistic conventions

### Fix

Many violations can be automatically fixed:

```sh
npx stylelint style.css --fix
```
