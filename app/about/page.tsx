"use client"

import { motion } from "framer-motion"
import { MapPin, Mail, Calendar } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const aboutMe = {
    name: "Jayesh.D",
    title: "Full Stack Developer",
    bio: `Full-Stack Developer

I am a full-stack developer with expertise in React, React Native, and Supabase, specializing in building intuitive and scalable applications. My focus is on developing efficient, user-friendly solutions, leveraging modern tech for modern design .

Currently, I am working on:

A mental well-being platform integrating a chatbot (Google Gemini API) and a non-monetary token system for user engagement.

A teacher-focused attendance management app with role-based access, analytics, and Google Drive integration for report storage.
I am passionate about blockchain integration for social causes, creating impactful digital solutions, and continuously learning new technologies.

Let's build something amazing together! .`,
    location: "Mumbai, India",
    email: "jayeshdhore@gmail.com",
    availability: "Open to new opportunities",
  }

  return (
    <div
      className="min-h-screen pt-24 pb-16"
      style={{ background: "radial-gradient(circle at center, #1E40AF, #000000)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              About Me
            </h1>

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
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-image w-64 h-64 sm:w-80 sm:h-80 relative">
              <Image
                src="p.JPEG"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

