'use client';

export default function ComingSoon() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundImage: 'url(/images/construction1.jpg)', // ✅ local image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        padding: '20px'
      }}>
        <h1 style={{
          fontSize: '64px',
          marginBottom: '20px'
        }}>
          🚧 Coming Soon
        </h1>

        <p style={{
          fontSize: '22px',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Our website is under construction.  
          We’ll be live soon. Stay tuned!
        </p>
      </div>
    </div>
  );
}