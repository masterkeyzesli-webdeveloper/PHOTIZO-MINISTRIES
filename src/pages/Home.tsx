import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Play,
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Users,
  Globe2,
  Quote,
  Youtube,
  Instagram,
  Facebook,
  Phone,
  Sparkles,
  Radio,
  PenLine,
  Headphones,
} from 'lucide-react'
import Reveal, { SectionLabel } from '../components/Reveal'

const YOUTUBE = 'https://youtube.com/@photizoatmospowermedia?si=RxSjqv5JTfW58IJP'
const WHATSAPP = 'https://wa.me/2348091592000?text=Hello%20Photizo%20Ministries%2C%20I%27d%20like%20to%20connect.'

const pillars = [
  {
    icon: BookOpen,
    title: 'The Word, Made Plain',
    text: 'Teaching Scripture with clarity and revelation — bringing understanding to passages that once felt mysterious.',
  },
  {
    icon: HeartHandshake,
    title: 'A Life of Prayer',
    text: 'We believe in the power of prayer and stand with you through whatever season you are walking through.',
  },
  {
    icon: Users,
    title: 'Genuine Community',
    text: 'Faith was never meant to be lived alone. We belong not merely to a church, but to a people.',
  },
  {
    icon: Globe2,
    title: 'Reaching the World',
    text: 'Through digital media, the truth of God’s Word travels beyond walls to transform lives everywhere.',
  },
]

