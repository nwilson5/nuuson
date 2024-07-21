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
        <Link href="/contact">Contact</Link>
      </p>

    </div>
);
}
