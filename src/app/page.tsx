import { Navbar } from '@/src/components/navbar'
import { Hero } from '@/src/components/hero'
import { LogoStrip } from '@/src/components/logo-strip'
import { Courses } from '@/src/components/course-section'
import { Growth } from '@/src/components/growth-section'
import { CTA } from '@/src/components/cta'
import { Testimonials } from '@/src/components/testimonials'
import { Footer } from '@/src/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Courses />
      <Growth />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  )
}