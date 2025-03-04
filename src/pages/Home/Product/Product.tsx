import { useState } from "react";
import Container from "@/components/shared/Container";
import SectionCover from "@/components/shared/SectionCover/SectionCover";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ShoppingCart } from "lucide-react";

import { Input } from "@/components/ui/input";
import HelmetAsync from "@/components/shared/HelmetAsync";

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
  const [sortBy, setSortBy] = useState("Popularity");
  console.log(sortBy);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ category: "All", stock: "" });

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <HelmetAsync title="Product"></HelmetAsync>
      {/* End Page Title */}
      <SectionCover pageName="All Product" />
      <Container>
        <div>
          <div className="p-4 md:p-8 lg:p-12">
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <aside className="w-full md:w-1/4 p-4 border rounded-lg">
                <h3 className="text-lg font-semibold">Filters</h3>
                <div className="mt-4">
                  <h4 className="font-medium">Category</h4>
                  <select
                    className="w-full mt-2 p-2 border rounded"
                    onChange={(e) =>
                      setFilters({ ...filters, category: e.target.value })
                    }
                  >
                    <option value="All">All</option>
                    <option value="Running Shoes">Running Shoes</option>
                    <option value="Category 3">Category 3</option>
                    <option value="Category 4">Category 4</option>
                  </select>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium">Stock Status</h4>
                  <label className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        setFilters({ ...filters, stock: "In Stock" })
                      }
                    />{" "}
                    In Stock
                  </label>
                  <label className="flex items-center gap-2 mt-2">
                    <input
                      type="checkbox"
                      onChange={() =>
                        setFilters({ ...filters, stock: "Out of Stock" })
                      }
                    />{" "}
                    Out of Stock
                  </label>
                </div>
              </aside>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Running Shoes</h2>
                  <div className="flex items-center gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="px-4 py-2 border rounded-lg">
                        Sort by
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSortBy("A to Z")}>
                          Alphabetically, A to Z
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSortBy("Z to A")}>
                          Alphabetically, Z to A
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSortBy("Low to High")}
                        >
                          Price, Low to High
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSortBy("High to Low")}
                        >
                          Price, High to Low
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => setSortBy("Popularity")}
                        >
                          Popularity
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="flex items-center gap-2">
                      <ShoppingCart size={18} /> View Cart
                    </Button>
                  </div>
                </div>

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
        </div>
      </Container>
    </>
  );
};

export default Product;
