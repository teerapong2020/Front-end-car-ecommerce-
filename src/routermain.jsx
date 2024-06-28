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

const RouterMain = () => {
  // const [products, setProducts] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavbarMain/>
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
          <Buy_ProductCard_Info/>
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
    
 
  ]);

  return (
            <RouterProvider router={router} />);
};

export default RouterMain;
