"use client"

import type React from "react"

import { motion } from "framer-motion"
import { PieChart, TrendingUp, Database, ChefHat } from "lucide-react"

export default function IntroSection() {
  return (
    <section id="intro" className="section bg-white">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="text-swiggy-orange">Swiggy</span> x <span className="text-swiggy-dark">Madhurima</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-swiggy-dark mb-6">A Data-Driven Delight</p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Where insights meet instant delivery – Madhurima at your service, Swiggy!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl"
        >
          <FeatureCard
            icon={<Database size={48} className="text-swiggy-orange" />}
            title="Data Analysis"
            description="Turning raw data into actionable insights"
            delay={0.1}
          />
          <FeatureCard
            icon={<TrendingUp size={48} className="text-swiggy-orange" />}
            title="Predictive Models"
            description="ML models with 91% F1-score accuracy"
            delay={0.2}
          />
          <FeatureCard
            icon={<PieChart size={48} className="text-swiggy-orange" />}
            title="Visualization"
            description="Beautiful charts that tell data stories"
            delay={0.3}
          />
          <FeatureCard
            icon={<ChefHat size={48} className="text-swiggy-orange" />}
            title="Automation"
            description="Reducing manual work by 40%"
            delay={0.4}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <a href="#skills" className="swiggy-button inline-flex items-center">
            Explore Skills
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
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="swiggy-card"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-swiggy-light-orange rounded-full">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}
