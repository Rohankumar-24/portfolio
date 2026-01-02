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
      setResult("Form Submitted Successfully ")
      event.target.reset()
      setTimeout(() => setResult(""), 3000)
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="
        w-full 
        px-4 sm:px-6 md:px-8 lg:px-[10%]
        py-10 sm:py-12 md:py-16 
        text-center 
        scroll-mt-20
        bg-gradient-to-b from-[#f0f9ff] to-[#dbeafe]
      "
    >
      {/* Heading */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm sm:text-base md:text-lg font-ovo text-blue-600 mb-2"
      >
        Connect With Me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-ovo font-semibold mb-3 sm:mb-4"
      >
        Get In Touch
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-700 font-ovo max-w-md sm:max-w-lg md:max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-2 mb-6 sm:mb-8 md:mb-10"
      >
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </motion.p>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4 sm:gap-5 px-2 sm:px-4 md:px-0"
      >
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          <motion.input
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full p-3 sm:p-3.5 md:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all bg-white"
          />
          <motion.input
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            viewport={{ once: true }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 sm:p-3.5 md:p-4 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all bg-white"
          />
        </div>

        <motion.textarea
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          viewport={{ once: true }}
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-3 sm:p-3.5 md:p-4 border border-gray-300 rounded-lg resize-none text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all h-32 sm:h-36 md:h-40 bg-white"
        ></motion.textarea>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="
            py-2.5 sm:py-3 md:py-3.5
            px-6 sm:px-8 md:px-10
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white 
            text-sm sm:text-base 
            font-medium
            rounded-full 
            flex items-center justify-center gap-2 
            mx-auto 
            hover:from-blue-700 hover:to-blue-600
            shadow-lg hover:shadow-xl
            transition-all duration-300
            active:scale-95
          "
        >
          Submit Now
          <Image src={assets.right_arrow_white} alt="arrow" className="w-3 sm:w-4" />
        </motion.button>

        {/* Status message */}
        {result && (
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-sm sm:text-base font-medium text-blue-700"
          >
            {result}
          </motion.p>
        )}
      </motion.form>
    </motion.div>
  )
}

export default Contact