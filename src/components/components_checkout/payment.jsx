import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <form id="inform" className="mb-[55px]">
      <div className="flex flex-col ">
        <div
          id="selectTypeOfPayment"
          className="p-6 flex flex-col  text-2xl border border-[#E1E1E1]  rounded-[20px]"
        >
          <p className="font-semibold mb-7">เลือกรูปแบบการชำระเงิน</p>
          <ul className="flex justify-between mb-[21px]">
            <li className="w-[120px] h-[80px]">
              <img
                src="/src/assets/checkout_page/visaEdit1.jpg"
                alt="visa"
                className="w-[120px] h-[80px] border border-[#E1E1E1] rounded-lg p-1"
              />
            </li>
            <li className="w-[120px] h-[80px]">
              <img
                src="/src/assets/checkout_page/masterCardEdit1.webp"
                alt="mastercard"
                className="object-contain w-[120px] h-[80px] border border-[#E1E1E1] rounded-lg p-1 grayscale"
              />
            </li>
            <li className="w-[120px] h-[80px]">
              <img
                src="/src/assets/checkout_page/prompt-pay-logo.png"
                alt="promptpay"
                className="object-contain w-[120px] h-[80px] border border-[#E1E1E1] rounded-lg p-1 grayscale"
              />
            </li>
            <li className="w-[120px] h-[80px]">
              <img
                src="/src/assets/checkout_page/binance2.png"
                alt="binance"
                className="object-contain w-[120px] h-[80px] border border-[#E1E1E1] rounded-lg p-1 grayscale"
              />
            </li>
            <li className="w-[120px] h-[80px]">
              <img
                src="/src/assets/checkout_page/kPlusEdit1.png"
                alt="kplus"
                className="object-contain w-[120px] h-[80px] border border-[#E1E1E1] rounded-lg p-1 grayscale"
              />
            </li>
          </ul>
          <p className="font-semibold mb-6">ข้อมูลการชำระเงิน</p>
          <input
            type="number"
            placeholder="เลขบัตร"
            className=" h-[56px]  px-5 mb-8 rounded-[15px] border border-[#E1E1E1] text-base font-medium"
          />
          <input
            type="number"
            placeholder="CVV"
            className=" h-[56px]  px-5  mb-8 rounded-[15px] border border-[#E1E1E1]  text-base font-medium"
          />
          <input
            type="text"
            placeholder="ชื่อเจ้าของบัตร"
            className=" h-[56px]  px-5  mb-4 rounded-[15px] border border-[#E1E1E1] text-base font-medium"
          />
          <div className="flex">
            <input type="checkbox" className="h-4 w-4  mt-1 mr-2" />
            <label className="text-base font-extralight ">
              ต้องการใบกำกับภาษี
            </label>
          </div>
        </div>
        <div
          id="hire"
          className="mt-10  px-6 pt-3 pb-4  grid grid-cols-1 grid-rows-2 border border-[#E1E1E1] rounded-[20px]"
        >
          <div className="flex  ">
            <input type="checkbox" className="h-4 w-4 mr-2 mt-1" />
            <label>กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน</label>
          </div>
          <Link
            to="/paymentresult"
            className=" h-[48px] bg-[#3E5685] rounded-[10px] text-white text-2xl flex justify-center"
          >
            <input
              type="button"
              value="ยืนยันการชำระเงิน"
              className="cursor-pointer border-none text-lg"
            />
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Payment;
