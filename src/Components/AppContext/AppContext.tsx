/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  isLoginSectionOpen: boolean;
  isSearchTerm: string;
  setLoginSectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps>({
  isLoginSectionOpen: false,
  isSearchTerm: "", // Provide a default value for isSearchTerm
  setLoginSectionOpen: () => {},
  setSearchTerm: () => {},
});

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

export const AppContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isLoginSectionOpen, setLoginSectionOpen] = useState(false);
  const [isSearchTerm, setSearchTerm] = useState("");

  const appContextValue: AppContextProps = {
    isLoginSectionOpen,
    isSearchTerm,
    setLoginSectionOpen,
    setSearchTerm,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};
