import { createContext, useMemo, useState } from "react";

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };
  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };
  const value = useMemo(() => ({
    isRegisterModalOpen,
    openRegisterModal,
    closeRegisterModal,
  }), [isRegisterModalOpen]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}