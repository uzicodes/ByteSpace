'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BarChart3, Star } from 'lucide-react'

const TORUS_STYLE: React.CSSProperties = {
  width: '146.72px',
  height: '146.72px',
  backgroundColor: '#D4FB20',
  maskImage: 'url(/elements/3.webp)',
  WebkitMaskImage: 'url(/elements/3.webp)',
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
}

const PYRAMID_STYLE: React.CSSProperties = {
  width: '188.93px',
  height: '188.93px',
  backgroundColor: '#D4FB20',
  maskImage: 'url(/elements/4.webp)',
  WebkitMaskImage: 'url(/elements/4.webp)',
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
}

const SPIRAL_STYLE: React.CSSProperties = {
  width: '175.81px',
  height: '175.81px',
  left: '298px',
  top: '288px',
  backgroundColor: '#F5F5F6',
  maskImage: 'url(/elements/2.webp)',
  WebkitMaskImage: 'url(/elements/2.webp)',
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
  transform: 'scaleY(-1)',
}

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <main className="hero-grid relative min-h-screen w-full overflow-x-hidden bg-[#073ee5]">
      {/* 1440px Centered Canvas Wrapper */}
      <div className="relative mx-auto min-h-[960px] w-full max-w-[1440px] px-6 pb-16 lg:px-0">
        {/* Header_Frame */}
        <header
          className="relative z-50 flex h-[120px] w-full items-center lg:absolute lg:left-0 lg:top-0 lg:w-[1440px] lg:px-[120px]"
          style={{
            height: '120px',
          }}
        >
          <div className="flex w-full items-center">
            <Link
              href="/"
              aria-label="ByteSpace Home"
              className="inline-flex cursor-pointer items-center transition-transform hover:scale-105 active:scale-95"
            >
              <img
                src="/logo.png"
                alt="ByteSpace"
                className="h-8 w-auto object-contain cursor-pointer sm:h-9"
              />
            </Link>
          </div>
        </header>

        {/* Left Side: Sign up and come in & Description */}
        <div className="flex flex-col items-start gap-3 pt-6 lg:absolute lg:left-[120px] lg:top-[120px] lg:w-[500px] lg:p-0">
          <h2 className="flex h-[24px] items-center whitespace-nowrap font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
            Sign up and come in
          </h2>
          <p className="w-[475px] max-w-full font-['Satoshi'] text-[18px] font-normal leading-[160%] text-[#F5F5F6]">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* Floating Course Cards Composition (Card 2 & Card 3) */}
        <div className="relative mt-8 hidden h-[540px] w-full max-w-[500px] origin-top-left scale-[1.10] sm:block lg:absolute lg:left-[120px] lg:top-[286px] lg:mt-0">
          {/* 3D Element: Lime Torus (Top Left) */}
          <div
            className="pointer-events-none absolute -left-4 top-8 z-30"
            style={TORUS_STYLE}
          />

          {/* 3D Element: Lime Pyramid/Tetrahedron (Bottom Left) */}
          <div
            className="pointer-events-none absolute -bottom-1 -left-15 z-30"
            style={PYRAMID_STYLE}
          />

          {/* Card 2: Build Digital Asset (Positioned Behind) */}
          <div
            className="absolute -left-7 top-[110px] z-10 w-[335px] box-border overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white p-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
          >
            {/* Image Preview */}
            <div className="relative h-[160px] w-full overflow-hidden rounded-[12px] bg-slate-100">
              <img
                src="/courses/2.webp"
                alt="Build Digital Asset"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 flex items-start gap-2">
                <span className="flex h-[24px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.7)] px-2.5 text-[11px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
                  17 Lessons
                </span>
              </div>
            </div>

            {/* Course Info */}
            <div className="relative mt-3.5 w-full">
              <h3 className="truncate font-heading text-[18px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
                Build Digital Asset
              </h3>
              <p className="text-[11px] font-normal leading-[160%] text-[#4F4F4F]">
                by purepearl studio
              </p>

              <div className="mt-3 flex h-7 items-center gap-2.5">
                <span className="flex h-7 items-center justify-center gap-1 rounded-[24px] bg-[#F5F5F6] px-2.5 text-[11px] font-medium leading-[120%] text-[#4B4C53]">
                  <BarChart3 className="size-4" />
                  Beginner
                </span>
                <span className="flex h-7 items-center -space-x-1.5">
                  {[1, 2, 3, 4].map((avatar) => (
                    <img
                      key={avatar}
                      src={`/courses/dp/${avatar}.webp`}
                      alt=""
                      className="size-7 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <span className="relative flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#242528] text-[10px] font-medium leading-4 text-white">
                    26+
                  </span>
                </span>
              </div>

              <div className="mt-3 flex items-end gap-1">
                <span className="font-heading text-[18px] font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]">
                  $25
                </span>
                <span className="text-[11px] font-normal leading-[160%] text-[#4F4F4F]">
                  /lifetime
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: The Power of Big Data (In Front) */}
          <div
            className="absolute left-[70px] top-0 z-20 w-[350px] box-border overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white p-4 shadow-[0_20px_42px_rgba(0,0,0,0.14)]"
          >
            {/* Image Preview with Badges */}
            <div className="relative h-[175px] w-full overflow-hidden rounded-[12px] bg-slate-900">
              <img
                src="/courses/3.webp"
                alt="The Power of Big Data"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-2.5 left-2.5 flex items-start gap-1.5">
                <span className="flex h-[24px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.7)] px-2 text-[10.5px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
                  17 Lessons
                </span>
                <span className="flex h-[24px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.7)] px-2 text-[10.5px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
                  2 hours 16 mins
                </span>
                <span className="flex h-[24px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.7)] px-2 text-[10.5px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]">
                  59 Comments
                </span>
              </div>
            </div>

            {/* Course Info */}
            <div className="relative mt-4 w-full">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="truncate font-heading text-[19px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
                    the Power of Big Data
                  </h3>
                  <p className="text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
                    by purepearl studio
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[17px] font-normal leading-none text-[#4F4F4F]">
                  <span>4.5</span>
                  <Star className="size-4 fill-[#D4FB20] text-[#D4FB20]" />
                </div>
              </div>

              <div className="mt-3.5 flex h-8 items-center gap-3">
                <span className="flex h-8 items-center justify-center gap-1 rounded-[24px] bg-[#F5F5F6] px-3 text-[12px] font-medium leading-[120%] text-[#4B4C53]">
                  <BarChart3 className="size-4" />
                  Beginner
                </span>
                <span className="flex h-8 items-center -space-x-1.5">
                  {[1, 2, 3, 4].map((avatar) => (
                    <img
                      key={avatar}
                      src={`/courses/dp/${avatar}.webp`}
                      alt=""
                      className="size-7 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                  <span className="relative flex size-7 items-center justify-center rounded-full border-2 border-white bg-[#242528] text-[11px] font-medium leading-4 text-white">
                    26+
                  </span>
                </span>
              </div>

              <div className="mt-3.5 flex items-end gap-1">
                <span className="font-heading text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]">
                  $25
                </span>
                <span className="text-[12px] font-normal leading-[160%] text-[#4F4F4F]">
                  /lifetime
                </span>
              </div>
            </div>
          </div>

          {/* Happy Students Floating Badge (Bottom Right) */}
          <div className="z-30 box-border flex w-[258px] h-[123px] flex-col items-start gap-2 rounded-[16px] bg-[#D4FB20] p-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] sm:absolute sm:left-[160px] sm:top-[390px]">
            <div className="font-heading text-[14px] font-semibold leading-none text-[#242528]">
              Happy Students
            </div>
            <div className="flex items-center gap-1.5 text-[12px] font-medium leading-none text-[#242528]">
              <span className="font-semibold text-[#242528]">4.5</span>
              <span className="text-[#242528]">(240)</span>
              <span className="text-[13px] text-[#003BE2]">★</span>
            </div>
            <div className="-ml-1 mt-0.5 flex items-center -space-x-4">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <img
                  key={num}
                  src={`/dp_images/happy_students/${num}.webp`}
                  alt=""
                  style={{ width: '43px', height: '43px' }}
                  className="h-[43px] w-[43px] rounded-full border-2 border-white bg-slate-200 object-cover"
                />
              ))}
              <div
                style={{ width: '43px', height: '43px' }}
                className="flex h-[43px] w-[43px] items-center justify-center rounded-full border-2 border-white bg-[#242528] text-[11px] font-bold text-white"
              >
                2K+
              </div>
            </div>
          </div>

          {/* 3D Element: White Spiral (Overlaying Happy Students Badge) */}
          <div
            className="pointer-events-none absolute z-40"
            style={SPIRAL_STYLE}
          />
        </div>

        {/* Register_Frame (Registration Form) */}
        <div className="relative mx-auto mb-16 box-border w-full max-w-[579px] isolate rounded-[24px] bg-[#FFFFFF] shadow-2xl lg:absolute lg:left-[741px] lg:top-[120px] lg:mb-0 lg:h-[784px] lg:w-[579px]">
          {/* Content Auto Layout */}
          <div className="flex w-full flex-col items-center px-6 py-10 sm:px-12 lg:absolute lg:left-[63px] lg:top-[61px] lg:w-[453px] lg:p-0">
            {/* Auto Layout Vertical (Form Fields & Title) */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[453px] flex-col items-start gap-[40px]"
            >
              {/* Header Auto Layout Vertical (Create an Account & Welcome to ByteSpace) */}
              <div className="flex w-full max-w-[453px] flex-col items-start">
                {/* Create an Account */}
                <span className="font-['Satoshi'] text-[18px] font-normal leading-[160%] text-[#003BE2]">
                  Create an Account
                </span>

                {/* Welcome to ByteSpace */}
                <h1 className="w-full max-w-[453px] font-['Poppins'] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  Welcome to ByteSpace
                </h1>
              </div>

              {/* Form Input Fields & Submit Button Auto Layout */}
              <div className="flex w-full max-w-[453px] flex-col items-end gap-[24px]">
                {/* Full Name field */}
                <div className="flex w-full max-w-[453px] flex-col items-start gap-2">
                  <label
                    htmlFor="register-fullname"
                    className="font-['Satoshi'] text-[14px] font-medium leading-[120%] text-[#242528]"
                  >
                    Full Name
                  </label>
                  <div className="box-border flex h-[52px] w-full max-w-[453px] items-center rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] px-6 py-3 transition-colors focus-within:border-[#242528]">
                    <input
                      id="register-fullname"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Jamie Davis"
                      className="w-full bg-transparent font-['Satoshi'] text-[18px] leading-[160%] text-[#242528] placeholder:text-[#82868E] outline-none"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="flex w-full max-w-[453px] flex-col items-start gap-2">
                  <label
                    htmlFor="register-email"
                    className="font-['Satoshi'] text-[14px] font-medium leading-[120%] text-[#242528]"
                  >
                    Email
                  </label>
                  <div className="box-border flex h-[52px] w-full max-w-[453px] items-center rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] px-6 py-3 transition-colors focus-within:border-[#242528]">
                    <input
                      id="register-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="designer@example.com"
                      className="w-full bg-transparent font-['Satoshi'] text-[18px] leading-[160%] text-[#242528] placeholder:text-[#82868E] outline-none"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="flex w-full max-w-[453px] flex-col items-start gap-2">
                  <label
                    htmlFor="register-password"
                    className="font-['Satoshi'] text-[14px] font-medium leading-[120%] text-[#242528]"
                  >
                    Password
                  </label>
                  <div className="box-border flex h-[52px] w-full max-w-[453px] items-center rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] px-6 py-3 transition-colors focus-within:border-[#242528]">
                    <input
                      id="register-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="********"
                      className="w-full bg-transparent font-['Satoshi'] text-[18px] leading-[160%] text-[#242528] placeholder:text-[#82868E] outline-none"
                    />
                  </div>
                </div>

                {/* Continue button */}
                <button
                  type="submit"
                  className="box-border flex h-[46px] w-[123px] items-center justify-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 py-3 transition-all hover:opacity-90 active:scale-95 shadow-sm"
                >
                  <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                    Continue
                  </span>
                </button>
              </div>
            </form>

            {/* Already have an account? Login */}
            <div className="mt-12 flex items-center justify-center gap-1">
              <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                Already have an account?
              </span>
              <Link
                href="/login"
                className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#003BE2] transition-all hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
