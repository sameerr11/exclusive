import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AnimatedBackground from './AnimatedBackground';
import CustomCursor from './CustomCursor';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background flex flex-col relative cursor-none">
      <CustomCursor />
      <AnimatedBackground />
      <Navigation />
      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout; 