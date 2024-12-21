import { cn } from "../../utils";

interface ModalHeaderProps {
  title?          : string;
  showCloseButton?: boolean;
  onClose?        : () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, showCloseButton, onClose }) => (
  <div className="flex items-center justify-between p-4">
    {title && (
      <h3
        className="text-lg font-semibold text-gray-900 dark:text-gray-100"
        id="modal-title"
      >
        {title}
      </h3>
    )}
    {showCloseButton && (
      <button
        onClick={onClose}
        className={cn(
          "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200",
          "focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400",
          "rounded-full p-1 transition-colors duration-200",
          "hover:bg-gray-100 dark:hover:bg-gray-700"
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
);

export default ModalHeader;
