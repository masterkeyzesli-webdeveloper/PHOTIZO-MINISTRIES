import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Clock, BookOpen, Quote } from 'lucide-react'
import { posts } from '../data/posts'
import Reveal, { SectionLabel } from '../components/Reveal'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 text-center">
        <SectionLabel className="justify-center">Not Found</SectionLabel>
        <h1 className="mt-5 font-display text-3xl text-cream sm:text-4xl">That article isn’t here.</h1>
        <p className="mt-3 max-w-md text-mist/60">
          The link may have changed. Browse the journal to find what you were looking for.
        </p>
        <Link
          to="/blog"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-midnight transition-colors hover:bg-gold-soft"
        >
          Back to the journal <ArrowRight size={15} />
        </Link>
      </section>
    )
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
    >
      {/* Header */}
      <section className="relative overflow-hidden bg-hero-glow pb-14 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_0%,rgba(212,168,83,0.10),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
          >
            <ArrowLeft size={14} /> The Journal
          </Link>
          <p className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-gold/80">
            {post.category}
            <span className="h-1 w-1 rounded-full bg-gold/50" />
            <span className="text-cream/45">{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-gold/50" />
            <span className="inline-flex items-center gap-1.5 text-cream/45"><Clock size={12} /> {post.readTime}</span>
          </p>
          <h1 className="mt-5 font-display text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-mist/70">{post.excerpt}</p>
        </div>
      </section>

      {/* Body */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <figure className="rounded-2xl border border-gold/20 bg-white/[0.03] p-7">
              <Quote size={22} className="text-gold/50" />
              <blockquote className="mt-3 font-display text-lg leading-relaxed text-cream/90 sm:text-xl">
                “{post.scripture.text}”
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.25em] text-gold/70">
                {post.scripture.ref}
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-10 space-y-6">
            {post.body.map((block, i) =>
              block.startsWith('## ') ? (
                <h2 key={i} className="pt-2 font-display text-2xl text-cream">
                  {block.replace('## ', '')}
                </h2>
              ) : (
                <p key={i} className="text-base leading-[1.85] text-mist/75">
                  {block}
                </p>
              ),
            )}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/5 bg-white/[0.03] p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-lg text-cream">Want to go deeper?</p>
              <p className="mt-1 text-sm text-mist/60">Watch the teaching or ask us a question directly.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/videos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-midnight transition-colors hover:bg-gold-soft"
              >
                <BookOpen size={15} /> Watch teachings
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-cream/20 px-6 py-3 text-sm text-cream transition-colors hover:border-gold/50 hover:text-gold"
              >
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-white/5 bg-ink/40 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionLabel>Keep Reading</SectionLabel>
            <h2 className="mt-5 font-display text-2xl text-cream sm:text-3xl">More from the journal</h2>
          </Reveal>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-teal/80">{p.category}</span>
                  <h3 className="mt-3 font-display text-base leading-snug text-cream transition-colors group-hover:text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-xs leading-relaxed text-mist/55">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-gold/80">
                    Read <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </motion.article>
  )
}
