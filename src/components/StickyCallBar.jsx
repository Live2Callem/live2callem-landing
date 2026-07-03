import { useEffect, useState } from 'react'
import { PlayPhoneIcon, ArrowRightIcon } from './icons'
import { DEMO_PHONE_HREF } from '../config'

/**
 * Mobile-only bottom bar with the two conversion actions. Appears once the
 * visitor scrolls past the hero, hides while the demo section (which has its
 * own CTAs) is on screen.
 */
export default function StickyCallBar() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const demo = document.getElementById('demo')
    let demoVisible = false
    let scrolledPast = false

    const update = () => setShow(scrolledPast && !demoVisible)

    const onScroll = () => {
      scrolledPast = window.scrollY > window.innerHeight * 0.8
      update()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    let obs
    if (demo) {
      obs = new IntersectionObserver(([entry]) => {
        demoVisible = entry.isIntersecting
        update()
      })
      obs.observe(demo)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      obs?.disconnect()
    }
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 sm:hidden transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="border-t border-white/10 bg-ink-950/90 backdrop-blur-xl px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="flex gap-2.5">
          <a
            href={DEMO_PHONE_HREF}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white"
          >
            <PlayPhoneIcon className="h-4 w-4" />
            Hear the AI
          </a>
          <a
            href="#demo"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-signal-400 px-4 py-3 text-sm font-medium text-ink-950 btn-shine"
          >
            Book Demo
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
