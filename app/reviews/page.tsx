import Link from 'next/link'

const features = [
  'Review request system (SMS/email templates + process)',
  'Google Business Profile review monitoring',
  'Reply templates and guidance',
  'Simple monthly report on new reviews and rating trend',
]

export default function ReviewsPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:pt-28">
        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">Upsell</p>
        <h1 className="text-[2.5rem] font-semibold tracking-tight md:text-[3.25rem]">Reviews System</h1>
        <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/55">
          A lightweight system that helps clinics consistently earn more Google reviews and protect their map-pack position.
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-6">
          <div>
            <div className="text-[2.75rem] font-semibold tracking-tight">$149<span className="text-[1rem] font-normal text-white/40">/mo</span></div>
            <div className="mt-1 text-[13px] text-white/40">Add to Growth Engine or run separately</div>
          </div>
          <a
            href="mailto:abdiwork81@gmail.com?subject=Reviews%20System%20Inquiry"
            className="btn-primary rounded-full px-7 py-3 text-[14px]"
          >
            Inquire about Reviews
          </a>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-[1.35rem] font-semibold">What you get</h2>
          <ul className="mt-8 space-y-3">
            {features.map((item) => (
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
          <div className="max-w-2xl">
            <h2 className="text-[1.35rem] font-semibold">Why this matters for clinics</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/55">
              Google reviews are one of the strongest local ranking and trust signals. Practices that consistently generate them win more map-pack visibility and convert more high-intent patients. Most owners know this but never install a reliable system.
            </p>
            <h2 className="mt-12 text-[1.35rem] font-semibold">Delivery philosophy</h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/55">
              Kept deliberately light so margin stays healthy and the practice can sustain the process. Not a full reputation management platform — focused on consistent new reviews and clean monitoring.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-[1.5rem] font-semibold">Add it to the Growth Engine or start separately</h2>
          <p className="mx-auto mt-3 max-w-md text-[14px] text-white/50">
            Email to discuss timing and fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:abdiwork81@gmail.com?subject=Reviews%20System%20Inquiry"
              className="btn-primary rounded-full px-7 py-3 text-[14px]"
            >
              abdiwork81@gmail.com
            </a>
            <Link href="/growth-engine" className="btn-secondary rounded-full px-7 py-3 text-[14px]">
              View Growth Engine
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}