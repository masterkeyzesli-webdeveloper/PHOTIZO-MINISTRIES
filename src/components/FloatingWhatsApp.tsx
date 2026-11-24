import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/2348091592000?text=Hello%20Photizo%20Ministries%2C%20I%27d%20like%20to%20connect%20with%20you.'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#111a2e] border border-gold/20 px-4 py-2 text-xs text-cream/90 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
        Chat on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 pulse-ring">
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.129 6.742 3.047 9.379L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.594c-.39 1.1-1.932 2.012-3.168 2.277-.844.18-1.946.324-5.656-1.216-4.746-1.968-7.8-6.792-8.038-7.104-.228-.312-1.916-2.55-1.916-4.864 0-2.314 1.214-3.452 1.644-3.922.39-.426 1.032-.622 1.646-.622.2 0 .38.01.542.018.474.02.712.048 1.024.796.39.942 1.34 3.262 1.456 3.502.118.24.236.556.076.868-.15.322-.282.522-.522.83-.24.308-.468.544-.708.876-.22.29-.468.6-.19 1.138.278.528 1.238 2.042 2.658 3.308 1.828 1.628 3.312 2.148 3.836 2.37.39.164.854.126 1.138-.18.362-.39.808-1.036 1.262-1.672.322-.458.73-.516 1.158-.354.436.152 2.754 1.298 3.226 1.536.472.238.786.354.904.554.116.2.116 1.158-.274 2.258z" />
        </svg>
      </span>
    </motion.a>
  )
}
