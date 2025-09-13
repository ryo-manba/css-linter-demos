# Language Options Demo: ESLint

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
/* Valid: Standard CSS */
a {
  color: blue;
}


/* Valid: Custom at-rule with descriptors */
@example myname {
  foo: 123;
  bar: #ff0000;
}

/* Error: Invalid descriptor value */
@example test {
  foo: not-a-number;
  bar: invalid-color;
}

/* Valid: Custom properties */
.custom {
  my-color: #00ff00;
  my-size: 20px;
  my-size: 50%;
}

/* Error: Invalid property values */
.invalid-values {
  my-color: not-a-color;
  my-size: invalid;
}

/* Error: Invalid at-rule (not defined) */
@undefined "test";

/* Error: Invalid property (not defined) */
.invalid {
  unknown-property: value;
}
```

Output:

```sh
/eslint/custom-syntax/style.css
  15:8   error  Invalid value 'not-a-number' for descriptor 'foo' found for at-rule '@example'. Expected <number>  css/no-invalid-at-rules
  16:8   error  Invalid value 'invalid-color' for descriptor 'bar' found for at-rule '@example'. Expected <color>  css/no-invalid-at-rules
  28:13  error  Invalid value 'not-a-color' for property 'my-color'. Expected <color>                              css/no-invalid-properties
  29:12  error  Invalid value 'invalid' for property 'my-size'. Expected <length> | <percentage>                   css/no-invalid-properties
  33:1   error  Unknown at-rule '@undefined' found                                                                 css/no-invalid-at-rules
  37:3   error  Unknown property 'unknown-property' found                                                          css/no-invalid-properties

✖ 6 problems (6 errors, 0 warnings)
```

Note: With `customSyntax`, the validation rules (`no-invalid-at-rules` and `no-invalid-properties`) recognize custom syntax and validate values. The custom `@example` at-rule and `my-color`/`my-size` properties are recognized, but invalid values trigger errors with expected type information.
