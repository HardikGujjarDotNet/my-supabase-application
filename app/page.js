'use client';

export default function ComingSoon() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e)',
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
          marginBottom: '20px',
          letterSpacing: '2px'
        }}>
          🚧 Coming Soon
        </h1>

        <p style={{
          fontSize: '22px',
          maxWidth: '600px',
          lineHeight: '1.6'
        }}>
          Our website is currently under construction.  
          We’re working hard to launch something amazing. Stay tuned!
        </p>

        {/* Optional Button */}
        <button style={{
          marginTop: '30px',
          padding: '12px 30px',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#FF6F61',
          color: '#fff',
          cursor: 'pointer'
        }}
        onMouseEnter={e => e.target.style.backgroundColor = '#ff3b2e'}
        onMouseLeave={e => e.target.style.backgroundColor = '#FF6F61'}
        >
          Notify Me
        </button>
      </div>
    </div>
  );
}