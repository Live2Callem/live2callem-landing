import { useState } from 'react'
import Reveal from './Reveal'
import { ArrowRightIcon, PlayPhoneIcon, CheckIcon } from './icons'

export default function DemoCTA() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', business: '', phone: '' })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your CRM / Calendly / Formspree / API endpoint.
    setSubmitted(true)
  }

  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900">
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-dotgrid-fine opacity-50 pointer-events-none" />
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-signal-400/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-signal-400/[0.08] blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12 lg:p-14">
            {/* Left: Try the demo line */}
            <Reveal>
              <div>
                <div className="text-xs font-mono uppercase tracking-[0.18em] text-signal-300/90">
                  Hear it for yourself
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold leading-[1.05] tracking-tight text-balance">
                  Call our demo line.{' '}
                  <span className="font-serif italic font-normal text-white/60">
                    Pretend it's 2 AM.
                  </span>
                </h2>
                <p className="mt-5 text-white/60 text-pretty">
                  The fastest way to understand what your customers experience.
                  Call the line below and try to break it.
                </p>

                <a
                  href="tel:+18558551234"
                  className="mt-8 inline-flex w-full sm:w-auto items-center justify-between gap-6 rounded-2xl border border-signal-400/25 bg-signal-400/[0.06] px-5 py-4 hover:bg-signal-400/[0.1] transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-signal-400/15 text-signal-300">
                      <PlayPhoneIcon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs uppercase tracking-widest text-signal-300/80">
                        Try demo line
                      </div>
                      <div className="font-mono text-xl text-white tracking-tight">
                        +1 (855) 855-1234
                      </div>
                    </div>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
                </a>

                <ul className="mt-8 space-y-2.5 text-sm text-white/55">
                  {[
                    'Available 24/7 — try it at any hour',
                    'Trained on a fictional HVAC business',
                    'Books a real (test) appointment',
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2.5">
                      <CheckIcon className="h-3.5 w-3.5 text-signal-400" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: book demo form */}
            <Reveal delay={120}>
              <div className="relative rounded-2xl border border-white/10 bg-ink-950/60 backdrop-blur-md p-7 sm:p-8">
                {!submitted ? (
                  <>
                    <h3 className="text-xl font-medium text-white">
                      Or book a 15-min walkthrough
                    </h3>
                    <p className="mt-1.5 text-sm text-white/55">
                      We'll show you exactly how it'd work for your business.
                    </p>

                    <form onSubmit={onSubmit} className="mt-6 space-y-3">
                      <Field
                        label="Your name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Sarah Martinez"
                        required
                      />
                      <Field
                        label="Business name"
                        name="business"
                        value={form.business}
                        onChange={onChange}
                        placeholder="Sarah's HVAC"
                        required
                      />
                      <Field
                        label="Phone number"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="(555) 123-4567"
                        required
                      />

                      <button
                        type="submit"
                        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal-400 px-6 py-3.5 text-[15px] font-medium text-ink-950 hover:bg-signal-300 transition-colors btn-shine"
                      >
                        Book Free Demo
                        <ArrowRightIcon className="h-4 w-4" />
                      </button>

                      <p className="text-center text-xs text-white/40 mt-3">
                        Takes 15 minutes. No pressure, no card.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-signal-400/15 ring-1 ring-signal-400/25">
                      <CheckIcon className="h-6 w-6 text-signal-300" />
                    </div>
                    <h3 className="mt-5 text-xl font-medium text-white">
                      We'll be in touch.
                    </h3>
                    <p className="mt-2 text-sm text-white/60 max-w-sm mx-auto">
                      We'll text {form.phone || 'you'} within the hour to lock
                      in a time. Talk soon.
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-white/55 uppercase tracking-wider">
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-white placeholder:text-white/30 focus:border-signal-400/40 focus:bg-white/[0.05] focus:outline-none transition-colors"
      />
    </label>
  )
}
