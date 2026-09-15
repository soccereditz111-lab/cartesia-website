'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/growth-engine', label: 'Growth Engine' },
  { href: '/reviews', label: 'Reviews System' },
  { href: '/demos', label: 'Live Demos' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Cartesia</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/growth-engine"
          className="btn-gradient hidden rounded-full px-5 py-2 text-sm md:inline-block"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}