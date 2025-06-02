import { courses } from '@/data/coursecard' // Import course data
import Image from 'next/image'
import { Button } from '@/components/Button' // Assuming Button component is already created

// Helper function to format the date

export default function Trainings() {
  return (
    <div className="trainings">
      {/* Banner Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '300px' /* Adjust the height as needed */,
        }}
      >
        <Image
          src="/images/screenshots/Training.jpg" // Correct path to the banner image
          alt="Training Banner"
          layout="fill"
          objectFit="cover"
          style={{ position: 'absolute', inset: 0 }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            paddingTop: '4rem',
            paddingBottom: '4rem',
          }}
        ></div>
        <div
          style={{
            height: '5px',
            backgroundColor: '#004875' /* Changed to #004875 */,
            width: '100%',
          }}
        ></div>
      </section>

      <section className="grid w-full grid-cols-3 gap-10 px-32 py-14">
        {courses.map((course, index) => (
          <div
            key={index}
            className="h-full overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div
              className="h-[250px]"
              style={{
                backgroundImage: `url('${course.image}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            ></div>
            <div className="relative flex h-full flex-col gap-2 p-5 pt-5">
              <div className="text-lg font-semibold">{course.title}</div>
              <div className="flex justify-between text-[15px] font-light text-[#004875]">
                <p>Starting From</p>
                <p>{course.details.date}</p>
              </div>
              <div className="text-md font-light">{course.description}</div>
              <Button
                className="mt-3 w-full rounded-lg bg-[#0F172B] hover:bg-[#004875]"
                href={`/courses/${course.index}`}
              >
                Enroll Now
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}