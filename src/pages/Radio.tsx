import { motion } from 'framer-motion'
import { Radio as RadioIcon, Play, ExternalLink, Headphones, Mic2, Signal, Clock } from 'lucide-react'
import Reveal, { SectionLabel } from '../components/Reveal'

const STREAM = 'https://litemanradio.mixlr.com/'
const EMBED = 'https://mixlr.com/users/litemanradio/embed?color=%23de8925&autoplay=false'

const recordings = [
  {
    title: 'Eswatini Malachi Gathering — It Is Finished',
    speaker: 'Pastor Louis Akanimo · 31 October 2026',
    length: '1h 26m',
    href: 'https://litemanradio.mixlr.com/recordings/3250262',
  },
  {
    title: '#LitemanWednesdays',
    speaker: '28 October 2026',
    length: '2h 07m',
    href: 'https://litemanradio.mixlr.com/recordings/3248020',
  },
  {
    title: '#LitemanTuesdays',
    speaker: '27 October 2026',
    length: '3h 05m',
    href: 'https://litemanradio.mixlr.com/recordings/3247964',
  },
  {
    title: 'SA Malachi Gathering — It Is Finished (Afternoon)',
    speaker: 'Pastor Tokunbo Oshokoya · 24 October 2026',
    length: '2h 07m',
    href: 'https://litemanradio.mixlr.com/recordings/3244672',
  },
]

const features = [
  { icon: Signal, title: 'Live broadcasts', text: 'Teaching, prayer and gatherings streamed as they happen.' },
  { icon: Mic2, title: '#LitemanTuesdays', text: 'Weekly teaching sessions with Pastor Toks and guest ministers.' },
  { icon: Headphones, title: 'Full archive', text: 'Missed a session? Every gathering is kept in the recordings library.' },
]

export default function Radio() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative overflow-hidden bg-hero-glow pb-16 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_70%_20%,rgba(222,137,37,0.14),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>Liteman Radio</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              The ministry, <span className="text-gradient">on air.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              Liteman Radio is the broadcast home of Photizo Ministries — live teaching, conference sessions
              and weekly programmes, streaming wherever you are.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={STREAM}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-[#241610] transition-all hover:bg-gold-soft"
              >
                <RadioIcon size={17} /> Open the live stream
                <ExternalLink size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://litemanradio.mixlr.com/recordings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8c6ad] px-7 py-3.5 text-sm text-[#1f1412] transition-colors hover:border-gold/60 hover:text-[#a95a10]"
              >
                Browse recordings
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Player */}
      <section className="pb-16 pt-4">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-[#e6d8c3] bg-gradient-to-br from-ink-soft via-ink to-midnight p-6 sm:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1c6f5f] opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1c6f5f]" />
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-[#1c6f5f]">Live now / always on</p>
                  </div>
                  <h2 className="mt-4 font-display text-3xl text-cream sm:text-4xl">Liteman Radio</h2>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-mist/70">
                    Press play to listen in the player below, or open the full station page for chat, recordings
                    and show notes.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-5 text-xs uppercase tracking-[0.2em] text-[#6b5a51]">
                    <span className="flex items-center gap-2"><Clock size={13} /> 24/7 stream</span>
                    <span className="flex items-center gap-2"><Headphones size={13} /> Teaching &amp; worship</span>
                  </div>
                </div>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-[#e6d8c3] bg-[#fffdf9]">
                <iframe
                  title="Liteman Radio live player"
                  src={EMBED}
                  width="100%"
                  height="180"
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay"
                  className="block w-full"
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#e6d8c3] bg-[#f7f1e7] p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-start gap-2 text-xs leading-relaxed text-[#4a3a33]">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#de8925]" />
                  <span>
                    If the player above stays blank, Liteman Radio is most likely off air or the player is
                    blocked on your network — the station always opens directly below.
                  </span>
                </p>
                <a
                  href={STREAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-[#241610] transition-colors hover:bg-gold-soft"
                >
                  <RadioIcon size={13} /> Listen Live on Mixlr
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-[#e6d8c3] bg-[#fffdf9] p-6">
                  <f.icon size={20} className="text-[#b96a12]" />
                  <h3 className="mt-4 font-display text-base text-cream">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist/70">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recordings */}
      <section className="bg-ink/40 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel>Recent Recordings</SectionLabel>
            <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl">
              Catch up on <span className="text-gold">what you missed.</span>
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-[#e6d8c3] overflow-hidden rounded-2xl border border-[#e6d8c3] bg-[#fffdf9]">
            {recordings.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 transition-colors hover:bg-[#f7f1e7] sm:gap-6 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-[#b96a12] transition-all group-hover:bg-gold group-hover:text-[#241610]">
                    <Play size={16} className="ml-0.5" fill="currentColor" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-base text-cream transition-colors group-hover:text-[#a95a10]">
                      {r.title}
                    </span>
                    <span className="mt-1 block text-xs text-[#6b5a51]">{r.speaker}</span>
                  </span>
                  <span className="shrink-0 text-xs tabular-nums text-[#6b5a51]">{r.length}</span>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-mist/70">
              New broadcasts are added weekly, including #LitemanTuesdays and #LitemanWednesdays.
            </p>
            <a
              href="https://litemanradio.mixlr.com/recordings"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#a95a10] hover:text-[#8f4a0c]"
            >
              All recordings
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
