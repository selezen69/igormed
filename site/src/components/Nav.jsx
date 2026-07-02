import { useState, useEffect } from 'react'

const links = [
  { href: '#portfolio', label: 'Портфолио' },
  { href: '#about', label: 'О дизайнере' },
  { href: '#services', label: 'Услуги' },
  { href: '#process', label: 'Этапы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакт' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className={`text-sm tracking-[0.3em] uppercase font-light transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}>
          Наталья Селезнёва
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs tracking-widest uppercase transition-colors hover:opacity-70 ${scrolled ? 'text-stone-700' : 'text-white'}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className={`md:hidden transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-xs tracking-widest uppercase text-stone-700 py-2"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
