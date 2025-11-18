import { Layout } from "@/components/layout/Layout"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DownloadSimple, EnvelopeSimple, LinkedinLogo, GithubLogo, CheckCircle, ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const skills = [
  'Node.js', 'TypeScript', 'React', 'Python', 'Next.js',
  'AI/ML Integration', 'System Architecture', 'Cloud Platforms',
  'API Design', 'Database Design', 'DevOps', 'Technical Leadership',
]

const experience = [
  {
    title: 'Senior Full-Stack Engineer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Led development of cloud-native applications and AI-powered features serving thousands of users.',
    achievements: [
      'Architected and deployed scalable microservices infrastructure',
      'Implemented AI-driven automation reducing manual work by 60%',
      'Mentored junior developers and established best practices',
    ],
  },
  {
    title: 'Technical Consultant',
    company: 'Various Clients',
    period: '2018 - Present',
    description: 'Provided strategic technology consulting and hands-on development for small businesses and startups.',
    achievements: [
      'Modernized legacy systems for 10+ clients',
      'Delivered custom integrations and automation solutions',
      'Trained client teams on modern development practices',
    ],
  },
]

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero Section - Blueprint Style */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#2D2D2D]">
                Technical Portfolio &{' '}
                <span className="text-[#00A8E8]">Resume</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#6B7280] leading-relaxed">
                Experienced full-stack engineer and technical consultant specializing in 
                systems modernization, AI integration, and team leadership.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="/Jose_Gonzalez_G_Resume.pdf" download="Jose_Gonzalez_Resume.pdf">
                <Button size="lg" className="bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                  <DownloadSimple className="mr-2 group-hover:translate-y-1 transition-transform" weight="bold" />
                  Download Resume
                </Button>
              </a>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">
                  <EnvelopeSimple className="mr-2" weight="bold" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - Blueprint Style */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-8">Technical Skills</h2>
            <Card className="p-8 bg-white border-2 border-[#00A8E8]/10">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge className="px-4 py-2 text-sm font-medium bg-[#00A8E8]/10 text-[#00A8E8] hover:bg-[#00A8E8]/20 border-[#00A8E8]/20">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Blueprint Style */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-[#2D2D2D] mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 space-y-6 bg-white border-2 border-transparent hover:border-[#00A8E8]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#2D2D2D] mb-1">{job.title}</h3>
                      <p className="text-lg text-[#00A8E8] font-medium">{job.company}</p>
                    </div>
                    <Badge className="w-fit px-4 py-2 text-sm bg-[#00A8E8]/10 text-[#00A8E8] border-[#00A8E8]/20">{job.period}</Badge>
                  </div>
                  <p className="text-[#6B7280] text-lg leading-relaxed">{job.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-[#2D2D2D]">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-[#00A8E8] flex-shrink-0 mt-0.5" weight="fill" />
                          <span className="text-[#6B7280]">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section - Blueprint Style */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#2D2D2D] mb-8">Connect With Me</h2>
            <Card className="p-8 bg-white border-2 border-[#00A8E8]/10">
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/jose-gonzalez-garduno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#F8FAFB] hover:bg-[#00A8E8]/10 text-[#6B7280] hover:text-[#00A8E8] transition-all duration-300 border-2 border-transparent hover:border-[#00A8E8]/20"
                >
                  <GithubLogo size={24} weight="duotone" className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/josegonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#F8FAFB] hover:bg-[#00A8E8]/10 text-[#6B7280] hover:text-[#00A8E8] transition-all duration-300 border-2 border-transparent hover:border-[#00A8E8]/20"
                >
                  <LinkedinLogo size={24} weight="duotone" className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href="mailto:contact@jose.technology"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#F8FAFB] hover:bg-[#00A8E8]/10 text-[#6B7280] hover:text-[#00A8E8] transition-all duration-300 border-2 border-transparent hover:border-[#00A8E8]/20"
                >
                  <EnvelopeSimple size={24} weight="duotone" className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Email</span>
                </a>
              </div>
            </Card>
          </motion.div>
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
              Looking to Hire?
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              I'm available for contract work, consulting engagements, and full-time opportunities. 
              Let's discuss how I can contribute to your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                  Schedule a Call
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Button>
              </Link>
              <a href="/Jose_Gonzalez_G_Resume.pdf" download="Jose_Gonzalez_Resume.pdf">
                <Button size="lg" variant="outline" className="border-2 border-[#2D2D2D] text-[#2D2D2D] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">
                  <DownloadSimple className="mr-2" weight="bold" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
