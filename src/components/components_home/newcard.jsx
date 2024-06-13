import React from 'react';
import { Link } from 'react-router-dom';

export const NewCard = ({ product }) => {
  return (
    <div className="max-md:w-full bg-white rounded-[20px] border-t shadow-md flex flex-col h-[360px] w-[383px]">
      <div className="flex justify-between">
        <h3 className="ml-6 mt-4 font-black text-[16px]">{product.name}</h3>
        <div className="flex">
          <h3 className="mr-6 mt-5 font-black text-xs">4.8/5.0</h3>
        </div>
      </div>
      <img className="object-scale-down h-[180px] w-[260px] self-center" src={product.image} alt={product.name} />
      <div className="flex justify-between mx-6">
        <div className="flex">
          <p className="ml-1 text-[15px]">{product.location}</p>
        </div>
        <div className="flex mx-6 text-[15px]">
          <h4>PRICE</h4>
          <h4 className="mx-1 font-bold">฿{product.price}</h4>
          <h4>/Day</h4>
        </div>
      </div>
      <div className="flex justify-between mx-6">
        <div className="flex">
          <h4>Mileage: {product.mile}</h4>
        </div>
      </div>
      <div className="border-t border-gray-300 mx-7 my-1 py-1"></div>
      <Link className="mx-6 py-2 text-center bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[18px]" to="/productcard_info">Rent now</Link>
      <Link className="mx-32 mb-4 mt-2 text-center underline px-3 hover:text-blue-900 text-[14px]" to="/">View Detail</Link>
    </div>
  );
}