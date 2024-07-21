import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Welcome! I&apos;m Nicholas Wilson</h1>
      {/* Image */}
      <img
        src="/images/profile200x200.webp"
        alt="Nicholas Wilson"
        width="200"
        height="200"
        className="rounded-full mx-auto text-center my-4"
      />
      
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
