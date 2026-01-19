// src/components/Header.tsx
import Link from 'next/link'
import HomeIcon from '../components/HomeIcon'

const Header = () => {
  return (
    <header className="bg-green-800 text-white">
      <nav className="w-full max-w-5xl mx-auto px-4 py-4 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-end hover:no-underline">
          <HomeIcon className="w-6 h-6 mr-2 flex-shrink-0" />
          <span className="leading-none">Nicholas Wilson</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li><Link href="/about">About</Link></li>
          <li><Link href="/musings">Musings</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header