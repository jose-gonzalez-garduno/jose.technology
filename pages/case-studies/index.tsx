import { Layout } from "@/components/layout/Layout"
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, TrendUp } from '@phosphor-icons/react'

const caseStudies = [
  {
    slug: 'manufacturing-workflow-automation',
    title: 'Manufacturing Workflow Automation',
    client: 'Mid-Size Manufacturing Company',
    industry: 'Manufacturing',
    challenge: 'Manual order processing taking 15+ hours per week',
    result: '12 hours/week saved, 40% faster order fulfillment',
    tags: ['Automation', 'Integration', 'ROI in 6 weeks'],
    excerpt: 'Eliminated manual data entry between CRM and ERP systems, reducing order processing time by 80%.'
  }
]

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-[#2D2D2D]">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Real examples of modernization projects that delivered measurable results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-white border-2 border-slate-200 hover:border-cyan-400/50 hover:shadow-xl transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div>
                      <p className="text-sm text-[#6B7280] mb-2">{study.client} • {study.industry}</p>
                      <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">{study.title}</h2>
                      <p className="text-lg text-[#6B7280] leading-relaxed mb-4">{study.excerpt}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 py-6 border-y border-slate-200">
                      <div>
                        <p className="text-sm text-[#6B7280] mb-2">Challenge</p>
                        <p className="text-[#2D2D2D] font-semibold">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#6B7280] mb-2">Result</p>
                        <p className="text-cyan-600 font-semibold flex items-center gap-2">
                          <TrendUp size={20} weight="bold" />
                          {study.result}
                        </p>
                      </div>
                    </div>

                    <Link href={`/case-studies/${study.slug}`}>
                      <Button variant="outline" className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 transition-colors group">
                        Read Full Case Study
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Modernize Your Operations?
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can deliver similar results for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">
                Start Your Modernization Review
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
