// import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionCover from "@/components/shared/SectionCover/SectionCover";
import HelmetAsync from "@/components/shared/HelmetAsync";
import ProductSearch from "./ProductSearch";
import ProductSorting from "./ProductSorting";
import ProductFilter from "./ProductFilter";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { IProduct } from "@/interface/ProductInterface";
import ProductCard from "@/components/shared/Card/ProductCard";

// const products = [
//   {
//     id: 1,
//     name: "Ultraboost Light Running Shoes",
//     price: "$200",
//     image: "/shoe.png", // Change this to your image path
//     status: "In Stock",
//     sale: false,
//   },
//   {
//     id: 2,
//     name: "Ultraboost Light Running Shoes",
//     price: "$200",
//     image: "/shoe.png",
//     status: "Out of Stock",
//     sale: true,
//   },
//   // Add more products as needed
// ];

const Product = () => {
  // const [searchQuery, setSearchQuery] = useState("");
  // console.log(setSearchQuery);
  const { data: products, isLoading } = useGetAllProductQuery([
    { name: "limit", value: "all" },
  ]);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  console.log("product data =>", products);

  // const filteredProducts = products.filter((products) =>
  //   products.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  return (
    <>
      <HelmetAsync title="Product"></HelmetAsync>
      {/* End Page Title */}

      <SectionCover pageName="All Product" />
      {/* End Section Cover */}

      <Container>
        <div className="p-4 md:p-8 lg:p-12">
          {/* Start Search Functionality */}

          <ProductSearch />

          {/* End Search Functionality */}

          <div className="flex flex-col md:flex-row gap-6">
            {/* start product filter */}

            <ProductFilter />

            {/* end product filter */}

            <div className="flex-1">
              {/* Start Sort Functionality */}

              <ProductSorting />

              {/* End Sort Functionality */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.data?.map((product: IProduct) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>

              {/* end product card to display ui */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;
