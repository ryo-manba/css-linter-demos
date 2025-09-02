# Config Recommended Demo: Stylelint

## Setup

```sh
npm i
```

## stylelint-config-recommended

This demo uses [`stylelint-config-recommended`](https://github.com/stylelint/stylelint-config-recommended) which contains rules that check for possible errors.

### Run

```sh
npx stylelint style.css
```

Output:

```sh
style.css
  10:10  ✖  Unexpected invalid hex color "#zzz"     color-no-invalid-hex
  11:15  ✖  Unexpected invalid hex color "#12345"   color-no-invalid-hex
  17:3   ✖  Unexpected duplicate "margin"           declaration-block-no-duplicate-properties
  21:8   ✖  Unexpected empty block                  block-no-empty

✖ 4 problems (4 errors, 0 warnings)
```

### What it checks

- Invalid CSS syntax
- Invalid hex colors
- Duplicate properties
- Empty blocks
- And other possible errors