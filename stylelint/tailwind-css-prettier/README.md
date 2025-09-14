# Tailwind CSS: Stylelint + Prettier

Demo showing how to use Stylelint for CSS files and Prettier for automatic Tailwind class sorting in JSX.

## Setup

```sh
npm i
```

## Configuration

### Stylelint (`.stylelintrc.json`)

```json
{
  "extends": ["stylelint-config-tailwindcss"]
}
```

### Prettier (`.prettierrc.json`)

```json
{
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindFunctions": ["clsx"]
}
```

## Run

```sh
# Check CSS with Stylelint
npx stylelint style.css

# Format JSX with Prettier (sorts Tailwind classes)
npx prettier --write index.jsx
```

## Stylelint with stylelint-config-tailwindcss

With `stylelint-config-tailwindcss`, Tailwind directives are recognized:

```css
/* These are valid - NO WARNING */
@tailwind base;
@apply text-white px-4;
background: theme('colors.gray.100');

/* Unknown at-rules still show warnings */
@unknown example; /* ✖ Unexpected unknown at-rule */
```

## Prettier Plugin Features

### 1. Automatic Class Sorting

Before:
```jsx
<div className="text-white px-4 bg-blue-500 py-2" />
```

After:
```jsx
<div className="bg-blue-500 px-4 py-2 text-white" />
```

### 2. Duplicate Removal

Before:
```jsx
<div className="p-4 bg-blue-500 p-4 text-white p-4" />
```

After:
```jsx
<div className="bg-blue-500 p-4 text-white" />
```

### 3. clsx Function Support

```jsx
clsx("text-white px-4", "bg-blue-500 py-2")
// Becomes:
clsx("px-4 text-white", "bg-blue-500 py-2")
```

## Files

- `style.css` - Demonstrates Tailwind directives and unknown at-rule warning
- `index.jsx` - React components with Tailwind classes for Prettier formatting

## Notes

- **Stylelint** validates CSS files, recognizes Tailwind directives but still warns on truly unknown at-rules
- **Prettier Plugin** formats JSX/HTML files, sorting Tailwind classes and removing duplicates
- The `tailwindFunctions` option enables sorting within utility functions like `clsx`
