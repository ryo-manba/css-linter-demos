# Biome CSS Modules Example

Shows how Biome handles CSS Modules syntax.

## Setup & Run

```bash
npm install
npx biome lint styles.module.css
```

## Result

```shell
styles.module.css:19:3 lint/correctness/noUnknownProperty
  × Unknown property is not allowed.
  > 19 │   compose-with: base;
       │   ^^^^^^^^^^^^

styles.module.css:34:2 lint/correctness/noUnknownPseudoClass
  × Unexpected unknown pseudo-class export 
  > 34 │ :export {
       │  ^^^^^^

styles.module.css:35:3 lint/correctness/noUnknownProperty
  × Unknown property is not allowed.
  > 35 │   black: #000;
       │   ^^^^^

styles.module.css:36:3 lint/correctness/noUnknownProperty
  × Unknown property is not allowed.
  > 36 │   white: #111;
       │   ^^^^^

styles.module.css:41:3 lint/correctness/noUnknownProperty
  × Unknown property is not allowed.
  > 41 │   foo: red;
       │   ^^^
```

## CSS Modules Support

✅ **Supported:**

- `composes` property
- `:global()` pseudo-class

❌ **Not Supported:**

- `@value` declarations
- `compose-with` property
- `:export` pseudo-class and its properties
- CSS Module variables (`primary`)

⚠️ **Note:** Biome doesn't validate property values, so `color: baz` is not reported.