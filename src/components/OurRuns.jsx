
import easyRunsImage from '../assets/easy-runs.jpg'
import tempoRunsImage from '../assets/tempo-runs.jpg'
import longRunsImage from '../assets/long-runs.jpg'
import communityRunsImage from '../assets/community-runs.jpg'

function OurRuns() {
  const runs = [
    {
      number: '01',
      label: 'CONVERSATION PACE',
      title: 'EASY RUNS',
      description: 'Easy miles. Good company. A pressure-free place to start.',
      details: 'ALL LEVELS · 3–5 KM',
      image: easyRunsImage,
      alt: 'Runners enjoying an easy group run',
    },
    {
      number: '02',
      label: 'FIND YOUR EDGE',
      title: 'TEMPO RUNS',
      description: 'A little more effort. A lot of support. Build speed, together.',
      details: 'STEADY EFFORT · 5–8 KM',
      image: tempoRunsImage,
      alt: 'Runners training together',
    },
    {
      number: '03',
      label: 'GO THE DISTANCE',
      title: 'LONG RUNS',
      description: 'Settle in for the longer route. More miles, more connection.',
      details: 'ENDURANCE · 10–20 KM',
      image: longRunsImage,
      alt: 'Runners on a long-distance run',
    },
    {
      number: '04',
      label: 'BETTER TOGETHER',
      title: 'COMMUNITY RUNS',
      description: 'The whole crew, one shared route. Stay for the post-run coffee.',
      details: 'ALL PACES · 5 KM',
      image: communityRunsImage,
      alt: 'A running community enjoying a group run',
    },
  ]

  return (
    <section className="bg-[#F5F5F0] px-6 py-16 sm:px-10 sm:py-20 md:px-[5.6%]">
      <div className="w-full">

        {/* Section heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-[1.01] tracking-tight text-[#0B0B0B] sm:text-xl lg:text-[60px]">
            Find your
            <br />
            <span className="font-accent italic text-[#FF5A1F]">
              rhythm.
            </span>
          </h2>

          <p className="font-display text-lg font-medium text-[#0B0B0B] sm:text-xl lg:mb-2 lg:text-right">
            Different routes. Same good energy.
          </p>
        </div>

        {/* Run cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[112px] lg:grid-cols-4 lg:gap-6">
          {runs.map((run) => (
            <article key={run.number} className="min-w-0">

              {/* Card image */}
              <div className="overflow-hidden">
                <img
                  src={run.image}
                  alt={run.alt}
                  className="aspect-[320/340] w-full object-cover transition-transform duration-[350ms] ease-out hover:scale-[1.04]"
                />
              </div>

              {/* Card information */}

              <h3 className="mt-5 font-display text-xl font-bold uppercase text-[#0B0B0B]">
                {run.title}
              </h3>

              <p className="mt-4 min-h-[54px] font-display text-base leading-[1.4] text-[#0B0B0B]">
                {run.description}
              </p>

              <p className="mt-5 font-body text-xs font-semibold tracking-wide text-[#0B0B0B]">
                {run.details} <span className="text-[#FF5A1F]">↗</span>
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default OurRuns
