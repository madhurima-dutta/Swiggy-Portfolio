"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Package,
  ShoppingCart,
  Star,
  TrendingUp,
  Truck,
  Car,
  Heart,
  Zap,
  Database,
  BarChart,
  Code,
  Sparkles,
  Clock,
  CheckCircle,
  Award,
  Utensils,
} from "lucide-react"

export default function SwiggyPortfolio() {
  const [showNav, setShowNav] = useState(false)
  const [raceStarted, setRaceStarted] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
    setShowNav(false)
  }

  return (
    <div className="bg-white text-swiggy-dark">
      {/* Navigation Dots */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-3">
          {["hero", "express", "skills", "projects", "why-swiggy", "why-hire", "contact"].map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === sectionId ? "bg-swiggy-orange scale-125" : "bg-gray-300 hover:bg-swiggy-orange/50"
              }`}
              aria-label={`Go to ${sectionId} section`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        onClick={() => setShowNav(!showNav)}
        className="fixed bottom-4 right-4 z-50 bg-swiggy-orange text-white p-2 rounded-full shadow-lg md:hidden"
      >
        {showNav ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-16 right-4 z-50 bg-white rounded-lg shadow-xl p-3 md:hidden"
          >
            <div className="flex flex-col space-y-2">
              {[
                { id: "hero", name: "Home" },
                { id: "express", name: "Express Lane" },
                { id: "skills", name: "What's in Store" },
                { id: "projects", name: "Projects" },
                { id: "why-swiggy", name: "Why Swiggy" },
                { id: "why-hire", name: "Why Hire Me" },
                { id: "contact", name: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 rounded-md text-left text-sm ${
                    activeSection === item.id
                      ? "bg-swiggy-orange text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-swiggy-orange/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen w-full bg-white flex flex-col items-center justify-center relative py-16"
      >
        <div className="absolute inset-0 bg-swiggy-orange/10 z-0" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.1 + Math.random() * 0.2,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: 20 + Math.random() * 30,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <MapPin size={16 + Math.random() * 20} className="text-swiggy-orange" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-swiggy-orange">Madhurima</span>
              <span className="text-swiggy-dark">@Swiggy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering data insights with the speed and precision of your favorite food app!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              { name: "Express Lane", icon: <Truck size={20} />, id: "express" },
              { name: "What's in Store", icon: <Package size={20} />, id: "skills" },
              { name: "Projects", icon: <Github size={20} />, id: "projects" },
              { name: "Why Swiggy", icon: <Heart size={20} />, id: "why-swiggy" },
              { name: "Why Hire Me", icon: <Star size={20} />, id: "why-hire" },
              { name: "Contact", icon: <Mail size={20} />, id: "contact" },
            ].map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center hover:bg-swiggy-orange hover:text-white transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-3 text-swiggy-orange group-hover:text-white"
                >
                  {item.icon}
                </motion.div>
                <span className="font-bold text-sm">{item.name}</span>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              onClick={() => scrollToSection("express")}
              className="cursor-pointer"
            >
              <ChevronDown size={28} className="text-swiggy-orange" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Express Lane Section */}
      <section id="express" className="py-16 w-full bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-swiggy-orange mb-3">Express Lane</h2>
            <div className="h-1 w-20 bg-swiggy-orange rounded-full"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Left Side - Fun Cartoon Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-2 border-swiggy-orange/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-swiggy-orange/10 rounded-bl-full -mr-6 -mt-6"></div>

                <h3 className="text-xl font-bold mb-5 flex items-center">
                  <Truck className="text-swiggy-orange mr-2" size={22} />
                  <span>Quick Bio Delivery</span>
                </h3>

                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-swiggy-orange/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <Database className="text-swiggy-orange" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Data Delivery Expert</h4>
                      <p className="text-gray-600 text-sm">
                        Serving fresh insights with the speed of your favorite Swiggy order. No cold data here!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="bg-swiggy-orange/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <Code className="text-swiggy-orange" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">ML Chef</h4>
                      <p className="text-gray-600 text-sm">
                        Cooking up algorithms that predict with 91% accuracy. My models are always well-seasoned!
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex items-start"
                  >
                    <div className="bg-swiggy-orange/10 p-2 rounded-full mr-3 flex-shrink-0">
                      <Zap className="text-swiggy-orange" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Automation Freak</h4>
                      <p className="text-gray-600 text-sm">
                        Reduced manual work by 40% through clever automation. Why work harder when you can work smarter?
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Professional Portfolio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-2 border-swiggy-orange/20 relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 left-0 w-24 h-24 bg-swiggy-orange/10 rounded-br-full -ml-6 -mt-6"></div>

                <h3 className="text-xl font-bold mb-5 flex items-center">
                  <ExternalLink className="text-swiggy-orange mr-2" size={22} />
                  <span>Professional Portfolio</span>
                </h3>

                <div className="flex-grow flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-48 h-48 mb-6"
                  >
                    <div className="absolute inset-0 bg-swiggy-orange rounded-full opacity-10 animate-pulse"></div>
                    <div className="absolute inset-3 bg-swiggy-orange rounded-full opacity-20 animate-pulse animation-delay-300"></div>
                    <div className="absolute inset-6 bg-swiggy-orange rounded-full opacity-30 animate-pulse animation-delay-600"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/swiggy-rider.png"
                        alt="Swiggy Rider"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  <motion.a
                    href="https://madhurima.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-swiggy-orange text-white font-bold py-3 px-6 rounded-full inline-flex items-center shadow-lg hover:shadow-xl transition-all text-sm"
                  >
                    <span className="mr-2">Visit Full Portfolio</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 w-full bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-swiggy-orange mb-3">What's in Store</h2>
            <div className="h-1 w-20 bg-swiggy-orange rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Python Power Pack",
                description: "Data manipulation, analysis & visualization toolkit",
                icon: <Code size={24} />,
                items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
                color: "bg-blue-500",
              },
              {
                name: "SQL Sauce",
                description: "Database querying & management expertise",
                icon: <Database size={24} />,
                items: ["PostgreSQL", "Query Optimization", "Database Design", "Data Extraction"],
                color: "bg-green-500",
              },
              {
                name: "ML Mastery Kit",
                description: "Machine learning algorithms & techniques",
                icon: <Sparkles size={24} />,
                items: ["Scikit-Learn", "TensorFlow", "PyTorch", "Feature Engineering"],
                color: "bg-purple-500",
              },
              {
                name: "BI Brilliance",
                description: "Business intelligence & reporting tools",
                icon: <BarChart size={24} />,
                items: ["Power BI", "Dashboard Design", "Data Storytelling", "KPI Tracking"],
                color: "bg-red-500",
              },
              {
                name: "Automation Arsenal",
                description: "Process automation & efficiency tools",
                icon: <Zap size={24} />,
                items: ["Python Scripting", "Task Scheduling", "Workflow Optimization", "Time Saving"],
                color: "bg-yellow-500",
              },
              {
                name: "Statistics Special",
                description: "Statistical analysis & probability expertise",
                icon: <TrendingUp size={24} />,
                items: ["Hypothesis Testing", "Regression Analysis", "Probability Models", "A/B Testing"],
                color: "bg-indigo-500",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group"
              >
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className={`${skill.color} p-2 rounded-lg text-white mr-3`}>{skill.icon}</div>
                      <div>
                        <h3 className="font-bold text-base">{skill.name}</h3>
                        <p className="text-xs text-gray-500">{skill.description}</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-swiggy-orange/10 p-1.5 rounded-full text-swiggy-orange"
                    >
                      <ShoppingCart size={14} />
                    </motion.button>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {skill.items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="text-swiggy-orange mr-2 text-xs">•</span>
                        <span className="text-gray-700 text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-3 flex justify-between items-center border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500">Expertise Level</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < 4 ? "text-swiggy-orange fill-swiggy-orange" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>

                <div className="h-1 w-full bg-gray-200 group-hover:bg-swiggy-orange transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 w-full bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-swiggy-orange mb-3">Projects Served Fresh</h2>
            <div className="h-1 w-20 bg-swiggy-orange rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Car Price Prediction",
                description:
                  "Predicted selling prices of cars from a dataset of 19,000+ car records using 8 ML regression models.",
                icon: <Car size={24} />,
                github: "https://github.com/madhurima-dutta/Car_Price_Predictor",
                demo: "https://car-price-prediction-deployment.streamlit.app/",
                tags: ["Python", "ML", "Streamlit"],
                image: "/images/car-price-prediction.png",
              },
              {
                title: "Stock Risk Analysis",
                description:
                  "Analyzed stock data of top 4 Indian tech companies using time series analysis with 95% accuracy.",
                icon: <TrendingUp size={24} />,
                github: "https://github.com/madhurima-dutta/Stock_Market_Analysis_and_Prediction",
                tags: ["Python", "Time Series", "Visualization"],
                image: "/images/stock-market-analysis.png",
              },
              {
                title: "Inventory Management",
                description:
                  "Designed and implemented a PostgreSQL-based inventory management system with 10+ normalized tables.",
                icon: <Package size={24} />,
                github: "https://github.com/madhurima-dutta/Inventory-Management-System",
                tags: ["SQL", "Database Design", "PostgreSQL"],
                image: "/images/inventory-management.png",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl overflow-hidden group relative"
              >
                {/* Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Animated Purple Checkmark */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2, type: "spring", bounce: 0.5 }}
                  className="absolute top-3 left-3 z-20"
                >
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    >
                      <motion.path
                        d="M20 6L9 17L4 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Animated HOT & FRESH Badge */}
                <motion.div
                  initial={{ scale: 0, y: -20 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2, type: "spring", bounce: 0.6 }}
                  className="absolute top-3 right-3 z-20"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                    className="bg-swiggy-orange text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-lg"
                  >
                    HOT & FRESH
                  </motion.div>
                </motion.div>

                {/* Project Content */}
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-base text-gray-800">{project.title}</h3>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-swiggy-orange"
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                        className="bg-swiggy-orange/10 text-swiggy-orange text-xs font-medium px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="bg-gray-50 p-3 flex justify-between items-center border-t border-gray-100">
                  <div className="flex items-center">
                    <Truck className="text-swiggy-orange mr-1.5" size={14} />
                    <span className="text-xs font-medium text-gray-600">Fast Delivery</span>
                  </div>

                  <div className="flex space-x-2">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 text-white p-1.5 rounded-full hover:bg-gray-700 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={14} />
                      </motion.a>
                    )}

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-swiggy-orange text-white p-1.5 rounded-full hover:bg-swiggy-orange/90 transition-colors"
                        title="View Live Demo"
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (project.demo) {
                          window.open(project.demo, "_blank")
                        } else if (project.github) {
                          window.open(project.github, "_blank")
                        }
                      }}
                      className="bg-swiggy-orange text-white text-xs font-bold px-3 py-1.5 rounded-full hover:bg-swiggy-orange/90 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Swiggy Section */}
      <section id="why-swiggy" className="py-16 w-full bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-swiggy-orange mb-3">Why Swiggy & Me = Perfect Combo</h2>
            <div className="h-1 w-20 bg-swiggy-orange rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side - Swiggy App Screenshots */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-5 overflow-hidden"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Heart className="text-swiggy-orange mr-2" size={20} />
                <span>Swiggy Perks I Love</span>
              </h3>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="flex items-center bg-swiggy-orange/5 p-3 rounded-lg"
                >
                  <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Lightning Fast Delivery</h4>
                    <p className="text-xs text-gray-600">Just like my data insights - delivered hot and fresh!</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="flex items-center bg-swiggy-orange/5 p-3 rounded-lg"
                >
                  <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                    <Star size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Amazing Discounts</h4>
                    <p className="text-xs text-gray-600">60% off on food, 100% value on my data analysis!</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="flex items-center bg-swiggy-orange/5 p-3 rounded-lg"
                >
                  <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                    <Utensils size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Quality Selection</h4>
                    <p className="text-xs text-gray-600">Premium restaurants, premium data insights!</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Swiggy Receipt */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-5 overflow-hidden"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Truck className="text-swiggy-orange mr-2" size={20} />
                <span>My Swiggy Loyalty Receipt</span>
              </h3>

              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-dashed border-gray-300">
                  <div>
                    <h4 className="font-bold text-base">Madhurima's Order</h4>
                    <p className="text-xs text-gray-500">Order #DATA123456</p>
                  </div>
                  <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">DELIVERED</div>
                </div>

                <div className="space-y-3 mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="flex justify-between"
                  >
                    <span className="font-medium text-sm">Data Spend</span>
                    <span className="font-bold text-sm">Unlimited</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="flex justify-between"
                  >
                    <span className="font-medium text-sm">Discount Analysis</span>
                    <span className="font-bold text-sm">Mastered</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="flex justify-between"
                  >
                    <span className="font-medium text-sm">Speed</span>
                    <span className="font-bold text-sm">Hot & Fast</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="flex justify-between text-green-600"
                  >
                    <span className="font-medium text-sm">Loyalty Discount</span>
                    <span className="font-bold text-sm">-40% Manual Work</span>
                  </motion.div>
                </div>

                <div className="pt-3 border-t border-dashed border-gray-300">
                  <div className="flex justify-between font-bold text-base">
                    <span>Total Value</span>
                    <span className="text-swiggy-orange">Priceless</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    "My daily Swiggy orders inspire my data analytics approach - fast, accurate, and always satisfying!"
                  </p>
                </div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -top-3 -right-3 bg-swiggy-orange text-white font-bold px-3 py-1 rounded-full transform rotate-12 text-xs"
                >
                  TOP CUSTOMER
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ML Race Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 bg-white rounded-xl shadow-md p-5"
          >
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Zap className="text-swiggy-orange mr-2" size={18} />
              <span>My ML Models Are Faster Than Express Delivery</span>
            </h3>

            <div className="relative h-20 bg-gray-100 rounded-lg overflow-hidden mb-3">
              <div className="absolute top-1/2 left-4 right-4 h-1 bg-gray-300 rounded transform -translate-y-1/2">
                <div className="absolute left-0 -top-2 w-3 h-3 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  S
                </div>
                <div className="absolute right-0 -top-2 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  F
                </div>
              </div>

              {/* Swiggy Rider */}
              <motion.div
                initial={{ x: "0%" }}
                animate={raceStarted ? { x: "calc(100% - 40px)" } : { x: "0%" }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute top-4 left-4 flex items-center"
              >
                <div className="w-6 h-6 bg-swiggy-orange rounded-full flex items-center justify-center">🛵</div>
                <span className="ml-1 text-xs font-bold bg-white px-1.5 py-0.5 rounded shadow">Swiggy</span>
              </motion.div>

              {/* ML Model */}
              <motion.div
                initial={{ x: "0%" }}
                animate={raceStarted ? { x: "calc(100% - 40px)" } : { x: "0%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute bottom-4 left-4 flex items-center"
              >
                <motion.div
                  animate={raceStarted ? { rotate: [0, 360, 720] } : {}}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                >
                  🤖
                </motion.div>
                <span className="ml-1 text-xs font-bold bg-white px-1.5 py-0.5 rounded shadow">ML Model</span>
              </motion.div>
            </div>

            <div className="flex justify-center">
              <motion.button
                onClick={() => setRaceStarted(!raceStarted)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-swiggy-orange text-white font-bold py-1.5 px-4 rounded-full text-xs"
              >
                {raceStarted ? "Reset Race" : "Start Race"}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Hire Section */}
      <section id="why-hire" className="py-16 w-full bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-swiggy-orange mb-3">🍔 Why Hire Madhurima?</h2>
            <div className="h-1 w-20 bg-swiggy-orange rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                text: "I deliver insights faster than Swiggy delivers food!",
                icon: <Clock size={20} />,
                emoji: "⚡",
              },
              {
                text: "My ML models have a better success rate than your favorite restaurant",
                icon: <Award size={20} />,
                emoji: "🏆",
              },
              {
                text: "I automate repetitive tasks like Swiggy automates your regular orders",
                icon: <Zap size={20} />,
                emoji: "🤖",
              },
              {
                text: "My data visualizations are more colorful than a Swiggy menu",
                icon: <BarChart size={20} />,
                emoji: "📊",
              },
              {
                text: "I'm as reliable as that 'Order Delivered' notification",
                icon: <CheckCircle size={20} />,
                emoji: "✅",
              },
              {
                text: "I handle messy data better than Swiggy handles rainy day deliveries",
                icon: <Database size={20} />,
                emoji: "🌧️",
              },
              {
                text: "My code is as clean as a 5-star restaurant kitchen",
                icon: <Code size={20} />,
                emoji: "👨‍🍳",
              },
              {
                text: "I'm as adaptable as Swiggy's dynamic pricing algorithm",
                icon: <TrendingUp size={20} />,
                emoji: "📈",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-swiggy-orange flex items-center"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
                  className="text-2xl mr-3"
                >
                  {item.emoji}
                </motion.div>
                <div className="flex-grow">
                  <p className="font-medium text-sm">{item.text}</p>
                </div>
                <div className="text-swiggy-orange ml-3">{item.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 w-full bg-swiggy-orange">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Let's Get Cooking!</h2>
            <p className="text-lg text-white/90">Ready to add some data spice to your business recipe?</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <Image
                    src="/images/swiggy-rider.png"
                    alt="Swiggy Rider"
                    width={180}
                    height={180}
                    className="mx-auto mb-6"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-white"
                  >
                    <p className="text-base font-medium mb-2">Data insights delivered to your doorstep!</p>
                    <p className="text-sm opacity-80">
                      Just like your favorite Swiggy order, but with actionable business intelligence.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-swiggy-dark">Contact Options</h3>

                <div className="space-y-4">
                  <motion.a
                    href="mailto:madhurimadutta2001@gmail.com"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center p-3 bg-swiggy-orange/5 rounded-lg hover:bg-swiggy-orange/10 transition-colors"
                  >
                    <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Email Me</h4>
                      <p className="text-xs text-gray-600">madhurimadutta2001@gmail.com</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://madhurima.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center p-3 bg-swiggy-orange/5 rounded-lg hover:bg-swiggy-orange/10 transition-colors"
                  >
                    <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                      <ExternalLink size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Portfolio</h4>
                      <p className="text-xs text-gray-600">madhurima.vercel.app</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/madhu-rima-dutta"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center p-3 bg-swiggy-orange/5 rounded-lg hover:bg-swiggy-orange/10 transition-colors"
                  >
                    <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                      <Linkedin size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">LinkedIn</h4>
                      <p className="text-xs text-gray-600">madhu-rima-dutta</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/madhurima-dutta"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center p-3 bg-swiggy-orange/5 rounded-lg hover:bg-swiggy-orange/10 transition-colors"
                  >
                    <div className="bg-swiggy-orange text-white p-2 rounded-full mr-3 flex-shrink-0">
                      <Github size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">GitHub</h4>
                      <p className="text-xs text-gray-600">madhurima-dutta</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8 text-center text-white"
          >
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Madhurima Dutta. All rights reserved.</p>
            <p className="text-xs opacity-60 mt-1">
              Inspired by Swiggy's amazing service and design. Not affiliated with Swiggy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
