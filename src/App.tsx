import { Router, Route, useRouter } from '@/lib/router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Home } from '@/pages/Home'
import { Services } from '@/pages/Services'
import { Portfolio } from '@/pages/Portfolio'
import { Blog } from '@/pages/Blog'
import { BlogPost } from '@/pages/BlogPost'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { Toaster } from '@/components/ui/sonner'

function AppContent() {
  const { currentPath } = useRouter()
  
  const blogPostMatch = currentPath.match(/^\/blog\/(.+)$/)
  const isBlogPost = blogPostMatch !== null

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        {isBlogPost && <BlogPost slug={blogPostMatch![1]} />}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App