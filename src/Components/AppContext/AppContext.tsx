/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, ReactNode } from "react";

interface AppContextProps {
  isLoginSectionOpen: boolean;
  setLoginSectionOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SearchContextProps {
  isSearchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const AppContext = createContext<AppContextProps | null>(null);
export const SearchContext = createContext<SearchContextProps | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
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
  const [isSearchTerm, setSearchTerm] = useState("");

  const appContextValue: AppContextProps = {
    isLoginSectionOpen,
    setLoginSectionOpen,
  };

  const searchContextValue: SearchContextProps = {
    isSearchTerm,
    setSearchTerm,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <SearchContext.Provider value={searchContextValue}>
        {children}
      </SearchContext.Provider>
    </AppContext.Provider>
  );
};
