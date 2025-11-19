import Head from 'next/head'
import { Layout } from "@/components/layout/Layout"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle, ArrowRight } from '@phosphor-icons/react'

const projectHighlights = [
  {
    title: 'Enterprise Dialer System Optimization',
    summary: 'Delivered scalable, compliant workflows in Genesys Cloud CX + Pega Platform for Fortune 500 client. Reduced agent idle time by 35%, improved call routing accuracy by 42%, ensured TCPA compliance.',
    tech: 'Genesys Cloud CX, Pega PRPC, REST APIs, AWS Lambda',
    metric: '35% reduction in idle time'
  },
  {
    title: 'AWS Data Pipeline Automation',
    summary: 'Architected serverless automation for high-volume data deletion across 12M+ records. Cut processing time from 6 hours to 45 minutes, reduced AWS costs by $2,400/month, maintained full audit trails.',
    tech: 'AWS Lambda, DynamoDB, S3, Step Functions, Python',
    metric: '88% faster processing'
  },
  {
    title: 'Custom API Integration Platform',
    summary: 'Built microservices-based integration layer connecting CRM, accounting, and fulfillment systems for mid-market SaaS company. Reduced API response times by 60%, eliminated manual data entry for 200+ daily transactions.',
    tech: 'Node.js, Express, PostgreSQL, Redis, Docker',
    metric: '60% faster API responses'
  },
  {
    title: 'Manufacturing Workflow Automation',
    summary: 'Implemented end-to-end order processing automation for industrial equipment manufacturer. Eliminated 15 hours/week of manual work, reduced order errors by 78%, improved customer delivery accuracy to 99.2%.',
    tech: 'Python, FastAPI, PostgreSQL, RabbitMQ, React',
    metric: '15 hours/week saved'
  },
  {
    title: 'Legacy System Modernization',
    summary: 'Migrated 10-year-old monolithic application to cloud-native microservices for financial services client. Improved system uptime from 97% to 99.8%, reduced deployment time from days to hours, cut hosting costs by 40%.',
    tech: 'Java Spring Boot, Docker, Kubernetes, AWS ECS, PostgreSQL',
    metric: '99.8% uptime achieved'
  },
  {
    title: 'Real-Time Analytics Dashboard',
    summary: 'Designed and deployed executive dashboard consolidating data from 7 disparate systems. Provided real-time KPI visibility, reduced report generation time from 2 days to instant, enabled data-driven decision making.',
    tech: 'React, D3.js, Node.js, Elasticsearch, AWS',
    metric: 'Real-time vs 2-day lag'
  },
  {
    title: 'E-Commerce Platform Enhancement',
    summary: 'Optimized checkout flow and payment processing for online retailer processing $2M+ monthly. Reduced cart abandonment by 23%, improved page load times by 55%, increased conversion rate by 18%.',
    tech: 'Next.js, Stripe API, Redis, PostgreSQL, Vercel',
    metric: '23% fewer abandonments'
  },
  {
    title: 'Education Platform Development',
    summary: 'Built interactive coding environment for technical education provider. Supported 500+ concurrent students, enabled real-time code collaboration, integrated automated grading reducing instructor workload by 40%.',
    tech: 'React, Monaco Editor, WebSockets, Python, Docker',
    metric: '500+ concurrent users'
  },
]

