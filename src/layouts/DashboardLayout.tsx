import AppSidebar from "@/components/Dashboard/AppSidebar";
import HelmetAsync from "@/components/shared/HelmetAsync";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <HelmetAsync title="Dashboard"></HelmetAsync>
      {/* End Page Title */}
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          <div className="h-full mt-2 p-6 flex flex-row justify-center items-center">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
