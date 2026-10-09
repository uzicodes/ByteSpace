'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  BarChart3,
  LayoutGrid,
  ArrowUpDown,
  Star,
} from 'lucide-react'
import { Navbar } from '@/src/components/navbar'
import { Footer } from '@/src/components/footer'

const categoryTabs = [
  { name: 'Featured', width: '96px' },
  { name: 'Music', width: '75px' },
  { name: 'Drawing & Painting', width: '170px' },
  { name: 'Marketing', width: '105px' },
  { name: 'Animation', width: '105px' },
  { name: 'Social Media', width: '124px' },
  { name: 'UI/UX Design', width: '130px' },
  { name: 'Creative Marketing', width: '169px' },
  { name: 'Cooking', width: '94px' },
]

const courseData = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
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
    category: 'Creative Marketing',
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
    category: 'Marketing',
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
    category: 'Featured',
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
    category: 'Featured',
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
    category: 'Featured',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/6.webp',
  },
  {
    id: 7,
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
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
    id: 8,
    title: 'Build Digital Asset',
    category: 'Creative Marketing',
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
    id: 9,
    title: 'the Power of Big Data',
    category: 'Marketing',
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
    id: 10,
    title: 'Balancing Productivity and Self-Care',
    category: 'Featured',
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
    id: 11,
    title: 'Mastering Money Management',
    category: 'Featured',
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
    id: 12,
    title: 'From Idea to Startup Success',
    category: 'Featured',
    author: 'purepearl studio',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    rating: '4.5',
    price: '$25',
    image: '/courses/6.webp',
  },
  {
    id: 13,
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
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
    id: 14,
    title: 'Build Digital Asset',
    category: 'Creative Marketing',
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
    id: 15,
    title: 'the Power of Big Data',
    category: 'Marketing',
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
    id: 16,
    title: 'Balancing Productivity and Self-Care',
    category: 'Featured',
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
    id: 17,
    title: 'Mastering Money Management',
    category: 'Featured',
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
    id: 18,
    title: 'From Idea to Startup Success',
    category: 'Featured',
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

export default function CoursePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter courses by search query
  const filteredCourses = courseData.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSearch
  })

  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] text-[#242528] selection:bg-[#D4FB20] selection:text-[#242528]">
      {/* ======================================================== */}
      {/* 1. HERO FRAME (Height: 360px, Persian Blue #003BE2)      */}
      {/* ======================================================== */}
      <div className="absolute left-0 top-0 h-[360px] w-full overflow-hidden bg-[#003BE2]">
        {/* Blueprint Grid Lines (120px increments, 0.12 opacity) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-12"
          style={BLUEPRINT_GRID_STYLE}
        />

        {/* Navbar */}
        <Navbar />

        {/* Hero Centered Search Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[624px] flex-col items-center justify-end px-4 pb-14 text-center">
          {/* Find Your Next Course */}
          <h1
            className="font-semibold text-[#F5F5F6]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '36px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
            }}
          >
            Find Your Next Course
          </h1>

          {/* Search Box & Courses Button Bar */}
          <div className="mt-8 flex w-full max-w-[624px] items-center gap-4">
            {/* Search Input Pill */}
            <div className="flex h-[52px] flex-1 items-center gap-2 rounded-[24px] bg-[#FFFFFF] px-6 py-3 shadow-md">
              <Search className="size-6 shrink-0 text-[#82868E]" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-[18px] text-[#242528] placeholder:text-[#82868E] outline-none"
                style={{
                  fontFamily: "'Satoshi', sans-serif",
                  fontWeight: 400,
                  lineHeight: '160%',
                }}
              />
            </div>

            {/* Courses Dropdown Button */}
            <button
              type="button"
              className="flex h-[48px] w-[147px] shrink-0 items-center justify-center gap-2 rounded-[24px] bg-[#D4FB20] px-6 py-3 transition-transform hover:scale-[1.02] active:scale-[0.98]"
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
                Courses
              </span>
              <ChevronDown className="size-6 text-[#242528]" />
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. FILTER & SORT BAR (432px offset from top in Figma)     */}
      {/* ======================================================== */}
      <section className="mx-auto w-full max-w-[1201px] px-4 pt-[432px] sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Left: Filter, Level, Category */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Filter */}
            <button
              type="button"
              className="flex h-[48px] w-[96px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:bg-[#F5F5F6]"
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
              className="flex h-[48px] w-[97px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:bg-[#F5F5F6]"
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
              className="flex h-[48px] w-[127px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:bg-[#F5F5F6]"
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

          {/* Right: Most relevant */}
          <button
            type="button"
            className="flex h-[48px] w-[157px] items-center justify-center gap-1 rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] px-4 py-3 transition-colors hover:bg-[#F5F5F6]"
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
      </section>

      {/* ======================================================== */}
      {/* 3. CATEGORY PILLS BAR (Tab_Categories: top: 512px)       */}
      {/* ======================================================== */}
      <section className="absolute top-[512px] left-1/2 -translate-x-1/2 flex h-[43px] w-[1200px] max-w-[calc(100%-32px)] items-center justify-between gap-4 p-0 overflow-x-auto no-scrollbar sm:max-w-none">
        {categoryTabs.map((category) => {
          const isActive = activeCategory === category.name
          return (
            <button
              key={category.name}
              type="button"
              onClick={() => setActiveCategory(category.name)}
              className={`flex h-[43px] shrink-0 items-center justify-center rounded-[24px] px-4 py-3 transition-all ${
                isActive
                  ? 'bg-[#D4FB20] text-[#242528]'
                  : 'bg-[#F5F5F6] text-[#4B4C53] hover:bg-[#E5E6E8]'
              }`}
              style={{
                width: category.width,
                height: '43px',
                fontFamily: "'Satoshi', sans-serif",
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '120%',
              }}
            >
              {category.name}
            </button>
          )
        })}
      </section>

      {/* ======================================================== */}
      {/* 4. COURSES GRID (Frame 8 & Frame 9, top: 632px in Figma) */}
      {/* ======================================================== */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pt-[152px] pb-[192px] sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {filteredCourses.map((course) => (
            <Link
              href="/details"
              key={course.id}
              className="group box-border flex h-[384px] w-full max-w-[373px] flex-col justify-between rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              {/* Thumbnail Frame */}
              <div className="relative h-[195.14px] w-full overflow-hidden rounded-[12px] bg-[#443131]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 341px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
      </section>

      {/* ======================================================== */}
      {/* 5. PAGINATION ROW (Exact Figma: top: 3208px)             */}
      {/* ======================================================== */}
      <section className="absolute top-[3208px] left-1/2 -translate-x-1/2 flex h-[48px] w-[314px] items-center justify-center gap-6 p-0">
        {/* Previous Button */}
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          className="flex h-[48px] w-[56px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] transition-colors hover:bg-[#F5F5F6] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            boxSizing: 'border-box',
            width: '56px',
            height: '48px',
            border: '1px solid #CED0D3',
            borderRadius: '24px',
            background: '#FFFFFF',
          }}
        >
          <ChevronLeft className="size-6 text-[#4B4C53]" />
        </button>

        {/* Page Numbers 1 to 5 */}
        <div className="flex items-center gap-6">
          {[1, 2, 3, 4, 5].map((pageNum) => {
            const isActive = currentPage === pageNum
            return (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                className="transition-colors hover:text-[#003BE2]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  letterSpacing: '-0.01em',
                  color: isActive ? '#CED0D3' : '#242528',
                }}
              >
                {pageNum}
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.min(5, prev + 1))}
          disabled={currentPage === 5}
          aria-label="Next Page"
          className="flex h-[48px] w-[56px] items-center justify-center rounded-[24px] border border-[#CED0D3] bg-[#FFFFFF] transition-colors hover:bg-[#F5F5F6] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            boxSizing: 'border-box',
            width: '56px',
            height: '48px',
            border: '1px solid #CED0D3',
            borderRadius: '24px',
            background: '#FFFFFF',
          }}
        >
          <ChevronRight className="size-6 text-[#242528]" />
        </button>
      </section>

      {/* ======================================================== */}
      {/* 6. FOOTER (Exact Figma Spec Component)                   */}
      {/* ======================================================== */}
      <Footer />
    </div>
  )
}

