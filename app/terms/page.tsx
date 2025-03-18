"use client"

import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-white drop-shadow-md">Terms of Service</h1>
          </div>
        </div>
      </div>
      
      <div className="container py-12 max-w-4xl mx-auto">
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing or using the Stoop platform, you agree to comply with and be bound by these Terms of Service ("Terms"). 
            If you do not agree to these Terms, please do not use the platform.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">2. Services</h2>
          <p className="text-muted-foreground">
            Stoop provides a user-friendly platform to connect individuals with free, quality furniture items in their local community. 
            Users can browse and list furniture items, communicate with other users, and arrange for the pickup of items.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <p className="text-muted-foreground">
            In order to use certain features of the platform, you must create a user account. You agree to provide accurate and 
            complete information when creating your account and to keep your account information up to date. You are responsible 
            for maintaining the confidentiality of your account password and for all activities that occur under your account.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">4. User Conduct</h2>
          <p className="text-muted-foreground">
            You agree to use the platform in a manner consistent with all applicable laws and regulations. You agree not to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
            <li>Post or transmit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, invasive of another's privacy, or otherwise objectionable.</li>
            <li>Harass, stalk, or harm another individual.</li>
            <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
            <li>Post or transmit any unsolicited advertising, promotional materials, or other forms of solicitation.</li>
            <li>Interfere with or disrupt the platform or servers or networks connected to the platform.</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">5. Content</h2>
          <p className="text-muted-foreground">
            You are solely responsible for any content that you post, upload, or transmit via the platform. Stoop does not endorse 
            any user content and is not responsible or liable for any content, even if it violates these Terms. However, we reserve 
            the right to remove any content at our discretion.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
          <p className="text-muted-foreground">
            All content on the platform, including but not limited to text, graphics, logos, images, and software, is the property 
            of Stoop or its licensors and is protected by copyright and other intellectual property laws. You may not copy, modify, 
            distribute, sell, or lease any content from the platform without the prior written consent of Stoop.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">7. Termination</h2>
          <p className="text-muted-foreground">
            Stoop may terminate or suspend your access to the platform at any time, without notice, for conduct that we believe 
            violates these Terms or is harmful to other users of the platform, us, third parties, or the business interests of Stoop.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">8. Disclaimers</h2>
          <p className="text-muted-foreground">
            The platform is provided "as is" and "as available." Stoop disclaims all representations and warranties, express, implied, 
            or statutory, not expressly set out in these Terms. In addition, Stoop makes no representation, warranty, or guarantee 
            regarding the reliability, timeliness, quality, suitability, or availability of the services or any services or goods 
            requested through the use of the services.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            Stoop shall not be liable for indirect, incidental, special, exemplary, punitive, or consequential damages, including 
            lost profits, lost data, personal injury, or property damage related to, in connection with, or otherwise resulting from 
            any use of the services. Stoop's total liability for all damages arising out of or in connection with the services shall 
            be limited to the amount paid by you to Stoop for the use of the services during the three (3) months period immediately 
            preceding the event giving rise to the liability.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Stoop operates, 
            without regard to its conflict of law principles.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">11. Amendments</h2>
          <p className="text-muted-foreground">
            Stoop reserves the right to modify these Terms at any time. If we make changes to these Terms, we will post the revised 
            Terms on the platform. Your continued use of the platform after the posting of the revised Terms constitutes your 
            acceptance of the changes.
          </p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">12. Contact Information</h2>
          <p className="text-muted-foreground">
            If you have any questions about these Terms, please contact us at{" "}
            <Link href="mailto:contact@stoopinc.com" className="text-primary hover:underline">
              contact@stoopinc.com
            </Link>.
          </p>
        </section>
        
        <div className="mt-8 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            By using the Stoop platform, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
