import Image from 'next/image'
import Link from 'next/link'

// Plan component with image, description, and date
export function Plan({ image, description, date, index }) {
  return (
    <section
      className="flex flex-col overflow-hidden rounded-3xl bg-slate-800"
      style={{
        minWidth: '280px', // Ensure a minimum width for smaller screens
        maxWidth: '290px', // Set max width to ensure uniform size
        marginRight: '20px', // Spacing between cards
        marginBottom: '10px', // Spacing below each card
        height: '500px', // Fixed height to ensure consistency on desktop
      }}
    >
      {/* Image Section */}
      <div className="relative w-full" style={{ height: '250px' }}>
        <Image
          src={image}
          alt="Course image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-3xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-full text-center">
        <div className="text-lg sm:text-xl text-white mb-3">
          {description}
        </div>

        <p className="text-sm font-medium text-blue-400 mb-4">
          Starting From {date}
        </p>

        {/* Enroll Now Button */}
        <Link href={`/courses/${index}`}>
          <button
            className="w-full py-2 rounded-lg bg-[#0F172B] hover:bg-[#004875] text-white"
          >
            Enroll Now
          </button>
        </Link>
      </div>
    </section>
  )
}
