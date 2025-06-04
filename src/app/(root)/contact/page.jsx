import React from "react";
import Image from 'next/image';


export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/images/screenshots/call.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          height: "auto",
          position: "relative",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 20px",
          backgroundColor: "#004875",
        }}
      >
        <div
          style={{
            padding: "30px 40px",
            borderRadius: "8px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              textShadow: "0 0 10px rgba(0,0,0,0.7)",
              margin: 0,
            }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Talk to Us Section */}
      <section
        style={{
          width: "100%",
          padding: "40px 60px",
          boxSizing: "border-box",
          textAlign: "center",
          borderTop: "1px solid #ccc",
          borderBottom: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      >
        <p style={{ marginBottom: "50px", fontSize: "1.3rem" }}>
          We’re here to help and answer any question you might have.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            flexWrap: "wrap",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Contact Phone */}
<div
  style={{
    flex: "1 1 300px",
    borderRight: "1px solid #ccc",
    paddingRight: "40px",
    minWidth: "280px",
  }}
>
  {/* Phone Icon */}
  <div style={{ fontSize: "4.5rem", marginBottom: "27px", marginLeft:'110px', marginTop: '20px', color: "#007aff" }}>
    <Image
      src="/images/icons/phone.png" // Replace with your actual phone icon file path
      alt="Phone Icon"
      width={80}  // Set width
      height={80} // Set height to maintain aspect ratio
    />
  </div>

  {/* Contact Label */}
  <div
    style={{
      color: "#f15a24",
      fontWeight: "600",
      marginBottom: "13px",
      fontSize: "1.3rem",
      letterSpacing: "1px",
    }}
  >
    CONTACT
  </div>

  {/* Phone Number */}
  <div style={{ fontSize: "1.3rem", lineHeight: "1.5" }}>+9242 111 123 111</div>
</div>

          {/* Email Section */}
<div
  style={{
    flex: "1 1 300px",
    borderRight: "1px solid #ccc",
    padding: "0 40px",
    minWidth: "280px",
  }}
>
  <div style={{ fontSize: "4.5rem", marginBottom: "15px" }}>🎧</div>
  <div
    style={{
      color: "#f15a24",
      fontWeight: "600",
      marginBottom: "15px",
      fontSize: "1.3rem",
      letterSpacing: "1px",
    }}
  >
    EMAIL
  </div>
  <div style={{ fontSize: "1.3rem", lineHeight: "1.5" }}>trainings@genesisengr.com</div>
</div>

{/* Timing Section */}
<div
  style={{
    flex: "1 1 300px",
    paddingLeft: "40px",
    minWidth: "280px",
  }}
>

  <div style={{ fontSize: "4.5rem", marginBottom: "15px" }}>🕒</div>
    <div
    style={{
      color: "#f15a24",
      fontWeight: "600",
      marginBottom: "15px",
      fontSize: "1.3rem",
      letterSpacing: "1px",
    }}
  >
    TIMINGS
  </div>
  <div style={{ fontSize: "1.3rem", lineHeight: "1.5" }}>
    10:00 AM to 07:00 PM (Mon – Fri)
  </div>
</div>

        </div>

        {/* Social Media Icons */}
        <div style={{ marginTop: "50px", textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginBottom: "15px",
            }}
          >
            {["Facebook", "Instagram", "LinkedIn"].map((icon) => (
              <a
                key={icon}
                href={`https://www.${icon.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon}
                className="icon-container"
              >
                <img
                  src={`/images/icons/${icon}.png`}
                  alt={icon}
                  style={{ width: "30px", height: "30px", display: "block" }}
                />
              </a>
            ))}
          </div>

          <div
            style={{
              color: "#f15a24",
              fontWeight: "600",
              marginBottom: "8px",
              fontSize: "1.3rem",
              letterSpacing: "1.1px",
            }}
          >
            BE SOCIAL
          </div>

          <div style={{ fontSize: "1.1rem", color: "#333" }}>
            Get in touch with us on social media
          </div>
        </div>
      </section>

      {/* Our Campuses Section */}
<section
  style={{
    backgroundColor: "#f2f2f2",
    padding: "40px 20px",
    width: "100%",
    // maxWidth: "900px",
    // margin: "40px auto",
    borderRadius: "8px",
    textAlign: "left",
  }}
>
  <h2 style={{ fontWeight: "bold", textAlign: "center", marginBottom: "30px", fontSize: "2rem" }}>
    OUR CAMPUS
  </h2>

  <div
    style={{
      display: "flex",
      width: "100%",
      gap: "30px",
      alignItems: "center",
      flexWrap: "wrap",
      paddingLeft: '130px'
    //   justifyContent: "left",
    }}
  >
    <img
      src="/images/screenshots/isb.jpg" // Replace with your actual Minar image path
      alt="ISLAMABAD"
      style={{ maxWidth: "600px", height: "auto", borderRadius: "6px", flexShrink: 0}}
    />

    <div style={{ minWidth: "280px" }}>
      <p style={{ margin: "0 0 20px 0", fontSize: "30px", fontWeight: "bold" }}>ISLAMABAD</p>
      <p style={{ marginBottom: "30px", fontSize: "20px", lineHeight: "1.4" }}>
        Bahria Spring North, Plaza 180, Road 16، Phase 7
        <br />
        Rawalpindi, Pakistan
      </p>

      <a
        href="https://www.google.com/maps/place/Genesis+Engineering/data=!4m2!3m1!1s0x0:0xb62bfedbc152d6f?sa=X&ved=1t:2428&ictx=111" // Replace with actual Google Maps URL
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#007aff",
          color: "white",
          padding: "12px 25px",
          borderRadius: "4px",
          fontWeight: "700",
          textDecoration: "none",
          display: "inline-block",
          letterSpacing: "0.7px",
        }}
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
