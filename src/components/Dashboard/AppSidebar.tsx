import { Home, Settings, WalletCards } from "lucide-react";
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

import AccountDetails from "@/pages/Dashboard/User/AccountDetails/AccountDetails";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Account Details",
    url: "/dashboard/account-details",
    icon: Settings,
    path: <AccountDetails />,
  },
  {
    title: " Order History ",
    url: "#",
    icon: WalletCards,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <img src={logo} alt="" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, path) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span className="font-roboto text-[#1A1A1A]">
                        {item.title}
                      </span>
                      {path}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <AppSidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
