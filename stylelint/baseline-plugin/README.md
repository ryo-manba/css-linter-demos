# Baseline Demo: Stylelint

## Setup

```sh
npm i
```

## stylelint-plugin-use-baseline

While Stylelint does not yet have built-in support for Baseline, the [`stylelint-plugin-use-baseline`](https://github.com/ryo-manba/stylelint-plugin-use-baseline) plugin adds a linting rule similar to ESLint's.

### Baseline Widely available

```sh
npx stylelint style.css
```

Output:

```sh
style.css
   6:3   ✖  Property "accent-color" is not a widely available baseline feature.                          plugin/use-baseline
  10:3   ✖  Property "backdrop-filter" is not a widely available baseline feature.                       plugin/use-baseline
  14:16  ✖  Value "anchor-center" of property "align-items" is not a widely available baseline feature.  plugin/use-baseline
  18:10  ✖  Type "abs" is not a widely available baseline feature.                                       plugin/use-baseline
  21:1   ✖  At-rule "@view-transition" is not a widely available baseline feature.                       plugin/use-baseline
  26:9   ✖  Media condition "device-height" is not a widely available baseline feature.                  plugin/use-baseline
  32:16  ✖  Selector "has" is not a widely available baseline feature.                                   plugin/use-baseline

✖ 7 problems (7 errors, 0 warnings)
```

### Baseline Newly available

In [.stylelintrc.json](.stylelintrc.json) change the `available` option of the use-baseline rule to "newly":

```json
"rules": {
  "plugin/use-baseline": [
    true,
    {
      "available": "newly"
    }
  ]
}
```

Rerun Stylelint:

```sh
npx stylelint style.css
```

Output:

```sh
style.css
   6:3   ✖  Property "accent-color" is not a newly available baseline feature.                          plugin/use-baseline
  14:16  ✖  Value "anchor-center" of property "align-items" is not a newly available baseline feature.  plugin/use-baseline
  21:1   ✖  At-rule "@view-transition" is not a newly available baseline feature.                       plugin/use-baseline
  26:9   ✖  Media condition "device-height" is not a newly available baseline feature.                  plugin/use-baseline

✖ 4 problems (4 errors, 0 warnings)
```

### Baseline year

In [.stylelintrc.json](.stylelintrc.json) change the `available` option of the use-baseline rule to a year in YYYY format:

```json
"rules": {
  "plugin/use-baseline": [
    true,
    {
      "available": 2023
    }
  ]
}
```

Rerun Stylelint:

```sh
npx stylelint style.css
```

Output:

```sh
style.css
   6:3   ✖  Property "accent-color" is not a 2023 available baseline feature.                          plugin/use-baseline
  10:3   ✖  Property "backdrop-filter" is not a 2023 available baseline feature.                       plugin/use-baseline
  14:16  ✖  Value "anchor-center" of property "align-items" is not a 2023 available baseline feature.  plugin/use-baseline
  18:10  ✖  Type "abs" is not a 2023 available baseline feature.                                       plugin/use-baseline
  21:1   ✖  At-rule "@view-transition" is not a 2023 available baseline feature.                       plugin/use-baseline
  26:9   ✖  Media condition "device-height" is not a 2023 available baseline feature.                  plugin/use-baseline

✖ 6 problems (6 errors, 0 warnings)
```
