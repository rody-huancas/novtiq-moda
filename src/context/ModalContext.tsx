import React, { createContext, useContext, useCallback } from "react";

interface ModalContextType {
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};

interface ModalProviderProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = (props) => {
  const { onClose, children } = props;
  
  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <ModalContext.Provider value={{ closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
