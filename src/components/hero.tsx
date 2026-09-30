import { Search } from 'lucide-react'
import { HeroSphere } from './ui/sphere'

export function Hero() {
  return (
    <section className="hero-grid relative min-h-[848px] overflow-hidden bg-[#073ee5] px-6 pb-20 pt-24 text-white sm:pt-28 lg:min-h-[848px] lg:px-10">
      {/* Background Half-Circle Sphere */}
      <HeroSphere className="pointer-events-none absolute -bottom-30 left-1/2 -translate-x-1/2 z-0 max-w-none" />

      <div
        className="pointer-events-none absolute left-[-120px] top-[120px] z-10 h-[387px] w-[387px]"
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

      <div
        className="pointer-events-none absolute z-10"
        style={{
          left: 'calc(50% - 175px/2 - 449.5px)',
          top: '46.58%',
          width: '175px',
          height: '175px',
          transform: 'matrix(-1, 0, 0, 1, 0, 0)',
        }}
      >
        <div
          aria-label="Decorative spiral"
          role="img"
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

      <div
        className="pointer-events-none absolute z-10"
        style={{
          left: 'calc(50% - 342px/2 - 470px)',
          top: '66.6%',
          width: '310px',
          height: '310px',
        }}
      >
        <div
          aria-label="Decorative cone"
          role="img"
          className="h-full w-full"
          style={{
            backgroundColor: '#F5F5F6',
            maskImage: 'url(/elements/3.png)',
            WebkitMaskImage: 'url(/elements/3.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

        <div
          className="pointer-events-none absolute z-10"
          style={{
            left: 'calc(50% - 188px/2 + 480px)',
            top: '44.3%',
            width: '188px',
            height: '188px',
          }}
        >
          <div
            aria-label="Decorative cone"
            role="img"
            className="h-full w-full"
            style={{
              backgroundColor: '#F5F5F6',
              maskImage: 'url(/elements/4.png)',
              WebkitMaskImage: 'url(/elements/4.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }}
          />
        </div>

      <div
        className="pointer-events-none absolute z-10"
        style={{
          left: 'calc(50% - 330px/2 + 547px)',
          top: '69%',
          bottom: '-1.23%',
          width: '330px',
        }}
      >
        <div
          aria-label="Decorative lower-right shape"
          role="img"
          className="h-full w-full"
          style={{
            backgroundColor: '#F5F5F6',
            maskImage: 'url(/elements/5.png)',
            WebkitMaskImage: 'url(/elements/5.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute z-10"
        style={{
          left: 'calc(50% - 370px/2 + 771px)',
          top: '17.58%',
          bottom: '46.29%',
          width: '370px',
        }}
      >
        <div
          aria-label="Decorative lime shape"
          role="img"
          className="h-full w-full"
          style={{
            backgroundColor: '#D4FB20',
            maskImage: 'url(/elements/6.png)',
            WebkitMaskImage: 'url(/elements/6.png)',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            transform: 'scale(1.14)',
            transformOrigin: 'center',
          }}
        />
      </div>

      {/* Floating stats card */}
      <div
        className="pointer-events-none absolute z-30 flex flex-col items-start justify-center gap-2 rounded-[16px] bg-white/90 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-[10px]"
        style={{ left: '430px', top: '580px', width: '208px', height: '70px' }}
      >
        <div className="text-[13px] font-semibold leading-[1.2] text-slate-900">UI/UX Design</div>
        <div className="flex items-center gap-2 text-[11px] font-medium leading-[1.2] text-slate-700">
          <span>200 Courses</span>
          <span className="text-slate-400">|</span>
          <span>1000+ Students</span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute z-30 flex flex-col items-start justify-center gap-2 rounded-[16px] bg-white/90 p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-[10px]"
        style={{ left: '420px', top: '710px', width: '236px', height: '111px' }}
      >
        <div className="text-[13px] font-semibold leading-none text-slate-900">Happy Students</div>

        <div className="flex items-center gap-2 text-[11px] font-medium leading-none text-slate-800">
          <span className="text-[15px] font-normal text-slate-900">4.5</span>
          <span className="text-[#D4FB20]" aria-label="student rating">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </span>
          <span className="text-slate-500">(240)</span>
        </div>

        <div className="flex items-center -space-x-2">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <img
              key={num}
              src={`/dp_images/happy_students/${num}.png`}
              alt="Happy student"
              className="h-8 w-8 rounded-full border-2 border-white object-cover bg-slate-200"
            />
          ))}
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[10px] font-semibold text-slate-700">
            2K+
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-[880px] top-[550px] z-30 flex h-[118px] w-[210px] flex-col items-start justify-start gap-2 rounded-[16px] bg-white/90 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
        <div className="text-[12px] font-medium leading-[120%] text-[#242528]">Learning Progress</div>
        <div className="flex items-center gap-3">
          <div className="text-[38px] font-semibold leading-none tracking-[-0.04em] text-slate-900">55%</div>
        </div>
        <div className="relative h-2 w-[180px] overflow-hidden rounded-full bg-[#E8E8EA]">
          <div className="absolute inset-y-0 left-0 w-[55%] rounded-full bg-[#D4FB20]" />
        </div>
      </div>

      {/* Person Image */}
      <div className="pointer-events-none absolute -bottom-6 sm:-bottom-8 left-1/2 z-10 -translate-x-1/2 w-[300px] sm:w-[380px] md:w-[480px] md:h-[450px]">
        <img
          src="/person-1.png"
          alt="Student with laptop"
          className="h-full w-full object-contain object-bottom"
          style={{
            filter: [
              'drop-shadow(0.52px 0.74px 3.04px rgba(0,0,0,0.04))',
              'drop-shadow(2.23px 3.19px 5.72px rgba(0,0,0,0.06))',
              'drop-shadow(5.38px 7.69px 9.57px rgba(0,0,0,0.07))',
              'drop-shadow(10.21px 14.58px 16.09px rgba(0,0,0,0.08))',
              'drop-shadow(16.95px 24.21px 24px rgba(0,0,0,0.09))',
              'drop-shadow(25.84px 36.91px 36px rgba(0,0,0,0.10))',
              'drop-shadow(37.12px 53.03px 56px rgba(0,0,0,0.11))',
              'drop-shadow(51.04px 72.91px 72px rgba(0,0,0,0.13))',
            ].join(' '),
          }}
        />
      </div>

      {/* ---- Hero content ---- */}
      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <h1 className="mx-auto max-w-[935px] text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold tracking-[-0.01em] leading-[120%] text-center">
          <span className="block">Get Access to Hundreds</span>
          <span className="block mt-1 sm:mt-2">Courses Available</span>
        </h1>

        <p className="mx-auto mt-5 max-w-5xl text-[15px] sm:text-[17px] lg:text-[18px] leading-[160%] text-blue-100/90 font-light tracking-normal text-center sm:whitespace-nowrap">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search bar */}
        <div className="mx-auto mt-7 flex w-full max-w-[580px] items-center justify-center gap-4 px-2">
          <div className="flex h-[52px] flex-1 items-center rounded-full bg-white pl-5 pr-4 shadow-sm">
            <Search className="size-5 text-slate-400 shrink-0" />
            <input
              aria-label="Search courses"
              className="min-w-0 flex-1 bg-transparent px-3 text-[15px] text-slate-800 placeholder:text-slate-400 outline-none"
              placeholder="Course, topic, creator"
            />
          </div>
          <button
            className="flex h-[52px] w-[104px] shrink-0 items-center justify-center rounded-full bg-[#E1F959] text-[18px] font-semibold text-slate-900 transition-transform hover:-translate-y-0.5 hover:bg-[#d6f043]"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
