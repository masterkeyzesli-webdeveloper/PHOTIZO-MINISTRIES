import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, Facebook, Youtube, Send, HeartHandshake } from 'lucide-react'
import Reveal, { SectionLabel } from '../components/Reveal'

const PHONE_DISPLAY = '+234 809 159 2000'
const WHATSAPP = 'https://wa.me/2348091592000'

export default function Contact() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [request, setRequest] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const message = [
      'Prayer Request — Photizo Ministries',
      '',
      `Name: ${name || '—'}`,
      `Contact: ${contact || '—'}`,
      '',
      request,
    ].join('\n')
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative overflow-hidden pb-16 pt-40">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_20%,rgba(79,209,197,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <SectionLabel>Get in Touch</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl">
              We would love to <span className="text-gradient">hear from you.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist/75">
              Reach out with a question, a prayer request, or simply to say hello. You are always welcome here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pb-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-3">
          {[
            {
              icon: Phone,
              label: 'Call us',
              value: PHONE_DISPLAY,
              href: 'tel:+2348091592000',
            },
            {
              icon: MessageCircle,
              label: 'WhatsApp',
              value: PHONE_DISPLAY,
              href: WHATSAPP,
            },
            {
              icon: HeartHandshake,
              label: 'Prayer',
              value: 'Share a request below',
              href: '#prayer-form',
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.05]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                  <c.icon size={22} />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.25em] text-cream/45">{c.label}</span>
                  <span className="mt-1 block font-display text-lg text-cream transition-colors group-hover:text-gold">
                    {c.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form + socials */}
      <section id="prayer-form" className="scroll-mt-28 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-gold/15 bg-ink/60 p-7 sm:p-10">
              <SectionLabel>Prayer Request</SectionLabel>
              <h2 className="mt-5 font-display text-2xl text-cream sm:text-3xl">
                Let us stand with you in prayer.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-mist/65">
                We believe in the power of prayer. Share what is on your heart — this form opens WhatsApp with
                your message ready to send.
              </p>

              <form onSubmit={submit} className="mt-7 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-cream/50">
                      Your name
                    </label>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-cream/25 focus:border-gold/50 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact" className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-cream/50">
                      Phone or email
                    </label>
                    <input
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Optional"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-cream/25 focus:border-gold/50 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="request" className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-cream/50">
                    Your prayer request
                  </label>
                  <textarea
                    id="request"
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    required
                    rows={5}
                    placeholder="Share what you would like us to pray about..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-cream placeholder:text-cream/25 focus:border-gold/50 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20 sm:w-auto"
                >
                  Send Prayer Request
                  <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-gold/15 bg-ink/60 p-7">
                <h3 className="font-display text-xl text-cream">Follow the ministry</h3>
                <p className="mt-2 text-sm text-mist/60">
                  Teaching, encouragement, and updates from our family to yours.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { href: 'https://youtube.com/@photizoatmospowermedia?si=RxSjqv5JTfW58IJP', icon: Youtube, label: 'YouTube', handle: '@photizoatmospowermedia' },
                    { href: 'https://www.instagram.com/photizoministries/', icon: Instagram, label: 'Instagram', handle: '@photizoministries' },
                    { href: 'https://www.facebook.com/photizo.ministries', icon: Facebook, label: 'Facebook', handle: 'Photizo Ministries' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-gold/25 hover:bg-white/[0.04]"
                    >
                      <s.icon size={19} className="text-gold" />
                      <span className="flex-1">
                        <span className="block text-sm text-cream">{s.label}</span>
                        <span className="block text-xs text-cream/40">{s.handle}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="relative overflow-hidden rounded-3xl border border-gold/15 bg-gradient-to-br from-ink-soft to-midnight p-7">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal/10 blur-2xl" />
                <p className="relative font-display text-lg leading-relaxed text-cream/90">
                  “Whatever you’re going through, you don’t have to face it alone.”
                </p>
                <p className="relative mt-3 text-xs uppercase tracking-[0.25em] text-gold/60">Photizo Ministries</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
