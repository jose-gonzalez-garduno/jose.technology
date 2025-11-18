import { Layout } from "@/components/layout/Layout"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Lightning, Rocket, Users, GitBranch, GraduationCap, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Lightning,
    title: 'Automation & Integrations',
    description: 'Cut repetitive handoffs and retyping. We integrate your tools (CRM, invoicing, helpdesk) and introduce targeted automation—sometimes assisted by AI—for classification, routing, and summarization.',
    pain: 'Manual data handoffs slow you down.',
    outcomes: [
      'Fewer repetitive tasks and faster customer response',
      'Lower error rate from automated data flow',
      'Eliminated data silos across platforms',
    ],
  },
  {
    icon: Rocket,
    title: 'Systems Modernization',
    description: 'Move from brittle legacy scripts or outdated frameworks to maintainable, secure, documented systems—improving release speed and reducing operational risk.',
    pain: 'Legacy systems hold back your agility.',
    outcomes: [
      'Faster feature iteration and deployment cycles',
      'Lower maintenance costs and technical debt',
      'Enhanced security and compliance standards',
    ],
  },
  {
    icon: Users,
    title: 'Fractional Technical Leadership',
    description: 'Architecture decisions, vendor selection, roadmap refinement—without a full-time senior hire. You get strategic clarity and clean implementation patterns your internal team can continue.',
    pain: 'Need technical guidance without full-time overhead.',
    outcomes: [
      'Clear technical direction and architecture',
      'Informed vendor and tool selection decisions',
      'Knowledge transfer to your internal team',
    ],
  },
  {
    icon: GitBranch,
    title: 'Custom Software Development',
    description: 'Tailored applications built with modern frameworks and best practices. From concept to deployment, we deliver reliable solutions that scale with your business.',
    pain: 'Off-the-shelf tools don\'t fit your unique workflows.',
    outcomes: [
      'Purpose-built tools that match your processes',
      'Scalable architecture for future growth',
      'Full documentation and maintainability',
    ],
  },
]

export default function Services() {
  return (
    <Layout>
      {/* Hero Section - Blueprint Style */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#2D2D2D]">
              Practical Modernization for{' '}
              <span className="text-[#00A8E8]">Small Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              We focus on the practical side of modernization—removing manual busywork, stabilizing fragile tools, and giving you clear technical direction. AI appears only where it cuts time or improves reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Blueprint Style */}
      <section className="py-24 bg-gradient-subtle relative">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-10 bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="space-y-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                        <service.icon size={32} className="text-white" weight="duotone" />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                      <p className="text-slate-600 text-lg leading-relaxed">{service.description}</p>
                      <p className="text-slate-600 text-lg leading-relaxed"><strong>Pain Point:</strong> {service.pain}</p>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <h3 className="font-semibold text-xl text-cyan-600">Key Outcomes</h3>
                      <ul className="space-y-4">
                        {service.outcomes.map((outcome, outcomeIndex) => (
                          <li 
                            key={outcomeIndex} 
                            className="flex items-start gap-4"
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-cyan-500/30">
                              <CheckCircle size={14} className="text-white" weight="fill" />
                            </div>
                            <span className="text-slate-800 text-lg leading-relaxed">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Blueprint Style */}
      <section className="py-24 bg-gradient-cyan relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D]">
              Let's Discuss Your Project
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Every business has unique challenges. Schedule a free consultation to discuss 
              how I can help achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0096D1] text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Contact for Quote
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-[#2D2D2D] text-[#2D2D2D] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
