import Navbar from "@/components/shared/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
