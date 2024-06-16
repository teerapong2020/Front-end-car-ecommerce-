import React from "react";

export const Search = () => {
  return (
    <>
    <div className=" relative bg-white rounded-2xl drop-shadow-xl w-full pb-2 md:w-1/2 md:ml-96 pt-2 px-8   ">
      <div className="flex gap-8 mx-4 mb-2 ">
        <h2 className=" text-xl text-blue-900 ">ค้นหารถที่ต้องการ</h2>
        <h2 className="text-xl">ฟิลเตอร์</h2>
      </div>
      <div className="flex  gap-4 justify-center ">
        <input className="w-full mx-4 rounded-xl bg-gray-200 " type="text" placeholder="    🛒  ค้นหารถรุ่นที่ต้องการ ยี่ห้อ รุ่น หรือ คีย์เวิร์ด"/>
          <button className="bg-blue-900 text-white hover:bg-blue-950 p-2 rounded-xl px-4 mx-2">ค้นหา</button>       
      </div>
    </div>
    </>
  );
};
