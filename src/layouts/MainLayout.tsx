import Footer from "@/components/shared/Footer/Footer";
import SecondaryFooter from "@/components/shared/Footer/SecondaryFooter";
import Navbar from "@/components/shared/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      <SecondaryFooter />
    </>
  );
};

export default MainLayout;
