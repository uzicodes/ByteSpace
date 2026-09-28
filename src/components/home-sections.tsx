'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Code2,
  Grid2X2,
  Menu,
  Search,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const categories = [
  'Design',
  'Development',
  'IT & Software',
  'Business',
  'Marketing',
  'Photography',
]

const filters = [
  'Featured',
  'UI/UX',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'User Experience',
  'Content Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Healthcare & Entrepreneurship',
  'Creative Design',
  'Photography',
]

const courses = [
  {
    title: 'Learn Figma from Basic',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=700&q=80',
    price: '$25.00',
    rating: '4.5',
  },
  {
    title: 'Build Digital Asset',
    category: 'Development',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=700&q=80',
    price: '$26.00',
    rating: '4.8',
  },
  {
    title: 'The Power of Big Data',
    category: 'IT & Software',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80',
    price: '$25.00',
    rating: '4.5',
  },
  {
    title: 'Balancing Productivity on...',
    category: 'Business',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80',
    price: '$25.00',
    rating: '4.7',
  },
  {
    title: 'Mastering Money Manage...',
    category: 'Finance',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80',
    price: '$25.00',
    rating: '4.6',
  },
  {
    title: 'From Idea to Startup Succ...',
    category: 'Business',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=700&q=80',
    price: '$25.00',
    rating: '4.9',
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Entrepreneur & Learner',
    text: '"ByteSpace made learning feel simple and inspiring. I have grown so much since joining this community."',
    stars: 5,
  },
  {
    name: 'James L.',
    role: 'Product Designer',
    text: '"The courses are incredibly well-structured and the instructors are truly world-class. Highly recommend!"',
    stars: 5,
  },
  {
    name: 'Alex B.',
    role: 'Tech Enthusiast',
    text: '"I love how ByteSpace blends practical projects with theory. It keeps me engaged and actually learning."',
    stars: 5,
  },
]

const manageFeatures = [
  'Plan Your Lessons',
  'Upload Content',
  'Set Pricing & Discounts',
  'Track Performance',
]

/* ------------------------------------------------------------------ */
/*  Shared tiny components                                            */
/* ------------------------------------------------------------------ */

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm font-bold tracking-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}
    >
      <span className="brand-mark">▸</span> ByteSpace
    </div>
  )
}

