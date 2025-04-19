"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function TimelineSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineEvents = [
    {
      time: "9:00 AM",
      title: "Kick-off",
      description: "Registration, team formation, and problem statement release",
      icon: "🚀",
    },
    {
      time: "12:00 PM",
      title: "Mid-day Check-in",
      description: "Progress review and mentorship session",
      icon: "⏱️",
    },
    {
      time: "6:00 PM",
      title: "Submission Starts",
      description: "Teams can begin submitting their projects",
      icon: "📤",
    },
    {
      time: "9:00 PM",
      title: "Hackathon Ends",
      description: "Final submissions and closing ceremony",
      icon: "🏆",
    },
  ]

  return (
    <section id="timeline" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 to-transparent opacity-20"></div>

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Timeline
        </motion.h2>

        <div ref={ref} className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 md:translate-x-[-50%] z-0"
          ></motion.div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow:
                      index % 2 === 0
                        ? "0 10px 25px -5px rgba(139, 92, 246, 0.2)"
                        : "0 10px 25px -5px rgba(34, 211, 238, 0.2)",
                  }}
                  className={`bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-${
                    index % 2 === 0 ? "purple" : "cyan"
                  }-500/50 transition-all duration-300 max-w-sm w-full`}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{event.icon}</span>
                    <div className={`text-lg font-bold mb-0 text-${index % 2 === 0 ? "purple" : "cyan"}-400`}>
                      {event.time}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </motion.div>
              </div>

              {/* Fixed the circle alignment by using absolute positioning with transform */}
              <div className="absolute left-0 md:left-1/2 top-6 md:top-8 flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.2 }}
                  className="w-6 h-6 rounded-full bg-gray-900 border-4 border-purple-500 md:translate-x-[-50%] z-10"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(139, 92, 246, 0)",
                        "0 0 10px rgba(139, 92, 246, 0.5)",
                        "0 0 0px rgba(139, 92, 246, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    className="w-full h-full rounded-full"
                  ></motion.div>
                </motion.div>
              </div>

              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
