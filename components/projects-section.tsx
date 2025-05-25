"use client"

import { motion } from "framer-motion"
import { Car, TrendingUp, Package, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Advanced Vehicle Valuation System",
    description: "Predicted selling prices of cars from a dataset of 19,000+ car records using 8 ML regression models.",
    icon: <Car className="text-swiggy-orange" size={28} />,
    highlights: [
      "KNN model delivered best results with highest R2 score",
      "Built complete ML pipeline with preprocessing",
      "Deployed via Streamlit for real-time predictions",
    ],
    github: "https://github.com/madhurima-dutta/vehicle-valuation",
    demo: "https://vehicle-valuation.streamlit.app/",
    year: "2025",
  },
  {
    title: "Risk Assessment of Tech Companies",
    description: "Analyzed stock data of top 4 Indian tech companies using time series analysis.",
    icon: <TrendingUp className="text-swiggy-orange" size={28} />,
    highlights: [
      "Used Numpy and Pandas for frequency analysis",
      "Created visualizations using Seaborn and Matplotlib",
      "Achieved 95% accuracy in predicting maximum losses",
    ],
    github: "https://github.com/madhurima-dutta/risk-assessment",
    year: "2024",
  },
  {
    title: "Inventory Management System",
    description: "Designed and implemented a PostgreSQL-based inventory management system.",
    icon: <Package className="text-swiggy-orange" size={28} />,
    highlights: [
      "Created 10+ normalized tables for managing products",
      "Enabled efficient inventory tracking and sales analysis",
      "Supported 3 user roles (billing, manager, owner)",
    ],
    github: "https://github.com/madhurima-dutta/inventory-management",
    year: "2024",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto">Projects Served Fresh</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            A selection of data-driven projects with real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="swiggy-card h-full flex flex-col"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 bg-swiggy-light-orange rounded-full mr-3">{project.icon}</div>
        <div>
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-gray-500">{project.year}</p>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{project.description}</p>

      <div className="mb-6">
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {project.highlights.map((highlight: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
              className="flex items-start"
            >
              <span className="food-bullet">•</span>
              <span className="text-gray-600">{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex space-x-3">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-swiggy-dark font-medium hover:text-swiggy-orange transition-colors"
        >
          <Github size={18} className="mr-1" />
          GitHub
        </motion.a>

        {project.demo && (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-swiggy-orange font-medium"
          >
            <ExternalLink size={18} className="mr-1" />
            Live Demo
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
