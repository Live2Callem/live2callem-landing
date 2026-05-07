import Reveal from './Reveal'
import { ArrowRightIcon, PlayPhoneIcon, CheckIcon } from './icons'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 grain"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-dotgrid opacity-40 mask-fade-b pointer-events-none" />

      {/* Subtle horizon line */}
      <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-signal-400 opacity-70 animate-ping-slow" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
                </span>
                Built for HVAC, plumbing, electrical & home service
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-6 text-[clamp(2.5rem,6.2vw,4.75rem)] font-semibold leading-[1.02] tracking-tightest text-balance">
                Stop losing customers
                <br className="hidden sm:block" />
                {' '}to{' '}
                <span className="font-serif italic font-normal text-signal-300">
                  missed&nbsp;calls
                </span>
                .
              </h1>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/65 text-pretty">
                Your 24/7 AI receptionist answers every call, books
                appointments, and follows up by SMS — even when your team
                can't pick up.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal-400 px-6 py-3.5 text-[15px] font-medium text-ink-950 hover:bg-signal-300 transition-colors btn-shine"
                >
                  Book Free Demo
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 text-[15px] font-medium text-white hover:bg-white/[0.07] hover:border-white/25 transition-colors"
                >
                  <PlayPhoneIcon className="h-4 w-4" />
                  Try Demo Line
                </a>
              </div>
            </Reveal>

            <Reveal delay={420}>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/55">
                {['No credit card', '5-minute setup', 'Works with your number'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckIcon className="h-3.5 w-3.5 text-signal-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual: live call card */}
          <div className="lg:col-span-5">
            <Reveal delay={500}>
              <CallCard />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallCard() {
  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-6 bg-signal-400/10 rounded-[2rem] blur-3xl pointer-events-none" />

      <div className="relative gradient-border rounded-2xl bg-ink-900/80 backdrop-blur-md p-5 sm:p-6 shadow-2xl shadow-black/50">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal-400 opacity-60 animate-ping-slow" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-signal-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-signal-300">
              Live call
            </span>
          </div>
          <span className="font-mono text-xs text-white/50">00:42</span>
        </div>

        <div className="mt-4">
          <div className="text-xs text-white/40 uppercase tracking-wider">Caller</div>
          <div className="mt-1 text-base font-medium text-white">Mike R. · Local mobile</div>
          <div className="text-xs text-white/40">Calling Sarah's HVAC · Boise, ID</div>
        </div>

        <div className="my-5 h-px bg-white/[0.06]" />

        {/* Transcript */}
        <div className="space-y-3">
          <Bubble role="ai">
            Thanks for calling Sarah's HVAC — how can I help today?
          </Bubble>
          <Bubble role="caller">
            My AC stopped blowing cold air. It's 95° in the house.
          </Bubble>
          <Bubble role="ai" highlight>
            Got it — sounds urgent. I can have a tech out
            today between 2 and 4 PM. Does that work?
          </Bubble>
        </div>

        {/* Waveform */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-8 items-center gap-[3px] flex-1">
            {[6, 10, 14, 22, 16, 28, 12, 20, 24, 14, 8, 18, 26, 12, 20, 14, 22, 10, 8, 16, 12].map((h, i) => (
              <span
                key={i}
                className="w-[3px] rounded-full bg-signal-400/80 origin-center animate-wave"
                style={{ height: `${h}px`, animationDelay: `${i * 70}ms` }}
              />
            ))}
          </div>
          <span className="font-mono text-[11px] text-white/40">listening…</span>
        </div>

        {/* Outcome footer */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-signal-400/20 bg-signal-400/[0.06] px-4 py-3">
          <div className="flex items-center gap-2.5">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-signal-400/15">
              <CheckIcon className="h-3.5 w-3.5 text-signal-300" />
            </div>
            <div className="text-sm font-medium text-white">
              Booked · 2:30 PM today
            </div>
          </div>
          <span className="text-xs text-white/40">SMS sent</span>
        </div>
      </div>

      {/* Floating notification card */}
      <div className="absolute -left-4 sm:-left-8 bottom-10 hidden sm:block w-56 rotate-[-6deg]">
        <div className="rounded-xl border border-white/10 bg-ink-800/90 backdrop-blur-md p-3 shadow-xl">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
            New booking
          </div>
          <div className="mt-1.5 text-sm font-medium text-white">$340 service call</div>
          <div className="text-xs text-white/50">Captured by AI · 12s response</div>
        </div>
      </div>
    </div>
  )
}

function Bubble({ role, highlight, children }) {
  const isAI = role === 'ai'
  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
      <div
        className={[
          'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
          isAI
            ? highlight
              ? 'bg-signal-400/10 text-white border border-signal-400/20 rounded-bl-sm'
              : 'bg-white/[0.04] text-white/85 border border-white/[0.06] rounded-bl-sm'
            : 'bg-ink-700 text-white/80 rounded-br-sm',
        ].join(' ')}
      >
        {isAI && (
          <div className="mb-1 text-[10px] uppercase tracking-widest text-signal-300/80">
            AI Receptionist
          </div>
        )}
        {!isAI && (
          <div className="mb-1 text-[10px] uppercase tracking-widest text-white/40">Caller</div>
        )}
        {children}
      </div>
    </div>
  )
}
