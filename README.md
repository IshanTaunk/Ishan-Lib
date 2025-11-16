# 🧱 ishan-ui-library

A lightweight, reusable React UI library featuring a customizable **Button** component with built-in size and variant options.

---

## 🚀 Installation

```bash
# with npm
npm install ishan-ui-library

# or with yarn
yarn add ishan-ui-library
```

---

## 🧩 Usage

Import the component and its CSS in your React app:

```tsx
import React from 'react';
import { Button } from 'ishan-ui-library';
import 'ishan-ui-library/dist/index.css';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="solid" size="md">Solid</Button>
      <Button variant="outline" size="md">Outline</Button>
      <Button variant="ghost" size="md">Ghost</Button>
    </div>
  );
}
```

---

## 🎨 Button Props

| Prop        | Type                                | Default     | Description                                               |
| ----------- | ----------------------------------- | ----------- | --------------------------------------------------------- |
| `variant`   | `'solid'` | `'outline'` | `'ghost'` | `'solid'`   | Defines the visual style of the button.                   |
| `size`      | `'sm'` | `'md'` | `'lg'`            | `'md'`      | Adjusts padding and font size.                            |
| `fullWidth` | `boolean`                           | `false`     | Expands the button to take the full container width.      |
| `loading`   | `boolean`                           | `false`     | Displays a spinner and disables the button while loading. |
| `leftIcon`  | `ReactNode`                         | `undefined` | Renders an icon before the text.                          |
| `rightIcon` | `ReactNode`                         | `undefined` | Renders an icon after the text.                           |
| `disabled`  | `boolean`                           | `false`     | Disables button interaction.                              |
| `onClick`   | `(event) => void`                   | `undefined` | Click handler.                                            |
| `className` | `string`                            | `undefined` | Adds custom class names.                                  |

---

## 🧠 Examples

### 🔘 Variants

```tsx
<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

### 📏 Sizes

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

### ⏳ Loading State

```tsx
<Button loading>Loading...</Button>
```

### 🧱 Full Width

```tsx
<Button fullWidth>Full Width Button</Button>
```

### ⭐ Icons

```tsx
<Button leftIcon={<span>⭐</span>}>Star</Button>
<Button rightIcon={<span>→</span>}>Next</Button>
```

---

## 🧩 Theming

You can override colors using CSS variables in your app’s stylesheet:

```css
:root {
  --btn-bg: #2e7d32; /* solid background */
  --btn-bd: #2e7d32; /* border color */
  --btn-fg: #fff;    /* text color */
}
```

---

## 🛠 Development Setup

```bash
# install dependencies
npm install

# build the library
npm run build

# run Rollup build manually
npm run rollup
```

---

## 📦 Publishing

1. Update the version in `package.json`.
2. Build the package:

   ```bash
   npm run build
   ```
3. Publish to npm:

   ```bash
   npm publish --access public
   ```

---

## 🧾 License

This project is licensed under the [ISC License](./LICENSE).

---

Would you like me to extend this README with a **preview section** (like screenshots or storybook link placeholders)?
