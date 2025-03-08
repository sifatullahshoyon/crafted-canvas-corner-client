import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const ProductSorting = () => {
  const [sortBy, setSortBy] = useState("Popularity");

  console.log(sortBy);

  return (
    <div className="flex justify-between items-center mb-6">
      <h2></h2>
      {/* dropdown menu btn */}
      <DropdownMenu>
        <DropdownMenuTrigger className="px-4 py-2 border rounded-lg flex justify-center items-center gap-2 font-roboto tracking-wide font-semibold">
          Sort by <ChevronDown size={18} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="font-roboto">
          <DropdownMenuItem onClick={() => setSortBy("Low to High")}>
            Price: Low to High
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSortBy("High to Low")}>
            Price: High to Low
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProductSorting;
