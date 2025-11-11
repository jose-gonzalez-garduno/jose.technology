import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Clock, ArrowRight } from '@phosphor-icons/react'
import { Link } from '@/lib/router'
import { Button } from '@/components/ui/button'
import { ParallaxBackground } from '@/components/ParallaxHero'

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

export function Blog() {
  return (
    <div className="flex flex-col">
      <ParallaxBackground className="py-20" intensity="subtle">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Blog & Technical Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Thoughts on AI, modern development practices, and technology strategy for business leaders.
          </p>
        </div>
      </ParallaxBackground>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{post.category}</Badge>
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
                    
                    <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium">
                      Read article
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-12 bg-muted/30">
              <h3 className="text-2xl font-semibold mb-4">More Content Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to get notified when new articles are published.
              </p>
              <Link to="/contact">
                <Button>
                  Stay Updated
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
