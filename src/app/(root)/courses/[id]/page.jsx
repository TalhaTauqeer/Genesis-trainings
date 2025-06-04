import { Button } from '@/components/Button'
import { courses } from '@/data/coursecard' // Import course data

export default function CoursePage({ params }) {
  const { id } = params
  const course = courses.find((course) => course.index == id) // Find course by index

  if (!course) {
    return <div>Course not found...</div> // In case the course is not found
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${course.heroImage})`, // Hero image from course data
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '160px 0',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          minHeight: 'calc(50vh + 160px)', // Increased height for additional content
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '18%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            maxWidth: '600px',
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
            {course.title}
          </h1>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>
            {course.description}
          </p>

          {/* Adding Start Date and Fee below the Description */}
          <div
            style={{
              marginTop: '30px',
              fontSize: '1.5rem',
              color: '#FFD700', // Price color
              fontWeight: 'bold',
            }}
          >
            <p style={{ marginBottom: '10px' }}>
              <span style={{ fontSize: '1.2rem', color: 'white' }}>
                Starting From:
              </span>{' '}
              {course.details.date}
            </p>
            <p style={{ marginTop: '10px' }}>
              <span style={{ fontSize: '1.2rem', color: 'white' }}>Fee:</span>{' '}
              {course.details.fee}
            </p>
          </div>
          {/* Enroll Now Button */}
          <Button
            href={'/form'}
            style={{
              backgroundColor: '#FFD700',
              color: 'black',
              padding: '12px 32px',
              fontSize: '1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              border: 'none',
              textDecoration: 'none',
              marginTop: '25px',
              display: 'inline-block',
            }}
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Why Join This Training? */}
      <section
        style={{
          backgroundColor: '#f5fafd',
          padding: '60px 0',
          textAlign: 'left',
          color: '#004875',
        }}
      >
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Why Join This Training?
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px',
          }}
        >
          {course.details.whyJoin.map((item, index) => (
            <div
              key={index}
              style={{
                fontSize: '1.2rem',
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <span
                role="img"
                aria-label="check"
                style={{ marginRight: '10px' }}
              >
                ✔
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* What You'll Learn */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '40px 0',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          What You{"'"}ll Learn
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            columnGap: '0px',
            marginLeft: '10%',
            marginTop: '30px',
          }}
        >
          {course.details.content.map((item, index) => (
            <div key={index} style={{ fontSize: '1.2rem', color: '#004875' }}>
              <span
                role="img"
                aria-label="check"
                style={{ marginRight: '10px' }}
              >
                ✔
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Core Skills Covered */}
      <section
        style={{
          backgroundColor: '#004875',
          padding: '30px 0',
          textAlign: 'left',
          color: 'white',
        }}
      >
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Core Skills Covered
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginLeft: '10%',
            marginTop: '30px',
          }}
        >
          {course.details.coreSkills.map((item, index) => (
            <div
              key={index}
              style={{ fontSize: '1.2rem', marginBottom: '15px' }}
            >
              <span
                role="img"
                aria-label="check"
                style={{ marginRight: '10px' }}
              >
                ✔
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Tools You'll Use */}
      <section
        style={{
          backgroundColor: '#f7f9fc',
          padding: '20px 0',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Tools You{"'"}ll Use
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',      // changed from 'column' to 'row'
            justifyContent: 'center',  // center items horizontally
            flexWrap: 'wrap',          // allow wrapping if too wide
            marginTop: '5px',
            gap: '30px',               // space between items horizontally and vertically
          }}
        >
          {course.details.tools.map((item, index) => (
            <div
              key={index}
              style={{
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                marginBottom: '20px',        // remove vertical margin, spacing done by gap
              }}
            >
              <span
                role="img"
                aria-label="check"
                style={{ marginRight: '10px' }}
              >
                ✔
              </span>
              {item}
            </div>
          ))}
        </div>
      </section>


  {/* Module Snapshot */}
      <section
        style={{
          backgroundColor: '#ffffff',
          padding: '60px 0',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Module Snapshot
        </h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginTop: '40px',
            marginLeft: '2%',
            marginRight: '10px',
          }}
        >
          {course.details.moduleSnapshot.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#f7f9fc',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h4 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                {item.heading}
              </h4>
              <ul style={{ listStyleType: 'none', padding: '0' }}>
                {item.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    style={{ fontSize: '1.1rem', marginBottom: '10px' }}
                  >
                    <span
                      role="img"
                      aria-label="check"
                      style={{ marginRight: '10px' }}
                    >
                      ✔
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enroll Now Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button
            href="/form"
            style={{
              backgroundColor: '#004875',
              color: 'white',
              padding: '12px 32px',
              fontSize: '1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              border: 'none',
              textDecoration: 'none',
            }}
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Career Outlook */}
      <section
        style={{
          backgroundColor: '#004875',
          color: 'white',
          padding: '40px 0',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Career Outlook
        </h3>
        <p
          style={{ fontSize: '1.2rem', marginTop: '20px', textAlign: 'center' }}
        >
          {course.details.careerOutlook}
        </p>
      </section>

      {/* International Free Certificate Option */}
      <section
        style={{
          backgroundColor: '#FFD700',
          color: '#004875',
          padding: '5px 0',
          textAlign: 'center',
          fontSize: '1.3rem',
          fontWeight: 'bold',
        }}
      >
        <p>Get Certified by Genesis Trainings</p>
        <p>International Free Certificate Option</p>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#004875',
          padding: '20px 0',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <p>© 2025 Genesis Trainings. All rights reserved.</p>
      </footer>
    </div>
  )
}
