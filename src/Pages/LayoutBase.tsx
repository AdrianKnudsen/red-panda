import { Outlet } from "react-router-dom";
import HeroSection from "../Components/HeroSection/heroSection";

export function LayoutBase() {
  return (
    <>
      <HeroSection />

      <div>
        <Outlet />
      </div>

      <footer> Footer </footer>
    </>
  );
}
