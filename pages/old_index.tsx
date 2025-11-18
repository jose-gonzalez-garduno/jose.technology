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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-slate-100">
        {/* Animated Background Boxes */}
        <div className="absolute inset-0 w-full h-full">
          <Boxes />
        </div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/40 via-transparent to-white/60 z-10 pointer-events-none" />
        
        <div className="relative z-20 max-w-6xl mx-auto px-6 py-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 backdrop-blur-md bg-gradient-to-br from-slate-800/70 via-blue-900/60 to-cyan-900/70 rounded-2xl p-6 md:p-8 shadow-xl border border-cyan-400/30 ring-1 ring-cyan-400/20"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 backdrop-blur-sm shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-400/40 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/70" />
              <span className="text-sm md:text-base font-bold text-cyan-100 tracking-wide">Available for Projects</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/70" />
            </motion.div>

            {/* Hero Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Thoughtful Engineering for
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 bg-clip-text text-transparent">Growing Businesses</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Not a platform, just skilled engineers: modern websites, integrations, and custom software to solve real operational problems. We use AI where it adds clear value to speed and accuracy.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                  Start a Modernization Review
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Button>
              </Link>
              <Link href="/#how-we-work">
              <Button size="lg" className="bg-cyan-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-slate-900 hover:text-white text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                  How We Work
                </Button>
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-8 pt-6 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2 text-white">
                <CheckCircle weight="fill" className="text-cyan-400" size={20} />
                <span>Practical Modernization</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-600" />
              <div className="hidden sm:flex items-center gap-2 text-white">
                <CheckCircle weight="fill" className="text-cyan-400" size={20} />
                <span>Measurable Outcomes</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-slate-600" />
              <Link href="/about#responsible-ai" className="hidden sm:flex items-center gap-2 hover:text-slate-200 transition-colors group text-white">
                <CheckCircle weight="fill" className="text-green-500 group-hover:text-green-400" size={20} />
                <span>Responsible AI Use</span>
              </Link>
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
              <Button size="lg" variant="outline" className="border-2 border-[#00A8E8] text-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 group">
                View All Services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Outcomes / Metrics Band */}
      <section className="py-12 bg-slate-900 border-y border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">10+ hrs/week</div>
              <p className="text-sm text-slate-400">Time saved through workflow automation</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">3-6 months</div>
              <p className="text-sm text-slate-400">Faster deployment with modernized systems</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400">ROI in weeks</div>
              <p className="text-sm text-slate-400">Not months—quick wins drive immediate value</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work - Methodology Section */}
      <section id="how-we-work" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              How We Work
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              A proven process focused on quick wins and measurable outcomes
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 opacity-20"></div>

            <div className="space-y-12">
              {[
                {
                  number: '01',
                  title: 'Discovery & Workflow Mapping',
                  description: 'We analyze your current processes, identify bottlenecks, and understand your team\'s daily pain points.'
                },
                {
                  number: '02',
                  title: 'Bottleneck & Opportunity Prioritization',
                  description: 'Together we rank improvements by impact vs. effort, creating a clear roadmap for high-value changes.'
                },
                {
                  number: '03',
                  title: 'Pilot & Validation',
                  description: 'Time-boxed implementation of the highest-priority improvement. We build, test, and refine before scaling.'
                },
                {
                  number: '04',
                  title: 'Rollout & Knowledge Transfer',
                  description: 'We deploy the solution, train your team, and document everything so you can maintain and extend it.'
                },
                {
                  number: '05',
                  title: 'Measurement & Iteration',
                  description: 'Track results, gather feedback, and refine. Then move to the next priority on your roadmap.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content Card */}
                    <div className="flex-1">
                      <Card className="p-8 bg-white border-2 border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/30">
                            {step.number}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">
                              {step.title}
                            </h3>
                            <p className="text-[#6B7280] leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Spacer for timeline alignment */}
                    <div className="hidden md:block flex-1"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                Start Your Modernization Review
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
                <Button size="lg" variant="outline" className="border-2 border-[#2D2D2D] text-[#2D2D2D] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">
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