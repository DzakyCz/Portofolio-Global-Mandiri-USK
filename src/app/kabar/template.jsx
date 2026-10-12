'use client';

import { usePathname } from 'next/navigation';

export default function KabarTemplate({ children }) {
  const pathname = usePathname();
  const isListPage = pathname === '/kabar';

  return (
    <div className={`kabar-page-transition${isListPage ? ' is-back' : ' is-enter'}`}>
      {children}
    </div>
  );
}
