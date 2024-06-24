import React from "react";

function Progress() {
  return (
    <article
      id="statusContainer"
      className="flex flex-row max-w-[1145px] mt-14 mb-12 relative"
    >
      <div className="flex flex-col items-center">
        <div
          id="innerCircle"
          className="w-16 h-16 rounded-full bg-[#1E3769] relative"
        >
          <div
            id="leftCheck"
            className="w-[4.5px] h-[16px] top-[29px] left-[22px] -rotate-45 rounded-full bg-white absolute"
          ></div>
          <div
            id="rightCheck"
            className="w-[4.5px] h-[31px] top-[16px] left-[36px] rotate-45 rounded-full bg-white absolute"
          ></div>
        </div>
        <p className="text-[14px]">กรอกข้อมูล</p>
      </div>
      <div className="w-[198px] h-1 bg-[#CDECFF] relative top-8"></div>
      <div className="flex flex-col items-center ">
        <div
          id="circleStatus"
          className="w-16 h-16 bg-[#CDECFF] rounded-full grid place-content-center"
        >
          2
        </div>
        <p className="text-[14px]">ชำระเงิน</p>
      </div>
      <div className="w-[198px] h-1 bg-[#CDECFF] relative top-8"></div>
      <div className="flex flex-col items-center relative ">
        <div
          id="circleStatus"
          className="w-16 h-16 bg-[#CDECFF] rounded-full grid place-content-center "
        >
          3
        </div>
        <p className="text-[14px] top-[64px] left-[1px] w-20  absolute ">
          เช่ารถสำเร็จ
        </p>
      </div>
    </article>
  );
}

export default Progress;
