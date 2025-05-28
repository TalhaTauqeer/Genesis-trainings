'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { tiles } from '@/data/tilesData'

export function Hero() {
  return (
    <div className="relative">
      {/* Video Background Section */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/HeroVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex h-full items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl sm:text-6xl font-bold max-w-4xl mx-auto">
              Empowering the Next Generation of Innovators
            </h1>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
              Genesis Trainings delivers expert-led programs to thrive in today's digital economy.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="/register">Get Started</Button>
              <Button
                href="#"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tiles Section */}
      <Container className="pt-20 pb-16 text-center lg:pt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-14 max-w-7xl mx-auto">
          {tiles.map(({ icon, label }, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-4 cursor-pointer transition-transform duration-300 hover:scale-110"
            >
              <div className="text-[#004875]">{icon}</div>
              <p className="text-lg font-semibold text-slate-900">{label}</p>
            </div>
          ))}
        </div>

        {/* Subtle Grey Divider Line */}
        <hr className="border-t border-gray-300 mt-16" />
      </Container>

      {/* Centered Text Section */}
      <section className="max-w-[90vw] md:max-w-6xl mx-auto px-4 text-center mt-16 mb-24">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004875] mb-8 tracking-wide">
          TRAINING PROGRAMS
        </h2>
        <p className="text-[#004875] max-w-full mx-auto text-lg md:text-xl leading-relaxed whitespace-pre-line">
          {`Learn from the market’s best to gain exclusive insights on how to begin your Amazon eCommerce business. Enablers caters to students’ needs equally, training the youth for a future that would sustain the economy of the country.

          We aim to enable youth towards an entrepreneurial mindset, creating business minds instead of jobholders. Our crown jewel, Enabling Video Series, serves as foundation for numerous freelancing options that one can use to generate several income streams.`}
        </p>
        {/* <hr className="border-t border-gray-300 mt-24" /> */}
      </section>
    </div>
  )
}