export function Button({
  children,
  variant = 'lime',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'lime' | 'outline' | 'white'
  className?: string
}) {
  return (
    <button
      className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-transform hover:-translate-y-0.5 ${
        variant === 'lime'
          ? 'bg-lime-300 text-slate-950 hover:bg-lime-200'
          : variant === 'white'
            ? 'bg-white text-blue-700 hover:bg-slate-100'
            : 'border border-white/30 text-white hover:bg-white/10'
      } ${className}`}
    >
      {children}
    </button>
  )
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

/** Placeholder grey box used wherever a person/avatar image would go */
function AvatarPlaceholder({
  className = '',
}: {
  className?: string
}) {
  return (
    <div
      className={`rounded-full bg-slate-300 ${className}`}
      aria-hidden="true"
    />
  )
}

/** Placeholder rectangle for photo areas the user will fill later */
function ImagePlaceholder({
  className = '',
  rounded = 'rounded-xl',
}: {
  className?: string
  rounded?: string
}) {
  return (
    <div
      className={`bg-slate-200 ${rounded} ${className}`}
      aria-hidden="true"
    />
  )
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                            */
/* ------------------------------------------------------------------ */

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8">
        <Brand light />

        <nav className="hidden items-center gap-8 text-xs text-white/80 md:flex">
          <a href="#courses">Courses</a>
          <a href="#paths">Categories</a>
          <a href="#community">Community</a>
        </nav>

        <div className="hidden items-center gap-5 text-xs text-white md:flex">
          <a href="#login">Sign in</a>
          <Button>Join us</Button>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="mx-4 flex flex-col gap-4 rounded-2xl bg-blue-900 p-5 text-sm text-white md:hidden">
          <a href="#courses">Courses</a>
          <a href="#paths">Categories</a>
          <a href="#community">Community</a>
          <a href="#login">Sign in</a>
          <Button>Join us</Button>
        </div>
      )}
    </header>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="hero-grid relative overflow-hidden bg-[#073ee5] px-5 pb-16 pt-32 text-white">
      {/* ---- decorative lime blobs / organic shapes ---- */}
      {/* Top-left squiggle / C-shape */}
      <div className="absolute left-[-30px] top-16 h-28 w-28 rotate-[-15deg] rounded-[60%_40%_50%_50%] bg-lime-300 opacity-90 sm:left-[2%] sm:h-36 sm:w-36" />
      <div className="absolute left-[6px] top-[76px] h-16 w-16 rotate-[-15deg] rounded-[60%_40%_50%_50%] bg-[#073ee5] sm:left-[4.5%] sm:h-20 sm:w-20" />

      {/* Top-left small O */}
      <div className="absolute left-[8%] top-[55%] hidden h-16 w-16 rounded-full bg-lime-300 opacity-90 sm:block" />
      <div className="absolute left-[9.2%] top-[57%] hidden h-10 w-10 rounded-full bg-[#073ee5] sm:block" />

      {/* Right side big O */}
      <div className="absolute right-[-20px] top-20 h-24 w-24 rounded-full bg-lime-300 opacity-90 sm:right-[3%] sm:h-32 sm:w-32" />
      <div className="absolute right-[2px] top-[88px] h-14 w-14 rounded-full bg-[#073ee5] sm:right-[5.2%] sm:h-20 sm:w-20" />

      {/* Small blob right-bottom */}
      <div className="absolute bottom-12 right-[10%] hidden h-10 w-20 rotate-[-20deg] rounded-full bg-lime-300 opacity-80 sm:block" />

      {/* Bottom-left squiggle */}
      <div className="absolute bottom-20 left-[3%] hidden h-14 w-28 rotate-[12deg] rounded-full bg-lime-300 opacity-80 sm:block" />

      {/* ---- Hero content ---- */}
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-lime-300">
          Learn without limits
        </p>

        <h1 className="mx-auto max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Get Access to Hundreds of
          <br /> Courses Available
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-xs leading-6 text-blue-100">
          Unlock your potential with industry-leading courses designed to help
          you master new skills and reach your goals.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-6 flex max-w-sm items-center rounded-full bg-white p-1">
          <Search className="ml-3 size-4 text-slate-400" />
          <input
            aria-label="Search courses"
            className="min-w-0 flex-1 bg-transparent px-2 text-xs text-slate-800 outline-none"
            placeholder="Search for a course"
          />
          <Button className="px-4 py-2">Search</Button>
        </div>
      </div>

      {/* ---- Hero image area with floating cards ---- */}
      <div className="relative mx-auto mt-14 flex max-w-3xl items-end justify-center gap-4">
        {/* Left floating card – "Happy Students" */}
        <div className="hidden rounded-xl bg-white p-3 text-left text-[9px] text-slate-800 shadow-xl sm:block">
          <b>Happy Students</b>
          <div className="mt-1 flex -space-x-1.5">
            <AvatarPlaceholder className="size-5 ring-2 ring-white" />
            <AvatarPlaceholder className="size-5 ring-2 ring-white" />
            <AvatarPlaceholder className="size-5 ring-2 ring-white" />
          </div>
          <div className="mt-2 text-lime-600">★★★★★</div>
        </div>

        {/* Centre person placeholder */}
        <div className="relative h-48 w-52 rounded-t-[45%] bg-gradient-to-br from-lime-300 to-lime-500 sm:h-60 sm:w-64">
          {/* Silhouette placeholder – user will swap with actual image */}
          <div className="absolute inset-x-5 bottom-0 top-10 rounded-t-[45%] bg-gradient-to-b from-amber-100/40 to-amber-700/30 opacity-80" />

          {/* Right floating card – "Learning Progress 55%" */}
          <div className="absolute right-[-28px] top-10 hidden w-28 rounded-lg bg-white p-3 text-left text-slate-900 shadow-xl sm:block">
            <span className="text-[9px]">Learning Progress</span>
            <strong className="block text-2xl">55%</strong>
            <div className="mt-1 h-1 w-full rounded-full bg-slate-100">
              <div className="h-1 w-[55%] rounded-full bg-lime-300" />
            </div>
          </div>
        </div>

        {/* Right floating card – "New skills" */}
        <div className="hidden rounded-xl bg-white p-3 text-left text-[9px] text-slate-800 shadow-xl sm:block">
          <b>New skills</b>
          <div className="mt-2 flex -space-x-1">
            <span className="size-4 rounded-full bg-rose-300" />
            <span className="size-4 rounded-full bg-blue-300" />
            <span className="size-4 rounded-full bg-amber-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Logo Strip                                                        */
/* ------------------------------------------------------------------ */

export function LogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 bg-slate-50 px-5 py-7 text-[10px] font-semibold text-slate-500">
      <span className="flex items-center gap-1.5">
        <span className="text-lg text-lime-500">◉</span> Logopsum
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-lg text-lime-500">✺</span> Logopsum
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-lg text-lime-500">◈</span> Logopsum
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-lg text-lime-500">✹</span> Logopsum
      </span>
      <span className="flex items-center gap-1.5">
        <span className="text-lg text-lime-500">◌</span> Logopsum
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Courses                                                           */
/* ------------------------------------------------------------------ */

export function CourseCard({
  course,
}: {
  course: (typeof courses)[number]
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5">
      <img
        src={course.image}
        alt={course.title}
        className="h-28 w-full rounded-xl object-cover"
      />
      <div className="p-2">
        <h3 className="truncate text-[11px] font-bold text-slate-900">
          {course.title}
        </h3>
        <div className="mt-1 flex items-center justify-between text-[9px] text-slate-400">
          <span>{course.category}</span>
          <span className="flex items-center gap-0.5">
            <Star className="size-2.5 fill-amber-400 text-amber-400" />{' '}
            {course.rating}
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs font-bold text-blue-600">
            {course.price}
          </span>
          <span className="flex -space-x-1">
            <AvatarPlaceholder className="size-4 ring-1 ring-white" />
            <AvatarPlaceholder className="size-4 ring-1 ring-white" />
            <AvatarPlaceholder className="size-4 ring-1 ring-white" />
          </span>
        </div>
      </div>
    </article>
  )
}

export function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-6xl px-5 py-16">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mt-3 text-xs leading-5 text-slate-500">
          Find courses that fit your interests and goals. Learn from experts and
          grow with a community that keeps you moving forward.
        </p>
      </div>

      {/* Filter pills */}
      <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-2">
        {filters.map((filter, index) => (
          <button
            key={filter}
            className={`rounded-full px-3 py-1.5 text-[9px] font-medium ${
              index === 0
                ? 'bg-lime-300 text-slate-900'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Course grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Learning Paths                                                    */
/* ------------------------------------------------------------------ */

export function Paths() {
  const icons = [
    <Sparkles key="a" className="size-4" />,
    <Code2 key="b" className="size-4" />,
    <Grid2X2 key="c" className="size-4" />,
    <BookOpen key="d" className="size-4" />,
    <Users key="e" className="size-4" />,
    <Sparkles key="f" className="size-4" />,
  ]

  return (
    <section id="paths" className="bg-slate-50 px-5 py-14">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
          Explore Diverse Learning Paths at ByteSpace
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500">
          Whether you are just beginning or advancing your career, discover the
          right path for your goals.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((item, index) => (
            <div
              key={item}
              className="rounded-xl border border-slate-200 bg-white p-5 text-xs font-semibold text-slate-700 transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-3 flex size-8 items-center justify-center rounded-full bg-lime-300 text-slate-900">
                {icons[index]}
              </div>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Growth – "Your Path to Professional Growth Starts Here!"          */
/* ------------------------------------------------------------------ */

export function Growth() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lime-50 via-white to-blue-50 px-5 py-20">
      {/* Decorative lime blobs */}
      <div className="absolute right-[-40px] top-10 hidden h-24 w-24 rotate-12 rounded-[60%_40%_50%_50%] bg-lime-300 opacity-70 lg:block" />
      <div className="absolute bottom-10 left-[-30px] hidden h-16 w-32 rounded-full bg-lime-300 opacity-50 lg:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left – text content */}
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-blue-600">
            Your journey starts here
          </p>
          <h2 className="max-w-md text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-5 max-w-md text-xs leading-6 text-slate-600">
            Explore courses designed to help you become your best self. Learn at
            your own pace, build skills, and connect with a supportive
            community.
          </p>

          {/* Stats */}
          <div className="mt-7 flex gap-8">
            <span>
              <b className="block text-xl text-blue-700">12K</b>
              <small className="text-[10px] text-slate-500">Students</small>
            </span>
            <span>
              <b className="block text-xl text-blue-700">70+</b>
              <small className="text-[10px] text-slate-500">Courses</small>
            </span>
            <span>
              <b className="block text-xl text-blue-700">16</b>
              <small className="text-[10px] text-slate-500">Creators</small>
            </span>
          </div>

          {/* Small image collage below stats */}
          <div className="mt-7 flex gap-3">
            <ImagePlaceholder className="h-24 w-28" rounded="rounded-xl" />
            <ImagePlaceholder className="h-24 w-28" rounded="rounded-xl" />
          </div>
        </div>

        {/* Right – person + floating card */}
        <div className="relative mx-auto h-80 w-80 lg:h-96 lg:w-full lg:max-w-md">
          {/* Background shape */}
          <div className="absolute inset-8 rounded-3xl bg-lime-300/60 blur-2xl" />

          {/* Person placeholder */}
          <div className="absolute bottom-0 left-1/2 h-72 w-56 -translate-x-1/2 overflow-hidden rounded-t-[45%] bg-gradient-to-br from-lime-200 to-lime-400 lg:h-80 lg:w-60">
            {/* Silhouette placeholder */}
            <div className="absolute inset-x-6 bottom-0 top-12 rounded-t-[45%] bg-gradient-to-b from-amber-100/40 to-amber-700/30 opacity-80" />
          </div>

          {/* Floating progress card */}
          <div className="absolute right-0 top-16 z-10 rounded-xl bg-white p-3 text-slate-900 shadow-lg lg:right-4">
            <span className="text-[9px] text-slate-500">Learning Progress</span>
            <strong className="block text-2xl">55%</strong>
            <div className="mt-1 h-1 w-20 rounded-full bg-slate-100">
              <div className="h-1 w-[55%] rounded-full bg-lime-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Create & Manage – "Create & Manage Courses Easily."               */
/* ------------------------------------------------------------------ */

export function CreateManage() {
  return (
    <section className="bg-white px-5 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left – image collage */}
        <div className="grid grid-cols-2 gap-3">
          <ImagePlaceholder className="col-span-2 h-40" rounded="rounded-2xl" />
          <ImagePlaceholder className="h-28" rounded="rounded-2xl" />
          <ImagePlaceholder className="h-28" rounded="rounded-2xl" />
        </div>

        {/* Right – text content */}
        <div>
          <h2 className="max-w-sm text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Create & Manage Courses Easily.
          </h2>
          <p className="mt-4 max-w-md text-xs leading-6 text-slate-500">
            Everything you need to build, publish, and manage your courses — all
            in one place. Focus on teaching while we handle the rest.
          </p>

          {/* Checklist */}
          <ul className="mt-6 space-y-3">
            {manageFeatures.map((feat) => (
              <li
                key={feat}
                className="flex items-center gap-3 text-xs font-medium text-slate-700"
              >
                <span className="flex size-5 items-center justify-center rounded-full bg-lime-300 text-slate-900">
                  <Check className="size-3" />
                </span>
                {feat}
              </li>
            ))}
          </ul>

          <Button className="mt-8">
            Get Started{' '}
            <ArrowRight className="ml-2 inline size-3" />
          </Button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  CTA – "Unlock Your Potential as a Creator with ByteSpace"         */
/* ------------------------------------------------------------------ */

export function CTA() {
  return (
    <section className="hero-grid relative overflow-hidden bg-[#073ee5] px-5 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* Left – text */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-blue-100 lg:mx-0">
            Discover the tools and resources you need to bring your vision to
            life. Join a community of creators, share your expertise, and inspire
            others to learn and grow.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button>
              Join ByteSpace{' '}
              <ArrowRight className="ml-2 inline size-3" />
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        {/* Right – image collage */}
        <div className="grid grid-cols-3 gap-2">
          <ImagePlaceholder
            className="col-span-2 row-span-2 h-44"
            rounded="rounded-2xl"
          />
          <ImagePlaceholder className="h-[86px]" rounded="rounded-2xl" />
          <ImagePlaceholder className="h-[86px]" rounded="rounded-2xl" />
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Community – Testimonials                                          */
/* ------------------------------------------------------------------ */

export function Community() {
  return (
    <section id="community" className="px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        {/* Heading */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="mt-4 max-w-sm text-xs leading-6 text-slate-500">
            Real stories from people who are learning, building, and growing
            with ByteSpace.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          {testimonials.map((person, index) => (
            <article
              key={person.name}
              className="rounded-2xl bg-slate-50 p-5 transition-shadow hover:shadow-md"
            >
              {/* Avatar placeholder */}
              <AvatarPlaceholder
                className={`mb-4 size-10 ${
                  index === 0
                    ? 'bg-amber-300'
                    : index === 1
                      ? 'bg-slate-400'
                      : 'bg-blue-300'
                }`}
              />

              <h3 className="text-xs font-bold text-slate-900">
                {person.name}
              </h3>
              <p className="mt-0.5 text-[9px] font-semibold text-blue-600">
                {person.role}
              </p>

              {/* Star rating */}
              <div className="mt-3">
                <StarRating count={person.stars} />
              </div>

              <p className="mt-3 text-[10px] leading-5 text-slate-600">
                {person.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-5 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-[10px] leading-5 text-slate-500">
            Your space to learn, create, and grow with people who believe in the
            power of curiosity.
          </p>

          {/* Email subscribe */}
          <div className="mt-5 flex max-w-xs rounded-full border border-slate-200 p-1">
            <input
              className="min-w-0 flex-1 px-3 text-[10px] outline-none"
              placeholder="Enter your email"
            />
            <Button className="px-4 py-2">Submit</Button>
          </div>

          {/* Social icons */}
          <div className="mt-5 flex gap-3">
            {['𝕏', 'in', 'f', '▶'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 transition-colors hover:bg-lime-300 hover:text-slate-900"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {[
          ['Explore', 'Courses', 'Categories', 'Community'],
          ['Resources', 'Blog', 'Help center', 'Events'],
          ['Company', 'About us', 'Careers', 'Contact'],
        ].map(([heading, ...links]) => (
          <div key={heading}>
            <h3 className="text-xs font-bold text-slate-900">{heading}</h3>
            <div className="mt-4 flex flex-col gap-3 text-[10px] text-slate-500">
              {links.map((link) => (
                <a href="#" key={link} className="hover:text-slate-800">
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 text-[9px] text-slate-400 sm:flex-row">
        <span>© 2024 ByteSpace. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-slate-600">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  )
}