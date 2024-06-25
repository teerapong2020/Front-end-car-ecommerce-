import React from "react";

function Progress() {
  return (
    <article
      id="statusContainer"
      className="flex flex-row max-w-[1145px] mt-[55px] mb-12 relative"
    >
      <div className="flex flex-col items-center">
        <div
          id="innerCircle"
          className="w-[55px] h-[55px] rounded-full bg-[#1E3769] relative"
        >
          <div
            id="leftCheck"
            className="w-[4px] h-[16px] top-[26px] left-[18px] -rotate-45 rounded-full bg-white absolute"
          ></div>
          <div
            id="rightCheck"
            className="w-[4px] h-[31px] top-[13px] left-[32px] rotate-45 rounded-full bg-white absolute"
          ></div>
        </div>
        <p className="text-[14px]">กรอกข้อมูล</p>
      </div>
      <div className="w-[203px] h-1 bg-[#CDECFF] relative top-[25px]"></div>
      <div className="flex flex-col items-center ">
        <div
          id="circleStatus"
          className="w-[45px] h-[45px]  bg-[#CDECFF] rounded-full grid place-content-center mt-1"
        >
          2
        </div>
        <p className="text-[14px]">ชำระเงิน</p>
      </div>
      <div className="w-[203px] h-1 bg-[#CDECFF] relative top-[25px]"></div>
      <div className="flex flex-col items-center relative ">
        <div
          id="circleStatus"
          className="w-[45px]  h-[45px]  bg-[#CDECFF] rounded-full grid place-content-center mt-1 ml-[2px]"
        >
          3
        </div>
        <p className="text-[14px] top-[49px] left-[1px] w-20  absolute ">
          เช่ารถสำเร็จ
        </p>
      </div>
    </article>
  );
}

export default Progress;
