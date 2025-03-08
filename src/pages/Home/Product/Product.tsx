import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionCover from "@/components/shared/SectionCover/SectionCover";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import HelmetAsync from "@/components/shared/HelmetAsync";
import ProductSearch from "./ProductSearch";
import ProductSorting from "./ProductSorting";
import ProductFilter from "./ProductFilter";

const products = [
  {
    id: 1,
    name: "Ultraboost Light Running Shoes",
    price: "$200",
    image: "/shoe.png", // Change this to your image path
    status: "In Stock",
    sale: false,
  },
  {
    id: 2,
    name: "Ultraboost Light Running Shoes",
    price: "$200",
    image: "/shoe.png",
    status: "Out of Stock",
    sale: true,
  },
  // Add more products as needed
];

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");

  console.log(setSearchQuery);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="relative">
                    {product.sale && (
                      <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded">
                        Sale
                      </span>
                    )}
                    <CardContent className="flex flex-col items-center p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-w-xs"
                      />
                      <h3 className="mt-4 text-lg font-semibold">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">{product.price}</p>
                      <p
                        className={
                          product.status === "In Stock"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {product.status}
                      </p>
                      <Button className="mt-4">Add to Cart</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Product;
