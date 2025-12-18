import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white/90 py-12 px-6 md:px-8">
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
            <p className="text-white/60 text-sm text-center md:text-left">
              Helping mission-driven teams realign<br />
              Vision, Mission, and Purpose.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/quiz" className="hover:text-white transition-colors">
              MVP Diagnostic
            </Link>
            <Link href="/book" className="hover:text-white transition-colors">
              Book a Call
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Willow Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
