import { Link } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { StatusPage } from '@/components/StatusPage'

export function NotFound() {
  return (
    <StatusPage
      eyebrow="404"
      title="Page not found"
      description="The page you're looking for doesn't exist or may have moved."
      actions={
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-6 py-3 text-sm font-semibold text-[#081b30] shadow-lg shadow-[#c9a24b]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#c9a24b]/30"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      }
    />
  )
}
