import type React from "react"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  const router = useRouter()
  const { pathname } = router

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title} | TechCorp</title>
        <meta name="description" content="TechCorp - Innovative Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            TechCorp
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className={`hover:underline ${pathname === "/" && "font-bold"}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`hover:underline ${pathname === "/about" && "font-bold"}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/products" className={`hover:underline ${pathname === "/products" && "font-bold"}`}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`hover:underline ${pathname === "/contact" && "font-bold"}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto text-center">© 2023 TechCorp. All rights reserved.</div>
      </footer>
    </div>
  )
}