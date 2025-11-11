import { Link } from '@/lib/router'
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'
import logoIcon from '@/assets/images/icon_logo_only.png'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-muted/50 via-background to-muted/30 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.90_0.01_240_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.90_0.01_240_/_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoIcon} 
                alt="jose.technology" 
                className="h-10 w-10"
              />
              <h3 className="font-bold text-xl text-foreground">
                jose.technology
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional technology consulting and AI services for small businesses.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span className="relative">
                  AI Consulting
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span className="relative">
                  Systems Modernization
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span className="relative">
                  Dev Teams
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span className="relative">
                  About
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span className="relative">
                  Blog
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors group">
                <span className="relative">
                  Contact
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/josegonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="duotone" />
              </a>
              <a
                href="https://linkedin.com/in/josegonzalez"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="duotone" />
              </a>
              <a
                href="mailto:jose@jose.technology"
                className="w-10 h-10 rounded-xl bg-muted hover:bg-accent/10 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} weight="duotone" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Jose Technology Solutions. All rights reserved.
          </p>
          <nav className="flex gap-8">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
