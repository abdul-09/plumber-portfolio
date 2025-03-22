"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Reliance Plumbing</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/plumbing-technician-checking-water-installation-with-notepad-ok-gesture.jpg-CDr7fswACLKZrRxrtkFz7DURDykrRb.jpeg"
              alt="Paul Lewis Plumbing Professional"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Plumbing Services You Can Trust</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the plumbing industry, Reliance Plumbing has established itself as
              Oklahoma's premier plumbing service provider. We take pride in delivering exceptional workmanship and
              customer service on every job, no matter how big or small.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of licensed and insured professionals is committed to solving your plumbing problems efficiently
              and effectively. We use the latest tools and techniques to ensure that your plumbing system operates at
              peak performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">15+</span>
                </div>
                <span className="text-gray-700">Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">100%</span>
                </div>
                <span className="text-gray-700">Satisfaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

