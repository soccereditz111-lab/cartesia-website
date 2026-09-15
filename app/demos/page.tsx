import Link from 'next/link'

const demos = [
  {
    name: 'Klinik',
    desc: 'Aesthetic & dermatology clinics',
    url: 'https://www.framer.com/marketplace/templates/klinik/',
  },
  {
    name: 'Xiro SPA',
    desc: 'Spa, beauty, wellness & massage',
    url: 'https://www.framer.com/marketplace/templates/xiro-spa/',
  },
  {
    name: 'Dermato',
    desc: 'Dermatology & aesthetic clinics',
    url: 'https://www.framer.com/marketplace/templates/dermato/',
  },
  {
    name: 'Beautiva',
    desc: 'Cosmetic / med spa / aesthetic',
    url: 'https://www.framer.com/marketplace/templates/beautiva/',
  },
  {
    name: 'Healcure',
    desc: 'General healthcare & clinics',
    url: 'https://www.framer.com/marketplace/templates/healcure/',
  },
  {
    name: 'Medicarex',
    desc: 'Healthcare clinic',
    url: 'https://www.framer.com/marketplace/templates/medicarex/',
  },
  {
    name: 'ClinicHub',
    desc: 'Multi-specialty clinics',
    url: 'https://www.framer.com/marketplace/templates/clinichub/',
  },
]

export default function DemosPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:pt-28">
        <h1 className="text-[2.5rem] font-semibold tracking-tight md:text-[3.25rem]">Work</h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/55">
          Real examples of the modern, conversion-focused sites Cartesia installs for med spas and aesthetic clinics.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {demos.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card rounded-2xl p-6"
            >
              <div className="text-[15px] font-semibold">{item.name}</div>
              <div className="mt-1.5 text-[13px] text-white/45">{item.desc}</div>
              <div className="mt-5 text-[13px] font-medium gradient-text">View template →</div>
            </a>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/8 bg-white/[0.02] p-10 text-center">
          <p className="text-[15px] text-white/55">Want a site like these for your practice?</p>
          <Link
            href="/growth-engine"
            className="btn-primary mt-6 inline-flex rounded-full px-7 py-3 text-[14px]"
          >
            View Growth Engine
          </Link>
        </div>
      </section>
    </div>
  )
}