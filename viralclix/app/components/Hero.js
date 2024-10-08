"use client"; // Ensure this component runs on the client-side

import React from 'react';
import { font2 } from './font/poppins';
import { font } from './font/titan';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => {
  // Animation variants for different elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonHover = {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300 },
  };

  return (
    <div
      className={`${font2.className} min-h-[25rem] p-12 md:p-24 flex items-center bg-darkGrey justify-center flex-col`}
    >
      <div className="pb-24 w-full">
        <motion.div
          className="text-white text-center mt-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={`${font.className} text-6xl sm:text-8xl text-green-400`}>
            Viral<span className="text-white">Clix</span>
          </p>
        </motion.div>

        <motion.div
          className="text-center max-w-md mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="sm:text-2xl text-center text-white">
            Get personalized furry, anime, and 2D/3D character designs for your projects.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row text-white justify-center items-center mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Custom Characters */}
          <Link href="/services">
            <motion.div
              className="block shadow-lg shadow-customGreen-light max-w-sm p-6 w-80 text-white h-32 hover:bg-customGreen-dark duration-300 hover:text-white bg-opacity-50 bg-black border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4"
              whileHover={buttonHover}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Custom Characters
              </h5>
              <p>Unique and creative character designs tailored to your vision.</p>
            </motion.div>
          </Link>

          {/* Custom Avatars */}
          <Link href="/services">
            <motion.div
              className="block shadow-lg shadow-customGreen-light max-w-sm p-6 w-80 h-32 hover:bg-customGreen-dark duration-300 hover:text-white bg-opacity-50 bg-black border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4"
              whileHover={buttonHover}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Custom Avatars 3D
              </h5>
              <p>High-Quality Artwork</p>
            </motion.div>
          </Link>

          {/* Anime Characters */}
          <Link href="/services">
            <motion.div
              className="block shadow-lg shadow-customGreen-light max-w-sm p-6 w-80 h-32 hover:bg-customGreen-dark duration-300 hover:text-white bg-opacity-50 bg-black border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-4 sm:mb-0 sm:mr-4"
              whileHover={buttonHover}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
                Anime Characters
              </h5>
              <p>Unique and creative character designs tailored to your vision.</p>
            </motion.div>
          </Link>
        </motion.div>

        <motion.div
          className="sm:flex sm:flex-row mt-8 sm:space-x-4 sm:space-y-0 space-y-4 justify-center flex items-center flex-col"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* See Our Gallery Button */}
          <Link href="/gallery">
            <motion.button
              className="p-2 shadow-lg shadow-customGreen-light rounded-full bg-green-800 hover:bg-green-600 duration-300 w-60 whitespace-nowrap text-white"
              whileHover={buttonHover}
            >
              See Our Gallery !
            </motion.button>
          </Link>

          {/* We Design Characters Button */}
          <Link href="/services">
            <motion.button
              className="p-2 shadow-lg shadow-customGreen-light rounded-full hover:bg-gray-900 duration-300 bg-black w-60 text-white"
              whileHover={buttonHover}
            >
              We design Characters !
            </motion.button>
          </Link>
        </motion.div>

        <hr className="my-4 border-t-4 p-0.5 border-gray-400 w-full shadow-lg shadow-customGreen-light" />
      </div>

      {/* Sliding Text Section */}
      <motion.div className='gradient-bg w-full rounded-2xl py-12 overflow-hidden'>
          <motion.div
            initial={{ x: '100vw' }} // Start off-screen on the right
            animate={{
              x: ['100vw', '0vw', '-100vw'], // Slide from right to left and exit to left
            }}
            transition={{
              duration: 10, // Adjust this value for speed
              ease: 'linear', // Use linear easing for constant speed
              repeat: Infinity, // Repeat indefinitely
              repeatType: 'loop', // Specify that it should loop
            }}
            className='text-white text-5xl font-bold whitespace-nowrap'
          >
            We Are A Professional Firm
          </motion.div>
        </motion.div>
    </div>
  );
};

export default Hero;
