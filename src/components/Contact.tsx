import type { ReactNode } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'
import { SectionPhotoBackdrop } from '@/components/SectionPhotoBackdrop'
import { SectionHeading } from '@/components/SectionHeading'
import { COMPANY, EMAILS, PHONES } from '@/data/company'

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone
  title: string
  children: ReactNode
}) {
  return (
    <div className="flex flex-col items-start gap-5 rounded-3xl border border-slate-200 bg-white p-8">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#0c2a4a] text-[#d9b968]">
        <Icon className="h-7 w-7" />
      </span>
      <span className="text-base leading-relaxed text-slate-600">
        <span className="block text-xl font-semibold text-[#081b30]">{title}</span>
        {children}
      </span>
    </div>
  )
}

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="contact" className="relative overflow-hidden bg-[#f5f7fa] py-24 lg:py-32">
      <SectionPhotoBackdrop image="/images/misc/control-tower.jpg" fadeTo="#f5f7fa" height="400px" priority />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div
          ref={ref}
          className={`reveal mx-auto max-w-xl text-center ${visible ? 'is-visible' : ''}`}
        >
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Connect"
            description="Your complete aviation supply chain partner. Reach out for pricing, availability or AOG support."
          />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          <ContactCard icon={Phone} title="Phone">
            {PHONES.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="mt-1 block whitespace-nowrap hover:text-[#0c2a4a]"
              >
                <span className="text-slate-600">{phone.label}:</span> {phone.display}
              </a>
            ))}
          </ContactCard>

          <ContactCard icon={Mail} title="Email">
            {EMAILS.map((email) => (
              <a
                key={email.href}
                href={email.href}
                className="mt-1 block break-all hover:text-[#0c2a4a]"
              >
                <span className="text-slate-600">{email.label}:</span> {email.display}
              </a>
            ))}
          </ContactCard>

          <ContactCard icon={MapPin} title="Address">
            {COMPANY.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </ContactCard>
        </div>
      </div>
    </section>
  )
}
