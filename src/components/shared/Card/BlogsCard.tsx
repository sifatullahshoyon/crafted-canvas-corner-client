import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Eye, Heart, MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type BlogType = {
  id: number;
  name: string;
  image: string;
  date: string;
  comment: string;
  description: string;
};

const BlogsCard = ({ blog }: { blog: BlogType }) => {
  const { name, image, date, comment } = blog;
  return (
    <Card className="relative group  border-none  p-4 shadow-none">
      {/* Product Image */}
      <div className="relative w-full h-56 flex justify-center items-center  ">
        <div className="group-hover:scale-105 transition-all duration-500 ease-in-out overflow-hidden ">
          <img
            src={image}
            alt="Product"
            className="w-full h-full   group-hover:bg-black overflow-hidden"
          />
          <div className="bg-slate-800 opacity-20 hidden group-hover:block absolute z-50 top-0 h-full  transition-all duration-500 ease-in-out w-full"></div>
          <div className=" bg-[#EF6291] hidden group-hover:block absolute group-hover:bottom-0 h-16 w-full p-5 transition-all  duration-700 ease-in-out group-hover:delay-700 delay-1000">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="font-roboto text-white font-bold flex justify-center items-center gap-2">
                <CalendarDays /> {date}
              </div>
              <div className="font-roboto text-white font-bold flex justify-center items-center gap-2">
                <MessageCircleMore />
                {comment}
              </div>
            </div>
          </div>
        </div>
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
                  className="bg-transparent group-hover:bg-black p-2 text-white rounded-md"
                >
                  <Heart size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to wish List</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* wish list Btn End */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  className="bg-transparent group-hover:bg-black p-2 text-white rounded-md"
                >
                  <Eye size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to view Read More</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {/* Click More Btn End */}
        </div>
      </div>

      {/* Product Info */}
      <CardContent className="text-left mt-6">
        <h3 className="font-roboto text-sm font-normal text-[#888888]  tracking-wide">
          {name}
        </h3>
      </CardContent>
    </Card>
  );
};

export default BlogsCard;
