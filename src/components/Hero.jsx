
import heroImage from '../assets/stride-hero.jpg'

function Hero() {
  return (
    <section className="relative min-h-[750px] h-screen overflow-hidden">

      {/* Background image */}
      <img
        src={heroImage}
        alt="Runners"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero content */}
      <div className="absolute bottom-[130px] left-6 right-6 z-10 sm:left-10 md:bottom-[24%] md:left-[5.6%] md:right-auto md:max-w-4xl">

        <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-[96px]">
          Find your pace.
          <br />
          Find your <span className="font-accent italic text-[#FF5A1F]">people.</span>
        </h1>
        <p className="font-display mt-4 max-w-xl text-sm leading-relaxed text-white sm:mt-5 sm:text-base md:mt-6 md:text-lg">
          A running community for every pace, every level and every journey.
        </p>

        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4 md:mt-8">

          <a
            href="#community"
            className="flex min-h-[50px] w-full items-center justify-center bg-[#c8f135] px-8 text-xs font-semibold uppercase text-black rounded-sm sm:w-auto sm:px-7 sm:text-sm"
          >
            Join the club
          </a>

          <a
            href="#runs"
            className="flex min-h-[50px] w-full items-center justify-center bg-[#FF5A1F] px-8 text-xs font-semibold uppercase text-white rounded-sm sm:w-auto sm:px-7 sm:text-sm"
          >
            Explore our runs
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero


