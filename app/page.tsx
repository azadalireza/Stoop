"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button, Card, CardContent } from "../components/ui-components"
import { ArrowRight, Download, MapPin, Camera, ThumbsUp } from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <motion.div
              className="flex flex-col gap-4"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Now on App Store</div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Stoop <span className="text-muted-foreground">inc</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">the free furniture app</p>
              <p className="text-muted-foreground max-w-[600px]">
                Stoop connects preloved objects in the GTA with enthusiastic Stoopers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="https://apps.apple.com/ca/app/stoop-inc/id6471603920" className="inline-block image-hover">
                  <Image
                    src="/images/stoop-logo-new.jpg"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-[40px] w-auto rounded-md"
                    style={{ opacity: 1 }}
                  />
                </Link>
                <Button variant="outline" className="btn-hover" asChild>
                  <Link href="#features">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-3xl border-4 border-gray-800 bg-black shadow-2xl image-hover md:col-span-2 lg:col-span-1 mx-auto max-w-[280px] w-full">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 rounded-t-2xl flex items-center justify-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="absolute top-[8px] bottom-0 left-0 right-0 overflow-hidden rounded-b-2xl">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/landing_2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <div className="w-1/3 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
                <div className="hidden lg:block relative aspect-[9/19.5] overflow-hidden rounded-3xl border-4 border-gray-800 bg-black shadow-2xl image-hover transform rotate-6 translate-y-4 mx-auto max-w-[280px] w-full">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 rounded-t-2xl flex items-center justify-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-full"></div>
                  </div>
                  <div className="absolute top-[8px] bottom-0 left-0 right-0 overflow-hidden rounded-b-2xl">
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/videos/landing_2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                    <div className="w-1/3 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/30 py-20 section-hover">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Stoop Works</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find, collect, and share free furniture in your community
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-20 py-12">
            {/* Browse Feature */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#4ade80]/10">
                  <MapPin className="h-6 w-6 text-[#4ade80]" />
                </div>
                <h3 className="text-3xl font-bold text-[#4ade80]">Browse</h3>
                <div className="space-y-4">
                  <p className="text-xl font-medium">Do you need a piece of furniture?</p>
                  <p className="text-xl font-medium">Do you want it for free?</p>
                  <p className="text-xl">
                    Just open Stoop<span className="text-muted-foreground"> inc</span> and see what's available in your
                    community!
                  </p>
                </div>
              </div>
              <Card className="overflow-hidden border-0 bg-background shadow-xl card-hover">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/7] overflow-hidden">
                    <Image
                      src="/images/browse-screenshot.png"
                      alt="Browse Feature Screenshot"
                      fill
                      className="object-contain p-2"
                      style={{ opacity: 1 }}
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Collect Feature */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4 md:order-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#60a5fa]/10">
                  <ThumbsUp className="h-6 w-6 text-[#60a5fa]" />
                </div>
                <h3 className="text-3xl font-bold text-[#60a5fa]">Collect</h3>
                <div className="space-y-4">
                  <p className="text-xl font-medium">Found something you like?</p>
                  <p className="text-xl">Call dibs on it and go get it before someone else takes it!</p>
                </div>
              </div>
              <Card className="overflow-hidden border-0 bg-background shadow-xl md:order-1 card-hover">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/7] overflow-hidden">
                    <Image
                      src="/images/collect-screenshot.png"
                      alt="Collect Feature Screenshot"
                      fill
                      className="object-contain p-2"
                      style={{ opacity: 1 }}
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Capture Feature */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f97316]/10">
                  <Camera className="h-6 w-6 text-[#f97316]" />
                </div>
                <h3 className="text-3xl font-bold text-[#f97316]">Capture</h3>
                <p className="text-xl">Capture preloved objects you find on the streets so they can find a new home.</p>
              </div>
              <Card className="overflow-hidden border-0 bg-background shadow-xl card-hover">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/7] overflow-hidden">
                    <Image
                      src="/images/capture-screenshot.png"
                      alt="Capture Feature Screenshot"
                      fill
                      className="object-contain p-2"
                      style={{ opacity: 1 }}
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20 section-hover">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl border bg-card p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-bold">
                Download the Stoop<span className="text-muted-foreground"> inc</span> app
              </h2>
              <p className="text-muted-foreground">Scan the QR code or click the button to download on the App Store</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="btn-hover" asChild>
                  <Link href="https://apps.apple.com/ca/app/stoop-inc/id6471603920">
                    <Download className="mr-2 h-4 w-4" /> Download Now
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative w-40 h-40 bg-white p-3 rounded-xl shadow-sm image-hover">
              <Image 
                src="/images/stoop-qr-code.png" 
                alt="QR Code" 
                fill 
                className="object-contain p-1" 
                style={{ opacity: 1 }} 
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Community</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center">
                <Image
                  src="/images/stoop-logo-new.jpg"
                  alt="Stoop Logo"
                  width={40}
                  height={40}
                  className="mr-3 h-10 w-10 rounded-md"
                  style={{ opacity: 1 }}
                />
                Welcome to the Stoop community
              </h2>
              <p className="text-muted-foreground">
                Where being a part of Stoop means more than just using an app – it's about joining a movement dedicated
                to eco-friendly and sustainable living.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
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
                  <span>Discover and claim free, quality furniture in your area</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
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
                  <span>Contribute to a more sustainable world by reducing waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-primary/10 p-1">
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
                  <span>Connect with others who share your passion for eco-friendly living</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hover" asChild>
                  <Link href="https://apps.apple.com/ca/app/stoop-inc/id6471603920">
                    <Image
                      src="/images/stoop-logo-new.jpg"
                      alt="Stoop Logo"
                      width={24}
                      height={24}
                      className="mr-2 h-5 w-5 rounded-md"
                      style={{ opacity: 1 }}
                    />
                    Download Now
                  </Link>
                </Button>
                <Button variant="outline" className="btn-hover" asChild>
                  <Link href="/community">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-muted/20 flex items-center justify-center">
              <div className="text-muted-foreground text-center p-8">
                <p className="text-lg font-medium mb-2">Community Image</p>
                <p className="text-sm">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Stoopers Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of happy users who are making a difference
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="rounded-xl border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "I found a beautiful coffee table just two blocks from my apartment. The app was so easy to use and I
                  love that I'm helping reduce waste!"
                </p>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Sarah T.</div>
                  <div className="text-xs text-muted-foreground">Toronto</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "As a student, Stoop has been a lifesaver for furnishing my apartment on a budget. I've both given and
                  received furniture through the app."
                </p>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Michael K.</div>
                  <div className="text-xs text-muted-foreground">Mississauga</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="rounded-xl border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "I love the community aspect of Stoop. It's more than just an app - it's a movement toward more
                  sustainable living in our city."
                </p>
                <div className="flex items-center gap-2">
                  <div className="font-medium">Priya J.</div>
                  <div className="text-xs text-muted-foreground">Scarborough</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to join the movement?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Every piece of furniture deserves a second chance. Download Stoop today and make a difference!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button className="btn-hover" size="lg" asChild>
                <Link href="https://apps.apple.com/ca/app/stoop-inc/id6471603920">
                  <Download className="mr-2 h-5 w-5" /> Download on the App Store
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

