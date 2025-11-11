import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { EnvelopeSimple, Calendar, CheckCircle, PaperPlaneTilt } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'
import { ParallaxHero } from '@/components/ParallaxHero'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Contact form submission:', formData)
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    toast.success('Message sent successfully! I\'ll get back to you soon.')
    
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="flex flex-col">
      <ParallaxHero className="py-24" intensity="medium">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-background/30 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Let's{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-accent">
                Work Together
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your project? Choose the option that works best for you.
            </p>
          </motion.div>
        </div>
      </ParallaxHero>

      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.90_0.01_240_/_0.2)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.90_0.01_240_/_0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">Send a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="p-8 border-2 hover:border-primary/20 transition-colors duration-300 bg-gradient-to-br from-card via-card to-primary/5">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name (optional)"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or question..."
                      rows={6}
                      className="border-2 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300" 
                    disabled={isSubmitting || isSubmitted}
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <PaperPlaneTilt className="mr-2 animate-pulse" weight="bold" />
                        Sending...
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="mr-2" weight="fill" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <PaperPlaneTilt className="mr-2" weight="bold" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>

              <div className="px-4 py-3 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> This is a demo contact form. In production, messages would be 
                  sent via email using a service like SendGrid or Mailgun configured through environment variables.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-4xl font-bold mb-4">Schedule a Call</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Prefer to talk? Schedule a free 30-minute consultation to discuss your needs.
                </p>
              </div>

              <Card className="p-8 space-y-8 border-2 hover:border-primary/20 transition-colors duration-300 bg-gradient-to-br from-card via-card to-accent/5">
                <div className="aspect-video bg-gradient-to-br from-muted via-muted to-primary/10 rounded-xl flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center space-y-4 p-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Calendar size={32} className="text-primary" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Calendly Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Replace this placeholder with your Calendly embed URL
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 px-4 py-3 rounded-lg bg-muted/30 border border-border/50">
                  <p className="text-sm font-semibold text-foreground">
                    To configure Calendly:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-2">
                    <li>Sign up for Calendly and create your booking page</li>
                    <li>Get your embed URL from Calendly settings</li>
                    <li>Replace the placeholder above with the Calendly iframe</li>
                  </ol>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-semibold mb-4">
                    You can also reach me directly:
                  </p>
                  <a 
                    href="mailto:jose@jose.technology"
                    className="group inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
                  >
                    <EnvelopeSimple size={20} weight="duotone" className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">jose@jose.technology</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
