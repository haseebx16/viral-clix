import React from 'react';
import Nav from '../components/Nav';
import { font } from '../components/font/titan';
import { font2 } from '../components/font/poppins';
import { font3 } from '../components/font/poppin';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className={`min-h-screen p-12`} style={{
      backgroundImage: 'url("/stars.gif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Nav />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row">
        {/* Left Section: Logo and Contact Details */}
        <div className="flex-1 bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h1 className={`${font.className} text-3xl font-bold mb-6 text-green-300 text-center`}>Contact Us <span className='text-white'>For Your Custom Artwork</span></h1>
          <div className="text-center mb-6 text-white">
            <img src="/viralclix.png" alt="Logo" className="mx-auto mb-4" style={{ maxWidth: '80%', height: 'auto' }} />
            <div className="flex items-center justify-center mb-2">
              <MdEmail className='text-white mr-2' />
              <p className={`text-lg ${font3.className}`}>Email: info@viralclix.com</p>
            </div>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className={`${font2.className} flex-1 bg-slate-800 p-8 rounded-lg shadow-lg`}>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white">Name</label>
              <input type="text" className="mt-1 p-2 w-full border rounded-full" placeholder="Your Name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Email</label>
              <input type="email" className="mt-1 p-2 w-full border rounded-full" placeholder="Your Email" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Message</label>
              <textarea className="mt-1 p-2 w-full border rounded-md" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className={`${font3.className} w-full bg-green-600 text-white text-md font-bold py-2 rounded-full hover:bg-green-700 transition`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
