import Reveal from '@/components/ui/reveal'
import { ArrowUpRight, Calendar } from 'lucide-react'

const posts = [
  {
    title: 'How We Cut Load Times by 60% with Edge Computing',
    excerpt: 'Migrating our clients to edge-first architecture reduced TTFB from 1.2s to under 200ms. Here is the exact playbook we followed.',
    date: 'Jun 10, 2026',
    category: 'Engineering',
    gradient: 'from-blue-600 to-blue-400',
  },
  {
    title: 'Building a Real-Time Dashboard That Handles 10M Events/Day',
    excerpt: 'A deep dive into the tech stack — WebSockets, Redis Streams, and React Query — that powers our analytics platform.',
    date: 'May 28, 2026',
    category: 'Case Study',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Why Your SaaS Needs a Design System (and How to Start)',
    excerpt: 'Components, tokens, and documentation — the three pillars that saved our team 40% in development time.',
    date: 'May 15, 2026',
    category: 'Design',
    gradient: 'from-indigo-600 to-blue-500',
  },
  {
    title: 'Shipping an MVP in 14 Days: Our Full-Stack Blueprint',
    excerpt: 'From concept to production — the frameworks, tools, and processes we use to launch software fast without cutting corners.',
    date: 'Apr 29, 2026',
    category: 'Process',
    gradient: 'from-blue-700 to-blue-400',
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-24 sm:py-32 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-blue-400 mb-4">
              Insights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white">
              Latest<span className="text-blue-400"> Articles</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
              Thoughts on engineering, design, and building products that scale.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <Reveal key={post.title}>
              <article className="group relative bg-dark-900/60 border border-blue-900/30 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-500">
                {/* Image area */}
                <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <span className="text-white/20 text-8xl font-bold select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs uppercase tracking-wider text-blue-400 font-medium">
                      {post.category}
                    </span>
                    <span className="text-white/30">·</span>
                    <span className="flex items-center gap-1.5 text-xs text-white/40">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-semibold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
                    onClick={e => e.preventDefault()}
                  >
                    Read more
                    <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
