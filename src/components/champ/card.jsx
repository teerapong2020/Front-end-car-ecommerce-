import { Link } from 'react-router-dom'


export const Card = ({pdcard}) => {
  
  return (
    <>
    <Link  to={pdcard.detail}>
    <div className="max-md:w-full bg-white rounded-[20px] border-t shadow-md flex flex-col h-[360px] w-[383px]  hover:bg-gray-300">
    <div className="flex justify-between">
      <h3 className="ml-6 mt-4 font-black text-[16px]">{pdcard.name} </h3>
      <div className="flex ">
       
        <h3 className="mr-6 mt-5 font-black text-xs ">⭐{pdcard.point}</h3>
      </div>
    </div>
    <div className="flex justify-between mt-1">
      <h4 className="mx-6 font-extralight text-[14px] -mt-1">Sedan</h4>
      <div className="flex h-[15px] ">
      <h2 className='mx-4'>❤️  ♾️</h2>
      </div>
    </div>
    <img className="object-scale-down h-[180px] w-[260px] self-center"
    src= {pdcard.image}
     alt=''/>
    
    
    <div className="flex justify-between">
      <div className="flex">
       
        <p className="ml-1 text-[15px]">📍{pdcard.location}</p>
      </div>
      <div className="flex mx-6 text-[15px]">
        <h4>PRICE</h4>
        <h4 className="mx-1 font-bold">{pdcard.price}</h4>
        <h4>/Day</h4>
      </div>
    </div>
    
    <div className="border-t border-gray-300 mx-7 my-1 py-1"></div>  
    
    <Link className="mx-6 py-2 text-center bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[18px]" to={pdcard.detail}>Buy now</Link>
    </div>
    </Link>
 
  
  </>
  )
}
