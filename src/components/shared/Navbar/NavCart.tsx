import UserInfoDropdown from "@/components/Dropdown/UserInfoDropdown";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NavCart = () => {
  return (
    <div className="md:flex justify-between items-center gap-4 space-y-6 md:space-y-0">
      {/* Search bar */}
      <div className="flex items-center gap-2 relative">
        {/* search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-search absolute pl-2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <Input
          type="email"
          placeholder="Search By Product Name"
          className="text-[#1A1A1A] bg-white focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-transparent outline-none placeholder:font-roboto font-roboto pl-8"
        />
      </div>
      {/* Auth Options */}
      <div>
        <UserInfoDropdown />
      </div>
      {/* shopping cart */}
      <div className="relative">
        <ShoppingCart className="text-white" />
        <Badge className="absolute -top-4 left-3 bg-[#1A1A1A] text-white">
          0
        </Badge>
      </div>
    </div>
  );
};

export default NavCart;
