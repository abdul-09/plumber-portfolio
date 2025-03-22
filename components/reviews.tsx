"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
    stars: 5,
    text: "Paul was incredibly professional and fixed our leaky faucet in no time. He explained everything clearly and left the area spotless. Highly recommend!",
  },
  {
    name: "Michael Rodriguez",
    role: "Business Owner",
    image: "/placeholder.svg?height=80&width=80",
    stars: 5,
    text: "We've been using Paul Lewis Plumbing for all our restaurant's plumbing needs for years. Always reliable, always professional, and always fair with pricing.",
  },
  {
    name: "Jennifer Williams",
    role: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
    stars: 4,
    text: "Paul installed a new water heater for us and did an excellent job. He was on time, worked efficiently, and made sure everything was working perfectly before leaving.",
  },
  {
    name: "David Thompson",
    role: "Property Manager",
    image: "/placeholder.svg?height=80&width=80",
    stars: 5,
    text: "As a property manager, I need reliable contractors. Paul Lewis Plumbing has never let me down. Fast response times and quality work every time.",
  },
]

export default function Reviews() {
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
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < review.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-50 px-6 py-3 rounded-full">
            <div className="flex mr-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-800 font-medium">4.9 out of 5 based on 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

