import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Leaf, Recycle } from "lucide-react"

export default function Community() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-background py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            <div className="flex flex-col gap-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Community</div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to the Stoop community
              </h1>
              <p className="text-xl text-muted-foreground">
                Where being a part of Stoop means more than just using an app
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Community Illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Join a Movement</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded individuals committed to making a positive impact on the environment.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Sustainable Living</h3>
                  <p className="text-muted-foreground">
                    Promote eco-friendly practices by giving furniture a second life instead of sending it to landfills.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Recycle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Reduce Waste</h3>
                  <p className="text-muted-foreground">
                    Help reduce furniture waste by connecting preloved objects with people who will appreciate them.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Here's what you can do</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                As part of the Stoop community
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Discover and claim free furniture</h3>
              <p className="text-muted-foreground">
                Browse through available items in your area and claim what you need before someone else takes it.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Contribute to sustainability</h3>
              <p className="text-muted-foreground">
                By reusing furniture, you're helping reduce waste and the environmental impact of manufacturing new
                items.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Connect with others</h3>
              <p className="text-muted-foreground">
                Share your passion for eco-friendly living with others in your community who have similar values.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Share your feedback</h3>
              <p className="text-muted-foreground">
                Help us improve Stoop by sharing your thoughts, suggestions, and experiences with the app.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="https://apps.apple.com/app/stoop">Download the App</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ready to join us?</h2>
              <p className="text-muted-foreground">
                Every piece of furniture deserves a second chance, and your participation can make that a reality. Be
                part of a change that matters. Download Stoop today, and let's make a difference together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://apps.apple.com/app/stoop" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=60&width=200"
                    alt="Download on the App Store"
                    width={200}
                    height={60}
                    className="h-[60px] w-auto"
                  />
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=500&width=500" alt="Community Image" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

