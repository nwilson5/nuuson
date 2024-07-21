import Image from "next/image";
import ExternalLinks from '../components/ExternalLinks'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome! I&apos;m Nicholas Wilson</h1>
      {/* Image */}
      <Image
        src="/images/profile.jpg"
        alt="Nicholas Wilson"
        width={200}
        height={200}
        className="rounded-full mx-auto text-center my-4"
      />
      
      <p className="text-xl mb-6">
        Native Oregonian and Software Engineer 2011-present.
      </p>
            
      <p className="text-xl mb-6">
        Let&apos;s connect
      </p>
      
      <ExternalLinks />

      <p className="text-xl mb-6 my-48">
        This website is a work in progress. Hosted on GitHub (<Link href="https://github.com/nwilson5/nuuson" className="text-blue-500 hover:underline"
        >github.com/nwilson5/nuuson</Link>) and deployed using Cloudflare Pages.
      </p>

    </div>
  );
}
