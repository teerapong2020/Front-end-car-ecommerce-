// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./page/home";
import Sell from "./page/sell";
import Buy from "./page/buy";
import { Card } from "./components/champ/card";
import Buy_ProductCard_Info from "./page/buy_productcard_info";
import NavbarMain from "./components/navbarmain";
import Login from "./page/login";

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
          <Card />
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
          <Navbar />
          <Login />
        </>
      ),
    },
    
  ]);

  return (
            <RouterProvider router={router} />);
};

export default RouterMain;
