"use client"

import Link from "next/link"

export default function PrivacyPage() {
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
            <h1 className="text-4xl font-bold text-white drop-shadow-md">Privacy Policy</h1>
          </div>
        </div>
      </div>
      
      <div className="container py-12 max-w-4xl mx-auto">
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-muted-foreground">
            Welcome to Stoop! Our mission is to make repurposing and reusing furniture effortless and accessible for everyone. 
            We connect people to free, quality furniture items in their local community through a user-friendly platform, 
            promoting responsible consumption and sustainable living.
          </p>
          <p className="text-muted-foreground mt-2">
            This Privacy Policy and Terms of Service document ("Agreement") explains how we collect, use, disclose, and 
            safeguard your information when you use our platform. Please read this Agreement carefully. If you do not agree 
            with the terms of this Agreement, please do not access the platform.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
          
          <h3 className="text-lg font-medium mt-4 mb-1">2.1. Personal Information</h3>
          <p className="text-muted-foreground">
            We may collect personal information that you provide to us such as your name, email address, phone number, and location.
          </p>
          
          <h3 className="text-lg font-medium mt-4 mb-1">2.2. Usage Information</h3>
          <p className="text-muted-foreground">
            We may collect information about your usage of our platform, including the types of furniture you are interested in, 
            your search queries, and your interactions with listings.
          </p>
          
          <h3 className="text-lg font-medium mt-4 mb-1">2.3. Device Information</h3>
          <p className="text-muted-foreground">
            We may collect information about the device you use to access our platform, including the device model, operating system, 
            and browser type.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">3. Use of Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
            <li>Connect you with local listings of free, quality furniture.</li>
            <li>Improve and personalize your experience on our platform.</li>
            <li>Communicate with you, including sending you updates and responding to your inquiries.</li>
            <li>Monitor and analyze usage trends and activities on our platform.</li>
            <li>Ensure the security and integrity of our platform.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">4. Sharing of Information</h2>
          <p className="text-muted-foreground">
            We do not sell or rent your personal information to third parties. However, we may share your information with:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
            <li>Other users of the platform, to facilitate connections between givers and receivers of furniture.</li>
            <li>Service providers that perform services on our behalf, such as hosting and communication services.</li>
            <li>Law enforcement or other government entities if required by law or if we believe in good faith that such disclosure is necessary to protect our rights, protect your safety or the safety of others, or investigate fraud.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Security</h2>
          <p className="text-muted-foreground">
            We take reasonable measures to protect the information that we collect from you. However, please be aware that no 
            security measures are perfect or impenetrable, and we cannot guarantee the security of your information.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Your Choices</h2>
          <p className="text-muted-foreground">
            You may update or correct your personal information at any time by accessing your account settings on our platform. 
            You may also opt out of receiving promotional communications from us by following the unsubscribe instructions 
            provided in the communication.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Changes to This Policy</h2>
          <p className="text-muted-foreground">
            We may update this Agreement from time to time. If we make significant changes, we will notify you by posting a 
            notice on our platform or sending you a notification.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Agreement or our practices, please contact us at{" "}
            <Link href="mailto:contact@stoopinc.com" className="text-primary hover:underline">
              contact@stoopinc.com
            </Link>.
          </p>
        </section>
        
        <div className="mt-8 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            By using our platform, you agree to the terms of this Agreement. Thank you for being a part of Stoop and helping to 
            promote sustainable living in your community!
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
