import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, Cpu, Briefcase, Users, Radio, BookOpen } from 'lucide-react'
import Reveal, { SectionLabel } from '../components/Reveal'

const facets = [
  { icon: Cpu, title: 'Engineer', text: 'An Electrical/Electronics Engineer by profession.' },
  { icon: Briefcase, title: 'Business Leader', text: 'Managing Director/CEO of Oshea Projects Limited.' },
  { icon: Users, title: 'Family Man', text: 'Happily married to Philomena, with three children.' },
]

export default function Leadership() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative overflow-hidden bg-hero-glow pb-16 pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_75%_25%,rgba(212,168,83,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>Our Leadership</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              Meet our <span className="text-gradient">pastor.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              A life committed to the teaching of God’s Word, missions, discipleship, and raising believers
              who live out the truth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pastor profile */}
      <section className="section-glow py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="sticky top-28">
              <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-ink-soft via-ink to-midnight p-8">
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-display text-5xl text-gold">
                  EO
                </div>
                <h2 className="relative mt-7 font-display text-2xl leading-snug text-cream">
                  Pastor Ebenezer Olatokunbo Oshokoya
                </h2>
                <p className="relative mt-2 text-[11px] uppercase tracking-[0.3em] text-gold/80">
                  Pastor &amp; Ministry Leader
                </p>
                <p className="relative mt-4 text-sm leading-relaxed text-mist/60">
                  Popularly known as <span className="text-cream/90">Pastor Toks</span> — called into ministry
                  in 1989, with a missionary mandate across West and Southern Africa.
                </p>
                <div className="relative mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-cream/50">
                  <p>Saved &amp; baptized in the Holy Spirit — 1985</p>
                  <p>Called into the ministry — 1989</p>
                </div>
              </div>

              <a
                href="https://litemanradio.mixlr.com/recordings"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex items-center gap-3 rounded-2xl border border-gold/15 bg-white/[0.03] p-5 transition-colors hover:border-gold/40"
              >
                <Radio size={18} className="text-gold" />
                <span className="flex-1 text-sm text-cream/80">Hear Pastor Toks teach</span>
                <ArrowRight size={15} className="text-gold transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">
                A life given to <span className="text-gold">the Word.</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-mist/70">
                <p>
                  Pastor Ebenezer Olatokunbo Oshokoya got saved and was baptized in the Holy Spirit in 1985 and
                  was called into the ministry in 1989. His missionary ministry has taken him to several
                  African nations, towns, cities and states across West Africa and South Africa.
                </p>
                <p>
                  He is specially anointed for the revelatory teaching of the end-time message and the Gospel
                  in general. His simple, systematic, expository and practical teaching of the Word of God is
                  blessed with grace to powerfully illuminate the hearts of believers to rightly divide the
                  Word of Truth.
                </p>
                <p>
                  Popularly known as <span className="text-cream">Pastor Toks</span>, he has served as a TV
                  analyst on end-time religious programmes including <em>Refreshing Time</em> and{' '}
                  <em>Restoration Hour</em>. He is also a columnist for the{' '}
                  <em>Living Word Digest Christian Magazine</em>.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-10 rounded-2xl border border-gold/15 bg-white/[0.03] p-7">
                <Quote size={22} className="text-gold/50" />
                <p className="mt-3 font-display text-xl leading-relaxed text-cream/90 sm:text-2xl">
                  “You can prosper by applying only the Truth.”
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12">
                <SectionLabel>The Ministry</SectionLabel>
                <h3 className="mt-4 font-display text-2xl text-cream sm:text-3xl">
                  A calling to teach, equip and raise.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-mist/70">
                  For over eight years, Pastor Toks has been involved in an extensive work in missions outside
                  Nigeria, particularly through a growing youth-focused ministry in South Africa. Through{' '}
                  <span className="text-cream">Eagles Youth Ministries SA</span>, regular Christian-based youth
                  camps and teaching conferences are held in universities in Johannesburg and Cape Town.
                </p>
                <p className="mt-4 text-base leading-relaxed text-mist/70">
                  These programmes are designed to develop kingdom-focused awareness among young people and
                  raise end-time soldiers who can rightly divide the Word of Truth and live it out in the
                  midst of the world. The ministry seeks to enlighten young people on how to{' '}
                  <span className="text-gold">shine out God’s glory</span> in the midst of increasing pressure
                  on society and, particularly, on the younger generation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 rounded-2xl border border-white/5 bg-ink/50 p-7">
                <div className="flex items-center gap-3">
                  <Briefcase size={18} className="text-gold" />
                  <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80">Faith &amp; Business</p>
                </div>
                <h3 className="mt-4 font-display text-xl text-cream sm:text-2xl">
                  Equipping believers for impact.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/70">
                  Pastor Toks supervises a monthly Business Forum where believers are taught the biblical
                  principles that guide and promote the generation of wealth. He strongly believes that
                  believers can prosper by applying the truth, and he is a member of{' '}
                  <span className="text-cream">Managing Business for Christ (MBFC)</span>, an organisation
                  devoted to Christian ideals in business management.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {facets.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                    <f.icon size={20} className="text-gold" />
                    <h4 className="mt-4 font-display text-base text-cream">{f.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-mist/60">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-ink-soft to-midnight p-9 sm:p-14">
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <SectionLabel>Learn With Us</SectionLabel>
                <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl">
                  Sit under the teaching <span className="text-gold">wherever you are.</span>
                </h2>
                <p className="mt-4 max-w-xl text-mist/65">
                  Messages, conferences and gatherings are available through our video library and Liteman
                  Radio.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/videos"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft"
                >
                  <BookOpen size={16} /> Video library
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/radio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Radio size={15} /> Listen live
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.div>
  )
}
