import Link from 'next/link'

const buildDate = new Date().toISOString().split('T')[0]

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
        <div className="container mx-auto px-4 pt-4 pb-2 text-center flex flex-col sm:flex-row sm:items-center sm:gap-2 sm:item-center sm:justify-center">
            <span>© {new Date().getFullYear()} Nicholas Wilson</span>
            <span className="hidden sm:block">&middot;</span>
            <span>All rights reserved</span>
        </div>
        {/* bar separating */}
        <div className="sm:hidden container mx-auto px-4 py-4 text-center">
          <hr className="border-white max-w-xl mx-auto" />
        </div>
        <div className="container mx-auto px-4 pb-4 text-center flex flex-col sm:flex-row sm:items-center sm:gap-2 sm:item-center sm:justify-center">
          <span>repo @ <Link href="https://github.com/nwilson5/nuuson" aria-label="GitHub repository">github:nwilson5/nuuson</Link></span>
          <span className="hidden sm:block">&middot;</span>
          <span>deploy @ <Link href="https://pages.cloudflare.com/">Cloudflare Pages</Link></span>
          <span className="hidden sm:block">&middot;</span>
          <span>last build @ {buildDate}</span>
        </div>
    </footer>
  )
}

export default Footer