import React from 'react'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useTheme } from 'next-themes'

import Link from 'next/link'
import MobileMenu from '~/components/MobileMenu'
import BlackLogo from '../public/static/blacklogo.svg'
import WhiteLogo from '../public/static/whitelogo.svg'
import Footer from '~/components/Footer'

interface Props {
  children: any
  title?: string
  description?: string
  type?: string
  image?: string
}

const Layout = ({
  children,
  title = `Lorem ipsum dolor`,
  description = `Lorem ipsum dolor sit amet`,
  image = `https://localhost:3000/static/blacklogo.svg`,
  type = `Website`,
}: Props) => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => setMounted(true), [])
  const metaTags = (
    <>
      <meta charSet="utf-8" />
      <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1,shrink-to-fit=no, viewport-fit=cover"
      />
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta property="og:url" content="https://namedk.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_UK" />
      <meta property="og:site_name" content="test" />
    </>
  )

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen mx-auto max-w-2xl px-4 leading-6 lg:max-w-5xl xl:max-w-3xl lg:px-0 xl:px-0 ">
      <Head>
        <title>{title}</title>
        {metaTags}
      </Head>
      <main className="h-full">
        <div className="pt-8 flex flex-col justify-center">
          <nav className="flex items-center justify-between w-full relative border-gray-200 dark:border-gray-700">
            <div className="ml-[-0.60rem]">
              <Link href="/">
                <>
                  {theme === 'light' ? (
                    <img
                      src="https://dummyimage.com/150x100/000/fff&aaaaaaaa&"
                      className="h-12 cursor-pointer"
                      alt="placeholder"
                    />
                  ) : (
                    <img
                      src="https://dummyimage.com/150x100/fff/000"
                      className="h-12 cursor-pointer"
                      alt="placeholder"
                    />
                  )}
                </>
              </Link>
            </div>
            <div className=" p-1 flex flex-row items-center">
              <MobileMenu />
              <Link href="/about">
                <a className="p-2 ms-hover inline-block text-sm sm:text-md">
                  About
                  <div className="decorator underline underline-px-4 transition-all duration-300 ease-in-out" />
                </a>
              </Link>
              <Link href="/products">
                <a className="p-2 ms-hover inline-block text-sm sm:text-md">
                  Products
                  <div className="decorator underline underline-px-4 transition-all duration-300 ease-in-out" />
                </a>
              </Link>
              <Link href="/careers">
                <a className="p-2 ms-hover inline-block text-sm sm:text-md">
                  Careers
                  <div className="decorator underline underline-px-4 transition-all duration-300 ease-in-out" />
                </a>
              </Link>
              <Link href="/contact">
                <a className="p-2 ms-hover inline-block text-sm sm:text-md">
                  Contact
                  <div className="decorator underline underline-px-4 transition-all duration-300 ease-in-out" />
                </a>
              </Link>
            </div>
          </nav>
        </div>
        <div className="pt-8">
          <p>{children}</p>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Layout