import NavbarMenu from "../components/NavbarMenu";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <NavbarMenu />
      <Outlet />
    </>
  );
};

export default MainLayout;
