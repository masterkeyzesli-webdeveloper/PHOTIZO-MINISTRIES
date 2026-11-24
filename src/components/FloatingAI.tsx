import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, MessageCircle } from 'lucide-react'

type Msg = { from: 'bot' | 'user'; text: string }

const QUICK = [
  'Listen live?',
  'Watch teachings',
  'Prayer request',
  'Meet the pastor',
]

function reply(input: string): string {
  const q = input.toLowerCase()
  if (q.includes('service') || q.includes('time') || q.includes('worship') || q.includes('sunday'))
    return "We'd love to welcome you! For current service times and gathering details, please reach out on WhatsApp at +234 809 159 2000 or check our social pages. Our team will be happy to guide you."
  if (q.includes('pray') || q.includes('prayer') || q.includes('request'))
    return "We believe in the power of prayer. You can share your prayer request on our Contact page, or message us directly on WhatsApp at +234 809 159 2000. Our team would be honored to pray with you."
  if (q.includes('contact') || q.includes('phone') || q.includes('whatsapp') || q.includes('reach'))
    return "You can reach Photizo Ministries at +234 809 159 2000 (call or WhatsApp). You can also connect with us on YouTube, Instagram, and Facebook — links are in the footer!"
  if (q.includes('about') || q.includes('who') || q.includes('photizo') || q.includes('mission'))
    return "Photizo Ministries is committed to teaching the Word of God with clarity and revelation. We bring understanding to God's Word and reach lives around the world through digital media, helping people walk in the fullness of His purpose."
  if (q.includes('radio') || q.includes('listen') || q.includes('live') || q.includes('mixlr') || q.includes('station'))
    return "Liteman Radio is our broadcast home — live teaching, conference sessions and weekly programmes. Tap ‘Listen Live’ in the menu, or visit the Radio page to use the player. Past broadcasts are in the recordings archive."
  if (q.includes('video') || q.includes('watch') || q.includes('youtube') || q.includes('teachings') || q.includes('sermon'))
    return "Our video library has messages, teaching series and prophetic reviews — including the two-part series on the Word of Knowledge and the Word of Wisdom. Visit the Videos page or our YouTube channel, Photizo Atmosphower Media."
  if (q.includes('blog') || q.includes('journal') || q.includes('read') || q.includes('article') || q.includes('devotional'))
    return "You'll find devotionals and teaching notes in The Journal — on rightly dividing the Word, sanctification and consecration, identity, and the gifts of the Spirit. New articles are added regularly."
  if (q.includes('leader') || q.includes('pastor') || q.includes('toks') || q.includes('oshokoya') || q.includes('who leads'))
    return "Pastor Ebenezer Olatokunbo Oshokoya — known as Pastor Toks — leads Photizo Ministries. Saved in 1985 and called into ministry in 1989, he teaches the Word with clarity and revelation and has a missionary work across West and Southern Africa. The Leadership page has his full story."
  if (q.includes('give') || q.includes('donate') || q.includes('support'))
    return "Thank you for your heart to support the mission! Your generosity makes a difference. Please visit the Support section on our home page or contact us on WhatsApp for giving details."
  if (q.includes('hello') || q.includes('hi') || q.includes('hey'))
    return "Hello! Welcome to Photizo Ministries. I'm here to help — ask me about our ministry, prayer requests, or how to get in touch."
  return "Thank you for your message! For a personal response, please reach us on WhatsApp at +234 809 159 2000 or visit our Contact page. How else can I help you today?"
}

export default function FloatingAI() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: 'bot', text: "Welcome to Photizo Ministries! I'm your assistant. How can I help you today?" },
  ])
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [msgs, open])

  const send = (text: string) => {
    const t = text.trim()
    if (!t) return
    setMsgs((m) => [...m, { from: 'user', text: t }])
    setInput('')
    setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', text: reply(t) }])
    }, 450)
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[calc(100vw-3rem)] max-w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-gold/20 bg-[#111a2e]/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-[#18243d] to-[#111a2e] border-b border-gold/15">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                  <Sparkles size={17} className="text-gold" />
                </div>
                <div>
                  <p className="font-display text-sm text-cream tracking-wide">Photizo Assistant</p>
                  <p className="text-[11px] text-teal/80 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" /> Here to help</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-cream/60 hover:text-gold transition" aria-label="Close assistant">
                <X size={20} />
              </button>
            </div>

            <div className="h-72 overflow-y-auto px-4 py-4 space-y-3">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed rounded-2xl ${
                      m.from === 'user'
                        ? 'bg-gold text-midnight rounded-br-md'
                        : 'bg-white/5 text-cream/90 border border-white/5 rounded-bl-md'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-[11px] px-3 py-1.5 rounded-full border border-gold/25 text-cream/70 hover:text-gold hover:border-gold/50 transition"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); send(input) }}
              className="p-3 border-t border-gold/10 flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-cream placeholder:text-cream/35 focus:outline-none focus:border-gold/40"
              />
              <button
                type="submit"
                aria-label="Send"
                className="w-10 h-10 rounded-full bg-gold text-midnight flex items-center justify-center hover:bg-gold-soft transition shrink-0"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        aria-label="Open assistant"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold to-[#b8892e] text-midnight shadow-lg shadow-gold/25 hover:scale-110 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-teal rounded-full border-2 border-midnight" />
        )}
      </motion.button>
    </div>
  )
}
