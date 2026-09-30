'use client'

import {
  ArrowRight,
  Check,
  ChevronDown,
} from 'lucide-react'
import { Brand, Navbar } from './navbar'
import { Hero } from './hero'

export { Brand, Navbar, Hero }
export { Testimonials, Community } from './testimonials'
export { Footer } from './footer'

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

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

