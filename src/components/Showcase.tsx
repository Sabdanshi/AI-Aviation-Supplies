import { useReveal } from '@/lib/useReveal'

const DOOR_TEXTURE = {
  backgroundImage:
    'repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0 2px, transparent 2px 34px)',
}

export function Showcase() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/misc/hangar-showcase.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050f1e] via-[#050f1e]/50 to-[#050f1e]/20" />

      {/* Hangar doors: slide open to reveal the image once the section is in view */}
      <div
        aria-hidden="true"
        style={DOOR_TEXTURE}
        className={`hangar-door absolute inset-y-0 left-0 z-20 w-1/2 bg-[#050f1e] shadow-[10px_0_40px_rgba(0,0,0,0.45)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          visible ? '-translate-x-full' : 'translate-x-0'
        }`}
      />
      <div
        aria-hidden="true"
        style={DOOR_TEXTURE}
        className={`hangar-door absolute inset-y-0 right-0 z-20 w-1/2 bg-[#050f1e] shadow-[-10px_0_40px_rgba(0,0,0,0.45)] transition-transform duration-[1400ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          visible ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      <div
        ref={ref}
        className={`reveal reveal-delay-2 relative z-10 flex h-full flex-col items-center justify-center px-6 text-center ${
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
