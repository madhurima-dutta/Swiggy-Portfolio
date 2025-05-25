"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SlideProps {
  id: string
  title: string
  children: ReactNode
  bgColor?: string
}

export default function Slide({ id, title, children, bgColor = "bg-white" }: SlideProps) {
  return (
    <section id={id} className={`slide ${bgColor} relative overflow-hidden`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="container mx-auto max-w-6xl z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">{title}</h2>
        <div className="w-full">{children}</div>
      </motion.div>
    </section>
  )
}
