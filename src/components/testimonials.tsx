'use client'

const testimonials = [
  {
    image: '/testimonials/1.webp',
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    image: '/testimonials/2.webp',
    name: 'James L.',
    role: 'Lifelong Learner',
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    image: '/testimonials/3.webp',
    name: 'Alex B.',
    role: 'Inspired Creator',
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

export function Testimonials() {
  return (
    <section
      id="community"
      className="relative w-full min-h-[784px] overflow-hidden px-6 py-24 lg:px-10"
      style={{
        backgroundColor: '#FAFAFA',
        backgroundImage: `
          radial-gradient(55% 55% at 75% 15%, rgba(212, 251, 32, 0.45) 0%, rgba(212, 251, 32, 0.18) 45%, rgba(250, 250, 250, 0) 80%),
          radial-gradient(45% 65% at 100% 35%, rgba(212, 251, 32, 0.3) 0%, rgba(212, 251, 32, 0.1) 50%, rgba(250, 250, 250, 0) 80%),
          radial-gradient(50% 50% at 2% 95%, rgba(74, 102, 224, 0.32) 0%, rgba(100, 125, 245, 0.14) 45%, rgba(250, 250, 250, 0) 80%)
        `,
      }}
    >
      {/* Top-Right Lime Ambient Glow */}
      <div
        className="pointer-events-none absolute -right-24 top-0 z-0 h-[500px] w-[620px] rounded-full bg-[#D4FB20]/35 blur-[120px]"
        aria-hidden="true"
      />
      {/* Bottom-Left Persian Blue Ambient Glow */}
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 z-0 h-[460px] w-[460px] rounded-full bg-[#4A66E0]/25 blur-[110px]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <h2
            className="w-[577px] max-w-full font-heading font-semibold text-[44px] leading-[120%] tracking-[-0.01em] text-[#000000]"
            style={{
              width: '577px',
              maxWidth: '100%',
              minHeight: '106px',
              fontFamily: "'Poppins', sans-serif",
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '44px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#000000',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p
            className="w-[580px] max-w-full font-sans text-[18px] font-normal leading-[160%] text-[#4F4F4F]"
            style={{
              width: '580px',
              maxWidth: '100%',
              minHeight: '145px',
              fontFamily: "'Satoshi', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '160%',
              color: '#4F4F4F',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have experienced
            the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-stretch gap-6">
          {testimonials.map((person, index) => (
            <article
              key={person.name}
              className="relative z-10 flex flex-col items-start bg-white rounded-[24px] border border-black/[0.03] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_32px_-8px_rgba(0,0,0,0.08)] hover:border-black/[0.07]"
              style={{
                width: '374px',
                maxWidth: '100%',
                height: '432px',
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '24px',
                gap: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flex: 'none',
                order: index,
                flexGrow: 0,
              }}
            >
              {/* Ellipse */}
              <img
                src={person.image}
                alt={person.name}
                className="w-[80px] h-[80px] rounded-full object-cover shrink-0"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '9999px',
                  objectFit: 'cover',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              />

              {/* Auto Layout Vertical */}
              <div
                className="flex flex-col items-start p-0"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  width: '158px',
                  height: '53px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                {/* Name */}
                <h3
                  className="font-heading font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#000000] whitespace-nowrap"
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
                    color: '#000000',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  {person.name}
                </h3>

                {/* Role */}
                <p
                  className="font-sans font-normal text-[18px] leading-[160%] text-[#003BE2]"
                  style={{
                    width: index === 0 ? '158px' : 'auto',
                    height: '29px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '160%',
                    color: '#003BE2',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  {person.role}
                </p>
              </div>

              {/* Quote */}
              <p
                className="font-sans font-normal text-[18px] leading-[160%] text-[#4F4F4F]"
                style={{
                  width: '326px',
                  maxWidth: '100%',
                  height: '203px',
                  fontFamily: "'Satoshi', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '160%',
                  color: '#4F4F4F',
                  flex: 'none',
                  order: 2,
                  flexGrow: 0,
                }}
              >
                {person.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export const Community = Testimonials
export default Testimonials
