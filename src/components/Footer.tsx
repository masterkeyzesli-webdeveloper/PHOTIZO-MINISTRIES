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
  ['Leadership', '/leadership'],
  ['Video Library', '/videos'],
  ['Liteman Radio', '/radio'],
  ['The Journal', '/blog'],
  ['Contact', '/contact'],
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e6d8c3] bg-[#f4ede2] pt-16 pb-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_100%,rgba(222,137,37,0.12),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <img
              src="https://photizoministries.org/wp-content/uploads/2023/08/logo-1-1.png"
              alt="Photizo Ministries"
              width={192}
              height={64}
              className="mb-5 h-12 w-auto object-contain"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#4a3a33]">
              A ministry committed to teaching the Word of God with clarity and revelation, transforming lives
              through the truth of God's Word.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c6ad] text-[#4a3a33] transition-all duration-300 hover:border-gold hover:bg-gold hover:text-[#241610]"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
            <Link
              to="/radio"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1c6f5f]/30 bg-[#1c6f5f]/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#1c6f5f] hover:bg-[#1c6f5f]/15 transition-colors"
            >
              <Radio size={13} /> Liteman Radio
            </Link>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.25em] text-[#8f4a0c]">Explore</h4>
            <ul className="space-y-3 text-sm">
              {pages.map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="group inline-flex items-center gap-1 text-[#4a3a33] transition-colors hover:text-[#a95a10]">
                    {label}
                    <ArrowUpRight size={13} className="opacity-0 -translate-y-0.5 translate-x-0.5 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.25em] text-[#8f4a0c]">Ministry</h4>
            <ul className="space-y-3 text-sm text-[#4a3a33]">
              <li><a href="/#mission" className="transition-colors hover:text-[#a95a10]">Our Mission</a></li>
              <li><a href="/#beliefs" className="transition-colors hover:text-[#a95a10]">What We Believe</a></li>
              <li><a href="/#prayer" className="transition-colors hover:text-[#a95a10]">Prayer Request</a></li>
              <li><a href="/#giving" className="transition-colors hover:text-[#a95a10]">Support the Mission</a></li>
              <li>
                <a
                  href="https://litemanradio.mixlr.com/recordings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#a95a10]"
                >
                  Broadcast Archive
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 font-display text-sm uppercase tracking-[0.25em] text-[#8f4a0c]">Contact</h4>
            <ul className="space-y-4 text-sm text-[#4a3a33]">
              <li>
                <a href="tel:+2348091592000" className="flex items-start gap-3 transition-colors hover:text-[#a95a10]">
                  <Phone size={16} className="mt-0.5 shrink-0 text-[#b96a12]" />
                  <span>+234 809 159 2000</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348091592000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition-colors hover:text-[#a95a10]">
                  <Mail size={16} className="mt-0.5 shrink-0 text-[#b96a12]" />
                  <span>WhatsApp: +234 809 159 2000</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#b96a12]" />
                <span>Photizo Ministries<br />Reaching lives around the world</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-14 mb-6 opacity-30" />
        <div className="flex flex-col items-center justify-between gap-4 text-xs tracking-wide text-[#6b5a51] sm:flex-row">
          <p>© {new Date().getFullYear()} Photizo Ministries. All rights reserved.</p>
          <p className="font-display uppercase tracking-[0.2em] text-[#a95a10]">Light of the Gospel</p>
        </div>
      </div>
    </footer>
  )
}
