import { useReveal } from '@/lib/useReveal'

export function Showcase() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=2400&auto=format&fit=crop')",
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050f1e] via-[#050f1e]/50 to-[#050f1e]/20" />

      <div
        ref={ref}
        className={`reveal relative flex h-full flex-col items-center justify-center px-6 text-center ${
          visible ? 'is-visible' : ''
        }`}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b968]">
          Supporting Safe Skies Everyday
        </span>
        <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          Quality you can trust. Reliability you can count on. Partnership
          you can build on.
        </h2>
      </div>
    </section>
  )
}
