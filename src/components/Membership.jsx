import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Membership() {
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

    timeline.from('[data-membership-heading]', {
      y: 50,
      autoAlpha: 0,
      duration: 1,
      ease: 'power3.out',
    })

    timeline.from(
      '[data-membership-intro]',
      {
        y: 35,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
      },
      '-=0.4'
    )

    timeline.from(
      '[data-membership-option]',
      {
        y: 45,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
      },
      '-=0.4'
    )
  }, sectionRef)

  return () => ctx.revert()
}, [])

  return (
    <section 
        ref={sectionRef}
        className="bg-[#FF5A1F] px-6 py-20 sm:px-10 lg:px-[5.6%] lg:pb-[87px] lg:pt-[126px]">
      <div className="w-full">

        {/* Section heading */}
        <h2  
        data-membership-heading
         className="max-w-[1100px] font-display text-5xl font-extrabold uppercase leading-[1.01] tracking-tight text-[#0B0B0B] sm:text-6xl lg:text-[80px]">
          There’s a place
          <br />
          for you here.
        </h2>

        {/* Membership content */}
        <div className="mt-16 grid grid-cols-1 gap-14 lg:mt-[120px] lg:grid-cols-[390px_420px_420px] lg:justify-between lg:gap-0">

          {/* Intro column */}
          <div data-membership-intro>
            <p className="max-w-[390px] font-display text-lg font-medium leading-[1.4] text-[#0B0B0B] sm:text-xl lg:pt-1 lg:text-[23px]">
              You don’t need to be a certain kind of runner. Just bring
              yourself. We’ll bring the encouragement, the routes and the
              good company.
            </p>

            <h3 className="mt-12 font-display text-3xl font-extrabold uppercase leading-[1.01] tracking-tight text-[#0B0B0B] lg:mt-[84px] lg:text-[36px]">
              Your pace.
              <br />
              Your people.
              <br />
              Your place.
            </h3>
          </div>

          {/* Drop In option */}
          <div data-membership-option className="lg:translate-x-[29px]">
            <div className="border-t border-[#0B0B0B] pt-5">
              <p className="font-body text-xs font-medium text-[#0B0B0B]">
                DROP IN
              </p>

              <h3 className="mt-7 font-display text-3xl font-extrabold leading-[1.01] text-[#0B0B0B] lg:text-[34px]">
                Your first run.
              </h3>

              <p className="mt-4 font-display text-lg font-medium text-[#0B0B0B] lg:text-[19px]">
                Find your feet with the crew.
              </p>

              <ul className="mt-7 space-y-1 font-display text-base font-medium leading-[1.4] text-[#0B0B0B] lg:text-[19px]">
                <li>A welcoming first session</li>
                <li>A run leader to show the way</li>
                <li>Coffee and conversation afterwards</li>
              </ul>

              <a
                href="#events"
                className="mt-10 flex h-[52px] w-full items-center justify-center rounded-[5px] bg-[#C8F135] px-3 font-body text-sm font-medium uppercase text-[#0B0B0B] transition-colors duration-300 hover:bg-[#F5F5F0] active:bg-[#FF5A1F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B0B0B] lg:mt-[42px] lg:text-base hover:-translate-y-1 hover:shadow-lg"
              >
                Try a run
              </a>
            </div>
          </div>

          {/* Club Member option */}
          <div data-membership-option>
            <div className="border-t border-[#0B0B0B] pt-5">
              <p className="font-body text-xs font-medium text-[#0B0B0B]">
                CLUB MEMBER
              </p>

              <h3 className="mt-7 font-display text-3xl font-extrabold leading-[1.01] text-[#0B0B0B] lg:text-[34px]">
                Your regular crew.
              </h3>

              <p className="mt-4 font-display text-lg font-medium text-[#0B0B0B] lg:text-[19px]">
                Make movement part of your week.
              </p>

              <ul className="mt-7 space-y-1 font-display text-base font-medium leading-[1.4] text-[#0B0B0B] lg:text-[19px]">
                <li>Weekly runs for every pace</li>
                <li>Member chat and route sharing</li>
                <li>First access to special events</li>
              </ul>

              <a
                href="#contact"
                className="mt-10 flex h-[52px] w-full items-center justify-center rounded-[5px] bg-[#C8F135] px-3 font-body text-sm font-medium uppercase text-[#0B0B0B] transition-colors duration-300 hover:bg-[#F5F5F0] active:bg-[#FF5A1F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B0B0B] lg:mt-[42px] lg:text-base hover:-translate-y-1 hover:shadow-lg"
              >
                Become a member
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Membership
