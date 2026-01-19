import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Nicholas Wilson',
}

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      
      <section className="mb-8">
        <p className="mb-4">
          Feel free to reach out to me on LinkedIn or via email. No journey is the same and I&apos;m sure we could all benefit from another perspective.
        </p>
      </section>

      </div>
  )
}