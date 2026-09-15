import Link from 'next/link'

const principles = [
  {
    title: 'Fixed scope',
    desc: 'Everything is defined up front. No open-ended retainers. No surprise invoices for extra rounds.',
  },
  {
    title: 'Money first',
    desc: 'No work starts until payment clears. This protects both sides and filters for serious buyers.',
  },
  {
    title: 'Systems over features',
    desc: 'We install complete systems (website + SEO + AEO + GBP) rather than selling isolated tactics.',
  },
  {
    title: 'Clear numbers',
    desc: '$799/month for the Growth Engine. $149/month for Reviews. Simple and transparent.',
  },
]

const steps = [
  { num: '01', title: 'Analyze & Discover', desc: 'Understand the practice, current online presence, and primary local opportunity.' },
  { num: '02', title: 'Plan & Strategy', desc: 'Lock scope, keyword cluster, and page list. Confirm assets and timelines.' },
  { num: '03', title: 'Build & Integrate', desc: 'Website, technical SEO, GBP optimization, conversion setup.' },
  { num: '04', title: 'Launch & Report', desc: 'Go live, hand over, and deliver monthly visibility reports for the remaining term.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-28">
        <h1 className="text-[2.5rem] font-semibold tracking-tight md:text-[3.25rem]">About Cartesia</h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/55">
          Toronto-based systems and web development studio. We work with med spas, aesthetic clinics, and professional practices that need a modern online first impression without the usual agency drama.
        </p>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-[1.35rem] font-semibold">Operating philosophy</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title}>
                <h3 className="text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-[1.35rem] font-semibold">Process</h2>
          <ol className="mt-10 space-y-8">
            {steps.map((item) => (
              <li key={item.num} className="flex gap-6">
                <div className="text-[12px] font-medium text-white/30">{item.num}</div>
                <div>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                  <div className="mt-1 text-[14px] text-white/50">{item.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-[1.35rem] font-semibold">Contact</h2>
          <p className="mt-3 text-[14px] text-white/50">Based in Toronto, Ontario.</p>
          <a
            href="mailto:abdiwork81@gmail.com"
            className="mt-5 inline-block text-[16px] font-medium gradient-text"
          >
            abdiwork81@gmail.com
          </a>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/growth-engine" className="btn-primary rounded-full px-7 py-3 text-[14px]">
              Growth Engine
            </Link>
            <Link href="/reviews" className="btn-secondary rounded-full px-7 py-3 text-[14px]">
              Reviews System
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}