'use client';

import Head from 'next/head'; // Import Head for title and favicon

const dotStyle = {
  width: '10px',
  height: '10px',
  backgroundColor: '#FF6F61',
  borderRadius: '50%',
  animation: 'bounce 1.4s infinite ease-in-out both'
};

export default function ComingSoon() {
  return (
    <>
      {/* Page Metadata */}
      <Head>
        <title>Kedar Developers</title> {/* Tab title */}
        <meta name="description" content="Website under construction" />
        <link rel="icon" href="/favicon.ico" /> {/* Custom favicon */}
      </Head>

      {/* Full Page Background */}
      <div style={{
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(/images/construction1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden'
      }}>

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
        }} />

        {/* Centered Glass Card */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px'
        }}>
          
          <div style={{
            backdropFilter: 'blur(12px)',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '50px 40px',
            textAlign: 'center',
            color: '#fff',
            maxWidth: '600px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            animation: 'fadeIn 1.5s ease'
          }}>
            
            <h1 style={{
              fontSize: '60px',
              marginBottom: '15px',
              letterSpacing: '2px'
            }}>
              🚧 Coming Soon
            </h1>

            <p style={{
              fontSize: '20px',
              lineHeight: '1.6',
              color: '#ddd',
              marginBottom: '30px'
            }}>
              We’re building something amazing for you.  
              Our website is under construction and will be live soon.
            </p>

            {/* Animated Loader */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px'
            }}>
              <span style={dotStyle}></span>
              <span style={{ ...dotStyle, animationDelay: '0.2s' }}></span>
              <span style={{ ...dotStyle, animationDelay: '0.4s' }}></span>
            </div>

          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
          }
        `}</style>
      </div>
    </>
  );
}