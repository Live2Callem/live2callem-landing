import Reveal from './Reveal'
import {
  ClockIcon,
  RotateIcon,
  CalendarIcon,
  MessageIcon,
  RouteIcon,
  PlugIcon,
} from './icons'

const features = [
  {
    icon: ClockIcon,
    title: '24/7 AI receptionist',
    body:
      'Picks up on the first ring — at 3 AM, on Christmas, in the middle of a heatwave rush. Sounds natural, not robotic.',
  },
  {
    icon: RotateIcon,
    title: 'Missed call recovery',
    body:
      'If a call slips through, an SMS goes out within seconds: "Sorry we missed you — can we book a tech?" You keep the lead.',
  },
  {
    icon: CalendarIcon,
    title: 'Appointment booking',
    body:
      'Books straight into your calendar with the right service window, address, and notes. No double-bookings, no callbacks.',
  },
  {
    icon: MessageIcon,
    title: 'SMS follow-up',
    body:
      'Automatic confirmation, tech-on-the-way alerts, and review requests. Every caller gets a touchpoint, every time.',
  },
  {
    icon: RouteIcon,
    title: 'Smart call routing',
    body:
      'Real emergency? It pages you. Sales question? Routed to the office. Spam? Filtered out before your phone ever buzzes.',
  },
  {
    icon: PlugIcon,
    title: 'Works with your existing number',
    body:
      'No porting, no new line, no rip-and-replace. Forward your number in 5 minutes and you\'re live.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      {/* Subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-signal-300/90">
              What it does
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
              A receptionist that{' '}
              <span className="font-serif italic font-normal text-signal-300">
                never sleeps
              </span>
              , never misses, and never asks for a raise.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal key={f.title} delay={i * 60}>
                <article className="group relative h-full bg-ink-900 p-7 transition-colors hover:bg-ink-850">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-signal-400/10 text-signal-300 ring-1 ring-signal-400/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/55 text-pretty">
                    {f.body}
                  </p>

                  {/* Subtle hover line */}
                  <span className="absolute left-7 right-7 bottom-0 h-px bg-gradient-to-r from-signal-400/0 via-signal-400/40 to-signal-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
