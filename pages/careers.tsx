import React from 'react'
import Container from '~/components/Container'
import data from '~/data/benefits'
import dataTwo from '~/data/testimonials'
import Image from 'next/image'

export default function CareersPage() {
  return (
    <Container
      title="Careers"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry's standard."
    >
      <div className="space-y-12 xl:space-y-14 mt-4">
        <h1 className="text-black-500 text-5xl md:text-6xl font-bold dark:text-white">
          Join the Family!
        </h1>
        <p className="text-content hidden lg:block text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div>
        <div className="mt-16 space-y-12 md:space-y-16">
          <div className="flex flex-col">
            <div className="prose dark:prose-dark max-w-none w-full">
              <h3 className="text-3xl md:text-4xl text-black-500 md:mb-6 font-extrabold tracking-tight dark:text-gray-200">
                We&apos;re hiring
              </h3>
              <p className="text-black-500 dark:text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="mt-10 text-center">
              <a
                href="https://github.com/imadatyatalah/caffeine"
                className="w-full md:w-auto tracking-wider md:px-10 px-8 py-4 uppercase inline-block text-center bg-white border-2 border-primary text-black-500 font-bold text-sm hover:bg-primary hover:text-white transition-all"
              >
                View open positions
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-8 xl:space-y-0 xl:flex-row xl:space-x-8 xl:space-y-0">
            <div className="p-8 bg-light dark:bg-light-dark w-full xl:w-1/2 border-2 border-primary dark:border-dark border-dotted">
              <h4 className="text-3xl font-bold text-black-500 dark:text-gray-200">Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {data.map((item) => (
                  <div key={item.desc} className="bg-white p-6">
                    <div className="flex items-center">
                      {item.icon}
                      <p className="m-3">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-light dark:bg-light-dark w-full xl:w-1/2">
              <h4 className="text-xl md:text-3xl font-bold text-black-500 dark:text-gray-200">
                The best city (in the world)
              </h4>
              <img
                className="w-full h-full max-h-72 block object-cover"
                src="/static/london.jpg"
                alt="City"
              />
              <div className="mt-5 flex flex-col lg:flex-row justify-between">
                <div className="flex items-center">
                  <span className="pl-5 text-4xl text-black-500">1.</span>
                  <div className="flex flex-col">
                    <h3 className="px-5 mb-4 text-3xl font-bold md:leading-tight tracking-tight text-black-500 md:text-4xl dark:text-gray-200">
                      A 5-star location
                    </h3>
                    <p className="px-5 text-sm text-gray-500 leading-snug">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                      bibendum laoreet.
                    </p>
                  </div>
                </div>
                <a
                  href="https://tripadvisor.com"
                  className="underline text-sm w-full md:w-auto leading-10"
                >
                  Read more on TripAdvisor
                </a>
              </div>
            </div>
          </div>
          <div className="p-8 bg-light dark:bg-light-dark border-primary md:w-1/2 mx-auto">
            <h4 className="text-3xl font-bold text-black-500 dark:text-gray-200">Testimonials</h4>
            <div className="mx-auto mt-10 relative top-8 w-10/12 pt-5 max-w-md">
              <div className="realtive z-0 ">
                {dataTwo.map((item) => (
                  <div
                    key={item.author}
                    className="card space-y-10 flex flex-col justify-center items-center relative opacity-25"
                  >
                    <Image className="w-20 h-20 rounded-full" src={item.image} alt={item.author} />
                    <p className="text-md text-gray-700 leading-relaxed">{item.desc}</p>
                    <p className="text-center text-lg text-primary font-bold uppercase">
                      {item.author}
                      <span>, {item.position}</span>
                    </p>
                  </div>
                ))}
              </div>
              <div className="dots relative z-15 w-full right-16 flex justify-evenly mt-16 my-3">
                <input className="" type="radio" name="card" id="1" />
                <input className="" type="radio" name="card" id="2" />
                <input type="radio" name="card" id="3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}