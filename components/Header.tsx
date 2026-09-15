'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/growth-engine', label: 'Growth Engine' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/demos', label: 'Work' },
  { href: '/about', label: 'About' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-7 w-8" />
          <span className="text-[15px] font-semibold tracking-tight">Cartesia</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium transition-colors ${
                pathname === item.href
                  ? 'text-white'
                  : 'text-white/55 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/growth-engine"
          className="btn-primary hidden rounded-full px-5 py-2 text-[13px] md:inline-flex"
        >
          Get Started
        </Link>
      </div>
    </header>
  )
}