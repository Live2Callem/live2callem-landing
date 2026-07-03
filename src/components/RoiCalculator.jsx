import { useState } from 'react'
import Reveal from './Reveal'
import { ArrowRightIcon } from './icons'

const fmt = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

const WEEKS_PER_MONTH = 4.33

export default function RoiCalculator() {
  const [missed, setMissed] = useState(7)
  const [jobValue, setJobValue] = useState(285)
  const [closeRate, setCloseRate] = useState(60)

  const monthly = missed * WEEKS_PER_MONTH * jobValue * (closeRate / 100)
  const yearly = monthly * 12

  return (
    <section id="roi" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-signal-300/90">
              Do the math
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
              What are missed calls{' '}
              <span className="font-serif italic font-normal text-white/50">
                actually
              </span>{' '}
              costing you?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/60 text-pretty">
              Slide your real numbers in. Most owners underestimate this by
              half — the slow months are where it shows.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="h-full rounded-2xl border border-white/[0.06] bg-ink-900/60 p-7 sm:p-9 space-y-8">
              <Slider
                label="Calls you miss per week"
                hint="After-hours, weekends, while your crew is on a job"
                value={missed}
                onChange={setMissed}
                min={1}
                max={30}
                display={`${missed} calls`}
              />
              <Slider
                label="Average job value"
                hint="Your typical service ticket, not your biggest"
                value={jobValue}
                onChange={setJobValue}
                min={100}
                max={2000}
                step={25}
                display={fmt(jobValue)}
              />
              <Slider
                label="How many callers you'd normally win"
                hint="If you actually answered, how often do they book?"
                value={closeRate}
                onChange={setCloseRate}
                min={20}
                max={100}
                step={5}
                display={`${closeRate}%`}
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="relative h-full overflow-hidden rounded-2xl border border-signal-400/20 bg-ink-900 p-7 sm:p-9 flex flex-col">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-signal-400/10 blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-white/45">
                  Revenue walking away
                </div>
                <div className="mt-3 font-serif text-5xl sm:text-6xl text-signal-300 tabular-nums tracking-tight">
                  {fmt(monthly)}
                </div>
                <div className="mt-1 text-sm text-white/50">per month</div>

                <div className="mt-6 pt-6 border-t border-white/[0.08]">
                  <div className="font-serif text-3xl text-white tabular-nums">
                    {fmt(yearly)}
                  </div>
                  <div className="mt-1 text-sm text-white/50">per year</div>
                </div>
              </div>

              <div className="relative mt-auto pt-8">
                <a
                  href="#demo"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-400 px-6 py-3.5 text-[15px] font-medium text-ink-950 hover:bg-signal-300 transition-colors btn-shine"
                >
                  Stop the leak
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-white/40">
                  Answering every call costs less than one missed job.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Slider({ label, hint, value, onChange, min, max, step = 1, display }) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[15px] font-medium text-white">{label}</span>
        <span className="font-mono text-lg text-signal-300 tabular-nums">{display}</span>
      </div>
      <p className="mt-1 text-xs text-white/40">{hint}</p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 w-full accent-signal-400 cursor-pointer"
      />
    </label>
  )
}
