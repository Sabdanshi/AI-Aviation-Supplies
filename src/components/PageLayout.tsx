import type { ReactNode } from 'react'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="page-fade-in">{children}</main>
      <Footer />
    </>
  )
}
