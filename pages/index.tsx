import { motion } from 'framer-motion';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Boxes } from '@/components/ui/background-boxes';
import { ArrowRight, CheckCircle, Code, Palette, Rocket } from '@phosphor-icons/react';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Blueprint Style with Animated Background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950">
        {/* Animated Background Boxes */}
        <div className="absolute inset-0 w-full h-full">
          <Boxes />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/60 z-10 pointer-events-none" />
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 backdrop-blur-md bg-slate-900/60 rounded-3xl p-12 shadow-2xl border border-cyan-500/20 ring-1 ring-cyan-500/10"
          >
            {/* Trust Indicator */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/70" />
              <span className="text-base md:text-lg font-bold text-cyan-100 tracking-wide">Available for Projects</span>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/70" />
            </motion.div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              Technology Solutions
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Built for Growth</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Full-stack development, technical consulting, and digital solutions 
              that help small businesses scale efficiently.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link href="/services">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300 group">
                  View Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/10 hover:text-cyan-200 backdrop-blur-sm transition-colors duration-300">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-8 pt-8 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle weight="fill" className="text-cyan-400" size={20} />
                <span>Trusted by Small Businesses</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-600" />
              <div className="hidden sm:flex items-center gap-2">
                <CheckCircle weight="fill" className="text-cyan-400" size={20} />
                <span>Full-Stack Expertise</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Blueprint Style */}
      <section className="py-24 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              What I Build
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              From concept to deployment, I deliver complete solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Full-Stack Development',
                description: 'Custom web applications built with modern frameworks and best practices.',
                color: '#00A8E8'
              },
              {
                icon: Palette,
                title: 'UI/UX Design',
                description: 'User-centered designs that balance aesthetics with functionality.',
                color: '#00A8E8'
              },
              {
                icon: Rocket,
                title: 'Technical Consulting',
                description: 'Strategic guidance to help you make informed technology decisions.',
                color: '#00A8E8'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-white border-2 border-transparent hover:border-[#00A8E8]/20 transition-all duration-300 hover:shadow-lg">
                  <service.icon size={48} weight="duotone" className="text-[#00A8E8] mb-6" />
                  <h3 className="text-xl font-semibold text-[#2D2D2D] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-[#00A8E8]/5 transition-colors duration-300 group">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section - Blueprint Style */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              Let's discuss how I can help bring your ideas to life with modern, scalable technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
