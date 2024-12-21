/* Components */
import ModalHeader from "./ModalHeader";
import ModalContent from "./ModalContent";
import ModalOverlay from "./ModalOverlayProps";
/* Utils */
import { cn } from "../../utils";
/* Variants */
import { modalVariants } from "./modal.variants";
/* Types */
import type { ModalProps } from "../../types";
/* Hooks */
import { useModalAnimation } from "../../hooks/useModalAnimation";
import { useModalKeyboard } from "../../hooks/useModalKeyboard";
import { useModalScrollLock } from "../../hooks/useModalScrollLock";
/* Context */
import { ModalProvider } from "../../context/ModalContext";

const Modal: React.FC<ModalProps> = (props) => {
  const {
    isOpen = false,
    onClose,
    title,
    children,
    className,
    closeOnOverlayClick = true,
    closeOnEsc = true,
    size,
    position = "center",
    showCloseButton = true,
    hasOverlay = true,
    overlay = "default",
  } = props;

  const { isClosing, isShowing, handleClose } = useModalAnimation({ isOpen, onClose });
  useModalKeyboard({ isOpen, onClose: handleClose, closeOnEsc });
  useModalScrollLock({ isOpen });

  if (!isShowing) return null;

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "items-start pt-20";
      case "bottom":
        return "items-end pb-20";
      default:
        return "items-center";
    }
  };

  return (
    <ModalProvider onClose={handleClose}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center z-50",
          getPositionClasses(),
          isClosing
            ? "animate-out fade-out duration-200"
            : "animate-in fade-in duration-200"
        )}
        aria-labelledby={title ? "modal-title" : undefined}
        role="dialog"
        aria-modal="true"
      >
        {hasOverlay && (
          <ModalOverlay
            isClosing={isClosing}
            onClick={() => closeOnOverlayClick && handleClose()}
            overlay={overlay || "default"}
          />
        )}

        <div
          className={cn(
            modalVariants({ size, position }),
            position === "center" && [
              isClosing
                ? "animate-out zoom-out-95 fade-out slide-out-to-bottom-[48%] duration-200"
                : "animate-in zoom-in-95 fade-in slide-in-from-bottom-[48%] duration-200",
            ],
            position === "top" && [
              isClosing
                ? "animate-out slide-out-to-top duration-200"
                : "animate-in slide-in-from-top duration-200",
            ],
            position === "bottom" && [
              isClosing
                ? "animate-out slide-out-to-bottom duration-200"
                : "animate-in slide-in-from-bottom duration-200",
            ],
            className
          )}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {(title || showCloseButton) && (
            <ModalHeader
              title={title}
              showCloseButton={showCloseButton}
              onClose={handleClose}
            />
          )}
          <ModalContent>{children}</ModalContent>
        </div>
      </div>
    </ModalProvider>
  );
};

export default Modal;
