# Suppressions Demo: Biome

## Setup

```sh
npm i
```

## Run

```sh
# Check for violations
npx biome lint .

# Add suppression comments automatically (JavaScript only)
npx biome lint --suppress --reason "migration" example.js

# CSS files: --suppress doesn't work, only reports errors
npx biome lint --suppress --reason "migration" style1.css
```

## Automatic Suppressions (JavaScript only)

For JavaScript files, `--suppress` automatically adds `biome-ignore` comments:

```javascript
// Before
var unused = 1;

// After running: npx biome lint --suppress --reason "migration" example.js
// biome-ignore lint/correctness/noUnusedVariables: migration
var unused = 1;
```

## Manual Suppression Comments (CSS)

For CSS files, suppressions must be added manually:

```css
/* biome-ignore lint/suspicious/noEmptyBlock: reason */
.example {}

/* biome-ignore lint/correctness/noUnknownProperty: reason */
.example {
  foo: red;
}
```

**`--suppress` flag behavior:**

- **JavaScript/TypeScript**: Automatically inserts suppression comments
- **CSS**: Does NOT insert comments, only reports errors
