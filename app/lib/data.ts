export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface Skill {
  name: string
  level: number // 0-100
  category: "frontend" | "backend" | "design" | "other"
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Blog-Website",
    description:
      "A modern blog platform designed to deliver insightful content across various topics. It provides a seamless reading experience",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/project",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/project",
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts for multiple locations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Vue.js", "Tailwind CSS", "Weather API"],
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/username/project",
  },
  {
    id: "project-4",
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/username/project",
  },
]

export const skills: Skill[] = [
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 78, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 72, category: "backend" },
  
  { name: "UI/UX Design", level: 70, category: "design" },
  { name: "Git", level: 85, category: "other" },
  { name: "Docker", level: 60, category: "other" },
]

export const aboutMe = {
  name: "Jayesh Dhore",
  title: "Full Stack Developer",
  bio: ` Full-Stack Developer

I am a full-stack developer with expertise in React, React Native, and Supabase, specializing in building intuitive and scalable applications. My focus is on developing efficient, user-friendly solutions, leveraging new tech for modern design 

Currently, I am working on:

A mental well-being platform integrating a chatbot (Google Gemini API) and a non-monetary token system for user engagement.
A teacher-focused attendance management app with role-based access, analytics, and Google Drive integration for report storage.
I am passionate about blockchain integration for social causes, creating impactful digital solutions, and continuously learning new technologies.

Let's build something amazing together! `,
  location: "Mumbai,India",
  email: "jayeshdhore@gmail.com",
  availability: "Open to new opportunities",
}

