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
          className="absolute top-0 left-0 z-0 h-full w-full object-cover"
        >
          <source src="/videos/HeroVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 z-10 bg-black/60" />
        <div className="relative z-20 flex h-full items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <div>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold sm:text-6xl">
              Empowering the Next Generation of Innovators
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg sm:text-xl">
              Genesis Trainings delivers expert-led programs to thrive in today
              {"'"}s digital economy.
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
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 md:grid-cols-4">
          {tiles.map(({ icon, label }, i) => (
            <div
              key={i}
              className="flex cursor-pointer flex-col items-center space-y-4 transition-transform duration-300 hover:scale-110"
            >
              <div className="text-[#004875]">{icon}</div>
              <p className="text-lg font-semibold text-slate-900">{label}</p>
            </div>
          ))}
        </div>

        {/* Subtle Grey Divider Line */}
        <hr className="mt-16 border-t border-gray-300" />
      </Container>

      {/* Centered Text Section */}
      <section className="mx-auto mt-16 mb-24 max-w-[90vw] px-4 text-center md:max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold tracking-wide text-[#004875] md:text-4xl">
          TRAINING PROGRAMS
        </h2>
        <p className="mx-auto max-w-full text-lg leading-relaxed whitespace-pre-line text-[#004875] md:text-xl">
          {`Learn from the market’s best to gain exclusive insights on how to begin your Amazon eCommerce business. Enablers caters to students’ needs equally, training the youth for a future that would sustain the economy of the country.

          We aim to enable youth towards an entrepreneurial mindset, creating business minds instead of jobholders. Our crown jewel, Enabling Video Series, serves as foundation for numerous freelancing options that one can use to generate several income streams.`}
        </p>
        {/* <hr className="border-t border-gray-300 mt-24" /> */}
      </section>
    </div>
  )
}
