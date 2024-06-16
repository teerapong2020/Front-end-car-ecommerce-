import Tesla from "../../src/assets/Login/Tesla.png"
function Login() {


    return (
      <section>
       <img src={Tesla} className="w-full absolute" alt="Loginbg"/>
        <div className="w-[1128px] flex justify-center">
         <div className="text-white relative mt-20">
            asdasdaasdasdasdasdadad

          
         </div>
        </div>
      </section>
    );
  }
  
export default Login;

{/* <div >
  <img class="absolute  w-full" src="/assets/bg.png" alt="" />
    <div class="flex justify-center bg-gray-300 ">
      <h1 class="relative text-white  font-black text-4xl mt-20 max-md:mt-2  ">บริการเช่ารถยนต์</h1>
    </div>
</div> */}

//   function Login() {

//     const audioRef = useRef(null);
  
//     useEffect(() => {
//       audioRef.current.play().catch(error => {
//         console.log('Error playing audio:', error);
//       });
//     }, []);
  
//     return (
//       <div className="flex justify-center">
//         <audio ref={audioRef} src={tokyoDrift} />
//         {/* <audio ref={audioRef} src={youwill} /> */}
//         <div className=" w-full">
//           <Slide />
//           <div className="flex justify-center">
//           <div className=" w-[1128px]">
//                       <CarBrands />
//           <ScollNewCar />
//             </div>
//           </div>
  
//           <WhyMe />
//         </div>
//       </div>
//     );
//   }
  
//   export default Login;