import { cn } from "../../utils";
import { overlayVariants } from "./modal.variants";

interface ModalOverlayProps {
  isClosing: boolean;
  onClick? : () => void;
  overlay? : "default" | "dark" | "light" | "none";
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({ isClosing, onClick, overlay = "default" }) => (
  <div
    className={cn(
      overlayVariants({ overlay }),
      isClosing
        ? "animate-out fade-out duration-200"
        : "animate-in fade-in duration-200"
    )}
    onClick={onClick}
    aria-hidden="true"
  />
);

export default ModalOverlay;
