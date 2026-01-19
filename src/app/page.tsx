import Link from 'next/link'
import Image200x from '../components/Image200'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome! I&apos;m Nicholas Wilson</h1>
      {/* Image */}
      <Image200x />
      
      <p className="text-base mb-6">
        Software Engineer @ Eugene, OR
      </p>

      <p className="text-base mb-6">
        <Link href="/about">About</Link>&nbsp;&middot;&nbsp;
        <Link href="/contact">Contact</Link>&nbsp;&middot;&nbsp;
        <Link href="/lost">I&apos;m Lost</Link>
      </p>

      <p className="text-base mb-6 mt-12">
        <span className="text-xl mb-4">
          PageSpeed Insights
        </span>
        <img
          src="/images/pagespeed-insights-333x234.webp"
          srcSet="/images/pagespeed-insights-333x234.webp 1x,
                  /images/pagespeed-insights-500x351.webp 1.5x,
                  /images/pagespeed-insights-666x468.webp 2x"
          width="333"
          height="234"
          alt="PageSpeed Insights"
          className="mx-auto"
        />
      </p>

    </div>
);
}
