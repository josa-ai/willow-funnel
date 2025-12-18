import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-forest text-cream/90 py-12 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo.png"
              alt="Willow Consulting"
              width={150}
              height={40}
              className="h-10 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sage-light/80 text-sm text-center md:text-left">
              Helping mission-driven teams realign<br />
              Vision, Mission, and Purpose.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <Link href="/" className="hover:text-cream transition-colors text-cream/80">
              Home
            </Link>
            <Link href="/quiz" className="hover:text-cream transition-colors text-cream/80">
              MVP Diagnostic
            </Link>
            <Link href="/book" className="hover:text-cream transition-colors text-cream/80">
              Book a Call
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-sage-light/20 text-center text-sage-light/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Willow Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
