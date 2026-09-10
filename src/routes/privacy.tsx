import { createFileRoute } from '@tanstack/react-router'
import { PageLayout } from '@/components/PageLayout'
import { SectionPhotoBackdrop } from '@/components/SectionPhotoBackdrop'
import { SectionHeading } from '@/components/SectionHeading'
import { COMPANY, GENERAL_EMAIL } from '@/data/company'

export const Route = createFileRoute('/privacy')({
  head: () => ({
    links: [{ rel: 'canonical', href: `${COMPANY.siteUrl}/privacy` }],
    meta: [
      { title: 'Privacy Policy | AI Aviation Supplies' },
      {
        name: 'description',
        content:
          'How AI Aviation Supplies collects, uses and protects information when you visit our website.',
      },
    ],
  }),
  component: PrivacyPage,
})

function PrivacyPage() {
  return (
    <PageLayout>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <SectionPhotoBackdrop image="/images/misc/hangar-showcase.jpg" height="240px" priority />
        <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-10">
          <div className="mb-14">
            <SectionHeading eyebrow="Legal" title="Privacy Policy" as="h1" />
            <p className="mt-4 text-sm text-white/70">Last updated: September 2026</p>
          </div>

          <div className="space-y-8 text-base leading-relaxed text-slate-600">
            <p>
              AI Aviation Supplies Pvt. Ltd. ("we", "us", "our") respects your
              privacy. This policy explains what information we collect
              through this website, how we use it, and the choices you
              have.
            </p>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                Information we collect
              </h2>
              <p className="mt-3">
                We do not run a checkout or account system on this site. The
                only information we collect is:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Contact details you choose to send us directly by phone or
                  email (e.g. your name, company, email address or phone
                  number, and the content of your enquiry).
                </li>
                <li>
                  Standard analytics data collected automatically via Google
                  Analytics, such as pages visited, approximate location
                  (country/region), device and browser type, and referring
                  website.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                Cookies & analytics
              </h2>
              <p className="mt-3">
                This site uses Google Analytics (GA4) to understand how
                visitors use our website, so we can improve it. Google
                Analytics uses cookies and similar technologies to collect
                anonymised usage data. You can opt out of Google Analytics
                tracking using the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-[#0c2a4a] underline underline-offset-2 hover:text-[#c9a24b]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                , or by adjusting your browser's cookie settings.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                How we use information
              </h2>
              <p className="mt-3">
                We use the information you send us solely to respond to
                your enquiries, provide quotes, and fulfil orders for
                aviation parts, chemicals and equipment. We use aggregated
                analytics data only to understand and improve website
                performance and content. We do not sell or rent your
                personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                Data retention & security
              </h2>
              <p className="mt-3">
                We retain enquiry correspondence for as long as reasonably
                necessary to service your request and comply with
                applicable business and tax record-keeping requirements. We
                take reasonable technical and organisational measures to
                protect information sent to us.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                Your rights
              </h2>
              <p className="mt-3">
                You may request access to, correction of, or deletion of
                any personal information you have shared with us by
                emailing{' '}
                <a
                  href={GENERAL_EMAIL.href}
                  className="text-[#0c2a4a] underline underline-offset-2 hover:text-[#c9a24b]"
                >
                  {GENERAL_EMAIL.display}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                Changes to this policy
              </h2>
              <p className="mt-3">
                We may update this policy from time to time. Changes will be
                posted on this page with an updated revision date.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#081b30]">
                Contact us
              </h2>
              <p className="mt-3">
                Questions about this policy can be sent to{' '}
                <a
                  href={GENERAL_EMAIL.href}
                  className="text-[#0c2a4a] underline underline-offset-2 hover:text-[#c9a24b]"
                >
                  {GENERAL_EMAIL.display}
                </a>{' '}
                or by post to {COMPANY.addressFull}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
