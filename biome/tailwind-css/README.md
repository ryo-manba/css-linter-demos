# Tailwind CSS Support in Biome

This demo shows two aspects of Biome with Tailwind CSS:
1. **Class sorting in JSX**: Using `useSortedClasses` rule to automatically sort Tailwind classes in JavaScript/JSX files
2. **CSS file linting**: How Biome handles Tailwind-specific syntax in CSS files (showing warnings for non-standard features)

## Setup

```sh
npm i
```

## Configuration

```json
{
  "linter": {
    "rules": {
      "nursery": {
        "useSortedClasses": {
          "level": "error",
          "options": {
            "functions": ["clsx"]
          }
        }
      }
    }
  }
}
```

## Run

```sh
# Check for unsorted classes
npx biome lint .

# Auto-fix class ordering
npx biome lint --write .
```

## Example Output

### JSX Class Sorting (index.jsx)

```
index.jsx:11:22 lint/nursery/useSortedClasses  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × These CSS classes should be sorted.
  
     9 │     <>
    10 │       {/* Regular className */}
  > 11 │       <div className="text-white px-4 bg-blue-500 py-2" />
       │                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    12 │       
    13 │       {/* Using clsx */}
  
  i Unsafe fix: Sort the classes.
```

### CSS File Linting (style.css)

When running `npx biome lint style.css`, Biome reports warnings for Tailwind-specific syntax that isn't standard CSS:

```
style.css:2:2 lint/suspicious/noUnknownAtRules ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Unexpected unknown at-rule: tailwind 
  
    1 │ /* Tailwind directives - THIS WILL SHOW WARNING */
  > 2 │ @tailwind base;
      │  ^^^^^^^^
    3 │ @tailwind components;
    4 │ @tailwind utilities;

style.css:8:4 lint/suspicious/noUnknownAtRules ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Unexpected unknown at-rule: apply 
  
     6 │ /* Using @apply - THIS WILL SHOW WARNING */
     7 │ .button {
   > 8 │   @apply text-white px-4 bg-blue-500 py-2;
       │    ^^^^^
     9 │ }

style.css:13:15 lint/correctness/noUnknownFunction ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Unexpected unknown function: theme
  
    11 │ /* Using theme() function - THIS WILL SHOW WARNING */
    12 │ .card {
  > 13 │   background: theme('colors.gray.100');
       │               ^^^^^
    14 │ }
```

**Note**: Biome currently doesn't have built-in support for Tailwind CSS directives and functions in CSS files. These warnings are expected since `@tailwind`, `@apply`, and `theme()` are Tailwind-specific features that aren't part of standard CSS.

