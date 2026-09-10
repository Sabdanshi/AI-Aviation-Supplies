import { createRouter } from '@tanstack/react-router'
import { ErrorFallback } from '@/components/ErrorFallback'
import { NotFound } from '@/components/NotFound'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultNotFoundComponent: NotFound,
    defaultErrorComponent: ErrorFallback,
  })

  return router
}
