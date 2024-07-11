import React from "react";

function Product_details() {
  return (
    <div
      id="summaryTask"
      className="w-[360px] h-fit border border-[#E1E1E1] rounded-[20px] pt-[14px] pr-[17px] pb-3 pl-4"
    >
      <p className="text-lg font-semibold mb-[15px]">สรุปการซื้อรถ</p>
      <div className="flex mb-[15px]">
        <img
          src="/src/assets/checkout_page/cardefault.png"
          alt="default  image"
          className="w-[168px] h-[105px] mr-4 border border-[#E1E1E1] rounded-xl"
        />
        <div>
          <p className="font-normal text-xs mb-3">NEW PORSCHE 718 BOXSTER ปี 2021 ไมล์น้อย สภาพดี</p>
          <p className="font-light text-xs ">📍RODDEE Bangkok</p>
        </div>
      </div>
      <div className="mb-5 px-2 bg-[#CEECFF] inline-block rounded-[10px] font-medium text-xs ">จัดส่งผ่านทาง RODDEE </div>
      <div
        id="statusCar "
        className=" mb-[26px] text-sm font-medium"
      >
        <div id="pickUp" className=" flex ">
          <div className="h-10 w-10   mr-4 bg-[#3E5685] rounded-full grid place-content-center">
            <img
              src="/src/assets/checkout_page/carlogo.png"
              alt="supercarlogo"
            />
          </div>
          <div className="leading-tight">
            <span className="text-[#848484]">รับรถ</span>
            <br />
            สนามบินดอนเมือง
            <br />
            12/07/2024 
          </div>
        </div>

      </div>
      <div
        id="sum"
        className="flex justify-between  text-xs font-semibold  pt-2 mb-2 border-t-[1px]"
      >
        <p>ราคารถ</p>
        <p>THB&nbsp;&nbsp;2,400,000</p>
      </div>
      <div
        id="sum"
        className="flex justify-between  text-xs font-semibold mb-[14px]  "
      >
        <p>Service Charge</p>
        <p>THB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;240,000</p>
      </div>
      <div
        id="sum"
        className="flex justify-between  text-lg font-semibold  "
      >
        <p className="text-[#3E5685]">รวมทั้งสิ้น</p>
        <p>THB&nbsp;2,640,000</p>
      </div>
    </div>
  );
}

export default Product_details;
