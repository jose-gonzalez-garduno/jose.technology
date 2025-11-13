import { Layout } from "@/components/layout/Layout"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { EnvelopeSimple, Calendar, CheckCircle, PaperPlaneTilt } from '@phosphor-icons/react'
import { toast } from 'sonner'
import { motion } from 'framer-motion'

export default function Contact() {
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
    <Layout>
      {/* Hero Section - Blueprint Style */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#2D2D2D]">
              Let's{' '}
              <span className="text-[#00A8E8]">Work Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your project? Choose the option that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Blueprint Style */}
      <section className="py-24 bg-[#F8FAFB]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Send a Message</h2>
                <p className="text-lg text-[#6B7280]">
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="p-8 bg-white border-2 border-[#00A8E8]/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-[#2D2D2D]">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="border-2 border-[#E5E7EB] focus:border-[#00A8E8] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-[#2D2D2D]">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="border-2 border-[#E5E7EB] focus:border-[#00A8E8] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-[#2D2D2D]">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name (optional)"
                      className="border-2 border-[#E5E7EB] focus:border-[#00A8E8] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-[#2D2D2D]">Message *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project or question..."
                      rows={6}
                      className="border-2 border-[#E5E7EB] focus:border-[#00A8E8] transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00A8E8] hover:bg-[#0096D1] text-white shadow-lg hover:shadow-xl transition-all duration-300" 
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

              <div className="px-4 py-3 rounded-lg bg-white border-2 border-[#00A8E8]/10">
                <p className="text-sm text-[#6B7280]">
                  <strong className="text-[#2D2D2D]">Note:</strong> This is a demo contact form. In production, messages would be 
                  sent via email using a service like SendGrid or Mailgun configured through environment variables.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <h2 className="text-4xl font-bold text-[#2D2D2D] mb-4">Schedule a Call</h2>
                <p className="text-lg text-[#6B7280] mb-6">
                  Prefer to talk? Schedule a free 30-minute consultation to discuss your needs.
                </p>
              </div>

              <Card className="p-8 space-y-8 bg-white border-2 border-[#00A8E8]/10">
                <div className="aspect-video bg-[#F8FAFB] rounded-xl flex items-center justify-center border-2 border-dashed border-[#E5E7EB]">
                  <div className="text-center space-y-4 p-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#00A8E8]/10 flex items-center justify-center mx-auto">
                      <Calendar size={32} className="text-[#00A8E8]" weight="duotone" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#2D2D2D] mb-2">Calendly Integration</h3>
                      <p className="text-sm text-[#6B7280]">
                        Replace this placeholder with your Calendly embed URL
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 px-4 py-3 rounded-lg bg-[#F8FAFB] border-2 border-[#00A8E8]/10">
                  <p className="text-sm font-semibold text-[#2D2D2D]">
                    To configure Calendly:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-[#6B7280] ml-2">
                    <li>Sign up for Calendly and create your booking page</li>
                    <li>Get your embed URL from Calendly settings</li>
                    <li>Replace the placeholder above with the Calendly iframe</li>
                  </ol>
                </div>

                <div className="pt-6 border-t-2 border-[#E5E7EB]">
                  <p className="text-sm font-semibold text-[#2D2D2D] mb-4">
                    You can also reach me directly:
                  </p>
                  <a 
                    href="mailto:jose@jose.technology"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#F8FAFB] hover:bg-[#00A8E8]/10 text-[#6B7280] hover:text-[#00A8E8] transition-all duration-300 border-2 border-transparent hover:border-[#00A8E8]/20"
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
    </Layout>
  )
}
