# Language Options Demo: Stylelint

## Setup

```sh
npm i
```

## Configuration

Uses `languageOptions.syntax` to define custom at-rules and properties:

```json
{
  "languageOptions": {
    "syntax": {
      "atRules": {
        "example": {
          "prelude": "<custom-ident>",
          "descriptors": {
            "foo": "<number>",
            "bar": "<color>"
          }
        }
      },
      "properties": {
        "my-color": "<color>",
        "my-size": "<length> | <percentage>"
      }
    }
  },
  "rules": {
    "at-rule-descriptor-no-unknown": true,
    "at-rule-descriptor-value-no-unknown": true,
    "at-rule-prelude-no-invalid": true,
    "declaration-property-value-no-unknown": true
  }
}
```

## Run

```sh
npx stylelint style.css
```

## Example

```css
/* Valid: Custom at-rule and properties */
@example myname {
  foo: 123;
  bar: #ff0000;
}

.custom {
  my-color: #00ff00;
  my-size: 20px;
}

/* Error: Invalid descriptor values */
@example test {
  foo: not-a-number;
  bar: invalid-color;
}

/* Error: Unknown descriptor */
@example test {
  baz: 123;
}

/* Error: Invalid prelude */
@example 123test;

/* Error: Invalid property values */
a {
  my-color: not-a-color;
  my-size: invalid;
}
```

Output:

```sh
style.css
   9:8   ✖  Unexpected unknown value "not-a-number" for descriptor "foo"    at-rule-descriptor-value-no-unknown
  10:8   ✖  Unexpected unknown value "invalid-color" for descriptor "bar"   at-rule-descriptor-value-no-unknown
  15:3   ✖  Unexpected unknown descriptor "baz" for at-rule "@example"      at-rule-descriptor-no-unknown
  22:10  ✖  Unexpected invalid prelude "123test" for at-rule "@example"     at-rule-prelude-no-invalid
  33:13  ✖  Unexpected unknown value "not-a-color" for property "my-color"  declaration-property-value-no-unknown
  34:12  ✖  Unexpected unknown value "invalid" for property "my-size"       declaration-property-value-no-unknown

✖ 6 problems (6 errors, 0 warnings)
```
