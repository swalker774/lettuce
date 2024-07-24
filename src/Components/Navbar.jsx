import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';

const Navbar = ({ setHeroVisible }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    if (window.innerWidth < 1024) {
      setHeroVisible(nav);
    }
    console.log("After toggle: ", !nav);
  };

  const handleClose = () => {
    setNav(false);
    setHeroVisible(true);
  };

  return (
    <div className="w-full h-[70px] fixed flex justify-between items-center px-8 lg:px-28 text-[#176d1a] bg-[#ffffff] shadow-md z-50">
      <div>
        <Link to="/" onClick={handleClose}>
          <img src={Logo} alt="Logo" style={{ width: '65px' }} />
        </Link>
      </div>
      <ul className="hidden lg:flex space-x-8">
        <li>
          <Link to="/" onClick={handleClose} className="hover:text-[#8BC34A]">Home</Link>
        </li>
        <li>
          <Link to="/menu" onClick={handleClose} className="hover:text-[#8BC34A]">Menu</Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClose} className="hover:text-[#8BC34A]">About Us</Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClose} className="hover:text-[#8BC34A]">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="lg:hidden absolute top-0 right-0 m-6 z-10 cursor-pointer">
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile menu */}
      <div className={`${!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}`}>
        <ul className="space-y-6 text-2xl text-[#176d1a]">
          <li>
            <Link onClick={handleClose} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/menu">Menu</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/about">About Us</Link>
          </li>
          <li>
            <Link onClick={handleClose} to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
