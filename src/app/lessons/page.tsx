'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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

export default function CourseLessonsPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const modulesList = [
    {
      num: 'Module 1',
      title: 'Module 1: Introduction to Digital Assets',
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      num: 'Module 2',
      title: 'Module 2: Design Principles for Impact',
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      num: 'Module 4',
      title: 'Module 4: User-Centric Design Strategies',
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      num: 'Module 5',
      title: 'Module 5: Interactive Media and Engagement',
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      num: 'Module 6',
      title: 'Module 6: Project Showcase and Critique',
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      num: 'Module 7',
      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
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
          {/* LEFT COLUMN: VIDEO PLAYER + COURSE LESSONS CONTENT   */}
          {/* ==================================================== */}
          <div className="flex w-full flex-col items-start gap-10 lg:w-[725px]">
            {/* Video Preview Card (720px × 479px in Figma) */}
            <div className="relative h-[320px] sm:h-[420px] lg:h-[479px] w-full overflow-hidden rounded-[24px] border border-[#CED0D3]/30 bg-[#443131] shadow-2xl">
              <img
                src="/details/1.webp"
                alt="Course Video Preview"
                className="h-full w-full object-cover"
              />

              {/* Video Overlay with Center Glassmorphic Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
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

              <button
                type="button"
                className="flex h-[43px] w-[82px] items-center justify-center rounded-[24px] bg-[#D4FB20] font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528] transition-all"
              >
                Lesson
              </button>

              <Link
                href="/reviews"
                className="flex h-[43px] w-[90px] items-center justify-center rounded-[24px] bg-[#F5F5F6] font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#4B4C53] transition-all hover:bg-[#E5E6E8]"
              >
                Reviews
              </Link>
            </div>

            {/* Main Lessons Content Column (width: 723px, gap: 24px) */}
            <div className="flex w-full flex-col items-start gap-6 lg:w-[723px]">
              {/* 1. Explore the Modules Section */}
              <div className="flex flex-col items-start gap-2">
                <h2 className="flex h-[24px] w-[199px] items-center font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  Explore the Modules
                </h2>
                <p className="w-full max-w-[723px] font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  Immerse yourself in the course content as we break down each module into comprehensive
                  lessons, providing practical insights and hands-on experiences.
                </p>
              </div>

              {/* 2. Lesson List Header */}
              <div className="pt-2">
                <h2 className="flex h-[24px] w-[106px] items-center font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  Lesson List
                </h2>
              </div>

              {/* 3. Modules List (Modules 1, 2, 4, 5, 6, 7) */}
              <div className="flex w-full flex-col items-start gap-4">
                {modulesList.map((module) => (
                  <div
                    key={module.num}
                    className="flex min-h-[75px] w-full max-w-[723px] flex-row items-center gap-[13px] rounded-[16px] p-2 transition-colors hover:bg-black/[0.02]"
                  >
                    {/* Icon Box: 72px × 72px #D4FB20 */}
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[24px] bg-[#D4FB20] p-4 shadow-sm">
                      <Video className="size-8 text-[#242528]" />
                    </div>

                    {/* Module Title & Description Stack */}
                    <div className="flex min-h-[75px] w-full max-w-[638px] flex-col items-start gap-1">
                      <h3 className="flex items-center font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528]">
                        {module.title}
                      </h3>
                      <p className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4. Lesson Content Section */}
              <div className="flex flex-col items-start gap-2 pt-4">
                <h2 className="flex h-[24px] w-[154px] items-center font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  Lesson Content
                </h2>
                <p className="w-full max-w-[723px] font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  Engage with each lesson through captivating video content, detailed textual
                  explanations, and interactive elements. Download resources, complete assignments, and test
                  your understanding with quizzes.
                </p>
              </div>

              {/* 5. Lesson Progress Tracking Section */}
              <div className="flex flex-col items-start gap-2 pt-4">
                <h2 className="flex h-[24px] min-w-[252px] items-center whitespace-nowrap font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  Lesson Progress Tracking
                </h2>
                <p className="w-full max-w-[723px] font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  Witness your growth as you complete lessons, with an intuitive progress tracking
                  feature guiding you through your learning journey.
                </p>
              </div>

              {/* 6. Learning Progress Card (723px × 116px, 55%) */}
              <div className="box-border flex min-h-[116px] w-full max-w-[723px] flex-col items-start gap-2 rounded-[16px] border border-[#CED0D3] bg-white p-4 shadow-sm backdrop-blur-[10px]">
                <span className="flex h-[17px] w-[115px] items-center font-['Satoshi'] text-[14px] font-medium leading-[120%] text-[#242528]">
                  Learning Progress
                </span>

                <span className="flex h-[43px] w-[72px] items-center font-['Poppins'] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
                  55%
                </span>

                {/* Progress Bar Track */}
                <div className="relative h-2 w-full max-w-[691px] overflow-hidden rounded-[24px] bg-[#E5E6E8]">
                  <div className="h-2 w-[55%] rounded-[24px] bg-[#D4FB20]" />
                </div>
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
                    <img
                      src="/details/2.webp"
                      alt="PurePearl Studio"
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

