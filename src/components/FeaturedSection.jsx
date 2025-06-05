import Image from 'next/image'

export function FeaturedSection() {
  return (
    <section className="max-w-[90vw] mx-auto py-16 px-4">
      <h2 className="mb-12 text-center text-[35px] font-bold tracking-tight text-[#004875]">
        GUIDED BY EXPERIENCE, DRIVEN BY INNOVATION
      </h2>

      {/* Flex container to stack images on mobile and display side by side on desktop */}
      <div className="flex flex-col sm:flex-row gap-8">
        {/* CEO Image Container */}
        <div className="relative w-full sm:w-1/2 overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/screenshots/CEO.jpeg"
            alt="Immad Ishaq"
            width={600} // Adjust width for desktop
            height={250} // Adjust height for desktop
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#004875]/50 px-6 py-4 sm:py-8">
            <h3 className="text-white font-bold text-[28px] sm:text-[32px] mb-1">IMMAD ISHAQ</h3>
            <p className="text-white text-[18px] sm:text-[20px] mb-4">CEO & CO-FOUNDER</p>
          </div>
        </div>

        {/* COO Image Container */}
        <div className="relative w-full sm:w-1/2 overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <Image
            src="/images/screenshots/COO.jpeg"
            alt="Muddaser Ahmed"
            width={600} // Adjust width for desktop
            height={250} // Adjust height for desktop
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[#004875]/50 px-6 py-4 sm:py-8">
            <h3 className="text-white font-bold text-[28px] sm:text-[32px] mb-1">MUDDASER AHMED</h3>
            <p className="text-white text-[18px] sm:text-[20px] mb-4">COO & CO-FOUNDER</p>
          </div>
        </div>
      </div>
    </section>
  )
}
