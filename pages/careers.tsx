import Link from "next/link"
import Layout from "../components/Layout"

export default function CareersPage() {
  return (
    <Layout title="Careers">
      <div className="container mx-auto py-12">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">We're Hiring!</h1>
          <p className="mt-4 text-xl text-gray-700">
            Join our team and help us build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
            <p className="text-gray-600">
              TechCorp offers a vibrant work environment, competitive benefits, and opportunities for growth. Join a team committed to innovation, excellence, and making a difference.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-600">
              <li>Competitive salary and comprehensive benefits package</li>
              <li>Flexible work hours and remote work options</li>
              <li>Opportunities for professional growth and continuous learning</li>
              <li>A collaborative and inclusive company culture</li>
            </ul>
          </div>

          <div className="bg-white p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
            <div className="space-y-4 mt-4">
              <div>
                <p className="italic text-gray-600">&quot;Working at TechCorp has been a game-changer for my career. The team is amazing, and the projects are challenging and rewarding.&quot;</p>
                <p className="mt-2 font-bold text-gray-800">- Alex, Software Engineer</p>
              </div>
              <div>
                <p className="italic text-gray-600">&quot;The culture at TechCorp promotes creativity and innovation. It's a great place to grow and make a impact.&quot;</p>
                <p className="mt-2 font-bold text-gray-800">- Sam, Product Designer</p>
              </div>
              <div>
                <p className="italic text-gray-600">&quot;I've never worked with such a talented and dedicated team before. TechCorp's commitment to excellence is truly inspiring.&quot;</p>
                <p className="mt-2 font-bold text-gray-800">- Jamie, Project Manager</p>
              </div>
            </div>
            {/* Add a simple carousel */}
            <div className="mt-4 space-x-4 inline-flex">
              {/* Placeholder buttons for testimonial navigation */}
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full">&lt;</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-full">&gt;</button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 text-white text-center p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Team in London</h2>
          <p className="text-lg mb-4">Experience the vibrant culture, world-class education, and the dynamic job market of London.</p>
          <Link href="#">
            <a className="text-lg font-semibold underline hover:text-blue-300">Discover opportunities at TechCorp in London</a>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold">Ready to Apply?</h2>
          <p className="text-lg mt-4">Check out our current job openings on our <Link href="#"><a className="text-blue-600 hover:underline">careers page</a></Link> and join us today!</p>
        </div>
      </div>
    </Layout>
  )
}