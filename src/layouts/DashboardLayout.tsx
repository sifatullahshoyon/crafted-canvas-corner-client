import AppSidebar from "@/components/Dashboard/AppSidebar";
import HelmetAsync from "@/components/shared/HelmetAsync";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HelmetAsync title="Dashboard"></HelmetAsync>
      {/* End Page Title */}
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
