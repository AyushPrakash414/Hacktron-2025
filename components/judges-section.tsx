"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function JudgesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const judges = [
    {
      name: "Dr. Ayush Prakash tiwari",
      role: "AI Research Scientist",
      company: "Google Research",
      bio: "Expert in machine learning and natural language processing with over 15 years of experience in AI research.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Prof. James Wilson",
      role: "Department Head",
      company: "Computer Science, MIT",
      bio: "Leading researcher in distributed systems and blockchain technology with numerous publications in top-tier conferences.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechInnovate",
      bio: "Serial entrepreneur with 3 successful tech startups. Specializes in scalable architecture and cloud solutions.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Raj Mehta",
      role: "Director of Engineering",
      company: "Microsoft",
      bio: "Leads a team of 200+ engineers working on cutting-edge cloud technologies and developer tools.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Emma Rodriguez",
      role: "Venture Capitalist",
      company: "Sequoia Capital",
      bio: "Invested in over 30 successful tech startups. Focuses on identifying disruptive technologies and innovative business models.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Dr. Kwame Osei",
      role: "Professor",
      company: "Stanford University",
      bio: "Award-winning researcher in human-computer interaction and accessibility technologies.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="judges" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 to-transparent opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Meet Our Judges
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {judges.map((judge, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden h-full hover:border-purple-500/30 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-300">
                      <Image
                        src={judge.image || "/placeholder.svg"}
                        alt={judge.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">{judge.name}</h3>
                    <p className="text-purple-400 text-sm mb-1">{judge.role}</p>
                    <p className="text-gray-400 text-sm mb-4">{judge.company}</p>
                  </div>
                  <p className="text-gray-300 text-center flex-grow">{judge.bio}</p>
                  <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-800">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${judge.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${judge.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${judge.name}'s GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
