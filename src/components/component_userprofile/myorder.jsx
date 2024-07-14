import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import check_in from "../../assets/Logo/logo_product_card/check_in.png";
import sharenetwork from "../../assets/Logo/logo_product_card/sharenetwork.png";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function MyOrder() {
  // const [isFilled, setIsFilled] = useState(false);
  // const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     setUserId(decodedToken.id);
  //   }
  // }, []);

  // const toggleHeart = async () => {
  //   try {
  //     setIsFilled(!isFilled);

  //     const action = isFilled ? "remove" : "add"; // ตรวจสอบว่าต้องการลบหรือเพิ่ม
  //     const response = await axios.post("http://localhost:5000/api/car-list/togglePin", {
  //       userId: userId,
  //       carId: product._id, // หรือเปลี่ยนเป็นตัวแปรที่เก็บ _id ของ product นี้
  //       action: action
  //     });

  //     console.log(response.data); // แสดงผลลัพธ์จาก backend ที่ตอบกลับ
  //   } catch (error) {
  //     console.error("Error toggling pin:", error);
  //     // จัดการ error ตามที่คุณต้องการ
  //   }
  // }

  return (
    <div className=" border border-[#E1E1E1] rounded-[20px]  ">
      <p className="font-semibold text-2xl  mt-[16px] ml-6">
        คำสั่งซื้อของฉัน
      </p>
      <p className="font-semibold text-[14px] my-[16px] ml-6 ">
        ดูรายละเอียดคำสั่งซื้อของคุณ
      </p>
      <div className="mx-6 mb-8 flex flex-col gap-6">
        {/* ------------------Order List 1 -----------------------*/}
        <div className="relative w-[792px] h-[232px] bg-neutral-100 rounded-[5px] border border-neutral-200">
          <div className=" text-black text-[14px] font-medium ml-4 mt-2">
            Order ID :1DKW120303
          </div>

          <div className="ml-4 mt-3 text-black text-xs font-medium">
            สั่งซื้อวันที่ 20/07/2024
          </div>


    
          <div className="ml-4 mt-4 w-[168px] h-[120px] bg-white rounded-[10px] border border-neutral-200" />   

          <div className="absolute top-[82px] left-[200px] w-[209.26px] h-4 text-black text-sm font-semibold">
            BENZ S580E W223 / 2023
          </div>

          <div className="absolute top-[132px] left-[200px]  text-black text-xs font-normal">
            Bangkok, Thailand
          </div>

          <div className="absolute top-[203px] ml-4 w-[112.14px] h-3.5 text-black text-sm font-medium">
            สถานะการซื้อสำเร็จ
          </div>

          <div className="absolute top-[156px] left-[200px]  h-3 text-black text-xs font-light">
            ขนส่งโดย Roddee
          </div>




          <button className="absolute top-[203px] left-[528px] h-4 text-neutral-500 text-sm font-medium">
            เปลี่ยนวันที่รับสินค้า
          </button>

          <button className="absolute top-[203px] left-[656px]   text-red-600 text-sm font-medium">
            ยกเลิกการซื้อสินค้า
          </button>

        
          <div className="absolute top-[108px] left-[200px] w-[46.06px] h-4 text-black text-xs font-normal">
            Sedan
          </div>

          <div className="absolute top-[148px] right-[16px] ">
            <p>รวมคำสั่งซื้อ</p> 
            <span className="text-black text-sm font-normal"> THB </span>
            <span className="text-black text-sm font-bold">฿2,200,000</span>
          </div>

          <div className="absolute top-[132px] left-[200px]  text-black text-xs font-normal">
            Bangkok, Thailand
          </div>
        </div>

         {/* ------------------Order List 2 -----------------------*/}

        <div className="relative w-[792px] h-[232px] bg-neutral-100 rounded-[5px] border border-neutral-200">
          <div className=" text-black text-[14px] font-medium ml-4 mt-2">
            Order ID :1DKW120303
          </div>

          <div className="ml-4 mt-3 text-black text-xs font-medium">
            สั่งซื้อวันที่ 20/07/2024
          </div>


    
          <div className="ml-4 mt-4 w-[168px] h-[120px] bg-white rounded-[10px] border border-neutral-200" />   

          <div className="absolute top-[82px] left-[200px] w-[209.26px] h-4 text-black text-sm font-semibold">
            BENZ S580E W223 / 2023
          </div>

          <div className="absolute top-[132px] left-[200px]  text-black text-xs font-normal">
            Bangkok, Thailand
          </div>

          <div className="absolute top-[203px] ml-4 w-[112.14px] h-3.5 text-black text-sm font-medium">
            สถานะการซื้อสำเร็จ
          </div>

          <div className="absolute top-[156px] left-[200px]  h-3 text-black text-xs font-light">
            ขนส่งโดย Roddee
          </div>




          <button className="absolute top-[203px] left-[528px] h-4 text-neutral-500 text-sm font-medium">
            เปลี่ยนวันที่รับสินค้า
          </button>

          <button className="absolute top-[203px] left-[656px]   text-red-600 text-sm font-medium">
            ยกเลิกการซื้อสินค้า
          </button>

        
          <div className="absolute top-[108px] left-[200px] w-[46.06px] h-4 text-black text-xs font-normal">
            Sedan
          </div>

          <div className="absolute top-[148px] right-[16px] ">
            <p>รวมคำสั่งซื้อ</p> 
            <span className="text-black text-sm font-normal"> THB </span>
            <span className="text-black text-sm font-bold">฿2,200,000</span>
          </div>

          <div className="absolute top-[132px] left-[200px]  text-black text-xs font-normal">
            Bangkok, Thailand
          </div>
        </div>


      </div>
    </div>
  );
}

export default MyOrder;
