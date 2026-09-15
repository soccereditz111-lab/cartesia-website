import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <Logo className="h-6 w-7" />
              <span className="text-[15px] font-semibold">Cartesia</span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-white/45">
              Modern websites and local visibility systems for med spas, aesthetic clinics, and professional practices.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-[13px] text-white/50">
            <a href="mailto:abdiwork81@gmail.com" className="hover:text-white transition-colors">
              abdiwork81@gmail.com
            </a>
            <span>Toronto, Ontario</span>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-[12px] text-white/35">
          <Link href="/growth-engine" className="hover:text-white/70 transition-colors">Growth Engine</Link>
          <Link href="/reviews" className="hover:text-white/70 transition-colors">Reviews System</Link>
          <Link href="/demos" className="hover:text-white/70 transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white/70 transition-colors">About</Link>
        </div>

        <div className="mt-8 text-[11px] text-white/25">
          © {new Date().getFullYear()} Cartesia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}