export default function Portfolio() {
  const reduce = useReducedMotion();
  return (
    <Layout>
      <Head>
        <title>Portfolio | jose.technology</title>
        <meta name="description" content="Consulting expertise in enterprise systems, workflow automation, custom software, and modern website builds—outcome-focused delivery." />
      </Head>

      {/* Hero */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Expert Engineering & <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">Technology Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Trusted advisor for enterprise systems, workflow automation, custom software, and modern website builds—focused on measurable outcomes tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/contact"> 
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 group">Request a Consulting Session</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 hover:text-white transition-all duration-300 group">View Services</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.header
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Professional Summary</h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Senior Software Engineer and emerging technical consultant translating complex requirements into actionable plans and scalable solutions. Proven record improving system reliability, streamlining workflows, modernizing products, and leading cross-functional delivery. Focused on measurable outcomes—cost reduction, compliance alignment, and improved customer experience.
            </p>
          </motion.header>
        </div>
      </section>

      {/* Core Technical Expertise */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Core Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="p-8 bg-white/90 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold text-slate-800">Engineering & Development</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm md:text-base">
                <li>Python, Java, JavaScript, Node.js, SQL</li>
                <li>Frameworks: React, Express.js, Angular</li>
                <li>REST APIs, microservices, serverless architecture</li>
              </ul>
            </Card>
            <Card className="p-8 bg-white/90 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold text-slate-800">Workflow Automation & Integrations</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm md:text-base">
                <li>CI/CD pipelines, Git workflows</li>
                <li>Containerized services & targeted automation</li>
                <li>AI applied selectively for measurable value</li>
              </ul>
            </Card>
            <Card className="p-8 bg-white/90 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold text-slate-800">Cloud Systems</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm md:text-base">
                <li>AWS (Databases, Functions, Pipelines)</li>
                <li>Genesys Cloud CX (Certified Professional)</li>
                <li>Pega Platform (Certified System Architect)</li>
                <li>Alvaria/Noble System (Certified Noble University)</li>
              </ul>
            </Card>
            <Card className="p-8 bg-white/90 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/30 transition">
              <h3 className="text-xl font-semibold text-slate-800">Compliance & Leadership</h3>
              <ul className="mt-4 space-y-2 text-slate-600 text-sm md:text-base">
                <li>Audit-ready workflows & secure coding practices</li>
                <li>Agile sprint coordination & roadmap execution</li>
                <li>Cross-functional stakeholder alignment</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Consulting Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Technical Advisory</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Strategic technology guidance for growing businesses—architecture decisions, vendor selection, and scalable roadmaps.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• System architecture review & recommendations</li>
                    <li>• Technology stack evaluation & selection</li>
                    <li>• Roadmap planning & prioritization</li>
                    <li>• Risk assessment & mitigation strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Best For:</h4>
                  <p className="text-slate-600">Small to mid-market companies needing senior technical leadership without full-time hire</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Timeline:</h4>
                  <p className="text-slate-600">2-4 weeks for initial assessment; ongoing retainer available</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Custom Software & Websites</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Purpose-built web applications, modern websites, and bespoke tools designed to solve your specific business challenges.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Full-stack web application development</li>
                    <li>• Modern, responsive website design & build</li>
                    <li>• Custom internal tools & dashboards</li>
                    <li>• Mobile-responsive, cloud-ready delivery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Best For:</h4>
                  <p className="text-slate-600">Businesses needing custom solutions that off-the-shelf software can't provide</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Timeline:</h4>
                  <p className="text-slate-600">4-12 weeks depending on scope; iterative delivery every 2 weeks</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Workflow Automation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Eliminate repetitive tasks, connect your existing tools, and intelligently route information—with selective AI where it adds value.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">What You Get:</h4>
                  <ul className="space-y-1 text-slate-600">
                    <li>• System integration & data synchronization</li>
                    <li>• Process automation & workflow orchestration</li>
                    <li>• Email/document processing pipelines</li>
                    <li>• Targeted AI for classification & routing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Best For:</h4>
                  <p className="text-slate-600">Teams spending 10+ hours/week on manual data entry or repetitive tasks</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1">Timeline:</h4>
                  <p className="text-slate-600">2-6 weeks for initial automation; expandable as needs grow</p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-8 p-6 bg-cyan-50 border border-cyan-200 rounded-lg">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-cyan-700">AI Integration Philosophy:</span> I apply AI solutions selectively—only when they demonstrably improve speed, accuracy, or reliability. No AI for the sake of AI.
            </p>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto px-6 space-y-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Project Highlights</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real projects, real results. Each engagement focused on measurable outcomes that drive business value.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectHighlights.map((p) => (
              <Card key={p.title} className="p-8 bg-white/90 backdrop-blur border border-cyan-500/10 hover:border-cyan-400/40 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">{p.title}</h3>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full whitespace-nowrap ml-3">{p.metric}</span>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">{p.summary}</p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 font-medium">Tech Stack:</p>
                  <p className="text-sm text-slate-600 mt-1">{p.tech}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-cyan text-center relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let’s Work Together</h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
            Solve your engineering, integration, and workflow challenges with tailored solutions—from modern websites to targeted automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white font-semibold shadow-lg shadow-slate-900/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110">Request a Consulting Session</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-2 border-[#2D2D2D] text-[#2D2D2D] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300">View Services</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
