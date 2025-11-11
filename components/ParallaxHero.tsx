import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useParallax } from '@/hooks/use-parallax'

interface ParallaxHeroProps {
  children: ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export function ParallaxHero({ children, className = '', intensity = 'medium' }: ParallaxHeroProps) {
  const speeds = {
    low: { slow: 0.2, medium: 0.3, fast: 0.4 },
    medium: { slow: 0.3, medium: 0.5, fast: 0.7 },
    high: { slow: 0.4, medium: 0.6, fast: 0.9 },
  }

  const speed = speeds[intensity]
  const parallaxSlowRef = useParallax(speed.slow)
  const parallaxMediumRef = useParallax(speed.medium)
  const parallaxFastRef = useParallax(speed.fast)

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div 
        ref={parallaxSlowRef}
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 will-change-transform"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.45_0.15_250_/_0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,oklch(0.68_0.18_25_/_0.1)_0%,transparent_50%)]" />
      </div>
      
      <motion.div 
        ref={parallaxMediumRef}
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none will-change-transform"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        ref={parallaxFastRef}
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none will-change-transform"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

interface ParallaxBackgroundProps {
  children: ReactNode
  className?: string
  intensity?: 'subtle' | 'normal'
}

export function ParallaxBackground({ children, className = '', intensity = 'subtle' }: ParallaxBackgroundProps) {
  const speed = intensity === 'subtle' ? 0.15 : 0.3
  const parallax = useParallax(speed)

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
        style={{ transform: `translateY(${parallax}px)` }}
      />
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
