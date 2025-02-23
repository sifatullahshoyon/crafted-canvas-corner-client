import Topbar from "@/components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
