import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Youtube, Search, ArrowRight, Radio } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal, { SectionLabel } from '../components/Reveal'

const CHANNEL = 'https://youtube.com/@photizoatmospowermedia?si=RxSjqv5JTfW58IJP'

type Video = { title: string; series: string }

const videos: Video[] = [
  { title: 'In God’s kingdom, don’t think outside the box', series: 'Kingdom Living' },
  { title: 'Difference between sanctification and Consecration', series: 'Consecration' },
  { title: 'You are a vital part of the body of Christ', series: 'The Church' },
  { title: 'Expose sin to heal and not to destroy', series: 'The Church' },
  { title: 'Your life is consecrated when you are inside the cross', series: 'Consecration' },
  { title: 'You are not in competition with anybody', series: 'Identity' },
  { title: 'Exposing error vs Correction', series: 'The Church' },
  { title: 'Lessons from Ephesians 4:11-20 to the Church', series: 'The Word' },
  { title: 'Speaking the truth in Love', series: 'The Church' },
  { title: 'The Believers’ Consecration', series: 'Consecration' },
  { title: 'Eswatini revelation — book review', series: 'Prophetic' },
  { title: 'Understanding The Word Of Knowledge And The Word Of Wisdom | Part 1', series: 'The Holy Spirit' },
  { title: 'Prophetic script review', series: 'Prophetic' },
  { title: 'God’s Omniscience', series: 'The Word' },
  { title: 'Understanding The Word Of Knowledge And The Word Of Wisdom | Part 2', series: 'The Holy Spirit' },
]

const seriesList = ['All', ...Array.from(new Set(videos.map((v) => v.series)))]

const watchUrl = (title: string) =>
  `https://www.youtube.com/@photizoatmospowermedia/search?query=${encodeURIComponent(title)}`

const art = [
  'from-[#123047] via-[#0e2136] to-[#0b1220]',
  'from-[#2a2136] via-[#1b1a30] to-[#0b1220]',
  'from-[#123a33] via-[#0f2a2b] to-[#0b1220]',
  'from-[#3a2c1c] via-[#241f2a] to-[#0b1220]',
]

export default function Videos() {
  const [series, setSeries] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      videos.filter(
        (v) =>
          (series === 'All' || v.series === series) &&
          v.title.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [series, query],
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative overflow-hidden bg-hero-glow pb-14 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_30%,rgba(79,209,197,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>Photizo Atmosphower Media</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              The video <span className="text-gradient">library.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              Messages, teaching series and prophetic reviews from Photizo Ministries — watch, search, and
              grow in the understanding of God’s Word.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft"
              >
                <Youtube size={17} /> Subscribe on YouTube
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/radio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
              >
                <Radio size={15} /> Listen on Liteman Radio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <a
              href={watchUrl('Understanding The Word Of Knowledge And The Word Of Wisdom')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-gold/15"
            >
              <img
                src="https://photizoministries.org/wp-content/uploads/2023/08/photizo1-1.jpg"
                alt="Photizo Ministries teaching"
                className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-midnight shadow-xl shadow-gold/30 transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
                  <Play size={28} className="ml-1" fill="currentColor" />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9">
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold/90">Featured teaching</p>
                <h2 className="mt-2 max-w-2xl font-display text-2xl leading-snug text-cream sm:text-3xl">
                  Understanding the Word of Knowledge and the Word of Wisdom
                </h2>
                <p className="mt-2 text-sm text-cream/60">Two-part series · Photizo Atmosphower Media</p>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Library */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {seriesList.map((s) => (
                <button
                  key={s}
                  onClick={() => setSeries(s)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
                    series === s
                      ? 'border-gold bg-gold text-midnight'
                      : 'border-white/10 text-cream/65 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/35" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search teachings..."
                className="w-full rounded-full border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-cream placeholder:text-cream/30 focus:border-gold/50 focus:outline-none"
              />
            </div>
          </div>

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-cream/35">
            {filtered.length} teaching{filtered.length === 1 ? '' : 's'}
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.06}>
                <a
                  href={watchUrl(v.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                >
                  <div className={`relative aspect-video overflow-hidden bg-gradient-to-br ${art[i % art.length]}`}>
                    <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-midnight">
                        <Play size={18} className="ml-0.5" fill="currentColor" />
                      </span>
                    </div>
                    <span className="absolute left-3 top-3 rounded-full bg-midnight/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-gold backdrop-blur">
                      {v.series}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-base leading-snug text-cream transition-colors group-hover:text-gold">
                      {v.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-cream/35">
                      <Youtube size={12} /> Watch on YouTube
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 rounded-2xl border border-white/5 bg-white/[0.02] p-10 text-center">
              <p className="text-sm text-mist/60">No teaching matches that search yet.</p>
              <button
                onClick={() => {
                  setQuery('')
                  setSeries('All')
                }}
                className="mt-4 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-soft"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
