import React from "react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center text-white flex items-center justify-center text-center py-32 px-4"
        style={{
          backgroundImage: 'url("/images/screenshots/call.png")',
        }}
      >
        <div className=" p-8 rounded-lg">
          <h1 className="text-4xl sm:text-5xl font-bold text-shadow-lg">Contact Us</h1>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section className="py-16 px-4 bg-white text-center w-full">
        <p className="text-lg sm:text-xl font-light mb-12">
          We’re here to help and answer any question you might have.
        </p>

        <div className="md:flex flex md:flex-row flex-col md:gap-0 gap-10 items-center justify-around w-full px-10">
          {/* Contact Phone */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-8 lg:space-y-10 flex-grow-0">
            <div className="text-5xl text-[#007aff]">
              <Image
                src="/images/icons/phone.png"
                alt="Phone Icon"
                width={60}
                height={60}
              />
            </div>
            <div className="text-[#f15a24] font-semibold text-lg">CONTACT</div>
            <div className="text-lg">+92 313 734 4465</div>
          </div>

          {/* Email Section (Center-Aligned) */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-8 lg:space-y-10 flex-grow-0">
            <div className="text-5xl">🎧</div>
            <div className="text-[#f15a24] font-semibold text-lg">EMAIL</div>
            <div className="text-lg">trainings@genesisengr.com</div>
          </div>

          {/* Timing Section (Right-Aligned) */}
          <div className="flex flex-col items-center space-y-4 sm:space-y-8 lg:space-y-10 flex-grow-0">
            <div className="text-5xl md:mt-8 ">🕒</div>
            <div className="text-[#f15a24] font-semibold text-lg">TIMINGS</div>
            <div className="text-lg">10:00 AM to 07:00 PM <br /> (Mon – Fri)</div>
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <section className="py-16 px-4 text-center bg-white">
        <div className="flex justify-center gap-6 mb-4">
          {['Facebook', 'Instagram', 'LinkedIn'].map((icon) => (
            <a
              key={icon}
              href={`https://www.${icon.toLowerCase()}.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon}
              className="icon-container"
            >
              <Image
                src={`/images/icons/${icon}.png`}
                alt={icon}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>

        <div className="text-[#f15a24] font-semibold text-lg mb-2">BE SOCIAL</div>
        <div className="text-md text-gray-600">Get in touch with us on social media</div>
      </section>

      {/* Our Campuses Section */}
      <section className="bg-[#f2f2f2] py-16 px-4 text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">OUR CAMPUS</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Image Wrapper */}
          <div className="flex-shrink-0 w-80 sm:w-96">
            <Image
              src="/images/screenshots/isb.jpg"
              alt="ISLAMABAD"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left max-w-md">
            <p className="font-bold text-xl mb-4">ISLAMABAD</p>
            <p className="text-lg mb-6">
              Bahria Spring North, Plaza 180, Road 16, Phase 7
              <br />
              Islamabad, Pakistan
            </p>

            <a
              href="https://www.google.com/maps/place/Genesis+Engineering/data=!4m2!3m1!1s0x0:0xb62bfedbc152d6f?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#007aff] text-white py-3 px-6 rounded-md font-semibold"
            >
              VIEW ON GOOGLE MAPS
            </a>
          </div>
        </div>
      </section>

      {/* Inline CSS for icon hover */}
      <style>{`
        .icon-container {
          display: inline-flex;
          background-color: #0F172B;
          border-radius: 8px;
          padding: 6px;
          transition: background-color 0.3s ease;
        }
        .icon-container:hover {
          background-color: #004875;
        }
        .icon-container img {
          display: block;
        }
      `}</style>
    </>
  );
}
