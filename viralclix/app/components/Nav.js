"use client";

import React, { useState, useRef } from "react";
import navLinks from "./data/navLinks";
import { font2 } from "./font/poppins";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; 

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  // Dropdown animation
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className={`${font2.className} w-full fixed z-50 shadow-xl shadow-customGreen-light bg-darkGrey backdrop-blur-lg top-0 flex-wrap p-3 bg-opacity-100 text-gray-200`}>
      <nav className="flex items-center justify-between px-8">
        {/* Logo on the left */}
        <Link href="/">
          <div className="flex items-center">
            <img src="/viralclix.png" alt="Logo" className="w-32 h-10" />
          </div>
        </Link>

        {/* Hamburger Icon for mobile */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links for larger screens */}
        <div className={`${isOpen ? "flex" : "hidden"} sm:flex justify-between text-white z-50 items-center flex-col sm:flex-row sm:space-x-16 md:space-x-28`}>
          {navLinks.map((item) => (
            <div
              key={item.label}
              className="relative block py-2 sm:py-0 cursor-pointer"
              onMouseEnter={item.children ? handleMouseEnter : undefined}
              onMouseLeave={item.children ? handleMouseLeave : undefined}
            >
              <Link href={item.href}>{item.label}</Link>

              {/* Dropdown menu for Services */}
              <AnimatePresence>
                {item.children && dropdownOpen && (
                  <motion.div
                    className="absolute top-full z-50 left-0 mt-2 w-48 bg-darkGrey text-white rounded-md shadow-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 hover:bg-green-300 hover:text-black"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Get A Call Button */}
          <Link href="/contact">
            <button className="bg-customGreen hover:bg-customGreen-dark hover:text-white duration-300 text-white p-2 px-4 rounded-full mt-2 sm:mt-0">
              Get A Call
            </button>
          </Link>
        </div>

        {/* Fullscreen Menu for mobile with Framer Motion Slide Down Animation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "100vh" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-darkGrey z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Close button in the top-right */}
          <div className="absolute top-5 right-5">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Logo in the top-left */}
          <div className="absolute top-5 left-5">
            <Link href="/">
              <img src="/viralclix.png" alt="Logo" className="w-32 h-10" />
            </Link>
          </div>

          {/* Centered Menu Links */}
          <ul className="space-y-8 text-2xl text-white text-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={toggleMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact">
                <button className="bg-customGreen hover:bg-customGreen-dark hover:text-white duration-300 text-white p-2 px-4 rounded-full">
                  Get A Call
                </button>
              </Link>
            </li>
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Nav;
