import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoFinal from '@/assets/logofinal.JPG';
import logoFinal2 from '@/assets/logofinal2.JPG';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Payment Policy', href: '/payment-policy' },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* Desktop Logo */}
            <img 
              src={logoFinal} 
              alt="OCS Opera Cleaning Specialists Logo" 
              className="hidden md:block h-16 w-auto"
            />
            {/* Mobile Logo */}
            <img 
              src={logoFinal2} 
              alt="OCS Opera Cleaning Specialists Logo" 
              className="md:hidden h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link ${location.pathname === link.href ? 'underline' : ''}`}
                style={{ 
                  color: location.pathname === link.href ? 'var(--primary)' : 'var(--neutral-dark)',
                  textDecorationColor: 'var(--primary)'
                }}
              >
                {link.name}
              </Link>
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-4 ml-8">
              <a
                href="tel:+61452367372"
                className="flex items-center space-x-2 btn-outline px-4 py-2 text-sm"
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/61452367372"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 btn-primary px-4 py-2 text-sm"
              >
                <MessageCircle size={16} />
                <span>Book Now</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="transition-colors p-2"
              style={{ color: 'var(--primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--secondary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary)'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--divider)' }}>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`mobile-nav-item nav-link ${location.pathname === link.href ? 'underline' : ''}`}
                  style={{ 
                    color: location.pathname === link.href ? 'var(--primary)' : 'var(--neutral-dark)',
                    textDecorationColor: 'var(--primary)'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="mobile-btn-stack px-4 mt-4">
                <a
                  href="tel:+61452367372"
                  className="flex items-center justify-center space-x-2 btn-outline"
                >
                  <Phone size={16} />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/61452367372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 btn-primary"
                >
                  <MessageCircle size={16} />
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;