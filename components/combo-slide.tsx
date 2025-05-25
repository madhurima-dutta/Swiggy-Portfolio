"use client"

import { motion } from "framer-motion"
import { Utensils, Rocket, Database, LineChart, Zap, Clock } from "lucide-react"
import Slide from "./slide"

const comboReasons = [
  {
    title: "Data-Driven Decisions",
    description: "My analytical approach aligns with Swiggy's data-first culture",
    icon: <Database className="h-6 w-6 text-white" />,
    color: "bg-swiggy-orange",
  },
  {
    title: "Automation Expertise",
    description: "I've reduced manual work by 40% through automation, a skill valuable for Swiggy's scale",
    icon: <Zap className="h-6 w-6 text-white" />,
    color: "bg-swiggy-orange",
  },
  {
    title: "Predictive Modeling",
    description: "My ML models with 91% F1-score can help optimize Swiggy's delivery predictions",
    icon: <LineChart className="h-6 w-6 text-white" />,
    color: "bg-swiggy-orange",
  },
  {
    title: "Fast Delivery",
    description: "Just like Swiggy, I deliver results quickly and efficiently",
    icon: <Clock className="h-6 w-6 text-white" />,
    color: "bg-swiggy-orange",
  },
]

export default function ComboSlide() {
  return (
    <Slide id="combo" title="Why Swiggy & Me = Perfect Combo" bgColor="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0.8, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              <Utensils className="h-16 w-16 text-swiggy-orange" />
              <motion.div
                initial={{ scale: 0, x: 20 }}
                whileInView={{ scale: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -top-2 -right-2"
              >
                <Rocket className="h-8 w-8 text-gray-800 dark:text-white" />
              </motion.div>
            </motion.div>
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Like the perfect Swiggy burger, we layer skills and innovation for delicious results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comboReasons.map((reason, index) => (
            <ReasonCard key={index} reason={reason} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
        >
          <h3 className="text-xl font-semibold mb-4">The Perfect Recipe</h3>
          <p className="text-gray-700 dark:text-gray-300">
            My mathematical background and data expertise combined with Swiggy's innovative platform creates the perfect
            recipe for success. Together, we can deliver insights that drive growth and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}

function ReasonCard({ reason, index }: { reason: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex"
    >
      <div className={`${reason.color} p-6 flex items-center justify-center`}>
        <div className="rounded-full p-2">{reason.icon}</div>
      </div>

      <div className="p-6 flex-1">
        <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{reason.description}</p>
      </div>
    </motion.div>
  )
}
