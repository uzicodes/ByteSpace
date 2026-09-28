import { Community, CTA, Courses, Footer, Growth, Hero, LogoStrip, Navbar, Paths } from '@/components/home-sections'

export default function Page() {
  return <main className="min-h-screen overflow-hidden bg-white"><Navbar /><Hero /><LogoStrip /><Courses /><Paths /><Growth /><CTA /><Community /><Footer /></main>
}