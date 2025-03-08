import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import RatingStart from "../Rating/RatingStart";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { IProduct } from "@/interface/ProductInterface";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { name, price, photo, category } = product;
  return (
    <Card className="relative group max-w-[350px] border-none  p-4 shadow-md">
      {/* Product Image */}
      <div className="relative w-full h-56 flex justify-center items-center bg-gray-100">
        <img
          src={photo ? photo : "not found"}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Hover Icons */}
        <div
          className="absolute top-1/2 left-1/2 flex gap-2 -translate-x-1/2 -translate-y-1/2 opacity-0 
            group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  className="bg-transparent group-hover:bg-[#EF6291] font-bold p-2 text-white rounded-md"
                >
                  <Heart size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-roboto">Add to wish List</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* wish list Btn End */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  className="bg-transparent group-hover:bg-[#EF6291] p-2  font-bold text-white rounded-md"
                >
                  <Eye size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-roboto">Click to view Read More</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* Click More Btn End */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  className="bg-transparent group-hover:bg-[#EF6291] p-2 text-white font-bold rounded-md"
                >
                  <ShoppingCart size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-roboto">Add to Shopping Cart</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* Click More Btn End */}
        </div>
      </div>

      {/* Product Info */}
      <CardContent className="mt-4 pl-0">
        <h3 className="font-roboto tracking-wide">
          <span className="text-base font-semibold text-[#1A1A1A]">
            Title :
          </span>{" "}
          {name ? name : "not found"}
        </h3>
        <p className="font-roboto my-2">
          <span className="text-base font-semibold text-[#1A1A1A]">
            Price :
          </span>{" "}
          ${price ? price : "00.0"}
        </p>
        <p className="font-roboto my-2">
          <span className="text-base font-semibold text-[#1A1A1A]">
            Category :
          </span>{" "}
          {category ? category : "not found"}
        </p>
        <p className=" flex justify-start items-center">
          <span className="text-base font-semibold text-[#1A1A1A]">
            Rating :
          </span>{" "}
          <RatingStart />
        </p>
        <div className="flex justify-between items-center gap-6 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <Button
            className="bg-[#EF6291] hover:bg-[#D84C7D] text-white  rounded-md mt-3  flex gap-2  opacity-0 
            group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out font-roboto"
          >
            More Details
          </Button>
          <Button
            className="bg-[#1A1A1A] hover:bg-[#1A1A1A] text-white  rounded-md mt-3  flex gap-2 opacity-0 
            group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out font-roboto"
          >
            Add To Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
