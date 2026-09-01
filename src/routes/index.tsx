import { createFileRoute } from '@tanstack/react-router'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Products } from '@/components/Products'
import { Services } from '@/components/Services'
import { Showcase } from '@/components/Showcase'
import { WhyUs } from '@/components/WhyUs'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <WhyUs />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
