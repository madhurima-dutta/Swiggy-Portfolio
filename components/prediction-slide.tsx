"use client"

import { motion } from "framer-motion"
import { Brain, Target, BarChart3, TrendingUp } from "lucide-react"
import Slide from "./slide"

const models = [
  {
    name: "Decision Tree",
    description: "Classification model for term deposit subscriptions",
    score: "87.5%",
    icon: <Brain className="h-6 w-6 text-swiggy-orange" />,
  },
  {
    name: "Random Forest",
    description: "Ensemble model with improved accuracy",
    score: "89.2%",
    icon: <Target className="h-6 w-6 text-swiggy-orange" />,
  },
  {
    name: "Logistic Regression",
    description: "Probabilistic classification approach",
    score: "91.01%",
    icon: <TrendingUp className="h-6 w-6 text-swiggy-orange" />,
  },
]

export default function PredictionSlide() {
  return (
    <Slide id="prediction" title="Prediction is My Profession" bgColor="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Engineered predictive machine learning pipelines with impressive F1-scores
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <ModelCard key={index} model={model} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 text-swiggy-orange mr-2" />
            ML Pipeline Highlights
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-start">
              <span className="text-swiggy-orange mr-2">•</span>
              Applied resampling techniques to address class imbalance
            </li>
            <li className="flex items-start">
              <span className="text-swiggy-orange mr-2">•</span>
              Used feature engineering to extract actionable marketing insights
            </li>
            <li className="flex items-start">
              <span className="text-swiggy-orange mr-2">•</span>
              Optimized targeting and resource allocation through data-driven decisions
            </li>
          </ul>
        </motion.div>
      </div>
    </Slide>
  )
}

function ModelCard({ model, index }: { model: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{model.name}</h3>
          <div className="p-2 bg-swiggy-orange/10 rounded-full">{model.icon}</div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{model.description}</p>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">F1-Score</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Target: 85%</span>
          </div>
          <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: model.score }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
              className="h-full bg-swiggy-orange rounded-full"
            />
          </div>
          <div className="mt-2 text-right">
            <span className="font-bold text-swiggy-orange">{model.score}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
