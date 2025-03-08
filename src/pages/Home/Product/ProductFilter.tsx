import { ProductCategoryCheckbox } from "@/components/Checkbox/ProductCategoryCheckbox";
import { ProductRadio } from "@/components/RadioGroup/ProductRadio";
import ProductPriceRange from "@/components/Range/ProductPriceRange";

const ProductFilter = () => {
  return (
    <aside className="w-full md:w-1/4 p-4 border rounded-lg mt-16">
      {/*  */}
      <ProductRadio />

      {/* End Product Radio Component */}

      <ProductPriceRange />

      {/* End Product Price Range Component */}

      <div className="my-4">
        {/* <h4 className="font-medium font-roboto">Categories</h4> */}

        <ProductCategoryCheckbox />

        {/* End Product Category Checkbox Component */}
      </div>
    </aside>
  );
};

export default ProductFilter;
