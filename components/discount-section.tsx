"use client"

import { motion } from "framer-motion"
import { Percent } from "lucide-react"

export default function DiscountSection() {
  return (
    <section id="discounts" className="section bg-swiggy-orange">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto text-white">Discount Delights</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mt-6">
            Swiggy keeps my wallet happy with amazing discounts that make me go WOW!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="receipt-card"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-swiggy-orange">Mio Amore - The Cake Shop</h3>
                <p className="text-gray-500 text-sm">Order #172820900406742</p>
              </div>
              <span className="on-time-badge">ON TIME</span>
            </div>

            <div className="space-y-2 mb-6">
              <div className="receipt-item">
                <span>Choco Classic Pastry (eggless) x 2</span>
                <span>₹64</span>
              </div>
              <div className="receipt-item">
                <span>White Forest Pastry x 1</span>
                <span>₹48</span>
              </div>
              <div className="receipt-item">
                <span>Date Walnut Slice x 1</span>
                <span>₹22</span>
              </div>
              <div className="receipt-item">
                <span>Kaju Barfi x 2</span>
                <span>₹30</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹164.00</span>
              </div>
              <div className="flex justify-between">
                <span>Order Packing Charges</span>
                <span>₹30.00</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>
                  <span className="line-through text-gray-400 mr-1">₹5.00</span>₹4.00
                </span>
              </div>
              <div className="flex justify-between">
                <span>Delivery partner fee</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between text-green-500 font-semibold">
                <span>Discount Applied (GETNEW60)</span>
                <span>-₹98.40</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>₹0.72</span>
              </div>
            </div>

            <div className="receipt-total">
              <span>Bill Total</span>
              <span>₹100.00</span>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full transform rotate-12"
            >
              60% OFF!
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="receipt-card"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-swiggy-orange">Grameen Kulfi</h3>
                <p className="text-gray-500 text-sm">Order #205910473585761</p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="receipt-item">
                <span>Desi Malai Matka Kulfi (pack Of 2) x 1</span>
                <span>₹152.54</span>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Item Total</span>
                <span>₹152.54</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹11.80</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery partner fee</span>
                <span>₹30.00</span>
              </div>
              <div className="flex justify-between text-green-500 font-semibold">
                <span>Discount Applied</span>
                <span>-₹43.53</span>
              </div>
              <div className="flex justify-between text-green-500 font-semibold">
                <span>Extra discount for you</span>
                <span>-₹60.00</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>₹19.62</span>
              </div>
            </div>

            <div className="receipt-total">
              <span>Bill Total</span>
              <span>₹110.00</span>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-green-500 text-white font-bold px-4 py-2 rounded-full transform rotate-12"
            >
              68% OFF!
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Percent className="text-swiggy-orange mr-2" size={24} />
            Discount Highlights
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
              <span className="text-gray-600">
                <span className="font-bold">UPTO 60% OFF</span> on food delivery from restaurants
              </span>
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
                <span className="font-bold">GETNEW60</span> code for new users gives massive discounts
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
              <span className="text-gray-600">
                <span className="font-bold">Extra discounts</span> that make me a loyal Swiggy customer!
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
