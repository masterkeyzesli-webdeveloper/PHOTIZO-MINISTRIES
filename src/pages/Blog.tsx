import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen } from 'lucide-react'
import { posts, categories } from '../data/posts'
import Reveal, { SectionLabel } from '../components/Reveal'

export default function Blog() {
  const [category, setCategory] = useState('All')

  const filtered = useMemo(
    () => (category === 'All' ? posts : posts.filter((p) => p.category === category)),
    [category],
  )

  const featured = posts[0]
  const rest = filtered.filter((p) => p.slug !== featured.slug || category !== 'All')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative overflow-hidden bg-hero-glow pb-14 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_25%,rgba(79,209,197,0.09),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>The Journal</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              Words that <span className="text-gradient">bring light.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              Devotionals, teaching notes and reflections from Photizo Ministries — written to help you
              understand the Word and live it out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured */}
      <section className="pt-4 pb-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-gold/15 bg-white/[0.03] transition-colors hover:border-gold/30 lg:grid-cols-2"
            >
              <div className="relative flex min-h-[240px] flex-col justify-between bg-gradient-to-br from-[#1d2c47] via-[#141d33] to-[#0b1220] p-8 sm:p-10">
                <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
                <div className="relative">
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                    Featured · {featured.category}
                  </span>
                  <p className="mt-8 font-display text-2xl leading-relaxed text-cream/90 sm:text-3xl">
                    “{featured.scripture.text}”
                  </p>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-gold/70">
                    {featured.scripture.ref}
                  </p>
                </div>
                <BookOpen size={28} className="relative mt-8 text-gold/25" />
              </div>
              <div className="p-8 sm:p-10">
                <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-cream/40">
                  {featured.date}
                  <span className="h-1 w-1 rounded-full bg-gold/50" />
                  <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {featured.readTime}</span>
                </p>
                <h2 className="mt-4 font-display text-2xl leading-tight text-cream transition-colors group-hover:text-gold sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-mist/65">{featured.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold">
                  Read the article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* List */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 border-t border-white/5 pt-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
                  category === c
                    ? 'border-gold bg-gold text-midnight'
                    : 'border-white/10 text-cream/65 hover:border-gold/40 hover:text-gold'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                >
                  <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-teal/80">
                    {p.category}
                  </span>
                  <h3 className="mt-5 font-display text-lg leading-snug text-cream transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/60">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[11px] uppercase tracking-[0.18em] text-cream/35">
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {p.readTime}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {rest.length === 0 && (
            <p className="mt-10 text-sm text-mist/55">More articles in this category are on the way.</p>
          )}
        </div>
      </section>
    </motion.div>
  )
}
