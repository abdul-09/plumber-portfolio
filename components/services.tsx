"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Wrench, Droplets, Home, Building, ShowerHead, Thermometer } from "lucide-react"

const services = [
  {
    icon: <Wrench className="w-12 h-12 text-blue-600" />,
    title: "Repairs & Maintenance",
    description:
      "From leaky faucets to clogged drains, we handle all types of plumbing repairs and maintenance to keep your system running smoothly.",
  },
  {
    icon: <Droplets className="w-12 h-12 text-blue-600" />,
    title: "Water Heater Services",
    description:
      "Installation, repair, and maintenance of all types of water heaters, including tankless, gas, and electric models.",
  },
  {
    icon: <Home className="w-12 h-12 text-blue-600" />,
    title: "Residential Plumbing",
    description:
      "Complete plumbing solutions for homes, including new installations, renovations, and emergency repairs.",
  },
  {
    icon: <Building className="w-12 h-12 text-blue-600" />,
    title: "Commercial Plumbing",
    description:
      "Specialized plumbing services for businesses, restaurants, and commercial properties with minimal disruption.",
  },
  {
    icon: <ShowerHead className="w-12 h-12 text-blue-600" />,
    title: "Bathroom Remodeling",
    description:
      "Expert plumbing installation for bathroom renovations, including fixtures, showers, tubs, and toilets.",
  },
  {
    icon: <Thermometer className="w-12 h-12 text-blue-600" />,
    title: "Sewer & Drain Services",
    description:
      "Professional cleaning, repair, and replacement of sewer lines and drains using the latest technology.",
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of plumbing services to meet all your residential and commercial needs.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

