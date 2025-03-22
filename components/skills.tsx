"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const skills = [
  { name: "Plumbing Repairs", percentage: 98 },
  { name: "Water Heater Installation", percentage: 95 },
  { name: "Drain Cleaning", percentage: 97 },
  { name: "Pipe Installation", percentage: 94 },
  { name: "Bathroom Remodeling", percentage: 90 },
  { name: "Emergency Services", percentage: 99 },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 w-full bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With years of experience and continuous training, our team has developed exceptional skills in all areas of
            plumbing.
          </p>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <span className="text-blue-400">{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${skill.percentage}%` : 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

