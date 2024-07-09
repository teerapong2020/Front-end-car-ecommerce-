import { Link } from "react-router-dom";

function Payment_success() {
  return (
    <div className="flex flex-col items-center mb-[52px]">
      <div
        id="outerCircle"
        className="w-[264px] h-[264px]  bg-[#E5F4ED] rounded-full mb-8 grid place-content-center"
      >
        <div
          id="innerCircle"
          className="w-[146.67px] h-[146.67px] rounded-full bg-[#23A26D] relative "
        >
          <div
            id="leftCheck"
            className="w-[10px] h-[35px] top-[65px] left-[50px] -rotate-45 rounded-full bg-white absolute"
          ></div>
          <div
            id="rightCheck"
            className="w-[10px] h-[70px] top-[35px] left-[80px] rotate-45 rounded-full bg-white absolute"
          ></div>
        </div>
      </div>
      <div className="flex flex-col items-center leading-10 mb-8">
        <h1 className="font-semibold text-[28px]">การชำระเงินสำเร็จ !</h1>
        <p className=" text-[28px]">การชำระเงินของคุณได้เสร็จสิ้น</p>
      </div>
      <div
        id="receipt"
        className=" w-[416px] rounded-[20px] text-lg bg-[#F4FFFB] flex flex-col "
      >
        <div id="value" className="flex justify-between px-[23px] mt-3">
          <p>จำนวน</p>
          <p>3000 บาท</p>
        </div>
        <div id="status" className="flex justify-between px-[23px] mt-[54px] mb-[30px]">
          <p>สถานะการจ่ายเงิน</p>
          <p>สำเร็จ</p>
        </div>

        <div id="detail" className="flex flex-col gap-[54px] px-[23px]  border-t-[1px]">
          <div id="code" className="flex justify-between mt-[33px]">
            <p>หมายเลขเช่า</p>
            <p>RD1099092</p>
          </div>
          <diver id="typeOfPayMent" className="flex justify-between">
            <p>รูปแบบการจ่ายเงิน</p>
            <p>PromptPay</p>
          </diver>
          <div id="dat" className="flex justify-between">
            <p>วันที่จ่ายเงิน</p>
            <p>21 มิ.ย. 2568</p>
          </div>
          <div id="time" className="flex justify-between">
            <p>เวลา</p>
            <p>18 . 05 น.</p>
          </div>
        </div>
        <Link
          to="/"
          className="h-[56px] mx-6 mt-[29px] mb-6 rounded-[10px] bg-[#383838] font-bold text-white flex justify-center"
        >
          <input
            type="button"
            value="กลับหน้าหลัก"
            className="cursor-pointer border-none"
          />
        </Link>
      </div>
    </div>
  );
}

export default Payment_success;
