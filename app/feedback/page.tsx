"use client"

import type React from "react"

import { useState } from "react"
import { Button, Input, Textarea } from "../../components/ui-components"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export default function Feedback() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="relative h-[300px] overflow-hidden">
        {/* Dynamic Pattern Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="pattern-circle pattern-circle-1"></div>
          <div className="pattern-circle pattern-circle-2"></div>
          <div className="pattern-circle pattern-circle-3"></div>
          <div className="pattern-circle pattern-circle-4"></div>
          <div className="pattern-circle pattern-circle-5"></div>
          <div className="pattern-circle pattern-circle-6"></div>
          <div className="pattern-circle pattern-circle-7"></div>
          <div className="pattern-circle pattern-circle-8"></div>
          <div className="pattern-circle pattern-circle-9"></div>
          <div className="pattern-circle pattern-circle-10"></div>
          <div className="pattern-circle pattern-circle-11"></div>
          <div className="pattern-circle pattern-circle-12"></div>
          <div className="pattern-circle pattern-circle-13"></div>
          <div className="pattern-circle pattern-circle-14"></div>
          <div className="pattern-circle pattern-circle-15"></div>
        </div>
        
        {/* SVG Pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 600 600"
        >
          <defs>
            <pattern
              id="backgroundPattern"
              x="0"
              y="0"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="6" cy="6" r="2" fill="rgba(255,255,255,0.15)" />
              <circle cx="24" cy="24" r="1.5" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>
          <rect width="600" height="600" fill="url(#backgroundPattern)" />
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted">
          <div className="container h-full flex items-end justify-center pb-8">
            <h1 className="text-4xl font-bold text-white drop-shadow-md">Feedback</h1>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 md:py-24">
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <motion.div
              className="flex flex-col items-center justify-center text-center space-y-4 p-8 rounded-lg border bg-card shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Thank you for your feedback!</h2>
              <p className="text-muted-foreground">
                We appreciate you taking the time to share your thoughts with us. Your input helps us improve Stoop for
                everyone.
              </p>
              <Button onClick={() => setIsSubmitted(false)} className="mt-4">
                Send another message
              </Button>
            </motion.div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Hey there! We'd love to hear from you.</h2>
                <p className="text-muted-foreground">
                  Your input is invaluable to us. Whether it's a suggestion, a compliment, or a concern, every piece of
                  feedback helps us improve Stoop and make a positive impact on our community and the planet.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Why your feedback matters:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Helps us improve the app experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Guides our future development priorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>Strengthens our community connection</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email (Optional)
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                    <p className="text-xs text-muted-foreground">We'll only use this to follow up if needed</p>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-destructive">*</span>
                    </label>
                    <Textarea id="message" placeholder="Your feedback" className="min-h-[150px]" required />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Feedback
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
