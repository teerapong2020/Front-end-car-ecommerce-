import Progress from "../components/components_checkout/progress";
import Login_for_checkout from "../components/components_checkout/login_for_checkout";
import Product_details from "../components/components_checkout/product_details";
import Payment_success from "../components/components_checkout/payment_success";

function Paymentresult() {
  return (
    <div className="flex flex-col items-center text-base">
      <Progress />

      <div className="flex flex-col w-[760px]">
        <Payment_success />
      </div>
    </div>
  );
}

export default Paymentresult;
