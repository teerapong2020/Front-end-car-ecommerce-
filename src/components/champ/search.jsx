import React from "react";

export const Search = () => {
  return (
    <>
    <div className=" relative bg-blue-400  md:mx-72">
      <div className="flex gap-8 justify-center">
        <h2>ค้นหารถให้เช่า</h2>
        <h2>ฟิลเตอร์</h2>
      </div>
      <div className="flex  gap-4 justify-center md:gap-12">
        <div >
          <h3>จุดรับ-คืนรถ</h3>
          <select name="couuntry" id="">
            <option value="Bangkok">Bangkok</option>
            <option value="Pattaya">Pattaya</option>
            <option value="Phuket">Phuket</option>
          </select>
        </div>

        <div >
          <div className="flex">
            <span>
              <h3>วันเวลารับรถ</h3>
              <input type="date" name="" id="" />
            </span>
            <span>
                <h3>วันเวลาคืนรถ</h3>
                <input type="date" name="" id="" />
            </span>
          </div>
        </div>
        <div>
          <button>ค้นหา</button>
        </div>
      </div>
    </div>
    </>
  );
};
