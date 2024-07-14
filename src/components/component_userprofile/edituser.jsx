import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function EditUser() {
    

  const handleChange = async (e) => {
    const { name, value } = e.target;
    await setTransaction({ ...transaction, [name]: value });
  };


  return (
    <form id="informUser" className="mb-[55px]">
      <div className="flex flex-col  border border-[#E1E1E1] rounded-[20px]  px-6 pt-[28px] text-base">
        <p className="font-semibold text-2xl mb-6 ">จัดการบัญชีโปรไฟล์</p>
            <div className="flex">
                <div >
                    <p className="font-medium text-sm mb-2 ">อีเมล</p>
                    <input
                    type="text"
                    name="address"
                    //   value={transaction.address}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="  h-[48px] w-[384px] mb-6 px-5 rounded-2xl border border-[#E1E1E1] text-base"
                    />
                </div>
                
                <div className="ml-6">
                    <p className="font-medium text-sm mb-2 ">เบอร์</p>
                        <input
                        type="text"
                        name="etc"
                        //   value={transaction.etc}
                        onChange={handleChange}
                        placeholder="เบอร์โทรศัพท์ส่่วนตัว "
                        className=" h-[48px] w-[384px] px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
                    />
                </div>
            </div>

            <div className="flex">
                <div >
                    <p className="font-medium text-sm mb-2 ">ชื่อจริง</p>
                    <input
                    type="text"
                    name="address"
                    //   value={transaction.address}
                    onChange={handleChange}
                    placeholder="ชื่อจริง"
                    className="  h-[48px] w-[384px]   px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
                    />
                </div>
                
                <div className="ml-6">
                    <p className="font-medium text-sm mb-2 ">นามสกุล</p>
                        <input
                        type="text"
                        name="etc"
                        //   value={transaction.etc}
                        onChange={handleChange}
                        placeholder="นามสกุล"
                        className=" h-[48px] w-[384px]   px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
                    />
                </div>

                
            </div>

            <Link
                  to="/Checkout2"
                 className=" h-[48px] bg-[#3E5685] rounded-[10px] text-white text-2xl flex justify-center mt-8 mb-4"
                //   state={transaction}
                 >
                <input
                    type="submit"
                    value="ยืนยัน"
                    className="cursor-pointer border-none text-lg"
                />
            </Link>
       
       

 
       

      </div>
      <div
        id="hire"
        className="mt-6 h-[48px] w-[840px] border border-[#E1E1E1] rounded-[15px] flex justify-between items-center "
      > 
        <span className="font-medium text-sm ml-6">ลบบัญชีของคุณ</span>
        <button className="font-medium text-sm mr-6 text-red-600">ลบ</button>
       
      </div>
    </form>
  );
}

export default EditUser;



// function EditUser({ data }) {
//     const { transaction, setTransaction } = data;
  
//     const handleChange = async (e) => {
//       const { name, value } = e.target;
//       await setTransaction({ ...transaction, [name]: value });
//     };
  
//     useEffect(() => {
//       console.log(transaction);
//     }, [transaction]);
  
//     return (
//       <form id="informUser" className="mb-[55px]">
//         <div className="flex flex-col  border border-[#E1E1E1] rounded-[20px]  px-6 pt-[28px] pb-10 text-base">
//           <p className="font-semibold text-2xl mb-8 ">กรอกข้อมูล</p>
//           <label className="font-medium text-sm mb-2 ">ที่อยู่จัดส่ง</label>
//           <input
//             type="text"
//             name="address"
//             value={transaction.address}
//             onChange={handleChange}
//             placeholder="ที่อยู่"
//             className="  h-[56px] mb-6   px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
//           />
//           <label className="font-medium text-sm mb-2 ">ข้อมูลเพิ่มเติม</label>
//           <input
//             type="text"
//             name="etc"
//             value={transaction.etc}
//             onChange={handleChange}
//             placeholder="ข้อมูลเพิ่มเติม (ถ้ามี) "
//             className=" h-[56px] mb-6   px-5 rounded-2xl border border-[#E1E1E1] font-medium text-base"
//           />
//           <label className="font-medium text-sm mb-2 ">เลือกวันที่รับรถ</label>
//           <input
//             type="date"
//             name="Sell_Date"
//             value={transaction.Sell_Date}
//             onChange={handleChange}
//             placeholder="เลือกวันที่"
//             className=" h-[56px]   px-5 rounded-2xl border border-[#E1E1E1]  font-medium text-base"
//           />
//         </div>
//         <div
//           id="hire"
//           className="mt-10  px-6 pt-3 pb-4  grid grid-cols-1 grid-rows-2 border border-[#E1E1E1] rounded-[20px]"
//         >
//           <div className="flex  ">
//             <input type="checkbox" className="h-4 w-4 mr-2 mt-1" />
//             <label>กรุณาตรวจสอบข้อมูลการเช่าให้ครบถ้วนก่อนการกดยืนยัน</label>
//           </div>
//           <Link
//             to="/Checkout2"
//             className=" h-[48px] bg-[#3E5685] rounded-[10px] text-white text-2xl flex justify-center"
//             state={transaction}
//           >
//             <input
//               type="submit"
//               value="เช่ารถคันนี้"
//               className="cursor-pointer border-none text-lg"
//             />
//           </Link>
//         </div>
//       </form>
//     );
//   }
