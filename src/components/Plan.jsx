import Image from 'next/image'

// Plan component with image, description, and date
export function Plan({ image, description, date }) {
  return (
    <section
      className="flex flex-col overflow-hidden rounded-3xl bg-slate-800"
      style={{
        minWidth: '280px',
        maxWidth: '290px',
        marginRight: '20px', // Spacing between cards
        marginBottom: '10px', // Spacing below each card
      }}
    >
      <div className="relative w-full" style={{ height: '200px' }}>
        {/* Updated height for image container */}
        <Image
          src={image}
          alt="Course image"
          layout="responsive" // Ensures responsive sizing without distorting the aspect ratio
          width={290} // Match the card's width
          height={300} // New height to match the updated container height
          objectFit="cover" // Ensures the image covers the space without distortion
          className="rounded-t-3xl"
        />
      </div>

      <div className="p-4" style={{ height: '250px' }}>
        <p className="text-base leading-relaxed text-white">{description}</p>
        <hr className="my-4 border-t border-gray-500" />
        <p className="text-sm font-medium text-blue-400">
          Starting From {date}
        </p>
      </div>
    </section>
  )
}
