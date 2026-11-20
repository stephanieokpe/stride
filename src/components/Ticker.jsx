
function Ticker() {
  
const messages = [
  'Stronger with every stride.',
  'Elevate your run.',
  'Find your rhythm.',
  'Move with purpose.',
  'Run beyond limits.',
]

  return (
    <div className="absolute bottom-0 left-0 z-20 flex h-[70px] w-full items-center overflow-hidden bg-[#FF5A1F]">

      <div className="flex w-max animate-marquee">

        {/* First set of messages */}
        <div className="flex shrink-0 items-center gap-50 px-6 font-display text-sm font-bold uppercase tracking-wide text-white">
          {messages.map((message, index) => (
            <span key={index}>{message}</span>
          ))}
        </div>

        {/* Duplicate set for a seamless loop */}
        <div
          className="flex shrink-0 items-center gap-50 px-6 font-display text-sm font-bold uppercase tracking-wide text-white"
          aria-hidden="true"
        >
          {messages.map((message, index) => (
            <span key={index}>{message}</span>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Ticker
