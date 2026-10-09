'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  SlidersHorizontal,
  BarChart3,
  LayoutGrid,
  ArrowUpDown,
  Star,
} from 'lucide-react'
import { Navbar } from '@/src/components/navbar'
import { Footer } from '@/src/components/footer'

interface CourseCard {
  id: number
  title: string
  author: string
  lessons: string
  duration: string
  comments: string
  level: string
  rating: string
  price: string
  image: string
}

const creatorCourses: CourseCard[] = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/1.webp',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/2.webp',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/3.webp',
  },
  {
    id: 4,
    title: 'Balancing Productivity and Self-Care',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/4.webp',
  },
  {
    id: 5,
    title: 'Mastering Money Management',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/5.webp',
  },
  {
    id: 6,
    title: 'From Idea to Startup Success',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/6.webp',
  },
]

const BLUEPRINT_GRID_STYLE: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255, 255, 255, 0.9) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 255, 255, 0.9) 2px, transparent 2px)',
  backgroundSize: '120px 120px',
}

export default function CreatorProfilePage() {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528]">
      {/* ======================================================== */}
      {/* 1. HERO BANNER (Height: 592px in Figma, Persian Blue)     */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden bg-[#003BE2] pb-12 sm:pb-16 lg:h-[592px] lg:pb-0">
        {/* Blueprint Grid Lines Background (120px increments, 0.12 opacity) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-12"
          style={BLUEPRINT_GRID_STYLE}
        />

        {/* Global Navbar */}
        <Navbar />

        {/* Hero Top Content Area (width: 1198px, height: 338px, top: 172px) */}
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pt-[130px] sm:px-6 lg:pt-[172px]">
          <div className="flex flex-col items-start gap-10">
            {/* Creator Info & Description Block */}
            <div className="flex flex-col items-start gap-6 lg:gap-10">
              {/* Creator Head Row: Avatar + Title Stack */}
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                {/* 96px × 96px Avatar */}
                <Image
                  src="/details/2.webp"
                  alt="PurePearl Studio"
                  width={96}
                  height={96}
                  className="size-24 rounded-[24px] object-cover border-2 border-white/20 shadow-md"
                />

                <div className="flex flex-col items-start gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="font-['Poppins'] font-semibold text-[36px] leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
                      PurePearl Studio
                    </h1>

                    {/* Creator Badge (103px × 35px) */}
                    <div className="flex h-[35px] items-center justify-center rounded-[24px] bg-[#D4FB20] px-6 py-2 shadow-sm">
                      <span className="font-['Satoshi'] text-[16px] font-medium leading-[120%] text-[#242528]">
                        Creator
                      </span>
                    </div>
                  </div>

                  <p className="font-['Satoshi'] font-normal text-[18px] leading-[160%] text-[#F5F5F6]">
                    Passionate UI/UX, Web designer
                  </p>
                </div>
              </div>

              {/* Bio Description (1197px in Figma) */}
              <p className="max-w-[1197px] font-['Satoshi'] font-normal text-[18px] leading-[160%] text-[#F5F5F6]">
                Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion,
                expertise, and inspiration that drive my creative journey. Let&apos;s explore and learn together!
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital
                designs to multimedia projects, each piece tells a unique story. Explore the world of creativity
                with me.
              </p>
            </div>

            {/* Stats & Follow Button Row (width: 1198px, height: 46px) */}
            <div className="flex w-full flex-wrap items-center justify-between gap-4">
              {/* Left Stats Row: Products & Followers */}
              <div className="flex items-center gap-4">
                {/* 3 Products Pill */}
                <div className="flex h-[46px] w-[140px] items-center justify-center gap-2 rounded-[24px] bg-white px-6 py-3 shadow-sm">
                  <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#003BE2]">
                    3
                  </span>
                  <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                    Products
                  </span>
                </div>

                {/* 12 Followers Pill */}
                <div className="flex h-[46px] w-[150px] items-center justify-center gap-2 rounded-[24px] bg-white px-6 py-3 shadow-sm">
                  <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#003BE2]">
                    12
                  </span>
                  <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                    Followers
                  </span>
                </div>
              </div>

              {/* Right Follow CTA Button */}
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className={`flex h-[46px] min-w-[101px] items-center justify-center gap-2 rounded-[24px] px-6 py-3 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isFollowing ? 'bg-white' : 'bg-[#D4FB20]'
                }`}
              >
                <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#040819]">
                  {isFollowing ? 'Following' : 'Follow'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. COURSE CATALOG SECTION (Filter Bar & 6 Cards)         */}
      {/* ======================================================== */}
      <section className="mx-auto w-full max-w-[1201px] px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col items-start gap-10">
          {/* Top Filter Bar (1201px × 48px) */}
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            {/* Left Filter Pill Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Filter */}
              <button
                type="button"
                onClick={() => setActiveFilter(activeFilter === 'filter' ? null : 'filter')}
                className={`flex h-[48px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:border-[#242528] ${
                  activeFilter === 'filter' ? 'border-[#003BE2] bg-[#F5F5F6]' : ''
                }`}
                style={{ width: '96px' }}
              >
                <SlidersHorizontal className="size-5 text-[#242528]" />
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '120%',
                    color: '#4B4C53',
                  }}
                >
                  Filter
                </span>
              </button>

              {/* Level */}
              <button
                type="button"
                onClick={() => setActiveFilter(activeFilter === 'level' ? null : 'level')}
                className={`flex h-[48px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:border-[#242528] ${
                  activeFilter === 'level' ? 'border-[#003BE2] bg-[#F5F5F6]' : ''
                }`}
                style={{ width: '97px' }}
              >
                <BarChart3 className="size-5 text-[#242528]" />
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '120%',
                    color: '#4B4C53',
                  }}
                >
                  Level
                </span>
              </button>

              {/* Category */}
              <button
                type="button"
                onClick={() => setActiveFilter(activeFilter === 'category' ? null : 'category')}
                className={`flex h-[48px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:border-[#242528] ${
                  activeFilter === 'category' ? 'border-[#003BE2] bg-[#F5F5F6]' : ''
                }`}
                style={{ width: '127px' }}
              >
                <LayoutGrid className="size-5 text-[#242528]" />
                <span
                  style={{
                    fontFamily: "'Satoshi', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '120%',
                    color: '#4B4C53',
                  }}
                >
                  Category
                </span>
              </button>
            </div>

            {/* Right Sort Pill Button */}
            <button
              type="button"
              className="flex h-[48px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:border-[#242528]"
              style={{ width: '157px' }}
            >
              <ArrowUpDown className="size-5 text-[#242528]" />
              <span
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '120%',
                  color: '#4B4C53',
                }}
              >
                Most relevant
              </span>
            </button>
          </div>

          {/* Courses Grid (Frame 8: 1199px × 808px, 6 cards) */}
          <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {creatorCourses.map((course) => (
              <Link
                href="/details"
                key={course.id}
                className="group box-border flex h-[384px] w-full max-w-[373px] flex-col justify-between rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
              >
                {/* Thumbnail Frame (341px × 195.14px) */}
                <div className="relative h-[195.14px] w-full overflow-hidden rounded-[12px] bg-[#443131]">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 341px"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Floating Meta Pills */}
                  <div className="absolute bottom-[14px] left-[13px] flex items-center gap-3">
                    <span
                      className="flex h-[26px] w-[81px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {course.lessons}
                    </span>
                    <span
                      className="flex h-[26px] w-[109px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {course.duration}
                    </span>
                    <span
                      className="flex h-[26px] w-[101px] items-center justify-center rounded-[24px] bg-[rgba(246,246,246,0.6)] px-3 text-[12px] font-medium leading-[120%] text-[#4F4F4F] backdrop-blur-[4px]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {course.comments}
                    </span>
                  </div>
                </div>

                {/* Course Info Body */}
                <div className="relative mt-4 flex flex-1 flex-col justify-between">
                  {/* Title & Author */}
                  <div className="pr-14">
                    <h2
                      className="truncate font-semibold text-[#000000]"
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '20px',
                        lineHeight: '120%',
                        letterSpacing: '-0.01em',
                      }}
                      title={course.title}
                    >
                      {course.title}
                    </h2>
                    <p
                      className="mt-1 text-[12px] leading-[160%] text-[#4F4F4F]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      by {course.author}
                    </p>
                  </div>

                  {/* Rating (Top Right) */}
                  <div className="absolute right-0 top-0 flex items-center gap-1">
                    <span
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '160%',
                        color: '#4F4F4F',
                      }}
                    >
                      {course.rating}
                    </span>
                    <Star className="size-5 fill-[#D4FB20] text-[#D4FB20]" />
                  </div>

                  {/* Level Badge & Students Overlap */}
                  <div className="mt-3 flex items-center justify-between">
                    {/* Beginner Badge */}
                    <div className="flex h-[32px] w-[97px] items-center justify-center gap-1 rounded-[24px] bg-[#F5F5F6] px-3">
                      <BarChart3 className="size-4 text-[#4B4C53]" />
                      <span
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '120%',
                          color: '#4B4C53',
                        }}
                      >
                        {course.level}
                      </span>
                    </div>

                    {/* 4 Overlapping Avatars + 26+ Badge */}
                    <div className="flex items-center -space-x-2">
                      {[1, 2, 3, 4].map((avatar) => (
                        <Image
                          key={avatar}
                          src={`/courses/dp/${avatar}.webp`}
                          alt=""
                          width={32}
                          height={32}
                          className="size-8 rounded-full border-2 border-[#FFFFFF] object-cover"
                        />
                      ))}
                      <div
                        className="flex size-8 items-center justify-center rounded-full border-2 border-[#FFFFFF] bg-[#D4FB20]"
                        style={{
                          fontFamily: "'Satoshi', sans-serif",
                          fontWeight: 500,
                          fontSize: '12px',
                          lineHeight: '20px',
                          color: '#242528',
                        }}
                      >
                        26+
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-baseline">
                    <span
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '120%',
                        letterSpacing: '-0.01em',
                        color: '#003BE2',
                      }}
                    >
                      {course.price}
                    </span>
                    <span
                      className="ml-1 text-[12px] leading-[160%] text-[#4F4F4F]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      /lifetime
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. GLOBAL FOOTER                                         */}
      {/* ======================================================== */}
      <Footer />
    </div>
  )
}

