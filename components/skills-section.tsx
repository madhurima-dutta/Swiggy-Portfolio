"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Pizza, Utensils, Coffee, Sandwich } from "lucide-react"

const skills = [
  {
    category: "Data Analysis",
    items: ["Python", "Pandas", "NumPy", "SQL", "EDA", "Feature Engineering"],
    icon: <Pizza className="text-swiggy-orange" size={28} />,
  },
  {
    category: "Machine Learning",
    items: ["Scikit-Learn", "PyTorch", "TensorFlow", "Decision Trees", "Random Forest", "Logistic Regression"],
    icon: <Sandwich className="text-swiggy-orange" size={28} />,
  },
  {
    category: "Visualization",
    items: ["Matplotlib", "Seaborn", "Power BI", "Tableau", "Excel"],
    icon: <Coffee className="text-swiggy-orange" size={28} />,
  },
  {
    category: "Tools & Platforms",
    items: ["Jupyter Notebook", "VS Code", "Git", "GitHub", "Streamlit", "PostgreSQL"],
    icon: <Utensils className="text-swiggy-orange" size={28} />,
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-swiggy-orange">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="section-title mx-auto text-white">Skill Kitchen</h2>
          <p className="text-xl text-white max-w-2xl mx-auto mt-6">
            A menu of expertise, served with precision and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skills.map((skillGroup, index) => (
            <SkillCard
              key={index}
              category={skillGroup.category}
              items={skillGroup.items}
              icon={skillGroup.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-3xl mx-auto text-center"
        >
          <h3 className="text-xl font-bold mb-4">Projects Served Fresh</h3>
          <p className="text-gray-600 mb-4">
            Just like Swiggy delivers a variety of cuisines, I've delivered various data projects:
          </p>
          <ul className="text-left space-y-2 max-w-xl mx-auto">
            <motion.li
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex items-start"
            >
              <span className="food-bullet">•</span>
              <span className="text-gray-600">
                <span className="font-bold">Vehicle Valuation System</span> with 8 ML regression models
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
                <span className="font-bold">Risk Assessment</span> of top Indian tech companies
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
                <span className="font-bold">Inventory Management System</span> with PostgreSQL
              </span>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({
  category,
  items,
  icon,
  index,
}: {
  category: string
  items: string[]
  icon: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="swiggy-card bg-white"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">{icon}</div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
            className="flex items-center"
          >
            <span className="food-bullet">•</span>
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
