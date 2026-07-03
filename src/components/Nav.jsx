import { useEffect, useState } from 'react'
import { Logo, ArrowRightIcon } from './icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'ROI', href: '#roi' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-ink-950/70 border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 group">
            <Logo className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight">
              Live2CallEm
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-signal-400 px-4 py-2 text-sm font-medium text-ink-950 hover:bg-signal-300 transition-colors btn-shine"
            >
              Book Free Demo
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-md p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {open ? (
                  <path strokeLinecap="round" d="M6 6l12 12M6 18 18 6" />
                ) : (
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-5 pt-2 border-t border-white/5">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/[0.04]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-signal-400 px-4 py-2.5 text-center text-sm font-medium text-ink-950"
              >
                Book Free Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
