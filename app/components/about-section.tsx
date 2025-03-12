"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Calendar } from "lucide-react"
import { aboutMe } from "../lib/data"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            About Me
          </h2>

          <div className="space-y-6 text-gray-300">
            {aboutMe.bio.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3 text-blue-400" />
              <span>{aboutMe.location}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-3 text-blue-400" />
              <a href={`mailto:${aboutMe.email}`} className="hover:text-blue-400 transition-colors">
                {aboutMe.email}
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Calendar className="w-5 h-5 mr-3 text-blue-400" />
              <span>{aboutMe.availability}</span>
            </div>
          </div>
        </div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              style={{ filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.2))" }}
            >
              {/* Vector illustration of a person */}
              <circle cx="100" cy="70" r="40" className="fill-blue-500/20 stroke-blue-400" strokeWidth="2" />
              <path
                d="M40 180 C40 120 160 120 160 180"
                className="fill-blue-500/20 stroke-blue-400"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Additional decorative elements */}
              <circle cx="85" cy="65" r="4" className="fill-blue-400" />
              <circle cx="115" cy="65" r="4" className="fill-blue-400" />
              <path
                d="M85 80 Q100 90 115 80"
                className="fill-none stroke-blue-400"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

