// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./page/home";
import Sell from "./page/sell";
import Buy from "./page/buy";
import { NewCard } from "./components/components_home/newcard";
import Buy_ProductCard_Info from "./page/buy_productcard_info";
import NavbarMain from "./components/navbarmain";
import Login from "./page/login";
import Forgot from "./page/forgotpassword";
import ResetPassword from "./page/resetpassword";
import Register from "./page/register";
import ImageUpload from "./page/testCloudinary";
import TestApi from "./page/testApi";
import Dashboard from "./page/dashboard";
import Checkout from "./page/checkout";
import Checkout2 from "./page/checkout2";
import Paymentresult from "./page/paymentresult";

const RouterMain = () => {
  // const [products, setProducts] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavbarMain />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/sell",
      element: (
        <>
          <Navbar />
          <Sell />
          <Footer />
        </>
      ),
    },
    {
      path: "/Buy",
      element: (
        <>
          <Navbar />
          <Buy />
          <Footer />
        </>
      ),
    },
    {
      path: "/card",
      element: (
        <>
          <Navbar />
          <NewCard />
          <Footer />
        </>
      ),
    },
    {
      path: "/buy_productcard_info/:name_id",
      element: (
        <>
          <Navbar />
          <Buy_ProductCard_Info />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <NavbarMain />
          <Login />
        </>
      ),
    },
    {
      path: "/register",
      element: (
        <>
          <NavbarMain />
          <Register />
        </>
      ),
    },
    {
      path: "/forgotpassword",
      element: (
        <>
          <NavbarMain />
          <Forgot />
        </>
      ),
    },
    {
      path: "/Reset-Password",
      element: (
        <>
          <NavbarMain />
          <ResetPassword />
        </>
      ),
    },
    {
      path: "/testCloudinary",
      element: (
        <>
          <Navbar />
          <ImageUpload />
        </>
      ),
    },
    {
      path: "/testApi",
      element: (
        <>
          <Navbar />
          <TestApi />
        </>
      ),
    },
    {
      path: "/testApi/:id",
      element: (
        <>
          <Navbar />
          <TestApi />
        </>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <>
          <NavbarMain />
          <Dashboard />
        </>
      ),
    },
    {
      path: "/Checkout",
      element: (
        <>
          <Navbar />
          <Checkout />
          <Footer />
        </>
      ),
    },
    {
      path: "/Checkout2",
      element: (
        <>
          <Navbar />
          <Checkout2 />
          <Footer />
        </>
      ),
    },
    {
      path: "/paymentresult",
      element: (
        <>
          <Navbar />
          <Paymentresult />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterMain;
