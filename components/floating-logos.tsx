"use client"

import { useEffect, useRef } from "react"
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiDocker,
  SiTensorflow,
  SiMongodb,
  SiFirebase,
  SiAmazonwebservices,
  SiGooglecloud,
} from "react-icons/si"
import type { JSX } from "react"

interface Logo {
  icon: JSX.Element
  x: number
  y: number
  size: number
  speed: number
  direction: { x: number; y: number }
  opacity: number
}

export default function FloatingLogos() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const logosRef = useRef<Logo[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create logos
    const logoComponents = [
      <SiJavascript key="javascript" color="#F7DF1E" />,
      <SiPython key="python" color="#3776AB" />,
      <SiCplusplus key="cplusplus" color="#00599C" />,
      <SiReact key="react" color="#61DAFB" />,
      <SiNodedotjs key="nodejs" color="#339933" />,
      <SiGithub key="github" color="#FFFFFF" />,
      <SiDocker key="docker" color="#2496ED" />,
      <SiTensorflow key="tensorflow" color="#FF6F00" />,
      <SiMongodb key="mongodb" color="#47A248" />,
      <SiFirebase key="firebase" color="#FFCA28" />,
      <SiAmazonwebservices key="amazonaws" color="#FF9900" />,
      <SiGooglecloud key="googlecloud" color="#4285F4" />,
    ]

    logosRef.current = Array.from({ length: 20 }, (_, i) => {
      const size = Math.random() * 30 + 20
      return {
        icon: logoComponents[i % logoComponents.length],
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speed: Math.random() * 0.5 + 0.2,
        direction: {
          x: Math.random() * 2 - 1,
          y: Math.random() * 2 - 1,
        },
        opacity: Math.random() * 0.5 + 0.1,
      }
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      logosRef.current.forEach((logo) => {
        // Move logo
        logo.x += logo.direction.x * logo.speed
        logo.y += logo.direction.y * logo.speed

        // Bounce off edges
        if (logo.x < 0 || logo.x > canvas.width) {
          logo.direction.x *= -1
        }

        if (logo.y < 0 || logo.y > canvas.height) {
          logo.direction.y *= -1
        }

        // Draw logo (placeholder - in a real implementation we'd use a more complex method to render React components to canvas)
        ctx.globalAlpha = logo.opacity
        ctx.fillStyle = "#8A2BE2" // Default color for placeholder
        ctx.beginPath()
        ctx.arc(logo.x, logo.y, logo.size / 2, 0, Math.PI * 2)
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}
