"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Instagram } from "lucide-react"

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Event Lead",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "Technical Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Arjun Singh",
      role: "Marketing Lead",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Neha Gupta",
      role: "Sponsorship Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Vikram Reddy",
      role: "Operations Manager",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Ananya Desai",
      role: "Design Lead",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Rohan Joshi",
      role: "Web Developer",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Meera Kapoor",
      role: "Content Creator",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Karan Malhotra",
      role: "Logistics Coordinator",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "Divya Choudhary",
      role: "Participant Relations",
      image: "/placeholder.svg?height=200&width=200",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
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
    <section id="team" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-cyan-900/10 to-transparent opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient"
        >
          Core Team
        </motion.h2>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group h-full">
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/30 group-hover:border-cyan-500/60 transition-all duration-300">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4 mt-2">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-4 w-4" />
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
