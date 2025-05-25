"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Database, TrendingUp, ChefHat, PieChart } from "lucide-react"
import Slide from "./slide"

export default function IntroSlide() {
  return (
    <Slide id="intro" title="Who's Hungry for Data?">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Where insights meet instant delivery – Madhurima at your service, Swiggy!
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Data Analyst skilled in predictive modeling and ML models using Python, with a solid foundation in
            Mathematics and Statistics.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        >
          <IconCard icon={<Database className="h-12 w-12 text-swiggy-orange" />} title="Data Analysis" delay={0.1} />
          <IconCard
            icon={<TrendingUp className="h-12 w-12 text-swiggy-orange" />}
            title="Predictive Modeling"
            delay={0.2}
          />
          <IconCard icon={<ChefHat className="h-12 w-12 text-swiggy-orange" />} title="Data Automation" delay={0.3} />
          <IconCard icon={<PieChart className="h-12 w-12 text-swiggy-orange" />} title="Visualization" delay={0.4} />
        </motion.div>
      </div>
    </Slide>
  )
}

function IconCard({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: number }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </motion.div>
  )
}
