'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  BarChart3,
  Star,
  Users,
  Share2,
  Play,
  FileText,
  Video,
  Award,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import { Navbar } from '@/src/components/navbar'
import { Footer } from '@/src/components/footer'

const BLUEPRINT_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)',
  backgroundSize: '120px 120px',
}

const PLAY_BUTTON_STYLE: React.CSSProperties = {
  background: 'rgba(61, 61, 61, 0.24)',
  border: '1px solid #4F4F4F',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
}

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState<'About' | 'Lessons' | 'Reviews'>('About')
  const [isPlaying, setIsPlaying] = useState(false)

  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ]

  const syllabusLessons = [
    { num: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { num: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { num: '03', title: 'Advanced Techniques in Digital Creation', duration: '16 mins' },
  ]

  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528]">
      {/* ======================================================== */}
      {/* 1. HERO HEADER BANNER (Height: 957px, Persian Blue)      */}
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
              <p className="h-[22px] font-['Satoshi'] font-medium text-[18px] leading-[120%] text-[#F1F4FE] flex items-center">
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
          {/* LEFT COLUMN: VIDEO PLAYER + COURSE DETAILS TABS      */}
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
                className="object-cover"
              />

              {/* Video Overlay with Center Glassmorphic Play Button */}
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label="Play course preview"
                className="group absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex size-[104px] items-center justify-center rounded-[24px] p-4 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                style={PLAY_BUTTON_STYLE}
              >
                <Play className="size-12 fill-[#F5F2FF] text-[#F5F2FF] translate-x-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Navigation Tabs (About / Lessons / Reviews) */}
            <div className="flex items-center gap-4 pt-12 sm:pt-16 lg:pt-20">
              <button
                type="button"
                onClick={() => setActiveTab('About')}
                className={`flex h-[43px] w-[76px] items-center justify-center rounded-[24px] transition-all ${
                  activeTab === 'About'
                    ? 'bg-[#D4FB20] text-[#242528]'
                    : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8]'
                }`}
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '120%',
                }}
              >
                About
              </button>

              <Link
                href="/lessons"
                className="flex h-[43px] w-[89px] items-center justify-center rounded-[24px] bg-[#F5F5F6] text-[#4B4C53] transition-all hover:bg-[#E5E6E8]"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '120%',
                }}
              >
                Lessons
              </Link>

              <Link
                href="/reviews"
                className="flex h-[43px] w-[90px] items-center justify-center rounded-[24px] bg-[#F5F5F6] text-[#4B4C53] transition-all hover:bg-[#E5E6E8]"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '120%',
                }}
              >
                Reviews
              </Link>
            </div>

            {/* Detailed Description */}
            <div className="flex flex-col items-start gap-4">
              <h2
                className="font-semibold text-[#242528]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '20px',
                  lineHeight: '120%',
                  letterSpacing: '-0.01em',
                }}
              >
                Description
              </h2>
              <p
                className="text-[#4B4C53]"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '160%',
                }}
              >
                Embark on an enlightening exploration into the world of digital creation with our
                comprehensive course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative
                learning experience invites you to delve deep into the intricacies of crafting impactful digital
                content. From laying the groundwork with foundational concepts to mastering advanced
                techniques, this guide is meticulously curated to empower you with the skills essential for
                navigating the dynamic landscape of digital asset creation. In the initial modules, you&apos;ll
                establish a solid foundation by immersing yourself in the foundational concepts that form
                the backbone of digital asset creation. Understand the fundamental elements that constitute
                compelling digital content and gain proficiency in leveraging these elements to communicate
                effectively in the digital realm. As you progress through the course, you&apos;ll ascend to higher
                levels of expertise, delving into the nuances of design principles that drive impactful creations.
                Uncover the secrets behind effective visual communication, exploring color theory, typography,
                and layout strategies that elevate your digital assets to new heights. Engage in hands-on
                exercises that reinforce your understanding, allowing you to apply these principles in practical
                scenarios.
              </p>
            </div>

            {/* Sneak Peak Section */}
            <div className="flex w-full flex-col items-start gap-4 pt-2">
              <h2
                className="font-semibold text-[#242528]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '20px',
                  lineHeight: '120%',
                  letterSpacing: '-0.01em',
                }}
              >
                Sneak Peak
              </h2>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 w-full">
                {['/details/3.webp', '/details/4.webp', '/details/5.webp', '/details/6.webp'].map(
                  (imgSrc, index) => (
                    <div
                      key={index}
                      className="group relative h-[125px] w-full overflow-hidden rounded-[16px] bg-[#D9D9D9] shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <Image
                        src={imgSrc}
                        alt={`Sneak peak preview ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 50vw, 170px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Key Points Section */}
            <div className="flex flex-col items-start gap-4 pt-4">
              <h2
                className="font-semibold text-[#242528]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '20px',
                  lineHeight: '120%',
                  letterSpacing: '-0.01em',
                }}
              >
                Key Points
              </h2>

              <div className="flex flex-col items-start gap-3">
                {keyPoints.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="size-6 shrink-0 fill-[#003BE2] text-white" />
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '160%',
                        color: '#4B4C53',
                      }}
                    >
                      {point}
                    </span>
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
                <h3
                  className="font-semibold text-[#242528]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '20px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                  }}
                >
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
                        <span
                          className="font-medium text-[#242528]"
                          style={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: '16px',
                            lineHeight: '120%',
                          }}
                        >
                          {lesson.num}
                        </span>
                        <span
                          className="font-medium text-[#242528]"
                          style={{
                            fontFamily: "'Satoshi', sans-serif",
                            fontSize: '16px',
                            lineHeight: '120%',
                          }}
                        >
                          {lesson.title}
                        </span>
                      </div>
                      <span
                        className="shrink-0 text-[#003BE2]"
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '160%',
                        }}
                      >
                        {lesson.duration}
                      </span>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="pt-1 text-left text-[#4B4C53] hover:text-[#003BE2] transition-colors"
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '160%',
                    }}
                  >
                    99 more videos
                  </button>
                </div>
              </div>

              {/* Ready to Dive In & Pricing Stack */}
              <div className="flex w-full flex-col items-start gap-4 pt-2">
                <p
                  className="text-[#4B4C53]"
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                  }}
                >
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-semibold text-[#003BE2]"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '36px',
                      lineHeight: '120%',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    $25
                  </span>
                  <span
                    className="text-[#4B4C53]"
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '160%',
                    }}
                  >
                    /lifetime
                  </span>
                </div>

                {/* Enroll Now Button */}
                <button
                  type="button"
                  className="flex h-[46px] w-full items-center justify-center rounded-[24px] bg-[#D4FB20] px-6 py-3 transition-all hover:bg-[#c6ec1d] active:scale-95 shadow-sm"
                >
                  <span
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '120%',
                      color: '#242528',
                    }}
                  >
                    Enroll Now
                  </span>
                </button>
              </div>

              {/* This course include Features */}
              <div className="flex w-full flex-col items-start gap-3 pt-2">
                <h3
                  className="font-semibold text-[#242528]"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '20px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                  }}
                >
                  This course include
                </h3>

                <div className="flex flex-col items-start gap-3 text-[#4B4C53]">
                  <div className="flex items-center gap-2">
                    <FileText className="size-6 text-[#003BE2]" />
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '160%',
                      }}
                    >
                      Learning Resources
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Video className="size-6 text-[#003BE2]" />
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '160%',
                      }}
                    >
                      Quality Lesson Videos
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="size-6 text-[#003BE2]" />
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '160%',
                      }}
                    >
                      Certificate of Completion
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MessageSquare className="size-6 text-[#003BE2]" />
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '160%',
                      }}
                    >
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
                    <h4
                      className="font-medium text-[#242528]"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: '18px',
                        lineHeight: '120%',
                      }}
                    >
                      <Link
                        href="/creator_profile"
                        className="hover:text-[#003BE2] transition-colors"
                      >
                        PurePearl Studio
                      </Link>
                    </h4>
                    <span
                      className="text-[#4B4C53]"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '160%',
                      }}
                    >
                      Professional Creator
                    </span>
                  </div>
                </div>

                <p
                  className="text-[#4B4C53]"
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                  }}
                >
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <button
                  type="button"
                  className="flex h-[35px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-2 transition-colors hover:bg-[#F5F5F6]"
                >
                  <span
                    style={{
                      fontFamily: "'Satoshi', sans-serif",
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '120%',
                      color: '#4B4C53',
                    }}
                  >
                    See Full Profile
                  </span>
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 3. FOOTER (Exact Figma Spec Component)                   */}
      {/* ======================================================== */}
      <Footer />
    </div>
  )
}

