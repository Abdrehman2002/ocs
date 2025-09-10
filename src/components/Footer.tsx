import { Phone, MessageCircle, Mail, Facebook, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Contact', href: '/contact' },
    { name: 'Payment Policy', href: '/payment-policy' },
  ];

  const services = [
    { name: 'Oven Cleaning', href: '/services' },
    { name: 'Window Cleaning', href: '/services' },
    { name: 'Dusting', href: '/services' },
    { name: 'Move In Cleaning', href: '/services' },
    { name: 'New Home Cleaning', href: '/services' },
    { name: 'Tidying', href: '/services' },
    { name: 'Steam Cleaning (by request)', href: '/services' },
    { name: 'House Cleaning', href: '/services' },
    { name: 'Move In / Move Out Bond Cleaning', href: '/services' },
    { name: 'Pay By The Hour Cleaning', href: '/services' },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div 
        className="relative"
        style={{
          background: `linear-gradient(135deg, var(--neutral-dark) 0%, var(--secondary) 100%)`,
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10">
            <Sparkles size={24} style={{ color: 'var(--primary)' }} />
          </div>
          <div className="absolute top-20 right-20">
            <Sparkles size={32} style={{ color: 'var(--accent-green)' }} />
          </div>
          <div className="absolute bottom-10 left-1/3">
            <Sparkles size={20} style={{ color: 'var(--primary)' }} />
          </div>
        </div>

        <div className="relative z-10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Column 1 - Business Name & Tagline */}
            <div className="lg:pr-8">
              <div className="mb-8">
                {/* Business Name */}
                <h3 
                  className="text-xl sm:text-2xl font-bold mb-4 leading-tight"
                  style={{ color: 'var(--primary)' }}
                >
                  Opera Cleaning Specialists
                </h3>
                
                {/* Tagline */}
                <p 
                  className="leading-relaxed text-sm md:text-base text-white/90"
                >
                  Premium cleaning for homes and businesses across Melbourne.
                </p>
              </div>
            </div>

            {/* Column Divider */}
            <div className="hidden lg:block absolute left-1/4 top-16 bottom-16 w-px" 
                 style={{ backgroundColor: 'rgba(0, 180, 213, 0.15)' }}>
            </div>

            {/* Column 2 - Quick Links */}
            <div className="relative">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--primary)' }}>
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/80 hover:text-white transition-all duration-300 flex items-center group"
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                    >
                      <span 
                        className="w-2 h-2 rounded-full mr-3 transition-colors duration-300"
                        style={{ backgroundColor: 'var(--primary)' }}
                      ></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Divider */}
            <div className="hidden lg:block absolute left-2/4 top-16 bottom-16 w-px" 
                 style={{ backgroundColor: 'rgba(0, 180, 213, 0.15)' }}>
            </div>

            {/* Column 3 - Services */}
            <div className="relative">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--primary)' }}>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-white/70 hover:text-white text-sm transition-all duration-300 flex items-center group"
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)'}
                    >
                      <Sparkles 
                        size={12} 
                        className="mr-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: 'var(--accent-green)' }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column Divider */}
            <div className="hidden lg:block absolute left-3/4 top-16 bottom-16 w-px" 
                 style={{ backgroundColor: 'rgba(0, 180, 213, 0.15)' }}>
            </div>

            {/* Column 4 - Contact Info */}
            <div className="relative">
              <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--primary)' }}>
                Contact Info
              </h4>
              <div className="space-y-5">
                <a
                  href="https://wa.me/61497113976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 group"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <div 
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(0, 180, 213, 0.2)' }}
                  >
                    <MessageCircle size={16} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm opacity-75">Click here</div>
                  </div>
                </a>

                <a
                  href="tel:+61497113976"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 group"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <div 
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(36, 183, 108, 0.2)' }}
                  >
                    <Phone size={16} style={{ color: 'var(--accent-green)' }} />
                  </div>
                  <div>
                    <div className="font-medium">Call</div>
                    <div className="text-sm">+61 497 113 976</div>
                  </div>
                </a>

                <a
                  href="mailto:info.oper4@gmail.com"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 group"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <div 
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(0, 180, 213, 0.2)' }}
                  >
                    <Mail size={16} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm">info.oper4@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.facebook.com/share/14M81TstdSB/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white/80 hover:text-white transition-all duration-300 group"
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'}
                >
                  <div 
                    className="p-2 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: 'rgba(36, 183, 108, 0.2)' }}
                  >
                    <Facebook size={16} style={{ color: 'var(--accent-green)' }} />
                  </div>
                  <div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-sm">Opera Cleaning Specialists</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>

      {/* Bottom Bar - Solid Aqua */}
      <div className="text-white py-6" style={{ backgroundColor: 'var(--primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-white/90 text-sm font-medium">
              © {currentYear} Opera Cleaning Specialists. All Rights Reserved.
            </div>
            <div className="text-white/90 text-sm flex items-center font-medium">
              Designed by 
              <span className="text-red-300 mx-1 text-base">Abdur</span>
              for Opera cleaning experiences.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;