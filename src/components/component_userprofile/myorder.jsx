import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Imported correctly
import { Trandata } from "../../data/trandata"; // Ensure Trandata is imported correctly
import { carBuy } from "../API/API_Cars";

function MyOrder() {
  const [userId, setUserId] = useState("");
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUserId(decodedToken.id);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await carBuy();
      setTransaction(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {transaction.map((product, index) => (
        <div key={index} product={product} className="border border-[#E1E1E1] rounded-[20px]">
          <p className="font-semibold text-2xl mt-[16px] ml-6">คำสั่งซื้อของฉัน</p>
          <p className="font-semibold text-[14px] my-[16px] ml-6">
            ดูรายละเอียดคำสั่งซื้อของคุณ
          </p>
          <div className="mx-6 mb-8 flex flex-col gap-6">
            <div className="relative w-[792px] h-[232px] bg-neutral-100 rounded-[5px] border border-neutral-200">
              <div className="text-black text-[14px] font-medium ml-4 mt-2">
                Order ID: {product._id}
              </div>
              <div className="ml-4 mt-3 text-black text-xs font-medium">
                สั่งซื้อวันที่ {product.createOn}
              </div>
              <div className="ml-4 mt-4 w-[168px] h-[120px]  rounded-[10px] border border-neutral-200" >
                <img src={product.file1} alt="" />
              </div>
              <div className="absolute top-[82px] left-[200px] w-[209.26px] h-4 text-black text-sm font-semibold">
                {product.model}
              </div>
              <div className="absolute top-[132px] left-[200px] text-black text-xs font-normal">
                {product.address}
              </div>
              <div className="absolute top-[203px] ml-4 w-[112.14px] h-3.5 text-black text-sm font-medium">
                สถานะการซื้อสำเร็จ
              </div>
              <div className="absolute top-[156px] left-[200px] h-3 text-black text-xs font-light">
                ขนส่งโดย Roddee
              </div>
              <button className="absolute top-[203px] left-[656px] text-red-600 text-sm font-medium">
                ยกเลิกการซื้อสินค้า
              </button>
              <div className="absolute top-[108px] left-[200px] w-[46.06px] h-4 text-black text-xs font-normal">
                {product.type}
              </div>
              <div className="absolute top-[148px] right-[16px]">
                <p>รวมคำสั่งซื้อ</p>
                <span className="text-black text-sm font-normal">THB</span>
                <span className="text-black text-sm font-bold">฿{product.price}</span>
              </div>
              <div className="absolute top-[132px] left-[200px] text-black text-xs font-normal">
                {product.address}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyOrder;
