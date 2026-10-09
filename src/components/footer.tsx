'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // subscription handling placeholder
  }

  return (
    <footer
      className="relative w-full border-t border-[#CED0D3] bg-[#FFFFFF] px-6 pt-[71px] pb-[48px] lg:px-0"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* 1px top border line matching Figma Line 27 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-0 border-t border-[#CED0D3]"
        aria-hidden="true"
      />

      {/* Content Auto Layout */}
      <div
        className="mx-auto flex flex-col items-start gap-[60px] lg:gap-[130px]"
        style={{
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        {/* Footer_Nav */}
        <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:gap-[92px]">
          {/* Left Column: Brand & Newsletter */}
          <div
            className="flex flex-col items-start gap-[36px] lg:gap-[45px]"
            style={{
              maxWidth: '528px',
              width: '100%',
            }}
          >
            {/* Brand & Tagline */}
            <div className="flex flex-col items-start gap-[16px]">
              {/* Brand Logo Group */}
              <div
                className="flex items-center gap-[8.12px]"
                style={{
                  height: '37px',
                }}
              >
                <Image
                  src="/logo.png"
                  alt="ByteSpace logo"
                  width={29}
                  height={32}
                  className="h-[31.5px] w-[28.88px] object-contain"
                />
                <span
                  style={{
                    fontFamily: "'Clash Display', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '24px',
                    lineHeight: '30px',
                    color: '#242528',
                  }}
                >
                  ByteSpace
                </span>
              </div>

              {/* Newsletter Subtitle */}
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '160%',
                  color: '#242528',
                }}
              >
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter Input & Disclaimer */}
            <div
              className="flex w-full flex-col items-start gap-[24px]"
              style={{
                maxWidth: '504px',
              }}
            >
              <form
                onSubmit={handleSubscribe}
                className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:gap-[24px]"
              >
                {/* Input Pill */}
                <div
                  className="box-border flex h-[52px] w-full sm:w-[376px] items-center rounded-[100px] border border-[#CED0D3] bg-[#FFFFFF] px-[24px] py-[18px] transition-colors focus-within:border-[#242528]"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-[16px] leading-[160%] text-[#242528] placeholder:text-[#242528] outline-none"
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 400,
                    }}
                  />
                </div>

                {/* Search / Submit Button */}
                <button
                  type="submit"
                  className="flex h-[46px] w-[104px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-[24px] py-[12px] transition-all hover:bg-[#c6ec1d] active:scale-95"
                >
                  <span
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '120%',
                      color: '#242528',
                    }}
                  >
                    Search
                  </span>
                </button>
              </form>

              {/* Disclaimer */}
              <p
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '12px',
                  lineHeight: '160%',
                  color: '#242528',
                }}
              >
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Columns: Nav Links */}
          <div
            className="flex w-full flex-wrap gap-10 sm:gap-12 lg:w-[580px] lg:h-[222px] lg:flex-nowrap lg:items-end lg:gap-[40px]"
            style={{
              width: '580px',
              maxWidth: '100%',
              height: '222px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '40px',
            }}
          >
            {/* Column 1: Courses & Categories */}
            <div className="flex w-[140px] sm:w-[167px] flex-col items-start">
              <ul className="flex flex-col items-start gap-[16px]">
                {['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition-colors hover:text-[#003BE2]"
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '160%',
                          color: '#242528',
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 2: Additional Categories */}
            <div className="flex w-[140px] sm:w-[167px] flex-col items-start">
              <ul className="flex flex-col items-start gap-[16px]">
                {['Development', 'Marketing', 'Photography', 'Finance', 'Sport'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="transition-colors hover:text-[#003BE2]"
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '14px',
                          lineHeight: '160%',
                          color: '#242528',
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Column 3: Platform Links */}
            <div className="flex w-[140px] sm:w-[167px] flex-col items-start">
              <ul className="flex flex-col items-start gap-[16px]">
                {[
                  'Become a Creator',
                  'Affiliate Program',
                  'Contact',
                  'Help',
                  'About',
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-[#003BE2]"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '160%',
                        color: '#242528',
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright & Legal Section */}
        <div className="flex w-full flex-col items-start gap-[24px]">
          {/* Divider Line */}
          <div className="w-full border-t border-[#CED0D3]" />

          {/* Bottom Bar Content */}
          <div className="flex w-full flex-col items-start justify-between gap-4 text-left sm:flex-row sm:items-center">
            {/* Copyright */}
            <p
              style={{
                fontFamily: "'Satoshi', sans-serif",
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '160%',
                color: '#242528',
              }}
            >
              @ 2023 ByteSpace. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-[24px]">
              {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="transition-colors hover:text-[#003BE2]"
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '160%',
                      color: '#242528',
                    }}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

