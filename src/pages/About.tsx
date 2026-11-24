import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, HeartHandshake, Users, Globe2, Check } from 'lucide-react'
import Reveal, { SectionLabel } from '../components/Reveal'

const convictions = [
  {
    icon: BookOpen,
    title: 'The Clarity of the Word',
    text: 'We teach Scripture plainly and faithfully, helping people understand and rightly divide the Word of truth.',
  },
  {
    icon: HeartHandshake,
    title: 'The Power of Prayer',
    text: 'Prayer is not a formality to us. It is how we carry one another and seek the heart of God together.',
  },
  {
    icon: Users,
    title: 'The Gift of Community',
    text: 'We belong to one another. Discipleship grows in relationship, and no one should walk this road alone.',
  },
  {
    icon: Globe2,
    title: 'The Reach of the Gospel',
    text: 'Through digital media we take the message beyond our walls, to lives and nations around the world.',
  },
]

const commitments = [
  'To love every person as Christ has loved us',
  'To teach the Word with clarity and revelation',
  'To pray with and for one another',
  'To make room for genuine fellowship',
  'To carry the Gospel beyond our walls',
]

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0">
          <img
            src="https://photizoministries.org/wp-content/uploads/2026/08/about-sec1.jpg"
            alt="Photizo Ministries"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-midnight/75 to-midnight" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>About Photizo</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              A family growing in <span className="text-gradient">faith and purpose.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              Photizo Ministries exists to teach the Word of God with clarity and revelation, and to see
              people transformed by the truth of His Word.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-glow py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl">Our heart</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-mist/70">
                <p>
                  At Photizo Ministries, we believe that every person is deeply loved, valued, and welcomed.
                  Just as Christ loved the Church, we are committed to reflecting His love through our words,
                  actions, and fellowship.
                </p>
                <p>
                  We are a family of believers growing together in faith, purpose, and the knowledge of
                  Christ. Through worship, the Word, prayer, and genuine community, we encourage one another
                  to become more like Him.
                </p>
                <p>
                  Our desire is to see people transformed by the truth of God’s Word and equipped to walk in
                  the fullness of His purpose — reaching lives around the world through the teaching we share.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://photizoministries.org/wp-content/uploads/2023/08/mission.jpg"
                  alt="The Word of God"
                  className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://photizoministries.org/wp-content/uploads/2023/08/photizo1-1.jpg"
                    alt="Worship at Photizo"
                    className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://photizoministries.org/wp-content/uploads/2022/06/67479468_2426869710882407_709940866914975744_n.webp"
                    alt="Photizo community"
                    className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Convictions */}
      <section className="bg-ink/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel>What We Believe</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight text-cream sm:text-4xl">
              Convictions that shape <span className="text-gold">everything we do.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {convictions.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="group flex h-full gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-7 transition-colors hover:border-gold/25">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                    <c.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-cream">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/60">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>Our Commitment</SectionLabel>
            <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl">
              We commit ourselves <span className="text-gold">to His people.</span>
            </h2>
            <p className="mt-5 text-mist/70">
              These are the simple promises that guide our life together as a ministry family.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-sm text-mist/80">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-24 sm:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-ink-soft to-midnight p-9 text-center sm:p-14">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">
                Come and see what God is doing.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-mist/65">
                Whether you are exploring faith or looking for a family to belong to, there is a place for you here.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft"
                >
                  Get in touch
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
                >
                  Back home
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.div>
  )
}
