import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Change font to Poppins for a more unique look
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Jayesh | Full-Stack Developer",
  icons: "/favicon.png",
  description: "My personal portfolio website showcasing my projects and skills",
  openGraph: {
    title: "Personal Portfolio",
    description: "My personal portfolio website showcasing my projects and skills",
    url: "https://jayesh-aboutme.vercel.app/",
    type: "website",
    images: [
      {
        url: "/th.png",
        width: 1200,
        height: 630,
        alt: "Personal Portfolio Preview",
      },
    ],
  },
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'