import MainLayout from "@/layouts/MainLayout";
import About from "@/pages/Home/About/About";
import Home from "@/pages/Home/Home/Home";
import Product from "@/pages/Home/Product/Product";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <p>Error Page</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <Product />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);

export default router;
