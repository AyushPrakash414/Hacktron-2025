"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const devfolioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulating Devfolio button integration
    const script = document.createElement("script")
    script.src = "https://apply.devfolio.co/v2/sdk.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

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

  const glowVariants = {
    initial: { boxShadow: "0 0 0px rgba(139, 92, 246, 0)" },
    animate: {
      boxShadow: [
        "0 0 10px rgba(139, 92, 246, 0.3)",
        "0 0 20px rgba(139, 92, 246, 0.5)",
        "0 0 10px rgba(139, 92, 246, 0.3)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118] via-[#0a1118]/90 to-[#0a1118] z-0"></div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent animate-pulse"></div>
        <div
          className="absolute inset-0 bg-gradient-radial from-cyan-900/20 via-transparent to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-4 z-10 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative inline-block"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl"
            ></motion.div>
            <div className="rounded-full overflow-hidden relative z-10 border-2 border-purple-500/50">
              <Image src="/logo.png" alt="Hacktron Logo" width={180} height={180} className="mx-auto" />
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 animate-gradient"
        >
          Hacktron 2025
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-4">
          Sunday, 27th April | JUET Campus
        </motion.p>

        <motion.p variants={itemVariants} className="text-xl md:text-3xl font-light text-gray-200 mb-8">
          <span className="text-purple-400">"</span>12 Hours. One Campus. Infinite Innovation.
          <span className="text-cyan-400">"</span>
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <div ref={devfolioRef} className="flex justify-center">
            <motion.div variants={glowVariants} initial="initial" animate="animate" className="rounded-lg">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                Register on Devfolio
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Animated code brackets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 text-[20rem] font-mono text-purple-500/20 select-none"
        >
          <div className="relative">
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -left-20 top-0"
            >
              {"<"}
            </motion.span>
            <motion.span
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -right-20 top-0"
            >
              {"/>"}
            </motion.span>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1118] to-transparent z-10"></div>
    </section>
  )
}
