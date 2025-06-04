export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/images/screenshots/enrollment.png")',
          backgroundSize: 'cover',     // ensures the image fills the container, potentially cropping
          backgroundPosition: 'center',
          minHeight: '60vh',            // ensure it takes at least the full viewport height
          height: 'auto',               // automatic height adjustment
          position: 'relative',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px',
          backgroundColor: '#004875',  // fallback background color in case of any gaps
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
          >
            About Us
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex flex-col md:flex-row items-start md:items-center p-8 gap-12">
        {/* Left Text Section */}
        <div className="flex-1 max-w-3xl">
          <p className="text-lg leading-relaxed text-justify">
            Welcome to <strong>Genesis Trainings</strong>, the training and professional development arm of Genesis Engineering, a leading software solutions company established in 2017. With years of experience delivering innovative technology solutions, we recognized the growing demand for skilled professionals who are ready to meet the challenges of an ever-evolving digital world.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-justify">
            Genesis Trainings was founded with a clear mission: to bridge the gap between academic learning and industry expectations. Our programs are designed to provide practical, hands-on training that aligns with current market needs, empowering individuals with the tools and knowledge to thrive in their careers.
            Whether you're a recent graduate looking to break into the tech industry or a professional aiming to upgrade your skills, Genesis Trainings is your trusted partner for growth. Backed by the expertise and industry insights of Genesis Engineering, we bring real-world experience into every classroom.
            At Genesis Trainings, we don't just teach — we shape careers and build futures.
          </p>
          <p className="mt-6 font-bold text-xl">Learn. Apply. Lead.</p>
          <h3 className="mt-8 font-bold text-2xl">Join us and turn potential into performance.</h3>

          {/* Logos */}
          <div className="mt-8 flex gap-16 items-center">
            <div className="flex flex-col items-center">
              <img
                src="/images/icons/navttc.jpg"
                alt="Affiliation Partner Logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
              <span className="font-semibold mt-2 text-lg">Affiliation Partner</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/icons/fui.jpg"
                alt="Incubation Partner Logo"
                width={100}
                height={100}
                style={{ objectFit: 'contain' }}
              />
              <span className="font-semibold mt-2 text-lg">Incubation Partner</span>
            </div>
          </div>
        </div>

        {/* Right Banner Image */}
        <div className="flex-1 max-w-2xl ml-auto">
          <img
            src="/images/screenshots/AboutBan.jpeg"
            alt="About Banner"
            width={1000}
            height={300}
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
  );
}
