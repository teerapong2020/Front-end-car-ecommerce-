import React from 'react';
import { Link } from 'react-router-dom';
import star from "../../assets/Logo/logo_product_card/star.png";
import check_in from "../../assets/Logo/logo_product_card/check_in.png";
import sharenetwork from "../../assets/Logo/logo_product_card/sharenetwork.png";
import heart from "../../assets/Logo/logo_product_card/heart.png";

export const NewCard = ({ product }) => {
  return (
    <div className=" bg-white rounded-[20px] border-t shadow flex flex-col w-[360px]">
     <div className='p-2'>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-[16px]">{product.name}</h3>
        <div className="flex gap-1">
          <img src={star}/><h3 className=" font-black text-xs">4.8/5.0</h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="font-light text-[12px]">{product.name}</h3>
        <div className="flex gap-2">
          <img src={heart} className='h-4'/><img src={sharenetwork} className='h-4'/>
        </div>
      </div>
     </div>
      <img className="object-scale-down h-[140px] self-center" src={product.imageMain} alt={product.name} />
      <div className="flex justify-between mx-6">
        <div className="flex items-center">
          <img src={check_in} className='h-2.5'/><p className="ml-1 text-[15px]">{product.location}</p>
        </div>
        <div className="flex mx-6 text-[15px]">
          <h4>PRICE</h4>
          <h4 className="mx-1 font-bold">฿{product.price}</h4>
        </div>
      </div>
      <div className=" border-t border-gray-300 mx-7 my-1 py-1"></div>
      <div className='flex flex-col'>      
        <Link className="mx-6 py-2 text-center bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[18px]" to={`/buy_productcard_info/${product.name}_${product.id}`}>Buy now</Link>
        <Link className="mx-32 mb-4 mt-2 text-center underline px-3 hover:text-blue-900 text-[14px]" to="/">View Detail</Link>
      </div>
    </div>
    
  );
}