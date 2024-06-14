import example_products from "../../data/example_products";
import { useParams } from "react-router-dom";
function ProductCard_Info() {
    const { name_id } = useParams();
    const id = parseInt(name_id.substring(name_id.lastIndexOf("_") + 1));
    const product =example_products.find((product) => product.id === id);

  return (
    <div className="flex justify-center">
    <div className="้ bg-red-300 w-[1152px] flex ">
      <section className="w-[660px] bg-lime-600">
        <div className="relative">
            {product.name}
          <div className="show">
            <img className="rounded-[10px] w-full" src={product.imageMain} alt="X4-main" />
          </div>
          <div className="show hidden">
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

          <div className="absolute w-full flex justify-between px-4 top-40 transform translate-y-1/2 text-2xl font-black select-none">
            <a className="cursor-pointer backdrop-blur-sm bg-white/30 bg-gray-800 rounded-full px-2 hover:text-gray-500" onClick={() => plusSlides(-1)}>❮</a>
            <a className="cursor-pointer backdrop-blur-sm bg-white/30 bg-gray-800 rounded-full px-2 hover:text-gray-500" onClick={() => plusSlides(1)}>❯</a>
          </div>

          <div className="flex w-[100px] m-2 gap-2" >
            <img className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500" src={product.imageMain} onClick={() => currentSlide(1)} alt="X4-main" />
            <img className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500" src={product.image1} onClick={() => currentSlide(2)} alt="X4-1" />
            <img className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500" src={product.image2} onClick={() => currentSlide(3)} alt="X4-2" />
            <img className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500" src={product.image3} onClick={() => currentSlide(4)} alt="X4-3" />
            <img className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500" src={product.image4} onClick={() => currentSlide(5)} alt="X4-4" />
            <img className="silde cursor-pointer rounded-[5px] hover:border-2 border-blue-500" src={product.image5} onClick={() => currentSlide(6)} alt="X4-5" />
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
                EQS 450 คือรุ่นยนต์ไฟฟ้าของ Mercedes-Benz ที่เป็นส่วนหนึ่งของตระกูล EQ ซึ่งเป็นรถยนต์ไฟฟ้าแบบเต็มรูปแบบของบริษัท มันเป็นรถยนต์ที่มุ่งหน้าไปสู่การขับขี่ที่ยั่งยืนและยังความสวยงามของรถยนต์เล็กทุกความเร็ว รถยนต์รุ่นนี้มาพร้อมกับความสามารถในการขับขี่ไกลโดยใช้พลังงานไฟฟ้า ด้วยชุดแบตเตอรี่ขนาดใหญ่ที่ให้ระยะทางขับขี่ที่ยาวนาน และมีสมรรถนะขับเคลื่อนที่ยอดเยี่ยม นอกจากนี้ มันยังมีดีไซน์ที่หรูหราและสมวัยมาพร้อมกับเทคโนโลยีที่ล้ำหน้าอื่นๆ ที่ช่วยให้ EQS 450 เป็นตัวเลือกที่น่าสนใจสำหรับผู้ที่ต้องการรถยนต์ไฟฟ้าระดับพรีเมียมที่สมบูรณ์แบบ
              </p>

              <h4 className="text-[20px] font-medium mt-2 mx-4">Feature</h4>
              <div className="border-t-2 border-t-blue-950 w-[68px] mx-4"></div>
              <div className="border-t border-gray-300 mx-4 py-1"></div>

              <div className="text-[14px]">
                <li className="mx-4 max-md:my-2">ด้วยระบบขับเคลื่อนไฟฟ้า มันมอบประสิทธิภาพการขับขี่ที่เงียบสงบและมีเสน่ห์
                </li>
                <li className="snap-center mx-4 max-md:my-2">มีชุดแบตเตอรี่ขนาดใหญ่ที่ให้ระยะทางขับขี่ไกลโดยไม่ต้องเติมพลังงานบ่อยครั้ง</li>
                <li className="mx-4 max-md:my-2">ด้วยดีไซน์ที่สวยงามและหรูหราที่มาพร้อมกับเส้นโค้งที่นุ่มนวลและความสมดุลของรถยนต์</li>
                <li className="mx-4 max-md:my-2">มีการนำเทคโนโลยีล้ำหน้ามาใช้ในระบบการขับขี่อัจฉริยะ, การเชื่อมต่อ, และความปลอดภัย เพื่อประสบการณ์ขับขี่ที่ปลอดภัยและสะดวกสบาย</li>
                <li className="mx-4 max-md:my-2">มาพร้อมกับองค์ประกอบภายในที่หรูหราและสะดวกสบาย, รวมถึงประสิทธิภาพขับขี่ที่ดีและการควบคุมที่แม่นยำ</li>
              </div>

              <h4 className="font-medium mx-4 mt-4 text-[20px]">Review </h4>
              <div className="border-t-2 border-t-blue-950 w-[68px] mx-4"></div>
              <div className="border-t border-gray-300 mx-4 py-1"></div>

              <div className="border shadow-sm rounded-[5px] mx-4 py-2 flex justify-around">
                <div>
                  <div className="flex justify-center">
                    <img className="mr-1 mt-[6px] h-[13px]" src="../../icon/star.png" alt='favourite' />
                    <p>4.9</p>
                  </div>
                  <p>เรตติ้งทั้งหมด</p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <img className="mr-1 mt-[6px] h-[13px]" src="/icon/Verified.png" alt='favourite' />
                    <p>100%</p>
                  </div>
                  <p>ได้รถคันที่จอง</p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <img className="mr-1 mt-[6px] h-[13px]" src="/icon/favourite.png" alt='favourite' />
                    <p>50</p>
                  </div>
                  <p>คันที่อยากได้</p>
                </div>
              </div>
            </main>
          </section>
        </div>
      </section>
    </div>
    </div>
  );
}

// ฟังก์ชันเพื่อเปลี่ยนรูปที่แสดง
let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("show");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

export default ProductCard_Info;
