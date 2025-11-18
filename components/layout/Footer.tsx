import Link from 'next/link'
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'

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
                src="/icon_logo_only.png"
                alt="Jose Technology Solutions" 
                className="h-10 w-10"
              />
              <h3 className="font-bold text-xl text-foreground">
                Jose Technology Solutions
              </h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Modernization, automation & advisory for small business.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">Services</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group">
                <span className="relative">
                  Custom Software Development
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group">
                <span className="relative">
                  Automation & Integrations
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link href="/services" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group">
                <span className="relative">
                  Technical Advisory
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group">
                <span className="relative">
                  About
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group">
                <span className="relative">
                  Blog
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:translate-x-2 group">
                <span className="relative">
                  Contact
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </span>
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/jose-gonzalez-garduno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-blue-500/50"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="duotone" />
              </a>
              <a
                href="https://www.linkedin.com/in/josegonzalez-g/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-muted hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-purple-500/50"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="duotone" />
              </a>
              <a
                href="mailto:contact@jose.technology"
                className="w-10 h-10 rounded-xl bg-muted hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-muted-foreground hover:text-white transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-cyan-500/50"
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
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-blue-600 transition-all duration-300 hover:scale-110">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
