"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface Skill {
  name: string
  icon: string
  category: "frontend" | "backend" | "design" | "other"
}

const skills: Skill[] = [
  { name: "JavaScript", icon: "js.svg", category: "frontend" },
  { name: "TypeScript", icon: "ts.svg", category: "frontend" },
  { name: "React", icon: "react.svg", category: "frontend" },
  { name: "Next.js", icon: "njs.svg", category: "frontend" },
  { name: "HTML/CSS", icon: "h5.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "tail.svg", category: "frontend" },
  { name: "Node.js", icon: "node.svg", category: "backend" },
  { name: "Express", icon: "ex.svg", category: "backend" },
  { name: "MongoDB", icon: "mog.svg", category: "backend" },
  { name: "PostgreSQL", icon: "post.svg", category: "backend" },
  { name: "UI/UX Design", icon: "ui.png", category: "design" },
  { name: "Git", icon: "git.svg", category: "other" },
  { name: "Docker", icon: "docker.svg", category: "other" },
]

export default function SkillsPage() {
  const categories = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "other", label: "Other" },
  ]

  return (
    <div
      className="min-h-screen pt-24 pb-16"
      style={{ background: "radial-gradient(circle at center, #1E40AF, #000000)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            My Skills
          </h1>
          <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            I've developed expertise in various technologies and tools throughout my career. Here's an overview of my
            technical skills.
          </p>

          <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {skills
                    .filter((skill) => skill.category === category.id)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <motion.div
                          className="skill-icon bg-gray-800/50 p-4 rounded-xl border border-gray-700 mb-3"
                          whileHover={{ y: -10 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Image
                            src={skill.icon || "/placeholder.svg"}
                            alt={skill.name}
                            width={80}
                            height={80}
                            className="w-16 h-16 object-contain"
                          />
                        </motion.div>
                        <span className="text-white font-medium text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

