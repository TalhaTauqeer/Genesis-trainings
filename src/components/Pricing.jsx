'use client'

import { courses } from '@/data/coursecard'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { useState } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

// Plan component with image, description, and date
function Plan({ image, description, date }) {
  return (
    <section
      className="flex flex-col rounded-3xl bg-slate-800 overflow-hidden"
      style={{
        minWidth: '280px',
        maxWidth: '290px',
        marginRight: '20px', // Spacing between cards
        marginBottom: '10px', // Spacing below each card
      }}
    >
      <div className="relative w-full" style={{ height: '200px' }}> {/* Updated height for image container */}
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
        <p className="text-white text-base leading-relaxed">{description}</p>
        <hr className="border-t border-gray-500 my-4" />
        <p className="text-blue-400 text-sm font-medium">
          Starting From {date}
        </p>
      </div>
    </section>
  )
}

// Pricing component
export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-slate-900 py-20 sm:py-32">
      <Container>
        <div className="md:text-center mb-16">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Simple pricing, for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t work well for you.
          </p>
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
              items: 1,
            },
          }}
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
            padding: '0 5px', // Increased padding for more space
            width: 'calc(100% + 100px)', // Increase the carousel width to take up more space
            marginLeft: '-50px', // Moves the carousel content left
            marginRight: '-50px', // Moves the carousel content right
          }}
        >
          {/* Rendering the cards */}
          {courses.map(({ index, image, description, details }) => (
            <Plan key={index} image={image} description={description} date={details.date} />
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
