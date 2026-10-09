'use client'

import React from 'react'
import Image from 'next/image'

const createMaskStyle = (imagePath: string, bgColor: string): React.CSSProperties => ({
  backgroundColor: bgColor,
  mixBlendMode: 'hard-light',
  maskImage: `url(${imagePath})`,
  WebkitMaskImage: `url(${imagePath})`,
  maskSize: 'contain',
  WebkitMaskSize: 'contain',
  maskRepeat: 'no-repeat',
  WebkitMaskRepeat: 'no-repeat',
})

const MASK_STYLE_1 = createMaskStyle('/elements/1.webp', '#D4FB20')
const MASK_STYLE_2 = createMaskStyle('/elements/2.webp', '#F5F5F6')
const MASK_STYLE_7 = createMaskStyle('/elements/7.webp', '#F5F5F6')
const MASK_STYLE_3 = createMaskStyle('/elements/3.webp', '#D4FB20')
const MASK_STYLE_4 = createMaskStyle('/elements/4.webp', '#D4FB20')
const MASK_STYLE_6 = createMaskStyle('/elements/6.webp', '#F5F5F6')
const MASK_STYLE_5 = createMaskStyle('/elements/5.webp', '#D4FB20')

const CONTAINER_STYLE_1: React.CSSProperties = {
  width: '385px',
  height: '385px',
  left: 'calc(50% - 385px/2 - 680.5px)',
  top: '-145px',
}

const CONTAINER_STYLE_2: React.CSSProperties = {
  width: '175px',
  height: '175px',
  left: 'calc(50% - 175px/2 - 454.5px)',
  top: '1.02%',
  transform: 'matrix(-1, 0, 0, 1, 0, 0)',
}

const CONTAINER_STYLE_7: React.CSSProperties = {
  width: '188px',
  height: '188px',
  left: 'calc(50% - 188px/2 - 715px)',
  top: '225px',
}

const CONTAINER_STYLE_3: React.CSSProperties = {
  width: '342px',
  height: '342px',
  left: 'calc(50% - 342px/2 - 529px)',
  top: '61.27%',
}

const CONTAINER_STYLE_4: React.CSSProperties = {
  width: '188px',
  height: '188px',
  left: 'calc(50% - 188px/2 + 454px)',
  top: '0px',
}

const CONTAINER_STYLE_6: React.CSSProperties = {
  width: '370px',
  height: '370px',
  left: 'calc(50% - 370px/2 + 691px)',
  top: '1.23%',
}

const CONTAINER_STYLE_5: React.CSSProperties = {
  width: '330px',
  height: '330px',
  left: 'calc(50% - 330px/2 + 555px)',
  top: '59.22%',
}

export function CTA() {
  return (
    <section className="hero-grid relative min-h-[488px] overflow-hidden bg-[#003BE2] px-6 py-20 text-white lg:px-10">
      {/* Top-Left Lime Spiral Element (public/elements/1.webp) */}
      <div
        aria-label="Decorative lime spiral"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_1}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/1.webp"
            alt="Decorative lime spiral"
            width={385}
            height={385}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_1}
          />
        </div>
      </div>

      {/* Top-Left Small White Spiral Element (public/elements/2.webp) */}
      <div
        aria-label="Decorative small white spiral"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_2}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/2.webp"
            alt="Decorative small white spiral"
            width={175}
            height={175}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_2}
          />
        </div>
      </div>

      {/* Left Shuttle Gray/50 Cone Element (public/elements/7.webp) */}
      <div
        aria-label="Decorative cone"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_7}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/7.webp"
            alt="Decorative cone"
            width={188}
            height={188}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_7}
          />
        </div>
      </div>

      {/* Bottom-Left Lime Ring Element (public/elements/3.webp) */}
      <div
        aria-label="Decorative lime ring"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_3}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/3.webp"
            alt="Decorative lime ring"
            width={342}
            height={342}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_3}
          />
        </div>
      </div>

      {/* Top-Right Lime Pyramid Element (public/elements/4.webp) */}
      <div
        aria-label="Decorative lime pyramid"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_4}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/4.webp"
            alt="Decorative lime pyramid"
            width={188}
            height={188}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_4}
          />
        </div>
      </div>

      {/* Top-Right Shuttle Gray/50 Cylinder Element (public/elements/6.webp) */}
      <div
        aria-label="Decorative cylinder"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_6}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/6.webp"
            alt="Decorative cylinder"
            width={370}
            height={370}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_6}
          />
        </div>
      </div>

      {/* Bottom-Right Lime Spiral Element (public/elements/5.webp) */}
      <div
        aria-label="Decorative lime spiral"
        role="img"
        className="pointer-events-none absolute z-10"
        style={CONTAINER_STYLE_5}
      >
        <div className="relative h-full w-full isolate">
          <Image
            src="/elements/5.webp"
            alt="Decorative lime spiral"
            width={330}
            height={330}
            className="h-full w-full object-contain"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={MASK_STYLE_5}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-[964px] flex-col items-center justify-center gap-10">
        <h2 className="w-[710px] max-w-full text-center font-heading text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="w-[964px] max-w-full text-center font-sans text-[18px] font-normal leading-[160%] text-[#F5F5F6]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <button
          type="button"
          className="flex h-[46px] w-[172px] items-center justify-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 py-3 font-sans text-[18px] font-medium leading-[120%] text-[#242528] transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Join as Creator
        </button>
      </div>
    </section>
  )
}

export default CTA
