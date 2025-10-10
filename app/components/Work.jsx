import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const Work = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20 text-center">
      <motion.h4 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.3,duration:0.5}}
      className="text-lg font-ovo text-blue-600 mb-1">My Portfolio

      </motion.h4>
      <motion.h2 
      initial={{y:-20,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{delay:0.5,duration:0.5}}
      className="text-5xl font-ovo font-semibold mb-2">My Latest Work

      </motion.h2>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.7,duration:0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 leading-relaxed">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in MERN-stack development.
      </motion.p>

      <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{delay:0.9,duration:0.6}}
      className="flex flex-wrap justify-center items-center gap-6 max-w-7xl mx-auto">
        {workData.map((project, index) => (
          <motion.div
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
            key={index}
            className="group relative overflow-hidden rounded-xl aspect-[4/3] w-full sm:w-80 md:w-96 bg-cover bg-center bg-no-repeat shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 flex-shrink-0"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-ovo font-semibold text-black mb-3 drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-sm text-darkgray-200 leading-relaxed drop-shadow-md">
                  {project.description}
                </p>
              </div>

             <div className="flex justify-end">
  <a 
    href={project.projectUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-200 inline-block z-10 relative"
  >
    <Image
      src={assets.send_icon}
      alt="View project"
      className="w-5 h-5 filter brightness-0 invert"
    />
  </a>
</div>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{opacity:0}}
      whileInView={{opacity:0}}
      transition={{delay:1.1,duration:0.5}}
        href="#"
        className="w-max 
    flex 
    items-center 
    justify-center 
    gap-2 
    text-gray-700 
    border border-gray-700 
    rounded-full 
    py-3 px-8 
    mx-auto my-20 
    hover:bg-white-100 
    hover:scale-105 
    transition 
    duration-300 font-medium
  "
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="right-arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
