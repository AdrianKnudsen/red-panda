import { Outlet } from "react-router-dom";
import HeroSection from "../Components/HeroSection/heroSection";
import { NavBar } from "../Components/NavBar/NavBar";
import LoginSection from "../Components/LoginSection/loginSection";
import { AppContext } from "../Components/AppContext/AppContext";
import { useContext, useState } from "react";

export function LayoutBase() {
  const context = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState<string>("");

  if (!context) {
    console.error("AppContext is not available");
    return null;
  }

  const { isLoginSectionOpen } = context;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} searchTerm={searchTerm} />
      <HeroSection />
      {isLoginSectionOpen && <LoginSection />}

      <div>
        <Outlet />
      </div>

      <footer></footer>
    </>
  );
}
