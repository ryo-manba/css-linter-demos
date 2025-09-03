# Custom Syntax Demo: Stylelint

## Setup

```sh
npm i
```

## Custom Syntax Support

This demo shows how to use `customSyntax` to lint CSS in non-CSS files:

- HTML files with `<style>` tags and inline styles
- JavaScript files with CSS-in-JS (styled-components)
- SCSS files with Sass syntax

## Configuration

The `.stylelintrc.json` uses `overrides` to apply different custom syntaxes:

```json
{
  "extends": "stylelint-config-standard",
  "overrides": [
    {
      "files": ["**/*.html"],
      "customSyntax": "postcss-html"
    },
    {
      "files": ["**/*.js", "**/*.jsx"],
      "customSyntax": "postcss-styled-syntax"
    },
    {
      "files": ["**/*.scss"],
      "customSyntax": "postcss-scss",
      "extends": "stylelint-config-standard-scss"
    },
  ]
}
```

## Run

### Lint HTML file

```sh
npx stylelint index.html
```

Output:

```sh
index.html
  10:16  ✖  Unexpected unit                         length-zero-no-unit
  12:20  ✖  Unexpected quotes around "Arial"        font-family-name-quotes
  12:20  ✖  Unexpected missing generic font family  font-family-no-missing-generic-family-keyword
  22:12  ✖  Unexpected empty block                  block-no-empty
  29:36  ✖  Unexpected unit                         length-zero-no-unit

✖ 5 problems (5 errors, 0 warnings)
```

### Lint JavaScript file with CSS-in-JS

```sh
npx stylelint Button.js
```

Output:

```sh
Button.js
   6:12  ✖  Unexpected unit                         length-zero-no-unit
  10:16  ✖  Unexpected quotes around "Arial"        font-family-name-quotes
  10:16  ✖  Unexpected missing generic font family  font-family-no-missing-generic-family-keyword
  12:3   ✖  Unexpected missing scoping root         nesting-selector-no-missing-scoping-root
  18:3   ✖  Unexpected missing scoping root         nesting-selector-no-missing-scoping-root
  18:12  ✖  Unexpected empty block                  block-no-empty

✖ 6 problems (6 errors, 0 warnings)
```

### Lint SCSS file

```sh
npx stylelint style.scss
```

Output:

```sh
style.scss
   8:12  ✖  Unexpected unit                                                     length-zero-no-unit
  19:14  ✖  Unexpected empty block                                              block-no-empty
  29:16  ✖  Unexpected quotes around "Arial"                                    font-family-name-quotes
  29:16  ✖  Unexpected missing generic font family                              font-family-no-missing-generic-family-keyword
  35:3   ✖  Expected empty line before declaration                              declaration-empty-line-before
  35:12  ✖  Unexpected unit                                                     length-zero-no-unit
  45:10  ✖  Unexpected unknown value "calculate-width(3)" for property "width"  declaration-property-value-no-unknown

✖ 7 problems (7 errors, 0 warnings)
```

### Lint all files

```sh
npx stylelint "**/*.{html,js,scss,css}"
```

## Supported Syntaxes

- **postcss-html**: Parses HTML files, Vue SFC, and other HTML-like files
- **postcss-styled-syntax**: Parses CSS-in-JS including styled-components, Emotion, etc.
- **postcss-scss**: Parses SCSS/Sass syntax with variables, mixins, nesting, etc.

## Fix

Many violations can be automatically fixed:

```sh
npx stylelint "**/*.{html,js,scss,css}" --fix
```
