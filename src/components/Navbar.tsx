
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/2570827d-9c8e-43ee-8833-376bdf28a33e.png" 
            alt="أبشر" 
            className="h-12 md:h-16" 
          />
        </div>

        <div className="hidden md:flex space-x-6 space-x-reverse text-absher-dark font-medium">
          <a href="#features" className="hover:text-absher-teal transition-colors">الميزات</a>
          <a href="#modules" className="hover:text-absher-teal transition-colors">الوحدات</a>
          <a href="#benefits" className="hover:text-absher-teal transition-colors">المزايا</a>
          <a href="#contact" className="hover:text-absher-teal transition-colors">تواصل معنا</a>
        </div>

        <div className="hidden md:block">
          <Button className="bg-absher-teal hover:bg-absher-teal/90 text-white px-8 py-2">
            طلب عرض
          </Button>
        </div>

        <button 
          className="md:hidden text-absher-dark" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg">
          <div className="flex flex-col space-y-4 text-center">
            <a href="#features" className="hover:text-absher-teal transition-colors py-2">الميزات</a>
            <a href="#modules" className="hover:text-absher-teal transition-colors py-2">الوحدات</a>
            <a href="#benefits" className="hover:text-absher-teal transition-colors py-2">المزايا</a>
            <a href="#contact" className="hover:text-absher-teal transition-colors py-2">تواصل معنا</a>
            <Button className="bg-absher-teal hover:bg-absher-teal/90 text-white">
              طلب عرض
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
