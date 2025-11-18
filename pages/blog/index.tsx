import { Layout } from "@/components/layout/Layout"
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const blogPosts = [
  {
    slug: 'getting-started-with-ai',
    title: 'Getting Started with AI in Your Small Business',
    excerpt: 'Practical strategies for implementing AI without overwhelming your team or breaking the bank. Learn where to start and what to avoid.',
    category: 'AI Consulting',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    slug: 'modernizing-legacy-systems',
    title: 'Modernizing Legacy Systems: A Practical Guide',
    excerpt: 'How to approach system modernization strategically, minimize risk, and ensure business continuity throughout the transition.',
    category: 'Systems',
    date: '2024-01-08',
    readTime: '7 min read',
  },
]

export default function Blog() {
  return (
    <Layout>
      {/* Hero Section - Blueprint Style */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-40" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#2D2D2D]">
              Blog & Technical Insights
            </h1>
            <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed">
              Thoughts on AI, modern development practices, and technology strategy for business leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section - Blueprint Style */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="p-6 bg-white border-2 border-transparent hover:border-[#00A8E8]/20 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B7280]">
                        <Badge className="bg-[#00A8E8]/10 text-[#00A8E8] border-[#00A8E8]/20">{post.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-semibold text-[#2D2D2D] group-hover:text-[#00A8E8] transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-[#6B7280] leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-[#00A8E8] font-medium">
                        Read article
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} weight="bold" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12"
          >
            <Card className="p-12 bg-white border-2 border-[#00A8E8]/10 text-center">
              <h3 className="text-2xl font-semibold text-[#2D2D2D] mb-4">More Content Coming Soon</h3>
              <Link href="/contact">
                <Button className="bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300">
                  Get Connected
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
