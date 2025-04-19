"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock, Unlock } from "lucide-react"

export default function ProblemStatementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isRevealed, setIsRevealed] = useState(false)

  // Set the reveal date to April 27, 2025
  const revealDate = new Date("2025-04-27T09:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = revealDate - now

      if (distance < 0) {
        clearInterval(timer)
        setIsRevealed(true)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [revealDate])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  return (
    <section id="problem-statement" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 to-transparent opacity-20"></div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto text-center px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Problem Statement
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-10">
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
              <div className="text-sm text-gray-400">Days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
              <div className="text-sm text-gray-400">Hours</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
              <div className="text-sm text-gray-400">Seconds</div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden">
            <CardContent className="p-8">
              {isRevealed ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-center mb-4">
                    <Unlock className="h-8 w-8 text-green-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white">Problem Statement Revealed!</h3>
                  </div>
                  <div className="space-y-4 text-left">
                    <h4 className="text-lg font-medium text-purple-400">
                      Challenge 1: AI-Powered Healthcare Assistant
                    </h4>
                    <p className="text-gray-300">
                      Develop an AI-powered healthcare assistant that can help users track their health metrics, provide
                      personalized health recommendations, and connect them with healthcare providers when necessary.
                    </p>

                    <h4 className="text-lg font-medium text-cyan-400">Challenge 2: Sustainable Smart City Solution</h4>
                    <p className="text-gray-300">
                      Create an innovative solution that addresses a specific urban challenge (waste management, energy
                      efficiency, transportation, etc.) using IoT, data analytics, or other technologies to make cities
                      more sustainable and livable.
                    </p>

                    <h4 className="text-lg font-medium text-purple-400">
                      Challenge 3: Educational Technology for Inclusive Learning
                    </h4>
                    <p className="text-gray-300">
                      Design an educational technology solution that makes learning more accessible and effective for
                      students with diverse needs, including those with disabilities or limited access to resources.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-gray-400 text-sm">
                      Choose one of these challenges or propose your own idea that aligns with the hackathon themes.
                      Remember to focus on innovation, feasibility, and impact!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="py-10 flex flex-col items-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Lock className="h-16 w-16 text-gray-500 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4">Problem Statement Locked</h3>
                  <p className="text-gray-400 max-w-lg mb-6">
                    The problem statement will be revealed on April 27, 2025, at 9:00 AM. Stay tuned for exciting
                    challenges that will test your creativity and technical skills!
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
                    disabled
                  >
                    Waiting for Reveal
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  )
}
