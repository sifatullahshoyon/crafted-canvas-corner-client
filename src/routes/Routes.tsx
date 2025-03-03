import ErrorElement from "@/components/ErrorElement";
import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import AccountDetails from "@/pages/Dashboard/User/AccountDetails/AccountDetails";
import About from "@/pages/Home/About/About";
import Home from "@/pages/Home/Home/Home";
import Login from "@/pages/Home/Login/Login";
import Product from "@/pages/Home/Product/Product";
import Registration from "@/pages/Home/Registration/Registration";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorElement />,
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
  // dashboard
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <div className="border h-screen">
          <p className="w-full">Home</p>
          <p className="w-full">Home</p>
          <p className="w-full">Home</p>
          <AccountDetails />
        </div>
      </DashboardLayout>
    ),
    children: [
      // admin routes
    ],
  },
]);

export default router;
