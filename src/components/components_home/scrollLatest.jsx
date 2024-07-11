// import { useRef, useState, useEffect } from "react";
// import leftArrow from "../../assets/Logo/logo_product_card/left_slide.png";
// import rightArrow from "../../assets/Logo/logo_product_card/right_slide.png";
// import { CarLatest } from "../API/API_Cars";

// const scrollContainerStyles = {
//   scrollbarWidth: "none",
// };

// function ScrollCarLatest() {
//   const scrollRef = useRef(null);
//   const [isAtStart, setIsAtStart] = useState(true);
//   const [isAtEnd, setIsAtEnd] = useState(false);
//   const [products, setProducts] = useState([]);

//   const handleScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setIsAtStart(scrollLeft === 0);
//       setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -1152, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 1152, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.addEventListener("scroll", handleScroll);
//       handleScroll();
//     }
//     return () => {
//       if (scrollRef.current) {
//         scrollRef.current.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     handleScroll(); // Ensure we check the scroll position when products are loaded
//   }, [products]);

//   return (
//     <section>
//       <div className="flex flex-col">
//         <h1 className="text-xl mb-4">🛎️ รถแนะนำรถใหม่</h1>
//         <div className="relative w-[1128px] mx-auto">
//           {!isAtStart && (
//             <img
//               src={leftArrow}
//               alt="Scroll Left"
//               onClick={scrollLeft}
//               className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full shadow-md hover:scale-110"
//             />
//           )}
//           <div
//             className="flex w-full overflow-x-auto whitespace-nowrap shadow rounded gap-[24px]"
//             ref={scrollRef}
//             style={scrollContainerStyles}
//           >
//             {products.map((product) => (
//               <div key={product.id} className="">
//                 <CarLatest product={product} />
//               </div>
//             ))}
//           </div>
//           {!isAtEnd && (
//             <img
//               src={rightArrow}
//               alt="Scroll Right"
//               onClick={scrollRight}
//               className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full shadow-md hover:scale-110"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ScrollCarLatest;
