'use client';

import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <nav style={{ background: '#333', padding: 10, display: 'flex', gap: 20 }}>
          <Link href="/posts" style={{ color: 'white' }}>Posts List</Link>
          <Link href="/posts/add" style={{ color: 'white' }}>Add Post</Link>
        </nav>
        <div style={{ padding: 20 }}>{children}</div>
      </body>
    </html>
  );
}