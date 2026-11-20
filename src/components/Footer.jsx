
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 85%',
          once: true,
        },
      })

      // Brand reveal
      timeline.from('[data-footer-brand]', {
        y: 35,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
      })

      // Navigation and contact columns reveal
      timeline.from(
        '[data-footer-column]',
        {
          y: 30,
          autoAlpha: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        },
        '-=0.5'
      )

      // Copyright and legal links reveal
      timeline.from(
        '[data-footer-bottom]',
        {
          y: 15,
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power2.out',
        },
        '-=0.3'
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      className="bg-[#FF5A1F] px-6 pb-8 pt-16 sm:px-10 lg:px-[5.6%] lg:pb-[40px] lg:pt-[70px]"
    >
      <div className="w-full">

        {/* Top divider */}
        <div className="h-px w-full bg-[#0B0B0B]/30" />

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:flex lg:justify-between lg:pb-[70px] lg:pt-[70px]">

          {/* Brand column */}
          <div data-footer-brand className="lg:w-[410px]">
            <a
              href="#home"
              className="font-display text-6xl font-extrabold tracking-[-2px] text-[#0B0B0B]"
            >
              STRIDE
            </a>

            <h2 className="mt-8 font-display text-[24px] font-extrabold leading-[1.01] tracking-tight text-[#0B0B0B]">
              Find your pace.
              <br />
              Find your people.
            </h2>

            <p className="mt-5 max-w-[410px] font-display text-md font-medium leading-[1.45] text-[#0B0B0B]/70">
              A running community for every pace,
              every level and every journey.
            </p>
          </div>

          {/* Explore links */}
          <div data-footer-column className="lg:w-[250px]">
            <p className="font-body text-xs font-semibold tracking-wide text-[#0B0B0B]/60">
              EXPLORE
            </p>

            <ul className="mt-5 space-y-[17px] font-display text-sm font-medium text-[#0B0B0B]">
              <li>
                <a href="#about" className="inline-block transition-all duration-300 hover:translate-x-1 hover:opacity-60">
                  About us
                </a>
              </li>
              <li>
                <a href="#our-runs" className="inline-block transition-all duration-300 hover:translate-x-1 hover:opacity-60">
                  Our runs
                </a>
              </li>
              <li>
                <a href="#membership" className="inline-block transition-all duration-300 hover:translate-x-1 hover:opacity-60">
                  Membership
                </a>
              </li>
              <li>
                <a href="#events" className="inline-block transition-all duration-300 hover:translate-x-1 hover:opacity-60">
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div data-footer-column className="lg:w-[250px]">
            <p className="font-body text-xs font-semibold tracking-wide text-[#0B0B0B]/60">
              FOLLOW ALONG
            </p>

            <ul className="mt-5 space-y-[17px] font-display text-sm font-medium text-[#0B0B0B]">
              <li>Instagram</li>
              <li>Strava</li>
              <li>TikTok</li>
            </ul>
          </div>

          {/* Contact details */}
          <div data-footer-column className="lg:w-[250px]">
            <p className="font-body text-xs font-semibold tracking-wide text-[#0B0B0B]/60">
              SAY HELLO
            </p>

            <div className="mt-5 space-y-[17px] font-display text-sm font-medium text-[#0B0B0B]">
              <p>
                <a
                  href="mailto:hello@stride.run"
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:opacity-60"
                >
                  hello@stride.run
                </a>
              </p>
              <p>London, UK</p>
              <p>Every pace welcome.</p>
            </div>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-[#0B0B0B]/30" />

        {/* Copyright and legal links */}
        <div
          data-footer-bottom
          className="flex flex-col gap-4 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-body text-[11px] font-medium tracking-wide text-[#0B0B0B]/70">
            © 2026 STRIDE RUN CLUB
          </p>

          <div className="flex gap-8 font-body text-[11px] font-medium tracking-wide text-[#0B0B0B]/70">
            <a href="#privacy" className="transition-opacity hover:opacity-60">
              PRIVACY
            </a>
            <a href="#terms" className="transition-opacity hover:opacity-60">
              TERMS
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer

