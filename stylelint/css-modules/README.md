# Stylelint CSS Modules Demo

Shows Stylelint with CSS Modules support using `stylelint-config-css-modules`.

## Setup & Run

```bash
npm install
npm run lint
```

## Result

```
styles.module.css
  10:10  ✖  Unexpected unknown value "primary" for property "color"  declaration-property-value-no-unknown
  41:3   ✖  Unexpected unknown property "foo"                        property-no-unknown
  42:10  ✖  Unexpected unknown value "baz" for property "color"      declaration-property-value-no-unknown
  46:1   ✖  Unexpected unknown at-rule "@foo"                        at-rule-no-unknown
```

## CSS Modules Support

✅ **Supported:**
- `composes` and `compose-with` properties
- `:local()` and `:global()` pseudo-classes
- `@value` declarations (parsed correctly)
- `:export` pseudo-class

⚠️ **Limitations:**
- CSS Module variables (`primary`) reported as unknown values when property value validation is enabled
- `:export` block properties (`black`, `white`) not recognized as special syntax

✅ **Validation Works:**
- Unknown properties detected (`foo`)
- Invalid property values detected (`baz`)
- Unknown at-rules detected (`@foo`)