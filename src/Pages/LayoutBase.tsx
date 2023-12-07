import { Outlet } from "react-router-dom";
import HeroSection from "../Components/HeroSection/heroSection";
import { NavBar } from "../Components/NavBar/NavBar";
import LoginSection from "../Components/LoginSection/loginSection";
import { AppContext } from "../Components/AppContext/AppContext";
import { useContext } from "react";

export function LayoutBase() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("AppContext is not available");
    return null;
  }

  const { isLoginSectionOpen } = context;

  return (
    <>
      <NavBar />
      <HeroSection />
      {isLoginSectionOpen && <LoginSection />}

      <div>
        <Outlet />
      </div>

      <footer></footer>
    </>
  );
}
