"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  SiJavascript,
  SiCplusplus,
  SiC,
  SiPython,
  SiGithub,
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiReact,
  SiSpringboot,
  SiGnubash,
  SiTensorflow,
  SiOpenai,
  SiIntellijidea, // Added as a replacement for VS Code
} from "react-icons/si"
import { RiRobot2Fill } from "react-icons/ri"

interface FloatingIcon {
  id: number
  Icon: React.ElementType
  x: number
  y: number
  size: number
  duration: number
  delay: number
  rotate: number
  opacity: number
  color: string
}

export default function FloatingBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  })

  useEffect(() => {
    // Handle window resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Generate icons
    const techIcons = [
      { Icon: SiJavascript, color: "#F7DF1E" },
      { Icon: SiCplusplus, color: "#00599C" },
      { Icon: SiC, color: "#A8B9CC" },
      { Icon: SiPython, color: "#3776AB" },
      { Icon: SiGithub, color: "#FFFFFF" },
      { Icon: SiOpenjdk, color: "#ED8B00" },
      { Icon: SiHtml5, color: "#E34F26" },
      { Icon: SiCss3, color: "#1572B6" },
      { Icon: SiReact, color: "#61DAFB" },
      { Icon: SiSpringboot, color: "#6DB33F" },
      { Icon: SiIntellijidea, color: "#000000" }, // Replaced VS Code with IntelliJ IDEA
      { Icon: SiGnubash, color: "#4EAA25" },
      { Icon: SiTensorflow, color: "#FF6F00" },
      { Icon: SiOpenai, color: "#412991" },
      { Icon: RiRobot2Fill, color: "#8A2BE2" },
    ]

    const generateIcons = () => {
      return Array.from({ length: 30 }, (_, i) => {
        const { Icon, color } = techIcons[i % techIcons.length]
        const size = Math.random() * 30 + 20

        return {
          id: i,
          Icon,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          size,
          duration: Math.random() * 100 + 100,
          delay: Math.random() * 20,
          rotate: Math.random() * 360,
          opacity: Math.random() * 0.3 + 0.1,
          color,
        }
      })
    }

    setIcons(generateIcons())

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [dimensions.width, dimensions.height])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute"
          initial={{
            x: icon.x,
            y: icon.y,
            opacity: 0,
            rotate: icon.rotate,
          }}
          animate={{
            x: [icon.x, icon.x + Math.random() * 200 - 100, icon.x],
            y: [icon.y, icon.y - Math.random() * 300 - 100, icon.y],
            opacity: [0, icon.opacity, 0],
            rotate: [icon.rotate, icon.rotate + (Math.random() > 0.5 ? 180 : -180)],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{
            filter: `blur(${Math.random() > 0.8 ? 2 : 0}px) drop-shadow(0 0 8px ${icon.color}80)`,
          }}
        >
          <icon.Icon
            size={icon.size}
            color={icon.color}
            style={{ opacity: icon.opacity }}
            className="transition-all duration-1000"
          />
        </motion.div>
      ))}

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1118] via-transparent to-[#0a1118] opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1118] via-transparent to-[#0a1118] opacity-90"></div>
    </div>
  )
}
