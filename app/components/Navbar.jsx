import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12  -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="mr-14 w-28 cursor-pointer"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          {" "}
          <li>
            {" "}
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            {" "}
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            {" "}
            <a href="#work" className="font-Ovo">
              My work
            </a>
          </li>
          <li>
            {" "}
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4 lg:gap-8">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <a
            href=""
            className="ml-4 hidden items-center gap-3 rounded-full border border-r-gray-500 px-10 py-2.5 lg:flex"
          >
            Contact <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
          <button className="block md:hidden ml-3">
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
        {/*-- Mobile menu -->*/}
        <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            {" "}
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            {" "}
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            {" "}
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            {" "}
            <a href="#work" className="font-Ovo">
              My work
            </a>
          </li>
          <li>
            {" "}
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
