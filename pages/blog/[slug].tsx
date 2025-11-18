import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, ArrowLeft } from '@phosphor-icons/react'
import Link from 'next/link'
import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@/components/layout/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'

const blogContent: Record<string, {
  title: string
  category: string
  date: string
  readTime: string
  content: ReactElement
}> = {
  'getting-started-with-ai': {
    title: 'Getting Started with AI in Your Small Business',
    category: 'AI Consulting',
    date: '2024-01-15',
    readTime: '5 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Artificial Intelligence isn't just for tech giants anymore. Small businesses can leverage AI 
          to automate tasks, gain insights, and compete more effectively. Here's how to start.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Start with Your Biggest Pain Points</h2>
        <p>
          Don't try to implement AI everywhere at once. Instead, identify your most time-consuming or 
          error-prone processes. Common starting points include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>Customer service automation with chatbots</li>
          <li>Document processing and data entry</li>
          <li>Inventory forecasting and demand prediction</li>
          <li>Email and content generation</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Choose the Right Tools</h2>
        <p>
          You don't need to build AI from scratch. Many affordable, ready-to-use solutions exist:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>ChatGPT and Claude for content and customer support</li>
          <li>Zapier and Make.com for workflow automation</li>
          <li>Industry-specific AI tools tailored to your sector</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Prepare Your Team</h2>
        <p>
          Technology is only valuable if your team uses it. Invest time in training and change management. 
          Start small, celebrate wins, and gradually expand AI adoption across your organization.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Measure and Iterate</h2>
        <p>
          Set clear metrics before implementation. Track time saved, error reduction, or revenue impact. 
          Use these insights to refine your approach and justify further AI investments.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Need Help Getting Started?</h3>
          <p className="text-muted-foreground mb-4">
            I help small businesses identify AI opportunities, select the right tools, and implement 
            solutions that deliver real ROI.
          </p>
          <Link href="/contact">
            <Button className="bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300">Schedule a Consultation</Button>
          </Link>
        </div>
      </div>
    ),
  },
  'modernizing-legacy-systems': {
    title: 'Modernizing Legacy Systems: A Practical Guide',
    category: 'Systems',
    date: '2024-01-08',
    readTime: '7 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-muted-foreground mb-8">
          Legacy systems keep your business running but often hold you back. Learn how to modernize 
          strategically without disrupting operations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Assess Before You Act</h2>
        <p>
          Not every legacy system needs replacement. Start with a thorough assessment:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li>What business processes depend on this system?</li>
          <li>What are the maintenance costs and risks?</li>
          <li>Are there integration opportunities with modern tools?</li>
          <li>What would failure cost your business?</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Choose Your Modernization Strategy</h2>
        <p>
          Different systems require different approaches:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
          <li><strong>Rehost:</strong> Move to cloud with minimal changes (fastest)</li>
          <li><strong>Refactor:</strong> Optimize code for cloud-native benefits (balanced)</li>
          <li><strong>Rebuild:</strong> Redesign using modern architecture (most future-proof)</li>
          <li><strong>Replace:</strong> Adopt off-the-shelf SaaS solutions (lowest risk)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Plan for Business Continuity</h2>
        <p>
          Your business can't stop while you modernize. Implement in phases, maintain parallel systems 
          during transition, and have rollback plans ready. Test extensively before go-live.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Don't Forget the People</h2>
        <p>
          System modernization affects workflows and roles. Involve stakeholders early, provide training, 
          and communicate changes clearly. Success depends as much on adoption as on technology.
        </p>

        <div className="bg-muted/50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold mb-3">Ready to Modernize?</h3>
          <p className="text-muted-foreground mb-4">
            I've helped numerous businesses navigate system modernization successfully. Let's discuss 
            your specific situation and build a practical roadmap.
          </p>
          <Link href="/contact">
            <Button className="bg-[#00A8E8] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300">Get Expert Guidance</Button>
          </Link>
        </div>
      </div>
    ),
  },
}

interface BlogPostProps {
  slug: string
}

export default function BlogPost() {
  const router = useRouter()
  const { slug } = router.query
  const post = blogContent[slug as string]

  if (!post) {
    return (
      <Layout>
        <div className="flex flex-col min-h-[60vh] items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <p className="text-muted-foreground">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Link href="/blog">
              <Button>
                <ArrowLeft className="mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
    <div className="flex flex-col">
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-8">
              <ArrowLeft className="mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="space-y-6">
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

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <article className="text-foreground leading-relaxed">
            {post.content}
          </article>
        </div>
      </section>
    </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = Object.keys(blogContent)
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}
