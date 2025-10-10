import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)
    formData.append("access_key", "d35f35a4-1c47-475d-ad4d-418c70081122")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()
    if (data.success) {
      setResult("Form Submitted Successfully ✅")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="
        w-full 
        px-4 sm:px-6 md:px-8 lg:px-[10%]
        py-10 sm:py-12 md:py-16 
        text-center 
        scroll-mt-24
        bg-[url('/footer-bg-color.png')] 
        bg-no-repeat 
        bg-center 
        bg-contain
      "
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-sm sm:text-base md:text-lg font-ovo text-blue-600 mb-2"
      >
        Connect With Me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-2xl sm:text-3xl md:text-5xl font-ovo font-semibold mb-4"
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-gray-700 font-ovo max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-1 mb-8 sm:mb-10"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 sm:gap-5 px-2 sm:px-0"
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 sm:p-4 border border-gray-300 rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20"
          />
        </div>

        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          name="message"
          rows={5}
          placeholder="Enter your message"
          required
          className="w-full p-3 sm:p-4 border border-gray-300 rounded-md resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black/20"
        ></motion.textarea>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="
            py-2.5 sm:py-3 
            px-6 sm:px-8 
            bg-black/80 
            text-white 
            text-sm sm:text-base 
            rounded-full 
            flex items-center justify-center gap-2 
            mx-auto 
            hover:bg-black 
            hover:scale-105 
            transition duration-300
          "
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="arrow" className="w-3 sm:w-4" />
        </motion.button>

        {/* Status message */}
        <p className="mt-3 text-sm sm:text-base font-medium text-gray-700">{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
