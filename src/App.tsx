import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import AboutPhotizo from './pages/AboutPhotizo'
import Leadership from './pages/Leadership'
import Videos from './pages/Videos'
import Radio from './pages/Radio'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Navigate to="/about-photizo" replace />} />
          <Route path="/about-photizo" element={<AboutPhotizo />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
