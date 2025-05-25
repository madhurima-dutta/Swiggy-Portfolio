"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Zap, Clock, CheckCircle, BarChart } from "lucide-react"
import Slide from "./slide"

const metrics = [
  {
    title: "Manual Labor",
    before: "100%",
    after: "60%",
    reduction: "40%",
    icon: <Clock className="h-6 w-6" />,
  },
  {
    title: "Data Accuracy",
    before: "50%",
    after: "100%",
    improvement: "50%",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Report Generation Time",
    before: "100%",
    after: "65%",
    reduction: "35%",
    icon: <BarChart className="h-6 w-6" />,
  },
]

export default function AutomationSlide() {
  return (
    <Slide id="automation" title="Automation Feast" bgColor="bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Designed end-to-end data automation system using Python (os module) and SQL that transformed workflows for
            80+ clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Zap className="h-5 w-5 text-swiggy-orange mr-2" />
            Key Achievements
          </h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-swiggy-orange mr-2">•</span>
              Integrated Excel outputs with SharePoint for seamless data flow
            </li>
            <li className="flex items-start">
              <span className="text-swiggy-orange mr-2">•</span>
              Created real-time Power BI dashboards with DAX for enhanced visibility
            </li>
            <li className="flex items-start">
              <span className="text-swiggy-orange mr-2">•</span>
              Streamlined decision support systems for management
            </li>
          </ul>
        </motion.div>
      </div>
    </Slide>
  )
}

function MetricCard({ metric, index }: { metric: any; index: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">{metric.title}</h3>
        <div className="p-2 bg-swiggy-orange/10 rounded-full">{metric.icon}</div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">Before</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">After</span>
        </div>

        <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { width: "100%" },
              visible: { width: metric.after },
            }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 + index * 0.2 }}
            className="absolute top-0 left-0 h-full bg-swiggy-orange rounded-full"
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">{metric.before}</span>
          <span className="font-semibold">{metric.after}</span>
        </div>

        <div className="text-center mt-2">
          {metric.reduction && (
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
              {metric.reduction} Reduction
            </span>
          )}
          {metric.improvement && (
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
              {metric.improvement} Improvement
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
