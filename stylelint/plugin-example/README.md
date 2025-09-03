# Custom Plugin Example: Stylelint

## Setup

```sh
npm i
```

## Custom Stylelint Plugin

This demo shows how to create a simple custom Stylelint plugin.

### Rule: `example/selector-no-foo`

Prevents the use of "foo" in CSS selectors.

## Plugin File

- `selector-no-foo.js` - Plugin that checks for "foo" in selectors

## Run

```sh
npx stylelint style.css
```

Output:

```sh
style.css
  15:1  ✖  Unexpected "foo" within selector ".foo"          example/selector-no-foo
  19:1  ✖  Unexpected "foo" within selector ".foo-bar"      example/selector-no-foo
  23:1  ✖  Unexpected "foo" within selector "#foo-header"   example/selector-no-foo
  27:1  ✖  Unexpected "foo" within selector ".navbar-foo"   example/selector-no-foo

✖ 4 problems (4 errors, 0 warnings)
```

## How it Works

1. The plugin is loaded from a local JavaScript file in `.stylelintrc.json`
2. The plugin exports a rule created with `stylelint.createPlugin()`
3. The rule walks through all CSS rules and checks if selectors contain "foo"
4. Custom error messages are displayed when the rule is violated