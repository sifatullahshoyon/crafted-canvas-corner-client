import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { ChevronUp, User2 } from "lucide-react";
import { toast } from "sonner";

const AppSidebarFooter = () => {
  const user = useAppSelector(useCurrentUser);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully.");
  };
  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="p-6 font-medium bg-gray-200 hover:bg-gray-300">
                <User2 size={22} />{" "}
                <div className="flex flex-col justify-center items-center mx-auto space-y-1">
                  {user ? (
                    <p className="font-roboto font-medium py-1">{user.name}</p>
                  ) : (
                    <p className="font-roboto font-medium">User Name</p>
                  )}
                  {user ? (
                    <p className="font-roboto font-medium">{user.email}</p>
                  ) : (
                    <p className="font-roboto font-medium">User Email</p>
                  )}
                </div>
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem className="group cursor-pointer">
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="bg-[#EF6291] group cursor-pointer transition duration-300"
              >
                <span className="font-roboto text-white group-hover:text-[#1A1A1A] cursor-pointer">
                  Sign out
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default AppSidebarFooter;
