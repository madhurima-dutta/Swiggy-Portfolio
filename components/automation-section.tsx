"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Zap, Clock, CheckCircle, BarChart } from "lucide-react"

const metrics = [
  {
    title: "Manual Labor",
    before: "100%",
    after: "60%",
    reduction: "40%",
    icon: <Clock className="text-swiggy-orange" size={28} />,
  },
  {
    title: "Data Accuracy",
    before: "50%",
    after: "100%",
    improvement: "50%",
    icon: <CheckCircle className="text-swiggy-orange" size={28} />,
  },
  {
    title: "Report Generation Time",
    before: "100%",
    after: "65%",
    reduction: "35%",
    icon: <BarChart className="text-swiggy-orange" size={28} />,
  },
]

export default function AutomationSection() {
  return (
    <section id="automation" className="section bg-swiggy-light-orange">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Automation Feast</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Designed end-to-end data automation system using Python and SQL that transformed workflows for 80+ clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Zap className="text-swiggy-orange mr-2" size={24} />
            Key Achievements
          </h3>
          <ul className="space-y-3">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex items-start"
            >
              <span className="food-bullet">•</span>
              <span className="text-gray-600">Integrated Excel outputs with SharePoint for seamless data flow</span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex items-start"
            >
              <span className="food-bullet">•</span>
              <span className="text-gray-600">
                Created real-time Power BI dashboards with DAX for enhanced visibility
              </span>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className="flex items-start"
            >
              <span className="food-bullet">•</span>
              <span className="text-gray-600">Streamlined decision support systems for management</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
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
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="swiggy-card"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">{metric.title}</h3>
        <div className="p-2 bg-swiggy-light-orange rounded-full">{metric.icon}</div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Before</span>
          <span className="text-sm text-gray-500">After</span>
        </div>

        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
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
          <span className="font-bold">{metric.before}</span>
          <span className="font-bold">{metric.after}</span>
        </div>

        <div className="text-center mt-2">
          {metric.reduction && (
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {metric.reduction} Reduction
            </span>
          )}
          {metric.improvement && (
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {metric.improvement} Improvement
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
