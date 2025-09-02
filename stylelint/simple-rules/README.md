# Simple Rules Demo: Stylelint

## Setup

```sh
npm i
```

## Basic Rules

This demo shows Stylelint with just 2 simple rules configured directly without any preset config.

### Rules

- `color-no-invalid-hex`: Detects invalid hex colors
- `block-no-empty`: Detects empty CSS blocks

### Run

```sh
npx stylelint style.css
```

Output:

```sh
style.css
   7:10  ✖  Unexpected invalid hex color "#zzz"  color-no-invalid-hex
  10:8   ✖  Unexpected empty block               block-no-empty

✖ 2 problems (2 errors, 0 warnings)
```
