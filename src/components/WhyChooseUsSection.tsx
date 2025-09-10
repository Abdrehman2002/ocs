import { 
  Shield, 
  Leaf, 
  Calendar, 
  DollarSign, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import luxuryHomeImage from '@/assets/luxury-home-cleaning.jpg';

const WhyChooseUsSection = () => {
  const getColorValue = (colorName: string) => {
    switch (colorName) {
      case 'primary': return 'var(--primary)';
      case 'accent-green': return 'var(--accent-green)';
      case 'secondary': return 'var(--secondary)';
      default: return 'var(--primary)';
    }
  };

  const features = [
    {
      icon: Shield,
      title: "Trusted Professionals",
      description: "All cleaners are fully vetted and trained for consistency and quality.",
      color: "accent-green"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning",
      description: "We use safe, eco-conscious products that are family & pet friendly.",
      color: "secondary"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "We work around your lifestyle with convenient time slots.",
      color: "accent-green"
    },
    {
      icon: DollarSign,
      title: "Affordable & Transparent Pricing",
      description: "No hidden costs, just clear and fair rates.",
      color: "secondary"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Satisfaction",
      description: "If you're not 100% happy, we'll make it right.",
      color: "accent-green"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24" style={{ backgroundColor: 'white' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>
                Why Choose Opera Cleaning Specialists?
              </h2>
              <div className="h-1 w-32 mb-8" style={{ backgroundColor: 'var(--primary)' }}></div>
              <p className="text-xl leading-relaxed" style={{ color: 'rgba(0, 60, 132, 0.8)' }}>
                Choosing the right cleaning partner isn't just about a tidy space — it's about trust, reliability, and peace of mind. At Opera Cleaning Specialists, we go beyond the basics to deliver an experience that feels effortless, safe, and premium every time.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div 
                    className="p-3 rounded-xl flex-shrink-0" 
                    style={{ backgroundColor: `${getColorValue(feature.color)}15` }}
                  >
                    <feature.icon className="h-6 w-6" style={{ color: getColorValue(feature.color) }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--neutral-dark)' }}>
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Line */}
            <div className="mb-8">
              <p className="text-lg font-medium leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                <Sparkles className="inline h-5 w-5 mr-2" style={{ color: 'var(--accent-green)' }} />
                With Opera Cleaning Specialists, you're not just getting a clean home — you're getting more free time, peace of mind, and the assurance that every corner will shine.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/services"
                className="inline-flex items-center space-x-3 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                <span>Discover the Opera Difference</span>
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img 
              src={luxuryHomeImage} 
              alt="Sparkling clean home with happy family"
              className="responsive-img h-64 sm:h-80 md:h-96 lg:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Sparkle overlays */}
            <div className="absolute top-6 right-6">
              <Sparkles size={32} className="text-white opacity-80" />
            </div>
            <div className="absolute bottom-8 left-8">
              <Sparkles size={24} className="text-white opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;