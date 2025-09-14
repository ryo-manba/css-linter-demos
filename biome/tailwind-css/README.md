# Tailwind CSS Class Sorting: Biome

Minimal demo of Biome's `useSortedClasses` rule for sorting Tailwind CSS classes.

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
