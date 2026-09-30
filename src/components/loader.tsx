'use client'

import React, { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function GlobalLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)

  // Initial page load listener: wait until full window load and DOM ready
  useEffect(() => {
    const handleComplete = () => {
      const timer = setTimeout(() => {
        setLoading(false)
        const hideTimer = setTimeout(() => setVisible(false), 450)
        return () => clearTimeout(hideTimer)
      }, 550)
      return () => clearTimeout(timer)
    }

    if (document.readyState === 'complete') {
      handleComplete()
    } else {
      window.addEventListener('load', handleComplete)
      return () => window.removeEventListener('load', handleComplete)
    }
  }, [])

  // Route change listener
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      const hideTimer = setTimeout(() => setVisible(false), 400)
      return () => clearTimeout(hideTimer)
    }, 450)

    return () => clearTimeout(timer)
  }, [pathname, searchParams])

  // Intercept all internal link clicks to trigger loader smoothly prior to route switch
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      // Ignore hash links, external links, downloads, new tabs
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.target === '_blank' ||
        target.hasAttribute('download')
      ) {
        return
      }

      // Check if it's an internal route that differs from current URL
      try {
        const url = new URL(href, window.location.href)
        if (
          url.origin === window.location.origin &&
          (url.pathname !== window.location.pathname ||
            url.search !== window.location.search)
        ) {
          setVisible(true)
          setLoading(true)
        }
      } catch {
        // invalid URL, ignore
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#073ee5] transition-all duration-400 ease-in-out ${
        loading ? 'opacity-100' : 'pointer-events-none opacity-0 scale-[1.02]'
      }`}
      style={{
        backgroundColor: '#073ee5',
      }}
    >
      {/* Subtle blueprint grid overlay matching brand */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Brand Icon with glowing ring & clean pulse */}
        <div className="relative flex items-center justify-center">
          {/* Subtle spinning outer ring */}
          <div className="absolute size-20 animate-spin rounded-full border-2 border-transparent border-t-[#D4FB20] border-r-[#D4FB20]/30 [animation-duration:1.4s]" />

          {/* Pulse backdrop circle */}
          <div className="size-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg shadow-black/10">
            <img
              src="/logo.png"
              alt="ByteSpace"
              className="h-9 w-auto object-contain transition-transform duration-300 animate-pulse"
            />
          </div>
        </div>

        {/* Minimal progress bar */}
        <div className="h-1 w-28 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-full origin-left animate-[loader-progress_1.2s_ease-in-out_infinite] rounded-full bg-[#D4FB20]" />
        </div>
      </div>
    </div>
  )
}

export default GlobalLoader
