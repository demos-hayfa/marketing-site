import Image from "next/image"
import { Star } from "lucide-react"

import Layout from "../components/Layout"

export default function Careers() {
  const starColor = "#FFDF00"

  return (
    <Layout title="Careers">
      <section className="text-center mb-16">
        <h1 className="text-center text-4xl font-bold text-teal-600 mb-12">Join Our Team</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Be part of a team that's transforming the world of technology. At TechCorp, every day presents a new
          opportunity to innovate and make an impact.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Employee Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Flexible Working Hours</h3>
            <p>
              At TechCorp, we understand life outside of work is important. Enjoy flexible working hours to maintain
              that balance.
            </p>
          </div>
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Competitive Salary</h3>
            <p>
              We offer industry-leading salaries and bonuses, reflecting the value we place on our team's expertise and
              contributions.
            </p>
          </div>
          <div>
            <div className="bg-teal-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Professional Growth</h3>
            <p>
              Our commitment to professional development means we provide ongoing training opportunities for career
              advancement.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Employee Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star fill={starColor} />
              <Star fill={starColor} />
              <Star fill={starColor} />
              <Star fill={starColor} />
              <Star className="text-gray-400" />
            </div>
            <p className="italic mb-4">
              "TechCorp's environment is so creative and energetic. Everyone is driven to innovate and deliver
              exceptional solutions."
            </p>
            <p className="font-semibold">- Alex McFly, Senior Developer</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star fill={starColor} />
              <Star fill={starColor} />
              <Star fill={starColor} />
              <Star fill={starColor} />
              <Star fill={starColor} />
            </div>
            <p className="italic mb-4">
              "The work culture at TechCorp is phenomenal. The team is welcoming and supportive, making every project
              enjoyable."
            </p>
            <p className="font-semibold">- Christina Sky, Marketing Manager</p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Why London?</h2>
        <div className="flex items-center mb-4">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              London: The Heart of Innovation
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Based in the bustling city of London, TechCorp thrives in a globally connected tech hub. London offers a
              vibrant, diverse, and innovative environment, making it the perfect place for our tech-driven company.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>World-renowned cultural attractions</li>
              <li>Diverse culinary scene</li>
              <li>Highly connected transportation network</li>
              <li>Hub for tech and innovation</li>
              <li>Beautiful parks and outdoor spaces</li>
              <li>Excellent work-life balance</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              className="object-cover w-full lg:w-2/3 rounded-lg"
              src="/london.jpg"
              alt="London skyline"
              width={500}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="mb-16 text-center">
        <div className="flex justify-center mb-4">
          <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full border-2 border-green-800 font-semibold text-xl">
            We're Hiring
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-blue-600">Interested in joining us?</h2>
        <p className="text-2xl text-gray-700 mb-8">
          Check out our available positions and become part of the TechCorp family.
        </p>
        <a
          href="/join-us"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          Apply Now
        </a>
      </section>
    </Layout>
  )
}