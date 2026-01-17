import Resume from '../../components/Resume'
import Image200x from '../../components/Image200'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About myself, including education, professional experience, and how to connect with me.',
}

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <Image200x />
          
      <p className="text-lg mb-6 leading-relaxed">
        I'm Nicholas Wilson, a dual US-Canadian citizen based in Eugene, Oregon. I like biking, outdoors, cooking and spending time with family.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p>
          I graduated from the University of Oregon in 2011 with a BS in Mathematics and Computer Science.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
        <p className="mb-2">
          Software Engineer, Myriad Genetics (2025 - Present)
        </p>
        <p>
          Software Engineer, Cybo Company (2011 - 2025)
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        <p className="mb-4 text-sm text-gray-600">Last updated: Early 2025</p>
        <Resume />
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p className="mb-4">
          Feel free to reach out to me on LinkedIn or via email.
        </p>
      </section>

      </div>
  )
}