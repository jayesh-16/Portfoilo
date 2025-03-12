"use client"

import { motion } from "framer-motion"
import { ContactForm } from "./contact-form"
import { SocialIcon } from "./social-icon"
import { XIcon } from "./icons/x-icon"
import { InstagramIcon } from "./icons/instagram-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { GithubIcon } from "./icons/github-icon"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Email</h4>
                <a href="mailto:alex@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  jayeshdhore@gmail.com
                </a>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Location</h4>
                <p className="text-white">Mumbai,India</p>
              </div>
              <div>
                <h4 className="text-gray-300 font-medium mb-2">Social Media</h4>
                <div className="flex space-x-4 mt-2">
                  <SocialIcon href="https://github.com/jayesh-16" aria-label="GitHub" icon={<GithubIcon className="w-5 h-5" />} />
                  <SocialIcon
                    href="https://www.linkedin.com/in/jayesh-dhore-a5a869289"
                    aria-label="LinkedIn"
                    icon={<LinkedInIcon className="w-5 h-5" />}
                  />
                  <SocialIcon
                    href="https://www.instagram.com/dhore_jayesh"
                    aria-label="Instagram"
                    icon={<InstagramIcon className="w-5 h-5" />}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

