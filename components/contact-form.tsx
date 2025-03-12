"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useActionState } from "react"
import { sendContactForm } from "../actions/contact"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactForm, null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    if (state?.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }
  }, [state])

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          className="w-full bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          className="w-full bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 ease-in-out"
      >
        {isPending ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : "Send Message"}
      </Button>

      {state && (
        <div
          className={`p-4 rounded-lg ${state.success ? "bg-green-900/20 border border-green-800" : "bg-red-900/20 border border-red-800"}`}
        >
          <div className="flex items-center">
            {state.success ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
            )}
            <p className={state.success ? "text-green-400" : "text-red-400"}>{state.message}</p>
          </div>
        </div>
      )}
    </form>
  )
}


