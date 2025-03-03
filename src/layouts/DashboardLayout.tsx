import AppSidebar from "@/components/Dashboard/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
