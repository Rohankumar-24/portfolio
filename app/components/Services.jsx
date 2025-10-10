import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Services = () => {
  return (
    <div
      id="services"
      className="w-full px-[12%] py-20 scroll-mt-20"
      //  bg-gradient-to-b from-white to-gray-50"
    >
      {/* Section Header */}
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      className="text-center mb-16">
        <motion.h4 
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.3,duration:0.5}}
        className="text-sm font-ovo text-blue-600 uppercase tracking-wider mb-3 font-medium">
          What I Offer
        </motion.h4>
        <motion.h2
        initial={{y:-20,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{delay:0.5,duration:0.5}} 
        
        className="text-5xl font-ovo font-bold text-gray-900 mb-6">
          My Services
        </motion.h2>
        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{delay:0.7,duration:0.5}}
        className="text-center max-w-3xl mx-auto text-gray-600 font-Ovo leading-relaxed text-lg">
          I offer end-to-end MERN stack development services, including building
          responsive and interactive frontends with React.js, developing secure
          and scalable backends with Node.js and Express.js, and managing
          efficient databases using MongoDB. I also specialize in creating RESTful
          APIs, integrating third-party services, and deploying applications on
          platforms like Vercel and Render.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9,duration:0.6}}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">

        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
          whileHover={{scale:1.05}}
            key={index}
            className="group relative border-2 border-gray-200 rounded-2xl p-8 bg-white
                       shadow-sm transition-all duration-500 ease-out
                       hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400
                       overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            {/* Icon Container */}
            <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br 
                          from-blue-100 to-purple-100 rounded-xl group-hover:scale-110 
                          group-hover:rotate-3 transition-all duration-500">
              <Image src={icon} alt={title} className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-ovo font-semibold text-gray-800 mb-4 
                         group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              {description}
            </p>

            {/* Read More Link */}
            <a
              href="https://en.wikipedia.org/wiki/Web_design" target="_blank"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 
                       group-hover:gap-3 transition-all duration-300"
            >
              <span>Read more</span>
              <Image
                src={assets.right_arrow}
                alt="right-arrow"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 
                          opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;