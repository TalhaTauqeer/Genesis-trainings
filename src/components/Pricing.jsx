'use client'

import { courses } from '@/data/coursecard'
import { Plan } from './Plan'
import { Container } from '@/components/Container'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Link from 'next/link'

// Pricing component
export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mb-16 text-center sm:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            OUR TRAINING PROGRAMS
          </h2>
        </div>

        {/* Carousel with react-multi-carousel */}
        <Carousel
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 1024 },
              items: 4,
            },
            desktop: {
              breakpoint: { max: 1024, min: 768 },
              items: 3, // Reduced from 4 to 3 for better fit
            },
            tablet: {
              breakpoint: { max: 768, min: 464 },
              items: 2, // Reduced for better layout
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1, // Show only 1 card on mobile
            },
          }}
          className='mx-[3rem] md:mx-0 gap-2'
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={500}
          arrows={true}
          showDots={false}
          renderButtonGroupOutside={true} // Ensure arrows are outside
          containerClass="carousel-container"
          itemClass="carousel-item"
          style={{
            padding: '0 3px', // Increased padding for more space
            width: 'calc(100% + 100px)', // Increase the carousel width to take up more space
            marginLeft: '-50px', // Moves the carousel content left
            marginRight: '-50px', // Moves the carousel content right
            display: 'flex', // Ensure proper centering of the carousel
            justifyContent: 'center', // Center the carousel items
          }}
        >
          {/* Rendering the cards */}
          {courses.map(({ index, image, description, details }) => (
            <Plan
              
              key={index}
              image={image}
              description={description}
              date={details.date}
              index={index} // Pass index to the Plan component
            />
          ))}
        </Carousel>
      </Container>

      <style jsx>{`
        .carousel-container {
          position: relative;
        }
        .react-multi-carousel-dot {
          display: none;
        }
        .react-multi-carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
        }
        .react-multi-carousel-arrow--left {
          left: 0; /* Move the left arrow to the left side */
        }
        .react-multi-carousel-arrow--right {
          right: 0; /* Move the right arrow to the right side */
        }
      `}</style>
    </section>
  )
}
