import { Navbar } from '@/src/components/navbar'
import { Hero } from '@/src/components/hero'
import { LogoStrip } from '@/src/components/logo-strip'
import {
  Community,
  CTA,
  CreateManage,
  Courses,
  Footer,
  Growth,
  Paths,
} from '@/src/components/home-sections'

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Courses />
      <Paths />
      <Growth />
      <CreateManage />
      <CTA />
      <Community />
      <Footer />
    </main>
  )
}