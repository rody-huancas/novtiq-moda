import { useEffect, useState, useCallback } from "react";

interface UseModalAnimationProps {
  isOpen   : boolean;
  onClose  : () => void;
  duration?: number;
}

export const useModalAnimation = (props: UseModalAnimationProps) => {
  const { isOpen, onClose, duration = 200 } = props;

  const [isClosing, setIsClosing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsShowing(false);
      setIsClosing(false);
    }, duration);
  }, [onClose, duration]);

  return {
    isClosing,
    isShowing,
    handleClose,
  };
};
