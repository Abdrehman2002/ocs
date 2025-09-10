import { 
  Shield, 
  Calendar, 
  Leaf, 
  CheckCircle, 
  DollarSign, 
  Users,
  MessageCircle,
  Star
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import luxuryHomeImage from '@/assets/luxury-home-cleaning.jpg';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Professional & Vetted Team",
      description: "Every cleaner is background-checked, trained, and committed to excellence. We ensure you can trust our professionals in your home or business.",
      features: [
        "Comprehensive background checks",
        "Professional training programs",
        "Fully insured & bonded",
        "Regular performance evaluations"
      ]
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Weekly, fortnightly, or one-off services tailored to you. We work around your schedule with convenient booking times.",
      features: [
        "Weekly & fortnightly options",
        "One-time cleaning available",
        "Weekend availability",
        "Emergency cleaning services"
      ]
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Approach",
      description: "Non-toxic cleaning products safe for families and pets while delivering exceptional cleaning results.",
      features: [
        "100% non-toxic products",
        "Safe for children & pets",
        "Environmentally responsible",
        "Allergen-friendly options"
      ]
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction Guarantee",
      description: "If you're not happy, we'll make it right. We return within 24 hours to re-clean at no additional cost.",
      features: [
        "24-hour response guarantee",
        "Free re-cleaning service",
        "No additional charges",
        "Your satisfaction is our priority"
      ]
    },
    {
      icon: DollarSign,
      title: "Transparent & Affordable Pricing",
      description: "No hidden fees, honest service. Clear pricing structure with no surprises on your final bill.",
      features: [
        "Upfront pricing quotes",
        "No hidden fees",
        "Competitive rates",
        "Multiple payment options"
      ]
    },
    {
      icon: Users,
      title: "Trusted by Families & Businesses",
      description: "Reliable cleaning for both homes and offices. Over 500 satisfied customers trust us with their spaces.",
      features: [
        "Residential cleaning expertise",
        "Commercial cleaning services",
        "500+ happy customers",
        "Local community trusted"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Residential Customer",
      rating: 5,
      comment: "Opera Cleaning Specialists transformed our home! Their attention to detail is incredible, and I love that they use eco-friendly products safe for my kids."
    },
    {
      name: "Michael Chen",
      location: "Business Owner",
      rating: 5,
      comment: "Professional, reliable, and thorough. They've been cleaning our office for 2 years now, and we couldn't be happier with their service."
    },
    {
      name: "Emma Wilson",
      location: "New Home Owner",
      rating: 5,
      comment: "The move-in cleaning was perfect! They made our new house feel truly ready for our family. Highly recommend their services."
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--neutral-dark)' }}>
              Why Families & Businesses Trust{' '}
              <span style={{ color: 'var(--primary)' }}>Opera Cleaning Specialists</span>
            </h1>
            <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--text-dark)' }}>
              Experience the difference that professional, passionate cleaning makes. 
              We're not just another cleaning service — we're your partners in creating pristine spaces.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>500+</div>
              <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--accent-green)' }}>5+</div>
              <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary)' }}>100%</div>
              <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: 'var(--secondary)' }}>24/7</div>
              <div className="text-sm" style={{ color: 'var(--text-dark)' }}>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className="service-card">
                <div className="p-4 rounded-2xl mb-6 inline-flex" style={{ backgroundColor: 'rgba(0, 180, 213, 0.1)' }}>
                  <reason.icon className="h-8 w-8" style={{ color: 'var(--primary)' }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>
                  {reason.title}
                </h3>
                
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-dark)' }}>
                  {reason.description}
                </p>

                <ul className="space-y-2">
                  {reason.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--accent-green)' }}></div>
                      <span style={{ color: 'var(--text-dark)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--neutral-dark)' }}>What Our Customers Say</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-dark)' }}>
              Don't just take our word for it – hear from real customers who've experienced our opera-level cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="service-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{ color: 'var(--accent-green)' }} />
                  ))}
                </div>
                
                <blockquote className="mb-4 italic" style={{ color: 'var(--text-dark)' }}>
                  "{testimonial.comment}"
                </blockquote>
                
                <div>
                  <div className="font-semibold" style={{ color: 'var(--neutral-dark)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-dark)' }}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 lg:p-12 text-center text-white overflow-hidden" style={{ backgroundColor: 'var(--primary)' }}>
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={luxuryHomeImage}
                alt="Luxury home cleaning background"
                className="w-full h-full object-cover opacity-10"
              />
              <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 180, 213, 0.9)' }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Experience Opera-Level Cleaning?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied customers who trust us to keep their spaces 
                pristine. Get your free quote today and see the difference quality makes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/61497113976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white px-8 py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                  style={{ color: 'var(--primary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <MessageCircle size={20} />
                  <span>Book Now - WhatsApp</span>
                </a>
                <a
                  href="tel:+61497113976"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold transition-colors"
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = 'var(--primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'white'; }}
                >
                  Call for Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;