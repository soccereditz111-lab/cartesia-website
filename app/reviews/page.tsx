import Link from 'next/link'

export default function ReviewsPage() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
        <p className="mb-4 text-sm font-medium tracking-wide text-white/50">UPSELL</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Cartesia Reviews System</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/70">
          A lightweight, high-leverage system that helps local businesses consistently earn more Google reviews and protect their map-pack position.
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-6">
          <div>
            <div className="text-4xl font-bold">$149<span className="text-lg text-white/50">/mo</span></div>
            <div className="mt-1 text-sm text-white/50">Can be added to the Growth Engine or sold separately</div>
          </div>
          <a
            href="mailto:abdiwork81@gmail.com?subject=Reviews%20System%20Inquiry"
            className="btn-gradient rounded-full px-8 py-3.5 text-sm"
          >
            Inquire about Reviews
          </a>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-bold">What you get</h2>
          <ul className="mt-8 space-y-4">
            {[
              'Review request system (SMS/email templates + process the client can run or Cartesia can support)',
              'Google Business Profile review monitoring',
              'Reply templates and guidance',
              'Simple monthly report on new reviews and rating trend',
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
        <h2 className="text-2xl font-bold">Why this matters</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Google reviews are one of the strongest local ranking and trust signals. Businesses that consistently generate them win more map-pack visibility and convert more high-intent searchers. Most owners know this but never install a reliable system. This offer fixes that.
        </p>

        <h2 className="mt-14 text-2xl font-bold">Delivery philosophy</h2>
        <p className="mt-4 max-w-2xl text-white/70">
          Kept deliberately light so margin stays healthy and the client can sustain the process. Not a full reputation management platform. Focused on consistent new reviews and clean monitoring.
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">Add it to the Growth Engine or start separately</h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60">
            Email to discuss timing and fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:abdiwork81@gmail.com?subject=Reviews%20System%20Inquiry"
              className="btn-gradient rounded-full px-8 py-3.5 text-sm"
            >
              abdiwork81@gmail.com
            </a>
            <Link
              href="/growth-engine"
              className="rounded-full border border-white/20 px-8 py-3.5 text-sm transition hover:border-white/40"
            >
              View Growth Engine
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}