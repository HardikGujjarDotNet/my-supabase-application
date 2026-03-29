'use client';

export default function ComingSoon() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '60px', color: '#FF6F61', marginBottom: '20px' }}>Coming Soon</h1>
      <p style={{ fontSize: '24px', color: '#333', maxWidth: '600px' }}>
        We are working hard to bring you something amazing! Stay tuned and check back soon.
      </p>
      <img 
        src="https://source.unsplash.com/400x300/?construction,website" 
        alt="Coming Soon" 
        style={{ marginTop: '40px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
      />
    </div>
  );
}