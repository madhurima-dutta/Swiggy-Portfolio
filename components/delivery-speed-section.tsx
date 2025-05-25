"use client"

import type React from "react"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Clock, Zap, Award, Truck } from "lucide-react"

export default function DeliverySpeedSection() {
  return (
    <section id="delivery" className="section bg-swiggy-orange">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto text-white">Lightning Fast Delivery</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mt-6">
            Just like I deliver data insights quickly, Swiggy delivers food at record speeds!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SpeedCard
            title="On-Time Delivery"
            description="Swiggy's delivery partners always arrive right on time, sometimes even earlier!"
            icon={<Clock className="text-swiggy-orange" size={36} />}
            index={0}
          />
          <SpeedCard
            title="Live Tracking"
            description="Watch your food journey in real-time with accurate GPS tracking"
            icon={<Truck className="text-swiggy-orange" size={36} />}
            index={1}
          />
          <SpeedCard
            title="Express Delivery"
            description="Special Instamart deliveries arrive in just 10-15 minutes!"
            icon={<Zap className="text-swiggy-orange" size={36} />}
            index={2}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Award className="text-swiggy-orange mr-3" size={28} />
                <h3 className="text-2xl font-bold">Delivery Speed Challenge</h3>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <DeliveryRace />
                </div>

                <div className="text-center mt-6">
                  <p className="text-lg font-semibold">
                    Swiggy delivers <span className="text-swiggy-orange">2x faster</span> than competitors!
                  </p>
                  <p className="text-gray-600 mt-2">
                    My order from Mio Amore arrived in just 23 minutes, while the estimated time was 35 minutes!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SpeedCard({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="swiggy-card"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-white rounded-full shadow-md">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

function DeliveryRace() {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls1.start({
        x: "100%",
        transition: { duration: 2, ease: "easeOut" },
      })
      controls2.start({
        x: "50%",
        transition: { duration: 2, ease: "easeOut" },
      })
    }
  }, [controls1, controls2, inView])

  return (
    <div ref={ref} className="h-24 bg-gray-100 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center">
        <div className="h-2 bg-gray-200 mx-8 rounded-full">
          <div className="absolute left-8 -top-3 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
            0
          </div>
          <div className="absolute right-8 -top-3 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">
            35
          </div>
        </div>
      </div>

      <motion.div
        initial={{ x: "0%" }}
        animate={controls1}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center"
      >
        <div className="w-12 h-12 bg-swiggy-orange rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.5 8C16.33 8 17 8.67 17 9.5C17 10.33 16.33 11 15.5 11C14.67 11 14 10.33 14 9.5C14 8.67 14.67 8 15.5 8ZM8.5 8C9.33 8 10 8.67 10 9.5C10 10.33 9.33 11 8.5 11C7.67 11 7 10.33 7 9.5C7 8.67 7.67 8 8.5 8ZM12 17.5C9.67 17.5 7.69 16.04 6.89 14H17.11C16.31 16.04 14.33 17.5 12 17.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="ml-2 bg-white px-2 py-1 rounded shadow-sm">
          <span className="text-xs font-bold">Swiggy</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={controls2}
        className="absolute top-1/2 left-8 transform -translate-y-1/2 flex items-center"
      >
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 17.5C9.67 17.5 7.69 16.04 6.89 14H17.11C16.31 16.04 14.33 17.5 12 17.5ZM17 10.5H7C7 8.01 9.01 6 11.5 6H12.5C14.99 6 17 8.01 17 10.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="ml-2 bg-white px-2 py-1 rounded shadow-sm">
          <span className="text-xs font-bold">Zomato</span>
        </div>
      </motion.div>
    </div>
  )
}
