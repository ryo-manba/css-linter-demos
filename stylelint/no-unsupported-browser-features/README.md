# Stylelint No Unsupported Browser Features Demo

Detects CSS features not supported in specified browsers using `stylelint-no-unsupported-browser-features`.

## Setup

```bash
npm install
npm run lint
```

## Configuration

Checks against: IE 11, Safari 12, Firefox ESR, last 2 versions, > 1% market share

## Example Output

```shell
style.css
   5:3  ⚠  Unexpected browser feature "css-grid" is not supported by Opera Mini...
  11:3  ⚠  Unexpected browser feature "css-variables" is not supported by IE 10,11...
  15:3  ⚠  Unexpected browser feature "css-variables" is not supported by IE 10,11...
  19:1  ⚠  Unexpected browser feature "css-container-queries" is not supported by IE 10,11...
  21:5  ⚠  Unexpected browser feature "rem" is only partially supported by IE 10

⚠ 5 problems (0 errors, 5 warnings)
```
