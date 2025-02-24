import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
