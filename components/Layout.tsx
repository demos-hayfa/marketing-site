import type React from "react"
import Head from "next/head"
import Link from "next/link"
import { usePathname } from "next/navigation"

function NavigationLink({
  label,
  path,
  currentPath,
}: {
  label: string
  path: string
  currentPath: string
}) {
  const isActive = currentPath === path
  return (
    <li className="relative">
      <Link
        href={path}
        className={`hover:underline ${isActive ? "text-red-500 relative before:absolute before:border-b-4 before:w-full before:border-red-500 before:-bottom-1" : undefined }`}
      >
        {label}
      </Link>
    </li>
  )
}

type LayoutProps = {
  children: React.ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
  const pathname = usePathname()
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
            <NavigationLink label="Home" path="/" currentPath={pathname}/>
            <NavigationLink label="About" path="/about" currentPath={pathname}/>
            <NavigationLink label="Products" path="/products" currentPath={pathname}/>
            <NavigationLink label="Contact" path="/contact" currentPath={pathname}/>
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