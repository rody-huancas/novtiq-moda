import { type VariantProps } from "class-variance-authority";
import { modalVariants, overlayVariants } from "../components/Modal/modal.variants";

export interface ModalProps extends VariantProps<typeof modalVariants>, VariantProps<typeof overlayVariants> {
  isOpen              : boolean;
  onClose             : () => void;
  title?              : string;
  children            : React.ReactNode;
  className?          : string;
  closeOnOverlayClick?: boolean;
  closeOnEsc?         : boolean;
  showCloseButton?    : boolean;
  hasOverlay?         : boolean;
}
