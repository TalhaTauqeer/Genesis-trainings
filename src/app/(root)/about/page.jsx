import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/images/screenshots/enrollment.png")',
          backgroundSize: 'cover', // ensures the image fills the container
          backgroundPosition: 'center',
          minHeight: '60vh', // ensures it takes at least the full viewport height
          position: 'relative',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px',
          backgroundColor: '#004875', // fallback background color
        }}
      >
        <div
          style={{
            padding: '30px 40px',
            borderRadius: '8px',
          }}
        >
          <h1
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(0,0,0,0.7)',
              margin: 0,
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col gap-12 px-8 py-16 md:flex-row md:gap-16">
        {/* Left Text Section */}
        <div className="max-w-full sm:max-w-3xl flex-1 text-left md:text-left">
          <p className="text-justify text-base sm:text-lg leading-relaxed">
            Welcome to <strong>Genesis Trainings</strong>, the training and
            professional development arm of Genesis Engineering, a leading
            software solutions company established in 2017. With years of
            experience delivering innovative technology solutions, we recognized
            the growing demand for skilled professionals who are ready to meet
            the challenges of an ever-evolving digital world.
          </p>
          <p className="mt-6 text-justify text-base sm:text-lg leading-relaxed">
            Genesis Trainings was founded with a clear mission: to bridge the
            gap between academic learning and industry expectations. Our
            programs are designed to provide practical, hands-on training that
            aligns with current market needs, empowering individuals with the
            tools and knowledge to thrive in their careers. Whether you{"'"}re a
            recent graduate looking to break into the tech industry or a
            professional aiming to upgrade your skills, Genesis Trainings is
            your trusted partner for growth. Backed by the expertise and
            industry insights of Genesis Engineering, we bring real-world
            experience into every classroom. At Genesis Trainings, we don{"'"}t
            just teach — we shape careers and build futures.
          </p>
          <p className="mt-6 text-xl font-bold text-center sm:text-2xl md:text-2xl">Learn. Apply. Lead.</p>
          <h3 className="mt-7 text-[1.8rem] font-bold text-center sm:text-[1rem] md:text-[2rem]">
            Join us and turn potential into performance
          </h3>

          {/* Logos */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/navttc.jpg"
                alt="Affiliation Partner Logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
              <span className="mt-2 text-lg font-semibold">
                Affiliation Partner
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/icons/fui.jpg"
                alt="Incubation Partner Logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
              <span className="mt-2 text-lg font-semibold">
                Incubation Partner
              </span>
            </div>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="max-w-full sm:max-w-2xl flex-1 ml-auto">
          <Image
            src="/images/screenshots/AboutBan.jpeg"
            alt="About Banner"
            width={1000}
            height={400}
            style={{
              borderRadius: '8px',
              objectFit: 'cover',
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </section>
    </>
  )
}
