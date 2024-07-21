import ExternalLinks from '../../components/ExternalLinks'
import Resume from '../../components/Resume'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <img
          src="/images/profile.jpg"
          alt="Nicholas Wilson"
          width="200"
          height="200"
          className="rounded-full mx-auto text-center my-4"
      />
          
      <p className="text-lg mb-6 leading-relaxed">
        Hello, I&apos;m Nicholas Wilson. I grew up in Eugene, Oregon and have dual citizenship in the United States and Canada (a point of contention as a child, but not anymore).
      </p>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p>
          I graduated from the University of Oregon in 2011 with a BS Mathematics and Computer Science.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

        <p className="mb-4">
          For over a decade I&apos;ve been working as a software engineer, focusing on backend development and database management (some front-end work but it is not my preference).
        </p>

        <p className="mb-4">
          Working with a small company, I managed the development and launch of 100+ dynamically generated websites with an eye to keeping expenses low. We managed a number of servers in a local data center and I was responsible for the maintenance and upkeep of these servers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Resume</h2>
        {/* Embed my resume */}
        <Resume />
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h2>
        <p className="mb-4">
          I&apos;m open to new opportunities, collaborations, or just a good conversation. Feel free to reach out to me on LinkedIn or via email.
        </p>
      </section>

      <div className="mt-8"><ExternalLinks /></div>
      </div>
  )
}