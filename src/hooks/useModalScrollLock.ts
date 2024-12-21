import { useEffect } from "react";

interface UseModalScrollLockProps {
  isOpen: boolean;
}

export const useModalScrollLock = ({ isOpen }: UseModalScrollLockProps) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);
};
