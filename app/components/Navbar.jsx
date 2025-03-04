import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        {assets.header_bg_color && (
          <Image
            src={assets.header_bg_color}
            alt="Header Background"
            className="w-full"
          />
        )}
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white shadow bg-opacity-50 backdrop-blur-lg' : ''}`}
      >
        <a href="#top">
          <Image
            src={assets.rubia_logo}
            alt="Logo"
            className="mr-14 w-28 cursor-pointer"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50'} `}
        >
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4 lg:gap-8">
          <button>
            <Image src={assets.moon_icon} alt="Moon Icon" className="w-6" />
          </button>
          <a
            href=""
            className="ml-4 hidden items-center gap-3 rounded-full border border-r-gray-500 px-10 py-2.5 lg:flex"
          >
            Contact{' '}
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openSideMenu}>
            <Image src={assets.menu_black} alt="Menu Icon" className="w-6" />
          </button>
        </div>
        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeSideMenu}>
            <Image
              src={assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-Ovo" onClick={closeSideMenu}>
              {' '}
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeSideMenu}>
              {' '}
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo" onClick={closeSideMenu}>
              {' '}
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo" onClick={closeSideMenu}>
              {' '}
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeSideMenu}>
              {' '}
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
