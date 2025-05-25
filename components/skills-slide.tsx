"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Code, Database, BarChart, Calculator, Laptop, FileSpreadsheet } from "lucide-react"
import Slide from "./slide"

const skills = [
  {
    category: "Languages & Tools",
    items: ["Python", "SQL", "Latex", "Jupyter Notebook", "VS Code", "Google Colab", "Github", "Kaggle"],
    icon: <Code className="h-6 w-6 text-swiggy-orange" />,
  },
  {
    category: "BI & Reporting Tools",
    items: ["Power BI", "MS Excel", "MS Word", "MS Powerpoint"],
    icon: <BarChart className="h-6 w-6 text-swiggy-orange" />,
  },
  {
    category: "Data Analysis & ML",
    items: [
      "EDA",
      "Feature Engineering",
      "Pandas",
      "Numpy",
      "Matplotlib",
      "Scikit-Learn",
      "Seaborn",
      "PyTorch",
      "TensorFlow",
    ],
    icon: <Calculator className="h-6 w-6 text-swiggy-orange" />,
  },
  {
    category: "Core Subjects",
    items: ["Linear Algebra", "Calculus", "Probability & Statistics"],
    icon: <Laptop className="h-6 w-6 text-swiggy-orange" />,
  },
  {
    category: "Databases & Deployment",
    items: ["PostgreSQL", "Streamlit"],
    icon: <Database className="h-6 w-6 text-swiggy-orange" />,
  },
]

export default function SkillsSlide() {
  return (
    <Slide id="skills" title="Skill Kitchen" bgColor="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A menu of expertise, served with precision and creativity
          </p>
        </motion.div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between border-b border-dashed border-gray-300 dark:border-gray-700 pb-4 mb-6">
            <h3 className="text-2xl font-bold text-swiggy-orange">Menu</h3>
            <FileSpreadsheet className="h-6 w-6 text-swiggy-orange" />
          </div>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <SkillCategory
                key={index}
                category={skill.category}
                items={skill.items}
                icon={skill.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  )
}

function SkillCategory({
  category,
  items,
  icon,
  delay,
}: {
  category: string
  items: string[]
  icon: React.ReactNode
  delay: number
}) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="border-b border-dashed border-gray-200 dark:border-gray-700 pb-6 last:border-0 last:pb-0"
    >
      <div className="flex items-center mb-4">
        <div className="mr-3">{icon}</div>
        <h4 className="text-xl font-semibold">{category}</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay + i * 0.05 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
