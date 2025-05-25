"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Linkedin, Github, Globe, Heart } from "lucide-react"

export default function ContactSection() {
  const [isButtonAnimating, setIsButtonAnimating] = useState(false)

  const handleButtonClick = () => {
    setIsButtonAnimating(true)
    setTimeout(() => setIsButtonAnimating(false), 1000)
  }

  return (
    <section id="contact" className="section bg-swiggy-orange">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto text-white">Let's Get Cooking!</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mt-6">
            Ready to create data-driven delights together? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-swiggy-dark">Contact Information</h3>

            <div className="space-y-6">
              <ContactItem
                icon={<Phone className="text-swiggy-orange" size={24} />}
                label="Phone"
                value="+91-8481016734"
                delay={0.1}
              />

              <ContactItem
                icon={<Mail className="text-swiggy-orange" size={24} />}
                label="Email"
                value="madhurimadutta2001@gmail.com"
                link="mailto:madhurimadutta2001@gmail.com"
                delay={0.2}
              />

              <ContactItem
                icon={<MapPin className="text-swiggy-orange" size={24} />}
                label="Location"
                value="Mumbai, India"
                delay={0.3}
              />

              <ContactItem
                icon={<Linkedin className="text-swiggy-orange" size={24} />}
                label="LinkedIn"
                value="madhu-rima-dutta"
                link="https://linkedin.com/in/madhu-rima-dutta"
                delay={0.4}
              />

              <ContactItem
                icon={<Github className="text-swiggy-orange" size={24} />}
                label="GitHub"
                value="madhurima-dutta"
                link="https://github.com/madhurima-dutta"
                delay={0.5}
              />

              <ContactItem
                icon={<Globe className="text-swiggy-orange" size={24} />}
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
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-swiggy-dark">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" className="swiggy-input" placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="swiggy-input" placeholder="Your email" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="swiggy-input" placeholder="Your message" />
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={isButtonAnimating ? { scale: [1, 1.2, 1] } : {}}
                  onClick={handleButtonClick}
                  type="button"
                  className="bg-swiggy-orange text-white font-bold py-3 px-6 rounded-full w-full hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer - Only on last page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/20 text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Heart className="text-white mr-2" size={20} fill="white" />
            <p className="text-lg font-medium text-white">Madhurima Dutta</p>
            <Heart className="text-white ml-2" size={20} fill="white" />
          </div>
          <p className="text-sm text-white/80">Data Analyst skilled in predictive modeling and ML models</p>
          <p className="text-xs text-white/60 mt-4">© {new Date().getFullYear()} All rights reserved</p>
        </motion.div>
      </div>
    </section>
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
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-start"
    >
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
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
