"use server"

import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function sendContactForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")

    const result = schema.safeParse({ name, email, message })

    if (!result.success) {
      return {
        success: false,
        message: result.error.errors[0].message,
      }
    }

    // In a real application, you would send an email or store the message
    // For demo purposes, we'll just simulate a successful submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return {
      success: true,
      message: "Your message has been sent! I will get back to you soon.",
    }
  } catch (error) {
    console.error("Error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
    }
  }
}

