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
          height: '400px' /* Adjust the height as needed */,
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
        >
        </div>
        <div
          style={{
            height: '5px',
            backgroundColor: '#004875' /* Changed to #004875 */,
            width: '100%',
          }}
        ></div>
      </section>


      {/* Courses Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {courses.map((course) => (
            <div
              key={course.index}
              style={{
                display: 'flex',
                flexDirection: 'column',   // make it flex column
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                maxHeight: "500px",
                // optionally, you can add minHeight to keep uniformity
              }}
            >
              {/* Image */}
              <Image
                src={course.image}
                alt={`Course Image ${course.index}`}
                width={500}
                height={350}
                style={{
                  objectFit: 'cover',
                  display: 'block',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              />

              {/* Content: title, date, description */}
              <div 
                className='w-full px-3 py-2'
                style={{
                  flexGrow: 1  // <-- make this grow to fill available space
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                  }}
                >
                  {course.title}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <p style={{ fontSize: '0.875rem', color: '#004875' }}>
                    Starting From
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#004875' }}>
                    {course.details.date}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: '#333',
                    marginBottom: '1rem',
                  }}
                >
                  {course.description}
                </p>
                <div
                  style={{
                    borderBottom: '1px solid #004875',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                  }}
                ></div>
              </div>

              {/* Enroll Now Button */}
              <div className='px-3 mb-4'>
                <Button
                  href={`/courses/${course.index}`}
                  style={{
                    width: '100%',
                    backgroundColor: '#004875',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '5px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
