import Reveal from './Reveal'
import { ArrowRightIcon, PlayPhoneIcon } from './icons'
import { DEMO_PHONE_HREF } from '../config'

export default function FinalCTA() {
  return (
    <section className="relative py-24 sm:py-32 grain">
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Bottom glow */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-signal-400/[0.06] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-400 animate-pulse" />
            Ready when you are
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="mt-7 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1] tracking-tightest text-balance">
            Stop losing money to{' '}
            <span className="font-serif italic font-normal text-signal-300">
              missed calls
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 text-pretty">
            Book a 15-minute demo. We'll show you how many jobs you're missing
            — and exactly how to keep them.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#demo"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal-400 px-7 py-4 text-[15px] font-medium text-ink-950 hover:bg-signal-300 transition-colors btn-shine"
            >
              Book Free Demo
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={DEMO_PHONE_HREF}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-[15px] font-medium text-white hover:bg-white/[0.07] hover:border-white/25 transition-colors"
            >
              <PlayPhoneIcon className="h-4 w-4" />
              Try Demo Line
            </a>
          </div>
        </Reveal>

        <Reveal delay={420}>
          <p className="mt-7 text-sm text-white/40">
            No credit card · 5-minute setup · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  )
}
