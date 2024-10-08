"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { font2 } from '../components/font/poppins';
import { font } from '../components/font/titan';
import Link from 'next/link';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const page = () => {
  // State to track the visibility of each section
  const [isVisible2D, setIsVisible2D] = useState(false);
  const [isVisible3D, setIsVisible3D] = useState(false);
  const [isVisibleOverlays, setIsVisibleOverlays] = useState(false);
  const [isVisibleBanners, setIsVisibleBanners] = useState(false);

  // Effect to check for scroll position for each section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'section-2d', setVisible: setIsVisible2D },
        { id: 'section-3d', setVisible: setIsVisible3D },
        { id: 'section-overlays', setVisible: setIsVisibleOverlays },
        { id: 'section-banners', setVisible: setIsVisibleBanners },
      ];

      sections.forEach(({ id, setVisible }) => {
        const section = document.getElementById(id);
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight * 0.8) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants for pop-out and sliding effect
  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Start position off-screen to the left
    visible: { opacity: 1, x: 0, scale: 1.05 }, // End position in view
  };


  return (
    <>
    <Nav/>
    <div id="portfolio" className={`${font2.className} min-h-screen pt-12 md:pt-24 bg-darkGrey`}>
      <div className='flex-col flex justify-center items-center p-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left sm:ml-12 text-green-300`}>
          Services
        </p>
        <div className='text-center text-white max-w-md sm:max-w-4xl mx-auto mt-4'>
          <p>Explore our range of custom artwork services including Furry Art, Anime Art, Custom OC's & Much More!</p>
        </div>
      </div>

      {/* 2D Art Section */}
      <div id="section-2d" className='flex-col flex justify-center items-center'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          2D<span className='text-white'>&nbsp;Art</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite 2D Art :3</p>
        </div>
      </div>

      {/* 2D Art Images */}
      <div className='flex flex-wrap space-x-4 justify-center mt-12'>
        {['/2d-1.jpeg', '/2d-art-4.png', '/2d-art-5.jpg'].map((src, index) => (
          <div
            key={index}
            className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
            initial="hidden"
            animate={isVisible2D ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Longer duration for the animation
          >
            <Link href="/services/2d">
              <img
                src={src}
                className='w-full h-80 md:hover:h-96 duration-300 rounded-lg shadow-customGreen-light shadow-lg'
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Additional 2D Art Item */}
      <div className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'>
        <motion.div
          className='flex flex-col justify-center'
          initial="hidden"
          animate={isVisible2D ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Link href="/services/2d">
            <img
              src='/dragon-2d.png'
              className='md:w-auto w-80 h-80 md:hover:h-96 duration-300 shadow-customGreen-light shadow-lg rounded-lg mb-12'
            />
          </Link>
        </motion.div>
      </div>

      {/* 3D Art Section */}
      <div id="section-3d" className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          3D<span className='text-white'>&nbsp;Art</span>
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite 3D Art :3</p>
        </div>
      </div>

      {/* 3D Art Images */}
      <div className='flex flex-wrap justify-center mt-12'>
        {['/3d-1.jpeg', '/3d-2.jpeg', '/3d-3.jpeg'].map((src, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
            initial="hidden"
            animate={isVisible3D ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Longer duration for the animation
          >
            <Link href="/services/3d">
              <img
                src={src}
                className='md:w-full w-64 h-80 md:hover:h-96 duration-300 rounded-lg shadow-customGreen-light shadow-lg'
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Additional 3D Art Items */}
      <div className='flex flex-wrap justify-center mt-6 space-x-6'>
        {['/3d-5.png', '/3d-6.png'].map((src, index) => (
          <motion.div
            key={index}
            className='flex flex-col justify-center sm:flex sm:flex-row sm:space-x-6 sm:space-y-0 items-center space-y-6 rounded-md mt-12'
            initial="hidden"
            animate={isVisible3D ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Longer duration for the animation
          >
            <Link href="/services/3d">
              <img
                src={src}
                className='md:w-auto w-64 h-80 md:hover:h-96 bg-black duration-300 shadow-customGreen-light shadow-lg rounded-lg mb-12'
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Overlays Section */}
      <div id="section-overlays" className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          Overlays
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite overlays :3</p>
        </div>
      </div>

      {/* Overlay Images */}
      <div className='flex flex-wrap justify-center mt-12 sm:space-y-6 md:space-y-0'>
        {['/overlay-yellow.jpg', '/overlay.jpeg'].map((src, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
            initial="hidden"
            animate={isVisibleOverlays ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }} // Longer duration for the animation
          >
            <Link href="/services/overlays">
              <img
                src={src}
                className='w-72 h-64 md:w-full md:h-80 md:hover:h-72 duration-300 rounded-lg shadow-customGreen-light shadow-lg'
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Banners Section */}
      <div id="section-banners" className='flex-col flex justify-center items-center mt-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left text-green-300`}>
          Banners
        </p>
        <div className='text-center text-white max-w-md sm:max-w-sm mx-auto'>
          <p>A Diverse Collection of our exquisite Banners :3</p>
        </div>
      </div>

      {/* Banner Images */}
      <div className='flex flex-wrap justify-center mt-12 sm:space-y-6 md:space-y-0'>
        <motion.div
          className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
          initial="hidden"
          animate={isVisibleBanners ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ duration: 0.8, ease: "easeInOut" }} // Longer duration for the animation
        >
          <Link href="/services/banners">
            <img
              src='/banner-1.jpeg'
              className='md:w-full md:h-80 w-72 h-54 md:hover:h-72 duration-300 rounded-lg shadow-customGreen-light shadow-lg'
            />
          </Link>
        </motion.div>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default page;
