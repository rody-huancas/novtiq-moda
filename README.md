# novtiq-modal

`novtiq-modal` is a highly customizable modal library built with React and designed to work seamlessly with Tailwind CSS. It offers features such as animation support, scroll locking, keyboard closing, and position options.

📚 **[View Interactive Documentation & Examples](https://novtiq-modal.vercel.app/)**
<br />
⭐ **[You can leave us a star on GitHub](https://github.com/rody-huancas/novtiq-modal/)**

## Installation

Before starting, ensure you have Node.js and npm installed. Then, install the library by running:

```bash
npm install novtiq-modal
```

Also, make sure Tailwind CSS is set up in your project.

In the `tailwind.config.js` file, add the following to enable dark mode:

```js
module.exports = {
  darkMode: "class", // Enable dark mode support
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

## Basic Usage

First, import the `Modal` component and use it in your project. Ensure Tailwind CSS is included in your project to fully leverage the modal's functionality.

```tsx
import { useState } from "react";
import { Modal } from "novtiq-modal";
import "novtiq-modal/dist/novtiq-modal.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        size="lg"
        position="center"
        showCloseButton={true}
        hasOverlay={true}
        overlay="dark"
        closeOnOverlayClick={true}
        closeOnEsc={true}
      >
        <p className="text-gray-800">This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
```

## Available Props

### Main Properties

| Prop                  | Type                                                                | Description                                      | Default Value |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------------------ | ------------- |
| `isOpen`              | `boolean`                                                           | Controls whether the modal is open or closed.    | `false`       |
| `onClose`             | `() => void`                                                        | Function executed when the modal is closed.      | `undefined`   |
| `title`               | `string`                                                            | Title displayed in the modal header.             | `undefined`   |
| `children`            | `React.ReactNode`                                                   | Content rendered inside the modal.               | `undefined`   |
| `className`           | `string`                                                            | Additional classes to customize the modal style. | `undefined`   |
| `size`                | `"sm" \| "md" \| "lg" \| "xl" \| "2xl" \| "3xl" \| "4xl" \| "full"` | Modal size.                                      | `"md"`        |
| `position`            | `"top" \| "center" \| "bottom"`                                     | Vertical position of the modal.                  | `"center"`    |
| `showCloseButton`     | `boolean`                                                           | Shows the close button in the modal header.      | `true`        |
| `hasOverlay`          | `boolean`                                                           | Displays an overlay behind the modal.            | `true`        |
| `overlay`             | `"default" \| "dark" \| "light" \| "none"`                          | Overlay style.                                   | `"default"`   |
| `closeOnOverlayClick` | `boolean`                                                           | Closes the modal when clicking on the overlay.   | `true`        |
| `closeOnEsc`          | `boolean`                                                           | Closes the modal when pressing the Escape key.   | `true`        |

### `size` Prop

The `size` prop controls the width of the modal. Available options include:

- `sm` - Small size (e.g., `max-w-sm`)
- `md` - Medium size (e.g., `max-w-md`)
- `lg` - Large size (e.g., `max-w-lg`)
- `xl` - Extra-large size (e.g., `max-w-xl`)
- `2xl` - Double extra-large size (e.g., `max-w-[800px]`)
- `3xl` - Triple extra-large size (e.g., `max-w-[900px]`)
- `4xl` - Quadruple extra-large size (e.g., `max-w-[80%]`)
- `full` - Full-width size (e.g., `max-w-full`)

## Advanced Example

You can customize the modal's behavior according to your needs:

```tsx
import { useState } from "react";
import { Modal } from "novtiq-modal";
import "novtiq-modal/dist/novtiq-modal.css";

const AdvancedModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Open Advanced Modal
      </button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Advanced Modal"
        size="xl"
        position="bottom"
        hasOverlay={true}
        overlay="dark"
        closeOnOverlayClick={false}
      >
        <p className="text-gray-800">This modal has advanced configurations.</p>
      </Modal>
    </div>
  );
};

export default AdvancedModalExample;
```

## Styling

The modal's design is optimized for Tailwind CSS. You can easily customize the CSS classes using the `className` property or by extending Tailwind's configurations.

## Notes

- This component requires your project to support Tailwind CSS animations.
- Adding `darkMode: "class"` to your `tailwind.config.js` file is mandatory for proper dark mode functionality.

---

Thank you for using `novtiq-modal`! If you encounter any issues or have suggestions, feel free to open an issue in our repository.
