import { Layout } from "@/components/layout/Layout"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Lightning, Rocket, Users, GitBranch, GraduationCap, ArrowRight, CheckCircle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { ParallaxHero } from '@/components/ParallaxHero'

const services = [
  {
    icon: Lightning,
    title: 'AI Consulting & Implementation',
    description: 'Strategic AI integration to automate processes, enhance decision-making, and unlock new business opportunities.',
    outcomes: [
      'Reduced operational costs through intelligent automation',
      'Data-driven insights for better business decisions',
      'Competitive advantage through AI-powered features',
    ],
    gradient: 'from-primary/5 via-primary/3 to-transparent',
    iconBg: 'bg-gradient-to-br from-primary to-primary/70',
  },
  {
    icon: Rocket,
    title: 'Systems Modernization',
    description: 'Transform legacy systems into modern, scalable, cloud-native applications that grow with your business.',
    outcomes: [
      'Improved system performance and reliability',
      'Lower maintenance costs and technical debt',
      'Enhanced security and compliance',
    ],
    gradient: 'from-accent/5 via-accent/3 to-transparent',
    iconBg: 'bg-gradient-to-br from-accent to-accent/70',
  },
  {
    icon: Users,
    title: 'Development Teams & Contracting',
    description: 'Experienced technical leadership and full-stack development teams to execute your projects with excellence.',
    outcomes: [
      'On-time, on-budget project delivery',
      'Access to senior-level technical expertise',
      'Flexible engagement models to fit your needs',
    ],
    gradient: 'from-secondary/5 via-secondary/3 to-transparent',
    iconBg: 'bg-gradient-to-br from-secondary to-secondary/70',
  },
  {
    icon: GitBranch,
    title: 'System Integrations',
    description: 'Connect your tools and platforms seamlessly to create a unified, efficient technology ecosystem.',
    outcomes: [
      'Eliminated data silos and manual data entry',
      'Streamlined workflows across platforms',
      'Real-time data synchronization',
    ],
    gradient: 'from-primary/5 via-primary/3 to-transparent',
    iconBg: 'bg-gradient-to-br from-primary to-primary/70',
  },
  {
    icon: GraduationCap,
    title: 'Technical Training & Workshops',
    description: 'Empower your team with modern development practices, AI tools, and technical skills through hands-on training.',
    outcomes: [
      'Increased team productivity and confidence',
      'Reduced dependency on external consultants',
      'Faster adoption of new technologies',
    ],
    gradient: 'from-accent/5 via-accent/3 to-transparent',
    iconBg: 'bg-gradient-to-br from-accent to-accent/70',
  },
]

export default function Services() {
  return (
    <Layout>
    <div className="flex flex-col">
      <ParallaxHero className="py-24" intensity="medium">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-background/30 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Technology Services for{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-accent">
                Growing Businesses
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From AI consulting to systems modernization, I help small businesses leverage technology 
              to compete, scale, and thrive.
            </p>
          </motion.div>
        </div>
      </ParallaxHero>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.90_0.01_240_/_0.2)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.90_0.01_240_/_0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card className={`group p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-primary/30 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative">
                    <div className="space-y-6">
                      <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon size={32} className="text-white" weight="duotone" />
                      </div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2 space-y-6">
                      <h3 className="font-semibold text-xl text-primary">Key Outcomes</h3>
                      <ul className="space-y-4">
                        {service.outcomes.map((outcome, outcomeIndex) => (
                          <motion.li 
                            key={outcomeIndex} 
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: outcomeIndex * 0.1 }}
                          >
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                              <CheckCircle size={16} className="text-white" weight="fill" />
                            </div>
                            <span className="text-foreground text-lg">{outcome}</span>
                          </motion.li>
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

      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Project</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every business has unique challenges. Schedule a free consultation to discuss 
              how I can help achieve your technology goals.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Contact for Quote
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 transition-colors duration-300">
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  </Layout>
    )
}
