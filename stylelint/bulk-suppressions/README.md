# Bulk Suppressions Demo: Stylelint

## Setup

```sh
npm i
```

## What are Bulk Suppressions?

Bulk suppressions (experimental feature in PR #8564) allow you to suppress existing violations while still enforcing rules for new code. This helps teams gradually adopt stricter linting rules.

## Files

- `style1.css`: Has 2 violations (1 empty block, 1 invalid property)
- `style2.css`: Has 3 violations (1 empty block, 2 invalid properties)

## Generate Suppressions

```sh
# Suppress all existing violations
npx stylelint *.css --suppress

# Or suppress specific rules
npx stylelint *.css --suppress block-no-empty --suppress property-no-unknown
```

This creates `stylelint-suppressions.json`:

```json
{
  "style1.css": {
    "block-no-empty": { "count": 1 },
    "property-no-unknown": { "count": 1 }
  },
  "style2.css": {
    "block-no-empty": { "count": 1 },
    "property-no-unknown": { "count": 2 }
  }
}
```

## Test Suppressions

```sh
# With suppressions file present
npx stylelint *.css
# Result: No errors (suppressions applied)

# Add new violation to style1.css
echo '.new {} /* new violation */' >> style1.css

# Run again
npx stylelint style1.css
# Result: Shows all violations (suppressions may not be working as expected)
```

## Managing Suppressions

```sh
# Use custom suppressions file location
npx stylelint *.css --suppress-location ./custom-folder
```

## Note

This feature is experimental and available via PR #8564. The suppressions file is generated correctly, but automatic application of suppressions during linting may still be in development.
