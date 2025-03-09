import { Home, Settings, ShoppingCart, WalletCards } from "lucide-react";
import logo from "../../assets/images/crafted-canvase-corner.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import AppSidebarFooter from "./AppSidebarFooter";
import { Link } from "react-router-dom";

const AppSidebar = () => {
  const isAdmin = true;
  return (
    <Sidebar className="border">
      <SidebarHeader className="mt-6">
        <img src={logo} alt="logo" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4 font-roboto tracking-wide">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* route start */}
              {isAdmin ? (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/"
                        className="flex justify-between gap-2 tracking-wide w-full font-semibold items-center font-roboto text-[#1A1A1A] mb-2"
                      >
                        Home <Home size={16} />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* End Home */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/dashboard/manage-users"
                        className="flex justify-between gap-2 tracking-wide w-full font-semibold items-center font-roboto text-[#1A1A1A] mb-2"
                      >
                        Manage User <Settings size={16} />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* End User */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/dashboard/manage-products"
                        className="flex justify-between gap-2 tracking-wide w-full font-semibold items-center font-roboto text-[#1A1A1A] mb-2"
                      >
                        Manage Products <ShoppingCart size={16} />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* End Products */}
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Link
                        to="/dashboard/manage-orders"
                        className="flex justify-between gap-2 tracking-wide w-full font-semibold items-center font-roboto text-[#1A1A1A] mb-2"
                      >
                        Manage Orders <WalletCards size={16} />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  {/* End Products */}
                </>
              ) : (
                <>
                  <Link to="/dashboard/manage-users"> Manage User</Link>
                  <Link to="/dashboard/manage-products"> Manage Order</Link>
                  <Link to="/dashboard/manage-orders"> Manage Product</Link>
                </>
              )}
              {/* route end */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
