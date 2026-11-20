import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutImage from '../assets/shared miles.jpg'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)

useEffect(() => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion) return

  const ctx = gsap.context(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })

    // Heading entrance
    timeline.from('[data-about-heading]', {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
    })

    // Image entrance
    timeline.from('[data-about-image]', {
      y: 45,
      autoAlpha: 0,
      scale: 0.97,
      duration: 1.1,
      ease: 'power3.out',
    }, '-=0.5')

    // Text entrance
    timeline.from('[data-about-content]', {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.7')

  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (

  <section
  ref={sectionRef}
  className="bg-[#F5F5F0] px-6 py-16 sm:px-10 sm:py-20 md:px-[5.6%]">

      <div className="ml-0 w-full">

        {/* Section heading */}
        <h2 
          data-about-heading
          className="font-display text-3xl font-extrabold leading-[1.01] tracking-tight text-[#0B0B0B] sm:text-xl lg:text-[60px]">
          A SHARED <span className="font-accent italic text-[#FF5A1F]">ROUTE.</span>
          <br />
          A FRESH PERSPECTIVE.
        </h2>

        {/* Image and text */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[1.76fr_1fr] lg:gap-[60px]">

          {/* About image */}
          <div 
              data-about-image
              className="overflow-hidden">
            <img
              src={aboutImage}
              alt="A group of runners sharing the road"
              className="h-full min-h-[280px] w-full object-cover lg:aspect-[820/450]"
            />
          </div>

          {/* About content */}
          <div 
              data-about-content
              className="flex flex-col items-start justify-center">
            <h3 className="font-display text-2xl font-extrabold leading-[1.05] tracking-tight text-[#0B0B0B] sm:text-4xl">
              We show up for the miles.
              <br />
              We stay for the people.
            </h3>

            <p className="mt-7 font-display text-lg font-medium leading-[1.4] text-[#0B0B0B] sm:text-xl lg:text-[20px]">
              STRIDE brings people together through movement. From your first
              easy mile to your next personal best, we make room for every
              pace, every story and every version of you.
            </p>

            <a
              href="#membership"
              className="mt-10 inline-flex min-h-[50px] items-center justify-center rounded-[5px] bg-[#FF5A1F] px-7 font-body text-sm font-medium uppercase tracking-wide text-[#F5F5F0] transition-colors duration-300 hover:bg-[#c8f135]"
            >
              Meet your next run crew
            </a>
          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-16 h-px w-full bg-[#D5D5CA] lg:mt-[68px]" />

      </div>
    </section>
  )
}

export default About
