import { courses } from '@/data/coursecard'; // Import course data
import Image from 'next/image';
import { Button } from '@/components/Button'; // Assuming Button component is already created

// Helper function to format the date

export default function Trainings() {
  return (
    <div className="trainings">
      {/* Banner Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          height: '300px', /* Adjust the height as needed */
        }}
      >
        <Image
          src="/images/screenshots/Studying.jpg" // Correct path to the banner image
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
          <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
            Ecommerce Training Programs in Pakistan
          </h1>
          <p style={{ color: 'white', marginTop: '1rem' }}>
            Step out of your comfort zone because Enablers has brought the perfect learning experience for your entrepreneurial growth.
          </p>
        </div>
        <div
          style={{
            height: '5px',
            backgroundColor: '#004875', /* Changed to #004875 */
            width: '100%',
          }}
        ></div>
      </section>

      {/* Courses Section */}
      <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
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
                flexDirection: 'column',
                padding: '1rem', // Padding added back to the content area
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                minHeight: '500px', // Ensure the card has enough height
                height: '100%', // Fill up the container, ensuring flexbox works properly
              }}
              className="course-card"
            >
              {/* Image occupies the full top portion without padding */}
              <div
                style={{
                  width: '100%',
                  height: '250px',
                  overflow: 'hidden',
                  padding: 0,
                  margin: 0,
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                }}
              >
                <Image
                  src={course.image}
                  alt={`Course Image ${course.index}`}
                  width={500}
                  height={250}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block', // removes default inline space
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                  }}
                />

              </div>

              {/* Title of the course */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: '1rem',
                  marginTop: '1rem', // Space between image and title
                }}
              >
                {course.title}
              </h3>

              {/* Date Section */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <p style={{ fontSize: '0.875rem', color: '#004875' }}>Starting From</p>
                <p style={{ fontSize: '0.875rem', color: '#004875' }}>{course.details.date}</p>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.875rem', color: '#333', marginBottom: '1rem', flexGrow: 1 }}>
                {course.description}
              </p>

              {/* Divider Line */}
              <div
                style={{
                  borderBottom: '1px solid #004875',
                  marginTop: '1rem',
                  marginBottom: '1rem',
                }}
              ></div>

              {/* Enroll Now Button (Fixed at the bottom) */}
              <div style={{ marginTop: 'auto' }}>
                <Button
                  href={`/courses/${course.index}`} // Dynamic course details page link
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
  );
}
