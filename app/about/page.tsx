import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About Cartesia</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Cartesia is a Toronto-based systems and web development studio. We work with traditional local business owners who need a modern online first impression without the usual agency drama.
        </p>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Operating philosophy</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-semibold">Fixed scope</h3>
              <p className="mt-2 text-white/60">
                Everything is defined up front. No open-ended retainers. No surprise invoices for “extra rounds.”
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Money first</h3>
              <p className="mt-2 text-white/60">
                No work starts until payment clears. This protects both sides and filters for serious buyers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Systems over features</h3>
              <p className="mt-2 text-white/60">
                We install complete systems (website + SEO + AEO + GBP) rather than selling isolated tactics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Clear numbers</h3>
              <p className="mt-2 text-white/60">
                $799/month for the Growth Engine. $149/month for Reviews. Simple. Transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Process overview</h2>
        <ol className="mt-8 space-y-6">
          {[
            { step: '01', title: 'Analyze & Discover', desc: 'Understand the business, current online presence, and primary local opportunity.' },
            { step: '02', title: 'Plan & Strategy', desc: 'Lock scope, keyword cluster, and page list. Confirm assets and timelines.' },
            { step: '03', title: 'Build & Integrate', desc: 'Website, technical SEO, GBP optimization, conversion setup.' },
            { step: '04', title: 'Launch & Report', desc: 'Go live, hand over, and deliver monthly visibility reports for the remaining term.' },
          ].map((item) => (
            <li key={item.step} className="flex gap-6">
              <div className="text-sm font-medium text-white/40">{item.step}</div>
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="mt-1 text-white/60">{item.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-4 text-white/70">
            Based in Toronto, Ontario.
          </p>
          <a
            href="mailto:abdiwork81@gmail.com"
            className="mt-6 inline-block text-lg font-medium gradient-text"
          >
            abdiwork81@gmail.com
          </a>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/growth-engine" className="btn-gradient rounded-full px-8 py-3.5 text-sm">
              Growth Engine
            </Link>
            <Link
              href="/reviews"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm transition hover:border-white/40"
            >
              Reviews System
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}