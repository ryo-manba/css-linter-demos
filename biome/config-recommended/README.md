# Config Recommended Demo: Biome

## Setup

```sh
npm i
```

## Biome Recommended Rules

This demo uses Biome with `"recommended": true` which enables all recommended CSS lint rules.

### Run

```sh
npx biome lint .
```

Output:

```sh
./style.css:8:10 parse ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Expected a color but instead found '#'.
  
     6 │ /* Invalid color */
     7 │ .invalid {
   > 8 │   color: #zzz;
       │          ^
     9 │   background: #12345;
    10 │ }

./style.css:9:16 parse ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Invalid color
  
     7 │ .invalid {
     8 │   color: #zzz;
   > 9 │   background: #12345;
       │                ^^^^^
    10 │ }

./style.css:14:3 lint/correctness/noUnknownProperty ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × Unknown property is not allowed.
  
    12 │ /* Unknown property */
    13 │ .duplicate {
  > 14 │   colr: #fff;
       │   ^^^^
    15 │ }

./style.css:18:8 lint/suspicious/noEmptyBlock ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  × An empty block isn't allowed.
  
    17 │ /* Empty block */
  > 18 │ .empty {
       │        ^
  > 19 │ }
       │ ^

Found 4 errors.
```

### What it checks

- Invalid colors
- Unknown properties
- Empty blocks
- And other possible errors from Biome's recommended ruleset
