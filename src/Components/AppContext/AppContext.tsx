/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  isLoginSectionOpen: boolean;
  setLoginSectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isLoginSectionOpen, setLoginSectionOpen] = useState(false);

  const value: AppContextProps = {
    isLoginSectionOpen,
    setLoginSectionOpen,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
