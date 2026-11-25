import { Link } from 'react-router-dom'
import { Radio, ArrowRight } from 'lucide-react'

export default function RadioStrip() {
  return (
    <section className="relative overflow-hidden border-y border-[#e6d8c3] bg-[#f4ede2]">
      <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(ellipse_40%_120%_at_20%_50%,rgba(222,137,37,0.16),transparent_60%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-4">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[#b96a12]">
            <Radio size={17} />
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1c6f5f] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1c6f5f]" />
            </span>
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#1c6f5f]">On air now</p>
            <p className="mt-0.5 font-display text-base text-[#1f1412] sm:text-lg">
              Liteman Radio — teaching &amp; worship, streaming live
            </p>
          </div>
        </div>
        <Link
          to="/radio"
          className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#241610] transition-all hover:bg-gold-soft"
        >
          Listen live
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
