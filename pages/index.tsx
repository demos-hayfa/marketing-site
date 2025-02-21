import Layout from "../components/Layout"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <Layout title="Home">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to TechCorp</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We're revolutionizing the tech industry with our innovative solutions. Empowering businesses and individuals
          to achieve more through cutting-edge technology.
        </p>
        <Link
          href="/products"
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Explore Our Products
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose TechCorp?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovative Solutions</h3>
            <p>
              Our products are at the forefront of technological advancement, providing you with the tools to stay ahead
              in a rapidly evolving digital landscape.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-green-600"
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
            <h3 className="text-xl font-semibold mb-2">Uncompromising Security</h3>
            <p>
              We prioritize the safety of your data with state-of-the-art security measures integrated into all our
              products and services.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-4 inline-block mb-4">
              <svg
                className="w-12 h-12 text-purple-600"
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
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p>
              Our dedicated support team is always available to assist you, ensuring smooth operation of your tech
              ecosystem around the clock.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Product</h2>
        <div className="bg-gray-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="TechOS"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">TechOS: The Future of Computing</h3>
            <p className="mb-4">
              Experience unparalleled performance and security with our flagship operating system. TechOS combines
              cutting-edge AI technology with an intuitive user interface to revolutionize your digital experience.
            </p>
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">
              "TechCorp's solutions have transformed our business operations. The efficiency gains we've experienced are
              truly remarkable."
            </p>
            <p className="font-semibold">- John Doe, CEO of InnovateNow</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 italic">
              "The level of security and reliability we get with TechCorp's products gives us peace of mind in an
              increasingly complex digital landscape."
            </p>
            <p className="font-semibold">- Jane Smith, CTO of SecureFlow</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Home.title = "Home"