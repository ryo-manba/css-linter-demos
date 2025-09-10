# CSS Modules Example: Biome

## Setup

```sh
npm i
```

## CSS Modules Support

This demo shows how Biome handles CSS Modules with proper parsing and linting.

### Configuration

Enable CSS Modules parsing in `biome.json`:

```json
{
  "css": {
    "parser": {
      "cssModules": true
    }
  },
  "linter": {
    "rules": {
      "suspicious": {
        "noDuplicateProperties": "error"
      },
    }
  }
}
```

## Run

```sh
npx biome lint .
```

Output:

```sh
styles.module.css:28:3 lint/suspicious/noDuplicateProperties ━━━━━━━━━━━━━━━━━━

  × Duplicate properties can lead to unexpected behavior
  
    26 │ .error {
    27 │   color: red;
  > 28 │   color: red;
       │   ^^^^^
    29 │ }

✖ Found 1 error.
```
