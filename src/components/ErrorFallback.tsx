import { useEffect } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowLeft, RotateCw } from 'lucide-react'
import { StatusPage } from '@/components/StatusPage'

interface ErrorFallbackProps {
  error: unknown
  reset: () => void
}

export function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error(error)
    }
    // No dedicated error-tracking service is wired up; report via GA (already
    // loaded) so production errors leave some trace instead of vanishing.
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'exception', {
        description: error instanceof Error ? error.message : String(error),
        fatal: false,
      })
    }
  }, [error])

  return (
    <StatusPage
      eyebrow="Something went wrong"
      title="We hit a snag loading this page"
      description="Please try again, or head back to the homepage. If the problem persists, contact us and we'll take a look."
      actions={
        <>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-6 py-3 text-sm font-semibold text-[#081b30] shadow-lg shadow-[#c9a24b]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c9a24b]/30"
          >
            <RotateCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-white/40"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </>
      }
    />
  )
}
