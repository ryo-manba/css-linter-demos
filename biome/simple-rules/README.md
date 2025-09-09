# Simple Rules Demo: Biome

## Setup

```sh
npm i
```

## Basic Rules

This demo shows Biome with just 2 simple CSS rules configured directly.

### Rules

- `noDuplicateCustomProperties`: Detects duplicate CSS custom properties
- `noEmptyBlock`: Detects empty CSS blocks

### Run

```sh
npx biome lint .
```

Output:

```sh
./style.css:14:8 lint/suspicious/noEmptyBlock ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × An empty block isn't allowed.
  
    13 │ /* Empty block */
  > 14 │ .empty {
       │        ^
  > 15 │ }
       │ ^

./style.css:10:3 lint/nursery/noDuplicateCustomProperties ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Duplicate custom properties can lead to unexpected behavior
  
     8 │ :root {
     9 │   --main-color: blue;
  > 10 │   --main-color: red;  /* Duplicate custom property */
       │   ^^^^^^^^^^^^
    11 │ }

Found 2 errors.
```