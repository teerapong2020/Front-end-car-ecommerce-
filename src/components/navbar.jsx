import { Link } from "react-router-dom";
import logo from '../assets/Logo/logocar_final.png'
import USA from '../assets/Logo/USA.png'
import burger from '../assets/Logo/burger.png'
import { useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";//ตัวถอดโทเคน



function Navbar ({className}){
    const [open,setOpen]=useState(false)
    const [UserId, setUserId] = useState('')//Id Global

    const handleBurger=()=>{
        setOpen(!open)            
    }
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    useEffect(() => {//ดึงโทเคน+decode+เซ็ทค่า
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const decodedToken = jwtDecode(token);
          setUserId(decodedToken.id); // เปลี่ยน 'id' ตามโครงสร้างของโทเคนของคุณ
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }, []);


    return (
      <nav className={`${className} bg-blue-950 text-white max-md:fixed w-full `}>
        <div className="flex justify-between mx-4">
          <ul className="flex gap-12">
            <li>
              <Link to="/" onClick={scrollToTop}>
                <img src={logo} alt="" />
              </Link>
            </li>
            <div className="flex gap-12 items-center max-md:hidden">
              <li>
                <Link className="hover:underline" onClick={scrollToTop} to="/buy">
                  ซื้อรถยนต์
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  onClick={scrollToTop}
                  to="/sell"
                >
                  ต้องการขาย
                </Link>
              </li>
              <li>
                <Link className="hover:underline" onClick={scrollToTop} to="/">
                  ความช่วยเหลือ
                </Link>
              </li>
              <li>
                <Link className="hover:underline" onClick={scrollToTop} to="/">
                  เช่ารถยนต์
                </Link>
              </li>
              <p>
                {UserId}
              </p>
            </div>
          </ul>
  
          <div className="flex gap-8">
            <Link to="/" className="flex flex-col justify-center mr-3">
              <img className="md:hidden" src={USA} alt="" />
            </Link>
            <Link className="flex flex-col justify-center mr-3">
              <img
                onClick={handleBurger}
                className="md:hidden"
                src={burger}
                alt=""
              />
            </Link>
          </div>
  
          {/* Desktop  */}
          <ul className="flex items-center gap-8 mr-8 max-md:hidden">
            <li>
              <Link onClick={scrollToTop} to="/">
                <img className="  " src={USA} alt="" />
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/">
                เข้าสู่ระบบ
              </Link>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                className="bg-white text-black p-2 rounded-full"
                to="/"
              >
                สมัครสมาชิก
              </Link>
            </li>
          </ul>
        </div>
  
        {/* mobile  */}
        {open && (
          <ul className=" flex justify-center flex-col items-center bg-gray-600 text-white text-4xl py-36 gap-16  md:hidden ">
            <li>
              <Link
                className="hover:bg-blue-950 py-4 px-28"
                onClick={handleBurger}
                to="/"
              >
                บริการเช่า
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-blue-950 py-4 px-28"
                onClick={handleBurger}
                to="/sell"
              >
                ต้องการซื้อ
              </Link>
            </li>
            <li>
              <Link
                className="hover:bg-blue-950 py-4 px-28"
                onClick={handleBurger}
                to="/buy"
              >
                ต้องการขาย
              </Link>
            </li>
            <li>
              <Link
                className="bg-gray-800 py-4 px-36  w-full hover:bg-blue-950 "
                to="/"
              >
                {" "}
                login{" "}
              </Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
  
  export default Navbar;
