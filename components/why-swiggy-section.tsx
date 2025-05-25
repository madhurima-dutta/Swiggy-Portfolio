"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Utensils, Truck, CreditCard, Heart, MessageCircle, ChefHat, Code } from "lucide-react"

const swiggyAdvantages = [
  {
    title: "Lightning Fast Delivery",
    description: "Swiggy consistently delivers food faster than Zomato, just like I deliver data insights quickly!",
    icon: <Clock className="text-swiggy-orange" size={28} />,
  },
  {
    title: "Better Discounts",
    description: "Swiggy offers more consistent discounts and better deals on my favorite restaurants.",
    icon: <CreditCard className="text-swiggy-orange" size={28} />,
  },
  {
    title: "Superior Restaurant Selection",
    description: "More exclusive restaurants and better quality options available on Swiggy.",
    icon: <Utensils className="text-swiggy-orange" size={28} />,
  },
  {
    title: "Reliable Delivery Partners",
    description: "Swiggy's delivery partners are more professional and reliable in my experience.",
    icon: <Truck className="text-swiggy-orange" size={28} />,
  },
]

const alignmentPoints = [
  {
    emoji: "🍟",
    title: "I've Ordered So Much Swiggy, They Should Let Me Deliver Data Instead",
    content: "Platinum Data Feeder",
    savings: "₹34,269",
  },
  {
    emoji: "🛵",
    title: "My ML Models Are Faster Than Express Delivery",
    content: "Logistic Regression vs Swiggy Rider Race",
  },
  {
    emoji: "🧾",
    title: "Your Receipts Gave Me Project Ideas",
    content: "Swiggy Order History Analysis",
  },
  {
    emoji: "🔥",
    title: "From Crunchy Pakoras to Crunchy Numbers",
    content: "Kitchen vs Code Editor",
  },
  {
    emoji: "💬",
    title: "Swiggy Chatbot & Me Could Be Besties",
    content: "We Both Deliver What People Crave",
  },
]

