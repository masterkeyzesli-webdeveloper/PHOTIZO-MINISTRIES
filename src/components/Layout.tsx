import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'
import FloatingAI from './FloatingAI'
import ScrollToTop from './ScrollToTop'
import RadioStrip from './RadioStrip'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-midnight text-cream font-body">
      <ScrollToTop />
      <Navbar />
      <main>{children}</main>
      <RadioStrip />
      <Footer />
      <FloatingAI />
      <FloatingWhatsApp />
    </div>
  )
}
