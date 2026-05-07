import { Logo } from './icons'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Live2CallEm
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/50">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#how" className="hover:text-white transition-colors">
              How it works
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#demo" className="hover:text-white transition-colors">
              Book demo
            </a>
            <a href="mailto:hello@live2callem.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/35">
          <p>© {new Date().getFullYear()} Live2CallEm. All rights reserved.</p>
          <p className="font-mono">
            Built for HVAC, plumbing, electrical & home service.
          </p>
        </div>
      </div>
    </footer>
  )
}
