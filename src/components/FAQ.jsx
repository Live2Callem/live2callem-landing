import { useState } from 'react'
import Reveal from './Reveal'
import { PlusIcon } from './icons'

const faqs = [
  {
    q: 'Will my customers know they\'re talking to AI?',
    a: 'It sounds natural — most callers don\'t realize. We can have it identify itself as an AI assistant if you prefer; it\'s your call. Either way, it\'s polite, professional, and won\'t lose patience like a tired front desk on a Friday.',
  },
  {
    q: 'Does it really work with my existing business number?',
    a: 'Yes. You don\'t change anything customer-facing. We give you a setup that forwards calls when you don\'t answer (or 24/7, if you prefer). No porting, no new line on your business cards.',
  },
  {
    q: 'What if my team is already on a call?',
    a: 'That\'s exactly when this saves you. If your line is busy, the AI picks up the second call instead of sending it to voicemail. You stop losing simultaneous calls during your busiest hours.',
  },
  {
    q: 'How fast can we get set up?',
    a: 'Most businesses are live the same day. Onboarding takes about 30 minutes — we learn your services, hours, service area, and pricing windows, then point your number at the AI. Done.',
  },
  {
    q: 'Can it actually book appointments into our calendar?',
    a: 'Yes. We integrate with most scheduling tools (Google Calendar, Housecall Pro, Jobber, ServiceTitan, and more). The AI books with the right service window, captures address and notes, and confirms by SMS.',
  },
  {
    q: 'What does it cost?',
    a: 'Plans start at a flat monthly rate that\'s less than a single missed service call. We\'ll quote you on the demo based on call volume. There\'s no contract — month to month.',
  },
  {
    q: 'What about emergencies and after-hours pages?',
    a: 'You set the rules. The AI screens for urgency (no heat in winter, water leak, gas smell, etc.) and pages whoever is on call by phone or SMS. Non-urgent requests get booked for the next business day.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          <Reveal as="div" className="lg:col-span-4">
            <div className="text-xs font-mono uppercase tracking-[0.18em] text-signal-300/90">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-[1.05] tracking-tight text-balance">
              The{' '}
              <span className="font-serif italic font-normal text-signal-300">
                real
              </span>{' '}
              questions owners ask.
            </h2>
            <p className="mt-5 text-white/55 text-pretty">
              Don't see yours? Ask us live on the demo.
            </p>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal>
              <ul className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {faqs.map((f, i) => (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(open === i ? -1 : i)}
                      className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                      aria-expanded={open === i}
                    >
                      <span className="text-[16px] sm:text-lg font-medium text-white pr-4">
                        {f.q}
                      </span>
                      <span
                        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 text-white/70 transition-all duration-300 ${
                          open === i
                            ? 'rotate-45 bg-signal-400/10 border-signal-400/30 text-signal-300'
                            : 'group-hover:bg-white/[0.05]'
                        }`}
                      >
                        <PlusIcon className="h-3.5 w-3.5" />
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        open === i
                          ? 'grid-rows-[1fr] opacity-100 pb-6'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[15px] leading-relaxed text-white/60 max-w-2xl text-pretty">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
