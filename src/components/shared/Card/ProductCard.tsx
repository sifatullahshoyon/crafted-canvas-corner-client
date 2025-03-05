import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import RatingStart from "../Rating/RatingStart";
import { Button } from "@/components/ui/button";
import { TProducts } from "@/pages/Home/FeaturedProducts/FeaturedProducts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProductCard = ({ product }: { product: TProducts }) => {
  const { name, price, image } = product;

  return (
    <>
      <Card className="relative group max-w-[305px] border-none  p-4">
        {/* Product Image */}
        <div className="relative w-full h-56 flex justify-center items-center bg-gray-100">
          <img
            src={image ? image : "not found"}
            alt="Product"
            className="w-full h-full object-contain"
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
        <CardContent className="text-center mt-4">
          <h3 className="font-roboto text-sm font-normal text-[#888888] group-hover:text-[#EF6291] tracking-wide">
            {name ? name : "not found"}
          </h3>
          <p className="text-lg font-bold text-[#1A1A1A] font-roboto my-2">
            ${price ? price : "not found"}
          </p>
          <RatingStart />
          <Button
            className="bg-[#1A1A1A] hover:bg-[#1A1A1A] text-white  rounded-md mt-3 absolute bottom-0 left-1/2 flex gap-2 -translate-x-1/2 -translate-y-1/2 opacity-0 
            group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-in-out font-roboto"
          >
            Add To Cart
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
