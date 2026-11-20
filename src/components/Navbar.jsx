
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About us', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Events', href: '#events' },
    { name: 'Contact us', href: '#contact' },
  ]

  return (
    <nav className="absolute left-0 top-6 z-30 w-full px-6 md:top-[42px] md:px-[5.6%]">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="font-display text-3xl font-bold text-white md:text-4xl">
          STRIDE
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex">

          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-4 py-3 text-xs font-medium uppercase text-white ${
                index === 0 ? 'rounded-md bg-[#FF5A1F]' : ''
              }`}
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Desktop CTA */}
        <a
          href="#membership"
          className="hidden h-9 w-[150px] items-center justify-center rounded-md bg-[#C8F135] text-xs font-semibold uppercase text-[#0B0B0B] lg:flex"
        >
          Join the club
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md bg-[#C8F135] text-[#0B0B0B] lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="text-2xl">
            {menuOpen ? '×' : '☰'}
          </span>
        </button>

      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-2 rounded-lg bg-[#0B0B0B] p-4 lg:hidden">

          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-3 text-sm font-medium uppercase text-white ${
                index === 0 ? 'bg-[#FF5A1F]' : ''
              }`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#membership"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-[#C8F135] px-4 py-3 text-center text-sm font-semibold uppercase text-[#0B0B0B]"
          >
            Join the club
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar



