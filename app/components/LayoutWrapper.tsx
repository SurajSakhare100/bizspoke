'use client';

import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();
  const isStudioPage = pathname.startsWith('/studio');

  return (
    <>
      {!isStudioPage && <Navigation />}
      <div className={isStudioPage ? '' : 'pt-16 md:pt-20'}>
        {children}
      </div>
      {!isStudioPage && <Footer />}
    </>
  );
}
