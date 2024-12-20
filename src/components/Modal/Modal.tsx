import { useEffect, useState } from "react";
import { modalVariants, overlayVariants } from "./modal.variants";
import type { ModalProps } from "../../types";
import { cn } from "../../utils";

const Modal = ({
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
}: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShowing(true);
      setIsClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeOnEsc]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsShowing(false);
      setIsClosing(false);
    }, 200); // Debe coincidir con la duración de la animación
  };

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
    <div
      className={cn(
        "fixed inset-0 flex justify-center",
        getPositionClasses(),
        isClosing
          ? "animate-out fade-out duration-200"
          : "animate-in fade-in duration-200"
      )}
      aria-labelledby={title ? "modal-title" : undefined}
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      {hasOverlay && (
        <div
          className={cn(
            overlayVariants({ overlay }),
            isClosing
              ? "animate-out fade-out duration-200"
              : "animate-in fade-in duration-200"
          )}
          onClick={() => closeOnOverlayClick && handleClose()}
          aria-hidden="true"
        />
      )}

      {/* Modal Container */}
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
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-4 border-b">
            {title && (
              <h3 className="text-lg font-semibold" id="modal-title">
                {title}
              </h3>
            )}
            {showCloseButton && (
              <button
                onClick={handleClose}
                className={cn(
                  "text-muted-foreground hover:text-foreground",
                  "focus:outline-none focus:ring-2 focus:ring-ring",
                  "rounded-full p-1"
                )}
                aria-label="Close"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
