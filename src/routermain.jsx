// import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./page/home";
import Sell from "./page/sell";
import Buy from "./page/buy";
import { Card } from "./components/champ/card";
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
