import ProductCard from "@/components/shared/Card/ProductCard";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { products } from "@/utils/data/productData";
import { Link } from "react-router-dom";
export type TProducts = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const FeaturedProducts = () => {
  return (
    <div className="mt-24">
      <Container>
        <>
          <h1 className="font-roboto font-bold text-[#1A1A1A] text-[40px] tracking-[.2px] leading-[30px] pb-6 ">
            Featured Products
          </h1>
          <hr className="w-24 h-[3px] bg-[#EF6291]" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
            {products?.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/all-products">
              <Button className="bg-[#EF6291] font-roboto hover:bg-[#D84C7D] text-white">
                View All Product
              </Button>
            </Link>
          </div>
        </>
      </Container>
    </div>
  );
};

export default FeaturedProducts;

// const products: TProducts[] = [
//   {
//     id: 1,
//     name: "Premium Notebook",
//     price: 12.99,
//     image:
//       "https://static-01.daraz.com.bd/p/b84f4d5b747a3e88aceeac74a2297a9d.jpg",
//     category: "Stationery",
//   },
//   {
//     id: 2,
//     name: "Ballpoint Pen Set (10 pcs)",
//     price: 8.49,
//     image: "https://cdn.globalso.com/mainpaperglobalsales/PE105O.jpg",
//     category: "Stationery",
//   },
//   {
//     id: 3,
//     name: "A4 Sketchbook",
//     price: 15.99,
//     image: "https://m.media-amazon.com/images/I/71zDM8dKsNL.jpg",
//     category: "Art Supplies",
//   },
//   {
//     id: 4,
//     name: "Wireless Mouse",
//     price: 24.99,
//     image:
//       "https://gamextreme.ph/cdn/shop/files/1_72def8c3-ffbd-4bc8-affa-87efb024de33_1024x1024.png?v=1703124404",
//     category: "Electronics",
//   },
//   {
//     id: 5,
//     name: "USB Flash Drive (64GB)",
//     price: 19.99,
//     image:
//       "https://gadgetbreeze.com.bd/wp-content/uploads/2024/03/Xiaomi-Mini-Dual-Interface-USB-3.2-Type-C-Pen-Drive-64GB128GB.jpg",
//     category: "Electronics",
//   },
//   {
//     id: 6,
//     name: "Ergonomic Office Chair",
//     price: 199.99,
//     image:
//       "https://www.hbada.uk/cdn/shop/files/P501--AI_2.jpg?v=1707204176&width=2048",
//     category: "Furniture",
//   },
//   {
//     id: 7,
//     name: "Watercolor Paint Set",
//     price: 22.49,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNSASynVhmWrL2ZDrtChPJ5XUX_zTDJTsVnQ&s",
//     category: "Art Supplies",
//   },
//   {
//     id: 8,
//     name: "Mechanical Keyboard",
//     price: 89.99,
//     image:
//       "https://cdn.zmescience.com/wp-content/uploads/2023/06/71jAUlz7KPL._AC_SL1500_.jpg",
//     category: "Electronics",
//   },
//   {
//     id: 9,
//     name: "Leather Journal",
//     price: 18.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4gbJ7y6qDaN_yjHBxaZ1Wa8b4oxCEldRlQ&s",
//     category: "Stationery",
//   },
//   {
//     id: 10,
//     name: "Noise Cancelling Headphones",
//     price: 129.99,
//     image:
//       "https://cdn.thewirecutter.com/wp-content/media/2023/09/noise-cancelling-headphone-2048px-0876.jpg",
//     category: "Electronics",
//   },
// ];
