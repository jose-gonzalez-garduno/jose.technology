import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DownloadSimple, EnvelopeSimple, LinkedinLogo, GithubLogo, CheckCircle } from '@phosphor-icons/react'
import { Link } from '@/lib/router'
import { motion } from 'framer-motion'
import { ParallaxHero } from '@/components/ParallaxHero'

const skills = [
  'TypeScript', 'React', 'Node.js', 'Python', 'Next.js',
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

export function Portfolio() {
  return (
    <div className="flex flex-col">
      <ParallaxHero className="py-24" intensity="medium">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-md bg-background/30 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-2xl space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                Technical Portfolio &{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary to-accent">
                  Resume
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Experienced full-stack engineer and technical consultant specializing in AI integration, 
                systems modernization, and team leadership.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                <DownloadSimple className="mr-2 group-hover:translate-y-1 transition-transform" weight="bold" />
                Download Resume
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 transition-colors duration-300">
                  <EnvelopeSimple className="mr-2" weight="bold" />
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </ParallaxHero>

      <section className="py-24 bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.90_0.01_240_/_0.2)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.90_0.01_240_/_0.2)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-6xl mx-auto px-6 space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
            <Card className="p-8 border-2 hover:border-primary/20 transition-colors duration-300 bg-gradient-to-br from-card via-card to-primary/5">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="px-4 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          <div>
            <h2 className="text-4xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 space-y-6 border-2 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 bg-gradient-to-br from-card via-card to-accent/5">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{job.title}</h3>
                        <p className="text-lg text-primary font-medium">{job.company}</p>
                      </div>
                      <Badge variant="outline" className="w-fit px-4 py-2 text-sm border-2">{job.period}</Badge>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">{job.description}</p>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-accent flex-shrink-0 mt-0.5" weight="fill" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
            <Card className="p-8 border-2 hover:border-primary/20 transition-colors duration-300 bg-gradient-to-br from-card via-card to-secondary/5">
              <div className="flex flex-wrap gap-6">
                <a
                  href="https://github.com/josegonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <GithubLogo size={24} weight="duotone" className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/josegonzalez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
                >
                  <LinkedinLogo size={24} weight="duotone" className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a
                  href="mailto:hello@jose.technology"
                  className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300"
                >
                  <EnvelopeSimple size={24} weight="duotone" className="group-hover:scale-110 transition-transform" />
                  <span className="font-semibold">Email</span>
                </a>
              </div>
            </Card>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking to Hire?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm available for contract work, consulting engagements, and full-time opportunities. 
              Let's discuss how I can contribute to your team.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                Schedule a Call
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 transition-colors duration-300">
              <DownloadSimple className="mr-2" weight="bold" />
              Download Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
