import Link from 'next/link'

const niches = [
  {
    name: 'Trades / Home Services',
    items: [
      { name: 'HandGrid', url: 'https://www.framer.com/marketplace/templates/handgrid/', desc: 'Handyman & local home services' },
      { name: 'Plumbi', url: 'https://www.framer.com/marketplace/templates/plumbi/', desc: 'Plumbing & home repair' },
      { name: 'Cleean / Cleaner', url: 'https://www.framer.com/marketplace/templates/cleean/', desc: 'Cleaning & local services' },
    ],
  },
  {
    name: 'Dental',
    items: [
      { name: 'DENTRY', url: 'https://www.framer.com/marketplace/templates/dentry/', desc: 'Boutique dental & clinic' },
      { name: 'Deentiva', url: 'https://www.framer.com/marketplace/templates/deentiva/', desc: 'Dental clinic' },
      { name: 'Dentix', url: 'https://www.framer.com/marketplace/templates/dentix/', desc: 'Specialist dental' },
      { name: 'ClinicHub', url: 'https://www.framer.com/marketplace/templates/clinichub/', desc: 'Clinic & healthcare' },
    ],
  },
  {
    name: 'Med Spa / Aesthetic / Clinics',
    items: [
      { name: 'Klinik', url: 'https://www.framer.com/marketplace/templates/klinik/', desc: 'Aesthetic & dermatology' },
      { name: 'Xiro SPA', url: 'https://www.framer.com/marketplace/templates/xiro-spa/', desc: 'Spa, beauty, wellness' },
      { name: 'Dermato', url: 'https://www.framer.com/marketplace/templates/dermato/', desc: 'Dermatology & aesthetic' },
      { name: 'Beautiva', url: 'https://www.framer.com/marketplace/templates/beautiva/', desc: 'Cosmetic / med spa' },
      { name: 'Healcure', url: 'https://www.framer.com/marketplace/templates/healcure/', desc: 'General healthcare' },
      { name: 'Medicarex', url: 'https://www.framer.com/marketplace/templates/medicarex/', desc: 'Healthcare clinic' },
    ],
  },
  {
    name: 'Professional',
    items: [
      { name: 'Elevate', url: 'https://www.framer.com/marketplace/templates/elevate/', desc: 'Agency / professional services' },
      { name: 'Fuel', url: 'https://www.framer.com/marketplace/templates/fuel/', desc: 'Clean agency / portfolio' },
      { name: 'Porto', url: 'https://www.framer.com/marketplace/templates/porto/', desc: 'Dark agency / portfolio' },
      { name: 'Nile', url: 'https://www.framer.com/marketplace/templates/nile/', desc: 'Agency landing' },
    ],
  },
]

export default function DemosPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-20 md:pt-28">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Live Demos</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          Real examples of the modern, conversion-focused sites Cartesia installs for local businesses. These are the templates we remix and rebrand for clients.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {niches.map((niche) => (
          <div key={niche.name} className="mb-16">
            <h2 className="mb-6 text-xl font-bold text-white/90">{niche.name}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {niche.items.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25"
                >
                  <div className="font-semibold">{item.name}</div>
                  <div className="mt-1 text-sm text-white/50">{item.desc}</div>
                  <div className="mt-4 text-sm font-medium gradient-text">View template →</div>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="text-white/70">
            Want a site like these for your business?
          </p>
          <Link
            href="/growth-engine"
            className="btn-gradient mt-6 inline-block rounded-full px-8 py-3.5 text-sm"
          >
            See the Growth Engine
          </Link>
        </div>
      </section>
    </div>
  )
}