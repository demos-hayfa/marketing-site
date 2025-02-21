"use client"

import type React from "react"

import { useState } from "react"
import Layout from "../components/Layout"
import Image from "next/image"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { name, email, message })
    // Here you would typically send this data to your server
  }

  return (
    <Layout title="Contact">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            We'd love to hear from you! Whether you have a question about our products, need technical support, or want
            to explore partnership opportunities, our team is here to help.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="mb-2">TechCorp Headquarters</p>
          <p className="mb-2">123 Innovation Drive</p>
          <p className="mb-2">Silicon Valley, CA 94000</p>
          <p className="mb-4">United States</p>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">Phone: +1 (555) 123-4567</p>
          <p className="mb-4">Email: info@techcorp.com</p>
          <div className="mt-6">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Map"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

Contact.title = "Contact"