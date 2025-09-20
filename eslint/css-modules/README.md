# ESLint CSS Modules Demo

Shows that `@eslint/css` doesn't support CSS Modules syntax.

## Setup & Run

```bash
npm install
npx eslint styles.module.css
```

## Result

```
styles.module.css
  10:10  error  Invalid value 'primary' for property 'color'. Expected <color>  css/no-invalid-properties
  15:3   error  Unknown property 'composes' found                               css/no-invalid-properties
  19:3   error  Unknown property 'compose-with' found                           css/no-invalid-properties
  24:3   error  Unknown property 'composes' found                               css/no-invalid-properties
  35:3   error  Unknown property 'black' found                                  css/no-invalid-properties
  36:3   error  Unknown property 'white' found                                  css/no-invalid-properties
  41:3   error  Unknown property 'foo' found                                    css/no-invalid-properties
  42:10  error  Invalid value 'baz' for property 'color'. Expected <color>      css/no-invalid-properties
  46:1   error  Unknown at-rule '@foo' found                                    css/no-invalid-at-rules
```

## CSS Modules Support

❌ **Not Supported:**
- `@value` declarations (must be commented out to parse)
- `composes` and `compose-with` properties
- `:export` pseudo-class properties
- CSS Module variables (`primary`)

✅ **Validation Works:**
- Unknown properties detected (`foo`, `black`, `white`)
- Invalid property values detected (`baz`)
- Unknown at-rules detected (`@foo`)

## Note

With `@value` commented out, ESLint can parse the file but treats all CSS Modules features as errors.
