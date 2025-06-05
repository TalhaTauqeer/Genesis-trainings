import { courses } from '@/data/coursecard' // Import course data
import Image from 'next/image'
import { Button } from '@/components/Button' // Assuming Button component is already created

// Helper function to format the date

export default function Trainings() {
  return (
    <div className="flex flex-col">
      {/* Banner Section */}
      <section className="relative w-full bg-cover py-24 text-white md:gap-4 md:py-44">
        <div className="absolute inset-0">
          <Image
            src="/images/screenshots/Training.jpg"
            alt="Training Banner"
            fill
            className="bg-left bg-no-repeat object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid w-full grid-cols-1 gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-3 lg:px-32">
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
            <div className="relative flex h-[250px] flex-col justify-between p-5 pt-5 md:h-[270px] lg:h-[270px]">
              <div className="flex flex-col gap-2">
                <div className="text-[17px] font-semibold md:text-lg">
                  {course.title}
                </div>
                <div className="flex justify-between text-[15px] font-light text-[#004875]">
                  <p>Starting From</p>
                  <p>{course.details.date}</p>
                </div>
                <div className="text-[15px] font-light">
                  {course.description}
                </div>
              </div>
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
