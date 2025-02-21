import Image from "next/image"
import Link from "next/link"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Section from "../components/Section"
import Text from "../components/Text"

export default function Careers() {
  return (
    <Layout>
      <Header title="Careers" />
      <Hero title="Join Our Team" subtitle="We build amazing things & we are always hiring!" />
      <Section>
        <Text>
          At Our Company, we&apos;re always on the lookout for talented and passionate individuals to join our team. 
          Whether you&apos;re interested in product management, engineering, or sales, we invite you to apply within. 
          Open-ended applications are always welcome!
        </Text>
        <p className="pt-8 text-center text-2xl font-semibold text-gray-600">
          Visit our{" "}
          <Link className="text-blue-600 hover:underline" href="https://web-stories.demo"
          target="_blank" rel="noreferrer">
            careers page{" "}
          </Link> 
          on our website for more details:
        </p>
        <div className="flex flex-col justify-center items-center mt-8">
          <Image 
            className="rounded-lg shadow-lg"
            src="/careers.jpg?height=300&width=600"
            width={600}
            height={300}
            alt="Careers"
          />
        </div>
      </Section>
      <JobSection />
      <BenefitsSection />
      <TestimonialsSection />
      <LondonSection />
    </Layout>
  )
}

function JobSection() {
  return (
    <Section>
      <Text title="We’re hiring!">
        Our team is dedicated to creating high-quality, innovative products that make a difference for our customers. 
        We value diversity, creativity, and collaboration, and strive to create a supportive and inclusive work 
        environment. If you&apos;re interested in working with a dynamic team on exciting projects, 
        we encourage you to reach out to us.
      </Text>
      <p className="pt-8 text-center text-lg font-semibold text-gray-600">
        Visit our careers page for more details:
      </p>
      <div className="flex flex-col justify-center items-center mt-8">
        <Image 
          className="rounded-lg shadow-lg"
          src="/hiring.jpg?height=300&width=600"
          width={600}
          height={300}
          alt="We’re hiring!"
        />
      </div>
    </Section>
  )
}

function BenefitsSection()  {
  return (
    <Section>
      <Text title="Our benefits include:">
        {/*  this is a comma seperated list withe nding punctuation of the last one */}
        <ul>
          <li>- comprehensive health insurance</li>
          <li>- flexible working hours inline with remote working (tho London is great!)</li>
          <li>- performance based rewards and share options</li>
          <li>- ongoing professional development through workshops and courses</li>
          <li>- access to the latest technology and software tools</li>
          <li>- team building activities</li>
          <li>- a wellbeing programme that includes gym membership and mental health support</li>
          <li>- short commute! :)</li>
        </ul>
      </Text>
      <p className="pt-8 text-center text-lg font-semibold text-gray-600">
        At our company, we focus on empowering and motivating our team members to create, innovate, and excel in their 
        respective fields. We strive to be competitive and provide an attractive work environment that values and 
        rewards its employees.
      </p>
      <div className="flex flex-col justify-center items-center mt-8">
        <Image 
          className="rounded-lg shadow-lg"
          src="/benefits.jpg?height=300&width=600"
          width={600}
          height={300}
          alt="Our benefits include:"
        />
      </div>
    </Section>
  )
}

function TestimonialsSection() {
  return (
    <Section>
      <Text title="Testimonials">
        Hear what some of our team members had to say about working at our company:
      </Text>
      <p className="pt-8 text-center font-semibold text-gray-600">
        <i>
          "Working at this company has given me the opportunity to develop my skills, collaborate with like-minded 
          individuals, and participate in exciting projects. The benefits and work-life balance are amazing."
        </i>
        <span className="block tracking-wide text-sm">
          Emily, Product Manager
        </span>
      </p>
      <p className="pt-8 text-center font-semibold text-gray-600">
        <i>
          "I&apos;ve been fortunate to work in an environment where creativity and innovation are valued. The support 
          and resources provided by the company have allowed me to grow in my role and take on new challenges."
        </i>
        <span className="block tracking-wide text-sm">
          Ahmed, Product Engineer
        </span>
      </p>
      <div className="flex flex-col justify-center items-center mt-8">
        <Image 
          className="rounded-lg shadow-lg"
          src="/testimonials.jpg?height=300&width=600"
          width={600}
          height={300}
          alt="Testimonials"
        />
      </div>
    </Section>
  )
}

function LondonSection()  {
  return (
    <Section>
      <Text title="London is a fantastic city to live and work!">
        The vibrant city of London has something for everyone, whether you&apos;re looking for exceptional job 
        opportunities, exciting cultural experiences, or simply a great place to live. From world-class museums and 
        galleries, to lively markets and famous landmarks, you will find an endless array of activities to enjoy in 
        London. So why not come and join our team in one of the most dynamic cities in the world? We look forward to 
        hearing from you!
      </Text>
      <p className="pt-8 text-center font-semibold text-gray-600">
        Our office is also situated in the heart of London&apos;s tech hub, making it easy to network with other 
        professionals and attend industry events.
      </p>
      <div className="flex flex-col justify-center items-center mt-8">
        <Image 
          className="rounded-lg shadow-lg"
          src="/london.jpg?height=300&width=600"
          width={600}
          height={300}
          alt="London is a fantastic city to live and work!"
        />
      </div>
    </Section>
  )
}