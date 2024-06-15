import example_products from "../data/example_products";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import star from "../assets/Logo/Icon_productcard_info/star.png";
import verify from "../assets/Logo/Icon_productcard_info/Verified.png";
import favwhite from "../assets/Logo/Icon_productcard_info/favwhite.png";
import bagtype from "../assets/Logo/Icon_productcard_info/bagtype.png";
import cartype from "../assets/Logo/Icon_productcard_info/cartype.png";
import doortype from '../assets/Logo/Icon_productcard_info/doortype.png'
import enginetype from "../assets/Logo/Icon_productcard_info/enginetype.png";
import gastype from "../assets/Logo/Icon_productcard_info/gastype.png";
import geartype from "../assets/Logo/Icon_productcard_info/geartype.png";
import mdi_favorite from "../assets/Logo/Icon_productcard_info/mdi_favourite.png";
import seatnum from "../assets/Logo/Icon_productcard_info/seatnum.png";
import seattype from "../assets/Logo/Icon_productcard_info/seattype.png";
import share from "../assets/Logo/Icon_productcard_info/share.png";

function Buy_ProductCard_Info() {
  const { name_id } = useParams();
  const id = parseInt(name_id.split("_").pop());
  const product = example_products.find((product) => product.id === id);
  const [lscore, setlscore] = useState(true)
  const [rscore, setrscore] = useState(false)
 
  useEffect(() => {
    window.scrollTo({ top: 0});
  }, []);


  function leftscore (){
    setlscore(true)
    setrscore(false)
  }


  function rightscore (){
    setlscore(false)
    setrscore(true)
  }




  return (
    <div className="flex justify-center">
      <div className="้w-[1128px] flex ">
        <section className="w-[660px]">
          <div className="">
            <h1 className="h-24 flex items-center text-[28px] font-extrabold">
              {product.name}
            </h1>
            <div className="show flex items-center">
              <img
                className="rounded-[10px] w-full relative "
                src={product.imageMain}
                alt="X4-main"
              />
            </div>
            <div className="show hidden ">
              <img className="w-full" src={product.image1} alt="X4-1" />
            </div>
            <div className="show hidden">
              <img className="w-full" src={product.image2} alt="X4-2" />
            </div>
            <div className="show hidden">
              <img className="w-full" src={product.image3} alt="X4-3" />
            </div>
            <div className="show hidden">
              <img className="w-full" src={product.image4} alt="X4-4" />
            </div>
            <div className="show hidden">
              <img className="w-full" src={product.image5} alt="X4-5" />
            </div>

            <div className="absolute top-1/2 transform translate-y-1/2 w-[660px] flex justify-between px-4  text-2xl font-black select-none">
              <a
                className="cursor-pointer backdrop-blur-sm bg-white/30 bg-gray-800 rounded-full px-2 hover:text-gray-500"
                onClick={() => plusSlides(-1)}
              >
                ❮
              </a>
              <a
                className="cursor-pointer backdrop-blur-sm bg-white/30 bg-gray-800 rounded-full px-2 hover:text-gray-500"
                onClick={() => plusSlides(1)}
              >
                ❯
              </a>
            </div>

            <div className="flex w-[100px] m-2 gap-2">
              <img
                className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500"
                src={product.imageMain}
                onClick={() => currentSlide(1)}
                alt="X4-main"
              />
              <img
                className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500"
                src={product.image1}
                onClick={() => currentSlide(2)}
                alt="X4-1"
              />
              <img
                className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500"
                src={product.image2}
                onClick={() => currentSlide(3)}
                alt="X4-2"
              />
              <img
                className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500"
                src={product.image3}
                onClick={() => currentSlide(4)}
                alt="X4-3"
              />
              <img
                className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500"
                src={product.image4}
                onClick={() => currentSlide(5)}
                alt="X4-4"
              />
              <img
                className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500"
                src={product.image5}
                onClick={() => currentSlide(6)}
                alt="X4-5"
              />
            </div>

            <div className="md:hidden">
              <h1 className="mb-2 font-black text-xl mx-4 my-4">
                Mercedes-Benz EQS-450
              </h1>
            </div>

            <section>
              <main>
                <h4 className="font-medium mx-4 mt-4 text-[20px]">Detail</h4>
                <div className="border-t-2 border-t-blue-950 w-[68px] mx-4"></div>
                <div className="border-t border-gray-300 mx-4 py-1"></div>
                <p className="mt-3 mx-4 text-[14px]">
                  EQS 450 คือรุ่นยนต์ไฟฟ้าของ Mercedes-Benz
                  ที่เป็นส่วนหนึ่งของตระกูล EQ
                  ซึ่งเป็นรถยนต์ไฟฟ้าแบบเต็มรูปแบบของบริษัท
                  มันเป็นรถยนต์ที่มุ่งหน้าไปสู่การขับขี่ที่ยั่งยืนและยังความสวยงามของรถยนต์เล็กทุกความเร็ว
                  รถยนต์รุ่นนี้มาพร้อมกับความสามารถในการขับขี่ไกลโดยใช้พลังงานไฟฟ้า
                  ด้วยชุดแบตเตอรี่ขนาดใหญ่ที่ให้ระยะทางขับขี่ที่ยาวนาน
                  และมีสมรรถนะขับเคลื่อนที่ยอดเยี่ยม นอกจากนี้
                  มันยังมีดีไซน์ที่หรูหราและสมวัยมาพร้อมกับเทคโนโลยีที่ล้ำหน้าอื่นๆ
                  ที่ช่วยให้ EQS 450
                  เป็นตัวเลือกที่น่าสนใจสำหรับผู้ที่ต้องการรถยนต์ไฟฟ้าระดับพรีเมียมที่สมบูรณ์แบบ
                </p>

                <h4 className="text-[20px] font-medium mt-2 mx-4">Feature</h4>
                <div className="border-t-2 border-t-blue-950 w-[68px] mx-4"></div>
                <div className="border-t border-gray-300 mx-4 py-1"></div>

                <div className="text-[14px]">
                  <li className="mx-4 max-md:my-2">
                    ด้วยระบบขับเคลื่อนไฟฟ้า
                    มันมอบประสิทธิภาพการขับขี่ที่เงียบสงบและมีเสน่ห์
                  </li>
                  <li className="snap-center mx-4 max-md:my-2">
                    มีชุดแบตเตอรี่ขนาดใหญ่ที่ให้ระยะทางขับขี่ไกลโดยไม่ต้องเติมพลังงานบ่อยครั้ง
                  </li>
                  <li className="mx-4 max-md:my-2">
                    ด้วยดีไซน์ที่สวยงามและหรูหราที่มาพร้อมกับเส้นโค้งที่นุ่มนวลและความสมดุลของรถยนต์
                  </li>
                  <li className="mx-4 max-md:my-2">
                    มีการนำเทคโนโลยีล้ำหน้ามาใช้ในระบบการขับขี่อัจฉริยะ,
                    การเชื่อมต่อ, และความปลอดภัย
                    เพื่อประสบการณ์ขับขี่ที่ปลอดภัยและสะดวกสบาย
                  </li>
                  <li className="mx-4 max-md:my-2">
                    มาพร้อมกับองค์ประกอบภายในที่หรูหราและสะดวกสบาย,
                    รวมถึงประสิทธิภาพขับขี่ที่ดีและการควบคุมที่แม่นยำ
                  </li>
                </div>

                <h4 className="font-medium mx-4 mt-4 text-[20px]">Review </h4>
                <div className="border-t-2 border-t-blue-950 w-[68px] mx-4 "></div>
                <div className="border-t border-gray-300 mx-4 py-1"></div>

                <div className="border shadow-sm rounded-[5px] mx-4 py-2 flex justify-around">
                  <div>
                    <div className="flex justify-center items-center gap-1">
                      <img className="" src={star} alt="favourite" />
                      <p>4.9</p>
                    </div>
                    <p>เรตติ้งทั้งหมด</p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-1">
                      <img className="h-4" src={verify} alt="favourite" />
                      <p>100%</p>
                    </div>
                    <p>ได้รถคันที่จอง</p>
                  </div>
                  <div>
                    <div className="flex justify-center items-center gap-1">
                      <img className="h-4" src={favwhite} alt="favourite" />
                      <p>50</p>
                    </div>
                    <p>คันที่อยากได้</p>
                  </div>
                </div>
                <div className="border shadow-sm rounded-[15px]  flex w-full h-[70px] mt-6">
                  {lscore?
                  <button type="button" className="rounded-[15px] bg-[#3E5685] text-white m-2 w-full " onClick={leftscore}>
                    คะแนนรถคันนี้
                  </button>:
                  <button type="button" className="rounded-[15px]  m-2 w-full " onClick={leftscore}>
                    คะแนนรถคันนี้
                  </button>
                  }

                  {rscore?
                  <button type="button" className="rounded-[15px] bg-[#3E5685] text-white m-2 w-full " onClick={rightscore}>
                    คะแนนรถคันนี้
                  </button>:
                  <button type="button" className="rounded-[15px]  m-2 w-full " onClick={rightscore}>
                    คะแนนรถคันนี้
                  </button>
                  }

                </div>
                {lscore?
                <div className="h-[246px] flex justify-center items-center">
                  waiting1
                </div>:
                <div className="h-[246px] flex justify-center items-center">
                  waiting2
                </div>
                }
              </main>
            </section>
          </div>
          ;
        </section>
        {/* ----------------------------------------------------Right------------------------------------------------------------------- */}
        <section className=" w-[468px] flex flex-col px-6">
          <div className="ml-8 max-md:hidden rounded-[20px] border shadow-md h-[300px] w-auto mt-[96px]">
            <h2 className="ml-6 mt-2 mb-2 font-black text-[]">
              Mercedes-Benz GLC 300 4MATIC
            </h2>
            <h2 className="mb-2 ml-40">ราคา ฿20,000/วัน</h2>
            <div className="flex flex-col gap-2">
              <button className="bg-[#3E5685] text-white mx-6 py-2 hover:bg-blue-950 rounded-md">
                Booking
              </button>
              <div className="flex gap-1">
                <button className="bg-[#191f2c] text-white ml-6 py-2 px-11 hover:bg-blue-950 rounded-md flex">
                  <img
                    className="h-[15px] mt-1"
                    src={favwhite}
                    alt=""
                  />
                  Add to favourite
                </button>
                <button className="border border-gray-400 py-2 px-3 hover:bg-blue-950 rounded-md">
                  <img className="h-[17px]" src={share} alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* spec */}
          <div className="flex py-[128px]">
            <div>
              <div className="flex my-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={cartype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">ประเภทรถยนต์</p>
                  <p className="font-bold text-[15px]">รถสปอร์ต</p>
                </div>
              </div>
              <div className="flex mb-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={seatnum}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">จำนวนที่นั่ง</p>
                  <p className="font-bold text-[15px]">2 ที่นั่ง</p>
                </div>
              </div>
              <div className="flex mb-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={gastype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">ระบบเชื้อเพลิง</p>
                  <p className="font-bold text-[15px]">เบนซิน</p>
                </div>
              </div>
              <div className="flex mb-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={doortype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">จำนวนประตู</p>
                  <p className="font-bold text-[15px]">2 ประตู</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex my-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={geartype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">ระบบเกียร์</p>
                  <p className="font-bold text-[15px]">เกียร์ออโต้</p>
                </div>
              </div>
              <div className="flex mb-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={seattype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">ประเภทเบาะ</p>
                  <p className="font-bold text-[15px]">เบาะหนัง</p>
                </div>
              </div>
              <div className="flex mb-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={enginetype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">ความจุเครื่องยนต์</p>
                  <p className="font-bold text-[15px]">1,500 CC</p>
                </div>
              </div>
              <div className="flex mb-6">
                <img
                  className="ml-8 mr-2 h-[42px]"
                  src={bagtype}
                  alt="cartype"
                />
                <div>
                  <p className="text-[14px]">จำนวนสัมภาระ</p>
                  <p className="font-bold text-[15px]">กระเป๋า 2-3 ใบ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Etc */}
          <div className=" ">
            <p className="ml-8 py-2 bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[17px] w-[300px] mt-6 pl-4 ">
              เงื่อนไขข้อตกลง
            </p>
            <p className="ml-8 py-2 bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[17px] w-[300px] mt-6 pl-4">
              เอกสารที่ใช้เช่ารถ
            </p>
            <p className="ml-8 py-2 bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[17px] w-[300px] mt-6 pl-4">
              ประกันภัยรถยนต์
            </p>
            <p className="ml-8 py-2 bg-[#3E5685] text-white hover:bg-blue-950 rounded-md text-[17px] w-[300px] mt-6 pl-4">
              อื่นๆ
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

// ฟังก์ชันเพื่อเปลี่ยนรูปที่แสดง
let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("show");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

export default Buy_ProductCard_Info;
