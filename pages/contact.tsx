import { Layout } from "@/components/layout/Layout"
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { EnvelopeSimple, Calendar, CheckCircle, PaperPlaneTilt, WarningCircle } from '@phosphor-icons/react'
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
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    message?: string
  }>({})

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message must be less than 5000 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      toast.success(
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Message sent successfully!</p>
          <p className="text-sm">Check your email for a confirmation.</p>
        </div>
      )
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      })
      setErrors({})

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      toast.error(
        <div className="flex items-start gap-2">
          <WarningCircle size={20} weight="fill" className="text-red-500 mt-0.5" />
          <p>{errorMessage}</p>
        </div>
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value })
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: undefined })
    }
  }

  const characterCount = formData.message.length
  const characterLimit = 5000

  return (
    <Layout>
      {/* Hero Section - Blueprint Style */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#2D2D2D]">
              Explore a Practical{' '}
              <span className="text-[#00A8E8]">Engineering Partnership</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Quick assessment. Clear priorities. Practical plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section - Blueprint Style */}
      <section className="py-24 bg-white">
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
                    <Label htmlFor="name" className="text-sm font-semibold text-[#2D2D2D]">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      className={`border-2 ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#E5E7EB] focus:border-[#00A8E8]'
                      } transition-colors`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-sm text-red-500 flex items-center gap-1">
                        <WarningCircle size={16} weight="fill" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-[#2D2D2D]">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className={`border-2 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#E5E7EB] focus:border-[#00A8E8]'
                      } transition-colors`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-sm text-red-500 flex items-center gap-1">
                        <WarningCircle size={16} weight="fill" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-semibold text-[#2D2D2D]">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your company name (optional)"
                      className="border-2 border-[#E5E7EB] focus:border-[#00A8E8] transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="message" className="text-sm font-semibold text-[#2D2D2D]">
                        Message *
                      </Label>
                      <span className={`text-xs ${
                        characterCount > characterLimit 
                          ? 'text-red-500' 
                          : characterCount > characterLimit * 0.9 
                          ? 'text-yellow-600' 
                          : 'text-[#6B7280]'
                      }`}>
                        {characterCount}/{characterLimit}
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell me about your project or question..."
                      rows={6}
                      className={`border-2 ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-[#E5E7EB] focus:border-[#00A8E8]'
                      } transition-colors resize-none`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-500 flex items-center gap-1">
                        <WarningCircle size={16} weight="fill" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
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

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border-2 border-green-200 rounded-lg"
                    >
                      <p className="text-sm text-green-800 flex items-center gap-2">
                        <CheckCircle size={20} weight="fill" className="text-green-600" />
                        <span>
                          <strong>Success!</strong> Check your email for a confirmation message.
                        </span>
                      </p>
                    </motion.div>
                  )}
                </form>
              </Card>

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
                {/* Calendly Embed */}
                <div className="rounded-xl overflow-hidden border-2 border-[#E5E7EB]">
                  <iframe
                    src="https://calendly.com/jose-technology-solutions/30min"
                    width="100%"
                    height="700"
                    frameBorder="0"
                    title="Schedule a 30-minute consultation"
                  ></iframe>
                </div>

                <div className="pt-6 border-t-2 border-[#E5E7EB]">
                  <p className="text-sm font-semibold text-[#2D2D2D] mb-4">
                    You can also reach me directly:
                  </p>
                  <a 
                    href="mailto:contact@jose.technology"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#F8FAFB] hover:bg-[#00A8E8]/10 text-[#6B7280] hover:text-[#00A8E8] transition-all duration-300 border-2 border-transparent hover:border-[#00A8E8]/20"
                  >
                    <EnvelopeSimple size={20} weight="duotone" className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">contact@jose.technology</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] text-center mb-12">
              Common Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-white border-2 border-transparent hover:border-cyan-400/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">
                  Is this just AI consulting?
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  No—AI is used only if it meaningfully improves the workflow. We focus on practical modernization: automation, integrations, and system upgrades that deliver measurable results.
                </p>
              </Card>

              <Card className="p-6 bg-white border-2 border-transparent hover:border-cyan-400/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">
                  How soon do we see value?
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Most automation pilots deliver measurable time savings inside 2–3 weeks. We focus on quick wins first, then scale to larger improvements.
                </p>
              </Card>

              <Card className="p-6 bg-white border-2 border-transparent hover:border-cyan-400/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">
                  Do you replace existing SaaS tools?
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Not necessarily. We often integrate and optimize your current tools first. If replacement makes sense, we provide vendor-neutral recommendations based on your needs and budget.
                </p>
              </Card>

              <Card className="p-6 bg-white border-2 border-transparent hover:border-cyan-400/20 transition-all duration-300">
                <h3 className="text-lg font-semibold text-[#2D2D2D] mb-3">
                  Can you work with legacy or on-premise systems?
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  Yes. We specialize in modernizing legacy systems and creating bridges between old and new infrastructure while maintaining business continuity.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  )
}
