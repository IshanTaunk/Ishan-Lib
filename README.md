Sure! Here’s a concise but professional **README.md** that documents both your **Button** and **Modal** components in your npm library 👇

---

# 🧱 ishan-ui-library

A lightweight React UI library featuring simple, reusable **Button** and **Modal** components.

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

Import the components and their styles in your React project:

```tsx
import React, { useState } from 'react';
import { Button, Modal } from 'ishan-ui-library';
import 'ishan-ui-library/dist/index.css';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: '1rem' }}>
      <Button variant="solid" size="md" onClick={() => setOpen(true)}>
        Open Modal
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Hello 👋</h2>
        <p>This is a simple modal.</p>
      </Modal>
    </div>
  );
}
```

---

## 🎨 Components

### 🔘 Button

A customizable button with **size** and **variant** options.

#### Props

| Prop        | Type                              | Default   | Description               |
| ----------- | --------------------------------- | --------- | ------------------------- |
| `variant`   | `'solid' \| 'outline' \| 'ghost'` | `'solid'` | Defines the button style. |
| `size`      | `'sm' \| 'md' \| 'lg'`            | `'md'`    | Sets the button size.     |
| `onClick`   | `() => void`                      | –         | Handles button click.     |
| `className` | `string`                          | –         | Adds custom class names.  |
| `children`  | `React.ReactNode`                 | –         | Button content.           |

#### Example

```tsx
<Button variant="solid" size="sm">Small Solid</Button>
<Button variant="outline" size="md">Medium Outline</Button>
<Button variant="ghost" size="lg">Large Ghost</Button>
```

---

### 🪟 Modal

A minimal, accessible modal component rendered via a React portal.

#### Props

| Prop       | Type              | Required | Description                                           |
| ---------- | ----------------- | -------- | ----------------------------------------------------- |
| `open`     | `boolean`         | ✅        | Controls visibility of the modal.                     |
| `onClose`  | `() => void`      | ✅        | Called when the modal or overlay is clicked to close. |
| `children` | `React.ReactNode` | ✅        | Modal content.                                        |

#### Example

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
  <h2>Modal Title</h2>
  <p>This is a minimal modal component.</p>
</Modal>
```

---

## 🛠 Development

```bash
# install dependencies
npm install

# start Storybook for development
npm run storybook

# build library
npm run build
```

---

## 🧾 License

Licensed under the [ISC License](./LICENSE).

---
