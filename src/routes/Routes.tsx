import ErrorElement from "@/components/ErrorElement";
import DashboardLayout from "@/layouts/DashboardLayout";
import MainLayout from "@/layouts/MainLayout";
import ManageOrders from "@/pages/Dashboard/Admin/ManageOrders/ManageOrders";
import ManageProducts from "@/pages/Dashboard/Admin/ManageProducts/ManageProducts";
import ManageUsers from "@/pages/Dashboard/Admin/ManageUsers/ManageUsers";
import About from "@/pages/Home/About/About";
import Home from "@/pages/Home/Home/Home";
import Login from "@/pages/Home/Login/Login";
import Product from "@/pages/Home/Product/Product";
import Registration from "@/pages/Home/Registration/Registration";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorElement />,
    children: [
      /// admin route
      { path: "/dashboard/manage-orders", element: <ManageOrders /> },
      { path: "/dashboard/manage-products", element: <ManageProducts /> },
      { path: "/dashboard/manage-users", element: <ManageUsers /> },
      /// user route
      { path: "/dashboard/manage-orders", element: <ManageOrders /> },
      { path: "/dashboard/manage-products", element: <ManageProducts /> },
      { path: "/dashboard/manage-users", element: <ManageUsers /> },
    ],
  },
]);

export default router;