export default function WhySwiggySection() {
  const [showLoyaltyBadge, setShowLoyaltyBadge] = useState(false)
  const [showSavingsPopup, setShowSavingsPopup] = useState(false)
  const [raceStarted, setRaceStarted] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [activeOrderHistory, setActiveOrderHistory] = useState(false)

  return (
    <section id="why-swiggy" className="section bg-swiggy-orange">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto text-white">Why I Prefer Swiggy</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mt-6">
            Just like data analysis, food delivery is all about speed, accuracy, and quality!
          </p>
        </motion.div>

        {/* Swiggy vs Zomato Comparison */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 md:w-1/2"
          >
            <div className="mb-4 p-4 bg-white rounded-full shadow-lg border-4 border-white">
              <div className="w-16 h-16 bg-swiggy-orange rounded-full flex items-center justify-center">
                {/* Swiggy Logo */}
                <svg width="40" height="40" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0zm0 896c-212.08 0-384-171.92-384-384S299.92 128 512 128s384 171.92 384 384-171.92 384-384 384z"
                    fill="white"
                  />
                  <path
                    d="M512 256c-141.38 0-256 114.62-256 256s114.62 256 256 256 256-114.62 256-256-114.62-256-256-256zm0 384c-70.69 0-128-57.31-128-128s57.31-128 128-128 128 57.31 128 128-57.31 128-128 128z"
                    fill="white"
                  />
                  <circle cx="512" cy="512" r="64" fill="white" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Swiggy</h3>
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Heart key={star} className="text-white" size={20} fill="white" />
              ))}
            </div>
            <p className="text-white">My go-to food delivery app!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center text-center p-6 md:w-1/2"
          >
            <div className="mb-4 p-4 bg-gray-100 rounded-full">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                {/* Zomato Logo */}
                <svg width="40" height="40" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M512 0C229.23 0 0 229.23 0 512s229.23 512 512 512 512-229.23 512-512S794.77 0 512 0z"
                    fill="white"
                  />
                  <path
                    d="M512 128c212.08 0 384 171.92 384 384 0 84.48-27.31 162.56-73.6 226.24L512 448 201.6 738.24C147.31 674.56 128 596.48 128 512c0-212.08 171.92-384 384-384z"
                    fill="white"
                  />
                  <path d="M512 256L256 512h512L512 256z" fill="white" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-400">Zomato</h3>
            <div className="flex items-center mb-4">
              {[1, 2, 3].map((star) => (
                <Heart key={star} className="text-gray-300" size={20} fill="#d1d5db" />
              ))}
              {[4, 5].map((star) => (
                <Heart key={star} className="text-gray-300" size={20} />
              ))}
            </div>
            <p className="text-gray-400">Just doesn't compare!</p>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {swiggyAdvantages.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} index={index} />
          ))}
        </div>

        {/* Alignment Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">How I'm Aligned with Swiggy's Vibe</h3>

          <div className="space-y-8">
            {/* Point 1: Loyalty Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{alignmentPoints[0].emoji}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">{alignmentPoints[0].title}</h4>
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setShowLoyaltyBadge(true)
                        setTimeout(() => setShowSavingsPopup(true), 1000)
                      }}
                      className="loyalty-badge"
                    >
                      Platinum Data Feeder
                    </motion.button>
                    <AnimatePresence>
                      {showSavingsPopup && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold"
                        >
                          You've saved ₹34,269 on food. Time to save Swiggy that in analytics!
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Point 2: Enhanced ML Race */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{alignmentPoints[1].emoji}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-4">{alignmentPoints[1].title}</h4>
                  <EnhancedMLRace raceStarted={raceStarted} setRaceStarted={setRaceStarted} />
                </div>
              </div>
            </motion.div>

            {/* Point 3: Order History */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{alignmentPoints[2].emoji}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-4">{alignmentPoints[2].title}</h4>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveOrderHistory(!activeOrderHistory)}
                    className="bg-swiggy-orange text-white px-4 py-2 rounded-lg font-bold mb-4"
                  >
                    View Order History
                  </motion.button>

                  <AnimatePresence>
                    {activeOrderHistory && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        {[
                          { item: "Chole Bhature", tag: "#HighSpend", project: "Predict next craving time" },
                          { item: "Midnight Biryani", tag: "#MidnightCravings", project: "Sleep vs Food correlation" },
                          { item: "Weekend Pizza", tag: "#TrendDetection", project: "Weekend spending patterns" },
                        ].map((order, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="order-history-item"
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold">{order.item}</span>
                              <span className="bg-swiggy-orange text-white px-2 py-1 rounded text-xs">{order.tag}</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{order.project}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* Point 4: Kitchen vs Code */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-4xl">{alignmentPoints[3].emoji}</span>
                <h4 className="text-xl font-bold">{alignmentPoints[3].title}</h4>
              </div>

              <div className="kitchen-vs-code">
                <div className="kitchen-side">
                  <div className="flex items-center mb-3">
                    <ChefHat className="text-swiggy-orange mr-2" size={24} />
                    <h5 className="font-bold">Kitchen</h5>
                  </div>
                  <p className="text-sm text-gray-600">"Mixing spices like I mix features in my datasets"</p>
                  <div className="mt-3 text-center">
                    <span className="text-2xl">👩‍🍳🥘</span>
                  </div>
                </div>

                <div className="code-side">
                  <div className="flex items-center mb-3">
                    <Code className="text-blue-500 mr-2" size={24} />
                    <h5 className="font-bold">Code Editor</h5>
                  </div>
                  <p className="text-sm text-gray-600">"EDA is my tadka. Pandas is my palak."</p>
                  <div className="mt-3 text-center">
                    <span className="text-2xl">💻📊</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Point 5: Chatbot Conversation */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <span className="text-4xl">{alignmentPoints[4].emoji}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-4">{alignmentPoints[4].title}</h4>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setShowChat(!showChat)}
                    className="bg-swiggy-orange text-white px-4 py-2 rounded-lg font-bold mb-4"
                  >
                    Start Chat
                  </motion.button>

                  <AnimatePresence>
                    {showChat && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="chat-bubble"
                        >
                          <div className="flex items-center mb-1">
                            <MessageCircle className="text-swiggy-orange mr-2" size={16} />
                            <span className="font-bold text-sm">Swiggy Bot</span>
                          </div>
                          <p>Your order is on the way! 🛵</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="chat-bubble user"
                        >
                          <p>So is my dashboard! 📊</p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                          className="chat-bubble"
                        >
                          <p>We both deliver. We both know what people crave! 🤝</p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl font-bold text-white">
            Just like Swiggy delivers food with precision, I deliver data insights with accuracy!
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function AdvantageCard({ advantage, index }: { advantage: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="swiggy-card"
    >
      <div className="flex items-start">
        <div className="p-2 bg-white rounded-full mr-4 mt-1 shadow-md border-2 border-swiggy-orange">
          {advantage.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
          <p className="text-gray-600">{advantage.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function EnhancedMLRace({
  raceStarted,
  setRaceStarted,
}: { raceStarted: boolean; setRaceStarted: (value: boolean) => void }) {
  return (
    <div className="relative">
      <div className="relative h-32 bg-gray-100 rounded-lg overflow-hidden mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setRaceStarted(true)}
          className="absolute top-2 left-2 bg-swiggy-orange text-white px-3 py-1 rounded text-sm font-bold z-10"
        >
          Start Race!
        </motion.button>

        {/* Track with Start and Finish markers */}
        <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-300 rounded transform -translate-y-1/2">
          <div className="absolute left-0 -top-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
            S
          </div>
          <div className="absolute right-0 -top-2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
            F
          </div>
        </div>

        {/* Trophy at finish line */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <span className="text-2xl opacity-50">🏆</span>
        </div>

        {/* Swiggy Rider */}
        <motion.div
          initial={{ x: "0%" }}
          animate={raceStarted ? { x: "calc(100% - 60px)" } : { x: "0%" }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute top-6 left-4 flex items-center"
        >
          <div className="w-10 h-10 bg-swiggy-orange rounded-full flex items-center justify-center">🛵</div>
          <span className="ml-2 text-xs font-bold bg-white px-2 py-1 rounded shadow">Swiggy Rider</span>
        </motion.div>

        {/* ML Model */}
        <motion.div
          initial={{ x: "0%" }}
          animate={raceStarted ? { x: "calc(100% - 60px)" } : { x: "0%" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute bottom-6 left-4 flex items-center"
        >
          <motion.div
            animate={raceStarted ? { rotate: [0, 360, 720] } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"
          >
            🤖
          </motion.div>
          <span className="ml-2 text-xs font-bold bg-white px-2 py-1 rounded shadow">ML Model</span>
        </motion.div>

        {/* Victory Animation */}
        <AnimatePresence>
          {raceStarted && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                  scale: [1, 1.2, 1, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
                className="text-4xl"
              >
                🏆
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results */}
      <AnimatePresence>
        {raceStarted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="bg-green-100 p-4 rounded-lg"
          >
            <h5 className="font-bold text-green-800 mb-2">Race Results:</h5>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>🤖 ML Model (Logistic Regression):</span>
                <span className="font-bold text-green-600">2.0 seconds</span>
              </div>
              <div className="flex justify-between">
                <span>🛵 Swiggy Rider:</span>
                <span className="font-bold text-orange-600">3.0 seconds</span>
              </div>
            </div>
            <p className="text-xs text-green-700 mt-2 italic">
              "My algorithms process faster than delivery bikes can ride!"
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
