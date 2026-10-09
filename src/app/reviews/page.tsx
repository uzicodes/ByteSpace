'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Play,
  Share2,
  BarChart3,
  Star,
  Users,
  Video,
  FileText,
  Award,
  MessageSquare,
} from 'lucide-react';
import { Navbar } from '@/src/components/navbar';
import { Footer } from '@/src/components/footer';

const BLUEPRINT_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)',
  backgroundSize: '120px 120px',
};

const PLAY_BUTTON_STYLE: React.CSSProperties = {
  background: 'rgba(61, 61, 61, 0.24)',
  border: '1px solid #4F4F4F',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
};

export default function CourseReviewsPage() {
  const isPlayingRef = useRef(false);
  const [selectedRating, setSelectedRating] = useState<string>('All');

  const ratingBars = [
    { stars: 5, count: 720, widthPx: '260.23px', percentage: '92.3%' },
    { stars: 4, count: 120, widthPx: '102.91px', percentage: '36.5%' },
    { stars: 3, count: 21, widthPx: '26.72px', percentage: '9.5%' },
    { stars: 2, count: 12, widthPx: '9.89px', percentage: '3.5%' },
    { stars: 1, count: 16, widthPx: '14.84px', percentage: '5.3%' },
  ];

  const reviewsList = [
    {
      id: 1,
      name: 'PurePearl Studio',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: '/details/2.webp',
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: 2,
      name: 'Albert Flores',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: '/testimonials/1.webp',
      comment:
        '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
    },
    {
      id: 3,
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: '/testimonials/2.webp',
      comment:
        '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
    },
    {
      id: 4,
      name: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      time: 'a year ago',
      rating: 5,
      avatar: '/testimonials/3.webp',
      comment:
        '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."',
    },
  ];

  const syllabusLessons = [
    { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528]">
      {/* ======================================================== */}
      {/* 1. HERO HEADER BANNER (957px Persian Blue #003BE2)       */}
      {/* ======================================================== */}
      <section className="relative h-[800px] lg:h-[957px] w-full overflow-hidden bg-[#003BE2]">
        {/* Blueprint Grid Lines (120px increments, 0.12 opacity) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-12"
          style={BLUEPRINT_GRID_STYLE}
        />

        {/* Navbar */}
        <Navbar />

        {/* Hero Top Content Area (Title, Subtitle, Author, Meta Badges & Share) */}
        <div className="relative z-10 mx-auto w-full max-w-[1283px] px-4 pt-[140px] sm:px-6 lg:pt-[172px]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Title and Details Stack (Exact Figma Auto Layout: 769px × 185px, gap: 24px) */}
            <div className="flex w-full flex-col items-start gap-6 lg:w-[769px] lg:h-[185px] shrink-0 p-0">
              {/* Titles Stack (769px × 75px, gap: 8px) */}
              <div className="flex w-full flex-col items-start gap-2 lg:w-[769px] lg:h-[75px] p-0">
                <h1 className="whitespace-nowrap font-['Poppins'] font-semibold text-[36px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6] w-[769px] max-w-full h-[43px] flex items-center">
                  Build Digital Asset: A Comprehensive Guide
                </h1>
                <p className="whitespace-nowrap font-['Poppins'] font-semibold text-[20px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6] w-[571px] max-w-full h-[24px] flex items-center">
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>
              </div>

              {/* Creator: by purepearl studio */}
              <p className="flex h-[22px] items-center font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#F1F4FE]">
                by{' '}
                <Link
                  href="/creator_profile"
                  className="ml-1 font-medium text-[#D4FB20] hover:underline transition-colors"
                >
                  purepearl studio
                </Link>
              </p>

              {/* Meta Badges Row (576px × 40px, gap: 16px, order: 2) */}
              <div className="flex flex-wrap items-center gap-4 lg:w-[576px] lg:h-[40px] p-0">
                {/* Level Badge (171px × 40px) */}
                <div className="flex h-[40px] w-[171px] items-center justify-center gap-2 rounded-[24px] bg-white px-6 py-2 shadow-sm backdrop-blur-[20px]">
                  <BarChart3 className="size-6 shrink-0 text-[#003BE2]" />
                  <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528] whitespace-nowrap">
                    Intermediate
                  </span>
                </div>

                {/* Rating Badge (200px × 40px) */}
                <div className="flex h-[40px] w-[200px] items-center justify-center gap-2 rounded-[24px] bg-white px-6 py-2 shadow-sm backdrop-blur-[20px]">
                  <Star className="size-6 shrink-0 fill-[#003BE2] text-[#003BE2]" />
                  <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528] whitespace-nowrap">
                    4.8 (172 reviews)
                  </span>
                </div>

                {/* Students Badge (173px × 40px) */}
                <div className="flex h-[40px] w-[173px] items-center justify-center gap-2 rounded-[24px] bg-white px-6 py-2 shadow-sm backdrop-blur-[20px]">
                  <Users className="size-6 shrink-0 text-[#003BE2]" />
                  <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528] whitespace-nowrap">
                    199 Students
                  </span>
                </div>
              </div>
            </div>

            {/* Share Button on Right */}
            <button
              type="button"
              className="flex h-[40px] w-[122px] shrink-0 items-center justify-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 py-2 transition-transform hover:scale-105 active:scale-95 shadow-sm"
            >
              <Share2 className="size-5 text-[#242528]" />
              <span className="font-['Satoshi'] text-[16px] font-medium leading-6 text-[#242528]">
                Share
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN BODY SECTION (Overlapping Hero & Layout)         */}
      {/* ======================================================== */}
      <main className="relative z-20 mx-auto -mt-[380px] sm:-mt-[440px] lg:-mt-[541px] w-full max-w-[1240px] px-4 pb-24 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* ==================================================== */}
          {/* LEFT COLUMN: VIDEO PLAYER + COURSE REVIEWS CONTENT   */}
          {/* ==================================================== */}
          <div className="flex w-full flex-col items-start gap-10 lg:w-[725px]">
            {/* Video Preview Card (720px × 479px in Figma) */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[479px] w-full overflow-hidden rounded-[24px] border border-[#CED0D3]/30 bg-[#443131] shadow-2xl">
              <Image
                src="/details/1.webp"
                alt="Course Video Preview"
                fill
                sizes="(max-width: 1024px) 100vw, 725px"
                priority
                className="h-full w-full object-cover"
              />

              {/* Video Overlay with Center Glassmorphic Play Button */}
              <button
                type="button"
                onClick={() => {
                  isPlayingRef.current = !isPlayingRef.current;
                }}
                aria-label="Play course preview"
                className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[104px] w-[104px] items-center justify-center rounded-[24px] p-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                style={PLAY_BUTTON_STYLE}
              >
                <Play className="size-12 fill-[#F5F2FF] text-[#F5F2FF] translate-x-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Navigation Tabs (About / Lesson / Reviews) */}
            <div className="flex items-center gap-4 pt-12 sm:pt-16 lg:pt-20">
              <Link
                href="/details"
                className="flex h-[43px] w-[76px] items-center justify-center rounded-[24px] bg-[#F5F5F6] font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#4B4C53] transition-all hover:bg-[#E5E6E8]"
              >
                About
              </Link>

              <Link
                href="/lessons"
                className="flex h-[43px] w-[82px] items-center justify-center rounded-[24px] bg-[#F5F5F6] font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#4B4C53] transition-all hover:bg-[#E5E6E8]"
              >
                Lesson
              </Link>

              <button
                type="button"
                className="flex h-[43px] w-[90px] items-center justify-center rounded-[24px] bg-[#D4FB20] font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528] transition-all"
              >
                Reviews
              </button>
            </div>

            {/* Main Reviews Column (width: 723px, gap: 24px) */}
            <div className="flex w-full flex-col items-start gap-6 lg:w-[723px]">
              {/* 1. What Learners Are Saying */}
              <div className="flex flex-col items-start gap-2">
                <h2 className="flex h-[24px] w-[257px] items-center font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  What Learners Are Saying
                </h2>
                <p className="w-full max-w-[723px] font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  Discover what our learners have to say about their experience with &apos;Build Digital
                  Assets: A Comprehensive Guide.&apos; Read reviews and ratings from individuals who have
                  embarked on the transformative journey of mastering digital asset creation.
                </p>
              </div>

              {/* 2. Rating Breakdown Card (723px × 226px) */}
              <div className="box-border flex min-h-[226px] w-full max-w-[723px] flex-row items-center justify-center gap-6 rounded-[16px] border border-[#CED0D3] bg-white p-10 shadow-sm backdrop-blur-[10px]">
                {/* Left Ratings Score Pill (129px × 140px, #D4FB20) */}
                <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-[8px] bg-[#D4FB20] p-6 shadow-sm backdrop-blur-[20px]">
                  <span className="font-['Satoshi'] text-[14px] font-medium leading-[120%] text-[#242528]">
                    Ratings
                  </span>
                  <span className="mt-1 font-['Poppins'] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                    4.7
                  </span>
                </div>

                {/* Right Breakdown Rows (490px × 146px) */}
                <div className="flex min-h-[146px] w-full max-w-[490px] flex-col justify-between gap-1 grow">
                  {ratingBars.map((bar) => (
                    <div
                      key={bar.stars}
                      className="flex h-[26px] w-full items-center justify-between gap-4"
                    >
                      {/* Bar Track (282px × 8px) */}
                      <div className="relative h-2 w-full max-w-[282px] overflow-hidden rounded-full bg-[#E5E6E8]">
                        <div
                          className="h-full rounded-full bg-[#D4FB20]"
                          style={{ width: bar.widthPx }}
                        />
                      </div>

                      {/* 5 Stars Icons Stack (136px × 24px) */}
                      <div className="flex w-[136px] shrink-0 items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-5 shrink-0 ${
                              i < bar.stars
                                ? 'fill-[#4B4C53] text-[#4B4C53]'
                                : 'fill-transparent text-[#CED0D3]'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Count (40px) */}
                      <span className="w-10 text-right font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                        {bar.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Individual Reviews Header */}
              <div className="pt-2">
                <h2 className="flex h-[24px] w-[190px] items-center font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  Individual Reviews:
                </h2>
              </div>

              {/* 4. Filter Pills Row (723px × 48px, gap: 16px) */}
              <div className="flex min-h-[48px] w-full max-w-[723px] flex-wrap items-center gap-4">
                {/* All Rating Pill */}
                <button
                  type="button"
                  onClick={() => setSelectedRating('All')}
                  className={`flex h-[43px] w-[97px] items-center justify-center rounded-[24px] px-4 py-3 font-['Satoshi'] text-[16px] font-medium leading-[120%] transition-all ${
                    selectedRating === 'All'
                      ? 'bg-[#D4FB20] text-[#242528]'
                      : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8]'
                  }`}
                >
                  All rating
                </button>

                {/* Rating 5-1 Pills */}
                {['5', '4', '3', '2', '1'].map((starNum) => (
                  <button
                    key={starNum}
                    type="button"
                    onClick={() => setSelectedRating(starNum)}
                    className={`flex h-12 items-center justify-center gap-1 rounded-[24px] px-4 py-3 font-['Satoshi'] text-[16px] font-medium leading-[120%] transition-all ${
                      starNum === '1' ? 'min-w-[66px]' : starNum === '4' ? 'min-w-[71px]' : 'min-w-[70px]'
                    } ${
                      selectedRating === starNum
                        ? 'bg-[#D4FB20] text-[#242528]'
                        : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8]'
                    }`}
                  >
                    <Star
                      className={`size-5 fill-current ${
                        selectedRating === starNum ? 'text-[#242528]' : 'text-[#4B4C53]'
                      }`}
                    />
                    <span>{starNum}</span>
                  </button>
                ))}
              </div>

              {/* 5. Individual Review Cards */}
              <div className="flex w-full flex-col items-start gap-6">
                {reviewsList.map((review) => (
                  <div
                    key={review.id}
                    className="box-border flex min-h-[276px] w-full max-w-[723px] flex-col items-start gap-6 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] p-8 sm:p-10 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {/* Header Row: User Info + Stars + Timestamp */}
                    <div className="flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex items-center gap-3">
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={52}
                          height={52}
                          className="size-[52px] rounded-full object-cover border border-[#CED0D3]"
                        />
                        <div className="flex flex-col items-start">
                          <h4 className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                            {review.name}
                          </h4>
                          <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                            {review.role}
                          </span>
                        </div>
                      </div>

                      {/* Stars & Date Stack */}
                      <div className="flex flex-col items-start sm:items-end gap-1">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="size-5 fill-[#4B4C53] text-[#4B4C53]"
                            />
                          ))}
                        </div>
                        <span className="font-['Satoshi'] text-[16px] leading-[150%] text-[#4B4C53]">
                          {review.time}
                        </span>
                      </div>
                    </div>

                    {/* Review Body */}
                    <p className="font-['Satoshi'] text-[16px] font-normal leading-[150%] text-[#4B4C53]">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================== */}
          {/* RIGHT COLUMN: ENROLLMENT & SYLLABUS CARD (412px)     */}
          {/* ==================================================== */}
          <aside className="w-full lg:w-[412px] shrink-0">
            <div className="box-border flex w-full flex-col items-start gap-6 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] p-8 sm:p-10 shadow-xl">
              {/* Syllabus Header */}
              <div className="flex w-full flex-col items-start gap-6">
                <h3 className="font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  112 Lessons (24 hours)
                </h3>

                {/* Lesson Rows List */}
                <div className="flex w-full flex-col items-start gap-3">
                  {syllabusLessons.map((lesson) => (
                    <div
                      key={lesson.num}
                      className="flex w-full items-start justify-between gap-2 border-b border-[#F5F5F6] pb-2 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528]">
                          {lesson.num}
                        </span>
                        <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528]">
                          {lesson.title}
                        </span>
                      </div>
                      <span className="shrink-0 font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#003BE2]">
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="pt-1 text-left font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53] hover:text-[#003BE2] transition-colors"
                  >
                    99 more videos
                  </button>
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="flex w-full flex-col items-start gap-4 pt-2">
                <p className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div className="flex items-baseline gap-2">
                  <span className="font-['Poppins'] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]">
                    $25
                  </span>
                  <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                    /lifetime
                  </span>
                </div>

                {/* Enroll Now Button */}
                <button
                  type="button"
                  className="flex h-[46px] w-full items-center justify-center rounded-[24px] bg-[#D4FB20] px-6 py-3 transition-all hover:bg-[#c6ec1d] active:scale-95 shadow-sm"
                >
                  <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                    Enroll Now
                  </span>
                </button>
              </div>

              {/* This course include Features */}
              <div className="flex w-full flex-col items-start gap-3 pt-2">
                <h3 className="font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  This course include
                </h3>

                <div className="flex flex-col items-start gap-3 text-[#4B4C53]">
                  <div className="flex items-center gap-2">
                    <FileText className="size-6 text-[#003BE2]" />
                    <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%]">
                      Learning Resources
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Video className="size-6 text-[#003BE2]" />
                    <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%]">
                      Quality Lesson Videos
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="size-6 text-[#003BE2]" />
                    <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%]">
                      Certificate of Completion
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare className="size-6 text-[#003BE2]" />
                    <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%]">
                      Private Consultation
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider Line */}
              <div className="w-full border-t border-[#D1D1D1] my-1" />

              {/* Creator Profile Section */}
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex items-center gap-3">
                  <Link href="/creator_profile">
                    <Image
                      src="/details/2.webp"
                      alt="PurePearl Studio"
                      width={52}
                      height={52}
                      className="size-[52px] rounded-full object-cover border border-[#CED0D3] hover:opacity-90 transition-opacity"
                    />
                  </Link>
                  <div className="flex flex-col items-start">
                    <h4 className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                      <Link
                        href="/creator_profile"
                        className="hover:text-[#003BE2] transition-colors"
                      >
                        PurePearl Studio
                      </Link>
                    </h4>
                    <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                      Professional Creator
                    </span>
                  </div>
                </div>

                <p className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <button
                  type="button"
                  className="flex h-[35px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-2 transition-colors hover:bg-[#F5F5F6]"
                >
                  <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#4B4C53]">
                    See Full Profile
                  </span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 3. GLOBAL FOOTER                                         */}
      {/* ======================================================== */}
      <Footer />
    </div>
  );
}

