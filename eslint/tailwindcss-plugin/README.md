# Tailwind CSS Plugin Demo: ESLint

## Setup

```sh
npm i
```

## Configuration

Uses `eslint-plugin-tailwindcss` to enforce Tailwind CSS best practices in JSX files.

```javascript
import tailwindcss from "eslint-plugin-tailwindcss";

export default [
  ...tailwindcss.configs["flat/recommended"],
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "tailwindcss/classnames-order": "error",
      "tailwindcss/no-contradicting-classname": "error",
      "tailwindcss/enforces-shorthand": "error",
      "tailwindcss/no-custom-classname": ["error", {
        whitelist: ["custom-.*", "btn-.*"]
      }],
      "tailwindcss/no-unnecessary-arbitrary-value": "error",
      "tailwindcss/enforces-negative-arbitrary-values": "error",
      "tailwindcss/no-arbitrary-value": "error",
    }
  }
];
```

## Run

```sh
npx eslint App.jsx
```

Output:

```sh
/eslint/tailwindcss-plugin/App.jsx
   7:12  error  Invalid Tailwind CSS classnames order                                          tailwindcss/classnames-order
  10:12  error  Classnames w-32, w-64 are conflicting!                                         tailwindcss/no-contradicting-classname
  13:12  error  The arbitrary class 'p-[1rem]' could be replaced by 'p-4'                      tailwindcss/no-unnecessary-arbitrary-value
  16:12  error  Classname 'my-custom-class' is not a Tailwind CSS class!                       tailwindcss/no-custom-classname
  19:12  error  Invalid Tailwind CSS classnames order                                          tailwindcss/classnames-order
  19:12  error  Classnames 'pt-4, pr-4, pb-4, pl-4' could be replaced by the 'p-4' shorthand!  tailwindcss/enforces-shorthand
  22:12  error  Arbitrary value classname '-top-[5px]' should not start with a dash (-)        tailwindcss/enforces-negative-arbitrary-values

✖ 7 problems (7 errors, 0 warnings)
  4 errors and 0 warnings potentially fixable with the `--fix` option.
```
