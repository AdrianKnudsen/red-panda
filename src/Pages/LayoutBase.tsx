import { Outlet } from "react-router-dom";
import HeroSection from "../Components/HeroSection/heroSection";
import { NavBar } from "../Components/NavBar/NavBar";
export function LayoutBase() {
  return (
    <>
      <NavBar />
      <HeroSection />

      <div>
        <Outlet />
      </div>

      <footer></footer>

    </>
  );
}
