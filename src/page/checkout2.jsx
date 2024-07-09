import Payment from "../components/components_checkout/payment";
import Progress from "../components/components_checkout/progress";
import Login_for_checkout from "../components/components_checkout/login_for_checkout";
import Product_details from "../components/components_checkout/product_details";

function Checkout2() {
  return (
    <div className="flex flex-col items-center text-base">
      <Progress />
      <div className="w-[1128px] flex justify-start item">
        <Login_for_checkout />
      </div>
      <div className="w-[1128px]  flex gap-x-[24px] ">
        <div className="flex flex-col w-[744px]">
          <Payment />
        </div>
        <Product_details />
      </div>
    </div>
  );
}

export default Checkout2;
