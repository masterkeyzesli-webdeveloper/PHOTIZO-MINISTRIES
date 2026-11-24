import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Radio } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about-photizo', label: 'About' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/videos', label: 'Videos' },
  { to: '/radio', label: 'Radio' },
  { to: '/blog', label: 'Journal' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="https://photizoministries.org/wp-content/uploads/2023/08/logo-1-1.png"
            alt="Photizo Ministries logo"
            className="h-10 sm:h-12 w-auto brightness-0 invert opacity-95 group-hover:opacity-100 transition"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `relative font-body text-[12px] tracking-[0.16em] uppercase transition-colors duration-300 ${
                  isActive ? 'text-gold' : 'text-cream/75 hover:text-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-gold"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <a
            href="https://litemanradio.mixlr.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase text-midnight hover:bg-gold-soft transition-all duration-300"
          >
            <Radio size={14} /> Listen Live
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cream p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-gold/10"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    `text-sm tracking-[0.2em] uppercase ${isActive ? 'text-gold' : 'text-cream/85'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href="https://litemanradio.mixlr.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs tracking-[0.2em] uppercase text-midnight"
              >
                <Radio size={14} /> Listen Live
              </a>
              <a
                href="https://wa.me/2348091592000?text=Hello%20Photizo%20Ministries%2C%20I%27d%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full border border-gold/60 px-5 py-3 text-xs tracking-[0.2em] uppercase text-gold"
              >
                Connect With Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
