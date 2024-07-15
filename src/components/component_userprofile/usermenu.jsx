import React from "react";
import Arrow from "../../assets/userPage/arrow.png";
import Car from "../../assets/userPage/car-alt.png";
import Alarm from "../../assets/userPage/alarm.png";
import Logout from "../../assets/userPage/enter.png";
import ChangePass from "../../assets/userPage/lock-alt.png";
import UserIcon from "../../assets/userPage/user-alt-3.png";
import Favourite from "../../assets/userPage/heart.png";
import Cart from "../../assets/userPage/cart.png";
import { Link } from "react-router-dom";


function UserMenu() {
  //   const { transaction, setTransacion } = data;

  return (
    <div>
      <div className="w-[264px] h-[336px] border border-[#E1E1E1] rounded-[20px] mb-4">
        <div className="w-[264px] h-[224px] bg-[#3E5685] rounded-[20px] flex flex-col justify-center ">
          <div className="h-[94px] w-[94px] bg-white rounded-full place-content-center ml-20 ">
            <p className="flex justify-center items-center">KS</p>
          </div>
          <p className="text-[16px] text-white font-semibold flex justify-center mt-6">
            Kittipong Satayanusakkul
          </p>
          <p className="text-[12px] text-white font-semibold flex justify-center">
            ยืนยันอีเมลล์แล้ว
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Link
            to="/myorder"
            className="flex justify-between items-center hover:bg-[#CEECFF] h-[40px] w-[248px] mt-2 hover:rounded-lg duration-200"
          >
            <div className="flex ">
              <img
                src={Cart}
                alt="Cart"
                className="w-[24px] h-[24px] mr-2 ml-2"
              />
              <p className="text-[16px] ">คำสั่งซื้อของฉัน</p>
            </div>
            <img src={Arrow} alt="Arrow" className="w-[7px] h-[24px] mr-2" />
          </Link>

          <Link
            to="/loginandregister"
            onClick
            className="flex justify-between items-center hover:bg-[#CEECFF] h-[40px] w-[248px] mt-4 hover:rounded-lg duration-200"
          >
            <div className="flex ">
              <img
                src={Car}
                alt="Cart"
                className="w-[24px] h-[24px] mr-2 ml-2"
              />
              <p className="text-[16px] ">สินค้าของฉัน</p>
            </div>
            <img src={Arrow} alt="Arrow" className="w-[7px] h-[24px] mr-2" />
          </Link>
        </div>
      </div>

      <div className="w-[264px] h-[168px] border border-[#E1E1E1] rounded-[20px]  mb-4 ">
        <div className="flex flex-col items-center">
          <Link
            to="/edituser"
            className="flex justify-between items-center hover:bg-[#CEECFF] h-[40px] w-[248px] mt-2 hover:rounded-lg duration-200"
          >
            <div className="flex ">
              <img
                src={UserIcon}
                alt="Cart"
                className="w-[24px] h-[24px] mr-2 ml-2"
              />
              <p className="text-[16px] ">จัดการบัญชีโปรไฟล์</p>
            </div>
            <img src={Arrow} alt="Arrow" className="w-[7px] h-[24px] mr-2" />
          </Link>

          <Link
            to="/changepassword"
            className="flex justify-between items-center hover:bg-[#CEECFF] h-[40px] w-[248px] mt-4  hover:rounded-lg duration-200"
          >
            <div className="flex ">
              <img
                src={ChangePass}
                alt="Cart"
                className="w-[24px] h-[24px] mr-2 ml-2"
              />
              <p className="text-[16px] ">เปลี่ยนรหัสผ่าน</p>
            </div>
            <img src={Arrow} alt="Arrow" className="w-[7px] h-[24px] mr-2" />
          </Link>

          <Link
            to="/myfavourite"
            className="flex justify-between items-center hover:bg-[#CEECFF] h-[40px] w-[248px] mt-4 hover:rounded-lg duration-200"
          >
            <div className="flex ">
              <img
                src={Favourite}
                alt="Cart"
                className="w-[24px] h-[24px] mr-2 ml-2"
              />
              <p className="text-[16px] ">รายการโปรด</p>
            </div>
            <img src={Arrow} alt="Arrow" className="w-[7px] h-[24px] mr-2" />
          </Link>

        
        </div>
      </div>

      <div className="w-[264px] h-[56px] border border-[#E1E1E1] rounded-[20px] ">
        <div className="flex flex-col items-center">
          <button
            onClick
            className="flex justify-between items-center hover:bg-[#CEECFF] h-[40px] w-[248px] mt-2  hover:rounded-lg duration-200"
          >
            <div className="flex ">
              <img
                src={Logout}
                alt="Cart"
                className="w-[24px] h-[24px] mr-2 ml-2"
              />
              <p className="text-[16px] ">ออกจากระบบ</p>
            </div>
            <img src={Arrow} alt="Arrow" className="w-[7px] h-[24px] mr-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
