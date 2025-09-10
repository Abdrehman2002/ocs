import { Phone, MessageCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-cleaning.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-sm font-medium" style={{ color: 'var(--text-dark)' }}>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4" style={{ fill: 'var(--accent-green)', color: 'var(--accent-green)' }} />
                ))}
              </div>
              <span>Trusted by 500+ Happy Customers</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" style={{ color: 'var(--neutral-dark)' }}>
                Bringing Opera-Level{' '}
                <span style={{ color: 'var(--accent-green)' }}>Perfection</span>{' '}
                to Every Clean
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                Professional cleaning services tailored to homes, offices, and commercial spaces. 
                Experience the artistry of pristine cleanliness.
              </p>
              
              <div className="service-area-highlight">
                We proudly provide cleaning services <span className="highlight">all across Melbourne.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/61452367372"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 btn-primary text-lg"
              >
                <MessageCircle size={20} />
                <span>Book Now - WhatsApp</span>
              </a>
              
              <a
                href="tel:+61452367372"
                className="flex items-center justify-center space-x-3 btn-secondary text-lg"
              >
                <Phone size={20} />
                <span>Call +61 452 367 372</span>
              </a>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: 'var(--divider)' }}>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>100%</div>
                <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Satisfaction Guarantee</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold" style={{ color: 'var(--accent-green)' }}>Eco-Friendly</div>
                <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Safe Products Only</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-2xl font-bold" style={{ color: 'var(--secondary)' }}>24/7</div>
                <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Available Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-0">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImage}
                alt="Premium cleaning service - pristine home interior"
                className="responsive-img"
              />
              
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 text-white px-6 py-3 rounded-2xl shadow-lg transform rotate-12" style={{ backgroundColor: 'var(--accent-green)' }}>
              <div className="text-sm font-semibold">Opera-Level</div>
              <div className="text-xs">Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;