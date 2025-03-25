// "use client"

// import { useInView } from "react-intersection-observer"
// import { motion } from "framer-motion"
// import { Check } from "lucide-react"

// const pricingPlans = [
//   {
//     name: "Basic Service",
//     price: "$99",
//     description: "For simple plumbing needs",
//     features: ["Drain cleaning", "Faucet repair", "Toilet repair", "Basic inspection", "30-day warranty"],
//     popular: false,
//   },
//   {
//     name: "Standard Service",
//     price: "$199",
//     description: "Most popular for homeowners",
//     features: [
//       "All Basic services",
//       "Water heater maintenance",
//       "Pipe repair",
//       "Fixture installation",
//       "90-day warranty",
//     ],
//     popular: true,
//   },
//   {
//     name: "Premium Service",
//     price: "$349",
//     description: "Comprehensive plumbing solutions",
//     features: [
//       "All Standard services",
//       "Sewer line inspection",
//       "Water pressure regulation",
//       "Preventative maintenance",
//       "1-year warranty",
//     ],
//     popular: false,
//   },
// ]

// export default function Pricing() {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section id="pricing" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing Plans</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Transparent pricing with no hidden fees. Choose the service package that best fits your needs.
//           </p>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
//         </div>

//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         >
//           {pricingPlans.map((plan, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${
//                 plan.popular ? "border-2 border-blue-500 relative" : ""
//               }`}
//             >
//               {plan.popular && (
//                 <div className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
//                   Most Popular
//                 </div>
//               )}
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
//                 <p className="text-gray-600 mb-6">{plan.description}</p>
//                 <div className="mb-6">
//                   <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
//                   <span className="text-gray-600"> / service</span>
//                 </div>
//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature, i) => (
//                     <li key={i} className="flex items-center">
//                       <Check className="text-green-500 mr-2 h-5 w-5" />
//                       <span className="text-gray-600">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button
//                   className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
//                     plan.popular
//                       ? "bg-blue-600 text-white hover:bg-blue-700"
//                       : "bg-gray-100 text-gray-800 hover:bg-gray-200"
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="text-center mt-12 text-gray-600">
//           <p>
//             Need a custom solution?{" "}
//             <a href="#contact" className="text-blue-600 font-medium hover:underline">
//               Contact us
//             </a>{" "}
//             for a personalized quote.
//           </p>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    id: "basic",
    name: "Basic Service",
    price: "$99",
    description: "For simple plumbing needs",
    features: ["Drain cleaning", "Faucet repair", "Toilet repair", "Basic inspection", "30-day warranty"],
    popular: false,
  },
  {
    id: "standard",
    name: "Standard Service",
    price: "$199",
    description: "Most popular for homeowners",
    features: [
      "All Basic services",
      "Water heater maintenance",
      "Pipe repair",
      "Fixture installation",
      "90-day warranty",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Service",
    price: "$349",
    description: "Comprehensive plumbing solutions",
    features: [
      "All Standard services",
      "Sewer line inspection",
      "Water pressure regulation",
      "Preventative maintenance",
      "1-year warranty",
    ],
    popular: false,
  },
]

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedPlan, setSelectedPlan] = useState("standard")

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId)
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the service package that best fits your needs.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ${
                selectedPlan === plan.id ? "border-2 border-blue-500 relative scale-105" : ""
              } ${plan.popular && selectedPlan !== plan.id ? "border border-blue-200" : ""}`}
              onClick={() => handleSelectPlan(plan.id)}
            >
              {plan.popular && (
                <div className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 absolute top-0 right-0 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600"> / service</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="text-green-500 mr-2 h-5 w-5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    selectedPlan === plan.id
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {selectedPlan === plan.id ? "Select" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12 text-gray-600">
          <p>
            Need a custom solution?{" "}
            <a href="#contact" className="text-blue-600 font-medium hover:underline">
              Contact us
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </section>
  )
}


