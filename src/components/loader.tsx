'use client'

import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function GlobalLoader() {
  const pathname = usePathname()

  // Always initialize as visible and loading on mount / full refresh / SSR
  const [loading, setLoading] = useState(true)
  const [visible, setVisible] = useState(true)
  const isCancelledRef = useRef(false)
  const isInitialMount = useRef(true)

  const checkAllElementsLoaded = (minDuration: number = 1000) => {
    // 1. Wait for web fonts if supported
    const fontsPromise =
      typeof document !== 'undefined' && 'fonts' in document
        ? (document as unknown as { fonts: { ready: Promise<void> } }).fonts.ready.catch(() => {})
        : Promise.resolve()

    // 2. Check all critical images in the DOM
    const imagesPromise = new Promise<void>((resolve) => {
      if (typeof document === 'undefined') return resolve()

      // Give a 60ms tick for Next.js/React to mount the page's DOM elements
      setTimeout(() => {
        const images = Array.from(document.querySelectorAll('img'))
        if (images.length === 0) return resolve()

        let pending = images.length
        const onDone = () => {
          pending--
          if (pending <= 0) resolve()
        }

        images.forEach((img) => {
          if (img.complete && img.naturalHeight !== 0) {
            onDone()
          } else {
            img.addEventListener('load', onDone, { once: true })
            img.addEventListener('error', onDone, { once: true })
          }
        })

        // Safety timeout so slow external assets never hang the screen indefinitely
        setTimeout(resolve, 3000)
      }, 60)
    })

    // 3. Document ready state / window load
    const pageLoadPromise = new Promise<void>((resolve) => {
      if (typeof document === 'undefined' || document.readyState === 'complete') {
        resolve()
      } else {
        window.addEventListener('load', () => resolve(), { once: true })
        setTimeout(resolve, 3000)
      }
    })

    // 4. Guaranteed minimum visual display duration
    const minTimerPromise = new Promise<void>((resolve) =>
      setTimeout(resolve, minDuration)
    )

    Promise.all([
      fontsPromise,
      imagesPromise,
      pageLoadPromise,
      minTimerPromise,
    ]).then(() => {
      if (isCancelledRef.current) return
      setLoading(false)
      setTimeout(() => {
        if (!isCancelledRef.current) {
          setVisible(false)
        }
      }, 450)
    })
  }

  // Handle initial page load / hard refresh
  useEffect(() => {
    isCancelledRef.current = false

    if (isInitialMount.current) {
      isInitialMount.current = false
      checkAllElementsLoaded(1100)
    } else {
      // Trigger on pathname change (route navigation)
      setVisible(true)
      setLoading(true)
      checkAllElementsLoaded(650)
    }

    return () => {
      // When unmounting or route changing, reset cancellation flag
    }
  }, [pathname])

  // Listen for beforeunload / browser refresh so loader starts prior to reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      setVisible(true)
      setLoading(true)
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  // Intercept all internal navigation link clicks to trigger loader immediately
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href) return

      // Ignore hash anchors, external links, downloads, new tab links
      if (
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.target === '_blank' ||
        target.hasAttribute('download')
      ) {
        return
      }

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
        // ignore invalid URL
      }
    }

    document.addEventListener('click', handleAnchorClick, { capture: true })
    return () =>
      document.removeEventListener('click', handleAnchorClick, { capture: true })
  }, [])

  if (!visible) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#073ee5] transition-all duration-500 ease-in-out ${
        loading
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none scale-[1.03]'
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
          <div className="flex size-16 items-center justify-center rounded-full bg-white/10 shadow-lg shadow-black/10 backdrop-blur-md">
            <Image
              src="/logo.png"
              alt="ByteSpace"
              width={36}
              height={36}
              className="h-9 w-auto object-contain animate-pulse transition-transform duration-300"
              priority
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
