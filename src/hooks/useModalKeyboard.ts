import { useEffect } from "react";

interface UseModalKeyboardProps {
  isOpen     : boolean;
  onClose    : () => void;
  closeOnEsc?: boolean;
}

export const useModalKeyboard = (props: UseModalKeyboardProps) => {
  const { isOpen, onClose, closeOnEsc = true } = props;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, closeOnEsc, onClose]);
};
