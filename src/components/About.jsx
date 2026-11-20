import aboutImage from '../assets/shared miles.jpg'

function About() {
  return (

    <section className="bg-[#F5F5F0] px-6 py-16 sm:px-10 sm:py-20 md:px-[5.6%]">

      <div className="ml-0 w-full">

        {/* Section heading */}
        <h2 className="font-display text-3xl font-extrabold leading-[1.01] tracking-tight text-[#0B0B0B] sm:text-xl lg:text-[60px]">
          A SHARED <span className="font-accent italic text-[#FF5A1F]">ROUTE.</span>
          <br />
          A FRESH PERSPECTIVE.
        </h2>

        {/* Image and text */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[1.76fr_1fr] lg:gap-[60px]">

          {/* About image */}
          <div className="overflow-hidden">
            <img
              src={aboutImage}
              alt="A group of runners sharing the road"
              className="h-full min-h-[280px] w-full object-cover lg:aspect-[820/450]"
            />
          </div>

          {/* About content */}
          <div className="flex flex-col items-start justify-center">
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
