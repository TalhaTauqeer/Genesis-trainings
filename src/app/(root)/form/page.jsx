"use client"

export default function FormPage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/images/screenshots/Registration.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '450px',
          position: 'relative',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            // backgroundColor: "rgba(0, 72, 117, 0.7)", // overlay for readability
            padding: '30px 40px',
            borderRadius: '8px',
          }}
        />
      </section>

      {/* Main Content: Centered Google Form */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: '700px',
          margin: '40px auto',
          padding: '0 20px',
        }}
      >
        {/* Google Form Embed */}
        <div
          style={{
            width: '100%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            height: '700px', // fixed height to show full form nicely
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdlanRdNgaBzftVsOKXiqoug6j6lK0RJGus5uu8m_ogHpbjrQ/viewform?usp=header"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Registration Google Form"
          >
            Loading…
          </iframe>
        </div>
      </section>

      {/*
      // Commented out for future use: Course Details
      <section
        style={{
          flex: '1 1 400px',
          minWidth: '320px',
          backgroundColor: '#f7f9fc',
          borderRadius: '8px',
          padding: '30px 40px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          color: '#004875',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            marginBottom: '15px',
            marginTop: '15px',
          }}
        >
          Payment Options:
        </h3>
        <ul
          style={{
            fontSize: '1.1rem',
            marginLeft: '20px',
            marginBottom: '10px',
          }}
        >
          <li>Online Bank Transfer</li>
          <li>Cash Deposit at any Askari Bank branch</li>
        </ul>

        <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
          Bank Details:
        </h4>
        <p
          style={{
            fontSize: '1.1rem',
            marginBottom: '10px',
            marginLeft: '20px',
          }}
        >
          <strong>Bank:</strong> Askari Bank Limited
          <br />
          <strong>Account Number:</strong> 0271650510435
          <br />
          <strong>IBAN:</strong> PK94 ASCM 0000 2716 5051 0435
        </p>

        <p style={{ fontSize: '1.1rem', marginTop: '20px' }}>
          Once the payment is made, please email a scanned copy of the deposit
          slip to:
        </p>
        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
          📧 info.niai@netsoltech.com
        </p>
      </section>
      */}
    </div>
  )
}
