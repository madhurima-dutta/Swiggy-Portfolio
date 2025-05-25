"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Linkedin, Github, Globe } from "lucide-react"
import Slide from "./slide"
import { Button } from "@/components/ui/button"

export default function ContactSlide() {
  const [isButtonAnimating, setIsButtonAnimating] = useState(false)

  const handleButtonClick = () => {
    setIsButtonAnimating(true)
    setTimeout(() => setIsButtonAnimating(false), 1000)
  }

  return (
    <Slide id="contact" title="Let's Get Cooking!" bgColor="bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to create data-driven delights together? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <ContactItem
                icon={<Phone className="h-5 w-5 text-swiggy-orange" />}
                label="Phone"
                value="+91-8481016734"
                delay={0.1}
              />

              <ContactItem
                icon={<Mail className="h-5 w-5 text-swiggy-orange" />}
                label="Email"
                value="madhurimadutta2001@gmail.com"
                link="mailto:madhurimadutta2001@gmail.com"
                delay={0.2}
              />

              <ContactItem
                icon={<MapPin className="h-5 w-5 text-swiggy-orange" />}
                label="Location"
                value="Mumbai, India"
                delay={0.3}
              />

              <ContactItem
                icon={<Linkedin className="h-5 w-5 text-swiggy-orange" />}
                label="LinkedIn"
                value="madhu-rima-dutta"
                link="https://linkedin.com/in/madhu-rima-dutta"
                delay={0.4}
              />

              <ContactItem
                icon={<Github className="h-5 w-5 text-swiggy-orange" />}
                label="GitHub"
                value="madhurima-dutta"
                link="https://github.com/madhurima-dutta"
                delay={0.5}
              />

              <ContactItem
                icon={<Globe className="h-5 w-5 text-swiggy-orange" />}
                label="Portfolio"
                value="madhurima"
                link="https://madhurima.vercel.app"
                delay={0.6}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-swiggy-orange focus:border-swiggy-orange dark:bg-gray-700"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-swiggy-orange focus:border-swiggy-orange dark:bg-gray-700"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-swiggy-orange focus:border-swiggy-orange dark:bg-gray-700"
                  placeholder="Your message"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  className="w-full bg-swiggy-orange hover:bg-orange-600 text-white"
                  onClick={handleButtonClick}
                >
                  <motion.span animate={isButtonAnimating ? { scale: [1, 1.2, 1] } : {}} transition={{ duration: 0.5 }}>
                    Send Message
                  </motion.span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </Slide>
  )
}

function ContactItem({
  icon,
  label,
  value,
  link,
  delay,
}: {
  icon: React.ReactNode
  label: string
  value: string
  link?: string
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="flex items-start"
    >
      <div className="mr-3 mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:text-swiggy-orange transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="font-medium">{value}</p>
        )}
      </div>
    </motion.div>
  )
}