const scripture = {
  ref: '2 Timothy 2:15',
  text: '“Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.”',
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-hero-glow">
        <div className="absolute inset-0">
          <motion.img
            src="https://photizoministries.org/wp-content/uploads/2023/08/photizo1-1.jpg"
            alt="Photizo Ministries congregation in worship"
            className="h-full w-full object-cover opacity-40"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-midnight/85 via-midnight/70 to-midnight" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,transparent,rgba(11,18,32,0.75))]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 py-32 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-7 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-gold/90 backdrop-blur">
              <Sparkles size={13} /> Photizo Ministries
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl leading-[1.08] text-cream sm:text-6xl lg:text-7xl"
          >
            Committed to the
            <br />
            <span className="text-gradient">Gospel of Jesus Christ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mist/80 sm:text-lg"
          >
            A family of believers growing together in faith, purpose, and the knowledge of Christ —
            teaching the Word of God with clarity and revelation, and reaching lives around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.68 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium tracking-wide text-midnight transition-all duration-300 hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/25 sm:w-auto"
            >
              I’m New Here
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={YOUTUBE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm tracking-wide text-cream transition-all duration-300 hover:border-gold/60 hover:text-gold sm:w-auto"
            >
              <Play size={16} /> Watch &amp; Connect
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/20 p-1.5">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-gold"
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── Name meaning strip ─────────────────────────────── */}
      <section className="relative border-y border-gold/10 bg-ink/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
          <p className="font-display text-lg text-gold/90">φωτίζω · photizō</p>
          <p className="text-sm tracking-wide text-mist/70">
            To give light · to bring to light · to make plain
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-cream/40">Light of the Gospel</p>
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────── */}
      <section id="about" className="section-glow relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold/40" />
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src="https://photizoministries.org/wp-content/uploads/2026/08/about-sec1.jpg"
                alt="Photizo Ministries family"
                className="h-[420px] w-full object-cover sm:h-[520px]"
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
            </div>
            <div className="absolute -bottom-6 -right-2 max-w-[220px] rounded-xl border border-gold/20 bg-ink/90 p-5 backdrop-blur sm:right-6">
              <p className="font-display text-3xl text-gold">One</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">Family united in Christ</p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>About Photizo</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
                A Family United <span className="text-gold">in Christ</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base leading-relaxed text-mist/75">
                At Photizo Ministries, we believe that every person is deeply loved, valued, and welcomed.
                Just as Christ loved the Church, we are committed to reflecting His love through our words,
                actions, and fellowship.
              </p>
              <p className="mt-4 text-base leading-relaxed text-mist/65">
                We are a family of believers growing together in faith, purpose, and the knowledge of Christ.
                Through worship, the Word, prayer, and genuine community, we encourage one another to become
                more like Him.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:text-gold-soft"
              >
                Read our story
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pillars ────────────────────────────────────────── */}
      <section id="beliefs" className="relative bg-ink/40 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionLabel className="justify-center">What Drives Us</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
                Rooted in the Word. <span className="text-gradient">Alive in the Spirit.</span>
              </h2>
              <p className="mt-5 text-mist/65">
                Everything we do flows from a desire to see people transformed by the truth of God’s Word
                and equipped to walk in the fullness of His purpose.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-7 hover:border-gold/25 hover:bg-white/[0.05] transition-colors duration-300"
                >
                  <span className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                    <p.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg text-cream">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/60">{p.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ────────────────────────────────────────── */}
      <section id="mission" className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_75%_50%,rgba(212,168,83,0.09),transparent_65%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <Reveal>
              <SectionLabel>Our Mission</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
                Understanding the Word <span className="text-gold">changes everything.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-base leading-relaxed text-mist/75">
                We believe that understanding and correctly interpreting the Word of God is essential for
                spiritual growth and living a purposeful life. Join us as we embark on a transformative
                journey of knowledge and insight, guiding you to rightly divide the Word.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <blockquote className="mt-8 border-l-2 border-gold/50 pl-5">
                <Quote size={20} className="mb-2 text-gold/50" />
                <p className="font-display text-lg leading-relaxed text-cream/90">{scripture.text}</p>
                <cite className="mt-3 block text-xs uppercase tracking-[0.25em] text-gold/70 not-italic">
                  {scripture.ref}
                </cite>
              </blockquote>
            </Reveal>
          </div>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-gold/40" />
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src="https://photizoministries.org/wp-content/uploads/2023/08/mission.jpg"
                  alt="Open Bible"
                  className="h-[380px] w-full object-cover sm:h-[480px]"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: 'easeOut' }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Community ──────────────────────────────────────── */}
      <section className="relative bg-ink/50 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src="https://photizoministries.org/wp-content/uploads/2022/06/67479468_2426869710882407_709940866914975744_n.webp"
                alt="Photizo Ministries community"
                className="h-[360px] w-full object-cover sm:h-[460px]"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>We Belong</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
                Community is where <span className="text-gold">discipleship happens.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-mist/75">
                The Christian faith is not intended to be lived in isolation. We were made for a relationship
                with God and for relationships with each other. We belong not merely to a local church, but
                to a people.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-4">
                {[
                  'Worship and the Word at the centre',
                  'Prayer that carries one another',
                  'Fellowship that feels like family',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-mist/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                      <ArrowRight size={12} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Media / YouTube ────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel>Photizo Atmosphower Media</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
                Carrying the message <span className="text-gold">beyond the walls.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-mist/70">
                Through digital media, we bring the clarity of God’s Word to lives around the world.
                Watch messages, teachings, and moments of worship on our YouTube channel.
              </p>
              <a
                href={YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 px-7 py-3.5 text-sm tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-midnight"
              >
                <Youtube size={18} /> Visit our channel
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={YOUTUBE}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-gold/15"
              >
                <img
                  src="https://photizoministries.org/wp-content/uploads/2023/08/photizo1-1.jpg"
                  alt="Watch Photizo Ministries on YouTube"
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold text-midnight shadow-xl shadow-gold/30 transition-transform duration-300 group-hover:scale-110">
                    <Play size={26} className="ml-1" fill="currentColor" />
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">
                  <div>
                    <p className="font-display text-lg text-cream">Photizo Atmosphower Media</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-cream/55">YouTube Channel</p>
                  </div>
                  <Youtube size={22} className="text-cream/60" />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Explore the ministry ───────────────────────────── */}
      <section className="relative border-y border-gold/10 bg-ink/30 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionLabel>Go Deeper</SectionLabel>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-cream sm:text-4xl">
                More ways to <span className="text-gold">grow with us.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-md text-sm leading-relaxed text-mist/60">
                Meet the people behind the ministry, sit under the teaching, and read along with the journal.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                to: '/leadership',
                icon: Users,
                title: 'Our Leadership',
                text: 'The calling and story of Pastor Toks.',
              },
              {
                to: '/videos',
                icon: Play,
                title: 'Video Library',
                text: 'Messages, series and prophetic reviews.',
              },
              {
                to: '/radio',
                icon: Radio,
                title: 'Liteman Radio',
                text: 'Live broadcasts and the full archive.',
              },
              {
                to: '/blog',
                icon: PenLine,
                title: 'The Journal',
                text: 'Devotionals and teaching notes.',
              },
            ].map((c, i) => (
              <Reveal key={c.to} delay={i * 0.07}>
                <Link
                  to={c.to}
                  className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-midnight">
                    <c.icon size={19} />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-cream">{c.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist/60">{c.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-gold/80">
                    Explore
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-teal/20 bg-teal/[0.04] p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <Headphones size={20} className="shrink-0 text-teal" />
                <p className="text-sm text-cream/80">
                  <span className="font-display text-base text-cream">On air now:</span> Liteman Radio streams
                  teaching and worship around the clock.
                </p>
              </div>
              <a
                href="https://litemanradio.mixlr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-teal/40 px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] text-teal transition-colors hover:bg-teal/10"
              >
                Listen live <ArrowRight size={13} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Prayer CTA ─────────────────────────────────────── */}
      <section id="prayer" className="relative px-5 py-8 sm:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-ink-soft via-ink to-midnight p-9 sm:p-14">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <SectionLabel>Prayer Request</SectionLabel>
                <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl">
                  Whatever you’re going through, <span className="text-gold">you don’t face it alone.</span>
                </h2>
                <p className="mt-4 max-w-xl text-mist/70">
                  At Photizo Ministries, we believe in the power of prayer. Share your prayer request with us
                  and let our family stand with you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft"
                >
                  Submit a Prayer Request
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <Phone size={15} /> Pray With Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Giving ─────────────────────────────────────────── */}
      <section id="giving" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <SectionLabel>Support the Mission</SectionLabel>
              <h2 className="mt-5 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl">
                See what God can do <span className="text-gold">through you.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-mist/70">
                We are grateful for every act of support from the members of our community. Your generosity
                helps us teach the Word with clarity, reach lives through digital media, and care for those
                around us.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
                >
                  Give with a Grateful Heart
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-full border border-cream/20 px-7 py-3.5 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
                >
                  Learn about us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Connect ────────────────────────────────────────── */}
      <section className="relative border-t border-gold/10 bg-[#080e19] py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <Reveal>
            <SectionLabel className="justify-center">Stay Connected</SectionLabel>
            <h2 className="mt-5 font-display text-3xl text-cream sm:text-4xl">Walk with us</h2>
            <p className="mx-auto mt-4 max-w-xl text-mist/65">
              Follow Photizo Ministries for teaching, encouragement, and updates from our family.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              {[
                { href: YOUTUBE, icon: Youtube, label: 'YouTube' },
                { href: 'https://www.instagram.com/photizoministries/', icon: Instagram, label: 'Instagram' },
                { href: 'https://www.facebook.com/photizo.ministries', icon: Facebook, label: 'Facebook' },
                { href: WHATSAPP, icon: Phone, label: 'WhatsApp' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-cream/80 transition-all duration-300 hover:border-gold/40 hover:text-gold"
                >
                  <s.icon size={17} />
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  )
}
