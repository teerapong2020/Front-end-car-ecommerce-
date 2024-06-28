import { Link } from "react-router-dom";
import facebook from "../assets/Logo/logo_footer/facebook.png";
import instagram from "../assets/Logo/logo_footer/instagram.png";
import x from "../assets/Logo/logo_footer/X.png";
import mobile from "../assets/Logo/logo_footer/mobile.png";
import phone from "../assets/Logo/logo_footer/phone.png";
import line from "../assets/Logo/logo_footer/line.png";
function Footer() {
  return (
    <footer className="flex bg-[#1E3769] text-white p-4 justify-center">
      <section className="justify-around flex w-[1128px]">
        <div className="flex flex-col">
        <img src="src\assets\Logo\log_test.png" className="h-20 w-fit" />
        <p className="font-semibold">Roddee Co., Ltd</p>
        <p>บริการเช่ารถอย่างครอบวงจร</p>
        <p className="font-semibold text-lg">ติดตามเรา</p>
        <div className="flex space-x-4 mt-2">
          <a href="#">
            <img
              src={facebook}
              alt="Facebook"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src={instagram}
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
          <a href="#">
            <img
              src={x}
              alt="X"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>
      <div className="pt-6 ">
        <h3 className="font-bold mb-2 text-lg">เกี่ยวกับเรา</h3>
        <Link to="/">
          <p>ที่ตั้งของเรา</p>
        </Link>
        <Link to="/">
          <p>ติดต่อเรา</p>
        </Link>
        <Link to="/">
          <p>ทำไมต้องเลือก Roddee?</p>
        </Link>
      </div>
      <div className="pt-6 ">
        <h3 className="font-bold mb-2 text-lg">บริการของเรา</h3>
        <Link to="/">
          <p>เช่ารถยนต์</p>
        </Link>
        <Link to="/">
          <p>ฝากขายรถยนต์</p>
        </Link>
        <Link to="sell">
          <p>ซื้อรถยนต์</p>
        </Link>
      </div>
      <div className="pt-6 ">
        <h3 className="font-bold mb-2 text-lg">ความช่วยเหลือ</h3>
        <Link to="/">
          <p>คำถามที่พบบ่อย</p>
        </Link>
        <Link to="/">
          <p>เอกสารยื่นรถ</p>
        </Link>
        <Link to="/">
          <p>ประกันภัย</p>
        </Link>
      </div>
      <div className="pt-6">
        <h3 className="font-bold mb-2 text-lg">ช่องทางการติดต่อ</h3>
        <div className="flex gap-2 ">
          <img src={mobile} className="h-4" />
          <p className="flex "> 089-123-1234</p>
        </div>
        <div className="flex gap-3.5 ">
          <img src={phone} className="h-4" />
          <p className="flex "> 02-139-1234</p>
        </div>
        <div className="flex gap-2 ">
          <img src={line} className="h-4" />
          <p className="flex "> Roddeeth</p>
        </div>
      </div>
      </section>
      
    </footer>
  );
}

export default Footer;
