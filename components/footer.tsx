"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, href: "https://github.com", label: "GitHub" },
    { icon: <Instagram className="h-6 w-6" />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Linkedin className="h-6 w-6" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="h-6 w-6" />, href: "mailto:hacktron@juet.ac.in", label: "Email" },
  ]

  return (
    <footer className="w-full py-12 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-purple-500 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-cyan-500 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-0 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <motion.div whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}>
                <Image src="/logo.png" alt="Hacktron Logo" width={60} height={60} className="mr-3" />
              </motion.div>
              <span className="text-xl font-bold text-white">Hacktron</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Hosted by Hacktron, JUET. Join us for 12 hours of coding, innovation, and fun!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-end">
              <p className="text-gray-400 mb-1">Contact: hacktron@juet.ac.in</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="https://devfolio.co"
                  className="text-purple-400 hover:text-purple-300 transition-colors bg-purple-900/20 px-4 py-2 rounded-lg hover:bg-purple-900/30"
                >
                  Register on Devfolio
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Hacktron. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
