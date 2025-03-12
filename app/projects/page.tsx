"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Attendance Tracking",
    description:
      "A comprehensive attendance tracking system for educational institutions with role-based access, analytics, and Google Drive integration for report storage.",
    image: "2.png",
    technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    // No demo URL as it's still in development
    repoUrl: "https://github.com/jayesh-16/Attendence-Management",
  },
  {
    id: "project-2",
    title: "Blog Site",
    description:
      "A responsive blog platform with a clean, modern interface that allows for easy content management and user engagement.",
    image: "Rizz.png",
    technologies: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    demoUrl: "https://jayesh-16.github.io/The-Ultimate-Rizz/",
    repoUrl: "https://github.com/jayesh-16/The-Ultimate-Rizz",
  },
  {
    id: "project-3",
    title: "Book Management",
    description:
      "A digital library management system that helps users organize, track, and discover books with an intuitive interface.",
    image: "4.png",
    technologies: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    demoUrl: "https://jayesh-16.github.io/book-list/",
    repoUrl: "https://github.com/jayesh-16/book-list",
  },
  {
    id: "project-4",
    title: "Dice Game",
    description:
      "An interactive dice game with animations and multiplayer functionality, providing an engaging gaming experience.",
    image: "3.png",
    technologies: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    demoUrl: "https://jayesh-16.github.io/DiceGame/",
    repoUrl: "https://github.com/jayesh-16/DiceGame",
  },
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.technologies.includes(activeFilter))
    : projects

  // Only include the technologies we want to show
  const allowedTechnologies = [
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "TypeScript",
    "HTML/CSS",
    "JavaScript",
    "Bootstrap",
  ]
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies).filter((tech) => allowedTechnologies.includes(tech))),
  ).sort()

  return (
    <div
      className="min-h-screen pt-24 pb-16"
      style={{ background: "radial-gradient(circle at center, #1E40AF, #000000)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h1>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project showcases different skills and technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {activeFilter && (
              <Badge
                variant="outline"
                className="cursor-pointer bg-blue-900/30 hover:bg-blue-800/50 text-white border-blue-700"
                onClick={() => setActiveFilter(null)}
              >
                Clear Filter ×
              </Badge>
            )}
            {allTechnologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className={`cursor-pointer ${
                  activeFilter === tech
                    ? "bg-blue-600 text-white border-blue-500"
                    : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border-gray-700"
                }`}
                onClick={() => setActiveFilter(tech === activeFilter ? null : tech)}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Repository</span>
                      </a>
                    )}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="text-amber-400 text-sm italic">In Development</span>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

