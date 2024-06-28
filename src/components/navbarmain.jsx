import { Link } from "react-router-dom";
import logofinal from '../assets/Logo/logocar_final.png';
import login from '../assets/Logo/login.png';
import USA from '../assets/Logo/USA.png';
import burger from '../assets/Logo/burger.png';
import { useState, useEffect } from 'react';

function NavbarMain() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleBurger = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    if (window.scrollY > 430) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full text-white z-20 transition-colors duration-700 ${scrolled ? ' bg-[#1E3769]' : 'bg-black bg-opacity-10'}`}>
      <div className="flex justify-between mx-4">
        <Link to="/" >
          <img src={logofinal} alt="Logo" className="h-[64px]"/>
        </Link>

        <div className="flex gap-8">
          <Link to="/" className="flex flex-col justify-center mr-3">
            <img className="md:hidden" src={USA} alt="USA" />
          </Link>
          <button onClick={handleBurger} className="flex flex-col justify-center mr-3 md:hidden">
            <img src={burger} alt="Menu" />
          </button>
        </div>

        {/* Desktop */}
        <ul className="flex items-center gap-16 mr-6 max-md:hidden">
          <li><Link className="hover:underline" to="/">บริการเช่า</Link></li>
          <li><Link className="hover:underline" to="/sell">ต้องการซื้อ</Link></li>
          <li><Link className="hover:underline" to="/buy">ต้องการขาย</Link></li>
          <li><Link className="hover:underline" to="/"><img src={USA} alt="USA" /></Link></li>
          <li><Link className="hover:underline" to="/"><img src={login} alt="Login" /></Link></li>
        </ul>
      </div>

      {/* Mobile */}
      {open && (
        <ul className="flex flex-col items-center bg-gray-600 bg-opacity-90 text-white text-4xl py-36 gap-16 md:hidden">
          <li><Link className="hover:bg-blue-950 py-4 px-28" to="/">บริการเช่า</Link></li>
          <li><Link className="hover:bg-blue-950 py-4 px-28" to="/">ต้องการซื้อ</Link></li>
          <li><Link className="hover:bg-blue-950 py-4 px-28" to="/sell">ต้องการขาย</Link></li>
          <li><Link className="bg-gray-800 py-4 px-36 w-full hover:bg-blue-950" to="/">login</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default NavbarMain;