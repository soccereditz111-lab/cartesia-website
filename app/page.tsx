import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-wide text-white/50">
            TORONTO · SYSTEMS FOR LOCAL BUSINESSES
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Your online first impression should match the quality of your work.
          </h1>
          <p className="mt-6 text-lg text-white/70 md:text-xl">
            Cartesia installs modern websites and local visibility systems for traditional local businesses. Fixed scope. Clear numbers. No endless revisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/growth-engine" className="btn-gradient rounded-full px-8 py-3.5 text-sm">
              See the Growth Engine
            </Link>
            <Link
              href="/demos"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm text-white transition hover:border-white/40"
            >
              View Live Demos
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold md:text-3xl">The real cost of an outdated first impression</h2>
          <p className="mt-6 max-w-2xl text-white/70">
            Most traditional local businesses lose high-value clients before the conversation even starts. An outdated website or weak Google presence signals that the business is behind — even when the actual work is excellent. Cartesia fixes that gap with a clear, fixed-scope system.
          </p>
        </div>
      </section>

      {/* Two Offers */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-2xl font-bold md:text-3xl">Two clear offers</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Link
            href="/growth-engine"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
          >
            <div className="mb-4 text-sm font-medium text-white/50">CORE OFFER</div>
            <h3 className="text-xl font-bold">Cartesia Growth Engine</h3>
            <p className="mt-3 text-white/60">
              $799/month for 3 months. Modern website + SEO + AEO + Google Business Profile + monthly reports. Default close: First + Last ($1,598).
            </p>
            <div className="mt-6 text-sm font-medium gradient-text group-hover:underline">
              View full details →
            </div>
          </Link>

          <Link
            href="/reviews"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20"
          >
            <div className="mb-4 text-sm font-medium text-white/50">UPSELL</div>
            <h3 className="text-xl font-bold">Cartesia Reviews System</h3>
            <p className="mt-3 text-white/60">
              $149/month. Review request system + monitoring + simple monthly report. Built for map-pack dominance and trust.
            </p>
            <div className="mt-6 text-sm font-medium gradient-text group-hover:underline">
              View full details →
            </div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to close the gap?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Fixed scope. Money first. Clear delivery. Email us or explore the Growth Engine.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:abdiwork81@gmail.com"
              className="btn-gradient rounded-full px-8 py-3.5 text-sm"
            >
              abdiwork81@gmail.com
            </a>
            <Link
              href="/growth-engine"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm transition hover:border-white/40"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}