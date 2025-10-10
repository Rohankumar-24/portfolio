import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-16 scroll-mt-20 bg-[url('/footer-bg-color.png')]
    bg-no-repeat
    bg-center
    bg-[length:90%_auto]" 
    >
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <motion.div 
          className="text-center mb-10"
          initial={{opacity:0, y:-20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
        >
          <h4 className="text-lg font-ovo  mb-1 text-blue-600">Introduction</h4>
          <h2 className="text-5xl font-ovo font-semibold">About Me</h2>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/3 rounded-3xl overflow-hidden mx-auto lg:mx-0 shadow-lg"
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.6, delay:0.2}}
            viewport={{once:true}}
          >
            <Image
              src={assets.rohan_image}
              alt="Rohan - MERN Stack Developer"
              className="w-full h-auto rounded-3xl"
            />
          </motion.div>

          {/* Content Section */}
          <div className="flex-1 max-w-3xl space-y-6">
            <motion.p 
              className="text-gray-700 font-ovo leading-relaxed text-base"
              initial={{opacity:0, x:50}}
              whileInView={{opacity:1, x:0}}
              transition={{duration:0.6, delay:0.3}}
              viewport={{once:true}}
            >
              I'm a passionate MERN Stack Developer specializing in building
              modern, scalable, and user-friendly web applications. With a
              strong foundation in MongoDB, Express.js, React, and Node.js, I
              love crafting seamless digital experiences that blend
              functionality with clean design. I thrive on solving complex
              problems, optimizing performance, and continuously learning new
              technologies to stay ahead in the ever-evolving web ecosystem.
            </motion.p>

            {/* Info Cards */}
            <motion.ul 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.4}}
              viewport={{once:true}}
            >
              {infoList.map(({ icon, title, description }, index) => (
                <motion.li
                  key={index}
                  className="border border-gray-300 rounded-xl p-4 cursor-pointer bg-white
                             shadow-md transition-transform duration-300 transform
                             hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50"
                  initial={{opacity:0, scale:0.8}}
                  whileInView={{opacity:1, scale:1}}
                  transition={{duration:0.3, delay:0.5 + index * 0.1}}
                  viewport={{once:true}}
                >
                  <Image src={icon} alt={title} className="w-6 h-6 mb-2" />
                  <h3 className="mb-1 font-semibold text-gray-800 text-md font-outfit">{title}</h3>
                  <p className="text-gray-600 text-sm leading-snug font-outfit">{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            {/* Tools */}
            <motion.div
              initial={{opacity:0, y:20}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay:0.6}}
              viewport={{once:true}}
            >
              <h4 className="text-gray-700 font-ovo mb-2 text-base">Tools I Use</h4>
              <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
                {toolsData.map((tool, index) => (
                  <motion.li 
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border
                     border-gray-400 rouded-lg cursor-pointer hover:shadow-xl hover:-translate-y-1
                      hover:bg-gray-50 rounded-xl" 
                    key={index}
                    initial={{opacity:0, scale:0}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{duration:0.3, delay:0.7 + index * 0.05}}
                    viewport={{once:true}}
                  >
                    <Image src={tool} alt="Tool" className="w-5 sm:w-6" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;