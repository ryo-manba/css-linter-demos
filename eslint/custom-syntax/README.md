# Custom Syntax Demo: ESLint

## Setup

```sh
npm i
```

## Configuration

Uses `languageOptions.customSyntax` to define custom at-rules and properties:

```javascript
languageOptions: {
  customSyntax: {
    atrules: {
      "example": {
        prelude: "<custom-ident>",
        descriptors: {
          "foo": "<number>",
          "bar": "<color>"
        }
      }
    },
    properties: {
      "my-color": "<color>",
      "my-size": "<length> | <percentage>"
    },
    types: {
      "my-spacing": "<length> | auto"
    }
  }
}
```

## Run

```sh
npx eslint style.css
```

## Example

```css
/* Custom at-rule with descriptors */
@example myname {
  foo: 123;
  bar: #ff0000;
}

/* Custom properties */
.custom {
  my-color: #00ff00;
  my-size: 20px;
}
```

Output:

```sh
/eslint/custom-syntax/style.css
  21:1  error  Unknown at-rule '@undefined' found         css/no-invalid-at-rules
  25:3  error  Unknown property 'unknown-property' found  css/no-invalid-properties

✖ 2 problems (2 errors, 0 warnings)
```

Note: With `customSyntax`, the validation rules (`no-invalid-at-rules` and `no-invalid-properties`) properly recognize custom syntax. The custom `@example` at-rule and `my-color`/`my-size` properties don't trigger errors, while undefined syntax like `@undefined` and `unknown-property` are correctly reported as errors.
