import { Navbar } from '@/src/components/navbar'
import { Hero } from '@/src/components/hero'
import { LogoStrip } from '@/src/components/logo-strip'
import { Courses } from '@/src/components/course-section'
import { Growth } from '@/src/components/growth-section'
import {
  Community,
  CTA,
  Footer,
} from '@/src/components/home-sections'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Courses />
      <Growth />
      <CTA />
      <Community />
      <Footer />
    </main>
  )
}