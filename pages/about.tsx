import Layout from "../components/Layout"
import Image from "next/image"

export default function About() {
  return (
    <Layout title="About">
      <h1 className="text-4xl font-bold mb-6">About TechCorp</h1>

      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              TechCorp is a leading innovator in the technology sector, dedicated to creating cutting-edge solutions
              that transform industries and improve lives. Founded in 2010, we've grown from a small startup to a global
              enterprise, always staying true to our core values of innovation, integrity, and customer-centricity.
            </p>
            <p className="mb-4">
              Our team of world-class engineers, designers, and thought leaders work tirelessly to push the boundaries
              of what's possible in technology. From revolutionary operating systems to advanced cybersecurity
              platforms, we're at the forefront of digital transformation.
            </p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission</h2>
            <p className="mb-4">
              To empower businesses and individuals with innovative technology solutions that drive growth, enhance
              productivity, and create a more connected world.
            </p>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="TechCorp Office"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p>Constantly pushing the boundaries of technology to create groundbreaking solutions.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p>Upholding the highest ethical standards in all our business practices and relationships.</p>
          </div>
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Customer-Centricity</h3>
            <p>Putting our customers' needs at the heart of every decision we make.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p>Fostering a culture of teamwork and open communication to achieve common goals.</p>
          </div>
          <div className="bg-red-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p>Striving for the highest quality in all our products, services, and interactions.</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p>Committed to developing eco-friendly technologies and reducing our environmental impact.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Our Journey</h2>
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-right pr-4">
              <span className="font-semibold">2010</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 pb-6">
              <h3 className="font-semibold mb-2">TechCorp Founded</h3>
              <p>Started in a small garage with a team of 5 passionate tech enthusiasts.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-right pr-4">
              <span className="font-semibold">2013</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 pb-6">
              <h3 className="font-semibold mb-2">Launch of TechOS</h3>
              <p>Our flagship operating system revolutionizes personal computing.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-right pr-4">
              <span className="font-semibold">2016</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-4 pb-6">
              <h3 className="font-semibold mb-2">Global Expansion</h3>
              <p>Opened offices in 5 countries and grew to over 1000 employees.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-24 text-right pr-4">
              <span className="font-semibold">2020</span>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-semibold mb-2">AI Integration</h3>
              <p>Integrated advanced AI capabilities across our entire product line.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="CEO"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-600">CEO & Co-founder</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="CTO"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">CTO & Co-founder</p>
          </div>
          <div className="text-center">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="COO"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Emily Brown</h3>
            <p className="text-gray-600">COO</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

About.title = "About"