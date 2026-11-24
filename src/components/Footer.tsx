import { Link } from 'react-router-dom'
import { Youtube, Instagram, Facebook, Phone, Mail, MapPin, ArrowUpRight, Radio } from 'lucide-react'

const socials = [
  { href: 'https://youtube.com/@photizoatmospowermedia?si=RxSjqv5JTfW58IJP', icon: Youtube, label: 'YouTube' },
  { href: 'https://www.instagram.com/photizoministries/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/photizo.ministries', icon: Facebook, label: 'Facebook' },
]

const pages = [
  ['Home', '/'],
  ['About Photizo', '/about-photizo'],
  ['Our Story', '/about'],
  ['Leadership', '/leadership'],
  ['Video Library', '/videos'],
  ['Liteman Radio', '/radio'],
  ['The Journal', '/blog'],
]

export default function Footer() {
  return (
    <footer className="relative bg-[#080e19] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(212,168,83,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="https://photizoministries.org/wp-content/uploads/2023/08/logo-1-1.png"
              alt="Photizo Ministries"
              className="h-12 w-auto brightness-0 invert opacity-95 mb-5"
            />
            <p className="text-cream/65 text-sm leading-relaxed max-w-xs">
              A ministry committed to teaching the Word of God with clarity and revelation, transforming lives
              through the truth of God's Word.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-gold/25 flex items-center justify-center text-cream/70 hover:text-midnight hover:bg-gold hover:border-gold transition-all duration-300"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
            <Link
              to="/radio"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-teal hover:bg-teal/15 transition-colors"
            >
              <Radio size={13} /> Liteman Radio
            </Link>
          </div>

          <div>
            <h4 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {pages.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-cream/65 hover:text-gold transition-colors inline-flex items-center gap-1 group">
                    {label}
                    <ArrowUpRight size={13} className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-5">Ministry</h4>
            <ul className="space-y-3 text-sm text-cream/65">
              <li><a href="/#mission" className="hover:text-gold transition-colors">Our Mission</a></li>
              <li><a href="/#beliefs" className="hover:text-gold transition-colors">What We Believe</a></li>
              <li><a href="/#prayer" className="hover:text-gold transition-colors">Prayer Request</a></li>
              <li><a href="/#giving" className="hover:text-gold transition-colors">Support the Mission</a></li>
              <li>
                <a
                  href="https://litemanradio.mixlr.com/recordings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Broadcast Archive
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold text-sm tracking-[0.25em] uppercase mb-5">Contact</h4>
            <ul className="space-y-4 text-sm text-cream/65">
              <li>
                <a href="tel:+2348091592000" className="flex items-start gap-3 hover:text-gold transition-colors">
                  <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>+234 809 159 2000</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348091592000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-gold transition-colors">
                  <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                  <span>WhatsApp: +234 809 159 2000</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>Photizo Ministries<br />Reaching lives around the world</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-14 mb-6 opacity-30" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40 tracking-wide">
          <p>© {new Date().getFullYear()} Photizo Ministries. All rights reserved.</p>
          <p className="font-display tracking-[0.2em] text-gold/50 uppercase">Light of the Gospel</p>
        </div>
      </div>
    </footer>
  )
}
