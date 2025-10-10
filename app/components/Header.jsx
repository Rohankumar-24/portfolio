import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl mx-auto min-h-screen 
      flex flex-col items-center justify-center gap-6 text-center py-10"
    >
      {/* Profile Image */}
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.rohan_image}
          alt="Profile"
          className="rounded-full w-30 mb-3 mt-25 font-Ovo shadow-lg hover:shadow-xl transition-shadow duration-300"
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-base sm:text-lg md:text-xl font-Ovo text-blue-600"
      >
        Hi! I'm Rohan Kumar{" "}
        <Image src={assets.hand_icon} alt="Hand icon" className="w-7" />
      </motion.h3>

      {/* Main Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo font-semibold leading-snug"
      >
        MERN Stack Developer based in Punjab, India.
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-Ovo text-sm sm:text-base text-gray-700 leading-relaxed"
      >
        Enthusiastic and detail-oriented MERN Stack Developer with expertise in
        React, Node.js, Express, and MongoDB. Adept at creating efficient,
        responsive, and modern web solutions. Looking forward to leveraging my
        technical skills and problem-solving mindset to contribute to impactful
        software development projects.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          href="#contact"
          className="px-6 sm:px-10 py-2 sm:py-3 rounded-full bg-black text-white flex items-center gap-2 hover:bg-gray-800 transition-colors duration-200"
        >
          Contact Me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="Arrow icon"
            className="w-4"
          />
        </motion.a>

        <motion.a
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.9 }}
  href="/rohan-resume.pdf"  
  download="Rohan_Kumar_Resume.pdf"
  target="_blank"  
  rel="noopener noreferrer"  
  className="px-6 sm:px-10 py-2 sm:py-3 rounded-full border border-gray-500 flex items-center gap-2 hover:border-gray-700 hover:bg-gray-50 transition-all duration-200"
>
  My Resume
  <Image
    src={assets.download_icon}
    alt="Download icon"
    className="w-4"
  />
</motion.a>
      </div>
    </div>
  );
};

export default Header;
