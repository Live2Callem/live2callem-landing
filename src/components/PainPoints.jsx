import Reveal from './Reveal'
import { PhoneMissedIcon, MoonIcon, WrenchIcon } from './icons'

const items = [
  {
    icon: PhoneMissedIcon,
    title: 'Missed calls = silent revenue leaks',
    body:
      "When a homeowner's AC dies, they call the next number on Google. Most won't leave a voicemail — and they won't call you twice.",
    stat: '~75%',
    statLabel: "of callers don't leave a voicemail",
  },
  {
    icon: MoonIcon,
    title: "Emergencies don't wait for office hours",
    body:
      'Frozen pipes, dead furnaces, broken AC — the calls that matter most come nights, weekends, and holidays. Voicemail loses every one of them.',
    stat: '38%',
    statLabel: 'of service calls happen after-hours',
  },
  {
    icon: WrenchIcon,
    title: "Your techs can't be on-site AND on the phone",
    body:
      "When the crew is in an attic or under a sink, the phone rings into nothing. Every busy day quietly costs you future jobs.",
    stat: '$285',
    statLabel: 'avg. value of a missed service call',
  },
]

export default function PainPoints() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-signal-300/90">
              The problem
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
              Every ring you miss is a job
              {' '}
              <span className="font-serif italic font-normal text-white/50">
                someone else
              </span>
              {' '}
              is taking.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/60 text-pretty">
              Local service runs on phone calls. The math is brutal — and most
              owners don't see it until the slow month hits.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <Reveal key={item.title} delay={i * 80}>
                <article className="group relative h-full rounded-2xl border border-white/[0.06] bg-ink-900/60 p-7 transition-all duration-300 hover:border-white/[0.12] hover:bg-ink-850/80 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.04] text-signal-300 ring-1 ring-white/[0.06] group-hover:bg-signal-400/10 group-hover:text-signal-200 transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-3xl text-white tabular-nums">
                        {item.stat}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-white/40 mt-0.5">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-7 text-lg font-medium text-white text-balance">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/55">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={300}>
          <p className="mt-10 text-sm text-white/40 italic">
            *Industry estimates. Your numbers may be worse than you think.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
