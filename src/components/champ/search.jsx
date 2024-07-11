import React, { useState } from "react";
import { onSearchCar } from "../API/API_Cars";
import example_products from "../../data/example_products";
import { Link } from "react-router-dom";

export const Search = ({ setSearchResults, setSearchValue }) => {
  const [localSearchValue, setLocalSearchValue] = useState("");

  const handleSearch = async () => {
    try {
      const result = await onSearchCar(localSearchValue);
      setSearchResults(result);
      console.log(result);
    } catch (error) {
      console.error("Error searching for cars:", error);
    }
  };

  const handleClearSearch = async () => {
    const showAll = await example_products();
    setSearchResults(showAll);
    setLocalSearchValue("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalSearchValue(value);
    setSearchValue(value); // Update the parent component's state
  };

  return (
    <div className="relative bg-white rounded-2xl drop-shadow-xl w-full pb-2 md:w-1/2 md:ml-96 pt-2 px-8">
      <div className="flex gap-8 mx-4 mb-2">
        <h2 className="text-xl text-blue-900">ค้นหารถที่ต้องการ</h2>
        <h2 className="text-xl">ฟิลเตอร์</h2>
      </div>
      <div className="flex gap-4 justify-center">
        <input
          className="w-full pl-4 mx-4 rounded-xl bg-gray-200"
          type="text"
          placeholder="🛒ค้นหารถรุ่นที่ต้องการ ยี่ห้อ รุ่น หรือ คีย์เวิร์ด"
          value={localSearchValue}
          onChange={handleInputChange}
        />
        {localSearchValue && (
          <span
            className="text-xl text-slate-500 cursor-pointer hover:text-black mr-3"
            onClick={handleClearSearch}
          >
            clear
          </span>
        )}
        <button
          className="bg-blue-900 text-white hover:bg-blue-950 p-2 rounded-xl px-4 mx-2"
        >
          <Link onClick={handleSearch} to={`/buy`}>ค้นหา</Link>
        </button>
      </div>
    </div>
  );
};
