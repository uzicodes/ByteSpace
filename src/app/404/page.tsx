'use client'

import React from 'react'
import Link from 'next/link'
import { Navbar } from '@/src/components/navbar'
import { Footer } from '@/src/components/footer'

const BLUEPRINT_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)',
  backgroundSize: '120px 120px',
}

const GRADIENT_404_STYLE: React.CSSProperties = {
  top: '160px',
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 600,
  fontSize: 'clamp(140px, 32vw, 480px)',
  lineHeight: 1,
  letterSpacing: '-0.01em',
  background:
    'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  color: 'transparent',
  display: 'block',
}

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528]">
      {/* ======================================================== */}
      {/* 1. HERO FRAME  */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#003BE2] min-h-[820px] lg:h-[957px]">
        {/* Blueprint Grid Lines Background (120px increments, 0.12 opacity) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-12"
          style={BLUEPRINT_GRID_STYLE}
        />

        {/* Global Navbar */}
        <Navbar />

        {/* Giant 404 Gradient Number (top: 160px in Figma, width: 920px, font-size: 480px) */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 select-none text-center w-[920px] max-w-full z-0"
          style={GRADIENT_404_STYLE}
        >
          404
        </div>

        {/* Frame 1: Text Content & CTA Stack (top: 521px in Figma, gap: 32px) */}
        <div className="relative z-10 mx-auto flex w-full max-w-[935px] flex-col items-center px-4 pt-[280px] sm:pt-[380px] md:pt-[440px] lg:pt-[521px] text-center">
          <div className="flex flex-col items-center gap-8">
            {/* The page you are looking for doesn’t exist */}
            <h1 className="max-w-[935px] text-center font-semibold text-[#FFFFFF] text-[clamp(32px,5.5vw,72px)] leading-[120%] tracking-[-0.01em] font-['Poppins']">
              The page you are looking for doesn’t exist
            </h1>

            {/* Try to use a correct url or go back to homepage to start again */}
            <p className="max-w-[486px] text-center font-['Satoshi'] font-normal text-[18px] leading-[160%] text-[#E5E6E8]">
              Try to use a correct url or go back to homepage to start again
            </p>

            {/* Back to Home Button (width: 163px, height: 46px, bg: #D4FB20) */}
            <Link
              href="/"
              className="group flex h-[46px] min-w-[163px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-6 py-3 font-['Satoshi'] font-medium text-[18px] leading-[120%] text-[#242528] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. GLOBAL FOOTER                                         */}
      {/* ======================================================== */}
      <Footer />
    </div>
  )
}

