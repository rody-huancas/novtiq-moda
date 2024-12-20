import { cva } from "class-variance-authority";

export const modalVariants = cva(
  [
    "bg-white",
    "relative",
    "w-full",
    "rounded-lg",
    "shadow-lg",
    "m-4",
    "border",
    "z-30",
  ],
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
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
  [
    "fixed",
    "inset-0",
    "z-20",
    "duration-200",
  ],
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