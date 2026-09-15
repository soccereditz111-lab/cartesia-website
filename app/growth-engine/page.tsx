import Link from 'next/link'

export default function GrowthEnginePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <p className="mb-4 text-sm font-medium tracking-wide text-white/50">CORE OFFER</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Cartesia Growth Engine</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          A fixed-scope 3-month system that gives traditional local businesses a modern website and real local visibility. Clear deliverables. No scope creep.
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-6">
          <div>
            <div className="text-4xl font-bold">$799<span className="text-lg text-white/50">/mo</span></div>
            <div className="mt-1 text-sm text-white/50">3 months · Default: First + Last = $1,598</div>
          </div>
          <a
            href="mailto:abdiwork81@gmail.com?subject=Growth%20Engine%20Inquiry"
            className="btn-gradient rounded-full px-8 py-3.5 text-sm"
          >
            Start with an email
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">What’s included</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              'Modern core-pages website',
              'Technical + on-page SEO',
              'Google Business Profile optimization + local signals',
              'AEO (Answer Engine Optimization) basics',
              'One primary local keyword cluster',
              'Monthly Semrush optimization + visibility reports × 3',
              'Basic conversion setup (forms, CTAs, mobile)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold">Who this is for</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Trades and home services, dental practices, medspa and aesthetic clinics, restaurants, and professional service businesses that need a clean first impression and stronger local presence — without a long agency engagement.
        </p>

        <h2 className="mt-14 text-2xl font-bold">What is excluded</h2>
        <ul className="mt-6 space-y-2 text-white/60">
          <li>• Unlimited revisions</li>
          <li>• Ongoing content beyond initial pages</li>
          <li>• Ads management</li>
          <li>• Complex custom or e-commerce builds</li>
          <li>• Social media management</li>
          <li>• Anything after month 3 (unless renewed)</li>
        </ul>

        <h2 className="mt-14 text-2xl font-bold">Why fixed scope works</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Money clears before any work starts. Scope is locked. Delivery stays focused. Traditional owners get a clear number and a clear result instead of open-ended retainers and vague promises.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">Ready to move?</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Email with your business name and current website (or lack of one). We’ll confirm fit and next steps.
          </p>
          <a
            href="mailto:abdiwork81@gmail.com?subject=Growth%20Engine%20Inquiry"
            className="btn-gradient mt-8 inline-block rounded-full px-8 py-3.5 text-sm"
          >
            abdiwork81@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}