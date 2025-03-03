import Footer from "@/components/shared/Footer/Footer";
import SecondaryFooter from "@/components/shared/Footer/SecondaryFooter";
import Navbar from "@/components/shared/Navbar/Navbar";
import Topbar from "@/components/Topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const isAvailable =
    location.pathname.includes("all-products") ||
    location.pathname.includes("login") ||
    location.pathname.includes("registration");
  return (
    <>
      <div className="fixed top-0 w-full z-50">{isAvailable || <Topbar />}</div>
      <div
        className={`${
          isAvailable
            ? "fixed top-0 w-full z-50"
            : "fixed top-[120px] md:top-10 w-full z-50"
        }`}
      >
        <Navbar />
      </div>
      {/* <Topbar />
      <Navbar /> */}
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      {isAvailable || <SecondaryFooter />}
    </>
  );
};

export default MainLayout;
