# Bulk Suppressions Demo: ESLint

## Setup

```sh
npm i
```

## What are Bulk Suppressions?

Bulk suppressions (introduced in ESLint v9.24.0) allow you to suppress existing violations while still enforcing rules for new code. This helps teams gradually adopt stricter linting rules.

## Files

- `style1.css`: Has 2 violations (1 empty block, 1 invalid property)
- `style2.css`: Has 3 violations (1 empty block, 2 invalid properties)

## Generate Suppressions

```sh
# Suppress all existing violations in all CSS files
npx eslint *.css --suppress-all
```

This creates `eslint-suppressions.json`:

```json
{
  "style1.css": {
    "css/no-empty-blocks": { "count": 1 },
    "css/no-invalid-properties": { "count": 1 }
  },
  "style2.css": {
    "css/no-empty-blocks": { "count": 1 },
    "css/no-invalid-properties": { "count": 2 }
  }
}
```

## Test Suppressions

```sh
# With suppressions file present
npx eslint *.css
# Result: No errors (suppressions applied)

# Add new violation to style1.css
echo '.new {} /* new violation */' >> style1.css

# Run again
npx eslint style1.css
# Result: Shows all violations (suppressions not working for CSS files)
```
