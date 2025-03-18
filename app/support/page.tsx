"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare } from "lucide-react"

export default function SupportPage() {
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
            <h1 className="text-4xl font-bold text-white drop-shadow-md">Support</h1>
          </div>
        </div>
      </div>
      
      <div className="container py-12 max-w-4xl mx-auto">
      
      <div className="space-y-8">
        <section className="bg-muted/30 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">We're Here to Help</h2>
          <p className="text-muted-foreground mb-4">
            We are excited to share our app with all you enthusiastic stoopers!
            At Stoop Inc, we understand that with any new app, there are always questions and concerns. 
            We want you to know that we are here for you.
          </p>
          <p className="text-muted-foreground mb-6">
            If you have any queries or need assistance, please don't hesitate to reach out to us. 
            Our dedicated team members will reply to you promptly, ensuring you have the best experience with our app.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="btn-hover" asChild>
              <Link href="mailto:contact@stoopinc.com">
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </Link>
            </Button>
            <Button variant="outline" className="btn-hover" asChild>
              <Link href="/feedback">
                <MessageSquare className="mr-2 h-4 w-4" /> Send Feedback
              </Link>
            </Button>
          </div>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Feedback Matters</h2>
          <p className="text-muted-foreground">
            We highly value your feedback. It's essential for us to hear your thoughts and suggestions to continually improve. 
            If there is any feedback you would like to share, we warmly invite you to send us a message through our 
            feedback page right here on this website.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">How do I download the Stoop app?</h3>
              <p className="text-muted-foreground">
                The Stoop app is available on the App Store. You can download it by clicking{" "}
                <Link href="https://apps.apple.com/ca/app/stoop-inc/id6471603920" className="text-primary hover:underline">
                  here
                </Link>{" "}
                or searching for "Stoop inc" on the App Store.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">Is the Stoop app free to use?</h3>
              <p className="text-muted-foreground">
                Yes, the Stoop app is completely free to download and use.
              </p>
            </div>
            
            <div className="border-b pb-4">
              <h3 className="font-medium mb-2">How can I report an issue with the app?</h3>
              <p className="text-muted-foreground">
                You can report any issues by emailing us at{" "}
                <Link href="mailto:contact@stoopinc.com" className="text-primary hover:underline">
                  contact@stoopinc.com
                </Link>{" "}
                or by using the feedback form on our website.
              </p>
            </div>
          </div>
        </section>
        
        <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
          <p className="text-lg font-medium mb-2">Thank you for being part of our journey!</p>
          <p className="text-muted-foreground">
            We appreciate your support in making preloved furniture sharing easier and more accessible for everyone. Happy stooping!
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
