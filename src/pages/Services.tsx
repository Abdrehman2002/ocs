import { 
  CookingPot, 
  Sparkles, 
  Home, 
  Truck, 
  Clock, 
  Zap,
  BrushIcon as Brush,
  Calendar,
  MessageCircle
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-cleaning.jpg';

const Services = () => {
  const services = [
    {
      icon: CookingPot,
      title: "Oven Cleaning",
      description: "Restore your oven's shine and remove built-up grease with our specialized deep cleaning techniques.",
      features: ["Deep degreasing", "Interior & exterior cleaning", "Safe, non-toxic products", "Streak-free finish"],
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "Window Cleaning",
      description: "Sparkling streak-free windows inside and out for crystal-clear views and natural light.",
      features: ["Interior & exterior cleaning", "Frame and sill cleaning", "Streak-free guarantee", "Weather-resistant treatment"],
      color: "accent-green"
    },
    {
      icon: Brush,
      title: "Dusting",
      description: "Detailed dust removal to improve air quality and appearance throughout your space.",
      features: ["All surfaces & furniture", "Electronics cleaning", "Ceiling fans & fixtures", "Allergy-safe methods"],
      color: "secondary"
    },
    {
      icon: Home,
      title: "Move In Cleaning",
      description: "Make your new space spotless before moving in with our comprehensive pre-occupancy service.",
      features: ["Deep sanitization", "Cabinet interior cleaning", "Floor deep clean", "Bathroom & kitchen focus"],
      color: "primary"
    },
    {
      icon: Sparkles,
      title: "New Home Cleaning",
      description: "Freshen up newly built or renovated homes, removing construction dust and debris.",
      features: ["Construction dust removal", "Paint splatter cleanup", "Window film removal", "Final touch polish"],
      color: "accent-green"
    },
    {
      icon: Calendar,
      title: "Tidying",
      description: "Quick and efficient general tidying of your space for immediate improvement.",
      features: ["Organization & decluttering", "Surface cleaning", "Bathroom quick clean", "Kitchen tidy-up"],
      color: "secondary"
    },
    {
      icon: Zap,
      title: "Steam Cleaning (by request)",
      description: "Deep cleaning for carpets, rugs, and upholstery using professional-grade steam equipment.",
      features: ["Carpet deep clean", "Upholstery refresh", "Stain removal", "Sanitization & deodorizing"],
      color: "primary"
    },
    {
      icon: Home,
      title: "House Cleaning",
      description: "Regular or one-off home cleaning tailored to your specific needs and preferences.",
      features: ["Customized cleaning plans", "All rooms included", "Regular maintenance", "Flexible scheduling"],
      color: "accent-green"
    },
    {
      icon: Truck,
      title: "Move In / Move Out Bond Cleaning",
      description: "Ensure your rental is inspection-ready with our comprehensive bond cleaning service.",
      features: ["Inspection guarantee", "Full property coverage", "Appliance cleaning", "Deposit protection"],
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Pay By The Hour Cleaning",
      description: "Flexible hourly cleaning for your specific needs - you control what gets cleaned and when.",
      features: ["Flexible time slots", "Custom task lists", "No minimum hours", "Transparent pricing"],
      color: "primary"
    }
  ];

  const getColorValue = (colorName: string) => {
    switch (colorName) {
      case 'primary': return 'var(--primary)';
      case 'accent-green': return 'var(--accent-green)';
      case 'secondary': return 'var(--secondary)';
      default: return 'var(--primary)';
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--neutral-dark)' }}>
                Comprehensive Cleaning Services for{' '}
                <span style={{ color: 'var(--primary)' }}>Every Need</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6" style={{ color: 'var(--text-dark)' }}>
                From routine maintenance to specialized deep cleaning, we deliver opera-level perfection 
                tailored to your specific requirements.
              </p>
              <div className="service-area-highlight mb-8">
                We proudly provide cleaning services <span className="highlight">all across Melbourne.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/61452367372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <MessageCircle size={20} />
                  <span>Get Free Quote</span>
                </a>
                <a
                  href="tel:+61452367372"
                  className="btn-outline inline-flex items-center justify-center"
                >
                  Call Us Today
                </a>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={heroImage}
                alt="Professional cleaning services"
                className="responsive-img h-64 sm:h-80 md:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>Services Offered</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-dark)' }}>
              Professional cleaning solutions designed to meet every need, from routine maintenance to specialized deep cleans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="p-4 rounded-2xl mb-6 inline-flex" style={{ backgroundColor: `${getColorValue(service.color)}15` }}>
                  <service.icon className="h-8 w-8" style={{ color: getColorValue(service.color) }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 transition-colors" style={{ color: 'var(--neutral-dark)' }}>
                  {service.title}
                </h3>
                
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                      <span style={{ color: 'var(--text-dark)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="https://wa.me/61452367372"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full btn-outline text-sm py-3"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="service-card text-center p-12">
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'var(--neutral-dark)' }}>
              Need a Custom Cleaning Solution?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-dark)' }}>
              Every space is unique. Contact us to discuss your specific cleaning needs 
              and get a personalized quote that fits your requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61452367372"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Consultation
              </a>
              <a
                href="tel:+61452367372"
                className="btn-outline"
              >
                Call for Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;