'use client'

import {
  ArrowRight,
  Check,
  ChevronDown,
  Star,
} from 'lucide-react'
import { Brand, Navbar } from './navbar'
import { Hero } from './hero'

export { Brand, Navbar, Hero }

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

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
      className={`font-heading rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
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
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
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
/*  Create & Manage – "Create & Manage Courses Easily."               */
/* ------------------------------------------------------------------ */

export function CreateManage() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left – image collage */}
        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder className="col-span-2 h-52" rounded="rounded-2xl" />
          <ImagePlaceholder className="h-36" rounded="rounded-2xl" />
          <ImagePlaceholder className="h-36" rounded="rounded-2xl" />
        </div>

        {/* Right – text content */}
        <div>
          <h2 className="max-w-sm text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Create & Manage Courses Easily.
          </h2>
          <p className="mt-4 max-w-md text-[16px] sm:text-[18px] leading-[160%] text-slate-500 font-normal tracking-normal">
            Everything you need to build, publish, and manage your courses — all
            in one place. Focus on teaching while we handle the rest.
          </p>

          {/* Checklist */}
          <ul className="mt-7 space-y-4">
            {manageFeatures.map((feat) => (
              <li
                key={feat}
                className="flex items-center gap-3 text-base font-medium text-slate-700"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-lime-300 text-slate-900">
                  <Check className="size-3.5" />
                </span>
                {feat}
              </li>
            ))}
          </ul>

          <Button className="mt-8">
            Get Started{' '}
            <ArrowRight className="ml-2 inline size-4" />
          </Button>
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
    <section id="community" className="px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="mt-4 max-w-sm text-[16px] sm:text-[18px] leading-[160%] text-slate-500 font-normal tracking-normal">
            Real stories from people who are learning, building, and growing
            with ByteSpace.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {testimonials.map((person, index) => (
            <article
              key={person.name}
              className="rounded-2xl bg-slate-50 p-6 transition-shadow hover:shadow-md"
            >
              {/* Avatar placeholder */}
              <AvatarPlaceholder
                className={`mb-4 size-12 ${
                  index === 0
                    ? 'bg-amber-300'
                    : index === 1
                      ? 'bg-slate-400'
                      : 'bg-blue-300'
                }`}
              />

              <h3 className="text-base font-bold text-slate-900">
                {person.name}
              </h3>
              <p className="mt-0.5 text-sm font-semibold text-blue-600">
                {person.role}
              </p>

              {/* Star rating */}
              <div className="mt-3">
                <StarRating count={person.stars} />
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-600">
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
    <footer className="border-t border-slate-200 bg-white px-6 py-14 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <Brand />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            Your space to learn, create, and grow with people who believe in the
            power of curiosity.
          </p>

          {/* Email subscribe */}
          <div className="mt-5 flex max-w-xs rounded-full border border-slate-200 p-1">
            <input
              className="min-w-0 flex-1 px-4 text-sm outline-none"
              placeholder="Enter your email"
            />
            <Button className="px-5 py-2">Submit</Button>
          </div>

          {/* Social icons */}
          <div className="mt-5 flex gap-3">
            {['𝕏', 'in', 'f', '▶'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500 transition-colors hover:bg-lime-300 hover:text-slate-900"
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
            <h3 className="text-base font-bold text-slate-900">{heading}</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
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
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row">
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