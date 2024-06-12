import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export const Card = () => {
  const [price,setPrice] = useState([])
  
  return (
    <>
      <hero>
      <div >
        <img class="absolute  w-full" src="/assets/bg.png" alt="" />
        <div class="flex justify-center bg-gray-300 ">
          <h1 class="relative text-white  font-black text-4xl mt-20 max-md:mt-2  ">บริการเช่ารถยนต์</h1>
        </div>
      </div>
    </hero>
    <div className="max-md:w-full bg-white rounded-[20px] border-t shadow-md flex flex-col h-[360px] w-[383px] ">
    <div className="flex justify-between">
      <h3 className="ml-6 mt-4 font-black text-[16px]">BENZ GLC 300 4MATIC</h3>
      <div className="flex ">
        <img className="mr-1 mt-[23px] h-[10px]"
        src=" "
        alt='favourite'/>
        <h3 className="mr-6 mt-5 font-black text-xs ">4.8/5.0</h3>
      </div>
    </div>
    <div className="flex justify-between mt-1">
      <h4 className="mx-6 font-extralight text-[14px] -mt-1">Sedan</h4>
      <div className="flex h-[15px] ">
        <img className="mr-2"
        src=" "
        alt='favourite'/>
        <img className="mr-6"
        src="icon/sharenetwork.png"
        alt='sharenetwork'/>
      </div>
    </div>
    <img className="object-scale-down h-[180px] w-[260px] self-center"
    src= ''
     alt='BenzGlc300'/>
    
    
    <div className="flex justify-between">
      <div className="flex">
        <img className="ml-6 object-scale-down"
        src=" "
        alt='location'/>
        <p className="ml-1 text-[15px]">Bangkok,Thailand</p>
      </div>
      <div className="flex mx-6 text-[15px]">
        <h4>PRICE</h4>
        <h4 className="mx-1 font-bold">฿20,000</h4>
        <h4>/Day</h4>
      </div>
    </div>
    
    <div className="border-t border-gray-300 mx-7 my-1 py-1"></div>  
    
    <Link className="mx-6 py-2 text-center bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[18px]" to="/">Rent now</Link>
    <Link className="mx-32 mb-4 mt-2 text-center underline px-3 hover:text-blue-900 text-[14px]" to="/">View Detail</Link>
  </div>
  
  </>
  )
}
