import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

interface RouterContextType {
  currentPath: string
  navigate: (path: string) => void
}

const RouterContext = createContext<RouterContextType | undefined>(undefined)

export function Router({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setCurrentPath(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function useRouter() {
  const context = useContext(RouterContext)
  if (!context) {
    throw new Error('useRouter must be used within Router')
  }
  return context
}

interface LinkProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function Link({ to, children, className, onClick }: LinkProps) {
  const { navigate } = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(to)
    onClick?.()
  }

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

interface RouteProps {
  path: string
  children: ReactNode
}

export function Route({ path, children }: RouteProps) {
  const { currentPath } = useRouter()
  
  if (path === currentPath) {
    return <>{children}</>
  }
  
  return null
}
