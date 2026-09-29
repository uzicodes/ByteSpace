import {
  BarChart3,
  Star,
} from 'lucide-react'

const categories = [
  'Design',
  'Development',
  'IT & Software',
  'Business',
  'Marketing',
  'Photography',
]

const filters = [
  { label: 'Featured', width: 'w-[96px]' },
  { label: 'Music', width: 'w-[75px]' },
  { label: 'Drawing & Painting', width: 'w-[170px]' },
  { label: 'Marketing', width: 'w-[105px]' },
  { label: 'Animation', width: 'w-[105px]' },
  { label: 'Social Media', width: 'w-[124px]' },
  { label: 'UI/UX Design', width: 'w-[130px]' },
  { label: 'Creative Marketing', width: 'w-[169px]' },
]

const secondaryFilters = [
  { label: 'Digital Illustration', width: 'w-[157px]' },
  { label: 'Film & Video', width: 'w-[123px]' },
  { label: 'Crafts', width: 'w-[76px]' },
  { label: 'Freelance & Entrepreneurship', width: 'w-[246px]' },
  { label: 'Graphic Design', width: 'w-[144px]' },
  { label: 'Photography', width: 'w-[126px]' },
]

const tertiaryFilters = [
  { label: 'Productivity', width: 'w-[118px]' },
  { label: 'Web Development', width: 'w-[166px]' },
  { label: 'Data Science', width: 'w-[127px]' },
  { label: 'Cooking', width: 'w-[94px]' },
]

const courses = [
  {
    title: 'Learn Figma from Basic',
    category: 'Design',
    image: '/courses/1.jpg',
    price: '$25.00',
    rating: '4.5',
  },
  {
    title: 'Build Digital Asset',
    category: 'Development',
    image: '/courses/2.jpg',
    price: '$26.00',
    rating: '4.8',
  },
  {
    title: 'The Power of Big Data',
    category: 'IT & Software',
    image: '/courses/3.jpg',
    price: '$25.00',
    rating: '4.5',
  },
  {
    title: 'Balancing Productivity on...',
    category: 'Business',
    image: '/courses/4.jpg',
    price: '$25.00',
    rating: '4.7',
  },
  {
    title: 'Mastering Money Manage...',
    category: 'Finance',
    image: '/courses/5.jpg',
    price: '$25.00',
    rating: '4.6',
  },
  {
    title: 'From Idea to Startup Succ...',
    category: 'Business',
    image: '/courses/6.jpg',
    price: '$25.00',
    rating: '4.9',
  },
]

export function CourseCard({
  course,
}: {
  course: (typeof courses)[number]
}) {
  return (
    <article className="relative mx-auto box-border h-[384px] w-full max-w-[373px] overflow-hidden rounded-[24px] border border-[#CED0D3] bg-white p-4">
      <div className="relative h-[195.14px] w-full overflow-hidden rounded-[12px] bg-[#443131]">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute left-[13px] bottom-[19px] flex items-start gap-3">
          {['17 Lessons', '2 hours 16 mins', '59 Comments'].map((label, index) => (
            <span
              key={label}
              className={`flex h-[26px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px] ${
                index === 0 ? 'w-[81px]' : index === 1 ? 'w-[109px]' : 'w-[101px]'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-5 h-[131px] w-full">
        <div className="h-[43px]">
          <h3 className="truncate font-heading text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
            {course.title}
          </h3>
          <p className="text-[12px] font-normal leading-[160%] text-[#4F4F4F]">by purepearl studio</p>
        </div>

        <div className="mt-4 flex h-8 items-center gap-3">
          <span className="flex h-8 w-[97px] items-center justify-center gap-1 rounded-[24px] bg-[#F5F5F6] px-3 text-[12px] font-medium leading-[120%] text-[#4B4C53]">
            <BarChart3 className="size-5" />
            Beginner
          </span>
          <span className="flex h-8 items-center -space-x-2">
            {[1, 2, 3, 4].map((avatar) => (
              <img
                key={avatar}
                src={`/courses/dp/${avatar}.png`}
                alt=""
                className="size-8 rounded-full border-2 border-white object-cover"
              />
            ))}
            <span className="relative flex size-8 items-center justify-center rounded-full border-2 border-white bg-[#D4FB20] text-[12px] font-medium leading-5 text-[#242528]">
              26+
            </span>
          </span>
        </div>

        <div className="mt-4 flex h-6 items-end gap-1">
          <span className="font-heading text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]">
            {course.price.replace('.00', '')}
          </span>
          <span className="text-[12px] font-normal leading-[160%] text-[#4F4F4F]">/lifetime</span>
        </div>

        <div className="absolute right-0 top-0 flex h-[29px] items-center text-[#4F4F4F]">
          <span className="text-[18px] font-normal leading-[160%]">{course.rating}</span>
          <Star className="size-5 fill-current text-[#CED0D3]" strokeWidth={2} />
        </div>
      </div>
    </article>
  )
}

export function Courses() {
  return (
    <section id="courses" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mx-auto w-[588px] max-w-full font-heading text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mx-auto mt-4 w-[917px] max-w-full font-sans text-[18px] font-normal leading-[160%] tracking-normal text-center text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different
          fields, from technology to the arts, and make a difference in your career and life.
        </p>
      </div>

      <div className="mx-auto mt-8 flex w-[1086px] max-w-full gap-4 overflow-x-auto">
        {filters.map((filter, index) => (
          <button
            key={filter.label}
            className={`flex h-[43px] shrink-0 items-center justify-center rounded-[24px] font-sans text-[16px] font-medium leading-[120%] ${filter.width} ${
              index === 0
                ? 'bg-[#D4FB20] text-[#242528]'
                : 'bg-[#F5F5F6] text-[#4B4C53]'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-[21px] flex w-[952px] max-w-full gap-4 overflow-x-auto">
        {secondaryFilters.map((filter) => (
          <button
            key={filter.label}
            className={`flex h-[43px] shrink-0 items-center justify-center rounded-[24px] bg-[#F5F5F6] font-sans text-[16px] font-medium leading-[120%] text-[#4B4C53] ${filter.width}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-[21px] flex h-[43px] w-[622px] max-w-full items-center gap-4 overflow-x-auto">
        {tertiaryFilters.map((filter) => (
          <button
            key={filter.label}
            className={`flex h-[43px] shrink-0 items-center justify-center rounded-[24px] bg-[#F5F5F6] font-sans text-[16px] font-medium leading-[120%] text-[#4B4C53] ${filter.width}`}
          >
            {filter.label}
          </button>
        ))}
        <button className="flex h-[43px] w-[53px] shrink-0 items-center justify-center font-sans text-[16px] font-medium leading-[120%] text-[#003BE2]">
          + More
        </button>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>

      <div id="paths" className="mt-20 text-center">
        <h2 className="mx-auto w-[792px] max-w-full font-heading text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mt-4 w-[917px] max-w-full font-sans text-[18px] font-normal leading-[160%] tracking-normal text-center text-[#82868E]">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        <div className="mt-10 grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((item, index) => (
            <div
              key={item}
              className="flex h-[167px] w-[167px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-white transition-shadow hover:shadow-md"
            >
              <div className="flex w-[63px] flex-col items-center gap-3">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[40px] bg-[#D4FB20] p-3">
                  <img
                    src={`/courses/learning-path/${index + 1}.svg`}
                    alt=""
                    className="size-9 object-contain"
                  />
                </div>
                <span className="font-sans text-[20px] font-medium leading-[120%] tracking-normal text-[#242528]" style={{ fontFamily: 'Satoshi' }}>
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Courses
