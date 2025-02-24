import {
  CreditCard,
  Heart,
  LogIn,
  LogOut,
  ShoppingCart,
  User,
  UserRound,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserInfoDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* open btn */}
        <UserRound className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* my profile start */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="group cursor-pointer">
            <User className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="group cursor-pointer">
            <LogIn className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Login</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* my profile end */}
        <DropdownMenuSeparator />
        {/* start cart  */}
        <DropdownMenuGroup>
          <DropdownMenuItem className="group cursor-pointer">
            <Heart className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Wish List (0)</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="group cursor-pointer">
            <ShoppingCart className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Shopping Cart</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="group cursor-pointer">
            <CreditCard className="group-hover:text-[#EF6291]" />
            <span className="group-hover:text-[#EF6291]">Checkout</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {/* End cart  */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="group bg-[#EF6291] hover:bg-[#EF6291] focus:bg-[#EF6291] cursor-pointer">
            <LogOut className="group-hover:bg-[#EF6291] group-hover:text-[#1A1A1A] text-white" />
            <span className="group-hover:bg-[#EF6291] group-hover:text-[#1A1A1A] text-white">
              Log out
            </span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserInfoDropdown;
