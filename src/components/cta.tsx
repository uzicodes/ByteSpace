'use client'

export function CTA() {
  return (
    <section className="hero-grid relative min-h-[488px] overflow-hidden bg-[#003BE2] px-6 py-20 text-white lg:px-10">
      {/* Top-Left Lime Spiral Element (public/elements/1.png) */}
      <div
        aria-label="Decorative lime spiral"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '385px',
          height: '385px',
          left: 'calc(50% - 385px/2 - 680.5px)',
          top: '-145px',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#D4FB20',
            maskImage: 'url(/elements/1.png)',
            WebkitMaskImage: 'url(/elements/1.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Top-Left Small White Spiral Element (public/elements/2.png) */}
      <div
        aria-label="Decorative small white spiral"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '175px',
          height: '175px',
          left: 'calc(50% - 175px/2 - 454.5px)',
          top: '1.02%',
          transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#F5F5F6',
            maskImage: 'url(/elements/2.png)',
            WebkitMaskImage: 'url(/elements/2.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Left Shuttle Gray/50 Cone Element (public/elements/7.png) */}
      <div
        aria-label="Decorative cone"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '188px',
          height: '188px',
          left: 'calc(50% - 188px/2 - 715px)',
          top: '225px',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#F5F5F6',
            maskImage: 'url(/elements/7.png)',
            WebkitMaskImage: 'url(/elements/7.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Bottom-Left Lime Ring Element (public/elements/3.png) */}
      <div
        aria-label="Decorative lime ring"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '342px',
          height: '342px',
          left: 'calc(50% - 342px/2 - 529px)',
          top: '61.27%',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#D4FB20',
            maskImage: 'url(/elements/3.png)',
            WebkitMaskImage: 'url(/elements/3.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Top-Right Lime Pyramid Element (public/elements/4.png) */}
      <div
        aria-label="Decorative lime pyramid"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '188px',
          height: '188px',
          left: 'calc(50% - 188px/2 + 454px)',
          top: '0px',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#D4FB20',
            maskImage: 'url(/elements/4.png)',
            WebkitMaskImage: 'url(/elements/4.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Top-Right Shuttle Gray/50 Cylinder Element (public/elements/6.png) */}
      <div
        aria-label="Decorative cylinder"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '380px',
          height: '380px',
          left: 'calc(50% - 380px/2 + 735px)',
          top: '35px',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#F5F5F6',
            maskImage: 'url(/elements/6.png)',
            WebkitMaskImage: 'url(/elements/6.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      {/* Bottom-Right Lime Spiral Element (public/elements/5.png) */}
      <div
        aria-label="Decorative lime spiral"
        role="img"
        className="pointer-events-none absolute z-10"
        style={{
          width: '330px',
          height: '330px',
          left: 'calc(50% - 330px/2 + 555px)',
          top: '59.22%',
        }}
      >
        <div
          className="h-full w-full"
          style={{
            backgroundColor: '#D4FB20',
            maskImage: 'url(/elements/5.png)',
            WebkitMaskImage: 'url(/elements/5.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
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
