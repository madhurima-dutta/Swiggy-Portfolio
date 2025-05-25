"use client"

import { motion } from "framer-motion"
import { Car, TrendingUp, Package, Github, ExternalLink } from "lucide-react"
import Slide from "./slide"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Advanced Vehicle Valuation System",
    description: "Predicted selling prices of cars from a dataset of 19,000+ car records using 8 ML regression models.",
    icon: <Car className="h-6 w-6 text-swiggy-orange" />,
    highlights: [
      "KNN model delivered best results with highest R2 score (0.0207)",
      "Built complete ML pipeline with preprocessing and feature selection",
      "Deployed via Streamlit for real-time predictions",
    ],
    github: "https://github.com/madhurima-dutta/vehicle-valuation",
    demo: "https://vehicle-valuation.streamlit.app/",
    year: "2025",
  },
  {
    title: "Risk Assessment of Top Indian Tech Companies",
    description: "Analyzed stock data of top 4 Indian tech companies using time series analysis.",
    icon: <TrendingUp className="h-6 w-6 text-swiggy-orange" />,
    highlights: [
      "Used Numpy and Pandas for frequency analysis and trend identification",
      "Created visualizations using Seaborn and Matplotlib",
      "Achieved 95% accuracy in predicting maximum losses via Monte Carlo Simulation",
    ],
    github: "https://github.com/madhurima-dutta/risk-assessment",
    year: "2024",
  },
  {
    title: "Inventory Management System",
    description: "Designed and implemented a PostgreSQL-based inventory management system.",
    icon: <Package className="h-6 w-6 text-swiggy-orange" />,
    highlights: [
      "Created 10+ normalized tables for managing products and transactions",
      "Enabled efficient inventory tracking and sales analysis",
      "Supported 3 user roles (billing, manager, owner)",
    ],
    github: "https://github.com/madhurima-dutta/inventory-management",
    year: "2024",
  },
]

export default function ProjectsSlide() {
  return (
    <Slide id="projects" title="Projects Served Fresh" bgColor="bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of data-driven projects with real-world impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </Slide>
  )
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <div className="p-2 bg-swiggy-orange/10 rounded-full flex-shrink-0 ml-2">{project.icon}</div>
        </div>

        <div className="mb-2 text-xs text-gray-500 dark:text-gray-400">{project.year}</div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((highlight: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
            >
              <span className="text-swiggy-orange mr-2">•</span>
              {highlight}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="h-4 w-4 mr-2" />
            GitHub
          </a>
        </Button>

        {project.demo && (
          <Button variant="default" size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  )
}
