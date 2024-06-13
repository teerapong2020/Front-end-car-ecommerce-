// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./page/home";
import Sell from "./page/sell";
import Buy from "./page/buy";
import { Card } from "./components/champ/card";
import ProductCard_Info from "./components/components_home/productcard_info";

const RouterMain = () => {
  // const [products, setProducts] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/Sell",
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
      path: "/productcard_info",
      element: (
        <>
          <Navbar />
          <ProductCard_Info/>
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterMain;
