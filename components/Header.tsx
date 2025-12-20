'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Willow Consulting"
            width={288}
            height={77}
            className="h-16 md:h-[77px] w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/quiz"
            className="text-text-muted hover:text-primary transition-colors"
          >
            Take the Quiz
          </Link>
          <Link
            href="/book"
            className="btn-primary text-sm py-3 px-6"
          >
            Book a Call
          </Link>
        </nav>
        <Link
          href="/book"
          className="md:hidden btn-primary text-sm py-2.5 px-5"
        >
          Book a Call
        </Link>
      </div>
    </header>
  )
}
