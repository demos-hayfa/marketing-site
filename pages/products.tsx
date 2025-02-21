import Layout from "../components/Layout"
import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "TechOS",
    description: "Next-generation operating system designed for maximum efficiency and user-friendliness.",
    features: [
      "Intuitive user interface",
      "Advanced security features",
      "Seamless cloud integration",
      "AI-powered personal assistant",
    ],
    benefits: [
      "Increased productivity",
      "Enhanced user experience",
      "Robust security",
      "Seamless device synchronization",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    name: "CloudMax",
    description: "Enterprise-grade cloud solution offering unparalleled scalability and reliability.",
    features: [
      "Unlimited storage",
      "Real-time collaboration tools",
      "Advanced analytics dashboard",
      "99.99% uptime guarantee",
    ],
    benefits: [
      "Cost-effective scalability",
      "Improved team collaboration",
      "Data-driven decision making",
      "Reliable business continuity",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    name: "SecureNet",
    description: "Advanced cybersecurity platform protecting your digital assets from evolving threats.",
    features: [
      "AI-powered threat detection",
      "Real-time monitoring",
      "Automated incident response",
      "Compliance management tools",
    ],
    benefits: [
      "Proactive threat prevention",
      "Rapid threat mitigation",
      "Regulatory compliance",
      "Peace of mind for stakeholders",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Products() {
  return (
    <Layout title="Products">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <p className="text-xl mb-8">
        Discover our cutting-edge solutions designed to revolutionize your digital experience.
      </p>

      <div className="space-y-16">
        {products.map((product) => (
          <div key={product.id} className="border p-6 rounded-lg shadow-md">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Benefits:</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Our Products?</h2>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p>Our products undergo rigorous testing to ensure the highest quality and reliability.</p>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
            <p>We constantly update our products with the latest technologies to keep you ahead of the curve.</p>
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
            <p>Our dedicated support team is always available to assist you with any questions or issues.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

Products.title = "Products"