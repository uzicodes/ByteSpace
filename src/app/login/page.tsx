'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { BarChart3, Star } from 'lucide-react'

export default function LoginPage() {
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
                className="h-8 sm:h-9 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>
        </header>

        {/* Left Side: Sign in with ease & Description */}
        <div className="flex flex-col items-start gap-3 pt-6 lg:absolute lg:left-[120px] lg:top-[120px] lg:w-[500px] lg:p-0">
          <h2
            className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6] whitespace-nowrap"
            style={{
              width: 'auto',
              minWidth: 'max-content',
              height: '24px',
              fontFamily: "'Poppins', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              whiteSpace: 'nowrap',
              color: '#F5F5F6',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            Sign in with ease
          </h2>
          <p
            className="w-[475px] max-w-full font-sans text-[18px] font-normal leading-[160%] text-[#F5F5F6]"
            style={{
              width: '475px',
              maxWidth: '100%',
              height: '58px',
              fontFamily: "'Satoshi', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '160%',
              color: '#F5F5F6',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>
        </div>

        {/* Floating Course Cards Composition (Card 2 & Card 3) */}
        <div className="relative mt-8 hidden h-[540px] w-full max-w-[500px] origin-top-left scale-[1.10] sm:block lg:absolute lg:left-[120px] lg:top-[286px] lg:mt-0">
            {/* 3D Element: Lime Torus (Top Left) */}
            <div
              className="pointer-events-none absolute -left-4 top-8 z-30"
              style={{
                width: '146.72px',
                height: '146.72px',
                backgroundColor: '#D4FB20',
                maskImage: 'url(/elements/3.webp)',
                WebkitMaskImage: 'url(/elements/3.webp)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                opacity: 1,
                transform: 'rotate(0deg)',
              }}
            />

            {/* 3D Element: Lime Pyramid/Tetrahedron (Bottom Left) */}
            <div
              className="pointer-events-none absolute -bottom-1 -left-15 z-30"
              style={{
                width: '188.93px',
                height: '188.93px',
                backgroundColor: '#D4FB20',
                maskImage: 'url(/elements/4.webp)',
                WebkitMaskImage: 'url(/elements/4.webp)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                opacity: 1,
                transform: 'rotate(0deg)',
              }}
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
            <div
              className="z-30 flex flex-col items-start rounded-[16px] bg-[#D4FB20] shadow-[0_16px_36px_rgba(0,0,0,0.14)] sm:absolute"
              style={{
                width: '258px',
                height: '123px',
                left: '160px',
                top: '390px',
                padding: '16px',
                gap: '8px',
                borderRadius: '16px',
                opacity: 1,
                transform: 'rotate(0deg)',
                boxSizing: 'border-box',
              }}
            >
              <div className="font-heading text-[14px] font-semibold leading-none text-[#242528]">
                Happy Students
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-medium leading-none text-[#242528]">
                <span className="font-semibold text-[#242528]">4.5</span>
                <span className="text-[#242528]">(240)</span>
                <span className="text-[#003BE2] text-[13px]">★</span>
              </div>
              <div className="-ml-1 mt-0.5 flex items-center -space-x-4">
                {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                  <img
                    key={num}
                    src={`/dp_images/happy_students/${num}.webp`}
                    alt=""
                    style={{ width: '43px', height: '43px' }}
                    className="h-[43px] w-[43px] rounded-full border-2 border-white object-cover bg-slate-200"
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
              style={{
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
                opacity: 1,
                transform: 'scaleY(-1)',
              }}
            />
          </div>

        {/* Register_Frame (Login Form) */}
        <div
          className="relative mx-auto mb-16 w-full max-w-[579px] rounded-[24px] bg-[#FFFFFF] shadow-2xl lg:absolute lg:left-[741px] lg:top-[120px] lg:mb-0 lg:h-[750px] lg:w-[579px]"
          style={{
            boxSizing: 'border-box',
            isolation: 'isolate',
            background: '#FFFFFF',
            borderRadius: '24px',
          }}
        >
          {/* Content Auto Layout */}
          <div
            className="flex w-full flex-col items-center justify-start px-6 py-10 sm:px-12 lg:absolute lg:left-[63px] lg:top-[61px] lg:w-[453px] lg:p-0"
            style={{
              gap: '44px',
            }}
          >
            {/* Frame 19 (Form Fields) */}
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col items-start gap-[40px]"
              style={{
                width: '453px',
                maxWidth: '100%',
              }}
            >
              {/* Auto Layout Vertical (Title Stack) */}
              <div
                className="flex w-full flex-col items-start"
                style={{
                  width: '453px',
                  maxWidth: '100%',
                  height: '82px',
                }}
              >
                {/* Sign In label */}
                <span
                  style={{
                    width: '55px',
                    height: '29px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '160%',
                    color: '#003BE2',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  Sign In
                </span>

                {/* Welcome Back heading */}
                <h1
                  style={{
                    width: '453px',
                    maxWidth: '100%',
                    height: '53px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '44px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                    color: '#242528',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  Welcome Back
                </h1>
              </div>

              {/* Auto Layout Vertical (Inputs & Button) */}
              <div
                className="flex w-full flex-col items-end gap-[24px]"
                style={{
                  width: '453px',
                  maxWidth: '100%',
                }}
              >
                {/* Email field */}
                <div
                  className="flex w-full flex-col items-start gap-[8px]"
                  style={{
                    width: '453px',
                    maxWidth: '100%',
                    height: '77px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <label
                    htmlFor="login-email"
                    style={{
                      width: '35px',
                      height: '17px',
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '120%',
                      color: '#242528',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Email
                  </label>
                  <div
                    className="box-border flex h-[52px] w-full items-center rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] px-[24px] py-[12px] transition-colors focus-within:border-[#242528]"
                    style={{
                      width: '453px',
                      maxWidth: '100%',
                      height: '52px',
                      background: '#FFFFFF',
                      border: '1px solid #E5E6E8',
                      borderRadius: '12px',
                      padding: '12px 24px',
                      gap: '8px',
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    <input
                      id="login-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="designer@example.com"
                      className="w-full bg-transparent text-[18px] leading-[160%] text-[#242528] placeholder:text-[#82868E] outline-none"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '160%',
                        color: email ? '#242528' : '#82868E',
                      }}
                    />
                  </div>
                </div>

                {/* Password field */}
                <div
                  className="flex w-full flex-col items-start gap-[8px]"
                  style={{
                    width: '453px',
                    maxWidth: '100%',
                    height: '77px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  <label
                    htmlFor="login-password"
                    style={{
                      width: '61px',
                      height: '17px',
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '120%',
                      color: '#242528',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Password
                  </label>
                  <div
                    className="box-border flex h-[52px] w-full items-center rounded-[12px] border border-[#E5E6E8] bg-[#FFFFFF] px-[24px] py-[12px] transition-colors focus-within:border-[#242528]"
                    style={{
                      width: '453px',
                      maxWidth: '100%',
                      height: '52px',
                      background: '#FFFFFF',
                      border: '1px solid #E5E6E8',
                      borderRadius: '12px',
                      padding: '12px 24px',
                      gap: '8px',
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    <input
                      id="login-password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-transparent text-[18px] leading-[160%] text-[#242528] placeholder:text-[#82868E] outline-none tracking-widest placeholder:tracking-widest"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '160%',
                        color: password ? '#242528' : '#82868E',
                      }}
                    />
                  </div>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] transition-all hover:bg-[#c6ec1d] active:scale-95 shadow-sm"
                  style={{
                    width: '104px',
                    height: '46px',
                    background: '#D4FB20',
                    borderRadius: '24px',
                    padding: '12px 24px',
                    gap: '8px',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                  }}
                >
                  <span
                    style={{
                      width: '56px',
                      height: '22px',
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '120%',
                      color: '#242528',
                      flex: 'none',
                      order: 0,
                      flexGrow: 0,
                    }}
                  >
                    Sign In
                  </span>
                </button>
              </div>
            </form>

            {/* Frame 18 (Divider, Socials, New user) */}
            <div
              className="flex w-full flex-col items-center gap-[32px]"
              style={{
                width: '453px',
                maxWidth: '100%',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              {/* Auto Layout Horizontal (or divider) */}
              <div
                className="flex w-full items-center justify-between gap-[11px]"
                style={{
                  width: '453px',
                  maxWidth: '100%',
                  height: '29px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <div
                  className="h-0 flex-1 border-t border-[#D1D1D1]"
                  style={{
                    width: '200px',
                    height: '0px',
                    border: '1px solid #D1D1D1',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                />
                <span
                  style={{
                    width: '17px',
                    height: '29px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '160%',
                    color: '#888888',
                    textAlign: 'center',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  or
                </span>
                <div
                  className="h-0 flex-1 border-t border-[#D1D1D1]"
                  style={{
                    width: '200px',
                    height: '0px',
                    border: '1px solid #D1D1D1',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                  }}
                />
              </div>

              {/* Social Login Buttons (Auto Layout Horizontal) */}
              <div
                className="flex flex-row items-center p-0 gap-[16px]"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '16px',
                  width: '160px',
                  height: '72px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                {/* Facebook Button */}
                <button
                  type="button"
                  aria-label="Sign in with Facebook"
                  className="box-border flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white transition-all hover:bg-slate-50 hover:shadow-sm active:scale-95"
                  style={{
                    width: '72px',
                    height: '72px',
                    border: '1px solid #D1D1D1',
                    borderRadius: '24px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <img
                    src="/fb.svg"
                    alt="Facebook"
                    className="h-[34px] w-[34px] object-contain"
                  />
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  aria-label="Sign in with Google"
                  className="box-border flex h-[72px] w-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] bg-white transition-all hover:bg-slate-50 hover:shadow-sm active:scale-95"
                  style={{
                    width: '72px',
                    height: '72px',
                    border: '1px solid #D1D1D1',
                    borderRadius: '24px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  <img
                    src="/google.svg"
                    alt="Google"
                    className="h-[34px] w-[33px] object-contain"
                  />
                </button>
              </div>

              {/* Auto Layout Horizontal (New user? Create an account) */}
              <div
                className="mt-12 flex items-center justify-center gap-[4px]"
                style={{
                  width: '208px',
                  height: '26px',
                  margin: '48px auto 0 auto',
                  flex: 'none',
                  order: 2,
                  flexGrow: 0,
                }}
              >
                <span
                  style={{
                    width: '74px',
                    height: '26px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#888888',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  New user?
                </span>
                <Link
                  href="/register"
                  className="transition-all hover:underline"
                  style={{
                    width: '130px',
                    height: '26px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                    color: '#003BE2',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  Create an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
