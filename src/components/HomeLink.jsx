'use client';

import Link from 'next/link';

export default function HomeLink({ children, ...props }) {
  return (
    <Link
      href="/#home"
      onClick={() => {
        if (window.location.pathname === '/') {
          document.getElementById('home')?.scrollIntoView({ behavior: 'instant' });
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
