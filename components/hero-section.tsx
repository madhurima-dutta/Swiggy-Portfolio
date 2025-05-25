"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="section bg-swiggy-orange relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/3">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Food bag"
            width={300}
            height={400}
            className="opacity-20"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-1/3">
          <Image
            src="/placeholder.svg?height=400&width=300"
            alt="Food plate"
            width={300}
            height={400}
            className="opacity-20"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white">
            <span className="text-white">Swiggy</span> x <span className="text-white">Madhurima</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6">A Data-Driven Delight</p>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Where insights meet instant delivery – Madhurima at your service, Swiggy!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8"
        >
          <a
            href="#discounts"
            className="bg-white text-swiggy-orange font-bold py-3 px-8 rounded-full inline-flex items-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            See Amazing Discounts
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
