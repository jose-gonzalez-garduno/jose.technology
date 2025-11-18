import { Layout } from "@/components/layout/Layout"
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Briefcase, GraduationCap, Lightbulb, ArrowRight } from '@phosphor-icons/react'

export default function About() {
  return (
    <Layout>
      {/* Hero Section - Blueprint Style */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D]">
                About Jose Technology Solutions
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed">
                Helping small businesses leverage modern technology and AI to compete, scale, and succeed.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="w-48 h-48 rounded-2xl bg-white border-2 border-[#00A8E8]/20 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="/icon_logo_only.png" 
                  alt="jose.technology logo" 
                  className="w-32 h-32"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section - Blueprint Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">My Story</h2>
            <div className="space-y-4 text-lg text-[#4B5563] leading-relaxed">
              <p>
                I'm Jose, a full-stack engineer and technical consultant with a passion for helping 
                small businesses harness the power of modern technology. With over a decade of experience 
                in software development and systems architecture, I've worked with companies ranging from 
                early-stage startups to established enterprises.
              </p>
              <p>
                What drives me is the challenge of making complex technology accessible and practical. 
                Too often, small businesses are told they need expensive, complicated solutions when 
                what they really need is thoughtful implementation of the right tools for their specific situation.
              </p>
              <p>
                Through Jose Technology Solutions, I bring enterprise-level technical expertise to small 
                businesses at a scale that makes sense. Whether it's implementing AI to automate repetitive 
                tasks, modernizing legacy systems, or building custom solutions from the ground up, I focus 
                on delivering real business value.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators Section - Blueprint Style */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-12 text-center"
          >
            What Makes Me Different
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: 'Business-First Approach',
                description: 'Technology serves your business, not the other way around. I focus on outcomes that matter to your bottom line.'
              },
              {
                icon: GraduationCap,
                title: 'Knowledge Transfer',
                description: "I don't just build solutions—I teach your team how to maintain and extend them, reducing long-term dependency."
              },
              {
                icon: Lightbulb,
                title: 'Pragmatic Solutions',
                description: 'The best solution is the simplest one that solves your problem. No over-engineering, no unnecessary complexity.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white border-2 border-transparent hover:border-[#00A8E8]/20 transition-all duration-300 hover:shadow-lg">
                  <div className="w-14 h-14 rounded-xl bg-[#00A8E8]/10 flex items-center justify-center mb-6">
                    <item.icon size={28} className="text-[#00A8E8]" weight="duotone" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - Blueprint Style */}
      <section className="py-20 bg-gradient-cyan">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-8">Connect With Me</h2>
            <Card className="p-8 bg-white border-2 border-[#00A8E8]/10">
              <div className="space-y-6">
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  I'm always interested in connecting with fellow technologists, potential clients, 
                  and anyone passionate about using technology to solve real problems.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/josegonzalez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#00A8E8] transition-colors"
                  >
                    <GithubLogo size={24} weight="bold" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/josegonzalez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#00A8E8] transition-colors"
                  >
                    <LinkedinLogo size={24} weight="bold" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="mailto:contact@jose.technology"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#F8FAFB] hover:bg-[#00A8E8]/10 text-[#6B7280] hover:text-[#00A8E8] transition-all duration-300 border-2 border-transparent hover:border-[#00A8E8]/20"
                  >
                    <EnvelopeSimple size={20} weight="duotone" className="group-hover:scale-110 transition-transform" />
                    <span className="font-medium">contact@jose.technology</span>
                  </a>
                </div>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0096D1] text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Let's Work Together
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
