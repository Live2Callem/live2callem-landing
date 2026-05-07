import Reveal from './Reveal'

const steps = [
  {
    n: '01',
    title: 'Connect your number',
    body:
      'Forward your existing line in 5 minutes. No new phone, no porting, no IT person required.',
    detail: 'Works with VoIP, mobile, or landline.',
  },
  {
    n: '02',
    title: 'AI answers every call',
    body:
      'Trained on your services, pricing windows, and zip codes. It qualifies the lead, books the slot, and routes the urgent ones to you.',
    detail: 'Booking, qualifying, and screening — all in one call.',
  },
  {
    n: '03',
    title: 'You get the win',
    body:
      'Wake up to a calendar full of confirmed jobs, transcripts of every call, and SMS follow-ups already sent.',
    detail: 'More booked jobs. Zero phone tag.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-signal-300/90">
              How it works
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-balance">
              Live in{' '}
              <span className="font-serif italic font-normal text-signal-300">
                under an hour
              </span>
              .
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              No engineers. No new hardware. You'll book your first AI-handled
              job today.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 relative">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-[44px] hidden md:block h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="relative">
                  {/* Number pill */}
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 -z-10 rounded-full bg-signal-400/10 blur-md" />
                    <div className="grid h-[88px] w-[88px] place-items-center rounded-full border border-white/10 bg-ink-900">
                      <span className="font-serif text-3xl text-signal-300 italic">
                        {s.n}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-medium text-white text-balance">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-white/60 text-pretty">
                    {s.body}
                  </p>
                  <p className="mt-3 text-sm text-signal-300/80">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
