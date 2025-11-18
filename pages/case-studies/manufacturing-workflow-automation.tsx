import { Layout } from "@/components/layout/Layout"
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, TrendUp, Target, Lightbulb, Rocket } from '@phosphor-icons/react'

export default function ManufacturingWorkflowAutomation() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 transition-colors text-sm font-semibold">
              ← Back to Case Studies
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-semibold">Automation</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">Integration</span>
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">ROI in 6 weeks</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D]">
              Manufacturing Workflow Automation
            </h1>
            <p className="text-xl text-[#6B7280] leading-relaxed">
              How we eliminated 12 hours of manual work per week and reduced order processing time by 80%
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-400">12 hrs/week</div>
              <p className="text-sm text-slate-400">Manual work eliminated</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-400">80%</div>
              <p className="text-sm text-slate-400">Faster order processing</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-400">6 weeks</div>
              <p className="text-sm text-slate-400">Time to ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {/* Client Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-[#2D2D2D]">Client Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Industry</p>
                    <p className="text-[#2D2D2D] font-semibold">Manufacturing</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Company Size</p>
                    <p className="text-[#2D2D2D] font-semibold">50-100 employees</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Project Duration</p>
                    <p className="text-[#2D2D2D] font-semibold">8 weeks (including pilot)</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] mb-1">Technologies Used</p>
                    <p className="text-[#2D2D2D] font-semibold">Zapier, REST APIs, Custom Scripts</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* The Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Target size={24} className="text-white" weight="duotone" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D2D2D]">The Challenge</h2>
            </div>
            <div className="space-y-4 text-lg text-[#4B5563] leading-relaxed">
              <p>
                The company was processing 30-50 orders per week, with each order requiring manual data entry across three systems: their CRM (HubSpot), ERP system, and inventory management platform.
              </p>
              <p>
                <strong>Specific pain points:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" weight="fill" />
                  <span>Sales team spent 15+ hours/week manually copying order details between systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" weight="fill" />
                  <span>Human error led to 2-3 incorrect orders per month, causing delays and customer dissatisfaction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" weight="fill" />
                  <span>No real-time inventory visibility—frequent stock-outs and overstock situations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-red-500 flex-shrink-0 mt-1" weight="fill" />
                  <span>Order processing delays of 24-48 hours impacting delivery times</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                <Lightbulb size={24} className="text-white" weight="duotone" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D2D2D]">The Solution</h2>
            </div>
            <div className="space-y-4 text-lg text-[#4B5563] leading-relaxed">
              <p>
                We implemented a three-phase automation approach:
              </p>
              
              <Card className="p-6 border-2 border-cyan-200 bg-cyan-50/50">
                <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">1</span>
                  Discovery & Workflow Mapping (Week 1)
                </h3>
                <p>
                  Documented the complete order-to-fulfillment workflow, identifying 7 distinct handoff points where data was manually re-entered or verified.
                </p>
              </Card>

              <Card className="p-6 border-2 border-cyan-200 bg-cyan-50/50">
                <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">2</span>
                  Pilot Integration (Weeks 2-4)
                </h3>
                <p>
                  Built automated workflows connecting HubSpot → ERP → Inventory system using Zapier and custom API scripts. Started with 5 test orders per week to validate accuracy.
                </p>
              </Card>

              <Card className="p-6 border-2 border-cyan-200 bg-cyan-50/50">
                <h3 className="font-bold text-[#2D2D2D] mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">3</span>
                  Full Rollout & Training (Weeks 5-8)
                </h3>
                <p>
                  Scaled to all orders, trained the sales team on the new process, and established monitoring dashboards for tracking errors and bottlenecks.
                </p>
              </Card>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Rocket size={24} className="text-white" weight="duotone" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D2D2D]">The Results</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-green-200 bg-green-50/50">
                <div className="flex items-start gap-4">
                  <TrendUp size={32} className="text-green-600 flex-shrink-0" weight="duotone" />
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-2">Time Savings</h3>
                    <p className="text-[#4B5563]">12 hours per week freed up for the sales team to focus on customer relationships instead of data entry</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-green-200 bg-green-50/50">
                <div className="flex items-start gap-4">
                  <TrendUp size={32} className="text-green-600 flex-shrink-0" weight="duotone" />
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-2">Error Reduction</h3>
                    <p className="text-[#4B5563]">Order errors dropped from 2-3 per month to zero in the first 3 months post-launch</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-green-200 bg-green-50/50">
                <div className="flex items-start gap-4">
                  <TrendUp size={32} className="text-green-600 flex-shrink-0" weight="duotone" />
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-2">Processing Speed</h3>
                    <p className="text-[#4B5563]">Order processing time reduced from 24-48 hours to 2-4 hours (80% improvement)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 border-green-200 bg-green-50/50">
                <div className="flex items-start gap-4">
                  <TrendUp size={32} className="text-green-600 flex-shrink-0" weight="duotone" />
                  <div>
                    <h3 className="font-bold text-[#2D2D2D] mb-2">ROI Timeline</h3>
                    <p className="text-[#4B5563]">Break-even achieved in 6 weeks; projected annual savings of $35,000 in labor costs</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Client Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
              <blockquote className="text-xl text-[#2D2D2D] italic leading-relaxed">
                "This automation didn't just save us time—it transformed how our team works. Sales can now focus on building relationships instead of pushing paper, and we haven't had a single order error since launch. Best investment we made this year."
              </blockquote>
              <p className="mt-4 text-[#6B7280] font-semibold">— Operations Manager</p>
            </Card>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#2D2D2D]">Key Takeaways</h2>
            <div className="space-y-4">
              <Card className="p-6 border-2 border-slate-200">
                <h3 className="font-bold text-[#2D2D2D] mb-2">Start with a Pilot</h3>
                <p className="text-[#4B5563]">Testing with 5 orders/week before full rollout allowed us to catch edge cases and build team confidence</p>
              </Card>
              <Card className="p-6 border-2 border-slate-200">
                <h3 className="font-bold text-[#2D2D2D] mb-2">No AI Needed</h3>
                <p className="text-[#4B5563]">This was a straightforward integration project—no machine learning required, just clean data flow</p>
              </Card>
              <Card className="p-6 border-2 border-slate-200">
                <h3 className="font-bold text-[#2D2D2D] mb-2">Knowledge Transfer Matters</h3>
                <p className="text-[#4B5563]">Training the team to monitor and troubleshoot the automation ensured long-term success without ongoing support</p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Automate Your Workflows?
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
              Let's identify your highest-impact automation opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#00A8E8] hover:bg-[#0096D1] text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
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
