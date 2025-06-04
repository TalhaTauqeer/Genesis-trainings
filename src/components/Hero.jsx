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
          </div>
        </div>
      </div>

      {/* Tiles Section */}
      <Container className="pt-20 pb-16 text-center lg:pt-20">
        <h2 className="mb-20 text-4xl font-bold text-[#004875]">Leading the Nation through IT Trainings & Innovation</h2>
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
        <hr className="mt-16 border-t border-blue-900" />
      </Container>

      {/* Centered Text Section */}
<section className="mx-auto mt-16 mb-24 max-w-[90vw] px-2 md:px-4 text-center md:max-w-6xl">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#004875]">

    {/* Our Vision */}
    <div className="md:border-r-2 md:border-[#004875] px-8 md:px-12">
      <h2 className="mb-4 text-3xl font-bold tracking-wide md:text-4xl">OUR VISION</h2>
      <img
        src="/images/icons/Vision.png"
        alt="Vision Icon"
        className="mx-auto mb-6 w-12 h-12"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line md:text-xl">
        {`To be a leading provider of advanced IT education that empowers individuals to achieve self-employment and drive innovation.`}
      </p>
    </div>

    {/* Our Mission */}
    <div className="md:border-r-2 md:border-[#004875] pr-8 md:pr-12">
      <h2 className="mb-4 text-3xl font-bold tracking-wide md:text-4xl">OUR MISSION</h2>
      <img
        src="/images/icons/Mission.png"
        alt="Mission Icon"
        className="mx-auto mb-6 w-12 h-12"
      />
      <p className="text-lg leading-relaxed whitespace-pre-line md:text-xl">
        {`At Genesis Trainings, our mission is to empower individuals and organizations through transformative IT education and skills development. We are committed to bridging the technology skills gap by providing high-quality, practical, and industry-relevant training.`}
      </p>
    </div>

    {/* Our Values */}
    <div className="pl-8 md:pl-12">
      <h2 className="mb-4 text-3xl font-bold tracking-wide md:text-4xl">OUR VALUES</h2>
      <img
        src="/images/icons/Value.png"
        alt="Values Icon"
        className="mx-auto mb-6 w-12 h-12"
      />
      <p className="text-lg md:text-xl leading-relaxed">
        We value <strong>Growth & Prosperity</strong> by empowering success through practical skills, <strong>Leadership</strong> by inspiring confidence and integrity, <strong>Knowledge & Innovation</strong> through fostering learning and creativity, and <strong>Collaboration</strong> by building strong partnerships.
      </p>
    </div>
  </div>
</section>
    </div>
  )
}
