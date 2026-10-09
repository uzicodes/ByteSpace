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
          style={{
            backgroundImage:
              'linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)',
            backgroundSize: '120px 120px',
          }}
        />

        {/* Navbar */}
        <Navbar />

        {/* Hero Top Content Area (Title, Subtitle, Author, Meta Badges & Share) */}
        <div className="relative z-10 mx-auto w-full max-w-[1283px] px-4 pt-[140px] sm:px-6 lg:pt-[172px]">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Left Title and Details Stack (Exact Figma Auto Layout: 769px × 185px, gap: 24px) */}
            <div
              className="flex w-full flex-col items-start gap-6 lg:w-[769px] lg:h-[185px] shrink-0"
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '24px',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              {/* Titles Stack (769px × 75px, gap: 8px) */}
              <div
                className="flex w-full flex-col items-start gap-2 lg:w-[769px] lg:h-[75px]"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '8px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <h1
                  className="whitespace-nowrap font-semibold text-[#F5F5F6]"
                  style={{
                    width: '769px',
                    maxWidth: '100%',
                    height: '43px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '36px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                    color: '#F5F5F6',
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  Build Digital Asset: A Comprehensive Guide
                </h1>
                <p
                  className="whitespace-nowrap font-semibold text-[#F5F5F6]"
                  style={{
                    width: '571px',
                    maxWidth: '100%',
                    height: '24px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                    color: '#F5F5F6',
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  Unlock the Power of Digital Creation with Expert Guidance
                </p>
              </div>

              {/* Creator: by purepearl studio (157px × 22px) */}
              <p
                style={{
                  width: '157px',
                  height: '22px',
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '120%',
                  color: '#F1F4FE',
                  display: 'flex',
                  alignItems: 'center',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                by purepearl studio
              </p>

              {/* Meta Badges Row (576px × 40px, gap: 16px, order: 2) */}
              <div
                className="flex flex-wrap items-center gap-4 lg:w-[576px] lg:h-[40px]"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '16px',
                  width: '576px',
                  maxWidth: '100%',
                  height: '40px',
                  flex: 'none',
                  order: 2,
                  flexGrow: 0,
                }}
              >
                {/* Level Badge (171px × 40px) */}
                <div
                  className="shadow-sm"
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px 24px',
                    gap: '8px',
                    width: '171px',
                    height: '40px',
                    background: '#FFFFFF',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  <BarChart3 className="size-6 shrink-0 text-[#003BE2]" />
                  <span
                    style={{
                      width: '91px',
                      height: '19px',
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '120%',
                      color: '#242528',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    Intermediate
                  </span>
                </div>

                {/* Rating Badge (200px × 40px) */}
                <div
                  className="shadow-sm"
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px 24px',
                    gap: '8px',
                    width: '200px',
                    height: '40px',
                    background: '#FFFFFF',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  <Star className="size-6 shrink-0 fill-[#003BE2] text-[#003BE2]" />
                  <span
                    style={{
                      width: '120px',
                      height: '19px',
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '120%',
                      color: '#242528',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
                    4.8 (172 reviews)
                  </span>
                </div>

                {/* Students Badge (173px × 40px) */}
                <div
                  className="shadow-sm"
                  style={{
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px 24px',
                    gap: '8px',
                    width: '173px',
                    height: '40px',
                    background: '#FFFFFF',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    flex: 'none',
                    order: 2,
                    flexGrow: 0,
                  }}
                >
                  <Users className="size-6 shrink-0 text-[#003BE2]" />
                  <span
                    style={{
                      width: '93px',
                      height: '19px',
                      fontFamily: "'Satoshi', sans-serif",
                      fontStyle: 'normal',
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '120%',
                      color: '#242528',
                      display: 'flex',
                      alignItems: 'center',
                      whiteSpace: 'nowrap',
                      flex: 'none',
                      order: 1,
                      flexGrow: 0,
                    }}
                  >
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
              <span
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: '#242528',
                }}
              >
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
                className="group transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '16px',
                  gap: '8px',
                  position: 'absolute',
                  width: '104px',
                  height: '104px',
                  left: 'calc(50% - 104px/2)',
                  top: 'calc(50% - 104px/2)',
                  background: 'rgba(61, 61, 61, 0.24)',
                  border: '1px solid #4F4F4F',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                }}
              >
                <Play className="size-12 fill-[#F5F2FF] text-[#F5F2FF] translate-x-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Navigation Tabs (About / Lesson / Reviews) */}
            <div className="flex items-center gap-4 pt-12 sm:pt-16 lg:pt-20">
              <Link
                href="/details"
                className="flex h-[43px] w-[76px] items-center justify-center rounded-[24px] bg-[#F5F5F6] text-[#4B4C53] transition-all hover:bg-[#E5E6E8]"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '120%',
                }}
              >
                About
              </Link>

              <button
                type="button"
                className="flex h-[43px] w-[82px] items-center justify-center rounded-[24px] bg-[#D4FB20] text-[#242528] transition-all"
                style={{
                  boxSizing: 'border-box',
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '120%',
                }}
              >
                Lesson
              </button>

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

            {/* Main Lessons Content Column (width: 723px, gap: 24px) */}
            <div className="flex w-full flex-col items-start gap-6 lg:w-[723px]">
              {/* 1. Explore the Modules Section */}
              <div className="flex flex-col items-start gap-2">
                <h2
                  className="font-semibold text-[#242528]"
                  style={{
                    width: '199px',
                    height: '24px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '120%',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Explore the Modules
                </h2>
                <p
                  className="text-[#4B4C53]"
                  style={{
                    width: '100%',
                    maxWidth: '723px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                  }}
                >
                  Immerse yourself in the course content as we break down each module into comprehensive
                  lessons, providing practical insights and hands-on experiences.
                </p>
              </div>

              {/* 2. Lesson List Header */}
              <div className="pt-2">
                <h2
                  className="font-semibold text-[#242528]"
                  style={{
                    width: '106px',
                    height: '24px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '120%',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Lesson List
                </h2>
              </div>

              {/* 3. Modules List (Modules 1, 2, 4, 5, 6, 7) */}
              <div className="flex w-full flex-col items-start gap-4">
                {modulesList.map((module) => (
                  <div
                    key={module.num}
                    className="flex w-full flex-row items-center gap-[13px] rounded-[16px] p-2 transition-colors hover:bg-black/[0.02]"
                    style={{
                      width: '100%',
                      maxWidth: '723px',
                      minHeight: '75px',
                    }}
                  >
                    {/* Icon Box: 72px × 72px #D4FB20 */}
                    <div
                      className="shrink-0 shadow-sm"
                      style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16px',
                        gap: '8px',
                        width: '72px',
                        height: '72px',
                        background: '#D4FB20',
                        borderRadius: '24px',
                        flex: 'none',
                        order: 0,
                        flexGrow: 0,
                      }}
                    >
                      <Video className="size-8 text-[#242528]" />
                    </div>

                    {/* Module Title & Description Stack */}
                    <div
                      className="flex flex-col items-start gap-1"
                      style={{
                        width: '100%',
                        maxWidth: '638px',
                        minHeight: '75px',
                      }}
                    >
                      <h3
                        className="font-medium text-[#242528]"
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '120%',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {module.title}
                      </h3>
                      <p
                        className="text-[#4B4C53]"
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontStyle: 'normal',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '160%',
                        }}
                      >
                        {module.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 4. Lesson Content Section */}
              <div className="flex flex-col items-start gap-2 pt-4">
                <h2
                  className="font-semibold text-[#242528]"
                  style={{
                    width: '154px',
                    height: '24px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '120%',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Lesson Content
                </h2>
                <p
                  className="text-[#4B4C53]"
                  style={{
                    width: '100%',
                    maxWidth: '723px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                  }}
                >
                  Engage with each lesson through captivating video content, detailed textual
                  explanations, and interactive elements. Download resources, complete assignments, and test
                  your understanding with quizzes.
                </p>
              </div>

              {/* 5. Lesson Progress Tracking Section */}
              <div className="flex flex-col items-start gap-2 pt-4">
                <h2
                  className="whitespace-nowrap font-semibold text-[#242528]"
                  style={{
                    width: 'auto',
                    minWidth: '252px',
                    height: '24px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '120%',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Lesson Progress Tracking
                </h2>
                <p
                  className="text-[#4B4C53]"
                  style={{
                    width: '100%',
                    maxWidth: '723px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '160%',
                  }}
                >
                  Witness your growth as you complete lessons, with an intuitive progress tracking
                  feature guiding you through your learning journey.
                </p>
              </div>

              {/* 6. Learning Progress Card (723px × 116px, 55%) */}
              <div
                className="w-full shadow-sm"
                style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '16px',
                  gap: '8px',
                  width: '100%',
                  maxWidth: '723px',
                  minHeight: '116px',
                  background: '#FFFFFF',
                  border: '1px solid #CED0D3',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                }}
              >
                <span
                  style={{
                    width: '115px',
                    height: '17px',
                    fontFamily: "'Satoshi', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '120%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#242528',
                  }}
                >
                  Learning Progress
                </span>

                <span
                  style={{
                    width: '72px',
                    height: '43px',
                    fontFamily: "'Poppins', sans-serif",
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '36px',
                    lineHeight: '120%',
                    display: 'flex',
                    alignItems: 'center',
                    letterSpacing: '-0.01em',
                    color: '#242528',
                  }}
                >
                  55%
                </span>

                {/* Progress Bar Track */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    width: '100%',
                    maxWidth: '691px',
                    height: '8px',
                    background: '#E5E6E8',
                    borderRadius: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '55%',
                      height: '8px',
                      background: '#D4FB20',
                      borderRadius: '24px',
                    }}
                  />
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

              {/* Pricing & CTA */}
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

                <div className="flex items-baseline gap-2">
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
                  <img
                    src="/details/2.webp"
                    alt="PurePearl Studio"
                    className="size-[52px] rounded-full object-cover border border-[#CED0D3]"
                  />
                  <div className="flex flex-col items-start">
                    <h4
                      className="font-medium text-[#242528]"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontSize: '18px',
                        lineHeight: '120%',
                      }}
                    >
                      PurePearl Studio
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
      {/* 3. GLOBAL FOOTER                                         */}
      {/* ======================================================== */}
      <Footer />
    </div>
  );
}

