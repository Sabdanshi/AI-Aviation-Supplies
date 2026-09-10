import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  as?: 'h1' | 'h2'
}

export function SectionHeading({ eyebrow, title, description, as = 'h2' }: SectionHeadingProps) {
  const Tag = as
  return (
    <>
      <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b968]">
        {eyebrow}
      </span>
      <Tag className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </Tag>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-white/80">{description}</p>
      )}
    </>
  )
}
