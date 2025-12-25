"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import useWeb3Forms from "@web3forms/react"
import { useMemo, useState } from "react"
import { toast } from "sonner"
import Instagram from "@/components/logo/Instagram"
import LinkedIn from "@/components/logo/LinkedIn"
import GitHub from "@/components/logo/Github"
import Facebook from "@/components/logo/Facebook"



export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const accessKey = useMemo(() => process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "", [])
  const { submit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (message) => {
      setIsSubmitting(false)
      toast.success("Message sent successfully! 🎉", {
        description: "Thank you for reaching out. I'll get back to you soon!",
        duration: 5000,
      })
      // Reset form after successful submission
      const form = document.querySelector('form') as HTMLFormElement;
      if (form) form.reset();
    },
    onError: (message) => {
      setIsSubmitting(false)
      toast.error("Failed to send message 😔", {
        description: "Please try again later or contact me directly.",
        duration: 5000,
      })
    },
  })
  return (
    <LayoutWrapper>
      <section className="py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-foreground font-bricolage">Get in touch</h1>
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you're a startup looking to
              build your first product or an established company wanting to improve your web presence, I'd love to help.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground font-bricolage">Let's work together</h2>
              <p className="text-muted-foreground">
                Drop me a line and let's discuss how we can bring your ideas to life.
              </p>
            </div>

            <form onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitting(true);
              const formData = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(formData);
              submit(data);
            }} className="grid gap-6 sm:max-w-xl">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground font-bricolage">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200 font-instrument"
                  placeholder="Your name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground font-bricolage">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200 font-instrument"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground font-bricolage">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-all duration-200 font-instrument resize-none"
                  placeholder="Tell me a little about your project..."
                />
              </div>
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-bricolage font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </div>
            </form>

            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">You can also find me on:</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/rupesh.chy.762862/"
                >
                  <Facebook width={30} height={30} />
                </a>
                <a
                  href="https://github.com/Rupe88"
                >
                  <GitHub width={30} height={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rupesh-chaudhary-54a519261/"
                >
                  <LinkedIn width={30} height={30} />
                </a>
                <a
                  href="https://www.instagram.com/ruepeshe/"
                >
                  <Instagram width={30} height={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}
