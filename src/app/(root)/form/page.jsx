export default function FormPage() {
  return (
    <div
      style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
    >
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url("/images/screenshots/Registration.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '620px',
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
        >
        </div>
      </section>

      {/* Main Content: Google Form Left, Details Right */}
      <section
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '40px auto',
          padding: '0 20px',
          gap: '40px',
        }}
      >
        {/* Left: Google Form Embed */}
        <div
          style={{
            flex: '1 1 500px',
            minWidth: '320px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            height: '700px', // fixed height to show full form nicely
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfDIXdEKfLXX-HNcKq79kJHRuVojECOjL9aTP0FUs4fUYOZ_w/viewform?embedded=true"
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

        {/* Right: Course Details */}
        <div
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
          {/* New Program Fee & Payment Guidelines Section */}
          <h3
            style={{
              fontSize: '1.8rem',
              marginBottom: '15px',
              marginTop: '30px',
            }}
          >
            Program Fee & Payment Guidelines
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            The NETSOL Institute of Artificial Intelligence (NIAI) offers
            flexible six-month training programs for both in-person and online
            participants.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            <strong>In-Person Program Fee:</strong> PKR 225,000
            <br />
            <strong>Online Program Fee:</strong> PKR 175,000
            <br />
            <em>*Exclusive of taxes</em>
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
            The fee includes expert-led sessions, course materials, and
            certification support.
          </p>

          <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
            Payment Options:
          </h4>
          <ul
            style={{
              fontSize: '1.1rem',
              marginLeft: '20px',
              marginBottom: '15px',
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
        </div>
      </section>
    </div>
  )
}
