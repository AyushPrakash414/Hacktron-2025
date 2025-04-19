"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "All JUET students from any year and department can participate. You'll need a valid college ID for registration.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, student ID, and any other equipment you might need for your project. Food and refreshments will be provided throughout the event.",
    },
    {
      question: "Is prior experience required?",
      answer:
        "No, prior hackathon experience is not required. We welcome participants of all skill levels. However, basic programming knowledge will be helpful.",
    },
    {
      question: "How are teams formed?",
      answer:
        "Teams should consist of 2-4 members. You can form your team beforehand or find teammates during the event. Solo participation is allowed but not recommended.",
    },
    {
      question: "Will there be prizes?",
      answer:
        "Yes! We have exciting prizes for the winning teams across different categories. Details will be announced during the kickoff.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 to-transparent opacity-20"></div>

      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-purple-500/50 shadow-lg shadow-purple-500/10"
                  : "hover:border-purple-500/30"
              }`}
            >
              <motion.button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full p-6 text-left"
                whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-purple-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <motion.p
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-gray-300"
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
