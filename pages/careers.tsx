import Link from "next/link"
import Layout from "../components/Layout"

export default function Careers() {
  return (
    <Layout title="Careers">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
        <p className="text-lg mb-4">
          We're on a mission to revolutionize the tech industry, and we'd love to have you on board!
        </p>
        <p className="text-lg">
          Explore our open positions and become part of a dynamic, innovative, and supportive team.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>Competitive salary and equity options.</li>
          <li>Comprehensive health and dental insurance.</li>
          <li>Generous paid time off and flexible working hours.</li>
          <li>Professional development opportunities.</li>
          <li>Collaborative and inclusive company culture.</li>
          <li>State-of-the-art office amenities in central London.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Why Work in London?</h2>
        <p className="text-lg mb-4">
          London is a global hub for innovation, creativity, and technology. It's a city that never sleeps
          and offers endless opportunities for personal and professional growth.
        </p>
        <ul className="list-disc pl-8 space-y-2 mb-4">
          <li>Access to a diverse and talented workforce.</li>
          <li>World-class events, conferences, and meetups.</li>
          <li>Rich history and vibrant cultural scene.</li>
          <li>Excellent transport links to Europe and beyond.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <figure className="border-t border-b border-gray-300 py-4">
          <blockquote className="italic text-lg mb-2">
            "Joining TechCorp has been a career-defining moment for me. The team is incredibly talented and
            supportive, and the projects are both challenging and rewarding."
          </blockquote>
          <figcaption className="text-gray-600">— Jane Doe, Software Engineer</figcaption>
        </figure>
      </section>

      <section>
        <Link href="/careers" passHref>
          <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-700">
            See Open Positions
          </button>
        </Link>
      </section>
    </Layout>
  )
}