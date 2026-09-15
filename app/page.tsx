import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-28 pt-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.15em] text-white/40">
            Toronto · Med Spas & Aesthetic Clinics
          </p>
          <h1 className="text-[2.75rem] font-semibold leading-[1.1] tracking-tight md:text-[3.75rem]">
            Your online presence should match the quality of your work.
          </h1>
          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/55">
            Cartesia installs modern websites and local visibility systems for med spas, aesthetic clinics, and professional practices. Fixed scope. Clear numbers. No agency noise.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/growth-engine" className="btn-primary rounded-full px-7 py-3 text-[14px]">
              View Growth Engine
            </Link>
            <Link href="/demos" className="btn-secondary rounded-full px-7 py-3 text-[14px]">
              See Work
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="text-[1.75rem] font-semibold tracking-tight">The cost of an outdated first impression</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/55">
              Most clinics lose high-value patients before the conversation starts. An outdated website or weak Google presence signals that the practice is behind — even when the clinical work is excellent. Cartesia closes that gap with a clear, fixed-scope system.
            </p>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="mb-10 text-[1.75rem] font-semibold tracking-tight">Two clear offers</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Link href="/growth-engine" className="card group rounded-2xl p-8">
              <div className="text-[11px] font-medium uppercase tracking-wider text-white/35">Core Offer</div>
              <h3 className="mt-3 text-[1.25rem] font-semibold">Growth Engine</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                $799/month for 3 months. Modern website + SEO + AEO + Google Business Profile + monthly reports. Default: First + Last ($1,598).
              </p>
              <div className="mt-6 text-[13px] font-medium gradient-text">
                View details →
              </div>
            </Link>

            <Link href="/reviews" className="card group rounded-2xl p-8">
              <div className="text-[11px] font-medium uppercase tracking-wider text-white/35">Upsell</div>
              <h3 className="mt-3 text-[1.25rem] font-semibold">Reviews System</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                $149/month. Review request system + monitoring + monthly report. Built for map-pack dominance and patient trust.
              </p>
              <div className="mt-6 text-[13px] font-medium gradient-text">
                View details →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-[1.75rem] font-semibold tracking-tight">Ready to close the gap?</h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-white/50">
            Fixed scope. Money first. Clear delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="mailto:abdiwork81@gmail.com" className="btn-primary rounded-full px-7 py-3 text-[14px]">
              abdiwork81@gmail.com
            </a>
            <Link href="/growth-engine" className="btn-secondary rounded-full px-7 py-3 text-[14px]">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}