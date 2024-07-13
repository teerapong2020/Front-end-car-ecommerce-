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
import LoginAndRegister from "./page/login";
import Forgot from "./page/forgotpassword";
import ResetPassword from "./page/resetpassword";
import ImageUpload from "./page/testCloudinary";
import TestApi from "./page/testApi";
import Dashboard from "./page/dashboard";
import Checkout from "./page/checkout";
import Checkout2 from "./page/checkout2";
import Paymentresult from "./page/paymentresult";
import SellAdmin from "./page/sellAdmin";
import Mockesetdata from "./page/mockesetdata";
import UploadProfile from "./page/uploadprofile";
import { FormProvider } from "./context_component/Regiscontext";// ตรวจสอบ path ว่าถูกต้อง
import { AdminCommit } from "./page/admin_commit_car";
import { AdminCar } from "./components/champ/admincar";

const RouterMain = () => {
  // const [products, setProducts] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavbarMain  />
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
      path: "/buy_productcard_info/:id",
      // path: "/buy_productcard_info/:name_id",
      element: (
        <>
          <Navbar />
          <Buy_ProductCard_Info />
          <Footer />
        </>
      ),
    },
    {
      path: "/loginandregister",
      element: (
        <>
          <NavbarMain  />
          <LoginAndRegister />
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
    {
      path: "/adminSell",
      element: (
        <>
          <Navbar />
          <SellAdmin />
          <Footer />
        </>
      ),
    },
    {
      path: "/mockselldata",
      element: (
        <>
          <Navbar />
          <Mockesetdata />
          <Footer />
        </>
      ),
    },
    {
      path: "/uploadprofile",
      element: (
        <>
          <NavbarMain />
          <UploadProfile />

        </>
      ),
    },
     {
      path: "/admincommit",
      element: (
        <>
          <Navbar className={"bg-white text-gray-950 shadow-xl"} />
          <AdminCommit />

        </>
      ),
    },
  ]);

  return ( <FormProvider>
      <RouterProvider router={router} />
      </FormProvider>
      );
};

export default RouterMain;
