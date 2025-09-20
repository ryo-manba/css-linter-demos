# Stylelint CSS-in-JS Demo

Minimal example of CSS-in-JS (styled-components) linting with Stylelint.

## Setup

```bash
npm install
```

## Configuration

Uses `postcss-styled-syntax` to parse CSS in template literals:

```json
{
  "customSyntax": "postcss-styled-syntax"
}
```

## Run

```bash
npm run lint
```

## Result

Stylelint detects CSS errors inside template literals:

```shell
Button.jsx
  17:3   ✖  Unexpected unknown property "foo"                      property-no-unknown
  20:10  ✖  Unexpected unknown value "baz" for property "color"    declaration-property-value-no-unknown
  23:10  ✖  Unexpected unknown value "100zz" for property "width"  declaration-property-value-no-unknown
  23:13  ✖  Unexpected unknown unit "zz"                           unit-no-unknown

✖ 4 problems (4 errors, 0 warnings)
```

## CSS-in-JS Support

✅ **Full CSS validation** inside template literals
✅ Detects unknown properties, values, and units
✅ Supports nested selectors and pseudo-classes
✅ Works with styled-components syntax