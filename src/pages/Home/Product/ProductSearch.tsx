import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ProductSearch = () => {
  return (
    <div className="mb-12 flex justify-end">
      <div className="flex w-full  items-center space-x-2">
        <div className="relative w-full">
          <Input
            type="email"
            placeholder="Search by Title, Author, or Category"
            className="pl-10 py-4 placeholder:font-roboto font-roboto "
            size={12}
          />
          <Search className="absolute top-2 left-2 text-sm text-[#888888] " />
        </div>
        <Button
          type="submit"
          className="bg-[#EF6291] text-white font-medium font-roboto tracking-wide hover:bg-[#D84C7D] px-6 text-base"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default ProductSearch;
