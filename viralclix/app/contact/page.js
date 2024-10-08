"use client";

import React from 'react';
import Nav from '../components/Nav';
import { font } from '../components/font/titan';
import { font2 } from '../components/font/poppins';
import { font3 } from '../components/font/poppin';
import { MdEmail } from "react-icons/md";
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactPage = () => {
  return (
    <>
      <div className={`min-h-screen bg-darkGrey overflow-x-hidden`}> {/* Add overflow-x-hidden here */}
        <Nav />
        <div className="min-h-[23rem] md:min-h-[25rem] bg-darkGrey">
          <div className='flex justify-center items-center flex-col w-full'>
            <div className='text-white text-center mt-36'>
              <motion.p
                className={`${font.className} text-5xl sm:text-7xl md:text-7xl text-green-400`}
                initial={{ opacity: 0, y: -50 }} // Start off-screen above
                whileInView={{ opacity: 1, y: 0 }} // End position
                transition={{ duration: 1 }} // Duration of the animation
                viewport={{ once: false }}
              >
                Contact<span className='text-white'>&nbsp;Us</span>
              </motion.p>
            </div>
            <div className='text-center max-w-md mx-auto'>
              <motion.p
                className='sm:text-2xl text-center text-white'
                initial={{ opacity: 0, y: -50 }} // Start off-screen above
                whileInView={{ opacity: 1, y: 0 }} // End position
                transition={{ duration: 1 }} // Duration of the animation
                viewport={{ once: false }}
              >
                Contact Us and tell us your personal requirements for your projects.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pb-24 flex flex-col md:flex-row">
          {/* Left Section: Logo and Contact Details */}
          <div className="flex-1 two-d-gradient p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h1 className={`${font.className} text-3xl font-bold mb-6 text-customGreen-light text-center`}>
              Contact Us <span className='text-white'>For Your Custom Artwork</span>
            </h1>
            <div className="text-center mb-6 text-white">
              <img src="/viralclix.png" alt="Logo" className="mx-auto mb-4" style={{ maxWidth: '80%', height: 'auto' }} />
              <div className="flex items-center justify-center mb-2">
                <MdEmail className='text-white mr-2' />
                <p className={`text-lg ${font3.className}`}>Email: info@viralclix.com</p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <motion.div
            className={`${font2.className} flex-1 bg-darkGrey p-8 rounded-lg shadow-lg`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-white">Name</label>
                <input type="text" className="mt-1 p-2 w-full border rounded-full" placeholder="Your Name" required />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-white">Email</label>
                <input type="email" className="mt-1 p-2 w-full border rounded-full" placeholder="Your Email" required />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-white">Message</label>
                <textarea className="mt-1 p-2 w-full border rounded-md" rows="5" placeholder="Your Message" required></textarea>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link href="/">
                  <button type="submit" className={`${font3.className} w-full bg-green-600 text-white text-md font-bold py-2 rounded-full hover:bg-green-700 transition`}>
                    Send Message
                  </button>
                </Link>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
