import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets"; 
import { useRef } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      {/* Header background 
       { <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color} // header background image
          alt="Header Background"
          width={1200}
          height={400}
          className="w-full"
        />
      </div> } */}

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center z-50 transition-all duration-300
        ${isScroll ? "bg-white/80 backdrop-blur-sm shadow-sm" : ""}`}>
        {/* Logo */}
        <a href="#">
          <Image
            src={assets.rohan_logo} // Rohan-logo-transparent.png
            width={150}
            height={100}
            alt="Logo"
            className="cursor-pointer mr-14"
          />
        </a>

        {/* Navbar Links (centered) */}
        <div className="flex-1 flex justify-center">
  <ul className="hidden md:flex items-center gap-8 lg:gap-10 xl:gap-12 px-10 py-3 
    rounded-full backdrop-blur-md bg-white/60 shadow-lg border border-white/30 
    transition-all duration-300 hover:bg-white/80">

            <li>
              <a className="font-Outfit" href="#top">
                Home
              </a>
            </li>
            <li>
              <a className="font-Outfit" href="#about">
                About me
              </a>
            </li>
            <li>
              <a className="font-Outfit" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="font-Outfit" href="#work">
                My Work
              </a>
            </li>
            <li>
              <a className="font-Outfit" href="#contact">
                Contact me
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side (Moon + Contact + Menu) */}
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="Moon Icon" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Outfit"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="Arrow Icon"
              width={12}
              height={12}
            />
          </a>

          {/* Menu Icon (only visible on mobile) */}
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={assets.menu_black}
              alt="Menu Icon"
              width={24}
              height={24}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 fixed top-0 bottom-0 right-0
             w-64 z-50 h-screen bg-rose-50 transition duration-500 p-6">
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a className="font-Outfit" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Outfit" onClick={closeMenu} href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Outfit" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Outfit" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Outfit" onClick={closeMenu} href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;