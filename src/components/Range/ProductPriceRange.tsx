import { useState } from "react";
import { Slider } from "@/components/ui/slider";

const ProductPriceRange = () => {
  const [price, setPrice] = useState(500);
  return (
    <div className="w-full max-w-md  my-4">
      <label className="block font-semibold mb-2 font-roboto text-lg">
        Price Range
      </label>
      <div className="flex items-center gap-4">
        <span className="text-gray-600 font-medium font-roboto">$500</span>
        <Slider
          defaultValue={[500]}
          min={500}
          max={36700}
          step={100}
          onValueChange={(value) => setPrice(value[0])}
          className="flex-1"
        />
        <span className="text-gray-600 font-medium font-roboto">${price}</span>
      </div>
    </div>
  );
};

export default ProductPriceRange;
