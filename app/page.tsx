"use client"

import { ChevronDown } from "lucide-react"
import FloatingBackground from "@/components/floating-background"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GuidelinesSection from "@/components/guidelines-section"
import TimelineSection from "@/components/timeline-section"
import ThemesSection from "@/components/themes-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"
import ProblemStatementSection from "@/components/problem-statement-section"
import JudgesSection from "@/components/judges-section"
import TeamSection from "@/components/team-section"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#0a1118]">
      <div className="w-full relative overflow-hidden">
        <HeroSection />

        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center my-8">
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="group flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4 rounded-full mb-2 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110"
              >
                <ChevronDown className="h-6 w-6 text-white" />
              </motion.div>
              <span className="text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                Explore
              </span>
            </motion.a>
          </div>

          <AboutSection />
          <ProblemStatementSection />
          <GuidelinesSection />
          <TimelineSection />
          <ThemesSection />
          <JudgesSection />
          <TeamSection />
          <FaqSection />
        </div>

        <Footer />

        {/* Floating background elements */}
        <FloatingBackground />
      </div>
    </main>
  )
}
