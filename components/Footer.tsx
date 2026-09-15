import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-bold">
              <span className="gradient-text">Cartesia</span>
            </div>
            <p className="mt-2 text-sm text-white/50">
              Modern websites & local visibility systems for traditional businesses.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/60">
            <a href="mailto:abdiwork81@gmail.com" className="hover:text-white">
              abdiwork81@gmail.com
            </a>
            <span>Toronto, Ontario</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/40">
          <Link href="/growth-engine" className="hover:text-white">Growth Engine</Link>
          <Link href="/reviews" className="hover:text-white">Reviews System</Link>
          <Link href="/demos" className="hover:text-white">Live Demos</Link>
          <Link href="/about" className="hover:text-white">About</Link>
        </div>

        <div className="mt-8 text-xs text-white/30">
          © {new Date().getFullYear()} Cartesia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}