import Layout from "../components/Layout"
import Image from "next/image"

const benefitData = [
  {
    title: "Comprehensive Health Plans",
    icon: "/images/health.png",
    description: "We offer top-notch health, dental, and vision insurance plans for you and your family. Your well-being is our priority.",
  },
  {
    title: "Generous Vacation Policy",
    icon: "/images/vacation.png",
    description: "Our generous vacation policy allows you to take the time you need to recharge and do your best work.",
  },
  {
    title: "Stock Options",
    icon: "/images/stock.png",
    description: "Share in TechCorp's success with our stock options program. Work hard, innovate, and grow with us.",
  },
]

const testimonialsData = [
  {
    name: "Alice Johnson",
    role: "Software Engineer",
    comment:
      "Working at TechCorp has been a life-changing experience. The collaborative culture and innovative projects have allowed me to grow both personally and professionally.",
    photo: "/images/alice.jpg",
  },
  {
    name: "David Smith",
    role: "Product Designer",
    comment:
      "TechCorp is the place where creativity meets technology. I have the freedom to experiment and push the boundaries, making my job exciting every day.",
    photo: "/images/david.jpg",
  },
]

const BenefitsSection = () => (
  <section className="my-8 py-8 bg-gray-100">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Employee Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {benefitData.map((benefit) => (
          <div
            key={benefit.title}
            className="border p-4 rounded-md shadow-md transition-transform duration-200 hover:scale-105"
          >
            <Image src={benefit.icon} height={64} width={64} alt="icon" className="mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const TestimonialsSection = () => (
  <section className="my-8 py-8">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">What Our Employees Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.name} className="border p-4 rounded-md shadow-md">
            <Image
              src={testimonial.photo}
              height={100}
              width={100}
              alt={testimonial.name}
              className="rounded-full mx-auto mb-2"
            />
            <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
            <p className="mt-2 italic">"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const LondonSection = () => (
  <section className="my-8 py-8 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Why London?</h2>
      <Image
        src="/images/london.jpg"
        width="700"
        height="500"
        alt="London"
        className="rounded-md shadow-md mb-4 mx-auto"
      />
      <p className="text-lg leading-relaxed mb-4">
        London is more than just our headquarters; it’s a bustling tech hub with endless opportunities. Enjoy world-class
        culture, diverse cuisine, and unparalleled professional growth. Be part of a community that’s shaping the future of
        technology in the heart of one of the world’s greatest cities.
      </p>
      <p className="text-lg leading-relaxed mb-4">
        London is not just a city; it’s an experience. As the global epicenter of finance, culture, and innovation, it offers a
        dynamic lifestyle perfectly suited for tech enthusiasts. Discover cutting-edge museums, attend exclusive tech
        conferences, and relish in culinary delights from around the world. Join us in shaping the future in one of the most
        iconic cities globally.
      </p>
    </div>
  </section>
)

const HiringSection = () => (
  <section className="my-8 py-8 bg-gray-100 flex items-center justify-center">
    <div className="container mx-auto px-4 max-w-4xl text-center">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Join Our Team!</h2>
      <p className="text-lg leading-relaxed mb-8">
        We’re always on the hunt for talented individuals who are passionate about technology and innovation. Explore our
        current job openings and find your perfect fit. At TechCorp, you’re not just an employee; you’re part of a community.
      </p>
      <a
        href="/jobs"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700 transition duration-200"
      >
        View Job Openings
      </a>
    </div>
  </section>
)

const Careers = () => (
  <Layout title="Careers - TechCorp">
    <div className="container mx-auto px-4 py-8 text-center max-w-4xl">
      <h1 className="text-5xl font-bold mb-4">Join TechCorp</h1>
      <p className="text-lg leading-relaxed mb-8">
        At TechCorp, we believe in fostering an environment where innovation thrives. We're dedicated to advancing technology
        and are always on the lookout for passionate individuals to join our team.
      </p>
      <BenefitsSection />
      <TestimonialsSection />
      <LondonSection />
      <HiringSection />
    </div>
  </Layout>
)

export default Careers