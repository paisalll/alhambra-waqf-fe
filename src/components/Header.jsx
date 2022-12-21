import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import logo from "../assets/logo1.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  // const navLinkStyle = ({ isActive }) => {
  //   return {
  //     color: isActive ? "#854aea" : "#A7A7A7",
  //   };
  // };
  return (
    <header className="">
      <nav className="shadownav h-20 flex items-center w-full bg-[#FBFBFB] ">
        <div className="container flex justify-between">
          <div className=" flex items-center">
            <img src={logo} alt="Logo" className="mr-8 h-12 w-12 " />
            <ul className="hidden sm:hidden md:hidden lg:flex gap-x-8 text-base lg:text-[15px] font-normal text-Neutral-800">
              <li>Home</li>
              <li>Kategori</li>
              <li>Berita Wakaf</li>
              <li>Pembayaran Wakaf</li>
              <li>Tentang Kami</li>
            </ul>
          </div>
          <div className="hidden sm:hidden md:hidden lg:flex items-center ">
            <input
              placeholder="Cari Program"
              className="rounded-3xl h-[2.2rem] w-[15rem] px-3 text-black text-xs focus:outline-none focus:border-white bg-[#EDEEF4]"
            />
          </div>
          {/* mobile */}
          <div
            className="block lg:hidden pt-3 text-TitleText"
            onClick={handleNav}
          >
            {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] z-20 bg-white h-full ease-in-out duration-200"
              : "fixed left-[-100%]"
          }
        >
          <div className="px-6 md:px-10 ">
            <div className="py-5">
              <img src={logo} alt="Logo" className="mr-8 h-12 w-12" />
            </div>

            <ul className="space-y-5 text-sm text-Neutral-800">
              <li>Home</li>
              <li>Kategori</li>
              <li>Berita Wakaf</li>
              <li>Pembayaran Wakaf</li>
              <li>Tentang Kami</li>
            </ul>
            <div className="mt-7">
              <input
                placeholder="Cari Program"
                className="rounded-3xl h-[2rem] w-[10rem] px-3 text-black text-xs focus:outline-none focus:border-white bg-[#EDEEF4]"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
