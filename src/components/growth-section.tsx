import { Check } from 'lucide-react'
import { CourseCard, courses } from './course-section'

const creatorBenefits = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]


export function Growth() {
  return (
    <section className="relative min-h-[1460px] overflow-hidden bg-[#FAFAFA] px-6 py-24 lg:px-10">
      <div className="pointer-events-none absolute -left-[508px] -top-[466px] h-[2391px] w-[2456px]">
        <div className="absolute left-[722px] top-[788px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.24)_0%,rgba(0,59,226,0.0552)_53%,rgba(0,59,226,0.0144)_75%,rgba(0,59,226,0)_100%)] blur-[20px]" />
        <div className="absolute left-[-152px] top-0 h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.4)_0%,rgba(203,252,1,0.092)_53%,rgba(203,252,1,0.024)_75%,rgba(203,252,1,0)_100%)] blur-[20px]" />
        <div className="absolute left-0 top-[649px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.16)_0%,rgba(0,59,226,0.0368)_53%,rgba(0,59,226,0.0096)_75%,rgba(0,59,226,0)_100%)] blur-[20px]" />
        <div className="absolute left-[1319px] top-[8px] h-[1137px] w-[1137px] rounded-full bg-[radial-gradient(circle,rgba(0,59,226,0.08)_0%,rgba(0,59,226,0.0184)_53%,rgba(0,59,226,0.0048)_75%,rgba(0,59,226,0)_100%)] blur-[20px]" />
        <div className="absolute left-[221px] top-[1412px] h-[672px] w-[672px] rounded-full bg-[radial-gradient(circle,rgba(203,252,1,0.6)_0%,rgba(203,252,1,0.138)_53%,rgba(203,252,1,0.036)_75%,rgba(203,252,1,0)_100%)] blur-[20px]" />
      </div>
      <div
        aria-label="Decorative lime spiral"
        role="img"
        className="pointer-events-none absolute z-30"
        style={{
          left: 'calc(50% - 215px/2 + 490px)',
          top: '10.64%',
          bottom: '50.41%',
          width: '215px',
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
            transform: 'scaleX(-1)',
            transformOrigin: 'center',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1258px] flex-col gap-[72px]">
        <div className="grid min-h-[552px] items-center gap-[63px] lg:grid-cols-[574px_621px]">
          <div className="flex flex-col items-start gap-10">
            <h2 className="font-heading text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] font-sans text-[18px] font-normal leading-[160%] text-[#4B4C53]">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="flex items-end gap-14">
              {[
                ['12K', 'Students'],
                ['70+', 'Courses'],
                ['16', 'Creators'],
              ].map(([value, label]) => (
                <span key={label} className="flex flex-col">
                  <b className="font-heading text-[36px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2]">{value}</b>
                  <small className="font-sans text-[18px] font-normal leading-[160%] text-[#4B4C53]">{label}</small>
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[552px] w-full">
            <img
              src="/person-1.png"
              alt="Student learning with a laptop"
              className="absolute left-0 top-3 z-20 h-[540px] w-[577px] object-contain object-bottom"
              style={{ filter: 'drop-shadow(51px 73px 72px rgba(0,0,0,0.13)) drop-shadow(25px 37px 36px rgba(0,0,0,0.1))' }}
            />

            <div className="pointer-events-none absolute left-[345px] top-[213px] z-30 flex h-[118px] w-[210px] flex-col items-start justify-start gap-2 rounded-[16px] bg-white/90 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-[10px]">
              <div className="text-[12px] font-medium leading-[120%] text-[#242528]">Learning Progress</div>
              <div className="flex items-center gap-3">
                <div className="text-[38px] font-semibold leading-none tracking-[-0.04em] text-slate-900">55%</div>
              </div>
              <div className="relative h-2 w-[180px] overflow-hidden rounded-full bg-[#E8E8EA]">
                <div className="absolute inset-y-0 left-0 w-[55%] rounded-full bg-[#D4FB20]" />
              </div>
            </div>

            <div className="absolute left-0 top-0 z-10">
              <CourseCard course={courses[0]} />
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-[596px] w-[1200px] max-w-full items-center gap-[79px]">
          <div className="relative h-[596px] w-[541px] shrink-0">
            <div className="absolute left-0 top-11 flex h-[119px] w-[232px] flex-col items-start gap-2 rounded-[16px] bg-[#003BE2] p-4 text-[#F5F5F6] backdrop-blur-[10px]">
              <div className="flex h-[31px] flex-col">
                <span className="font-sans text-[16px] font-medium leading-[120%]">Total Revenue</span>
                <span className="font-sans text-[10px] font-normal leading-[120%]">July 1-28</span>
              </div>
              <div className="flex h-8 w-[200px] items-center justify-between gap-2">
                <strong className="font-heading text-[24px] font-semibold leading-8 tracking-[-0.01em]">$120.29</strong>
                <span className="flex h-6 w-[38px] items-center justify-center rounded-[24px] bg-[#CBFC01] px-2 font-sans text-[10px] font-medium leading-5 text-[#242528]">+12$</span>
              </div>
              <div className="h-2 w-[200px] rounded-[24px] bg-white">
                <div className="h-2 w-[112px] rounded-[24px] bg-[#D4FB20]" />
              </div>
            </div>

            <div className="absolute left-0 top-[194px] flex h-[135px] w-[134px] flex-col items-start gap-2 rounded-[16px] bg-[#003BE2] p-4 text-[#F5F5F6] backdrop-blur-[10px]">
              <div className="flex h-[31px] flex-col">
                <span className="font-sans text-[16px] font-medium leading-[120%]">Year to Date</span>
                <span className="font-sans text-[10px] font-normal leading-[120%]">2023</span>
              </div>
              <strong className="font-heading text-[24px] font-semibold leading-8 tracking-[-0.01em]">$1,200.38</strong>
              <span className="flex h-6 w-[38px] items-center justify-center rounded-[24px] bg-[#CBFC01] px-2 font-sans text-[10px] font-medium leading-5 text-[#242528]">+12$</span>
            </div>

            <div className="absolute left-[283px] top-[355px] z-30 flex h-[123px] w-[258px] flex-col items-start gap-2 rounded-[16px] bg-white p-4 text-[#242528] backdrop-blur-[10px]">
              <div className="flex h-10 flex-col">
                <span className="font-sans text-[16px] font-medium leading-6">Happy Students</span>
                <span className="flex items-center gap-1 font-sans text-[10px] font-bold leading-[150%]">
                  4.5 (240)
                  <span className="text-[16px] leading-4 text-[#D4FB20]">★</span>
                </span>
              </div>
              <div className="flex h-[43px] items-start -space-x-4">
                {[1, 2, 3, 4, 5, 6, 7].map((avatar) => (
                  <img key={avatar} src={`/dp_images/happy_students/${avatar}.png`} alt="" className="size-[43px] rounded-full border-2 border-white object-cover" />
                ))}
                <span className="flex size-[43px] items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] font-sans text-[12px] font-bold text-[#242528]">2K+</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 h-[596px] w-[435px] shrink-0 -translate-x-[600px] -mr-[514px]">
            <img
              src="/person-2.png"
              alt="Creator working at a laptop"
              className="absolute inset-0 h-[540px] w-[577px] object-contain object-center"
              style={{ filter: 'drop-shadow(51px 73px 72px rgba(0,0,0,0.13)) drop-shadow(25px 37px 36px rgba(0,0,0,0.1))', transform: 'scale(1.38)', transformOrigin: 'center' }}
            />

            {/* Decorative lime spiral */}
            <div
              aria-label="Decorative lime spiral"
              role="img"
              className="pointer-events-none absolute z-20"
              style={{
                width: '216px',
                height: '216px',
                left: '260px',
                top: '90px',
                opacity: 1,
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
          </div>

          {/* Right Text Content */}
          <div className="flex w-[580px] max-w-full flex-col items-start gap-10">
            <h2 className="w-[391px] max-w-full font-heading text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="w-[574px] max-w-full font-sans text-[18px] font-normal leading-[28px] text-[#242528]">
              <strong className="font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <div className="flex w-[231px] max-w-full flex-col items-start gap-4">
              {creatorBenefits.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#003BE2] text-white">
                    <Check className="size-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-[18px] font-medium leading-[120%] text-[#242528]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth
