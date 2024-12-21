interface ModalContentProps {
  children: React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children }) => (
  <div className="p-4 text-gray-900 dark:text-gray-100">{children}</div>
);

export default ModalContent;
