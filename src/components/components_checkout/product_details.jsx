import React from "react";

function Product_details() {
  return (
    <div
      id="summaryTask"
      className="w-[360px] h-fit border border-[#E1E1E1] rounded-[20px] pt-[14px] pr-[17px] pb-3 pl-4"
    >
      <p className="text-lg font-semibold mb-[15px]">สรุปการเช่ารถ</p>
      <div className="flex mb-[21px]">
        <img
          src="/src/assets/checkout_page/cardefault.png"
          alt="default  image"
          className="w-[168px] h-[105px] mr-[8px] border border-[#E1E1E1] rounded-xl"
        />
        <div>
          <p className="font-medium text-base">NEW PORCHE 718 BOXSTER</p>
          <p className="font-semibold text-xs text-[#848484]">Sports</p>
        </div>
      </div>
      <div
        id="statusCar "
        className="flex flex-col items-center  relative mb-[26px] text-sm font-medium"
      >
        <div id="pickUp" className=" flex ">
          <div className="h-10 w-10 mt-4  mr-[29px] bg-[#3E5685] rounded-full grid place-content-center">
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
            12/07/2024 <br />
            09.00 น.
          </div>
        </div>
        <div className="absolute w-[2px] h-[80px] left-[96px] top-[47px] bg-[#3E5685]"></div>
        <div className="absolute w-[10px] left-[89px] top-[120px] border border-solid border-t-[2px] border-r-[2px] rotate-45 border-[#3E5685]"></div>
        <div className="absolute w-[10px] left-[95px] top-[120px] border border-solid border-t-[2px] border-r-[2px] -rotate-45 border-[#3E5685]"></div>
        <div id="return" className="flex mt-10">
          <div className="h-10 w-10  mt-[15px] mr-[29px] bg-[#3E5685] rounded-full grid place-content-center">
            <img
              src="/src/assets/checkout_page/carlogo.png"
              alt="supercarlogo"
            />
          </div>
          <div className="leading-tight">
            <span className="text-[#848484]">คืนรถ</span>
            <br />
            สนามบินดอนเมือง
            <br />
            12/07/2024 <br />
            09.00 น.
          </div>
        </div>
      </div>
      <div
        id="sum"
        className="flex justify-between  text-lg font-semibold  pt-3 border-t-[1px]"
      >
        <p>รวมทั้งสิ้น</p>
        <p>฿30,000/วัน</p>
      </div>
    </div>
  );
}

export default Product_details;
