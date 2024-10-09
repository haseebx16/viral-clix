"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { font2 } from './font/poppins';
import { font } from './font/titan';
import Link from 'next/link';

const Portfolio = () => {
  // State to track the visibility of each section
  const [isVisible2D, setIsVisible2D] = useState(false);
  const [isVisible3D, setIsVisible3D] = useState(false);
  const [isVisibleOverlays, setIsVisibleOverlays] = useState(false);
  const [isVisibleBanners, setIsVisibleBanners] = useState(false);

  // State for the modal functionality
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

        // Add null check to prevent errors
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top < window.innerHeight * 0.8) {
            setVisible(true);
          } else {
            setVisible(false);
          }
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

  // Open the modal with the selected image
  const handleImageClick = (src) => {
    setSelectedImage(src);
    setIsModalOpen(true);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div id="portfolio" className={`${font2.className} min-h-screen pt-12 md:pt-24 bg-darkGrey`}>
      {/* Modal for fullscreen image */}
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal on background click
        >
          <img src={selectedImage} className="max-w-full max-h-full" alt="Selected Art" />
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times; {/* Close icon */}
          </button>
        </div>
      )}

      {/* Portfolio Header */}
      <div className='flex-col flex justify-center items-center p-12'>
        <p className={`${font.className} text-5xl sm:text-6xl text-center sm:text-left sm:ml-12 text-green-300`}>
          Portfolio
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
      <div className='flex flex-wrap justify-center mt-12 space-x-4'>
        {['/2d-1.jpeg', '/2d-art-4.png', '/2d-art-5.jpg'].map((src, index) => (
          <div
          key={index}
          className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
          initial={{ opacity: 0, x: -50 }} // Adjust initial styles for layout
          animate={isVisible2D ? { opacity: 1, x: 0, scale: 1.05 } : { opacity: 0, x: -50 }} // Handle visibility
          transition={{ duration: 0.8, ease: "easeInOut" }} 
          onClick={() => handleImageClick(src)} // Open modal on image click
        >
          <img
            src={src}
            className='w-full h-80 md:hover:h-96 duration-300 rounded-lg shadow-customGreen-light shadow-lg cursor-pointer'
            alt="2D Art"
          />
        </div>
        ))}
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
      <div className='flex flex-wrap justify-center mt-12 space-x-4'>
        {['/3d-1.jpeg', '/3d-2.jpeg', '/3d-3.jpeg'].map((src, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
            initial="hidden"
            animate={isVisible3D ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => handleImageClick(src)} // Open modal on image click
          >
            <img
              src={src}
              className='md:w-full w-64 h-80 md:hover:h-96 duration-300 rounded-lg shadow-customGreen-light shadow-lg cursor-pointer'
              alt="3D Art"
            />
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
      <div className='flex flex-wrap justify-center mt-12 space-x-4'>
        {['/overlay-yellow.jpg', '/overlay.jpeg'].map((src, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
            initial="hidden"
            animate={isVisibleOverlays ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => handleImageClick(src)} // Open modal on image click
          >
            <img
              src={src}
              className='w-72 h-64 md:w-full md:h-80 md:hover:h-72 duration-300 rounded-lg shadow-customGreen-light shadow-lg cursor-pointer'
              alt="Overlay Art"
            />
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
      <div className='flex flex-wrap justify-center mt-12 space-x-4'>
        {['/banner-1.jpeg'].map((src, index) => (
          <motion.div
            key={index}
            className='flex flex-col items-center mx-2 mb-4 sm:mb-6'
            initial="hidden"
            animate={isVisibleBanners ? "visible" : "hidden"}
            variants={imageVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            onClick={() => handleImageClick(src)} // Open modal on image click
          >
            <img
              src={src}
              className='w-full h-64 md:h-80 md:hover:h-96 duration-300 rounded-lg shadow-customGreen-light shadow-lg cursor-pointer'
              alt="Banner Art"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
