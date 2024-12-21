import { cva } from "class-variance-authority";

export const modalVariants = cva(
  [
    "bg-white dark:bg-gray-800",
    "relative",
    "w-full",
    "rounded-lg",
    "shadow-lg",
    "m-4",
    "border",
    "border-gray-200 dark:border-gray-700",
    "z-30",
  ],
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-[800px]",
        "3xl": "max-w-[900px]",
        "4xl": "max-w-[80%]",
        full: "max-w-full",
      },
      position: {
        center: "duration-200",
        top: "duration-200",
        bottom: "duration-200",
      },
    },
    defaultVariants: {
      size: "md",
      position: "center",
    },
  }
);

export const overlayVariants = cva(
  ["fixed", "inset-0", "z-20", "duration-200", "backdrop-blur-sm"],
  {
    variants: {
      overlay: {
        default: "bg-black/50",
        dark: "bg-black/75",
        light: "bg-black/25",
        none: "bg-transparent",
      },
    },
    defaultVariants: {
      overlay: "default",
    },
  }
);
