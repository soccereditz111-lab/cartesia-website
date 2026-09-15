import Link from 'next/link'

const included = [
  'Modern core-pages website',
  'Technical + on-page SEO',
  'Google Business Profile optimization + local signals',
  'AEO (Answer Engine Optimization) basics',
  'One primary local keyword cluster',
  'Monthly Semrush optimization + visibility reports × 3',
  'Basic conversion setup (forms, CTAs, mobile)',
]

const excluded = [
  'Unlimited revisions',
  'Ongoing content beyond initial pages',
  'Ads management',
  'Complex custom or e-commerce builds',
  'Social media management',
  'Anything after month 3 (unless renewed)',
]

export default function GrowthEnginePage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-28">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">Core Offer</p>
        <h1 className="text-[2.5rem] font-semibold tracking-tight md:text-[3.25rem]">Growth Engine</h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/55">
          A fixed-scope 3-month system that gives med spas and aesthetic clinics a modern website and real local visibility.
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-6">
          <div>
            <div className="text-[2.75rem] font-semibold tracking-tight">$799<span className="text-[1rem] font-normal text-white/40">/mo</span></div>
            <div className="mt-1 text-[13px] text-white/40">3 months · Default First + Last = $1,598</div>
          </div>
          <a
            href="mailto:abdiwork81@gmail.com?subject=Growth%20Engine%20Inquiry"
            className="btn-primary rounded-full px-7 py-3 text-[14px]"
          >
            Start with an email
          </a>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-[1.35rem] font-semibold">What’s included</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-white/70">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF8A00]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <h2 className="text-[1.35rem] font-semibold">Who this is for</h2>
              <p className="mt-4 text-[14px] leading-relaxed text-white/55">
                Med spas, aesthetic clinics, dermatology practices, and professional clinics that need a clean first impression and stronger local presence — without a long agency engagement.
              </p>
            </div>
            <div>
              <h2 className="text-[1.35rem] font-semibold">What is excluded</h2>
              <ul className="mt-4 space-y-2 text-[14px] text-white/50">
                {excluded.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 max-w-2xl">
            <h2 className="text-[1.35rem] font-semibold">Why fixed scope works</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/55">
              Money clears before any work starts. Scope is locked. Delivery stays focused. Clinic owners get a clear number and a clear result instead of open-ended retainers and vague promises.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-[1.5rem] font-semibold">Ready to move?</h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-white/50">
            Email with your practice name and current website. We’ll confirm fit and next steps.
          </p>
          <a
            href="mailto:abdiwork81@gmail.com?subject=Growth%20Engine%20Inquiry"
            className="btn-primary mt-8 inline-flex rounded-full px-7 py-3 text-[14px]"
          >
            abdiwork81@gmail.com
          </a>
        </div>
      </section>
    </div>
  )
}