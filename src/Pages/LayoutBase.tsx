import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar/NavBar";
import { Aside } from "../Components/Aside/Aside";
export function LayoutBase() {
  return (
    <>
      <NavBar />
      <Aside />
      <div>
        <Outlet />
      </div>

      <footer></footer>
    </>
  );
}
