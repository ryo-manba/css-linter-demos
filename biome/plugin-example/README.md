# Custom Plugin Example: Biome

## Setup

```sh
npm i
```

## Custom Biome Plugin

This demo shows how to create a custom CSS linting rule using Biome's GritQL plugin.

### Rule: `no-explicit-colors`

Enforces the use of `.color-*` utility classes instead of explicit color values.

## Plugin File

- `plugins/no-explicit-colors.grit` - Plugin that prevents explicit color values outside of `.color-*` classes

## Run

```sh
npx biome lint .
```

Output:

```sh
style.css:2:3 plugin ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Don't set explicit colors. Use `.color-*` classes instead.
  
    1 │ a {
  > 2 │   color: red;
      │   ^^^^^^^^^^
    3 │ }

✖ Found 1 error.
```
