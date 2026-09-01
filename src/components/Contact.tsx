import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { categories } from '@/data/products'
import { useReveal } from '@/lib/useReveal'

interface FormState {
  name: string
  company: string
  email: string
  phone: string
  product: string
  message: string
}

const INITIAL_STATE: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  message: '',
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  const [fields, setFields] = useState<FormState>(INITIAL_STATE)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (!fields.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!fields.company.trim()) nextErrors.company = 'Please enter your company.'
    if (!fields.email.trim() || !EMAIL_PATTERN.test(fields.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!fields.phone.trim()) nextErrors.phone = 'Please enter a phone number.'
    if (!fields.product) nextErrors.product = 'Please select a product area.'
    if (!fields.message.trim()) nextErrors.message = 'Please add a short message.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })
      setStatus('success')
      setFields(INITIAL_STATE)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative bg-[#f5f7fa] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-5">
          <div
            ref={ref}
            className={`reveal lg:col-span-2 ${visible ? 'is-visible' : ''}`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b]">
              Get In Touch
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#081b30] sm:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Your complete aviation supply chain partner. Reach out for
              pricing, availability or AOG support.
            </p>

            <div className="mt-9 space-y-5">
              <a
                href="tel:+971529250423"
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-200 hover:border-[#c9a24b]/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c2a4a] text-[#d9b968]">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-600">
                  <span className="block font-semibold text-[#081b30]">Phone</span>
                  +971 52 925 0423 · +971 58 620 4996
                </span>
              </a>
              <a
                href="mailto:sales@airlinkspares.com"
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-200 hover:border-[#c9a24b]/40"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c2a4a] text-[#d9b968]">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-600">
                  <span className="block font-semibold text-[#081b30]">Email</span>
                  sales@airlinkspares.com
                </span>
              </a>
              <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0c2a4a] text-[#d9b968]">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm text-slate-600">
                  <span className="block font-semibold text-[#081b30]">Address</span>
                  Mussafah M-45, Store 29, Abu Dhabi, UAE
                </span>
              </div>
            </div>
          </div>

          <div
            className={`reveal reveal-delay-1 lg:col-span-3 ${visible ? 'is-visible' : ''}`}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-[#081b30]">
                    Enquiry sent successfully
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-500">
                    Thank you for considering Airlink as your aviation supply
                    partner. Our team will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-[#c9a24b]/40"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-[#081b30]">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={fields.name}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-[#081b30] outline-none transition-colors focus:border-[#c9a24b]"
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="text-sm font-medium text-[#081b30]">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={fields.company}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-[#081b30] outline-none transition-colors focus:border-[#c9a24b]"
                      placeholder="Company name"
                    />
                    {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-[#081b30]">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-[#081b30] outline-none transition-colors focus:border-[#c9a24b]"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-[#081b30]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={fields.phone}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-[#081b30] outline-none transition-colors focus:border-[#c9a24b]"
                      placeholder="+971 ..."
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="product" className="text-sm font-medium text-[#081b30]">
                      Product Area
                    </label>
                    <select
                      id="product"
                      name="product"
                      value={fields.product}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-[#081b30] outline-none transition-colors focus:border-[#c9a24b]"
                    >
                      <option value="" disabled>
                        Select a product area
                      </option>
                      {categories
                        .filter((category) => category !== 'All')
                        .map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      <option value="AOG Support">AOG Support</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.product && <p className="mt-1 text-xs text-red-500">{errors.product}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#081b30]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={fields.message}
                      onChange={handleChange}
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-[#081b30] outline-none transition-colors focus:border-[#c9a24b]"
                      placeholder="Tell us what you need..."
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#c9a24b] to-[#d9b968] px-7 py-3.5 text-sm font-semibold text-[#081b30] shadow-lg shadow-[#c9a24b]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                    </button>
                    {status === 'error' && (
                      <p className="mt-3 text-xs text-red-500">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
