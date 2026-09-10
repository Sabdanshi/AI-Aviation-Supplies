import type { ReactNode } from 'react'
import { PageLayout } from '@/components/PageLayout'
import { SectionHeading } from '@/components/SectionHeading'

interface StatusPageProps {
  eyebrow: string
  title: string
  description: string
  actions: ReactNode
}

export function StatusPage({ eyebrow, title, description, actions }: StatusPageProps) {
  return (
    <PageLayout>
      <div className="flex min-h-[100svh] items-center justify-center bg-[#081b30] px-6 py-32 text-center">
        <div>
          <SectionHeading eyebrow={eyebrow} title={title} as="h1" />
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/70">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {actions}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
