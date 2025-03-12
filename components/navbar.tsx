"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" }, // This already points to the contact section
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/70 backdrop-blur-xl rounded-full border border-white/10">
          <div className="flex items-center justify-between h-12 px-6">
            {/* Logo/Brand */}
            <div className="flex-shrink-0 md:w-32">
              <Link href="/" className="text-white hover:text-white/90 transition-colors text-lg font-semibold">
                Jayesh.D
              </Link>
            </div>

            {/* Desktop navigation - Centered */}
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive(item.href) ? "text-white" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Action buttons */}
            <div className="hidden md:flex md:w-32 md:justify-end md:items-center md:space-x-3">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white hover:bg-gray-200 text-gray-900 h-8 px-4 rounded-full"
                asChild
              >
                <a
                  href="https://github.com/jayesh-16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="block h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-xl bg-black/70 backdrop-blur-xl border border-white/10 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? "text-white bg-gray-800/50"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/30"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4 pb-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white hover:bg-gray-200 text-gray-900 justify-start"
                  asChild
                >
                  <a
                    href="https://github.com/jayesh-16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

