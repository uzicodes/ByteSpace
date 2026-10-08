'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 ${
        light ? 'text-white' : 'text-slate-900'
      }`}
    >
      <img
        src="/logo.png"
        alt="ByteSpace"
        className="h-6 sm:h-7 w-auto object-contain"
      />
      <span className="font-brand">ByteSpace</span>
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Brand light />

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          <Link href="/" className="transition-colors hover:text-white">Home</Link>
          <Link href="/course" className="transition-colors hover:text-white">Courses</Link>
          <Link href="/#creators" className="transition-colors hover:text-white">Creators</Link>
        </nav>

        <div className="hidden items-center gap-6 text-sm text-white md:flex">
          <Link href="/login" className="transition-colors hover:text-white/80">
            Sign in
          </Link>
          <Link href="/register" className="transition-colors hover:text-white/80">
            Join us
          </Link>
          <button aria-label="Cart" className="transition-opacity hover:opacity-80">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z" fill="#F5F5F6"/>
            </svg>
          </button>
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
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/course" onClick={() => setOpen(false)}>Courses</Link>
          <Link href="/#creators" onClick={() => setOpen(false)}>Creators</Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            Sign in
          </Link>
          <Link href="/register" onClick={() => setOpen(false)}>
            Join us
          </Link>
          <a href="#cart" className="flex items-center gap-2 pt-1 text-white/90">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z" fill="#F5F5F6"/>
            </svg>
            <span>Cart</span>
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
