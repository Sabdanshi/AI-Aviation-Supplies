interface LogoItem {
  name: string
  logo?: string
}

interface LogoGridProps {
  items: LogoItem[]
  visible: boolean
  theme: 'light' | 'dark'
  columns?: string
  gap?: string
  cardHeight?: string
  rounded?: string
  imageMaxHeight?: string
  delayStep?: number
  hoverLift?: boolean
}

export function LogoGrid({
  items,
  visible,
  theme,
  columns = 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  gap = 'gap-4',
  cardHeight = 'h-20',
  rounded = 'rounded-xl',
  imageMaxHeight = 'max-h-10',
  delayStep = 0.04,
  hoverLift = true,
}: LogoGridProps) {
  const isDark = theme === 'dark'

  return (
    <div className={`mt-14 grid ${gap} ${columns}`}>
      {items.map((item, index) => (
        <div
          key={item.name}
          className={`reveal flex ${cardHeight} ${rounded} items-center justify-center border px-5 text-center transition-all duration-300 ${
            hoverLift ? 'hover:-translate-y-1' : ''
          } ${
            isDark
              ? 'border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[#c9a24b]/40 hover:bg-white/[0.06]'
              : 'border-slate-200 bg-white hover:border-[#c9a24b]/40 hover:shadow-md'
          } ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: `${delayStep * index}s` }}
        >
          {item.logo ? (
            <img
              src={item.logo}
              alt={item.name}
              loading="lazy"
              className={`${imageMaxHeight} max-w-full object-contain`}
            />
          ) : (
            <span
              className={`text-sm font-semibold ${isDark ? 'text-white/90' : 'text-[#081b30]'}`}
            >
              {item.name}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
