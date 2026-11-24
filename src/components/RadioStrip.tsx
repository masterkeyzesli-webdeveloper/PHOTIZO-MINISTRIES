import { Link } from 'react-router-dom'
import { Radio, ArrowRight } from 'lucide-react'

export default function RadioStrip() {
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-gradient-to-r from-[#0f1a2d] via-[#132038] to-[#0f1a2d]">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(ellipse_40%_120%_at_20%_50%,rgba(79,209,197,0.18),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-4">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
            <Radio size={17} />
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal" />
            </span>
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-teal/80">On air now</p>
            <p className="mt-0.5 font-display text-base text-cream sm:text-lg">
              Liteman Radio — teaching &amp; worship, streaming live
            </p>
          </div>
        </div>
        <Link
          to="/radio"
          className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-midnight transition-all hover:bg-gold-soft"
        >
          Listen live
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
