import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/lib/router'
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Briefcase, GraduationCap, Lightbulb } from '@phosphor-icons/react'
import { ParallaxBackground } from '@/components/ParallaxHero'
import logoIcon from '@/assets/images/icon_logo_only.png'

export function About() {
  return (
    <div className="flex flex-col">
      <ParallaxBackground className="py-20" intensity="subtle">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                About Jose Technology Solutions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Helping small businesses leverage modern technology and AI to compete, scale, and succeed.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shadow-xl border-2 border-primary/10">
                <img 
                  src={logoIcon} 
                  alt="jose.technology logo" 
                  className="w-32 h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </ParallaxBackground>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">What Makes Me Different</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase size={24} className="text-primary" weight="duotone" />
                </div>
                <h3 className="text-xl font-semibold">Business-First Approach</h3>
                <p className="text-muted-foreground">
                  Technology serves your business, not the other way around. I focus on outcomes 
                  that matter to your bottom line.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap size={24} className="text-accent" weight="duotone" />
                </div>
                <h3 className="text-xl font-semibold">Knowledge Transfer</h3>
                <p className="text-muted-foreground">
                  I don't just build solutions—I teach your team how to maintain and extend them, 
                  reducing long-term dependency.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Lightbulb size={24} className="text-secondary" weight="duotone" />
                </div>
                <h3 className="text-xl font-semibold">Pragmatic Solutions</h3>
                <p className="text-muted-foreground">
                  The best solution is the simplest one that solves your problem. No over-engineering, 
                  no unnecessary complexity.
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Connect With Me</h2>
            <Card className="p-8">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always interested in connecting with fellow technologists, potential clients, 
                  and anyone passionate about using technology to solve real problems.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="https://github.com/josegonzalez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <GithubLogo size={24} weight="bold" />
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/josegonzalez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <LinkedinLogo size={24} weight="bold" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:jose@jose.technology"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <EnvelopeSimple size={24} weight="bold" />
                    <span className="font-medium">jose@jose.technology</span>
                  </a>
                </div>
                <div className="pt-4">
                  <Link to="/contact">
                    <Button size="lg">
                      Let's Work Together
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
