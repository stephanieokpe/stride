
import crewImage from '../assets/community-crew.jpg'
import connectionImage from '../assets/community-connection.jpg'
import strideImage from '../assets/community-stride.jpg'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Community() {
  const sectionRef = useRef(null)

useEffect(() => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  if (prefersReducedMotion) return

  const ctx = gsap.context(() => {

    // Section heading
    gsap.from('[data-community-heading]', {
      y: 40,
      autoAlpha: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
        once: true,
      },
    })

    // Community images
    gsap.from('[data-community-image]', {
      y: 50,
      autoAlpha: 0,
      scale: 0.96,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 65%',
        once: true,
      },
    })

    // Supporting text
    gsap.from('[data-community-content]', {
      y: 30,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 55%',
        once: true,
      },
    })

  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <section 
    ref={sectionRef}
     className="bg-[#C8F135] px-6 py-16 sm:px-10 sm:py-20 md:px-[5.6%]">

      <div className="w-full">

        {/* Heading and supporting text */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <h2 data-community-heading className="font-display text-3xl font-extrabold uppercase leading-[1.01] tracking-tight text-[#0B0B0B] sm:text-xl lg:text-[60px]">
            Different paces.
            <br />
            One <span className="font-accent italic">community.</span>
          </h2>

          <p className="max-w-[370px] font-display text-lg font-medium leading-[1.4] text-[#0B0B0B] sm:text-xl lg:mt-5 lg:text-2xl lg:text-right">
            First-timers. Fast finishers.
            <br />
            And everyone in between.
          </p>

        </div>

        
{/* Image layout */}
<div data-community-image className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-0 lg:grid-cols-[1.614fr_1fr] lg:gap-6 lg:items-start">

  {/* Left column: main image and statement */}
  <div className="lg:mt-[60px]">
    <div className="overflow-hidden">
      <img
        src={crewImage}
        alt="The STRIDE running community together"
        className="block aspect-[820/500] w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Statement directly below main image */}
    <div data-community-content className="mt-8 max-w-[820px]">
      <h3 className="font-display text-xl font-extrabold uppercase leading-[1.01] tracking-tight text-[#0B0B0B] sm:text-xl">
        No one runs alone.
      </h3>

      <p className="mt-4 font-display text-sm font-medium leading-[1.4] text-[#0B0B0B] sm:text-sm lg:text-[22px]">
        The best part is the conversations between kilometres, the
        post-run coffee and the friends who become your reason to
        lace up.
      </p>
    </div>
  </div>

  {/* Right column: two smaller images */}
  <div className="flex flex-col gap-5 sm:gap-6">
    <div className="overflow-hidden">
      <img
        src={connectionImage}
        alt="Runners connecting after a group run"
        className="block aspect-[508/330] w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div className="overflow-hidden">
      <img
        src={strideImage}
        alt="Runners moving together"
        className="block aspect-[508/350] w-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  </div>

</div>

      </div>
    </section>
  )
}

export default Community
