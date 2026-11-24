import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, MessageCircleQuestion, CalendarDays, Tv, Compass, Users } from 'lucide-react'
import Reveal, { SectionLabel } from '../components/Reveal'

const nextSteps = [
  {
    icon: Tv,
    step: '01',
    title: 'Watch & Learn',
    text: 'Connect with Photizo Ministries through electronic media and receive sound biblical teaching from wherever you are — through television, YouTube and Liteman Radio.',
    to: '/videos',
    cta: 'Browse the video library',
  },
  {
    icon: MessageCircleQuestion,
    step: '02',
    title: 'Engage & Ask Questions',
    text: 'Our teaching is interactive. Viewers participate as a class, ask questions, seek clarification, and engage with the Word as it is opened up.',
    to: '/contact',
    cta: 'Ask a question',
  },
  {
    icon: CalendarDays,
    step: '03',
    title: 'Join Our Programmes',
    text: 'Take part in our seminars, workshops, teaching crusades and itinerant programmes. We also welcome anointed ministers with special callings to share their ministries.',
    to: '/radio',
    cta: 'Hear past gatherings',
  },
]

export default function AboutPhotizo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative flex min-h-[58vh] items-end overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0">
          <img
            src="https://photizoministries.org/wp-content/uploads/2026/08/about-sec1.jpg"
            alt="Photizo Ministries gathering"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 via-midnight/75 to-midnight" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>About Photizo</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              A family united <span className="text-gradient">in Christ.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              Every person is deeply loved, valued and welcomed here. Just as Christ loved the Church, we are
              committed to reflecting His love through our words, actions and fellowship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-glow py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl">
              Growing together in faith, purpose and the knowledge of Christ.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-4 text-base leading-relaxed text-mist/70">
              <p>
                We are a family of believers growing together in faith, purpose, and the knowledge of Christ.
                Through worship, the Word, prayer, and genuine community, we encourage one another to become
                more like Him.
              </p>
              <p>
                Photizo is a ministry committed to teaching the Word of God with clarity and revelation,
                bringing understanding to previously mysterious passages and reaching lives around the world
                through digital media.
              </p>
              <p>
                Our desire is to see people transformed by the truth of God’s Word and equipped to walk in the
                fullness of His purpose.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-ink/40 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-3xl border border-gold/15 bg-white/[0.03] p-8 sm:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal/10 blur-3xl" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <BookOpen size={22} />
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80">Our Mission</p>
                <h3 className="mt-3 font-display text-2xl leading-snug text-cream sm:text-3xl">
                  Understanding the Word changes everything.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist/70">
                  We believe that understanding and correctly interpreting the Word of God is essential for
                  spiritual growth and living a purposeful life. Join us as we embark on a transformative
                  journey of knowledge and insight, guiding you to rightly divide the Word.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-gold/15 bg-white/[0.03] p-8 sm:p-10">
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <Compass size={22} />
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold/80">Our Vision</p>
                <h3 className="mt-3 font-display text-2xl leading-snug text-cream sm:text-3xl">
                  To spark spiritual fires in the Body of Christ.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist/70">
                  The vision of Photizo Ministries is to spark spiritual fires in the Body of Christ,
                  enlightening men and women of the Lord to be spiritually alert to the plans and purposes of
                  God as couched in His Word — helping them enter into their divine destinies.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we belong to */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://photizoministries.org/wp-content/uploads/2023/08/mission.jpg"
                alt="Open Bible"
                className="h-[360px] w-full object-cover sm:h-[460px]"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <SectionLabel>We Belong</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl">
                A people, not an audience.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-mist/75">
                You were not made to follow Jesus alone. We belong not merely to a local congregation but to a
                people — carried in prayer, taught in the Word, and strengthened by fellowship.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'Worship and the Word at the centre',
                  'Prayer that carries one another',
                  'Fellowship that feels like family',
                  'Teaching that equips for destiny',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-mist/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                      <Users size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Next steps */}
      <section className="relative bg-ink/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel>What’s Next?</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-cream sm:text-4xl">
              Next steps: grow, engage, <span className="text-gold">belong.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-mist/65">
              Discover how you can connect with Photizo Ministries, receive sound biblical teaching,
              participate in our programmes, and grow in your understanding of God’s Word.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {nextSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-7 transition-colors hover:border-gold/25">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                      <s.icon size={22} />
                    </span>
                    <span className="font-display text-2xl text-gold/25">{s.step}</span>
                  </div>
                  <h3 className="font-display text-lg text-cream">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist/60">{s.text}</p>
                  <Link
                    to={s.to}
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
                  >
                    {s.cta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-ink-soft to-midnight p-9 text-center sm:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">
                Meet the people behind the ministry.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist/65">
                Read the story and calling of our pastor, or reach out and let us know how we can stand with you.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/leadership"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft"
                >
                  Our leadership
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.div>
  )
}
