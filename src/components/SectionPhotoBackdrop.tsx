interface SectionPhotoBackdropProps {
  image: string
  fadeTo?: string
  height?: string
  /** Set when this backdrop is the first thing visible on its page (no scroll needed). */
  priority?: boolean
}

export function SectionPhotoBackdrop({
  image,
  fadeTo = '#ffffff',
  height = '460px',
  priority = false,
}: SectionPhotoBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0"
      style={{ height }}
    >
      {/*
        The wrapper's `height` above (always set, defaults to 460px) is what
        prevents layout shift here — it's sized before the image loads, so
        the image itself just fills it via h-full/w-full rather than relying
        on its own intrinsic dimensions.
      */}
      <img
        src={image}
        alt=""
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(5,15,30,0.88) 0%, rgba(8,27,58,0.55) 55%, ${fadeTo} 95%)`,
        }}
      />
    </div>
  )
}
