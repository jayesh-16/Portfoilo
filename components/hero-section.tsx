"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-gray-200 to-gray-600">
          Hi, I'm Jayesh.D
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Full Stack Developer
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          I build responsive, user-friendly web applications with modern technologies. Specializing in React, Next.js,
          and Node.js to create seamless digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-in-out"
          >
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-all duration-300 ease-in-out"
          >
            Contact Me
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10"
      >
        <button
          onClick={scrollToContact}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}

